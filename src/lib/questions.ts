// ---------------------------------------------------------------------------
// ForkliftMastery — Base Question Bank
// 10 questions sorted Easy → Hard, covering four OSHA 1910.178 topic areas.
// ---------------------------------------------------------------------------

import { Question } from "./types";

export const BASE_QUESTIONS: Question[] = [
  // ── Easy (Questions 1–4) ──────────────────────────────────────────────
  {
    id: 1,
    topic: "pedestrian-safety",
    difficulty: "easy",
    questionText:
      "According to OSHA 1910.178(n)(1), what must a forklift operator do when approaching a pedestrian in the work area?",
    options: [
      { id: "a", text: "Speed up to clear the area quickly" },
      { id: "b", text: "Sound the horn and slow down" },
      { id: "c", text: "Flash the headlights repeatedly" },
      { id: "d", text: "Reverse direction immediately" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(n)(1)",
  },
  {
    id: 2,
    topic: "refueling",
    difficulty: "easy",
    questionText:
      "Under OSHA 1910.178(f)(12), which action is required BEFORE refueling a propane-powered forklift?",
    options: [
      { id: "a", text: "Turn off the engine and ensure no open flames are nearby" },
      { id: "b", text: "Keep the engine running for faster refueling" },
      { id: "c", text: "Move the truck to the loading dock" },
      { id: "d", text: "Disconnect the battery terminals" },
    ],
    correctOptionId: "a",
    oshaClause: "1910.178(f)(12)",
  },
  {
    id: 3,
    topic: "stability-triangle",
    difficulty: "easy",
    questionText:
      "The 'stability triangle' of a sit-down counterbalanced forklift is formed by which three points?",
    options: [
      { id: "a", text: "The two front wheels and the driver's seat" },
      { id: "b", text: "The two front wheel axle ends and the rear axle pivot point" },
      { id: "c", text: "The mast, the counterweight, and the forks" },
      { id: "d", text: "The front bumper and two rear wheels" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(l)(1)",
  },
  {
    id: 4,
    topic: "load-center",
    difficulty: "easy",
    questionText:
      "What is the standard load center distance used to rate most forklifts' lifting capacity?",
    options: [
      { id: "a", text: "12 inches from the face of the forks" },
      { id: "b", text: "36 inches from the face of the forks" },
      { id: "c", text: "24 inches from the face of the forks" },
      { id: "d", text: "48 inches from the face of the forks" },
    ],
    correctOptionId: "c",
    oshaClause: "1910.178(o)(2)",
  },

  // ── Medium (Questions 5–7) ────────────────────────────────────────────
  {
    id: 5,
    topic: "stability-triangle",
    difficulty: "medium",
    questionText:
      "A forklift begins to tip laterally while turning with an elevated load. Per OSHA 1910.178(l)(6), what is the PRIMARY contributing factor?",
    options: [
      { id: "a", text: "The combined center of gravity shifted outside the stability triangle" },
      { id: "b", text: "The parking brake was not engaged" },
      { id: "c", text: "The load was within rated capacity but the tires were under-inflated" },
      { id: "d", text: "The operator was not wearing a seatbelt" },
    ],
    correctOptionId: "a",
    oshaClause: "1910.178(l)(6)",
  },
  {
    id: 6,
    topic: "refueling",
    difficulty: "medium",
    questionText:
      "Per OSHA 1910.178(f)(9), which of the following conditions makes a fuel-powered forklift unsafe to operate in an enclosed space?",
    options: [
      { id: "a", text: "The space has fluorescent lighting" },
      { id: "b", text: "Ventilation is insufficient to remove hazardous concentrations of exhaust gases" },
      { id: "c", text: "The forklift uses a catalytic converter" },
      { id: "d", text: "The ambient temperature exceeds 85°F" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(f)(9)",
  },
  {
    id: 7,
    topic: "pedestrian-safety",
    difficulty: "medium",
    questionText:
      "According to OSHA 1910.178(n)(4), what is the required procedure when a forklift operator's view is obstructed by a load?",
    options: [
      { id: "a", text: "Proceed slowly with the load tilted back" },
      { id: "b", text: "Travel in reverse so the operator has a clear line of sight" },
      { id: "c", text: "Have a spotter walk beside the load" },
      { id: "d", text: "Raise the load above eye level to see underneath" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(n)(4)",
  },

  // ── Hard (Questions 8–10) ─────────────────────────────────────────────
  {
    id: 8,
    topic: "load-center",
    difficulty: "hard",
    questionText:
      "A forklift rated at 5,000 lbs at a 24\" load center picks up a uniformly distributed load whose center of gravity is at 30\". Approximately what is the effective de-rated capacity?",
    options: [
      { id: "a", text: "5,000 lbs — capacity doesn't change with load center" },
      { id: "b", text: "4,000 lbs" },
      { id: "c", text: "6,250 lbs" },
      { id: "d", text: "3,500 lbs" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(o)(2)",
  },
  {
    id: 9,
    topic: "stability-triangle",
    difficulty: "hard",
    questionText:
      "An operator must travel down a ramp with a loaded forklift. Per OSHA 1910.178(n)(7), what is the correct procedure?",
    options: [
      { id: "a", text: "Drive forward down the ramp with the load lowered and tilted back" },
      { id: "b", text: "Drive in reverse going down the ramp so the load is upgrade" },
      { id: "c", text: "Drive forward with the load elevated to clear the ramp surface" },
      { id: "d", text: "Unload first, drive down empty, then reload at the bottom" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(n)(7)",
  },
  {
    id: 10,
    topic: "refueling",
    difficulty: "hard",
    questionText:
      "A facility uses both LP-gas and electric forklifts. According to OSHA 1910.178(f)(1) and (g)(1), which statement correctly differentiates their designated charging/refueling areas?",
    options: [
      { id: "a", text: "Both may share the same designated area if a fire extinguisher is present" },
      { id: "b", text: "LP-gas trucks must refuel outdoors; battery charging has no location requirement" },
      { id: "c", text: "LP-gas refueling requires open-flame prohibition and proper ventilation; battery charging areas require ventilation to disperse hydrogen gas and prohibition of open flames or sparks" },
      { id: "d", text: "Only LP-gas refueling requires a designated area; electric trucks can charge anywhere" },
    ],
    correctOptionId: "c",
    oshaClause: "1910.178(f)(1), 1910.178(g)(1)",
  },
];
