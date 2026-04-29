import courseContent from "../data/course-content.json";
import type { Question, RemediationPayload, Topic } from "./types";

const FALLBACK_LESSONS = courseContent.lessons as Record<Topic, string>;
const FALLBACK_REPHRASED = courseContent.rephrasedQuestions as Record<string, Question>;

export async function simulateRemediation(
  originalQuestion: Question,
  content?: { lessons: Record<string, string>; rephrasedQuestions: Record<string, Question> },
): Promise<RemediationPayload> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const lessons = content?.lessons ?? FALLBACK_LESSONS;
      const rephrased = content?.rephrasedQuestions ?? FALLBACK_REPHRASED;

      const lesson =
        lessons[originalQuestion.topic] ??
        "No lesson content available for this topic.";

      const rephrasedQuestion =
        rephrased[String(originalQuestion.id)] ?? {
          ...originalQuestion,
          id: originalQuestion.id + 100,
          questionText: `[Rephrased] ${originalQuestion.questionText}`,
        };

      resolve({ lesson, rephrasedQuestion });
    }, 1000);
  });
}
