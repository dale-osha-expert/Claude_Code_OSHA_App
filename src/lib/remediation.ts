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
const REPHRASED_QUESTIONS: Record<number, Question> = {};

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
