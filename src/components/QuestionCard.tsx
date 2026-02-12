"use client";

import { Question } from "@/lib/types";

interface QuestionCardProps {
  question: Question;
  selectedAnswerId: string | null;
  showFeedback: boolean;
  onSelectAnswer: (answerId: string) => void;
  onSubmit: () => void;
}

export default function QuestionCard({
  question,
  selectedAnswerId,
  showFeedback,
  onSelectAnswer,
  onSubmit,
}: QuestionCardProps) {
  const isCorrect = selectedAnswerId === question.correctOptionId;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-industrial-100 overflow-hidden">
      {/* Question header */}
      <div className="bg-industrial-50 px-6 py-4 border-b border-industrial-100">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-mono text-industrial-400 uppercase">
            OSHA {question.oshaClause}
          </span>
        </div>
        <h2 className="text-industrial-900 font-semibold text-lg leading-snug">
          {question.questionText}
        </h2>
      </div>

      {/* Answer options */}
      <div className="p-6 space-y-3">
        {question.options.map((option) => {
          let borderColor = "border-industrial-200 hover:border-safety-orange";
          let bgColor = "bg-white";
          let cursor = "cursor-pointer";

          if (showFeedback && option.id === question.correctOptionId) {
            borderColor = "border-green-500";
            bgColor = "bg-green-50";
          } else if (
            showFeedback &&
            option.id === selectedAnswerId &&
            !isCorrect
          ) {
            borderColor = "border-red-500";
            bgColor = "bg-red-50";
          } else if (option.id === selectedAnswerId) {
            borderColor = "border-safety-orange";
            bgColor = "bg-safety-orange/5";
          }

          if (showFeedback) {
            cursor = "cursor-not-allowed";
          }

          return (
            <button
              key={option.id}
              onClick={() => {
                if (!showFeedback) onSelectAnswer(option.id);
              }}
              disabled={showFeedback}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all ${borderColor} ${bgColor} ${cursor}`}
            >
              <span className="font-mono text-sm text-industrial-400 mr-3 uppercase">
                {option.id}.
              </span>
              <span className="text-industrial-800">{option.text}</span>
            </button>
          );
        })}
      </div>

      {/* Submit / feedback */}
      <div className="px-6 pb-6">
        {!showFeedback ? (
          <button
            onClick={onSubmit}
            disabled={!selectedAnswerId}
            className="w-full bg-safety-orange hover:bg-safety-orange/90 disabled:bg-industrial-300 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-xl transition-colors text-lg"
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
              ? "Correct! Moving to the next question..."
              : "Incorrect — entering remediation..."}
          </div>
        )}
      </div>
    </div>
  );
}
