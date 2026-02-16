// ---------------------------------------------------------------------------
// ForkliftMastery — Remediation Engine (Mock)
// Simulates AI-generated mini-lessons and rephrased questions.
// ---------------------------------------------------------------------------

import { Question, RemediationPayload, Topic } from "./types";

/**
 * Topic-keyed lessons referencing specific OSHA 1910.178 clauses.
 * Each lesson explains the underlying safety principle for its topic area.
 */
const LESSONS: Record<Topic, string> = {
  "stability-triangle": `**Understanding the Stability Triangle — OSHA 1910.178(l)**

A sit-down counterbalanced forklift maintains stability through three contact points: the two front wheel axle ends and the rear axle pivot point. These three points form the "stability triangle." The combined center of gravity (truck + load) must remain inside this triangle at all times, or the truck will tip.

When a load is picked up, the combined center of gravity shifts forward and upward. Turning at speed, especially with an elevated load, generates centrifugal force that can push the center of gravity laterally outside the triangle, causing a side tip-over.

OSHA 1910.178(l)(6) requires operators to avoid sudden direction changes and to slow down before turns. Traveling with the load low (4–6 inches above floor level) and tilted back keeps the center of gravity low and within the triangle. On ramps, OSHA 1910.178(n)(7) requires that loaded forklifts travel with the load pointing upgrade — meaning reverse down a ramp with a load, and drive forward up a ramp with a load. These rules exist because a forward-facing load on a downgrade shifts the combined center of gravity beyond the front axle line, risking a forward tip-over. If a tip-over does occur, the operator must stay in the truck, hold on, and lean away from the point of impact — never jump.`,

  refueling: `**Safe Refueling & Charging Practices — OSHA 1910.178(f) & (g)**

OSHA draws a clear distinction between fuel-powered and electric-powered industrial trucks. For LP-gas and diesel trucks, 1910.178(f)(12) mandates that the engine must be shut off during refueling and that no open flames or ignition sources are permitted in the refueling area. This prevents vapor ignition that can cause flash fires or explosions. Before changing a Liquid Propane bottle, the service valve must be shut off and the engine left running until it stops in order to purge the fuel lines.

For operations in enclosed spaces, 1910.178(f)(9) requires that ventilation be sufficient to keep exhaust gas concentrations (particularly carbon monoxide) below hazardous levels. If ventilation is inadequate, the truck must not be operated in that space.

Electric forklifts have their own hazards. During battery charging, lead-acid batteries emit hydrogen gas, which is highly flammable. OSHA 1910.178(g)(1) requires designated charging areas with adequate ventilation to disperse hydrogen, prohibition of open flames and sparks, and proper handling procedures for battery acid. Battery charging must only occur in designated areas — quick charges in unauthorized locations are prohibited. Personnel handling batteries must wear protective gloves with gauntlets, eye or face protection, and an acid-resistant apron per 1910.178(g)(2).`,

  "load-center": `**Load Center, Data Plates & Capacity — OSHA 1910.178(o)**

Every forklift has a data plate specifying its rated load capacity at a given load center distance — typically 24 inches from the face of the forks. The load center is the horizontal distance from the fork face to the center of gravity of the load. This number is critical because it determines the moment arm acting on the truck's fulcrum point (the front axle).

Operating a lift truck without a legible data plate is prohibited because the operator has no way to verify the truck's rated capacity. OSHA 1910.178(o)(2) requires that trucks shall not be loaded beyond their rated capacity. Operators must know how to read the data plate and how to estimate the load center of irregularly shaped loads. Overloading — even by a small margin — shifts the combined center of gravity forward of the stability triangle, risking a tip-over.

While overloading is dangerous, momentum is actually a more serious operational hazard because it affects braking distance and tip-over risk dynamically during travel, turns, and stops. Always verify the load weight and center of gravity before lifting.`,

  "pedestrian-safety": `**Pedestrian Safety & Travel Rules — OSHA 1910.178(n)**

Forklift-pedestrian incidents are among the most common causes of serious warehouse injuries. OSHA 1910.178(n)(1) requires operators to slow down and sound the horn at cross aisles, doorways, and anywhere pedestrians may be present. Critically, lift trucks must yield the right-of-way to pedestrians — not the other way around.

OSHA 1910.178(n)(8) strictly prohibits carrying passengers on a forklift under any circumstances. There is no exception for supervisor approval, staying under the overhead guard, or driving slowly. Riders on forklifts face serious risk of falling and being crushed.

Speed must be maintained at a level that allows the operator to stop safely, accounting for floor conditions, congestion, and visibility. Intersections, loading docks, and areas near break rooms are high-risk zones that require extra vigilance. Proper pedestrian barriers, floor markings, and mirrors supplement — but never replace — the operator's responsibility for safe travel.`,

  "operator-training": `**Operator Training & Certification — OSHA 1910.178(l)**

OSHA 1910.178(l)(1) mandates that only trained and authorized operators shall be permitted to operate a powered industrial truck. Training must be specific to the type of truck being operated — being certified on a sit-down counterbalanced forklift does not qualify an operator to use a stand-up reach truck, order picker, or any other type of powered industrial truck.

Knowing how to drive an automobile does not translate to forklift competence. Forklifts have rear-wheel steering, different braking characteristics, unique load dynamics, and specialized controls that vary between truck models. OSHA 1910.178(l)(3) recognizes that different trucks have different controls and gauges, requiring operators to receive truck-specific training.

To complete certification, OSHA 1910.178(l)(2) requires a certified trainer to perform a practical hands-on evaluation where the operator demonstrates competence on their specific equipment in their specific facility. Classroom instruction alone is not sufficient. The primary purpose of safety training is to help prevent accidents — making it the single most important factor in forklift safety.`,

  "pre-operation-inspection": `**Pre-Operation Inspection & Maintenance — OSHA 1910.178(q)(7)**

OSHA 1910.178(q)(7) requires that industrial trucks be examined before being placed in service each shift. This pre-operation inspection must be completed daily at the beginning of every shift — not weekly or monthly.

A lift truck is not considered to be in good operating condition if any of its gauges, safety devices, or critical components are defective. Items that will take a truck out of service include: leaking hydraulic hoses, faulty brakes, steering problems, a parking brake that will not fully engage, missing or damaged manufacturer safety warning decals, mast chains out of adjustment, a missing or inoperative seat belt, and damaged or unreadable data plates.

When a lift truck is found to be in need of repair, defective, or in any way unsafe, the operator must immediately inform the supervisor and red-tag or take the truck out of service. The operator should never continue operating a defective truck, attempt repairs themselves, or simply notify maintenance while continuing to use the equipment.`,

  "load-handling": `**Load Handling & Traveling with Loads — OSHA 1910.178(n) & (o)**

When traveling with a load on a level surface, forks should be raised approximately 4–6 inches from the floor — just enough to clear surface irregularities. The mast should be tilted back (not forward) to cradle the load against the backrest and prevent it from sliding off the forks.

Smooth braking is essential when carrying a load because sudden stops can cause the load to shift or fall forward. When depositing a load, the forks should be lowered until the load rests on the surface — not until there is slack in the chains. Backing out with slack chains risks snagging and pulling the load.

Loads should never be stacked above the backrest, even light ones, as they can fall backward onto the operator. If a load appears improperly stacked or unstable, the operator must stop and re-adjust the load before moving it — never attempt to transport an unstable load.

Vertical mast forklifts can lift loads to great heights, which is both their primary advantage and greatest hazard: the higher the lift, the greater the risk and severity of injury from falling objects.`,

  "truck-types": `**Powered Industrial Truck Classifications — OSHA 1910.178(a) & (b)**

OSHA recognizes multiple classes of powered industrial trucks, each designed for specific applications and environments. Understanding the differences is critical for safe operation.

Order Picker trucks are among the most versatile warehouse tools. They allow operators to pick individual items rather than entire pallets, maneuver in very narrow aisles, and handle everything from small items to large bulky loads.

Class 7 lift trucks are rough terrain forklifts, designed specifically for outdoor use on uneven ground. However, being designed for rough terrain does not mean they are stable on all surfaces — operators must still exercise caution.

Extended reach forklifts come in three main types: frame leveling, outrigger, and slewing designs. Each offers different advantages for reaching into racking or across obstacles.

Powered pallet jacks have unique brake systems — the brake is applied by allowing the handle to spring back to the upright position or by pushing it down to the lowest position. This is a critical safety feature that operators must understand before use. Different truck types have different controls, gauges, and operating characteristics, which is why OSHA requires type-specific training.`,

  "operating-rules": `**General Operating Rules — OSHA 1910.178(m) & (n)**

Forklift operation requires adherence to numerous safety rules that differ significantly from automobile driving. The rear-end steering of a forklift causes the rear end to swing to the outside of the turn, creating a hazard for nearby workers and objects.

Operators must always assume that electrical power sources and overhead lines are energized — contact with energized lines can be fatal. OSHA 1910.178(m)(5) requires that the brake must be set whenever the operator leaves the truck, even if they are within 25 feet of an attended lift truck.

Before driving a lift truck into a trailer, operators must verify: the trailer can handle the additional weight, tire blocks are securely placed, jack stands are in position, and the dock leveler or dock plate has been inspected. Railroad tracks should be crossed at an angle (diagonally) rather than straight on, to prevent forks from getting caught in the rails.

If an accident occurs, the supervisor must be notified immediately. Everyone in the workplace shares responsibility for preventing accidents — not just the operator, supervisor, or safety inspector alone.`,
};

/**
 * Rephrased questions keyed by original question ID.
 * With the expanded 43-question bank, the remediation engine falls back to
 * auto-rephrasing via the template in simulateRemediation when a hand-crafted
 * entry does not exist for a given question ID.
 */
const REPHRASED_QUESTIONS: Record<number, Question> = {
  // ── Question 1 ──────────────────────────────────────────────────────────
  1: {
    id: 101,
    topic: "stability-triangle",
    difficulty: "easy",
    questionText:
      "Which type of incident occurs most frequently when operating a lift truck?",
    options: [
      { id: "a", text: "Fallen load" },
      { id: "b", text: "Truck tipped over" },
      { id: "c", text: "Pedestrian hit by a lift truck" },
      { id: "d", text: "A worker hitching a ride fell off the truck" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(l)(1)",
  },
  // ── Question 2 ──────────────────────────────────────────────────────────
  2: {
    id: 102,
    topic: "operator-training",
    difficulty: "easy",
    questionText:
      "Does certification on a sit-down four-wheel forklift automatically authorize you to operate a stand-up reach truck?",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(l)(1)",
  },
  // ── Question 3 ──────────────────────────────────────────────────────────
  3: {
    id: 103,
    topic: "pre-operation-inspection",
    difficulty: "easy",
    questionText:
      "How often must the pre-operation inspection checklist be completed?",
    options: [
      { id: "a", text: "Once a month" },
      { id: "b", text: "Once a week" },
      { id: "c", text: "Daily at the beginning of every shift" },
    ],
    correctOptionId: "c",
    oshaClause: "1910.178(q)(7)",
  },
  // ── Question 4 ──────────────────────────────────────────────────────────
  4: {
    id: 104,
    topic: "operator-training",
    difficulty: "easy",
    questionText:
      "Is it permissible for an untrained worker to operate a forklift if a supervisor is present?",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(l)(1)",
  },
  // ── Question 5 ──────────────────────────────────────────────────────────
  5: {
    id: 105,
    topic: "load-center",
    difficulty: "easy",
    questionText:
      "Should a forklift with a missing or illegible data plate be taken out of service?",
    options: [
      { id: "a", text: "Yes" },
      { id: "b", text: "No" },
    ],
    correctOptionId: "a",
    oshaClause: "1910.178(o)(2)",
  },
  // ── Question 6 ──────────────────────────────────────────────────────────
  6: {
    id: 106,
    topic: "load-handling",
    difficulty: "easy",
    questionText:
      "At what height should the forks be maintained above the floor when carrying a load across a flat surface?",
    options: [
      { id: "a", text: "4-6 inches" },
      { id: "b", text: "2-3 feet" },
      { id: "c", text: "Eye-level with the operator" },
      { id: "d", text: "None of the above" },
    ],
    correctOptionId: "a",
    oshaClause: "1910.178(n)(5)",
  },
  // ── Question 7 ──────────────────────────────────────────────────────────
  7: {
    id: 107,
    topic: "load-handling",
    difficulty: "easy",
    questionText:
      "When transporting a load, should the mast be tilted backward to cradle the load against the backrest?",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "a",
    oshaClause: "1910.178(n)(5)",
  },
  // ── Question 8 ──────────────────────────────────────────────────────────
  8: {
    id: 108,
    topic: "pedestrian-safety",
    difficulty: "easy",
    questionText:
      "Under what circumstances is it acceptable to allow a passenger to ride on a forklift?",
    options: [
      { id: "a", text: "Never" },
      { id: "b", text: "As long as they remain under the overhead guard" },
      { id: "c", text: "If the supervisor says it's OK" },
      { id: "d", text: "Only when driving very slowly" },
    ],
    correctOptionId: "a",
    oshaClause: "1910.178(n)(8)",
  },
  // ── Question 9 ──────────────────────────────────────────────────────────
  9: {
    id: 109,
    topic: "operating-rules",
    difficulty: "medium",
    questionText:
      "Because forklifts steer from the rear axle, what happens to the back of the truck during a turn?",
    options: [
      { id: "a", text: "Is similar to an automobile" },
      { id: "b", text: "Causes the rear end swing to the outside of the turn" },
      { id: "c", text: "Causes the front end swing to the out about the same as a car" },
      { id: "d", text: "Allows the forklift to make sharp turns at high speed" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(n)(3)",
  },
  // ── Question 10 ─────────────────────────────────────────────────────────
  10: {
    id: 110,
    topic: "load-handling",
    difficulty: "medium",
    questionText:
      "Should you wait for slack in the mast chains before backing away from a deposited load?",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(o)(5)",
  },
  // ── Question 11 ─────────────────────────────────────────────────────────
  11: {
    id: 111,
    topic: "truck-types",
    difficulty: "medium",
    questionText:
      "How is the brake engaged on a powered pallet jack?",
    options: [
      { id: "a", text: "Allowing the handle to spring back to the upright position or hold it down to the lowest position" },
      { id: "b", text: "Raising the hydraulic jack" },
      { id: "c", text: "Taking a sharp turn" },
      { id: "d", text: "Jumping off the equipment" },
    ],
    correctOptionId: "a",
    oshaClause: "1910.178(m)(5)",
  },
  // ── Question 12 ─────────────────────────────────────────────────────────
  12: {
    id: 112,
    topic: "truck-types",
    difficulty: "medium",
    questionText:
      "Why are Order Picker trucks considered especially valuable in warehouse operations?",
    options: [
      { id: "a", text: "They can pick and choose the material, instead of an entire pallet or load" },
      { id: "b", text: "They can maneuver in very narrow aisles" },
      { id: "c", text: "Their design can handle small items to very large bulky items" },
      { id: "d", text: "All of the above" },
    ],
    correctOptionId: "d",
    oshaClause: "1910.178(b)",
  },
  // ── Question 13 ─────────────────────────────────────────────────────────
  13: {
    id: 113,
    topic: "truck-types",
    difficulty: "medium",
    questionText:
      "What is the primary application of a Class 7 powered industrial truck?",
    options: [
      { id: "a", text: "Has solid cushion tires" },
      { id: "b", text: "Best for use in narrow aisles" },
      { id: "c", text: "Best for use on rough terrain" },
      { id: "d", text: "None of the above" },
    ],
    correctOptionId: "c",
    oshaClause: "1910.178(b)",
  },
  // ── Question 14 ─────────────────────────────────────────────────────────
  14: {
    id: 114,
    topic: "load-handling",
    difficulty: "hard",
    questionText:
      "A vertical mast forklift can reach greater heights than many other types — why does this capability also represent its biggest danger?",
    options: [
      { id: "a", text: "Its low profile when the masts are in the lowest position obstructs the driver's view." },
      { id: "b", text: "A vertical mast forklift can lift a load higher than an extended reach forklift. The risk and severity of injuries increases if a falling object strikes the driver or a bystander." },
      { id: "c", text: "A three-stage mast has a lower profile when the forks are in the lowest position." },
      { id: "d", text: "There are two types of mast available." },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(o)(1)",
  },
  // ── Question 15 ─────────────────────────────────────────────────────────
  15: {
    id: 115,
    topic: "truck-types",
    difficulty: "medium",
    questionText:
      "Which of the following are recognized designs of extended reach forklifts?",
    options: [
      { id: "a", text: "Frame leveling" },
      { id: "b", text: "Outrigger" },
      { id: "c", text: "Slewing" },
      { id: "d", text: "All the above" },
    ],
    correctOptionId: "d",
    oshaClause: "1910.178(b)",
  },
  // ── Question 16 ─────────────────────────────────────────────────────────
  16: {
    id: 116,
    topic: "load-handling",
    difficulty: "easy",
    questionText:
      "Does carrying a load on a forklift require the operator to brake gradually and smoothly?",
    options: [
      { id: "a", text: "Yes" },
      { id: "b", text: "No" },
    ],
    correctOptionId: "a",
    oshaClause: "1910.178(n)(5)",
  },
  // ── Question 17 ─────────────────────────────────────────────────────────
  17: {
    id: 117,
    topic: "load-handling",
    difficulty: "easy",
    questionText:
      "Even if items are lightweight, is it safe to stack them higher than the backrest of the forklift?",
    options: [
      { id: "a", text: "Yes" },
      { id: "b", text: "No" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(o)(2)",
  },
  // ── Question 18 ─────────────────────────────────────────────────────────
  18: {
    id: 118,
    topic: "stability-triangle",
    difficulty: "medium",
    questionText:
      "Can operators assume a rough terrain forklift will remain stable regardless of the surface conditions?",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(l)(1)",
  },
  // ── Question 19 ─────────────────────────────────────────────────────────
  19: {
    id: 119,
    topic: "operating-rules",
    difficulty: "easy",
    questionText:
      "Should operators treat all overhead power lines and electrical sources as live and dangerous?",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "a",
    oshaClause: "1910.178(n)(9)",
  },
  // ── Question 20 ─────────────────────────────────────────────────────────
  20: {
    id: 120,
    topic: "operating-rules",
    difficulty: "medium",
    questionText:
      "Must the parking brake be engaged even when the operator is standing within 25 feet of the lift truck they are monitoring?",
    options: [
      { id: "a", text: "Yes" },
      { id: "b", text: "No" },
    ],
    correctOptionId: "a",
    oshaClause: "1910.178(m)(5)",
  },
  // ── Question 21 ─────────────────────────────────────────────────────────
  21: {
    id: 121,
    topic: "operating-rules",
    difficulty: "easy",
    questionText:
      "In the event of a workplace forklift accident, who must be informed right away?",
    options: [
      { id: "a", text: "The supervisor" },
      { id: "b", text: "Any coworker" },
    ],
    correctOptionId: "a",
    oshaClause: "1910.178(q)(7)",
  },
  // ── Question 22 ─────────────────────────────────────────────────────────
  22: {
    id: 122,
    topic: "operator-training",
    difficulty: "easy",
    questionText:
      "What is the primary reason forklift operator safety training is required?",
    options: [
      { id: "a", text: "Lift trucks last longer" },
      { id: "b", text: "Helps prevent accidents" },
      { id: "c", text: "Makes more profits" },
      { id: "d", text: "Drivers are more efficient" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(l)(1)",
  },
  // ── Question 23 ─────────────────────────────────────────────────────────
  23: {
    id: 123,
    topic: "operator-training",
    difficulty: "easy",
    questionText:
      "Do the controls and instrument gauges vary between different models and types of lift trucks?",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "a",
    oshaClause: "1910.178(l)(3)",
  },
  // ── Question 24 ─────────────────────────────────────────────────────────
  24: {
    id: 124,
    topic: "pre-operation-inspection",
    difficulty: "medium",
    questionText:
      "Can a forklift with malfunctioning gauges still be considered safe for operation?",
    options: [
      { id: "a", text: "Yes" },
      { id: "b", text: "No" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(q)(7)",
  },
  // ── Question 25 ─────────────────────────────────────────────────────────
  25: {
    id: 125,
    topic: "refueling",
    difficulty: "medium",
    questionText:
      "What personal protective equipment is required when handling the battery of an electric lift truck?",
    options: [
      { id: "a", text: "Protective gloves with gauntlets" },
      { id: "b", text: "Eye or face protection" },
      { id: "c", text: "An apron resistant to battery acid" },
      { id: "d", text: "All of the above" },
    ],
    correctOptionId: "d",
    oshaClause: "1910.178(g)(2)",
  },
  // ── Question 26 ─────────────────────────────────────────────────────────
  26: {
    id: 126,
    topic: "operator-training",
    difficulty: "easy",
    questionText:
      "Does having a valid automobile driver's license qualify someone to operate a forklift?",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(l)(1)",
  },
  // ── Question 27 ─────────────────────────────────────────────────────────
  27: {
    id: 127,
    topic: "pre-operation-inspection",
    difficulty: "medium",
    questionText:
      "What is the correct course of action when an operator discovers a forklift defect during the pre-shift inspection?",
    options: [
      { id: "a", text: "Operate the lift truck anyway and inform the supervisor at the end of the shift" },
      { id: "b", text: "Inform the supervisor immediately and red-tag or take out of service." },
      { id: "c", text: "Make repairs yourself" },
      { id: "d", text: "Inform maintenance and then operate as usual" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(q)(7)",
  },
  // ── Question 28 ─────────────────────────────────────────────────────────
  28: {
    id: 128,
    topic: "operating-rules",
    difficulty: "hard",
    questionText:
      "Which safety checks must be completed before an operator drives a forklift onto a trailer at a loading dock?",
    options: [
      { id: "a", text: "Make sure the trailer is able to handle the additional weight of the lift truck" },
      { id: "b", text: "Check that the tire blocks are securely in place in front of and behind the trailer tires" },
      { id: "c", text: "Check that the jack stands for the trailer are in place" },
      { id: "d", text: "Inspect dock leveler or dock plate" },
      { id: "e", text: "All of the above" },
    ],
    correctOptionId: "e",
    oshaClause: "1910.178(n)(6)",
  },
  // ── Question 29 ─────────────────────────────────────────────────────────
  29: {
    id: 129,
    topic: "stability-triangle",
    difficulty: "easy",
    questionText:
      "On a ramp or incline, should a loaded forklift always be positioned so the load faces uphill?",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "a",
    oshaClause: "1910.178(n)(7)",
  },
  // ── Question 30 ─────────────────────────────────────────────────────────
  30: {
    id: 130,
    topic: "operating-rules",
    difficulty: "easy",
    questionText:
      "Workplace accident prevention is the responsibility of which group?",
    options: [
      { id: "a", text: "Truck operator" },
      { id: "b", text: "Everyone" },
      { id: "c", text: "Supervisor" },
      { id: "d", text: "Safety inspector" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(l)",
  },
  // ── Question 31 ─────────────────────────────────────────────────────────
  31: {
    id: 131,
    topic: "pre-operation-inspection",
    difficulty: "hard",
    questionText:
      "Which of the following defects would require a forklift to be immediately removed from service?",
    options: [
      { id: "a", text: "Leaking hydraulics hoses" },
      { id: "b", text: "Faulty brakes" },
      { id: "c", text: "Steering problem" },
      { id: "d", text: "Parking brake will not engage" },
      { id: "e", text: "All of the above" },
    ],
    correctOptionId: "e",
    oshaClause: "1910.178(q)(7)",
  },
  // ── Question 32 ─────────────────────────────────────────────────────────
  32: {
    id: 132,
    topic: "operating-rules",
    difficulty: "hard",
    questionText:
      "When crossing railroad tracks with a forklift, should the operator cross at an angle rather than straight on?",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "a",
    oshaClause: "1910.178(n)(10)",
  },
  // ── Question 33 ─────────────────────────────────────────────────────────
  33: {
    id: 133,
    topic: "load-handling",
    difficulty: "medium",
    questionText:
      "What should an operator do when they encounter a load that looks unstable or improperly arranged on a pallet?",
    options: [
      { id: "a", text: "Lift the load carefully and drive slowly" },
      { id: "b", text: "Re-adjust the load so it is safe to move" },
      { id: "c", text: "Drive in reverse, so the load does not fall on you" },
      { id: "d", text: "None of the above" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(o)(2)",
  },
  // ── Question 34 ─────────────────────────────────────────────────────────
  34: {
    id: 134,
    topic: "refueling",
    difficulty: "easy",
    questionText:
      "Is it safe to perform a quick opportunity charge on an electric forklift battery outside of a designated charging area?",
    options: [
      { id: "a", text: "Yes" },
      { id: "b", text: "No" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(g)(1)",
  },
  // ── Question 35 ─────────────────────────────────────────────────────────
  35: {
    id: 135,
    topic: "refueling",
    difficulty: "hard",
    questionText:
      "Which of the following practices is acceptable when refueling a gas or diesel powered forklift?",
    options: [
      { id: "a", text: "Place your cigarette away from the truck" },
      { id: "b", text: "Leave the engine running" },
      { id: "c", text: "Raise the forks 4 to 6 inches off the floor" },
      { id: "d", text: "Fill the tank until there is a slight overflow" },
      { id: "e", text: "None of the above" },
    ],
    correctOptionId: "e",
    oshaClause: "1910.178(f)(12)",
  },
  // ── Question 36 ─────────────────────────────────────────────────────────
  36: {
    id: 136,
    topic: "stability-triangle",
    difficulty: "easy",
    questionText:
      "Does the center of gravity of a forklift shift when a load is picked up?",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "a",
    oshaClause: "1910.178(l)(1)",
  },
  // ── Question 37 ─────────────────────────────────────────────────────────
  37: {
    id: 137,
    topic: "stability-triangle",
    difficulty: "easy",
    questionText:
      "Is a forklift more likely to tip over when it is carrying a load or when it is unloaded?",
    options: [
      { id: "a", text: "Loaded" },
      { id: "b", text: "Unloaded" },
    ],
    correctOptionId: "a",
    oshaClause: "1910.178(l)(1)",
  },
  // ── Question 38 ─────────────────────────────────────────────────────────
  38: {
    id: 138,
    topic: "stability-triangle",
    difficulty: "hard",
    questionText:
      "Compared to the forces of momentum during operation, is exceeding a forklift's rated load capacity an equally serious hazard?",
    options: [
      { id: "a", text: "Yes" },
      { id: "b", text: "No" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(n)(5)",
  },
  // ── Question 39 ─────────────────────────────────────────────────────────
  39: {
    id: 139,
    topic: "stability-triangle",
    difficulty: "hard",
    questionText:
      "What is the safest action for an operator to take if their forklift starts tipping over to the side?",
    options: [
      { id: "a", text: "Release the seat belt and jump away from the direction the truck is tipping" },
      { id: "b", text: "Stay in the truck and ride it out, your roll cage and seatbelt will protect you" },
      { id: "c", text: "Set the parking brake and sound the horn" },
      { id: "d", text: "None of the above" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(l)(6)",
  },
  // ── Question 40 ─────────────────────────────────────────────────────────
  40: {
    id: 140,
    topic: "refueling",
    difficulty: "medium",
    questionText:
      "When replacing an LP-gas cylinder, should the operator close the service valve and let the engine run until it stalls to clear the fuel lines?",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "a",
    oshaClause: "1910.178(f)(12)",
  },
  // ── Question 41 ─────────────────────────────────────────────────────────
  41: {
    id: 141,
    topic: "pre-operation-inspection",
    difficulty: "hard",
    questionText:
      "Under which of the following conditions is it still acceptable to continue operating a forklift?",
    options: [
      { id: "a", text: "Manufacturers safety warning decals" },
      { id: "b", text: "Mast chains are out of adjustment" },
      { id: "c", text: "No seat belt is present or does not operate properly" },
      { id: "d", text: "Parking brake does not engage fully" },
      { id: "e", text: "None of the above" },
    ],
    correctOptionId: "e",
    oshaClause: "1910.178(q)(7)",
  },
  // ── Question 42 ─────────────────────────────────────────────────────────
  42: {
    id: 142,
    topic: "pedestrian-safety",
    difficulty: "easy",
    questionText:
      "In a shared workspace, does a forklift have the right-of-way over pedestrians?",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(n)(1)",
  },
  // ── Question 43 ─────────────────────────────────────────────────────────
  43: {
    id: 143,
    topic: "operator-training",
    difficulty: "easy",
    questionText:
      "A hands-on practical evaluation by a certified trainer on your specific equipment in your specific facility is a mandatory part of completing forklift certification.",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "a",
    oshaClause: "1910.178(l)(2)",
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
