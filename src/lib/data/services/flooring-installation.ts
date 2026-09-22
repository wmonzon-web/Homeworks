import type { Service } from "@/lib/data/types";
import { getServiceSummary } from "@/lib/data/services/catalog";

const summary = getServiceSummary("flooring-installation")!;

export const service: Service = {
  ...summary,
  tagline: "LVP, laminate, engineered hardwood, and carpet laid on a slab that was flattened and moisture-tested first.",
  quickFacts: {
    typicalDuration: "One or two rooms: 1–2 days. A whole single-story home: 3–5 days, plus 2–3 days of acclimation for wood and laminate.",
    priceBand: "Priced per square foot installed, with tear-out, slab prep, and transitions itemized on the quote.",
    whenToCall: "Worn carpet, scratched or cupped wood, peeling vinyl, tile you want covered, or a move-in where the floors need to be done first.",
  },
  contentSections: [
    {
      heading: "Flooring installation in Las Vegas done on a flat, dry slab",
      lead: "The floor you see lasts only as long as the subfloor under it, so that's where the job starts.",
      body: [
        "Flooring installation means removing the old floor, flattening and testing the subfloor, letting the new material acclimate to the house, and then laying plank or carpet with the right underlayment, expansion gaps, and transitions at every doorway. We install luxury vinyl plank (LVP), laminate, engineered hardwood, and carpet in owner-occupied homes across the Las Vegas valley. Almost all of it goes over the concrete slab that nearly every valley home is built on, which changes how we prep and which products we recommend.",
        "One crew handles tear-out, haul-away, prep, install, and trim. We pull baseboards where the product needs a clean expansion gap and reinstall or replace them, and we cut and set transition strips where new flooring meets tile, carpet, or a step-down. If you want taller baseboards at the same time, that's our baseboards, trim, and carpentry service and it goes on the same schedule. We also handle the small things a flooring-only installer leaves behind: undercutting jambs, resetting toilets after a bathroom floor, and re-hanging doors that no longer clear the new height.",
        "We'll tell you plainly which product fits the room. Kitchens, laundry rooms, and baths get waterproof LVP. Bedrooms can take carpet or laminate. Living areas and hallways that see sun and traffic get LVP or engineered hardwood with a wear layer thick enough to matter. If you already bought material, we check it against the room before install rather than laying it and hoping. And when the whole house is getting new floors, we run one product through the main living areas so there isn't a transition strip at every doorway.",
      ],
      callout: {
        type: "local",
        title: "Why slab-on-grade changes the prep",
        text: "Almost every home in the Las Vegas valley sits on a concrete slab poured over expansive desert soil. Slabs here are rarely flat: they hump in the middle, dip at the edges, and crack where the soil moves. A floating floor telegraphs every one of those flaws as bounce, gaps, and clicking locks. We check the slab with a 10-foot straightedge, grind the highs, fill the lows with self-leveling underlayment, and moisture-test before anything goes down. Yes, even in the desert: a slab can wick water from irrigation lines and a leaking hose bib.",
      },
    },
    {
      heading: "Subfloor prep, acclimation, and moisture testing",
      lead: "Manufacturers void warranties over the steps most installers skip, so we don't skip them.",
      body: [
        "After tear-out we scrape adhesive, pull tack strip and staples, and vacuum the slab. Then we map it with a straightedge: most manufacturers allow no more than 3/16 inch of variation over 10 feet for floating floors, and we grind and level until the slab meets that. Cracks get filled, and any slab under wood or laminate gets a calcium chloride or pin-meter moisture test before the material comes near it. High readings mean a vapor barrier or a different product.",
        "Engineered hardwood and laminate need to sit in the house, with the boxes opened, for 48 to 72 hours so they reach the room's temperature and humidity before install. Skip this in a Las Vegas summer and the planks shrink after they're locked together, opening seams by fall. LVP is more forgiving but still needs a day inside if it rode in a hot truck. Carpet pad and carpet go in the same day.",
      ],
      highlights: [
        { icon: "ruler", label: "Slab flattened to spec", detail: "Highs ground and lows filled with self-leveler until a 10-foot straightedge shows no gap." },
        { icon: "droplets", label: "Moisture tested", detail: "Calcium chloride or pin-meter readings before wood or laminate goes down, with a vapor barrier where needed." },
        { icon: "clock", label: "Acclimated, not rushed", detail: "Wood and laminate sit in the house 48–72 hours so they don't shrink after install." },
      ],
    },
    {
      heading: "LVP, laminate, engineered hardwood, or carpet: which one fits",
      lead: "Each product has a room it belongs in and a room it fails in.",
      body: [
        "Luxury vinyl plank is the default for most valley homes: fully waterproof, stable in heat, and available in rigid-core (SPC) versions that hide minor slab flaws better than thin flexible planks. We run it wall to wall through kitchens, baths, and living areas with a single expansion gap at the perimeter. Laminate costs less and takes scratches well, but its fiberboard core swells if water sits on it, so we keep it out of bathrooms and laundry rooms.",
        "Engineered hardwood gives you a real wood face on a plywood core that handles the slab better than solid hardwood, which can't be nailed to concrete and moves too much in our dry air. We glue it down or float it depending on the product. Carpet still makes sense in bedrooms and on stairs: it's quiet, warm underfoot on a slab in January, and cheaper per square foot. We install it over a proper pad with power-stretched seams, not kicked in.",
      ],
      callout: {
        type: "tip",
        title: "Ask for the wear layer in mils",
        text: "For LVP, ask for the wear layer thickness in mils. 12 mil is fine for a guest room; 20 mil or more is what holds up in a kitchen with dogs and dining chairs. It matters more than the plank's overall thickness.",
      },
    },
    {
      heading: "Transitions, trim, and the details that finish the job",
      lead: "A floor looks installed or it looks finished, and the difference is at the edges.",
      body: [
        "Every doorway where the new floor meets tile, carpet, or a different height gets a matching transition: T-molding between equal heights, a reducer down to a lower floor, and a stair nose on every step edge. We undercut door jambs and casing with a jamb saw so planks slide beneath them instead of stopping short with a caulked gap. Floor vents, closet tracks, and pantry thresholds get the same treatment.",
        "Baseboards come off before install where the product needs a 1/4-to-3/8-inch expansion gap at the walls, and they go back on (or new ones go on) once the floor is down so the gap is hidden without quarter-round. If you'd rather keep existing base in place, we add shoe molding and paint it to match, which is where our interior painting service can pick up. Either way, the finished edge is a straight, caulked line at the wall rather than a strip of visible foam or a gap that collects dust.",
      ],
    },
  ],
  benefits: [
    { title: "Prepped so it stays flat", description: "Slab ground, leveled, and moisture-tested before the first plank, so the floor doesn't bounce, gap, or click." },
    { title: "The right product for each room", description: "Waterproof LVP where water lands, wood or carpet where it doesn't, and a wear layer that matches your traffic." },
    { title: "Finished at the edges", description: "Undercut jambs, matching transitions, and baseboards reset so the floor looks like it came with the house." },
  ],
  process: [
    { title: "Measure and quote", description: "We measure each room, check the slab, and price the job per square foot installed with tear-out, prep, and transitions listed separately." },
    { title: "Tear-out and prep", description: "Old flooring removed and hauled off, adhesive scraped, slab ground and leveled, and moisture tested where wood or laminate is going down." },
    { title: "Acclimate and install", description: "Material sits in the house as the manufacturer requires, then goes down with the right underlayment, expansion gaps, and stagger pattern." },
    { title: "Transitions, trim, and walkthrough", description: "Transitions set, baseboards or shoe reinstalled, floor cleaned, and a walkthrough with you before we load the truck." },
  ],
  faqs: [
    {
      question: "How much does flooring installation cost in Las Vegas?",
      answer: "Flooring is priced per square foot installed, and the number depends on the product, whether we're tearing out tile or carpet, and how much slab leveling the room needs. Carpet and laminate sit at the low end, engineered hardwood at the top, and LVP in between. We measure in person and give you one written price with tear-out, prep, and transitions itemized.",
    },
    {
      question: "Can you install LVP over existing tile?",
      answer: "Often, yes. If the tile is well bonded and the grout lines are shallow, we skim the joints with patch so they don't telegraph through, and rigid-core LVP goes right over it. Cracked, loose, or hollow tile has to come out, and the added height at doors and toilets sometimes makes removal the better call. We'll tell you which after we look.",
    },
    {
      question: "How long does it take to install flooring?",
      answer: "One or two rooms of LVP or carpet usually take a day. A full single-story home takes three to five working days including tear-out and prep, plus two to three days beforehand for wood or laminate to acclimate in the house. We sequence rooms so you always have a path to the kitchen and a bathroom.",
    },
    {
      question: "Do I need to move my furniture before flooring installation?",
      answer: "We move furniture as part of the job; it just needs to be off the floor we're working on, and we shift it room to room as we go. Please empty closets, clear breakables, and unhook electronics. Pianos, safes, and aquariums are yours to arrange.",
    },
    {
      question: "Is engineered hardwood a good idea in Las Vegas?",
      answer: "Yes, with acclimation and the right install. Engineered planks have a plywood core that stays more stable than solid wood in our low humidity, and they can be glued or floated on a slab where solid hardwood can't be nailed. Keep indoor humidity above about 30% in summer and use rugs at south-facing glass to slow UV fading, and it holds up well.",
    },
  ],
  relatedProductSlugs: [],
  meta: {
    title: "Flooring Installation in Las Vegas",
    description: "Flooring installation in Las Vegas: LVP, laminate, engineered hardwood, and carpet laid on a leveled, moisture-tested slab. Priced per square foot installed.",
  },
};
