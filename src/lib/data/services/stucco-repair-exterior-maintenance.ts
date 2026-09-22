import type { Service } from "@/lib/data/types";
import { getServiceSummary } from "@/lib/data/services/catalog";

const summary = getServiceSummary("stucco-repair-exterior-maintenance")!;

export const service: Service = {
  ...summary,
  tagline: "Stucco cracks and holes patched, textured to match, and the fascia, trim, and sealant around them kept ahead of the sun.",
  quickFacts: {
    typicalDuration: "Hairline cracks and small patches: one visit. Larger patches: 2–3 short visits so each coat cures before texture and paint.",
    priceBand: "Cracks and patches priced per area from photos; recurring exterior maintenance quoted after a walkthrough.",
    whenToCall: "Cracks wider than a credit card, a hole from a satellite dish or hose reel, stucco that sounds hollow when tapped, peeling fascia paint, or soft garage door trim.",
  },
  contentSections: [
    {
      heading: "Stucco repair in Las Vegas that matches the wall around it",
      lead: "A stucco patch that doesn't match the texture and color is as visible as the crack it replaced, so matching is most of the work.",
      body: [
        "Stucco repair means opening up the cracked or damaged area, replacing torn lath and building paper behind it, applying a scratch coat and a brown coat of cementitious base, and then a finish coat textured to match the existing wall: sand float, lace, dash, or the smooth troweled look on newer homes. Hairline cracks are opened slightly, filled with an elastomeric stucco patch, and textured over. Then the repair is primed and painted to a natural break so the color doesn't show a rectangle.",
        "Most of what we fix is cracking at the corners of windows and doors, damage where a light, a dish, or a hose reel was mounted or removed, impact damage near the garage and driveway, and the crumbling along the bottom of the wall where sprinklers hit the stucco every morning. We also patch the holes left by old cable runs and conduit, fill the gaps where a new window or door was set into an existing opening, and rebuild the stucco around a pipe or vent penetration that was never sealed.",
        "Exterior maintenance is the rest of the envelope: rotted or peeling fascia boards, garage door jambs and trim gone soft at the bottom, the sealant at every window, door, and penetration, and the paint that protects all of it. On a stucco house those parts fail before the stucco does, and when they fail they let water into the wall behind it. Keeping them ahead of the sun is the work that prevents the next stucco repair, which is why we treat it as one service instead of two.",
      ],
      callout: {
        type: "local",
        title: "Why valley stucco cracks",
        text: "Nearly every Las Vegas home built since the 1980s is wood-framed with three-coat stucco, or one-coat stucco over foam, on top of it. The framing shrinks as it dries in the desert air, the soil under the slab swells and shrinks with the rare rain, and daily temperature swings of 30 degrees or more work the cement. Cracks show up at the corners of openings first. That's normal; what matters is sealing them before summer monsoon rain gets behind the stucco and into the paper and sheathing.",
      },
    },
    {
      heading: "Cracks, patches, and texture matching",
      lead: "The right repair depends on the width of the crack and whether the stucco behind it is still bonded.",
      body: [
        "Hairline cracks up to about a sixteenth of an inch get cleaned with a wire brush, filled with a sanded elastomeric crack filler that stays flexible, and textured with a sponge or brush to blend. Wider cracks are opened into a V with a grinder, filled with patching stucco, and textured. Anything with hollow-sounding stucco around it means the base coat has separated from the lath, so the loose area is removed to sound material, the paper and lath repaired, and the area rebuilt in coats.",
        "Texture matching is done by hand and by test panel. We match the aggregate size, the trowel or float pattern, and the depth of the finish on a scrap board first, then apply it to the wall. A patch that's slightly proud or slightly flat shows in the afternoon sun, so we feather the finish coat past the repair. Color comes from the paint: we prime the patch and paint to a corner or a control joint so the sheen and color break at a natural line.",
      ],
      highlights: [
        { icon: "layers", label: "Rebuilt in coats", detail: "Lath and paper repaired, then scratch, brown, and finish coats each allowed to cure." },
        { icon: "sun", label: "Textured on a test panel first", detail: "Sand float, lace, dash, or smooth matched on scrap before it goes on your wall." },
        { icon: "paint-roller", label: "Painted to a break", detail: "Primed and painted to the nearest corner or joint so the patch doesn't outline itself." },
      ],
    },
    {
      heading: "Fascia, garage door trim, and the parts that rot first",
      lead: "The wood on a stucco house takes the worst of the weather, and it's where exterior maintenance starts.",
      body: [
        "Fascia boards along the roofline and the trim around the garage door are the most exposed wood on the house. Sun bakes the paint off the south and west sides, the bare wood checks and splits, and the bottom of the garage door jamb wicks water from the driveway until it goes soft. We replace rotted sections with primed wood or PVC trim, prime every cut end, and paint with a 100% acrylic exterior coating. Where a whole run of fascia has failed we replace it end to end rather than patching every few feet.",
        "Garage door jambs get a rot-resistant bottom section and a bead of sealant at the stucco. The weep screed at the base of the walls is checked and cleared of dirt and mulch so the wall can drain. Sprinkler heads that spray the house get pointed away, because that daily soaking is what dissolves the bottom foot of stucco and rusts the screed behind it.",
      ],
      callout: {
        type: "tip",
        title: "Walk the house in the late afternoon",
        text: "Low sun from the west shows every crack and every flat spot in the stucco. Do a lap once a year, photograph anything wider than a credit card, and check the fascia paint on the south side for chalking. Send us the photos and we'll tell you what needs attention this year and what can wait.",
      },
    },
    {
      heading: "Keeping the exterior ahead of the sun",
      lead: "Exterior maintenance on a Las Vegas home is a short list done on a schedule, and it's far cheaper than the repairs it prevents.",
      body: [
        "The list is the same on most valley homes: reseal the joints around windows and doors, touch up or repaint fascia and trim on the sunny sides, patch and paint any cracks that have opened since last year, and make sure water from the roof, the sprinklers, and the monsoon downpours drains away from the stucco instead of into it. Downspouts get checked and splash blocks set; that's often where the stucco damage at a corner is coming from.",
        "Elastomeric coatings on the whole house are a bigger conversation. They bridge hairline cracks and shed water well, but they can trap moisture if the wall isn't dry and they change the look of the finish. We'll tell you whether your home is a candidate or whether a good acrylic repaint with the cracks properly sealed does the job. Full repaints are our exterior painting service; the sealing and patching that come before them are this one.",
      ],
    },
  ],
  benefits: [
    { title: "Matched, not just patched", description: "Texture matched on a test panel and paint carried to a natural break, so the repair doesn't announce itself." },
    { title: "The cause gets fixed", description: "Sprinklers, downspouts, and open joints that caused the damage are corrected so the same spot doesn't fail again." },
    { title: "Wood and stucco together", description: "Fascia, trim, sealant, and stucco handled by one crew on one visit instead of three trades." },
  ],
  process: [
    { title: "Send photos in daylight", description: "Shots of each crack or patch area with something for scale, plus any peeling fascia or soft trim, are enough to price most repairs." },
    { title: "Quote per area", description: "You get a price for each repair and a note on what's cosmetic, what's urgent, and what's causing it." },
    { title: "Repair in coats", description: "Loose material removed, lath and paper fixed, base coats applied and cured, texture matched, then primed and painted." },
    { title: "Seal and maintain", description: "Joints sealed, wood primed and painted, drainage corrected, and a note on what to check next year." },
  ],
  faqs: [
    {
      question: "How much does stucco repair cost in Las Vegas?",
      answer: "Hairline cracks and small patches are priced per area from your photos, and a batch of cracks around the house is usually one flat number. Larger patches where the lath and paper are damaged are priced by size after a look. Painting the repair to a natural break is included, not a separate line.",
    },
    {
      question: "Are cracks in stucco normal in Las Vegas?",
      answer: "Hairline cracks at the corners of windows and doors are normal on wood-framed stucco homes here; the framing shrinks in the dry air and the cement can't stretch with it. Cracks wider than a credit card, cracks that keep growing, stair-step cracks, or stucco that sounds hollow when tapped are worth a look, because water gets behind them during monsoon season.",
    },
    {
      question: "Can you match my stucco texture?",
      answer: "Yes. We identify the finish (sand float, lace, dash, smooth trowel, or the fine sand finish on most 1990s-and-later tract homes), match the aggregate and tool pattern on a test panel, and feather the finish past the repair. After primer and paint to a break, the patch should be hard to find in daylight.",
    },
    {
      question: "How long does a stucco repair take?",
      answer: "Small cracks are done in one visit. Patches that need the base coats rebuilt take two or three short visits so each coat can cure before the next, typically spread over a week. Painting happens once the finish coat has cured. Fascia and trim replacement is usually a single day.",
    },
    {
      question: "Do you replace rotted fascia and garage door trim?",
      answer: "Yes. We cut out rotted sections, replace them with primed wood or PVC trim, seal every cut end, and paint to match. Garage door jambs get a rot-resistant bottom section and sealant at the stucco. If the rot traces back to a gutter, downspout, or sprinkler, we fix that at the same time.",
    },
  ],
  relatedProductSlugs: [],
  meta: {
    title: "Stucco Repair & Exterior Maintenance in Las Vegas",
    description: "Stucco repair in Las Vegas: cracks and patches textured and painted to match, plus fascia, garage door trim, and exterior upkeep. Priced per area from photos.",
  },
};
