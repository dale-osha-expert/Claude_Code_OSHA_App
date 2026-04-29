// ---------------------------------------------------------------------------
// ForkliftMastery — Type Definitions
// All content aligned to OSHA Standard 1910.178 (Powered Industrial Trucks)
// ---------------------------------------------------------------------------

/** Topics derived from key areas of OSHA 1910.178 */
export type Topic =
  | "stability-triangle"
  | "refueling"
  | "load-center"
  | "pedestrian-safety"
  | "operator-training"
  | "pre-operation-inspection"
  | "load-handling"
  | "truck-types"
  | "operating-rules";

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

/** Full course payload returned by /api/course/load */
export interface CourseContent {
  meta: {
    courseId: string;
    title: string;
    oshaStandard: string;
    passingGrade: number;
    totalQuestions: number;
  };
  questions: Question[];
  lessons: Record<string, string>;
  rephrasedQuestions: Record<string, Question>;
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
