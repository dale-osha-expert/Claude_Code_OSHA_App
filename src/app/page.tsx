"use client";

import { useState, useCallback } from "react";
import { ExamState, RemediationPayload } from "@/lib/types";
import { BASE_QUESTIONS } from "@/lib/questions";
import { simulateRemediation } from "@/lib/remediation";
import ProgressBar from "@/components/ProgressBar";
import QuestionCard from "@/components/QuestionCard";
import RemediationModal from "@/components/RemediationModal";
import ResultsScreen from "@/components/ResultsScreen";

const TOTAL_QUESTIONS = BASE_QUESTIONS.length;

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

export default function ExamPage() {
  const [state, setState] = useState<ExamState>(getInitialState);

  const currentQuestion = BASE_QUESTIONS[state.currentQuestionIndex];

  // ── Select an answer option ───────────────────────────────────────────
  const handleSelectAnswer = useCallback((answerId: string) => {
    setState((prev) => ({ ...prev, selectedAnswerId: answerId }));
  }, []);

  // ── Submit the selected answer ────────────────────────────────────────
  const handleSubmit = useCallback(async () => {
    if (!state.selectedAnswerId || !currentQuestion) return;

    const isCorrect =
      state.selectedAnswerId === currentQuestion.correctOptionId;

    // Show visual feedback
    setState((prev) => ({ ...prev, showFeedback: true }));

    // Delay to let the user see the result highlight
    await new Promise((resolve) => setTimeout(resolve, 1200));

    if (isCorrect) {
      // Correct → advance
      const nextIndex = state.currentQuestionIndex + 1;
      if (nextIndex >= TOTAL_QUESTIONS) {
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
      // Incorrect → enter remediation
      setState((prev) => ({ ...prev, isLoading: true }));

      const payload: RemediationPayload = await simulateRemediation(
        currentQuestion
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
  }, [state.selectedAnswerId, state.currentQuestionIndex, currentQuestion]);

  // ── Remediation: answered the rephrased question correctly ────────────
  const handleRemediationCorrect = useCallback(() => {
    const nextIndex = state.currentQuestionIndex + 1;
    if (nextIndex >= TOTAL_QUESTIONS) {
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
  }, [state.currentQuestionIndex]);

  // ── Remediation: answered the rephrased question incorrectly ──────────
  // Re-show the lesson (reset the modal to lesson phase)
  const handleRemediationIncorrect = useCallback(() => {
    setState((prev) => ({
      ...prev,
      // Keep isRemediating true, keep the same payload.
      // The modal will reset its own internal phase to "lesson".
      remediationPayload: prev.remediationPayload
        ? { ...prev.remediationPayload }
        : null,
    }));
  }, []);

  // ── Restart the exam ──────────────────────────────────────────────────
  const handleRestart = useCallback(() => {
    setState(getInitialState());
  }, []);

  // ── Render ────────────────────────────────────────────────────────────
  return (
    <main className="min-h-screen bg-industrial-50 flex flex-col">
      {/* Top bar */}
      <header className="bg-industrial-900 text-white px-6 py-4 shadow-md">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">&#9888;</span>
            <div>
              <h1 className="font-bold text-lg leading-tight">
                ForkliftMastery
              </h1>
              <p className="text-industrial-400 text-xs">
                OSHA 1910.178 Certification Exam
              </p>
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
              totalQuestions={TOTAL_QUESTIONS}
              onRestart={handleRestart}
            />
          ) : (
            <>
              <ProgressBar
                currentIndex={state.currentQuestionIndex}
                totalQuestions={TOTAL_QUESTIONS}
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
        Content derived from OSHA Standard 1910.178 — Powered Industrial Trucks
      </footer>
    </main>
  );
}
