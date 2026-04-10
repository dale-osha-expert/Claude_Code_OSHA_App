"use client";

interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  isCompleting?: boolean;
  completionError?: string | null;
  onRetryComplete?: () => void;
}

export default function ResultsScreen({
  score,
  totalQuestions,
  onRestart,
  isCompleting,
  completionError,
  onRetryComplete,
}: ResultsScreenProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const passed = percentage >= 70;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-industrial-100 overflow-hidden text-center">
      <div
        className={`px-6 py-8 ${
          passed ? "bg-green-500" : "bg-red-500"
        }`}
      >
        <div className="text-6xl mb-3">{passed ? "\u2705" : "\u274C"}</div>
        <h2 className="text-white font-bold text-2xl">
          {passed ? "Certification Passed!" : "Certification Not Achieved"}
        </h2>
        <p className="text-white/80 mt-1">
          OSHA 1910.178 — Powered Industrial Trucks
        </p>
      </div>

      <div className="p-8">
        <div className="mb-6">
          <p className="text-5xl font-bold text-industrial-900">{percentage}%</p>
          <p className="text-industrial-500 mt-1">
            {score} of {totalQuestions} correct
          </p>
        </div>

        <div className="bg-industrial-50 rounded-xl p-4 mb-6 text-left">
          <h3 className="font-semibold text-industrial-900 mb-2">
            {passed ? "What this means:" : "Next steps:"}
          </h3>
          <p className="text-sm text-industrial-600 leading-relaxed">
            {passed
              ? "You have demonstrated knowledge of OSHA 1910.178 powered industrial truck safety standards. This written exam is one component of full certification, which also requires a practical driving evaluation and workplace-specific training."
              : "A score of 70% or higher is required to pass. Review the OSHA 1910.178 standard, focusing on the areas where remediation was triggered, then retake the exam."}
          </p>
        </div>

        {isCompleting && (
          <div className="flex items-center justify-center gap-3 mb-6 p-4 bg-blue-50 rounded-xl">
            <div className="animate-spin h-5 w-5 border-2 border-blue-600 border-t-transparent rounded-full" />
            <p className="text-blue-700 font-medium">Completing course...</p>
          </div>
        )}

        {completionError && (
          <div className="mb-6 p-4 bg-red-50 rounded-xl">
            <p className="text-red-700 text-sm mb-3">{completionError}</p>
            {onRetryComplete && (
              <button
                onClick={onRetryComplete}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Retry Completion
              </button>
            )}
          </div>
        )}

        <button
          onClick={onRestart}
          className="w-full bg-safety-orange hover:bg-safety-orange/90 text-white font-bold py-3 px-6 rounded-xl transition-colors text-lg"
        >
          {passed ? "Retake Exam" : "Try Again"}
        </button>
      </div>
    </div>
  );
}
