// ---------------------------------------------------------------------------
// ForkliftMastery — Remediation Engine (Mock)
// Simulates AI-generated mini-lessons and rephrased questions.
// ---------------------------------------------------------------------------

import { Question, RemediationPayload, Topic } from "./types";

/**
 * Topic-keyed lessons referencing specific OSHA 1910.178 clauses.
 * Each lesson is ~200 words explaining the underlying safety principle.
 */
const LESSONS: Record<Topic, string> = {
  "stability-triangle": `**Understanding the Stability Triangle — OSHA 1910.178(l)**

A sit-down counterbalanced forklift maintains stability through three contact points: the two front wheel axle ends and the rear axle pivot point. These three points form the "stability triangle." The combined center of gravity (truck + load) must remain inside this triangle at all times, or the truck will tip.

When a load is picked up, the combined center of gravity shifts forward and upward. Turning at speed, especially with an elevated load, generates centrifugal force that can push the center of gravity laterally outside the triangle, causing a side tip-over.

OSHA 1910.178(l)(6) requires operators to avoid sudden direction changes and to slow down before turns. Traveling with the load low (4–6 inches above floor level) and tilted back keeps the center of gravity low and within the triangle. On ramps, OSHA 1910.178(n)(7) requires that loaded forklifts travel with the load pointing upgrade — meaning reverse down a ramp with a load, and drive forward up a ramp with a load. These rules exist because a forward-facing load on a downgrade shifts the combined center of gravity beyond the front axle line, risking a forward tip-over.`,

  refueling: `**Safe Refueling & Charging Practices — OSHA 1910.178(f) & (g)**

OSHA draws a clear distinction between fuel-powered and electric-powered industrial trucks. For LP-gas and diesel trucks, 1910.178(f)(12) mandates that the engine must be shut off during refueling and that no open flames or ignition sources are permitted in the refueling area. This prevents vapor ignition that can cause flash fires or explosions.

For operations in enclosed spaces, 1910.178(f)(9) requires that ventilation be sufficient to keep exhaust gas concentrations (particularly carbon monoxide) below hazardous levels. If ventilation is inadequate, the truck must not be operated in that space.

Electric forklifts have their own hazards. During battery charging, lead-acid batteries emit hydrogen gas, which is highly flammable. OSHA 1910.178(g)(1) requires designated charging areas with adequate ventilation to disperse hydrogen, prohibition of open flames and sparks, and proper handling procedures for battery acid. Facilities operating both LP-gas and electric fleets must maintain separate, compliant areas for each — a shared area rarely meets the specific requirements of both standards. Fire extinguisher availability is required in both cases but is not sufficient on its own to allow combined areas.`,

  "load-center": `**Load Center & Capacity De-rating — OSHA 1910.178(o)**

Every forklift has a data plate specifying its rated load capacity at a given load center distance — typically 24 inches from the face of the forks. The load center is the horizontal distance from the fork face to the center of gravity of the load. This number is critical because it determines the moment arm acting on the truck's fulcrum point (the front axle).

When the actual load center exceeds the rated load center, the effective capacity of the truck decreases. The relationship is inversely proportional: Effective Capacity = Rated Capacity × (Rated Load Center ÷ Actual Load Center). For example, a truck rated at 5,000 lbs at 24" picking up a load centered at 30" has an effective capacity of 5,000 × (24 ÷ 30) = 4,000 lbs.

OSHA 1910.178(o)(2) requires that trucks shall not be loaded beyond their rated capacity. Operators must know how to read the data plate and how to estimate the load center of irregularly shaped loads. Overloading — even by a small margin — shifts the combined center of gravity forward of the stability triangle, risking a tip-over. Always verify the load weight and center of gravity before lifting.`,

  "pedestrian-safety": `**Pedestrian Safety & Travel Rules — OSHA 1910.178(n)**

Forklift-pedestrian incidents are among the most common causes of serious warehouse injuries. OSHA 1910.178(n)(1) requires operators to slow down and sound the horn at cross aisles, doorways, and anywhere pedestrians may be present. The intent is to provide audible warning so that pedestrians can clear the path.

When the operator's view is obstructed by a bulky load, 1910.178(n)(4) requires the operator to travel in reverse so they have a clear line of sight in the direction of travel. Alternatively, a designated spotter may guide the operator, but traveling blind is never acceptable.

Speed must be maintained at a level that allows the operator to stop safely, accounting for floor conditions, congestion, and visibility. OSHA 1910.178(n)(8) prohibits stunt driving, horseplay, and the carrying of passengers. Operators must also yield the right-of-way to pedestrians at all times. Intersections, loading docks, and areas near break rooms are high-risk zones that require extra vigilance. Proper pedestrian barriers, floor markings, and mirrors supplement — but never replace — the operator's responsibility for safe travel.`,
};

/**
 * Rephrased questions keyed by original question ID.
 * Each provides a new scenario testing the same underlying concept.
 */
const REPHRASED_QUESTIONS: Record<number, Question> = {
  1: {
    id: 101,
    topic: "pedestrian-safety",
    difficulty: "easy",
    questionText:
      "A forklift operator is approaching a blind intersection inside a warehouse. Per OSHA 1910.178(n)(1), what should the operator do?",
    options: [
      { id: "a", text: "Accelerate through the intersection to minimize exposure time" },
      { id: "b", text: "Stop, sound the horn, and proceed slowly while watching for pedestrians" },
      { id: "c", text: "Turn on the emergency flashers and maintain speed" },
      { id: "d", text: "Have a coworker radio ahead to clear the area" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(n)(1)",
  },
  2: {
    id: 102,
    topic: "refueling",
    difficulty: "easy",
    questionText:
      "A worker needs to change the propane tank on a forklift. Which step must happen FIRST per OSHA 1910.178(f)(12)?",
    options: [
      { id: "a", text: "Open the new propane tank valve to check for gas flow" },
      { id: "b", text: "Shut off the forklift engine completely" },
      { id: "c", text: "Move the truck into direct sunlight for better visibility" },
      { id: "d", text: "Remove the old tank while the engine idles" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(f)(12)",
  },
  3: {
    id: 103,
    topic: "stability-triangle",
    difficulty: "easy",
    questionText:
      "Why is the rear axle of a counterbalanced forklift considered a single point of the stability triangle rather than two separate points?",
    options: [
      { id: "a", text: "Because the rear wheels are smaller than the front wheels" },
      { id: "b", text: "Because the rear axle pivots on a central pin, making it a single balance point" },
      { id: "c", text: "Because the rear wheels are not load-bearing" },
      { id: "d", text: "Because the counterweight is centered over one rear wheel" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(l)(1)",
  },
  4: {
    id: 104,
    topic: "load-center",
    difficulty: "easy",
    questionText:
      "A forklift's data plate says '5,000 lbs at 24\" LC.' What does '24\" LC' mean?",
    options: [
      { id: "a", text: "The forks are 24 inches long" },
      { id: "b", text: "The load's center of gravity is assumed to be 24 inches from the fork face" },
      { id: "c", text: "The load must be exactly 24 inches wide" },
      { id: "d", text: "The lift height is limited to 24 inches" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(o)(2)",
  },
  5: {
    id: 105,
    topic: "stability-triangle",
    difficulty: "medium",
    questionText:
      "An operator is carrying a load at full mast height while making a sharp right turn. What physical force is most likely to cause a tip-over?",
    options: [
      { id: "a", text: "Gravitational compression on the rear axle" },
      { id: "b", text: "Centrifugal force pushing the center of gravity outside the stability triangle" },
      { id: "c", text: "Wind resistance on the elevated load" },
      { id: "d", text: "Hydraulic pressure loss in the lift cylinders" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(l)(6)",
  },
  6: {
    id: 106,
    topic: "refueling",
    difficulty: "medium",
    questionText:
      "A warehouse manager wants to use a diesel forklift in a cold-storage room with limited ventilation. Per OSHA 1910.178(f)(9), what must be evaluated first?",
    options: [
      { id: "a", text: "Whether the forklift has a valid inspection sticker" },
      { id: "b", text: "Whether ventilation is adequate to prevent hazardous exhaust gas accumulation" },
      { id: "c", text: "Whether the room temperature is above freezing" },
      { id: "d", text: "Whether a fire extinguisher is within 25 feet" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(f)(9)",
  },
  7: {
    id: 107,
    topic: "pedestrian-safety",
    difficulty: "medium",
    questionText:
      "An operator is carrying a large crate that completely blocks their forward view. Per OSHA 1910.178(n)(4), how should they travel?",
    options: [
      { id: "a", text: "Drive forward very slowly with the horn sounding continuously" },
      { id: "b", text: "Drive in reverse to maintain a clear sightline" },
      { id: "c", text: "Raise the load above eye level and drive forward" },
      { id: "d", text: "Ask nearby workers to move out of the way, then drive forward" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(n)(4)",
  },
  8: {
    id: 108,
    topic: "load-center",
    difficulty: "hard",
    questionText:
      "A forklift rated at 6,000 lbs at a 24\" load center picks up a pallet whose center of gravity is at 36\". What is the approximate effective capacity?",
    options: [
      { id: "a", text: "6,000 lbs" },
      { id: "b", text: "4,800 lbs" },
      { id: "c", text: "4,000 lbs" },
      { id: "d", text: "5,400 lbs" },
    ],
    correctOptionId: "c",
    oshaClause: "1910.178(o)(2)",
  },
  9: {
    id: 109,
    topic: "stability-triangle",
    difficulty: "hard",
    questionText:
      "An operator must drive a loaded forklift UP a 10% grade ramp. Per OSHA 1910.178(n)(7), which direction should the load face?",
    options: [
      { id: "a", text: "Load facing downhill (drive in reverse up the ramp)" },
      { id: "b", text: "Load facing uphill (drive forward up the ramp)" },
      { id: "c", text: "Sideways to distribute weight evenly" },
      { id: "d", text: "It doesn't matter as long as the load is below 50% capacity" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(n)(7)",
  },
  10: {
    id: 110,
    topic: "refueling",
    difficulty: "hard",
    questionText:
      "A facility has a single ventilated room designated for both LP-gas refueling and battery charging. Per OSHA 1910.178(f)(1) and (g)(1), is this arrangement compliant?",
    options: [
      { id: "a", text: "Yes, if a Class ABC fire extinguisher is mounted by the door" },
      { id: "b", text: "Yes, as long as the operations do not happen simultaneously" },
      { id: "c", text: "No — each operation has distinct ventilation, ignition-source, and hazard requirements that are unlikely to be met in a shared space" },
      { id: "d", text: "No — battery charging can only occur outdoors" },
    ],
    correctOptionId: "c",
    oshaClause: "1910.178(f)(1), 1910.178(g)(1)",
  },
};

/**
 * Simulates an AI-generated remediation payload.
 * Returns a mini-lesson + a rephrased question after a 1-second delay.
 */
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
