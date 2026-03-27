// ---------------------------------------------------------------------------
// ForkliftMastery — Base Question Bank
// 43 questions covering nine OSHA 1910.178 topic areas.
// ---------------------------------------------------------------------------

import { Question } from "./types";

export const BASE_QUESTIONS: Question[] = [
  // ── Easy ─────────────────────────────────────────────────────────────────
  {
    id: 1,
    topic: "stability-triangle",
    difficulty: "easy",
    questionText:
      "What is the most common type of lift truck accident?",
    options: [
      { id: "a", text: "Fallen load" },
      { id: "b", text: "Truck tipped over" },
      { id: "c", text: "Pedestrian hit by a lift truck" },
      { id: "d", text: "A worker hitching a ride fell off the truck" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(l)(1)",
  },
  {
    id: 2,
    topic: "operator-training",
    difficulty: "easy",
    questionText:
      "If you have been trained to operate a sit-down four-wheel lift truck, you are also qualified to operate a stand-up reach truck.",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(l)(1)",
  },
  {
    id: 3,
    topic: "pre-operation-inspection",
    difficulty: "easy",
    questionText:
      "When is completion of the pre-operation inspection checklist necessary?",
    options: [
      { id: "a", text: "Once a month" },
      { id: "b", text: "Once a week" },
      { id: "c", text: "Daily at the beginning of every shift" },
    ],
    correctOptionId: "c",
    oshaClause: "1910.178(q)(7)",
  },
  {
    id: 4,
    topic: "operator-training",
    difficulty: "easy",
    questionText:
      "Only trained and authorized operators are allowed to operate a forklift.",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "a",
    oshaClause: "1910.178(l)(1)",
  },
  {
    id: 5,
    topic: "load-center",
    difficulty: "easy",
    questionText:
      "Is it OK to operate a lift truck that does not have a Data plate or the Data plate is damaged or unreadable?",
    options: [
      { id: "a", text: "Yes" },
      { id: "b", text: "No" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(o)(2)",
  },
  {
    id: 6,
    topic: "load-handling",
    difficulty: "easy",
    questionText:
      "When traveling with a load on a level surface, you should raise the forks approximately how high from the floor?",
    options: [
      { id: "a", text: "4-6 inches" },
      { id: "b", text: "2-3 feet" },
      { id: "c", text: "Eye-level with the operator" },
      { id: "d", text: "None of the above" },
    ],
    correctOptionId: "a",
    oshaClause: "1910.178(n)(5)",
  },
  {
    id: 7,
    topic: "load-handling",
    difficulty: "easy",
    questionText:
      "Loads should always be carried with the mast tilted to the forward-most position.",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(n)(5)",
  },
  {
    id: 8,
    topic: "pedestrian-safety",
    difficulty: "easy",
    questionText:
      "When is it ok to give someone a ride on the lift truck?",
    options: [
      { id: "a", text: "Never" },
      { id: "b", text: "As long as they remain under the overhead guard" },
      { id: "c", text: "If the supervisor says it's OK" },
      { id: "d", text: "Only when driving very slowly" },
    ],
    correctOptionId: "a",
    oshaClause: "1910.178(n)(8)",
  },
  {
    id: 9,
    topic: "operating-rules",
    difficulty: "medium",
    questionText:
      "The rear-end steering of a forklift:",
    options: [
      { id: "a", text: "Is similar to an automobile" },
      { id: "b", text: "Causes the rear end swing to the outside of the turn" },
      { id: "c", text: "Causes the front end swing to the out about the same as a car" },
      { id: "d", text: "Allows the forklift to make sharp turns at high speed" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(n)(3)",
  },
  {
    id: 10,
    topic: "load-handling",
    difficulty: "medium",
    questionText:
      "When depositing a load, you should lower the forks until there is slack in the chains before backing out.",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(o)(5)",
  },

  // ── Medium ───────────────────────────────────────────────────────────────
  {
    id: 11,
    topic: "truck-types",
    difficulty: "medium",
    questionText:
      "On a powered pallet jack the brake can be applied by doing the following:",
    options: [
      { id: "a", text: "Allowing the handle to spring back to the upright position or hold it down to the lowest position" },
      { id: "b", text: "Raising the hydraulic jack" },
      { id: "c", text: "Taking a sharp turn" },
      { id: "d", text: "Jumping off the equipment" },
    ],
    correctOptionId: "a",
    oshaClause: "1910.178(m)(5)",
  },
  {
    id: 12,
    topic: "truck-types",
    difficulty: "medium",
    questionText:
      "What makes an Order Picker truck such a useful tool in a warehouse?",
    options: [
      { id: "a", text: "They can pick and choose the material, instead of an entire pallet or load" },
      { id: "b", text: "They can maneuver in very narrow aisles" },
      { id: "c", text: "Their design can handle small items to very large bulky items" },
      { id: "d", text: "All of the above" },
    ],
    correctOptionId: "d",
    oshaClause: "1910.178(b)",
  },
  {
    id: 13,
    topic: "truck-types",
    difficulty: "medium",
    questionText:
      "Which one of the following is correct for Class 7 lift trucks?",
    options: [
      { id: "a", text: "Has solid cushion tires" },
      { id: "b", text: "Best for use in narrow aisles" },
      { id: "c", text: "Best for use on rough terrain" },
      { id: "d", text: "None of the above" },
    ],
    correctOptionId: "c",
    oshaClause: "1910.178(b)",
  },
  {
    id: 14,
    topic: "load-handling",
    difficulty: "hard",
    questionText:
      "What advantage of a vertical mast forklift is also one of its greatest hazards?",
    options: [
      { id: "a", text: "Its low profile when the masts are in the lowest position obstructs the driver's view." },
      { id: "b", text: "A vertical mast forklift can lift a load higher than an extended reach forklift. The risk and severity of injuries increases if a falling object strikes the driver or a bystander." },
      { id: "c", text: "A three-stage mast has a lower profile when the forks are in the lowest position." },
      { id: "d", text: "There are two types of mast available." },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(o)(1)",
  },
  {
    id: 15,
    topic: "truck-types",
    difficulty: "medium",
    questionText:
      "Which three of the following are types of extended reach forklift?",
    options: [
      { id: "a", text: "Frame leveling" },
      { id: "b", text: "Outrigger" },
      { id: "c", text: "Slewing" },
      { id: "d", text: "All the above" },
    ],
    correctOptionId: "d",
    oshaClause: "1910.178(b)",
  },
  {
    id: 16,
    topic: "load-handling",
    difficulty: "easy",
    questionText:
      "Is smooth braking necessary while carrying a load?",
    options: [
      { id: "a", text: "Yes" },
      { id: "b", text: "No" },
    ],
    correctOptionId: "a",
    oshaClause: "1910.178(n)(5)",
  },
  {
    id: 17,
    topic: "load-handling",
    difficulty: "easy",
    questionText:
      "Is it okay to stack very light loads above the backrest?",
    options: [
      { id: "a", text: "Yes" },
      { id: "b", text: "No" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(o)(2)",
  },
  {
    id: 18,
    topic: "stability-triangle",
    difficulty: "medium",
    questionText:
      "Rough terrain forklifts are stable on all terrains and surfaces.",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(l)(1)",
  },
  {
    id: 19,
    topic: "operating-rules",
    difficulty: "easy",
    questionText:
      "Always assume electrical power sources and overhead lines are energized.",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "a",
    oshaClause: "1910.178(n)(9)",
  },
  {
    id: 20,
    topic: "operating-rules",
    difficulty: "medium",
    questionText:
      "Is it necessary to set the brake if the operator is within 25 feet of an attended lift truck?",
    options: [
      { id: "a", text: "Yes" },
      { id: "b", text: "No" },
    ],
    correctOptionId: "a",
    oshaClause: "1910.178(m)(5)",
  },
  {
    id: 21,
    topic: "operating-rules",
    difficulty: "easy",
    questionText:
      "Who should be immediately notified if an accident occurs?",
    options: [
      { id: "a", text: "The supervisor" },
      { id: "b", text: "Any coworker" },
    ],
    correctOptionId: "a",
    oshaClause: "1910.178(q)(7)",
  },
  {
    id: 22,
    topic: "operator-training",
    difficulty: "easy",
    questionText:
      "Lift truck operator safety training most important for which of the following reasons?",
    options: [
      { id: "a", text: "Lift trucks last longer" },
      { id: "b", text: "Helps prevent accidents" },
      { id: "c", text: "Makes more profits" },
      { id: "d", text: "Drivers are more efficient" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(l)(1)",
  },
  {
    id: 23,
    topic: "operator-training",
    difficulty: "easy",
    questionText:
      "All lift trucks have the same controls and gauges.",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(l)(3)",
  },
  {
    id: 24,
    topic: "pre-operation-inspection",
    difficulty: "medium",
    questionText:
      "Is a fork truck considered in good operating condition even if some of the gauges are broken?",
    options: [
      { id: "a", text: "Yes" },
      { id: "b", text: "No" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(q)(7)",
  },
  {
    id: 25,
    topic: "refueling",
    difficulty: "medium",
    questionText:
      "The person charging or replacing the battery of an electric lift truck should always wear:",
    options: [
      { id: "a", text: "Protective gloves with gauntlets" },
      { id: "b", text: "Eye or face protection" },
      { id: "c", text: "An apron resistant to battery acid" },
      { id: "d", text: "All of the above" },
    ],
    correctOptionId: "d",
    oshaClause: "1910.178(g)(2)",
  },
  {
    id: 26,
    topic: "operator-training",
    difficulty: "easy",
    questionText:
      "If you know how to drive a car, you also know how to drive a lift truck.",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(l)(1)",
  },
  {
    id: 27,
    topic: "pre-operation-inspection",
    difficulty: "medium",
    questionText:
      "What should be done if a lift truck is found to be in need of repair, defective or in any way unsafe to operate?",
    options: [
      { id: "a", text: "Operate the lift truck anyway and inform the supervisor at the end of the shift" },
      { id: "b", text: "Inform the supervisor immediately and red-tag or take out of service." },
      { id: "c", text: "Make repairs yourself" },
      { id: "d", text: "Inform maintenance and then operate as usual" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(q)(7)",
  },
  {
    id: 28,
    topic: "operating-rules",
    difficulty: "hard",
    questionText:
      "What should the operator do before driving a lift truck into a trailer?",
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
  {
    id: 29,
    topic: "stability-triangle",
    difficulty: "easy",
    questionText:
      "When traveling up or down a grade or ramp, the load should always point uphill.",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "a",
    oshaClause: "1910.178(n)(7)",
  },
  {
    id: 30,
    topic: "operating-rules",
    difficulty: "easy",
    questionText:
      "Who is responsible for preventing accidents in the workplace?",
    options: [
      { id: "a", text: "Truck operator" },
      { id: "b", text: "Everyone" },
      { id: "c", text: "Supervisor" },
      { id: "d", text: "Safety inspector" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(l)",
  },
  {
    id: 31,
    topic: "pre-operation-inspection",
    difficulty: "hard",
    questionText:
      "Which of the following items will take your lift truck out of service?",
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
  {
    id: 32,
    topic: "operating-rules",
    difficulty: "hard",
    questionText:
      "Railroad tracks should always be crossed straight on and not at an angle.",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(n)(10)",
  },
  {
    id: 33,
    topic: "load-handling",
    difficulty: "medium",
    questionText:
      "If a load appears to be improperly stacked or unstable:",
    options: [
      { id: "a", text: "Lift the load carefully and drive slowly" },
      { id: "b", text: "Re-adjust the load so it is safe to move" },
      { id: "c", text: "Drive in reverse, so the load does not fall on you" },
      { id: "d", text: "None of the above" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(o)(2)",
  },
  {
    id: 34,
    topic: "refueling",
    difficulty: "easy",
    questionText:
      "Is it okay to do a quick battery charge during a lunch break on an electric lift truck?",
    options: [
      { id: "a", text: "Yes" },
      { id: "b", text: "No" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(g)(1)",
  },
  {
    id: 35,
    topic: "refueling",
    difficulty: "hard",
    questionText:
      "When refueling a gas or diesel lift truck:",
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
  {
    id: 36,
    topic: "stability-triangle",
    difficulty: "easy",
    questionText:
      "Lift trucks are designed so that the center of gravity remains the same loaded or unloaded.",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(l)(1)",
  },
  {
    id: 37,
    topic: "stability-triangle",
    difficulty: "easy",
    questionText:
      "When is a lift truck most stable?",
    options: [
      { id: "a", text: "Loaded" },
      { id: "b", text: "Unloaded" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(l)(1)",
  },
  {
    id: 38,
    topic: "stability-triangle",
    difficulty: "hard",
    questionText:
      "Is overloading as serious a problem as momentum?",
    options: [
      { id: "a", text: "Yes" },
      { id: "b", text: "No" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(n)(5)",
  },
  {
    id: 39,
    topic: "stability-triangle",
    difficulty: "hard",
    questionText:
      "If a lift truck begins to tip over sideways, the operator should:",
    options: [
      { id: "a", text: "Release the seat belt and jump away from the direction the truck is tipping" },
      { id: "b", text: "Stay in the truck and ride it out, your roll cage and seatbelt will protect you" },
      { id: "c", text: "Set the parking brake and sound the horn" },
      { id: "d", text: "None of the above" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(l)(6)",
  },
  {
    id: 40,
    topic: "refueling",
    difficulty: "medium",
    questionText:
      "Before changing a Liquid Propane bottle, the service valve must be shut off and the engine left running until it stops (in order to purge the lines).",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "a",
    oshaClause: "1910.178(f)(12)",
  },
  {
    id: 41,
    topic: "pre-operation-inspection",
    difficulty: "hard",
    questionText:
      "It's okay to operate the lift truck when the following is missing or damaged:",
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
  {
    id: 42,
    topic: "pedestrian-safety",
    difficulty: "easy",
    questionText:
      "Pedestrians should always yield right-of-way to a lift truck.",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "b",
    oshaClause: "1910.178(n)(1)",
  },
  {
    id: 43,
    topic: "operator-training",
    difficulty: "easy",
    questionText:
      "In order to complete your certification, a certified trainer is required to perform a practical hands-on evaluation so you can demonstrate your knowledge on your specific equipment in your specific facility.",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "a",
    oshaClause: "1910.178(l)(2)",
  },
];
