"use client";

import { useState, useCallback, useRef, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
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

// ── Course catalogue for test picker ─────────────────────────────────────

const COURSES = [
  { id: "accident-investigation", title: "Accident Investigation", questions: 12, standard: "29 CFR 1960.29" },
  { id: "back-safety", title: "Back Safety", questions: 12, standard: "OSHA Back Safety" },
  { id: "bloodborne-pathogens", title: "Bloodborne Pathogens", questions: 15, standard: "29 CFR 1910.1030" },
  { id: "electrical-safety", title: "Electrical Safety", questions: 12, standard: "29 CFR 1910 Subpart S" },
  { id: "emergency-planning", title: "Emergency Planning", questions: 15, standard: "29 CFR 1910.38" },
  { id: "evacuation-procedures", title: "Evacuation Procedures", questions: 12, standard: "29 CFR 1910 Subpart E" },
  { id: "industrial-fire-prevention", title: "Industrial Fire Prevention", questions: 12, standard: "29 CFR 1910.157" },
  { id: "industrial-lso", title: "Industrial LSO Master Quiz", questions: 68, standard: "ANSI Z136" },
  { id: "industrial-laser-tech", title: "Industrial Laser Tech", questions: 43, standard: "ANSI Z136" },
  { id: "osha-1910-178", title: "Forklift Safety", questions: 43, standard: "29 CFR 1910.178" },
  { id: "osha-general-industry-intro", title: "Introduction to OSHA: General Industry", questions: 10, standard: "29 CFR Part 1910" },
  { id: "personal-protective-equipment", title: "Personal Protective Equipment", questions: 15, standard: "29 CFR 1910.132–138" },
  { id: "safety-orientation-accident-investigation", title: "Accident Investigation (v2)", questions: 15, standard: "29 CFR 1960.29" },
  { id: "walking-working-surfaces", title: "Walking and Working Surfaces", questions: 12, standard: "29 CFR 1910 Subpart D" },
  { id: "hazard-communication", title: "Hazard Communication", questions: 15, standard: "29 CFR 1910.1200" },
  { id: "hazardous-materials-labels", title: "Hazardous Materials Labels", questions: 15, standard: "29 CFR 1910.1200 / DOT 49 CFR" },
  { id: "hazardous-spills", title: "Dealing with Hazardous Spills", questions: 15, standard: "29 CFR 1910.120" },
  { id: "materials-handling-safety", title: "Materials Handling Safety", questions: 15, standard: "1910 Subpart N / 1910.176" },
  { id: "warehouse-safety", title: "Warehouse Safety: Storage, Rigging & Waste Disposal", questions: 15, standard: "29 CFR 1926 Subpart H" },
  { id: "machine-guard-safety", title: "Machine Guard Safety", questions: 15, standard: "29 CFR 1910 Subpart O / 1910.212" },
  { id: "industrial-hygiene", title: "Introduction to Industrial Hygiene", questions: 15, standard: "OSHA Industrial Hygiene / General Duty Clause" },
  { id: "bloodborne-pathogens-commercial", title: "Bloodborne Pathogens: Commercial & Industrial", questions: 15, standard: "29 CFR 1910.1030" },
  { id: "industrial-ergonomics", title: "Industrial Ergonomics", questions: 15, standard: "29 CFR 1910.900 / General Duty Clause" },
  { id: "office-ergonomics", title: "Office Ergonomics", questions: 15, standard: "29 CFR 1910.900 / General Duty Clause" },
  { id: "injury-illness-prevention", title: "I2P2: Injury and Illness Prevention Programs", questions: 15, standard: "29 CFR Part 1904" },
  { id: "osha-construction-intro", title: "Introduction to OSHA for Construction", questions: 15, standard: "29 CFR Part 1926" },
  { id: "safety-orientation-construction", title: "Safety Orientation in Construction Environments", questions: 15, standard: "29 CFR 1926 Subparts C, D, E, F, G, I, J, K, L, M" },
  { id: "electrocution-hazards-construction-1", title: "Electrocution Hazards in Construction Part I: Worksite Safety", questions: 15, standard: "29 CFR 1926 Subpart K / 1926.1408" },
  { id: "electrocution-hazards-construction-2", title: "Electrocution Hazards in Construction Part II: Employer Responsibilities", questions: 15, standard: "29 CFR 1926 Subpart K / 1926.403, 1926.416, 1926.1408" },
  { id: "struck-by-hazards-construction", title: "Struck-By Hazards in Construction Environments", questions: 15, standard: "29 CFR 1910.28" },
];

// ── Local course loader (test mode — no session required) ─────────────────

async function loadLocalCourse(courseId: string): Promise<CourseContent> {
  const res = await fetch(`/api/course/local?courseId=${encodeURIComponent(courseId)}`);
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error((body as { error?: string }).error ?? `HTTP ${res.status}`);
  }
  return res.json() as Promise<CourseContent>;
}

// ── Shared screens ────────────────────────────────────────────────────────

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

// ── Home screen ───────────────────────────────────────────────────────────

function HomeScreen({ onSelect }: { onSelect: (courseId: string) => void }) {
  return (
    <main className="min-h-screen bg-industrial-50">
      <header className="bg-industrial-900 text-white px-6 py-5 shadow-md">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3">
            <span className="text-3xl">&#9888;</span>
            <div>
              <h1 className="font-bold text-xl leading-tight">OSHA Course Test Environment</h1>
              <p className="text-industrial-400 text-sm">Select a course to preview</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <p className="text-industrial-500 text-sm mb-6">
          {COURSES.length} courses available &mdash; session authentication is bypassed in test mode
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {COURSES.map((course) => (
            <button
              key={course.id}
              onClick={() => onSelect(course.id)}
              className="bg-white rounded-2xl border border-industrial-100 shadow-sm hover:shadow-md hover:border-safety-orange/40 transition-all text-left p-5 group"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <h2 className="font-semibold text-industrial-900 text-base leading-snug group-hover:text-safety-orange transition-colors">
                  {course.title}
                </h2>
                <span className="shrink-0 bg-industrial-100 text-industrial-600 text-xs font-medium px-2 py-0.5 rounded-full">
                  {course.questions}Q
                </span>
              </div>
              <p className="text-industrial-400 text-xs">{course.standard}</p>
            </button>
          ))}
        </div>
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

// ── Exam component ────────────────────────────────────────────────────────

function ExamPage({ session, courseId, onBack }: { session: string; courseId: string; onBack: () => void }) {
  const isTestMode = !session;

  const [courseContent, setCourseContent] = useState<CourseContent | null>(null);
  const [courseError, setCourseError] = useState<string | null>(null);
  const [state, setState] = useState<ExamState>(getInitialState);
  const [isCompleting, setIsCompleting] = useState(false);
  const [completionError, setCompletionError] = useState<string | null>(null);

  const attemptIdRef = useRef<string>(generateAttemptId());
  const completionSentRef = useRef<boolean>(false);

  // ── Parent-frame height reporting (iframe resize support) ────────────────
  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (e.origin !== "https://secure.certifyme.net") return;
      parent.postMessage("height:" + document.documentElement.scrollHeight, "*");
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  // ── Load course on mount ──────────────────────────────────────────────
  useEffect(() => {
    if (isTestMode) {
      loadLocalCourse(courseId)
        .then(setCourseContent)
        .catch((err: Error) => setCourseError(err.message));
    } else {
      loadCourse(session)
        .then(setCourseContent)
        .catch((err: Error) => setCourseError(err.message));
    }
  }, [isTestMode, session, courseId]);

  const questions = courseContent?.questions ?? [];
  const totalQuestions = questions.length;
  const resolvedCourseId = courseContent?.meta.courseId ?? courseId;
  const currentQuestion = questions[state.currentQuestionIndex];

  // ── Select an answer option ─────────────────────────────────────────
  const handleSelectAnswer = useCallback((answerId: string) => {
    setState((prev) => ({ ...prev, selectedAnswerId: answerId }));
  }, []);

  // ── Submit the selected answer ──────────────────────────────────────
  const handleSubmit = useCallback(async () => {
    if (!state.selectedAnswerId || !currentQuestion) return;

    const isCorrect = state.selectedAnswerId === currentQuestion.correctOptionId;

    setState((prev) => ({ ...prev, showFeedback: true }));
    await new Promise((resolve) => setTimeout(resolve, 1200));

    if (isCorrect) {
      const answeredSoFar = state.currentQuestionIndex + 1;
      const scoreSoFar = state.score + 1;
      sendCourseEvent(attemptIdRef.current, "question_correct", session, resolvedCourseId, {
        pageId: `q-${currentQuestion.id}`,
        questionId: currentQuestion.id,
        correctCount: scoreSoFar,
        totalQuestions: answeredSoFar,
      });
      sendCourseEvent(attemptIdRef.current, "page_next", session, resolvedCourseId, {
        pageId: `q-${currentQuestion.id}`,
        correctCount: scoreSoFar,
        totalQuestions: answeredSoFar,
      });

      const nextIndex = state.currentQuestionIndex + 1;
      if (nextIndex >= totalQuestions) {
        sendCourseEvent(attemptIdRef.current, "exam_submitted", session, resolvedCourseId, {
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
      sendCourseEvent(attemptIdRef.current, "question_incorrect", session, resolvedCourseId, {
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
  }, [state, currentQuestion, session, resolvedCourseId, courseContent, totalQuestions]);

  // ── Remediation: answered correctly ────────────────────────────────
  const handleRemediationCorrect = useCallback(() => {
    sendCourseEvent(attemptIdRef.current, "page_next", session, resolvedCourseId, {
      pageId: `q-${currentQuestion?.id}`,
      correctCount: state.score,
      totalQuestions: state.currentQuestionIndex + 1,
    });

    const nextIndex = state.currentQuestionIndex + 1;
    if (nextIndex >= totalQuestions) {
      sendCourseEvent(attemptIdRef.current, "exam_submitted", session, resolvedCourseId, {
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
  }, [state.currentQuestionIndex, state.score, totalQuestions, session, resolvedCourseId, currentQuestion]);

  // ── Remediation: answered incorrectly ──────────────────────────────
  const handleRemediationIncorrect = useCallback(() => {
    setState((prev) => ({
      ...prev,
      isRemediating: false,
      remediationPayload: null,
      selectedAnswerId: null,
      showFeedback: false,
    }));
  }, []);

  // ── Complete the course ─────────────────────────────────────────────
  const handleComplete = useCallback(async () => {
    if (isTestMode) return; // test mode: just show results, no API call
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
        resolvedCourseId,
      );
      window.location.href = redirectUrl;
    } catch (err) {
      console.error("[CourseAPI] Completion failed:", err);
      completionSentRef.current = false;
      setIsCompleting(false);
      setCompletionError("Failed to complete course. Please try again.");
    }
  }, [isTestMode, state.score, totalQuestions, session, resolvedCourseId]);

  useEffect(() => {
    if (state.isComplete) handleComplete();
  }, [state.isComplete, handleComplete]);

  // ── Restart ─────────────────────────────────────────────────────────
  const handleRestart = useCallback(() => {
    attemptIdRef.current = generateAttemptId();
    completionSentRef.current = false;
    setIsCompleting(false);
    setCompletionError(null);
    setState(getInitialState());
  }, []);

  // ── Render ──────────────────────────────────────────────────────────
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
            {isTestMode && (
              <button
                onClick={onBack}
                className="text-industrial-400 hover:text-white transition-colors mr-1 text-sm"
                title="Back to course list"
              >
                &#8592;
              </button>
            )}
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
              courseTitle={courseTitle}
              onBackToCourses={isTestMode ? onBack : undefined}
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

// ── App router — home vs exam ─────────────────────────────────────────────

function AppContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const session = searchParams.get("session") ?? "";
  const courseId = searchParams.get("courseId") ?? "";

  const handleSelect = useCallback(
    (id: string) => router.push(`/?courseId=${encodeURIComponent(id)}`),
    [router],
  );

  const handleBack = useCallback(() => router.push("/"), [router]);

  if (!session && !courseId) {
    return <HomeScreen onSelect={handleSelect} />;
  }

  return (
    <ExamPage
      session={session}
      courseId={courseId}
      onBack={handleBack}
    />
  );
}

// ── Root export — Suspense required for useSearchParams ───────────────────

export default function Page() {
  return (
    <Suspense fallback={<LoadingScreen message="Loading..." />}>
      <AppContent />
    </Suspense>
  );
}
