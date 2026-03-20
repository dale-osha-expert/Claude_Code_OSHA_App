// ---------------------------------------------------------------------------
// Safety Certifications Platform — Type Definitions
// ---------------------------------------------------------------------------

/** Topic string — each course defines its own topic keys */
export type Topic = string;

/** Difficulty tiers map to the 10-question progression */
export type Difficulty = "easy" | "medium" | "hard";

/** A single answer option */
export interface AnswerOption {
  id: string;
  text: string;
}

/** A base exam question */
export interface Question {
  id: number;
  topic: Topic;
  difficulty: Difficulty;
  questionText: string;
  options: AnswerOption[];
  correctOptionId: string;
  /** OSHA clause reference for remediation content */
  oshaClause: string;
}

/** The mini-lesson + rephrased question returned by the remediation engine */
export interface RemediationPayload {
  lesson: string;
  rephrasedQuestion: Question;
}

/** Overall exam state managed by the page component */
export interface ExamState {
  currentQuestionIndex: number;
  score: number;
  isRemediating: boolean;
  remediationPayload: RemediationPayload | null;
  answeredCorrectly: boolean[];
  isComplete: boolean;
  isLoading: boolean;
  selectedAnswerId: string | null;
  showFeedback: boolean;
}

/** A full course definition */
export interface Course {
  id: string;
  slug: string;
  title: string;
  topic: string;
  productLine: string;
  durationMinutes: number;
  shortDescription: string;
  oshaRefs: string[];
  passingScore: number;
  questions: Question[];
  lessons: Record<string, string>;
}
