import courseContent from "../data/course-content.json";
import type { Question, RemediationPayload, Topic } from "./types";

const LESSONS = courseContent.lessons as Record<Topic, string>;
const REPHRASED_QUESTIONS = courseContent.rephrasedQuestions as Record<number, Question>;

export async function simulateRemediation(
  originalQuestion: Question
): Promise<RemediationPayload> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const lesson =
        LESSONS[originalQuestion.topic] ??
        "No lesson content available for this topic.";

      const rephrased =
        REPHRASED_QUESTIONS[originalQuestion.id] ?? {
          ...originalQuestion,
          id: originalQuestion.id + 100,
          questionText: `[Rephrased] ${originalQuestion.questionText}`,
        };

      resolve({ lesson, rephrasedQuestion: rephrased });
    }, 1000);
  });
}
