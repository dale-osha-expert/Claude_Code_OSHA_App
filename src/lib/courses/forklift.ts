// ---------------------------------------------------------------------------
// Forklift Safety — OSHA 1910.178 Powered Industrial Trucks
// ---------------------------------------------------------------------------

import { Course } from "../types";

const questions: Course["questions"] = [
  { id: 1, topic: "stability-triangle", difficulty: "easy", questionText: "What is the most common type of lift truck accident?", options: [{ id: "a", text: "Fallen load" }, { id: "b", text: "Truck tipped over" }, { id: "c", text: "Pedestrian hit by a lift truck" }, { id: "d", text: "A worker hitching a ride fell off the truck" }], correctOptionId: "b", oshaClause: "1910.178(l)(1)" },
  { id: 2, topic: "operator-training", difficulty: "easy", questionText: "If you have been trained to operate a sit-down four-wheel lift truck, you are also qualified to operate a stand-up reach truck.", options: [{ id: "a", text: "True" }, { id: "b", text: "False" }], correctOptionId: "b", oshaClause: "1910.178(l)(1)" },
  { id: 3, topic: "pre-operation-inspection", difficulty: "easy", questionText: "When is completion of the pre-operation inspection checklist necessary?", options: [{ id: "a", text: "Once a month" }, { id: "b", text: "Once a week" }, { id: "c", text: "Daily at the beginning of every shift" }], correctOptionId: "c", oshaClause: "1910.178(q)(7)" },
  { id: 4, topic: "operator-training", difficulty: "easy", questionText: "Only trained and authorized operators are allowed to operate a forklift.", options: [{ id: "a", text: "True" }, { id: "b", text: "False" }], correctOptionId: "a", oshaClause: "1910.178(l)(1)" },
  { id: 5, topic: "load-center", difficulty: "easy", questionText: "Is it OK to operate a lift truck that does not have a Data plate or the Data plate is damaged or unreadable?", options: [{ id: "a", text: "Yes" }, { id: "b", text: "No" }], correctOptionId: "b", oshaClause: "1910.178(o)(2)" },
  { id: 6, topic: "load-handling", difficulty: "easy", questionText: "When traveling with a load on a level surface, you should raise the forks approximately how high from the floor?", options: [{ id: "a", text: "4-6 inches" }, { id: "b", text: "2-3 feet" }, { id: "c", text: "Eye-level with the operator" }, { id: "d", text: "None of the above" }], correctOptionId: "a", oshaClause: "1910.178(n)(5)" },
  { id: 7, topic: "load-handling", difficulty: "easy", questionText: "Loads should always be carried with the mast tilted to the forward-most position.", options: [{ id: "a", text: "True" }, { id: "b", text: "False" }], correctOptionId: "b", oshaClause: "1910.178(n)(5)" },
  { id: 8, topic: "pedestrian-safety", difficulty: "easy", questionText: "When is it ok to give someone a ride on the lift truck?", options: [{ id: "a", text: "Never" }, { id: "b", text: "As long as they remain under the overhead guard" }, { id: "c", text: "If the supervisor says it's OK" }, { id: "d", text: "Only when driving very slowly" }], correctOptionId: "a", oshaClause: "1910.178(n)(8)" },
  { id: 9, topic: "operating-rules", difficulty: "medium", questionText: "The rear-end steering of a forklift:", options: [{ id: "a", text: "Is similar to an automobile" }, { id: "b", text: "Causes the rear end swing to the outside of the turn" }, { id: "c", text: "Causes the front end swing to the out about the same as a car" }, { id: "d", text: "Allows the forklift to make sharp turns at high speed" }], correctOptionId: "b", oshaClause: "1910.178(n)(3)" },
  { id: 10, topic: "load-handling", difficulty: "medium", questionText: "When depositing a load, you should lower the forks until there is slack in the chains before backing out.", options: [{ id: "a", text: "True" }, { id: "b", text: "False" }], correctOptionId: "b", oshaClause: "1910.178(o)(5)" },
  { id: 11, topic: "truck-types", difficulty: "medium", questionText: "On a powered pallet jack the brake can be applied by doing the following:", options: [{ id: "a", text: "Allowing the handle to spring back to the upright position or hold it down to the lowest position" }, { id: "b", text: "Raising the hydraulic jack" }, { id: "c", text: "Taking a sharp turn" }, { id: "d", text: "Jumping off the equipment" }], correctOptionId: "a", oshaClause: "1910.178(m)(5)" },
  { id: 12, topic: "truck-types", difficulty: "medium", questionText: "What makes an Order Picker truck such a useful tool in a warehouse?", options: [{ id: "a", text: "They can pick and choose the material, instead of an entire pallet or load" }, { id: "b", text: "They can maneuver in very narrow aisles" }, { id: "c", text: "Their design can handle small items to very large bulky items" }, { id: "d", text: "All of the above" }], correctOptionId: "d", oshaClause: "1910.178(b)" },
  { id: 13, topic: "truck-types", difficulty: "medium", questionText: "Which one of the following is correct for Class 7 lift trucks?", options: [{ id: "a", text: "Has solid cushion tires" }, { id: "b", text: "Best for use in narrow aisles" }, { id: "c", text: "Best for use on rough terrain" }, { id: "d", text: "None of the above" }], correctOptionId: "c", oshaClause: "1910.178(b)" },
  { id: 14, topic: "load-handling", difficulty: "hard", questionText: "What advantage of a vertical mast forklift is also one of its greatest hazards?", options: [{ id: "a", text: "Its low profile when the masts are in the lowest position obstructs the driver's view." }, { id: "b", text: "A vertical mast forklift can lift a load higher than an extended reach forklift. The risk and severity of injuries increases if a falling object strikes the driver or a bystander." }, { id: "c", text: "A three-stage mast has a lower profile when the forks are in the lowest position." }, { id: "d", text: "There are two types of mast available." }], correctOptionId: "b", oshaClause: "1910.178(o)(1)" },
  { id: 15, topic: "truck-types", difficulty: "medium", questionText: "Which three of the following are types of extended reach forklift?", options: [{ id: "a", text: "Frame leveling" }, { id: "b", text: "Outrigger" }, { id: "c", text: "Slewing" }, { id: "d", text: "All the above" }], correctOptionId: "d", oshaClause: "1910.178(b)" },
  { id: 16, topic: "load-handling", difficulty: "easy", questionText: "Is smooth braking necessary while carrying a load?", options: [{ id: "a", text: "Yes" }, { id: "b", text: "No" }], correctOptionId: "a", oshaClause: "1910.178(n)(5)" },
  { id: 17, topic: "load-handling", difficulty: "easy", questionText: "Is it okay to stack very light loads above the backrest?", options: [{ id: "a", text: "Yes" }, { id: "b", text: "No" }], correctOptionId: "b", oshaClause: "1910.178(o)(2)" },
  { id: 18, topic: "stability-triangle", difficulty: "medium", questionText: "Rough terrain forklifts are stable on all terrains and surfaces.", options: [{ id: "a", text: "True" }, { id: "b", text: "False" }], correctOptionId: "b", oshaClause: "1910.178(l)(1)" },
  { id: 19, topic: "operating-rules", difficulty: "easy", questionText: "Always assume electrical power sources and overhead lines are energized.", options: [{ id: "a", text: "True" }, { id: "b", text: "False" }], correctOptionId: "a", oshaClause: "1910.178(n)(9)" },
  { id: 20, topic: "operating-rules", difficulty: "medium", questionText: "Is it necessary to set the brake if the operator is within 25 feet of an attended lift truck?", options: [{ id: "a", text: "Yes" }, { id: "b", text: "No" }], correctOptionId: "a", oshaClause: "1910.178(m)(5)" },
  { id: 21, topic: "operating-rules", difficulty: "easy", questionText: "Who should be immediately notified if an accident occurs?", options: [{ id: "a", text: "The supervisor" }, { id: "b", text: "Any coworker" }], correctOptionId: "a", oshaClause: "1910.178(q)(7)" },
  { id: 22, topic: "operator-training", difficulty: "easy", questionText: "Lift truck operator safety training most important for which of the following reasons?", options: [{ id: "a", text: "Lift trucks last longer" }, { id: "b", text: "Helps prevent accidents" }, { id: "c", text: "Makes more profits" }, { id: "d", text: "Drivers are more efficient" }], correctOptionId: "b", oshaClause: "1910.178(l)(1)" },
  { id: 23, topic: "operator-training", difficulty: "easy", questionText: "All lift trucks have the same controls and gauges.", options: [{ id: "a", text: "True" }, { id: "b", text: "False" }], correctOptionId: "b", oshaClause: "1910.178(l)(3)" },
  { id: 24, topic: "pre-operation-inspection", difficulty: "medium", questionText: "Is a fork truck considered in good operating condition even if some of the gauges are broken?", options: [{ id: "a", text: "Yes" }, { id: "b", text: "No" }], correctOptionId: "b", oshaClause: "1910.178(q)(7)" },
  { id: 25, topic: "refueling", difficulty: "medium", questionText: "The person charging or replacing the battery of an electric lift truck should always wear:", options: [{ id: "a", text: "Protective gloves with gauntlets" }, { id: "b", text: "Eye or face protection" }, { id: "c", text: "An apron resistant to battery acid" }, { id: "d", text: "All of the above" }], correctOptionId: "d", oshaClause: "1910.178(g)(2)" },
  { id: 26, topic: "operator-training", difficulty: "easy", questionText: "If you know how to drive a car, you also know how to drive a lift truck.", options: [{ id: "a", text: "True" }, { id: "b", text: "False" }], correctOptionId: "b", oshaClause: "1910.178(l)(1)" },
  { id: 27, topic: "pre-operation-inspection", difficulty: "medium", questionText: "What should be done if a lift truck is found to be in need of repair, defective or in any way unsafe to operate?", options: [{ id: "a", text: "Operate the lift truck anyway and inform the supervisor at the end of the shift" }, { id: "b", text: "Inform the supervisor immediately and red-tag or take out of service." }, { id: "c", text: "Make repairs yourself" }, { id: "d", text: "Inform maintenance and then operate as usual" }], correctOptionId: "b", oshaClause: "1910.178(q)(7)" },
  { id: 28, topic: "operating-rules", difficulty: "hard", questionText: "What should the operator do before driving a lift truck into a trailer?", options: [{ id: "a", text: "Make sure the trailer is able to handle the additional weight of the lift truck" }, { id: "b", text: "Check that the tire blocks are securely in place in front of and behind the trailer tires" }, { id: "c", text: "Check that the jack stands for the trailer are in place" }, { id: "d", text: "Inspect dock leveler or dock plate" }, { id: "e", text: "All of the above" }], correctOptionId: "e", oshaClause: "1910.178(n)(6)" },
  { id: 29, topic: "stability-triangle", difficulty: "easy", questionText: "When traveling up or down a grade or ramp, the load should always point uphill.", options: [{ id: "a", text: "True" }, { id: "b", text: "False" }], correctOptionId: "a", oshaClause: "1910.178(n)(7)" },
  { id: 30, topic: "operating-rules", difficulty: "easy", questionText: "Who is responsible for preventing accidents in the workplace?", options: [{ id: "a", text: "Truck operator" }, { id: "b", text: "Everyone" }, { id: "c", text: "Supervisor" }, { id: "d", text: "Safety inspector" }], correctOptionId: "b", oshaClause: "1910.178(l)" },
  { id: 31, topic: "pre-operation-inspection", difficulty: "hard", questionText: "Which of the following items will take your lift truck out of service?", options: [{ id: "a", text: "Leaking hydraulics hoses" }, { id: "b", text: "Faulty brakes" }, { id: "c", text: "Steering problem" }, { id: "d", text: "Parking brake will not engage" }, { id: "e", text: "All of the above" }], correctOptionId: "e", oshaClause: "1910.178(q)(7)" },
  { id: 32, topic: "operating-rules", difficulty: "hard", questionText: "Railroad tracks should always be crossed straight on and not at an angle.", options: [{ id: "a", text: "True" }, { id: "b", text: "False" }], correctOptionId: "b", oshaClause: "1910.178(n)(10)" },
  { id: 33, topic: "load-handling", difficulty: "medium", questionText: "If a load appears to be improperly stacked or unstable:", options: [{ id: "a", text: "Lift the load carefully and drive slowly" }, { id: "b", text: "Re-adjust the load so it is safe to move" }, { id: "c", text: "Drive in reverse, so the load does not fall on you" }, { id: "d", text: "None of the above" }], correctOptionId: "b", oshaClause: "1910.178(o)(2)" },
  { id: 34, topic: "refueling", difficulty: "easy", questionText: "Is it okay to do a quick battery charge during a lunch break on an electric lift truck?", options: [{ id: "a", text: "Yes" }, { id: "b", text: "No" }], correctOptionId: "b", oshaClause: "1910.178(g)(1)" },
  { id: 35, topic: "refueling", difficulty: "hard", questionText: "When refueling a gas or diesel lift truck:", options: [{ id: "a", text: "Place your cigarette away from the truck" }, { id: "b", text: "Leave the engine running" }, { id: "c", text: "Raise the forks 4 to 6 inches off the floor" }, { id: "d", text: "Fill the tank until there is a slight overflow" }, { id: "e", text: "None of the above" }], correctOptionId: "e", oshaClause: "1910.178(f)(12)" },
  { id: 36, topic: "stability-triangle", difficulty: "easy", questionText: "Lift trucks are designed so that the center of gravity remains the same loaded or unloaded.", options: [{ id: "a", text: "True" }, { id: "b", text: "False" }], correctOptionId: "b", oshaClause: "1910.178(l)(1)" },
  { id: 37, topic: "stability-triangle", difficulty: "easy", questionText: "When is a lift truck most stable?", options: [{ id: "a", text: "Loaded" }, { id: "b", text: "Unloaded" }], correctOptionId: "b", oshaClause: "1910.178(l)(1)" },
  { id: 38, topic: "stability-triangle", difficulty: "hard", questionText: "Is overloading as serious a problem as momentum?", options: [{ id: "a", text: "Yes" }, { id: "b", text: "No" }], correctOptionId: "b", oshaClause: "1910.178(n)(5)" },
  { id: 39, topic: "stability-triangle", difficulty: "hard", questionText: "If a lift truck begins to tip over sideways, the operator should:", options: [{ id: "a", text: "Release the seat belt and jump away from the direction the truck is tipping" }, { id: "b", text: "Stay in the truck and ride it out, your roll cage and seatbelt will protect you" }, { id: "c", text: "Set the parking brake and sound the horn" }, { id: "d", text: "None of the above" }], correctOptionId: "b", oshaClause: "1910.178(l)(6)" },
  { id: 40, topic: "refueling", difficulty: "medium", questionText: "Before changing a Liquid Propane bottle, the service valve must be shut off and the engine left running until it stops (in order to purge the lines).", options: [{ id: "a", text: "True" }, { id: "b", text: "False" }], correctOptionId: "a", oshaClause: "1910.178(f)(12)" },
  { id: 41, topic: "pre-operation-inspection", difficulty: "hard", questionText: "It's okay to operate the lift truck when the following is missing or damaged:", options: [{ id: "a", text: "Manufacturers safety warning decals" }, { id: "b", text: "Mast chains are out of adjustment" }, { id: "c", text: "No seat belt is present or does not operate properly" }, { id: "d", text: "Parking brake does not engage fully" }, { id: "e", text: "None of the above" }], correctOptionId: "e", oshaClause: "1910.178(q)(7)" },
  { id: 42, topic: "pedestrian-safety", difficulty: "easy", questionText: "Pedestrians should always yield right-of-way to a lift truck.", options: [{ id: "a", text: "True" }, { id: "b", text: "False" }], correctOptionId: "b", oshaClause: "1910.178(n)(1)" },
  { id: 43, topic: "operator-training", difficulty: "easy", questionText: "In order to complete your certification, a certified trainer is required to perform a practical hands-on evaluation so you can demonstrate your knowledge on your specific equipment in your specific facility.", options: [{ id: "a", text: "True" }, { id: "b", text: "False" }], correctOptionId: "a", oshaClause: "1910.178(l)(2)" },
];

const lessons: Record<string, string> = {
  "stability-triangle": `**Understanding the Stability Triangle — OSHA 1910.178(l)**

A sit-down counterbalanced forklift maintains stability through three contact points: the two front wheel axle ends and the rear axle pivot point. These three points form the "stability triangle." The combined center of gravity (truck + load) must remain inside this triangle at all times, or the truck will tip.

When a load is picked up, the combined center of gravity shifts forward and upward. Turning at speed, especially with an elevated load, generates centrifugal force that can push the center of gravity laterally outside the triangle, causing a side tip-over.

OSHA 1910.178(l)(6) requires operators to avoid sudden direction changes and to slow down before turns. Traveling with the load low (4–6 inches above floor level) and tilted back keeps the center of gravity low and within the triangle. On ramps, OSHA 1910.178(n)(7) requires that loaded forklifts travel with the load pointing upgrade — meaning reverse down a ramp with a load, and drive forward up a ramp with a load. If a tip-over does occur, the operator must stay in the truck, hold on, and lean away from the point of impact — never jump.`,

  "refueling": `**Safe Refueling & Charging Practices — OSHA 1910.178(f) & (g)**

OSHA draws a clear distinction between fuel-powered and electric-powered industrial trucks. For LP-gas and diesel trucks, 1910.178(f)(12) mandates that the engine must be shut off during refueling and that no open flames or ignition sources are permitted in the refueling area. Before changing a Liquid Propane bottle, the service valve must be shut off and the engine left running until it stops in order to purge the fuel lines.

For operations in enclosed spaces, 1910.178(f)(9) requires that ventilation be sufficient to keep exhaust gas concentrations below hazardous levels.

Electric forklifts have their own hazards. During battery charging, lead-acid batteries emit hydrogen gas, which is highly flammable. OSHA 1910.178(g)(1) requires designated charging areas with adequate ventilation, prohibition of open flames and sparks, and proper handling procedures for battery acid. Battery charging must only occur in designated areas — quick charges in unauthorized locations are prohibited. Personnel handling batteries must wear protective gloves with gauntlets, eye or face protection, and an acid-resistant apron per 1910.178(g)(2).`,

  "load-center": `**Load Center, Data Plates & Capacity — OSHA 1910.178(o)**

Every forklift has a data plate specifying its rated load capacity at a given load center distance — typically 24 inches from the face of the forks. The load center is the horizontal distance from the fork face to the center of gravity of the load. This number is critical because it determines the moment arm acting on the truck's fulcrum point (the front axle).

Operating a lift truck without a legible data plate is prohibited because the operator has no way to verify the truck's rated capacity. OSHA 1910.178(o)(2) requires that trucks shall not be loaded beyond their rated capacity. Overloading — even by a small margin — shifts the combined center of gravity forward of the stability triangle, risking a tip-over.

While overloading is dangerous, momentum is actually a more serious operational hazard because it affects braking distance and tip-over risk dynamically during travel, turns, and stops. Always verify the load weight and center of gravity before lifting.`,

  "pedestrian-safety": `**Pedestrian Safety & Travel Rules — OSHA 1910.178(n)**

Forklift-pedestrian incidents are among the most common causes of serious warehouse injuries. OSHA 1910.178(n)(1) requires operators to slow down and sound the horn at cross aisles, doorways, and anywhere pedestrians may be present. Critically, lift trucks must yield the right-of-way to pedestrians — not the other way around.

OSHA 1910.178(n)(8) strictly prohibits carrying passengers on a forklift under any circumstances. There is no exception for supervisor approval, staying under the overhead guard, or driving slowly. Riders on forklifts face serious risk of falling and being crushed.

Speed must be maintained at a level that allows the operator to stop safely, accounting for floor conditions, congestion, and visibility. Intersections, loading docks, and areas near break rooms are high-risk zones that require extra vigilance.`,

  "operator-training": `**Operator Training & Certification — OSHA 1910.178(l)**

OSHA 1910.178(l)(1) mandates that only trained and authorized operators shall be permitted to operate a powered industrial truck. Training must be specific to the type of truck being operated — being certified on a sit-down counterbalanced forklift does not qualify an operator to use a stand-up reach truck, order picker, or any other type.

Knowing how to drive an automobile does not translate to forklift competence. Forklifts have rear-wheel steering, different braking characteristics, unique load dynamics, and specialized controls that vary between truck models. OSHA 1910.178(l)(3) recognizes that different trucks have different controls and gauges, requiring operators to receive truck-specific training.

To complete certification, OSHA 1910.178(l)(2) requires a certified trainer to perform a practical hands-on evaluation where the operator demonstrates competence on their specific equipment in their specific facility. Classroom instruction alone is not sufficient.`,

  "pre-operation-inspection": `**Pre-Operation Inspection & Maintenance — OSHA 1910.178(q)(7)**

OSHA 1910.178(q)(7) requires that industrial trucks be examined before being placed in service each shift. This pre-operation inspection must be completed daily at the beginning of every shift — not weekly or monthly.

A lift truck is not considered to be in good operating condition if any of its gauges, safety devices, or critical components are defective. Items that will take a truck out of service include: leaking hydraulic hoses, faulty brakes, steering problems, a parking brake that will not fully engage, missing or damaged manufacturer safety warning decals, mast chains out of adjustment, a missing or inoperative seat belt, and damaged or unreadable data plates.

When a lift truck is found to be in need of repair, defective, or in any way unsafe, the operator must immediately inform the supervisor and red-tag or take the truck out of service.`,

  "load-handling": `**Load Handling & Traveling with Loads — OSHA 1910.178(n) & (o)**

When traveling with a load on a level surface, forks should be raised approximately 4–6 inches from the floor — just enough to clear surface irregularities. The mast should be tilted back (not forward) to cradle the load against the backrest and prevent it from sliding off the forks.

Smooth braking is essential when carrying a load because sudden stops can cause the load to shift or fall forward. When depositing a load, the forks should be lowered until the load rests on the surface — not until there is slack in the chains. Backing out with slack chains risks snagging and pulling the load.

Loads should never be stacked above the backrest, even light ones. If a load appears improperly stacked or unstable, the operator must stop and re-adjust the load before moving it. Vertical mast forklifts can lift loads to great heights — both their primary advantage and greatest hazard.`,

  "truck-types": `**Powered Industrial Truck Classifications — OSHA 1910.178(a) & (b)**

OSHA recognizes multiple classes of powered industrial trucks, each designed for specific applications and environments. Understanding the differences is critical for safe operation.

Order Picker trucks are among the most versatile warehouse tools. They allow operators to pick individual items rather than entire pallets, maneuver in very narrow aisles, and handle everything from small items to large bulky loads.

Class 7 lift trucks are rough terrain forklifts, designed specifically for outdoor use on uneven ground. However, being designed for rough terrain does not mean they are stable on all surfaces — operators must still exercise caution.

Extended reach forklifts come in three main types: frame leveling, outrigger, and slewing designs. Powered pallet jacks have unique brake systems — the brake is applied by allowing the handle to spring back to the upright position or by pushing it down to the lowest position.`,

  "operating-rules": `**General Operating Rules — OSHA 1910.178(m) & (n)**

Forklift operation requires adherence to numerous safety rules that differ significantly from automobile driving. The rear-end steering of a forklift causes the rear end to swing to the outside of the turn, creating a hazard for nearby workers and objects.

Operators must always assume that electrical power sources and overhead lines are energized. OSHA 1910.178(m)(5) requires that the brake must be set whenever the operator leaves the truck, even if they are within 25 feet of an attended lift truck.

Before driving a lift truck into a trailer, operators must verify: the trailer can handle the additional weight, tire blocks are securely placed, jack stands are in position, and the dock leveler or dock plate has been inspected. Railroad tracks should be crossed at an angle (diagonally) rather than straight on, to prevent forks from getting caught in the rails.

If an accident occurs, the supervisor must be notified immediately. Everyone in the workplace shares responsibility for preventing accidents.`,
};

export const forkliftCourse: Course = {
  id: "forklift",
  slug: "forklift-safety",
  title: "Powered Industrial Trucks (Forklift) Safety",
  topic: "Forklift Safety",
  productLine: "Warehouse & Logistics Safety",
  durationMinutes: 45,
  shortDescription:
    "Master the OSHA 1910.178 standard for powered industrial trucks. Covers the stability triangle, load handling, pedestrian safety, pre-operation inspection, and operator certification requirements.",
  oshaRefs: ["1910.178"],
  passingScore: 70,
  questions,
  lessons,
};
