import type { Service } from "@/lib/data/types";
import { getServiceSummary } from "@/lib/data/services/catalog";

const summary = getServiceSummary("door-installation-repair")!;

export const service: Service = {
  ...summary,
  tagline: "Interior and exterior doors hung plumb, latched without a shove, and sealed against the heat.",
  quickFacts: {
    typicalDuration: "Hardware and adjustments: under an hour per door. Prehung interior door: 2–3 hours. Exterior entry door: half a day to a full day.",
    priceBand: "Repairs and hardware swaps are a flat price quoted from photos; new doors are priced per opening plus the door you choose.",
    whenToCall: "A door that won't latch, rubs the jamb, swings on its own, or lets light in around the edges, plus any door you want replaced or upgraded.",
  },
  contentSections: [
    {
      heading: "Door installation and repair in Las Vegas",
      lead: "A door has one job, to close and latch the same way every time, and most of the work is in the frame, not the slab.",
      body: [
        "Door installation and repair covers hanging new prehung or slab doors, replacing the exterior entry or garage-to-house door, fixing doors that rub or won't latch, swapping hinges, knobs, deadbolts, and closers, and resealing exterior doors so hot air stays outside. We work on interior passage, closet, bifold, pocket, and barn doors, and on exterior entry, side, and patio doors in owner-occupied homes across the Las Vegas valley. We hang, shim, adjust, and finish so the door closes with one hand.",
        "A prehung door arrives with its jamb and hinges already mounted and is set into the rough opening, shimmed plumb and square, and nailed off. A slab door is just the door itself, fitted to an existing jamb: hinges mortised, lockset bored, edges planed to an even gap. We do both, and we'll tell you which makes sense: prehung when the jamb is damaged or the opening is out of square, slab when the frame is fine and you just want a different door.",
        "Every interior door we hang is checked for an even reveal around the slab, a latch that catches without lifting the knob, and a swing that stays where you leave it. Exterior doors add a threshold that seals, a sweep, and weatherstrip that meets the slab all the way around. We finish with paint or stain to match the room and haul off the old door and hardware, so the job is done when we leave rather than when you get around to it.",
      ],
      callout: {
        type: "local",
        title: "Why Las Vegas doors stop latching",
        text: "Valley homes sit on slabs over expansive soil that heaves and settles with the seasons, so the framing racks slightly and the strike plate ends up a sixteenth off from the latch. Add hollow-core doors swelling during monsoon humidity after shrinking all summer, and you get doors that rub in August and rattle in January. Exterior doors on south and west walls take direct sun that cooks the weatherstrip and checks the finish. Most of these are adjustments, not replacements, and we'll say which.",
      },
    },
    {
      heading: "Adjustments, hardware, and the fixes that don't need a new door",
      lead: "Most door calls end with the same door working properly.",
      body: [
        "A door that rubs the top of the jamb usually needs a 3-inch screw through the top hinge into the stud to pull the hinge side back into line, or a shim behind the bottom hinge. A latch that misses the strike gets the strike plate moved or the mortise filed, not the door forced. A door that swings open on its own has hinges out of plumb, so we reset the hinge or bend a pin slightly. A door that won't stay closed needs the latch and strike aligned and the knob replaced if the spring is gone.",
        "Hardware swaps are quick: passage and privacy knobs or levers, deadbolts, smart locks, entry handlesets, hinges in a matching finish, and closers on the garage-to-house door, which code requires to be self-closing and fire-rated. We match bore sizes and backsets, fill and re-drill when a new lock needs it, and set deadbolt strikes with 3-inch screws into the framing so they hold against the stud instead of the jamb. If a knob has been swapped so many times the bore is oversized, we plug and re-bore it rather than hiding the gap behind an oversized rose.",
      ],
      highlights: [
        { icon: "wrench", label: "Adjusted before replaced", detail: "Hinge screws, shims, and strike plates first; a new door only when the frame is the problem." },
        { icon: "shield-check", label: "Deadbolts into framing", detail: "Strike plates set with 3-inch screws so the lock holds against the stud, not just the jamb." },
        { icon: "door-open", label: "Self-closing where code says so", detail: "Garage-to-house doors get a rated slab, a closer, and a proper seal." },
      ],
    },
    {
      heading: "New interior doors: prehung and slab",
      lead: "Replacing hollow-core doors is one of the higher-return updates in a 1990s or 2000s tract home.",
      body: [
        "We install solid-core and hollow-core prehung doors in painted MDF, primed wood, or stain-grade species, in flat, 2-panel, 5-panel, and shaker styles. Solid-core doors cost more but block sound, feel heavier in the hand, and warp less in dry heat. The rough opening is checked for plumb and level, the jamb is shimmed at each hinge and at the strike, and casing goes on to hide the gap. If you're changing casing house-wide, that's our baseboards, trim, and carpentry service and it goes on the same visit.",
        "Bifold and bypass closet doors get new hardware and top tracks, adjusted so the panels meet evenly. Pocket doors that drag or came off the track get new trolley hardware, or a rebuilt frame if the studs bowed. Barn doors need a header that can carry the track load, so we add blocking before hanging one. Doors are painted or stained to match by the same crew, as part of the job rather than an add-on.",
      ],
    },
    {
      heading: "Exterior doors, thresholds, and weather sealing",
      lead: "An exterior door in the desert is a thermal and security barrier first and a design piece second.",
      body: [
        "We replace entry, side, and garage-to-house doors with fiberglass or steel prehung units, which handle sun better than wood here. The unit is set in a bed of sealant on a level sill, shimmed at each hinge and the strike, foamed with low-expansion foam, and finished with the exterior trim or brickmould your stucco allows. Fiberglass takes stain or paint and doesn't dent; steel costs less and is stronger but shows dents and gets hot in direct sun. Both come with insulated cores and a thermal-break threshold.",
        "Existing doors that let light or hot air through get a new threshold or sill cap, a door sweep, and kerf-mounted or compression weatherstrip that meets the slab on all three sides. Corner pads, the small foam pieces at the bottom corners, are the usual leak. We also replace failed door glass and swap patio door rollers and locks. A sliding patio door that drags is a roller and track job, and most just need new rollers and a track cap.",
      ],
      callout: {
        type: "tip",
        title: "Check the seal with a dollar bill",
        text: "Close the door on a dollar bill at several points around the edge. If it slides out without resistance, the weatherstrip isn't sealing there. Try the bottom corners especially; that's where Las Vegas dust and hot air get in.",
      },
    },
  ],
  benefits: [
    { title: "Fixed with the least work that lasts", description: "Hinges, shims, and strikes before new slabs, and new slabs before new frames." },
    { title: "Hung to a standard", description: "Even reveal, a latch that catches without lifting the knob, and a swing that holds still." },
    { title: "Sealed against the desert", description: "Exterior doors set in sealant, foamed, and weatherstripped so cooled air stays in and dust stays out." },
  ],
  process: [
    { title: "Photos or a quick look", description: "Send a photo of the door and the gap or book a visit. Adjustments and hardware are quoted flat; new doors are priced per opening after we measure." },
    { title: "Measure and order", description: "For new doors we measure the rough opening, swing, and jamb depth, then order the slab or prehung unit to fit." },
    { title: "Hang, shim, and adjust", description: "Door set plumb and square, shimmed at hinges and strike, hardware installed, reveal and latch checked." },
    { title: "Trim, seal, and finish", description: "Casing or exterior trim installed, exterior doors foamed and weatherstripped, paint or stain applied, and the area cleaned up." },
  ],
  faqs: [
    {
      question: "How much does it cost to install a door in Las Vegas?",
      answer: "Adjustments and hardware swaps are a flat price we can usually quote from a photo. A new prehung interior door is priced per opening plus the door you pick, with paint or stain included; hollow-core is the low end, solid-core and stain-grade the high end. Exterior doors are priced per opening after we measure, because the sill, trim, and stucco condition change the work.",
    },
    {
      question: "Can you fix a door that won't latch or close?",
      answer: "Almost always, and usually without a new door. Most latching problems are a strike plate a sixteenth off or a hinge pulled loose from the stud. We replace hinge screws with long ones into framing, shim or reset hinges, and move or file the strike plate so the latch catches cleanly. It's a short visit.",
    },
    {
      question: "Should I get solid-core or hollow-core interior doors?",
      answer: "Solid-core if the budget allows. They're quieter, feel better in the hand, hold up to kids and dogs, and warp less in our dry heat. Hollow-core costs less and is fine for closets and low-traffic rooms. Many homeowners upgrade bedrooms and bathrooms to solid-core and leave closets hollow-core to keep the total in line.",
    },
    {
      question: "How long does it take to install a prehung door?",
      answer: "An interior prehung door takes two to three hours to hang, trim, and adjust, plus painting time. An exterior entry door takes half a day to a full day depending on whether the sill, threshold, and stucco need work. We schedule multiple doors on one visit so the per-door time drops.",
    },
    {
      question: "Do you install exterior doors and fix sliding patio doors?",
      answer: "Yes. We replace entry and side doors with fiberglass or steel prehung units, replace thresholds, sweeps, and weatherstrip, and repair sliding patio doors that drag or won't lock by replacing rollers, track caps, and latches. If the frame itself has failed, we'll tell you and quote a replacement rather than a patch.",
    },
  ],
  relatedProductSlugs: [],
  meta: {
    title: "Door Installation & Repair in Las Vegas",
    description: "Door installation and repair in Las Vegas: interior and exterior doors hung plumb, adjusted to latch, and weather-sealed. Hardware swaps and flat-price repairs.",
  },
};
