// ---------------------------------------------------------------------------
// ForkliftMastery — CertifyMe Course Tracking API Integration
// ---------------------------------------------------------------------------

interface CourseEventPayload {
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
const COURSE_ID =
  process.env.NEXT_PUBLIC_COURSE_ID ?? "osha-1910-178";

// ── Helpers ────────────────────────────────────────────────────────────────

export function generateAttemptId(): string {
  return crypto.randomUUID();
}

function buildPayload(
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
    attempt_id: attemptId,
    event_type: eventType,
    course_id: COURSE_ID,
    page_id: options?.pageId ?? null,
    lesson_id: COURSE_ID,
    timestamp: new Date().toISOString(),
    correct_count: options?.correctCount ?? null,
    total_questions: options?.totalQuestions ?? null,
    metadata:
      options?.questionId != null ? { question_id: options.questionId } : {},
  };
}

// ── Fire-and-forget event sender ───────────────────────────────────────────

export function sendCourseEvent(
  attemptId: string,
  eventType: "page_next" | "question_correct" | "question_incorrect" | "exam_submitted",
  options?: {
    pageId?: string;
    questionId?: number;
    correctCount?: number;
    totalQuestions?: number;
  },
): void {
  const payload = buildPayload(attemptId, eventType, options);
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
): Promise<string> {
  const payload = buildPayload(attemptId, "course_complete", {
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
