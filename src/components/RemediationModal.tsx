"use client";

import { useState } from "react";
import { RemediationPayload } from "@/lib/types";

interface RemediationModalProps {
  payload: RemediationPayload;
  onAnswerCorrectly: () => void;
  onAnswerIncorrectly: () => void;
}

export default function RemediationModal({
  payload,
  onAnswerCorrectly,
  onAnswerIncorrectly,
}: RemediationModalProps) {
  const [phase, setPhase] = useState<"lesson" | "question">("lesson");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const { lesson, rephrasedQuestion } = payload;

  function handleCheckAnswer() {
    if (!selectedId) return;
    setShowResult(true);

    setTimeout(() => {
      if (selectedId === rephrasedQuestion.correctOptionId) {
        onAnswerCorrectly();
      } else {
        onAnswerIncorrectly();
      }
    }, 1200);
  }

  const isCorrect = selectedId === rephrasedQuestion.correctOptionId;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-safety-orange px-6 py-4 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <span className="text-2xl">&#9888;</span>
            <div>
              <h2 className="text-white font-bold text-lg">
                Remediation Required
              </h2>
              <p className="text-white/80 text-sm">
                Review the lesson below before continuing
              </p>
            </div>
          </div>
        </div>

        <div className="p-6">
          {phase === "lesson" ? (
            <>
              {/* Mini-lesson */}
              <div className="prose prose-sm max-w-none mb-6">
                {lesson.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-industrial-700 leading-relaxed mb-3"
                    dangerouslySetInnerHTML={{
                      __html: paragraph
                        .replace(
                          /\*\*(.*?)\*\*/g,
                          '<strong class="text-industrial-900">$1</strong>'
                        )
                        .replace(
                          /(1910\.178\([a-z]\)\(\d+\))/g,
                          '<code class="bg-safety-orange/10 text-safety-orange px-1 rounded text-xs font-mono">$1</code>'
                        ),
                    }}
                  />
                ))}
              </div>

              <button
                onClick={() => setPhase("question")}
                className="w-full bg-safety-orange hover:bg-safety-orange/90 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
              >
                I Understand — Show Me the Question
              </button>
            </>
          ) : (
            <>
              {/* Rephrased question */}
              <div className="mb-2">
                <span className="inline-block bg-safety-orange/10 text-safety-orange text-xs font-semibold px-2 py-1 rounded-full mb-3">
                  Rephrased Question — Same Concept
                </span>
                <p className="text-industrial-900 font-medium text-lg mb-5">
                  {rephrasedQuestion.questionText}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {rephrasedQuestion.options.map((option) => {
                  let borderColor = "border-industrial-200 hover:border-safety-orange";
                  let bgColor = "bg-white";

                  if (showResult && option.id === rephrasedQuestion.correctOptionId) {
                    borderColor = "border-green-500";
                    bgColor = "bg-green-50";
                  } else if (showResult && option.id === selectedId && !isCorrect) {
                    borderColor = "border-red-500";
                    bgColor = "bg-red-50";
                  } else if (option.id === selectedId) {
                    borderColor = "border-safety-orange";
                    bgColor = "bg-safety-orange/5";
                  }

                  return (
                    <button
                      key={option.id}
                      onClick={() => {
                        if (!showResult) setSelectedId(option.id);
                      }}
                      disabled={showResult}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${borderColor} ${bgColor} disabled:cursor-not-allowed`}
                    >
                      <span className="font-mono text-sm text-industrial-400 mr-3 uppercase">
                        {option.id}.
                      </span>
                      <span className="text-industrial-800">{option.text}</span>
                    </button>
                  );
                })}
              </div>

              {!showResult ? (
                <button
                  onClick={handleCheckAnswer}
                  disabled={!selectedId}
                  className="w-full bg-safety-orange hover:bg-safety-orange/90 disabled:bg-industrial-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                >
                  Submit Answer
                </button>
              ) : (
                <div
                  className={`text-center py-3 px-6 rounded-xl font-semibold ${
                    isCorrect
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {isCorrect
                    ? "Correct! Proceeding to the next question..."
                    : "Incorrect — restarting the lesson..."}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
