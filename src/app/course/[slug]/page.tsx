"use client";

import { useState, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { ExamState, RemediationPayload } from "@/lib/types";
import { getCourseBySlug } from "@/lib/courses";
import { simulateRemediation } from "@/lib/remediation";
import ProgressBar from "@/components/ProgressBar";
import QuestionCard from "@/components/QuestionCard";
import RemediationModal from "@/components/RemediationModal";
import ResultsScreen from "@/components/ResultsScreen";

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

export default function CoursePage() {
  const params = useParams();
  const router = useRouter();
  const slug = typeof params.slug === "string" ? params.slug : params.slug?.[0] ?? "";

  const course = getCourseBySlug(slug);

  const [state, setState] = useState<ExamState>(getInitialState);

  const questions = course?.questions ?? [];
  const totalQuestions = questions.length;
  const currentQuestion = questions[state.currentQuestionIndex];

  // ── Select an answer ──────────────────────────────────────────────────────
  const handleSelectAnswer = useCallback((answerId: string) => {
    setState((prev) => ({ ...prev, selectedAnswerId: answerId }));
  }, []);

  // ── Submit answer ─────────────────────────────────────────────────────────
  const handleSubmit = useCallback(async () => {
    if (!state.selectedAnswerId || !currentQuestion) return;

    const isCorrect = state.selectedAnswerId === currentQuestion.correctOptionId;

    setState((prev) => ({ ...prev, showFeedback: true }));
    await new Promise((resolve) => setTimeout(resolve, 1200));

    if (isCorrect) {
      const nextIndex = state.currentQuestionIndex + 1;
      if (nextIndex >= totalQuestions) {
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
      setState((prev) => ({ ...prev, isLoading: true }));
      const payload: RemediationPayload = await simulateRemediation(
        currentQuestion,
        course?.lessons
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
  }, [state.selectedAnswerId, state.currentQuestionIndex, currentQuestion, totalQuestions, course?.lessons]);

  // ── Remediation correct ───────────────────────────────────────────────────
  const handleRemediationCorrect = useCallback(() => {
    const nextIndex = state.currentQuestionIndex + 1;
    if (nextIndex >= totalQuestions) {
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
  }, [state.currentQuestionIndex, totalQuestions]);

  // ── Remediation incorrect — re-show lesson ────────────────────────────────
  const handleRemediationIncorrect = useCallback(() => {
    setState((prev) => ({
      ...prev,
      remediationPayload: prev.remediationPayload
        ? { ...prev.remediationPayload }
        : null,
    }));
  }, []);

  // ── Restart exam ──────────────────────────────────────────────────────────
  const handleRestart = useCallback(() => {
    setState(getInitialState());
  }, []);

  // ── Course not found ──────────────────────────────────────────────────────
  if (!course) {
    return (
      <main className="min-h-screen bg-industrial-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg border border-industrial-100 p-10 text-center max-w-md">
          <div className="text-5xl mb-4">&#9888;</div>
          <h1 className="text-xl font-bold text-industrial-900 mb-2">Course Not Found</h1>
          <p className="text-industrial-500 text-sm mb-6">
            The course <span className="font-mono">{slug}</span> does not exist.
          </p>
          <button
            onClick={() => router.push("/")}
            className="bg-safety-orange hover:bg-safety-orange/90 text-white font-bold py-2 px-6 rounded-xl transition-colors"
          >
            Back to Courses
          </button>
        </div>
      </main>
    );
  }

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <main className="min-h-screen bg-industrial-50 flex flex-col">
      {/* Header */}
      <header className="bg-industrial-900 text-white px-6 py-4 shadow-md">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push("/")}
              className="text-industrial-400 hover:text-white transition-colors text-sm mr-1"
              aria-label="Back to courses"
            >
              &#8592;
            </button>
            <div>
              <h1 className="font-bold text-base leading-tight">{course.title}</h1>
              <p className="text-industrial-400 text-xs">
                {course.oshaRefs[0]} — {course.productLine}
              </p>
            </div>
          </div>
          {!state.isComplete && currentQuestion && (
            <span className="text-xs bg-industrial-700 px-3 py-1 rounded-full">
              {currentQuestion.difficulty.toUpperCase()}
            </span>
          )}
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 flex items-start justify-center px-4 py-8">
        <div className="w-full max-w-2xl">
          {state.isComplete ? (
            <div className="space-y-4">
              <ResultsScreen
                score={state.score}
                totalQuestions={totalQuestions}
                onRestart={handleRestart}
              />
              <button
                onClick={() => router.push("/")}
                className="w-full border-2 border-industrial-300 hover:border-industrial-500 text-industrial-600 hover:text-industrial-900 font-semibold py-3 px-6 rounded-xl transition-colors"
              >
                &#8592; Back to Course Catalog
              </button>
            </div>
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

      {/* Remediation modal */}
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
        {course.oshaRefs.join(" · ")} — MARCOM Safety Certifications
      </footer>
    </main>
  );
}
