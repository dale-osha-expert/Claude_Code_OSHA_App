// ---------------------------------------------------------------------------
// Electrocution Hazards Part I: Worksite Safety
// MARCOM ID: 368 | OSHA 1926 Subpart K (Electrical)
// ---------------------------------------------------------------------------

import { Course } from "../types";

const questions: Course["questions"] = [
  // ── Electrical Hazards & OSHA Standards ──────────────────────────────────
  {
    id: 1,
    topic: "electrical-hazards-osha",
    difficulty: "easy",
    questionText:
      "Electricity kills more than ___ construction workers each year and injures thousands more.",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "50" },
      { id: "c", text: "100" },
      { id: "d", text: "500" },
    ],
    correctOptionId: "c",
    oshaClause: "1926 Subpart K",
  },
  {
    id: 2,
    topic: "electrical-hazards-osha",
    difficulty: "easy",
    questionText:
      "True or False: Most electrical injuries on construction sites could have been prevented.",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "a",
    oshaClause: "1926 Subpart K",
  },
  {
    id: 3,
    topic: "electrical-hazards-osha",
    difficulty: "medium",
    questionText:
      "Which OSHA standard subpart covers electrical safety requirements for construction work?",
    options: [
      { id: "a", text: "Subpart D — Occupational Health and Environmental Controls" },
      { id: "b", text: "Subpart K — Electrical" },
      { id: "c", text: "Subpart P — Excavations" },
      { id: "d", text: "Subpart Z — Toxic and Hazardous Substances" },
    ],
    correctOptionId: "b",
    oshaClause: "1926 Subpart K",
  },

  // ── High Voltage Power Lines ──────────────────────────────────────────────
  {
    id: 4,
    topic: "power-lines",
    difficulty: "easy",
    questionText:
      "When working near overhead power lines, you should always assume they are:",
    options: [
      { id: "a", text: "De-energized and safe to approach" },
      { id: "b", text: "Energized and dangerous" },
      { id: "c", text: "Properly insulated and grounded" },
      { id: "d", text: "Shut off during daylight hours" },
    ],
    correctOptionId: "b",
    oshaClause: "1926.1408(h)",
  },
  {
    id: 5,
    topic: "power-lines",
    difficulty: "medium",
    questionText:
      "Which OSHA regulation governs power line safety for equipment operations up to 350 kV on construction sites?",
    options: [
      { id: "a", text: "1926.403" },
      { id: "b", text: "1926.416" },
      { id: "c", text: "1926.1408" },
      { id: "d", text: "1926.404" },
    ],
    correctOptionId: "c",
    oshaClause: "1926.1408(h)",
  },
  {
    id: 6,
    topic: "power-lines",
    difficulty: "hard",
    questionText:
      "Before beginning any work near overhead power lines, what is the FIRST step an employer must take according to OSHA 1926.1408?",
    options: [
      { id: "a", text: "Install physical barriers around the entire work zone" },
      { id: "b", text: "Determine the voltage of the nearby power lines to establish minimum approach distances" },
      { id: "c", text: "Train all workers on electrical hazard awareness" },
      { id: "d", text: "Contact the utility company immediately to de-energize all lines" },
    ],
    correctOptionId: "b",
    oshaClause: "1926.1408(h)",
  },

  // ── Tools, Extension Cords & Receptacles ─────────────────────────────────
  {
    id: 7,
    topic: "tools-cords",
    difficulty: "easy",
    questionText:
      "Before using any power tool on a construction site, you should:",
    options: [
      { id: "a", text: "Test it at full power to check performance" },
      { id: "b", text: "Inspect it for damage such as cracked insulation or frayed cords" },
      { id: "c", text: "Check the voltage label only" },
      { id: "d", text: "None of the above" },
    ],
    correctOptionId: "b",
    oshaClause: "1926.416(a)",
  },
  {
    id: 8,
    topic: "tools-cords",
    difficulty: "medium",
    questionText:
      "Extension cords used outdoors or in wet locations on a construction site must be:",
    options: [
      { id: "a", text: "Rated for indoor use only" },
      { id: "b", text: "Rated for outdoor use" },
      { id: "c", text: "Any rating is acceptable as long as they are dry" },
      { id: "d", text: "At least 12 gauge" },
    ],
    correctOptionId: "b",
    oshaClause: "1926.405",
  },
  {
    id: 9,
    topic: "tools-cords",
    difficulty: "medium",
    questionText:
      "Which OSHA regulation specifically covers wiring methods, components, and equipment for general use in construction environments?",
    options: [
      { id: "a", text: "1926.403" },
      { id: "b", text: "1926.404" },
      { id: "c", text: "1926.405" },
      { id: "d", text: "1926.416" },
    ],
    correctOptionId: "c",
    oshaClause: "1926.405",
  },

  // ── Grounding, Continuity & GFCIs ────────────────────────────────────────
  {
    id: 10,
    topic: "grounding-gfci",
    difficulty: "easy",
    questionText: "GFCI stands for:",
    options: [
      { id: "a", text: "Ground Fault Circuit Interrupter" },
      { id: "b", text: "General Fault Control Interface" },
      { id: "c", text: "Ground Force Current Indicator" },
      { id: "d", text: "Generator Fault Circuit Insulator" },
    ],
    correctOptionId: "a",
    oshaClause: "1926.404",
  },
  {
    id: 11,
    topic: "grounding-gfci",
    difficulty: "medium",
    questionText:
      "The primary purpose of electrical grounding on a construction site is to:",
    options: [
      { id: "a", text: "Increase electrical current flow to tools" },
      { id: "b", text: "Prevent circuit breakers from tripping too often" },
      { id: "c", text: "Provide a safe path for fault current so it does not pass through a worker's body" },
      { id: "d", text: "Reduce the overall energy consumption of tools" },
    ],
    correctOptionId: "c",
    oshaClause: "1926.404",
  },
  {
    id: 12,
    topic: "grounding-gfci",
    difficulty: "hard",
    questionText:
      "According to OSHA 1926.404, GFCI protection is required on construction sites for which of the following?",
    options: [
      { id: "a", text: "All permanent wiring within the building structure" },
      { id: "b", text: "All 120-volt, single-phase, 15- and 20-ampere receptacles not part of the permanent wiring" },
      { id: "c", text: "Only outdoor receptacles exposed to rain" },
      { id: "d", text: "Three-phase circuits rated above 240 volts" },
    ],
    correctOptionId: "b",
    oshaClause: "1926.404",
  },

  // ── Lock-Out / Tag-Out ────────────────────────────────────────────────────
  {
    id: 13,
    topic: "lockout-tagout",
    difficulty: "easy",
    questionText:
      "The primary purpose of Lock-Out/Tag-Out (LOTO) procedures is to protect workers from:",
    options: [
      { id: "a", text: "Falls from elevation during electrical work" },
      { id: "b", text: "Unexpected energization of equipment during maintenance or repair" },
      { id: "c", text: "Chemical exposure from battery acid" },
      { id: "d", text: "Impact injuries from heavy machinery" },
    ],
    correctOptionId: "b",
    oshaClause: "1926 Subpart C",
  },
  {
    id: 14,
    topic: "lockout-tagout",
    difficulty: "medium",
    questionText:
      "Before performing maintenance or repair on electrical equipment, you must:",
    options: [
      { id: "a", text: "Work as quickly as possible to minimize downtime" },
      { id: "b", text: "Have a supervisor present at all times" },
      { id: "c", text: "De-energize the equipment and apply your personal lock and tag" },
      { id: "d", text: "Test the equipment while energized to identify the problem first" },
    ],
    correctOptionId: "c",
    oshaClause: "1926 Subpart C",
  },
  {
    id: 15,
    topic: "lockout-tagout",
    difficulty: "hard",
    questionText:
      "After completing maintenance work, who is the ONLY person authorized to remove a lockout/tagout device?",
    options: [
      { id: "a", text: "Any qualified electrician currently on site" },
      { id: "b", text: "The supervisor in charge of the work area" },
      { id: "c", text: "The worker who installed the device" },
      { id: "d", text: "The site safety manager" },
    ],
    correctOptionId: "c",
    oshaClause: "1926 Subpart C",
  },
];

const lessons: Record<string, string> = {
  "electrical-hazards-osha": `**Electrical Hazards and OSHA Standards in Construction — OSHA 1926 Subpart K**

Electricity is one of the leading causes of death on construction sites. Every year, it kills more than a hundred construction workers and injures thousands more — yet most of these incidents could have been prevented. Construction workers suffer more than half of all electrical injuries that occur on the job.

OSHA has established comprehensive electrical safety standards under 29 CFR 1926 Subpart K, which covers all aspects of electrical work in construction environments. Key regulations include:
- **1926.403** — General requirements for electrical installations
- **1926.404** — Wiring design and protection
- **1926.405** — Wiring methods, components, and equipment for general use
- **1926.416** — General requirements for the protection of employees

Electrical energy can cause painful shocks, severe burns, cardiac arrest, and death. The severity of an electrical injury depends on the amount of current flowing through the body, the path it takes, and the duration of contact. Even relatively low voltages can be fatal under the right conditions. Employers have a responsibility under OSHA 1926.416 to protect their workers by ensuring that equipment is properly guarded, grounded, and maintained, and by providing proper training.`,

  "power-lines": `**High Voltage Power Lines — OSHA 1926.1408**

Overhead power lines represent one of the most serious hazards on construction sites. Contact with energized power lines is frequently fatal. A fundamental safety rule: **always assume power lines are energized**, even if they appear de-energized or have been reported as shut off.

OSHA 1926.1408 governs power line safety for equipment operations. Before beginning any work near overhead lines, the employer must:
1. **Determine the voltage** of the nearby lines to establish minimum approach distances
2. Ensure no part of equipment — including loads, cables, booms, or personnel — comes within the minimum approach distance

For power lines up to 50,000 volts, the minimum approach distance is 10 feet. For higher voltages, the required distance increases accordingly.

When work must be performed near power lines, additional protective measures include using insulating barriers, employing a qualified observer to monitor clearances, and having the utility company de-energize and ground the lines whenever possible. Never assume a power line is safe to approach without verification from the utility company.`,

  "tools-cords": `**Tools, Extension Cords, and Receptacles — OSHA 1926.405 & 1926.416**

Construction sites rely heavily on electrical tools and extension cords. When improperly used or maintained, these everyday items become serious electrocution hazards. OSHA 1926.416 requires that employees not work near any part of an electric power circuit unless protected against electric shock.

**Before using any power tool:**
- Inspect it for damage — cracked insulation, bent prongs, damaged housing, or frayed cords
- Never use a tool that shows signs of damage; remove it from service immediately and tag it

**Extension cords:**
- Must be rated for **outdoor use** when used outdoors or in wet locations — indoor-only cords lack proper moisture resistance
- Must be the correct amperage rating for the equipment being used; undersized cords can overheat and cause fires or shocks
- Never use an extension cord with a removed or bypassed grounding prong — the third prong provides the crucial safety path for fault current

Under OSHA 1926.405, all wiring methods, components, and equipment must be free from recognized hazards. Damaged or modified cords are prohibited on construction sites.`,

  "grounding-gfci": `**Grounding, Continuity, and GFCIs — OSHA 1926.404**

Electrical grounding is a fundamental safety measure on construction sites. When electrical equipment is grounded, a safe path is created for fault current to flow to the earth if a short circuit occurs — preventing that current from passing through a worker's body and causing electrocution. Under OSHA 1926.404, all equipment must be properly grounded.

**Ground Fault Circuit Interrupters (GFCIs)** provide an additional, critical layer of protection. A GFCI monitors the current flowing in a circuit and instantly cuts power if even a small ground fault is detected — typically within 1/40th of a second. This is fast enough to prevent a serious or fatal shock.

OSHA 1926.404 requires GFCI protection for **all 120-volt, single-phase, 15- and 20-ampere receptacles on construction sites** that are not part of the permanent wiring of a building or structure. In practice, this covers nearly all temporary electrical receptacles on a job site.

**Continuity** — ensuring that all ground connections are intact and properly maintained — must also be verified regularly. A broken ground wire provides no protection in a fault condition. Regular inspection and testing of GFCIs is essential.`,

  "lockout-tagout": `**Lock-Out/Tag-Out (LOTO) — OSHA 1926 Subpart C**

Electrical equipment must be de-energized before any maintenance, servicing, or repair work is performed. **Unexpected energization** — the accidental re-energization of equipment while someone is working on it — is one of the most dangerous hazards in any work environment. The Lock-Out/Tag-Out (LOTO) system exists specifically to prevent this.

- **Lock-out** means applying a physical lock to the energy-isolating device (such as a circuit breaker) so that equipment cannot be re-energized while work is in progress.
- **Tag-out** means attaching a warning tag to the energy-isolating device to alert others that the equipment must not be energized.

**The proper LOTO sequence:**
1. Identify all energy sources
2. Notify affected employees
3. Shut off the energy source
4. Isolate the energy source
5. Apply your personal lock and tag
6. Verify that energy is truly isolated by attempting to operate the equipment

**Critical rule:** Only the worker who applied the lockout/tagout device is authorized to remove it. Never remove someone else's lock or tag — doing so could result in serious injury or death.`,
};

const rephrasedQuestions: Course["rephrasedQuestions"] = {
  1: { id: 101, topic: "electrical-hazards-osha", difficulty: "easy", oshaClause: "1926 Subpart K", questionText: "Construction workers account for what proportion of all electrical injuries that occur on the job?", options: [{ id: "a", text: "About one-quarter" }, { id: "b", text: "About one-third" }, { id: "c", text: "More than half" }, { id: "d", text: "Nearly all" }], correctOptionId: "c" },
  2: { id: 102, topic: "electrical-hazards-osha", difficulty: "easy", oshaClause: "1926 Subpart K", questionText: "Which statement best describes electrical incidents on construction sites?", options: [{ id: "a", text: "Most are unavoidable due to the nature of construction work" }, { id: "b", text: "They are rare and not a significant safety concern" }, { id: "c", text: "Most could have been prevented with proper safety measures" }, { id: "d", text: "Only incidents involving overhead lines are preventable" }], correctOptionId: "c" },
  3: { id: 103, topic: "electrical-hazards-osha", difficulty: "medium", oshaClause: "1926 Subpart K", questionText: "Where would you find OSHA's electrical safety requirements specifically for construction sites?", options: [{ id: "a", text: "29 CFR 1910 Subpart S — General Industry Electrical" }, { id: "b", text: "29 CFR 1926 Subpart K — Construction Electrical" }, { id: "c", text: "29 CFR 1926 Subpart P — Excavations" }, { id: "d", text: "29 CFR 1910 Subpart Z — Toxic Substances" }], correctOptionId: "b" },
  4: { id: 104, topic: "power-lines", difficulty: "easy", oshaClause: "1926.1408(h)", questionText: "A utility company tells your supervisor that nearby overhead lines have been de-energized. You should:", options: [{ id: "a", text: "Proceed without restriction — de-energized lines pose no hazard" }, { id: "b", text: "Still treat the lines as potentially energized until the utility confirms they are grounded and verified safe" }], correctOptionId: "b" },
  5: { id: 105, topic: "power-lines", difficulty: "medium", oshaClause: "1926.1408(h)", questionText: "When a crane boom might come near a high-voltage line during construction, which OSHA regulation establishes the required safe approach procedures?", options: [{ id: "a", text: "1926.403 — General electrical requirements" }, { id: "b", text: "1926.416 — Protection of employees" }, { id: "c", text: "1926.1408 — Power line safety for equipment operations" }, { id: "d", text: "1926.951 — Medical services and first aid" }], correctOptionId: "c" },
  6: { id: 106, topic: "power-lines", difficulty: "hard", oshaClause: "1926.1408(h)", questionText: "To establish the required safe working distance from a nearby overhead power line, what must be determined first?", options: [{ id: "a", text: "The age and condition of the line's insulation" }, { id: "b", text: "The voltage of the power line" }, { id: "c", text: "Whether a utility company observer is present on site" }, { id: "d", text: "The weight and reach of the equipment being used" }], correctOptionId: "b" },
  7: { id: 107, topic: "tools-cords", difficulty: "easy", oshaClause: "1926.416(a)", questionText: "You find a power drill with a crack in the housing and a slightly frayed cord. You should:", options: [{ id: "a", text: "Use it carefully — minor damage is acceptable for short tasks" }, { id: "b", text: "Remove it from service, tag it as defective, and report it immediately" }, { id: "c", text: "Wrap the cord with electrical tape and continue working" }, { id: "d", text: "Test it at low power to see if it still functions" }], correctOptionId: "b" },
  8: { id: 108, topic: "tools-cords", difficulty: "medium", oshaClause: "1926.405", questionText: "An outdoor-rated extension cord is unavailable and only an indoor cord is on hand. Using it in a damp outdoor area is:", options: [{ id: "a", text: "Acceptable if the weather appears dry" }, { id: "b", text: "Not permitted — outdoor or wet locations require outdoor-rated cords" }], correctOptionId: "b" },
  9: { id: 109, topic: "tools-cords", difficulty: "medium", oshaClause: "1926.405", questionText: "OSHA 1926.405 governs which aspect of electrical safety on construction sites?", options: [{ id: "a", text: "Electrical safety training requirements for workers" }, { id: "b", text: "Minimum approach distances to power lines" }, { id: "c", text: "Wiring methods, components, and equipment for general use" }, { id: "d", text: "Lock-out/tag-out procedures" }], correctOptionId: "c" },
  10: { id: 110, topic: "grounding-gfci", difficulty: "easy", oshaClause: "1926.404", questionText: "A GFCI device protects workers by:", options: [{ id: "a", text: "Preventing circuits from being overloaded by too many tools" }, { id: "b", text: "Detecting a ground fault and cutting power within milliseconds before a fatal shock can occur" }, { id: "c", text: "Providing a backup power source if the main supply fails" }, { id: "d", text: "Regulating voltage to prevent dangerous spikes" }], correctOptionId: "b" },
  11: { id: 111, topic: "grounding-gfci", difficulty: "medium", oshaClause: "1926.404", questionText: "An ungrounded power tool develops an internal short circuit. What is the likely consequence for the operator?", options: [{ id: "a", text: "The circuit breaker will trip before the operator is harmed" }, { id: "b", text: "Fault current may travel through the operator's body, causing a dangerous or fatal shock" }, { id: "c", text: "The tool will simply stop working without posing an injury risk" }, { id: "d", text: "The GFCI will prevent the fault current from reaching the tool" }], correctOptionId: "b" },
  12: { id: 112, topic: "grounding-gfci", difficulty: "hard", oshaClause: "1926.404", questionText: "On a construction site, a temporary outlet is installed to run power tools during framing work. Under OSHA 1926.404, this outlet:", options: [{ id: "a", text: "Does not require GFCI protection since it is only temporary" }, { id: "b", text: "Requires GFCI protection since it is not part of the building's permanent wiring" }, { id: "c", text: "Requires GFCI only if it is located outdoors" }, { id: "d", text: "Requires GFCI only for three-phase circuits" }], correctOptionId: "b" },
  13: { id: 113, topic: "lockout-tagout", difficulty: "easy", oshaClause: "1926 Subpart C", questionText: "A maintenance technician is replacing a faulty switch inside an electrical panel. The greatest hazard they face is:", options: [{ id: "a", text: "Burns from an arc flash at the moment the switch is removed" }, { id: "b", text: "Someone else accidentally re-energizing the panel while they are working on it" }, { id: "c", text: "Dropped tools striking the panel and causing sparks" }, { id: "d", text: "Voltage spikes from nearby energized equipment" }], correctOptionId: "b" },
  14: { id: 114, topic: "lockout-tagout", difficulty: "medium", oshaClause: "1926 Subpart C", questionText: "An electrician needs to replace a breaker. The correct approach is to:", options: [{ id: "a", text: "Work quickly and carefully while the panel remains energized" }, { id: "b", text: "De-energize the circuit, apply a personal lock and tag, verify zero energy, then begin work" }, { id: "c", text: "Have a coworker watch and warn of any hazards while you work" }, { id: "d", text: "Use insulated gloves and work on the energized panel" }], correctOptionId: "b" },
  15: { id: 115, topic: "lockout-tagout", difficulty: "hard", oshaClause: "1926 Subpart C", questionText: "A second-shift worker finds a lockout device left by a first-shift worker who has already gone home. Equipment is urgently needed. The worker should:", options: [{ id: "a", text: "Remove the lock — the original worker is no longer present" }, { id: "b", text: "Ask the supervisor to remove the lock using their authority" }, { id: "c", text: "Follow the facility's established absent-worker procedure, which requires management authorization and verification that work is complete" }, { id: "d", text: "Cut the lock off to restore production" }], correctOptionId: "c" },
};

export const electrocutionHazardsPart1Course: Course = {
  id: "368",
  slug: "con_368_int_en",
  title: "Electrocution Hazards Part I: Worksite Safety",
  topic: "Electrocution Hazards",
  productLine: "Construction Safety",
  durationMinutes: 45,
  shortDescription:
    "The first in a two-part series on electrocution hazards. Covers electrical hazards and OSHA standards, high voltage power lines, tools and extension cords, grounding and GFCIs, and lock-out/tag-out procedures.",
  oshaRefs: [
    "1926.1408(h)",
    "1926.403",
    "1926.404",
    "1926.405",
    "1926.416",
    "1926 Subpart K",
    "1926 Subpart C",
  ],
  passingScore: 70,
  questions,
  lessons,
  rephrasedQuestions,
};
