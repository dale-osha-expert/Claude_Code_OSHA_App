"use client";

import { useState, useCallback, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ExamState, RemediationPayload, CourseContent } from "@/lib/types";
import { simulateRemediation } from "@/lib/remediation";
import {
  generateAttemptId,
  loadCourse,
  sendCourseEvent,
  sendCourseComplete,
} from "@/lib/courseApi";
import ProgressBar from "@/components/ProgressBar";
import QuestionCard from "@/components/QuestionCard";
import RemediationModal from "@/components/RemediationModal";
import ResultsScreen from "@/components/ResultsScreen";

// ── Loading screen ────────────────────────────────────────────────────────

function LoadingScreen({ message }: { message: string }) {
  return (
    <main className="min-h-screen bg-industrial-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin h-12 w-12 border-4 border-safety-orange border-t-transparent rounded-full mx-auto mb-4" />
        <p className="text-industrial-600 font-medium">{message}</p>
      </div>
    </main>
  );
}

// ── Error screen ──────────────────────────────────────────────────────────

function ErrorScreen({ message }: { message: string }) {
  return (
    <main className="min-h-screen bg-industrial-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg border border-red-100 p-10 max-w-md text-center">
        <span className="text-4xl mb-4 block">&#9888;</span>
        <h2 className="text-xl font-bold text-industrial-900 mb-2">Unable to load course</h2>
        <p className="text-industrial-600 text-sm">{message}</p>
      </div>
    </main>
  );
}

// ── Exam state helpers ────────────────────────────────────────────────────

function getInitialState(): ExamState {
  return {
    currentQuestionIndex: 0,
    score: 0,
    isRemediating: false,
    remediationPayload: null,
    answeredCorrectly: [],
    isComplete: false,
    isLoading: false,
    selectedAnswerId: null,
    showFeedback: false,
  };
}

// ── Main exam component ───────────────────────────────────────────────────

function ExamPage() {
  const searchParams = useSearchParams();
  const session = searchParams.get("session") ?? "";

  const [courseContent, setCourseContent] = useState<CourseContent | null>(null);
  const [courseError, setCourseError] = useState<string | null>(null);
  const [state, setState] = useState<ExamState>(getInitialState);
  const [isCompleting, setIsCompleting] = useState(false);
  const [completionError, setCompletionError] = useState<string | null>(null);

  const attemptIdRef = useRef<string>(generateAttemptId());
  const completionSentRef = useRef<boolean>(false);

  // ── Load course on mount ────────────────────────────────────────────────
  useEffect(() => {
    if (!session) {
      setCourseError("No session provided. Please access this course through the correct link.");
      return;
    }

    loadCourse(session)
      .then(setCourseContent)
      .catch((err: Error) => setCourseError(err.message));
  }, [session]);

  const questions = courseContent?.questions ?? [];
  const totalQuestions = questions.length;
  const courseId = courseContent?.meta.courseId ?? "";
  const currentQuestion = questions[state.currentQuestionIndex];

  // ── Select an answer option ───────────────────────────────────────────
  const handleSelectAnswer = useCallback((answerId: string) => {
    setState((prev) => ({ ...prev, selectedAnswerId: answerId }));
  }, []);

  // ── Submit the selected answer ────────────────────────────────────────
  const handleSubmit = useCallback(async () => {
    if (!state.selectedAnswerId || !currentQuestion) return;

    const isCorrect = state.selectedAnswerId === currentQuestion.correctOptionId;

    setState((prev) => ({ ...prev, showFeedback: true }));
    await new Promise((resolve) => setTimeout(resolve, 1200));

    if (isCorrect) {
      const answeredSoFar = state.currentQuestionIndex + 1;
      const scoreSoFar = state.score + 1;
      sendCourseEvent(attemptIdRef.current, "question_correct", session, courseId, {
        pageId: `q-${currentQuestion.id}`,
        questionId: currentQuestion.id,
        correctCount: scoreSoFar,
        totalQuestions: answeredSoFar,
      });
      sendCourseEvent(attemptIdRef.current, "page_next", session, courseId, {
        pageId: `q-${currentQuestion.id}`,
        correctCount: scoreSoFar,
        totalQuestions: answeredSoFar,
      });

      const nextIndex = state.currentQuestionIndex + 1;
      if (nextIndex >= totalQuestions) {
        sendCourseEvent(attemptIdRef.current, "exam_submitted", session, courseId, {
          correctCount: state.score + 1,
          totalQuestions,
        });
        setState((prev) => ({
          ...prev,
          score: prev.score + 1,
          answeredCorrectly: [...prev.answeredCorrectly, true],
          isComplete: true,
          showFeedback: false,
          selectedAnswerId: null,
        }));
      } else {
        setState((prev) => ({
          ...prev,
          currentQuestionIndex: nextIndex,
          score: prev.score + 1,
          answeredCorrectly: [...prev.answeredCorrectly, true],
          showFeedback: false,
          selectedAnswerId: null,
        }));
      }
    } else {
      sendCourseEvent(attemptIdRef.current, "question_incorrect", session, courseId, {
        pageId: `q-${currentQuestion.id}`,
        questionId: currentQuestion.id,
        correctCount: state.score,
        totalQuestions: state.currentQuestionIndex + 1,
      });

      setState((prev) => ({ ...prev, isLoading: true }));

      const payload: RemediationPayload = await simulateRemediation(
        currentQuestion,
        courseContent ?? undefined,
      );

      setState((prev) => ({
        ...prev,
        isRemediating: true,
        remediationPayload: payload,
        isLoading: false,
        showFeedback: false,
        selectedAnswerId: null,
      }));
    }
  }, [state, currentQuestion, session, courseId, courseContent, totalQuestions]);

  // ── Remediation: answered correctly ──────────────────────────────────
  const handleRemediationCorrect = useCallback(() => {
    sendCourseEvent(attemptIdRef.current, "page_next", session, courseId, {
      pageId: `q-${currentQuestion?.id}`,
      correctCount: state.score,
      totalQuestions: state.currentQuestionIndex + 1,
    });

    const nextIndex = state.currentQuestionIndex + 1;
    if (nextIndex >= totalQuestions) {
      sendCourseEvent(attemptIdRef.current, "exam_submitted", session, courseId, {
        correctCount: state.score,
        totalQuestions,
      });
      setState((prev) => ({
        ...prev,
        isRemediating: false,
        remediationPayload: null,
        answeredCorrectly: [...prev.answeredCorrectly, false],
        isComplete: true,
      }));
    } else {
      setState((prev) => ({
        ...prev,
        currentQuestionIndex: nextIndex,
        isRemediating: false,
        remediationPayload: null,
        answeredCorrectly: [...prev.answeredCorrectly, false],
      }));
    }
  }, [state.currentQuestionIndex, state.score, totalQuestions, session, courseId, currentQuestion]);

  // ── Remediation: answered incorrectly ────────────────────────────────
  const handleRemediationIncorrect = useCallback(() => {
    setState((prev) => ({
      ...prev,
      isRemediating: false,
      remediationPayload: null,
      selectedAnswerId: null,
      showFeedback: false,
    }));
  }, []);

  // ── Complete the course ───────────────────────────────────────────────
  const handleComplete = useCallback(async () => {
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    setIsCompleting(true);
    setCompletionError(null);

    try {
      const redirectUrl = await sendCourseComplete(
        attemptIdRef.current,
        state.score,
        totalQuestions,
        session,
        courseId,
      );
      window.location.href = redirectUrl;
    } catch (err) {
      console.error("[CourseAPI] Completion failed:", err);
      completionSentRef.current = false;
      setIsCompleting(false);
      setCompletionError("Failed to complete course. Please try again.");
    }
  }, [state.score, totalQuestions, session, courseId]);

  useEffect(() => {
    if (state.isComplete) handleComplete();
  }, [state.isComplete, handleComplete]);

  // ── Restart ───────────────────────────────────────────────────────────
  const handleRestart = useCallback(() => {
    attemptIdRef.current = generateAttemptId();
    completionSentRef.current = false;
    setIsCompleting(false);
    setCompletionError(null);
    setState(getInitialState());
  }, []);

  // ── Render: loading / error / exam ────────────────────────────────────
  if (courseError) return <ErrorScreen message={courseError} />;
  if (!courseContent) return <LoadingScreen message="Loading your course..." />;

  const courseTitle = courseContent.meta.title;
  const oshaStandard = courseContent.meta.oshaStandard;

  return (
    <main className="min-h-screen bg-industrial-50 flex flex-col">
      {/* Top bar */}
      <header className="bg-industrial-900 text-white px-6 py-4 shadow-md">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">&#9888;</span>
            <div>
              <h1 className="font-bold text-lg leading-tight">{courseTitle}</h1>
              <p className="text-industrial-400 text-xs">{oshaStandard}</p>
            </div>
          </div>
          {!state.isComplete && (
            <span className="text-xs bg-industrial-700 px-3 py-1 rounded-full">
              {currentQuestion?.difficulty.toUpperCase()}
            </span>
          )}
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 flex items-start justify-center px-4 py-8">
        <div className="w-full max-w-2xl">
          {state.isComplete ? (
            <ResultsScreen
              score={state.score}
              totalQuestions={totalQuestions}
              onRestart={handleRestart}
              isCompleting={isCompleting}
              completionError={completionError}
              onRetryComplete={handleComplete}
            />
          ) : (
            <>
              <ProgressBar
                currentIndex={state.currentQuestionIndex}
                totalQuestions={totalQuestions}
                difficulty={currentQuestion.difficulty}
                score={state.score}
              />

              {state.isLoading ? (
                <div className="bg-white rounded-2xl shadow-lg border border-industrial-100 p-12 text-center">
                  <div className="animate-spin h-10 w-10 border-4 border-safety-orange border-t-transparent rounded-full mx-auto mb-4" />
                  <p className="text-industrial-600 font-medium">
                    Preparing remediation lesson...
                  </p>
                </div>
              ) : (
                <QuestionCard
                  question={currentQuestion}
                  selectedAnswerId={state.selectedAnswerId}
                  showFeedback={state.showFeedback}
                  onSelectAnswer={handleSelectAnswer}
                  onSubmit={handleSubmit}
                />
              )}
            </>
          )}
        </div>
      </div>

      {/* Remediation modal overlay */}
      {state.isRemediating && state.remediationPayload && (
        <RemediationModal
          key={JSON.stringify(state.remediationPayload)}
          payload={state.remediationPayload}
          onAnswerCorrectly={handleRemediationCorrect}
          onAnswerIncorrectly={handleRemediationIncorrect}
        />
      )}

      {/* Footer */}
      <footer className="bg-industrial-900 text-industrial-500 text-center text-xs py-3">
        {oshaStandard}
      </footer>
    </main>
  );
}

// ── Root export — Suspense required for useSearchParams ───────────────────

export default function Page() {
  return (
    <Suspense fallback={<LoadingScreen message="Loading your course..." />}>
      <ExamPage />
    </Suspense>
  );
}
