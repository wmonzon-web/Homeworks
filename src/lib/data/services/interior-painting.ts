import type { Service } from "@/lib/data/types";
import { getServiceSummary } from "@/lib/data/services/catalog";

const summary = getServiceSummary("interior-painting")!;

export const service: Service = {
  ...summary,
  tagline: "Walls, ceilings, trim, and doors painted with the prep done right and the lines cut clean.",
  quickFacts: {
    typicalDuration: "One room: 1–2 days. Whole-house interiors: 3–7 days depending on ceilings, trim, and colors.",
    priceBand: "Priced per room or by wall square footage, with ceilings, trim, and doors quoted as line items.",
    whenToCall: "Scuffed or faded walls, a color change, touch-ups that flash, a peeling bathroom ceiling, or a house you're getting ready to sell.",
  },
  contentSections: [
    {
      heading: "Interior painting in Las Vegas done with real prep",
      lead: "A paint job is mostly prep. The two coats of color at the end are the easy part.",
      body: [
        "Interior painting is repainting the walls, ceilings, trim, doors, and closets inside your home. We move and cover furniture, fill nail holes and cracks, sand glossy surfaces, caulk the gaps between trim and wall, spot-prime repairs, cut in the edges by hand, and roll two coats of a quality acrylic paint. Then we reinstall the outlet covers and put the room back. That's the whole job, and the reason a repaint looks even under afternoon light is every step before the roller comes out.",
        "We paint single rooms, accent walls, whole-house interiors, ceilings, trim and baseboards, interior doors, and closets. Color changes, sheen changes from flat to eggshell or semi-gloss trim, and covering builder-grade flat white are the most common calls. We also fix what previous painters left behind: roller marks, lap lines, drips on trim, and touch-ups that flash because someone used the wrong sheen or a different batch.",
        "Because drywall is our other trade, cracks, nail pops, and old patches get properly finished before paint instead of being buried under two coats and reappearing in a month. That's our drywall repair service, and on a paint job it's usually a small add-on handled by the same crew on the same day. It matters more than it sounds: a crack that's only caulked opens again with the first seasonal shift, and a patch that wasn't primed flashes as a dull rectangle under the new color.",
      ],
      callout: {
        type: "local",
        title: "Why builder flat paint fails in the valley",
        text: "Most Las Vegas tract homes from the 1990s and 2000s were sprayed with one thin coat of contractor-grade flat over unprimed drywall. It scuffs easily, can't be wiped, and burnishes shiny wherever a couch or a hand rubs the wall. Low humidity here also makes paint flash-dry, so touch-ups with the same can still show as a patch. The fix is a proper primer where needed and two full coats of a washable eggshell or satin, rolled wet-edge so it dries evenly.",
      },
    },
    {
      heading: "What our prep includes",
      lead: "Everything that happens before the first coat decides whether the finish is smooth, even, and still on the wall in five years.",
      body: [
        "We start by pulling switch and outlet covers, removing or bagging hardware, and covering floors with drop cloths and furniture with plastic. Nail holes and dings get filled with lightweight spackle and sanded flush. Hairline cracks get caulked or, if they keep moving, taped and mudded. Glossy trim and doors are scuff-sanded with 220 grit and wiped down so the new coat has something to grip. Gaps between baseboard and wall, casing and drywall, and crown and ceiling get a fresh bead of paintable acrylic caulk.",
        "Repairs and bare spots are spot-primed so they don't flash through the topcoat. Stains from water, smoke, or markers get a shellac or oil-based stain-blocking primer, because standard paint bleeds them back through no matter how many coats you roll. Only then do we cut in with an angled sash brush and roll with a 1/2-inch nap cover, keeping a wet edge so there are no lap marks.",
      ],
      highlights: [
        { icon: "brush", label: "Filled, sanded, caulked", detail: "Holes spackled, cracks caulked, glossy surfaces scuffed, and every trim gap closed before paint." },
        { icon: "shield-check", label: "Primed where it counts", detail: "Repairs spot-primed and stains sealed with a shellac or oil primer so nothing bleeds through." },
        { icon: "sparkles", label: "Cut by hand, rolled wet-edge", detail: "Edges cut in with a sash brush and walls rolled so no lap lines show in side light." },
      ],
    },
    {
      heading: "Choosing paint and sheen for a desert home",
      lead: "The right sheen does more for how a room wears than the color does.",
      body: [
        "For walls in living areas and bedrooms we recommend a washable eggshell or matte from a mid-to-premium line. Flat hides drywall imperfections but can't be scrubbed, so it belongs on ceilings and low-traffic spaces. Satin goes in kitchens, kids' rooms, and hallways where fingerprints and scuffs are a daily fact. Trim, doors, and cabinets get semi-gloss or a hard-wearing enamel that levels out brush marks and cleans easily.",
        "Bathrooms and laundry rooms get a mildew-resistant paint, and ceilings above showers get a dedicated bathroom paint or a primer-sealer under the topcoat. We'll tell you which product line we're quoting and why, and if you'd rather supply your own paint we'll tell you how many gallons to buy and which sheen. Hallways and stairwells, which get the most hand contact, are worth a step up in scrub resistance even if the rest of the house stays in a standard line.",
        "Dark and saturated colors need a tinted primer or a third coat to cover evenly, and that shows up in the quote. Reds, deep blues, and charcoals over light walls are the usual culprits, as is going from a dark accent wall back to white. We'll flag it when you send your colors so the price and the schedule account for the extra coat rather than the wall looking streaky at the end of day one.",
      ],
      callout: {
        type: "tip",
        title: "Test the color on the actual wall",
        text: "Paint two coats of the sample on a foot-square patch on the wall that gets the most sun and one that gets the least. Las Vegas daylight is strong and warm-toned; a gray that looked neutral on a chip often reads lavender or green by 4 p.m. Look at it in the morning, at midday, and with the lamps on before you commit.",
      },
    },
    {
      heading: "Ceilings, trim, and doors",
      lead: "The parts of a repaint that most quotes skip are the parts that make a room look finished.",
      body: [
        "Ceilings get rolled with a 3/4-inch nap in a flat ceiling white unless you want color. Where a ceiling has been patched or has water rings, we seal it first with a stain-blocking primer. Textured ceilings take more paint and more care at the wall line, and we cut that line by hand rather than taping, because tape pulls texture off and leaves a ragged edge.",
        "Baseboards, door casing, window trim, and crown get two coats of a waterborne enamel that dries hard like oil without yellowing. Interior doors are removed and laid flat when possible so the enamel levels out with no runs, or sprayed in place with the opening masked. We reinstall hinges and hardware, and adjust any door that's rubbing while it's off. If the trim itself is damaged or missing, that's our baseboards and trim carpentry service.",
      ],
      highlights: [
        { icon: "paint-roller", label: "Ceilings sealed and rolled", detail: "Water rings and patches primed, then a full flat coat with the wall line cut by hand." },
        { icon: "door-open", label: "Doors laid flat or sprayed", detail: "Enamel that levels without runs, hardware reinstalled, hinges adjusted." },
        { icon: "ruler", label: "Trim in hard enamel", detail: "Two coats of waterborne enamel that resists scuffs and doesn't yellow." },
      ],
    },
  ],
  benefits: [
    { title: "Even in side light", description: "Filled, primed, and rolled wet-edge so afternoon sun through a west window shows color, not roller marks." },
    { title: "Sheen picked per room", description: "Sheens chosen for how each room is used, so scuffs wipe off instead of needing a touch-up." },
    { title: "Drywall fixed under the paint", description: "Cracks and patches finished properly before color goes on, so they don't reappear next season." },
  ],
  process: [
    { title: "Quote from photos or a walkthrough", description: "Send room photos and dimensions for a per-room price, or book a walkthrough for a whole-house repaint with trim and ceilings." },
    { title: "Colors and sheens locked in", description: "We confirm every surface and product before we buy paint, and can put up test patches if you're deciding between colors." },
    { title: "Prep, prime, and paint", description: "Furniture covered, holes filled, gaps caulked, repairs primed, then edges cut in and two coats rolled." },
    { title: "Walkthrough and touch-ups", description: "We check every wall under a work light with you, touch up anything that needs it, and put the room back." },
  ],
  faqs: [
    {
      question: "How much does it cost to paint a room in Las Vegas?",
      answer: "Most rooms are quoted as a flat price based on wall square footage, ceiling height, and whether ceilings, trim, and doors are included. Color changes from dark to light or vice versa and heavy patching add to it. Send photos and rough dimensions by email and you'll get a number before we schedule anything.",
    },
    {
      question: "How long does interior painting take?",
      answer: "A standard bedroom with walls only takes about a day. Add ceilings, trim, and doors and it's usually two. Whole-house interiors run three to seven days depending on the number of rooms, the amount of trim, and how many colors are involved. We paint in a sequence so you keep the use of most of the house.",
    },
    {
      question: "Do you paint over builder-grade flat paint or do I need primer?",
      answer: "Sound builder flat can be painted over directly with two coats of a quality paint-and-primer product. If the old paint is chalky, stained, or has been patched, those areas get primed first. We check adhesion with a piece of tape on a hidden spot before deciding, and we'll show you what we found.",
    },
    {
      question: "Can you paint just one accent wall?",
      answer: "Yes. Accent walls are a common small job, and we can pair one with other small repairs to make the trip worthwhile. Dark accent colors usually need a tinted primer or three coats to cover evenly, which we'll build into the price so there's no surprise.",
    },
    {
      question: "Do I need to move my furniture before you paint?",
      answer: "No. We move furniture to the center of the room, cover it with plastic, and put it back when we're done. Please clear shelves, take down wall art and curtains, and empty closets if we're painting inside them. Anything fragile is best moved out of the room before we arrive.",
    },
  ],
  relatedProductSlugs: [],
  meta: {
    title: "Interior Painting in Las Vegas",
    description: "Interior painting in Las Vegas: walls, ceilings, trim, and doors with real prep, primer where needed, and two coats. Per-room pricing from photos.",
  },
};
