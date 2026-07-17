import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const COURSE_FILE_MAP: Record<string, string> = {
  "osha-1910-178": "course-content.json",
  "accident-investigation": "course-content-accident-investigation-quiz.json",
  "back-safety": "course-content-back-safety-quiz.json",
  "bloodborne-pathogens": "course-content-bloodborne-pathogens-quiz.json",
  "electrical-safety": "course-content-electrical-safety-quiz.json",
  "emergency-planning": "course-content-emergency-planning-quiz.json",
  "evacuation-procedures": "course-content-evacuation-procedures-quiz.json",
  "industrial-fire-prevention": "course-content-industrial-fire-prevention-quiz.json",
  "industrial-lso": "course-content-industrial-lso-quiz.json",
  "industrial-laser-tech": "course-content-laser-tech-quiz.json",
  "osha-general-industry-intro": "course-content-osha-general-industry-intro-quiz.json",
  "personal-protective-equipment": "course-content-personal-protective-equipment-quiz.json",
  "safety-orientation-accident-investigation": "course-content-safety-orientation-quiz.json",
  "walking-working-surfaces": "course-content-walking-working-surfaces-quiz.json",
  "hazard-communication": "course-content-hazard-communication-quiz.json",
  "hazardous-materials-labels": "course-content-hazardous-materials-labels-quiz.json",
  "hazardous-spills": "course-content-hazardous-spills-quiz.json",
  "materials-handling-safety": "course-content-materials-handling-safety-quiz.json",
  "warehouse-safety": "course-content-warehouse-safety-quiz.json",
  "machine-guard-safety": "course-content-machine-guard-safety-quiz.json",
  "industrial-hygiene": "course-content-industrial-hygiene-quiz.json",
};

export async function GET(request: NextRequest) {
  const courseId = request.nextUrl.searchParams.get("courseId");

  if (!courseId) {
    return NextResponse.json({ error: "courseId is required" }, { status: 400 });
  }

  const filename = COURSE_FILE_MAP[courseId];
  if (!filename) {
    return NextResponse.json({ error: `Unknown courseId: ${courseId}` }, { status: 404 });
  }

  const filePath = path.join(process.cwd(), "src", "data", filename);

  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(raw);
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Failed to read course file" }, { status: 500 });
  }
}
