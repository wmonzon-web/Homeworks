import type { Service } from "@/lib/data/types";
import { getServiceSummary } from "@/lib/data/services/catalog";

const summary = getServiceSummary("caulking-grout-weatherproofing")!;

export const service: Service = {
  ...summary,
  tagline: "Old caulk cut out and replaced, grout repaired and sealed, and the gaps around windows and doors closed against heat, dust, and water.",
  quickFacts: {
    typicalDuration: "A tub or shower re-caulk: 2–3 hours plus cure time. Whole-house exterior sealing: 1–2 days.",
    priceBand: "Priced per tub, shower, or window and door opening; whole-house weatherproofing quoted after a walkthrough.",
    whenToCall: "Black or peeling caulk at the tub, crumbling grout lines, daylight or dust around a door, a room that won't stay cool, or open joints where stucco meets a window.",
  },
  contentSections: [
    {
      heading: "Caulking, grout, and weatherproofing in Las Vegas",
      lead: "Caulk and grout wear out on a schedule, and replacing them on time is what keeps water out of the wall and hot air out of the room.",
      body: [
        "Caulking and weatherproofing means cutting failed sealant out of the joints where two materials meet, cleaning the joint down to bare material, and installing the right new sealant for that joint: 100% silicone at tubs and showers, paintable siliconized acrylic at interior trim, polyurethane or a high-movement elastomeric at exterior stucco-to-window and stucco-to-door joints, and self-leveling urethane in slab and patio expansion joints. Grout repair means removing cracked or missing grout, regrouting, and sealing. Weatherstripping means new door sweeps, kerf-in seals, and threshold adjustments so exterior doors close tight.",
        "We work at the wet joints inside the house, the exterior envelope where the sun destroys sealant, and the doors and windows where cooled air leaks out. The most common jobs are a tub or shower re-caulk after the old bead turns black, cracked grout on a shower floor, a front door you can see daylight around, and the stucco joints around windows that have opened enough to let water into the wall.",
        "When the grout and caulk in a bathroom have failed beyond repair, with tiles loose, a pan that flexes underfoot, or water staining the drywall outside the shower, we'll tell you when a regrout is throwing money at tile that needs to come out. That's our tile installation or bathroom remodeling service, and we'll be straight about which one you need. Most of the time the answer is the cheaper one: remove the old material, seal it properly, and get several more years out of what's there.",
      ],
      callout: {
        type: "local",
        title: "The desert eats sealant",
        text: "Las Vegas gets close to 300 sunny days a year, summer surface temperatures on a south-facing stucco wall run well above 140 degrees, and humidity drops into single digits. Standard caulk dries out, shrinks, and pulls away from stucco within a few seasons. Then the July and August monsoon storms drive rain sideways into the open joint. We use UV-stable polyurethane or silyl-modified polymer sealants outside, tooled into an hourglass profile over backer rod, so the bead stretches with the joint instead of tearing.",
      },
    },
    {
      heading: "Tubs, showers, and grout",
      lead: "The joint where a tub meets tile moves every time the tub fills, and only silicone tolerates that.",
      body: [
        "We cut out the old caulk with a razor and a plastic scraper, remove the residue with solvent, treat any mildew with a bleach solution, and let the joint dry completely. Then a bead of 100% silicone, mildew-resistant and color-matched to the grout, is applied and tooled smooth. The vertical corners of the tile walls, the seam at the tub deck, and the joint where the shower pan meets the wall all get the same treatment. Latex caulk in these spots fails within a year.",
        "Grout repair starts with removing the cracked or missing grout to at least two-thirds of its depth with an oscillating tool or grout saw, vacuuming the joint, and regrouting with sanded or unsanded grout matched to the joint width and existing color. After it cures we apply a penetrating sealer. On shower floors, where grout takes the most abuse, we check that the failure isn't a sign of a shifting pan or a failed membrane underneath.",
      ],
      highlights: [
        { icon: "bath", label: "Silicone at every wet joint", detail: "100% silicone, mildew-resistant, tooled into tub, pan, and corner joints; never latex." },
        { icon: "grid-2x2", label: "Grout removed, not smeared over", detail: "Old grout cut out to depth so the new grout bonds, then sealed after curing." },
        { icon: "sparkles", label: "Color matched", detail: "Caulk and grout matched to the existing color so the repair blends rather than outlines the tile." },
      ],
    },
    {
      heading: "Windows, doors, and the exterior envelope",
      lead: "The joints around windows and doors are the first place hot air and dust get in, and the first place water gets into the wall.",
      body: [
        "Outside, the joint between stucco and a window frame or door jamb is the critical one. We cut out the old, hardened bead, clean the stucco edge and the frame, install closed-cell backer rod where the gap is deep, and tool in a polyurethane or SMP sealant that stays flexible. Hose bibs, light fixtures, conduit penetrations, dryer vents, and the gap where the garage door trim meets stucco get sealed the same way. The weep screed at the base of the wall is left open on purpose; it's there to drain.",
        "Doors get a new sweep or door bottom, replacement kerf-in weatherstripping in the jamb, and a threshold adjusted so the seal compresses evenly all the way around. Windows get their sash weatherstrip and any failed exterior perimeter seal replaced. Slab and patio expansion joints are cleaned out and filled with self-leveling urethane so water doesn't run under the slab edge and into the soil that supports it.",
      ],
      callout: {
        type: "tip",
        title: "Check the front door at night",
        text: "Close the door with the porch light on and the house lights off. Any light showing around the edge is a gap that's also letting dust and 110-degree air in. A sweep and weatherstripping replacement takes about an hour per door.",
      },
    },
    {
      heading: "Why it matters more here than most places",
      lead: "Sealant is the cheapest part of a house to maintain and the most expensive to ignore.",
      body: [
        "Water that gets behind stucco through an open window joint doesn't dry out the way it would in a windier, drier wall assembly; it finds the building paper, the sheathing, and eventually the framing and interior drywall. A failed tub caulk joint lets water behind the tile backer and into the wall, and in a slab-on-grade house that means the base of the wall and the cabinet next to it. Both are repairs that cost many times what a re-seal does.",
        "The energy side is real too. Gaps around doors, windows, and penetrations add up to a surprising amount of open area in an older tract home, and in a summer where the air conditioner already runs most of the day, that leakage is the difference between a bedroom that holds temperature and one that doesn't. Sealing the envelope is the least expensive way to bring a hot room down, and it's worth doing before anyone looks at the ductwork, adds insulation, or talks you into a bigger unit.",
      ],
    },
  ],
  benefits: [
    { title: "The right sealant for the joint", description: "Silicone at wet joints, polyurethane outside, urethane in slab joints; not one tube for everything." },
    { title: "Old material removed first", description: "Failed caulk and grout are cut out, not covered, so the new material bonds and lasts." },
    { title: "Water and heat both addressed", description: "One visit seals what leaks water and what leaks cooled air." },
  ],
  process: [
    { title: "Send photos of the joints", description: "A few shots of the tub, shower, or exterior openings are enough to price the work per opening." },
    { title: "Walkthrough for whole-house sealing", description: "For exterior weatherproofing we walk the perimeter and note every penetration and joint before quoting." },
    { title: "Remove, clean, dry, seal", description: "Old material cut out, joint cleaned and dried, backer rod where needed, new sealant tooled smooth." },
    { title: "Cure and check", description: "We tell you how long to keep the joint dry, and grout gets sealed once it has fully cured." },
  ],
  faqs: [
    {
      question: "How much does it cost to recaulk a shower in Las Vegas?",
      answer: "A tub or shower re-caulk is a flat price that covers removing the old caulk, treating mildew, and applying color-matched silicone at every wet joint. Grout repair is priced by the area involved. Send photos of the joints by email and we'll give you a number without a visit.",
    },
    {
      question: "How often should caulk be replaced in Las Vegas?",
      answer: "Interior tub and shower silicone typically lasts five to ten years if it was done right. Exterior sealant on stucco, windows, and doors fails faster here because of UV and heat: check it every couple of years and expect to replace it every five to seven. Peeling, cracking, or a gap you can slip a card into means it's time.",
    },
    {
      question: "Can you regrout a shower without removing the tile?",
      answer: "Yes, if the tile is sound and the problem is the grout. We remove the old grout to depth, regrout, and seal. If tiles are loose, the floor flexes, or grout keeps cracking in the same spot, the pan or backer underneath has failed and regrouting won't hold. We'll tell you which situation you have.",
    },
    {
      question: "How long does caulk need to dry before I can shower?",
      answer: "Most 100% silicone needs 24 hours before it gets wet, and some formulas want 48. We'll tell you the cure time for the product we used. New grout needs 48 to 72 hours before sealing, and the sealer needs about a day after that before heavy use.",
    },
    {
      question: "Do you seal around windows on stucco homes?",
      answer: "Yes. The stucco-to-window joint is the one that fails most on valley homes. We cut out the old bead, install backer rod where the gap is deep, and tool in a UV-stable polyurethane sealant. If the crack has spread into the stucco itself, that's our stucco repair service, and we handle both in one visit.",
    },
  ],
  relatedProductSlugs: [],
  meta: {
    title: "Caulking, Grout & Weatherproofing in Las Vegas",
    description: "Caulking, grout repair, and weatherproofing in Las Vegas: tubs, showers, windows, doors, and stucco joints sealed against water, heat, and dust.",
  },
};
