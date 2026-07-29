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
  "bloodborne-pathogens-commercial": "course-content-bloodborne-pathogens-commercial-quiz.json",
  "industrial-ergonomics": "course-content-industrial-ergonomics-quiz.json",
  "office-ergonomics": "course-content-office-ergonomics-quiz.json",
  "injury-illness-prevention": "course-content-injury-illness-prevention-quiz.json",
  "osha-construction-intro": "course-content-osha-construction-intro-quiz.json",
  "safety-orientation-construction": "course-content-safety-orientation-construction-quiz.json",
  "electrocution-hazards-construction-1": "course-content-electrocution-hazards-construction-1-quiz.json",
  "electrocution-hazards-construction-2": "course-content-electrocution-hazards-construction-2-quiz.json",
  "struck-by-hazards-construction": "course-content-struck-by-hazards-construction-quiz.json",
  "caught-in-between-hazards-construction": "course-content-caught-in-between-hazards-construction-quiz.json",
  "personal-protective-equipment-construction": "course-content-personal-protective-equipment-construction-quiz.json",
  "hazard-communication-construction": "course-content-hazard-communication-construction-quiz.json",
  "crane-safety-construction": "course-content-crane-safety-construction-quiz.json",
  "rigging-safety-construction": "course-content-rigging-safety-construction-quiz.json",
  "trenching-shoring-safety": "course-content-trenching-shoring-safety-quiz.json",
  "suspended-scaffolding-safety-construction": "course-content-suspended-scaffolding-safety-construction-quiz.json",
  "supported-scaffolding-safety-construction": "course-content-supported-scaffolding-safety-construction-quiz.json",
  "ladder-safety-construction": "course-content-ladder-safety-construction-quiz.json",
  "hand-power-tool-safety-construction": "course-content-hand-power-tool-safety-construction-quiz.json",
  "safety-housekeeping-accident-prevention": "course-content-safety-housekeeping-accident-prevention-quiz.json",
  "conducting-safety-audits": "course-content-conducting-safety-audits-quiz.json",
  "occupational-health-environmental-control": "course-content-occupational-health-environmental-control-quiz.json",
  "electrocution-hazards-general-industry": "course-content-electrocution-hazards-general-industry-quiz.json",
  "ghs-safety-data-sheets": "course-content-ghs-safety-data-sheets-quiz.json",
  "ghs-container-labeling": "course-content-ghs-container-labeling-quiz.json",
  "handling-compressed-gas-cylinders": "course-content-handling-compressed-gas-cylinders-quiz.json",
  "confined-space-entry": "course-content-confined-space-entry-quiz.json",
  "lockout-tagout": "course-content-lockout-tagout-quiz.json",
  "welding-safety": "course-content-welding-safety-quiz.json",
  "heat-stress": "course-content-heat-stress-quiz.json",
  "hand-wrist-finger-safety-construction": "course-content-hand-wrist-finger-safety-construction-quiz.json",
  "respiratory-protection": "course-content-respiratory-protection-quiz.json",
  "slips-trips-falls-construction": "course-content-slips-trips-falls-construction-quiz.json",
  "hearing-conservation": "course-content-hearing-conservation-quiz.json",
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
