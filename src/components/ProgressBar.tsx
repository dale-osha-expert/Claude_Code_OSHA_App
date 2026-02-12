"use client";

import { Difficulty } from "@/lib/types";

interface ProgressBarProps {
  currentIndex: number;
  totalQuestions: number;
  difficulty: Difficulty;
  score: number;
}

const DIFFICULTY_CONFIG: Record<
  Difficulty,
  { label: string; color: string; bgColor: string }
> = {
  easy: {
    label: "Easy",
    color: "bg-green-500",
    bgColor: "bg-green-100 text-green-800",
  },
  medium: {
    label: "Medium",
    color: "bg-safety-orange",
    bgColor: "bg-orange-100 text-orange-800",
  },
  hard: {
    label: "Hard",
    color: "bg-red-500",
    bgColor: "bg-red-100 text-red-800",
  },
};

export default function ProgressBar({
  currentIndex,
  totalQuestions,
  difficulty,
  score,
}: ProgressBarProps) {
  const progress = ((currentIndex) / totalQuestions) * 100;
  const config = DIFFICULTY_CONFIG[difficulty];

  return (
    <div className="mb-8">
      {/* Top row: difficulty badge + score */}
      <div className="flex items-center justify-between mb-3">
        <span
          className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide ${config.bgColor}`}
        >
          {config.label}
        </span>
        <span className="text-sm text-industrial-500 font-medium">
          Score: <span className="text-industrial-900 font-bold">{score}</span> /{" "}
          {totalQuestions}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-industrial-200 rounded-full h-2.5 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ease-out ${config.color}`}
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Question counter */}
      <p className="text-xs text-industrial-400 mt-2 text-right">
        Question {currentIndex + 1} of {totalQuestions}
      </p>
    </div>
  );
}
