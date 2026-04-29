// ---------------------------------------------------------------------------
// ForkliftMastery — Course API Integration
// ---------------------------------------------------------------------------

import type { CourseContent } from "./types";

interface CourseEventPayload {
  session: string;
  attempt_id: string;
  event_type:
    | "page_next"
    | "question_correct"
    | "question_incorrect"
    | "exam_submitted"
    | "course_complete";
  course_id: string;
  page_id: string | null;
  lesson_id: string | null;
  timestamp: string;
  correct_count: number | null;
  total_questions: number | null;
  metadata: Record<string, unknown>;
}

interface CourseCompleteResponse {
  success: boolean;
  redirect_url: string;
}

const API_BASE_URL =
  process.env.NEXT_PUBLIC_COURSE_API_BASE_URL ?? "https://secure.certifyme.net";

// ── Helpers ────────────────────────────────────────────────────────────────

export function generateAttemptId(): string {
  return crypto.randomUUID();
}

function buildPayload(
  session: string,
  courseId: string,
  attemptId: string,
  eventType: CourseEventPayload["event_type"],
  options?: {
    pageId?: string;
    questionId?: number;
    correctCount?: number;
    totalQuestions?: number;
  },
): CourseEventPayload {
  return {
    session,
    attempt_id: attemptId,
    event_type: eventType,
    course_id: courseId,
    page_id: options?.pageId ?? null,
    lesson_id: courseId,
    timestamp: new Date().toISOString(),
    correct_count: options?.correctCount ?? null,
    total_questions: options?.totalQuestions ?? null,
    metadata:
      options?.questionId != null ? { question_id: options.questionId } : {},
  };
}

// ── Course loader ──────────────────────────────────────────────────────────

export async function loadCourse(session: string): Promise<CourseContent> {
  const response = await fetch(`${API_BASE_URL}/api/course/load`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ session }),
  });

  if (!response.ok) {
    throw new Error(`Course load failed: ${response.status}`);
  }

  const data = await response.json();

  if (data.error) {
    throw new Error(data.message ?? "Invalid session");
  }

  return data as CourseContent;
}

// ── Fire-and-forget event sender ───────────────────────────────────────────

export function sendCourseEvent(
  attemptId: string,
  eventType: "page_next" | "question_correct" | "question_incorrect" | "exam_submitted",
  session: string,
  courseId: string,
  options?: {
    pageId?: string;
    questionId?: number;
    correctCount?: number;
    totalQuestions?: number;
  },
): void {
  const payload = buildPayload(session, courseId, attemptId, eventType, options);
  fetch(`${API_BASE_URL}/api/course/event`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).catch((err) => {
    console.error(`[CourseAPI] Failed to send ${eventType}:`, err);
  });
}

// ── Awaitable completion sender ────────────────────────────────────────────

export async function sendCourseComplete(
  attemptId: string,
  correctCount: number,
  totalQuestions: number,
  session: string,
  courseId: string,
): Promise<string> {
  const payload = buildPayload(session, courseId, attemptId, "course_complete", {
    correctCount,
    totalQuestions,
  });

  const response = await fetch(`${API_BASE_URL}/api/course/complete`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Course complete failed: ${response.status}`);
  }

  const data: CourseCompleteResponse = await response.json();

  if (!data.success || !data.redirect_url) {
    throw new Error("Invalid completion response: missing redirect_url");
  }

  return data.redirect_url;
}
