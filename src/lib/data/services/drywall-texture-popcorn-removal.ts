import type { Service } from "@/lib/data/types";
import { getServiceSummary } from "@/lib/data/services/catalog";

const summary = getServiceSummary("drywall-texture-popcorn-removal")!;

export const service: Service = {
  ...summary,
  tagline: "Popcorn ceilings scraped, skim-coated, and refinished flat or lightly textured, plus wall texture matched wherever it's been patched or changed.",
  quickFacts: {
    typicalDuration: "Popcorn removal: 2–4 days per room set, including skim, texture, and paint. Texture matching on a patch: 1–2 short visits.",
    priceBand: "Popcorn removal is priced per square foot of ceiling. Wall texture is priced by the area or as a flat add-on to a repair.",
    whenToCall: "Popcorn ceilings you're ready to lose, texture that doesn't match after a repair or wall removal, or a room where you want smooth walls.",
  },
  contentSections: [
    {
      heading: "Popcorn ceiling removal and texture matching in Las Vegas",
      lead: "Popcorn removal is a scrape, a skim, and a refinish. The scrape is fast; the skim coat is what decides whether the ceiling looks new or just looks scraped.",
      body: [
        "Popcorn ceiling removal means wetting the acoustic texture, scraping it off down to the drywall, skim-coating the ceiling with one or two coats of joint compound to hide the scrape marks and old tape seams, sanding, and then either leaving it smooth or spraying a light orange peel or knockdown to match the walls. Then it's primed and painted. Drywall texture matching is the related job: spraying and knocking down new texture on a patch, a repaired corner, or a whole wall so it disappears into the existing finish.",
        "We remove popcorn in single rooms, hallways, and whole houses, and we handle the texture on every drywall repair and remodel we do. Ceilings that were painted after the popcorn went up take longer, because paint seals the texture and it won't soften with water. Those get dry-scraped with more skim coating afterward, and we'll tell you which kind you have when we look at it.",
        "If the ceiling has water stains, sagging tape, or cracks, those are fixed during the skim stage. That overlaps with our drywall repair service, and on a popcorn job it's simply part of the same days of work with the same crew. Water stains get sealed with a shellac or oil-based primer before the ceiling paint, because compound and latex paint alone won't stop an old ring from bleeding back through in a few weeks.",
      ],
      callout: {
        type: "local",
        title: "Test before you scrape if the house is older",
        text: "Popcorn texture applied through the early 1980s can contain asbestos, and some homes in older Las Vegas neighborhoods still have the original ceilings. Before we scrape any ceiling in a home built before the mid-1980s, we send a sample to a lab. If it comes back positive, removal is a licensed abatement job, not a handyman job, and we'll refer you. Homes from the 1990s and 2000s, which is most of the valley, are almost always a straightforward scrape.",
      },
    },
    {
      heading: "How we remove popcorn without wrecking the room",
      lead: "The mess is real but containable. The goal is a flat, clean ceiling and a room that looks untouched below the crown line.",
      body: [
        "We empty the room or move everything to the center under plastic, then cover floors and walls with plastic sheeting taped at the ceiling line. Light fixtures and fans come down, and the boxes get covered. The popcorn is misted with a pump sprayer and left to soak for a few minutes so it releases in sheets, then scraped with a wide blade into a catch tray. Unpainted popcorn comes off cleanly; painted popcorn takes more passes and sometimes a dry scrape.",
        "Once scraped, the drywall underneath is never smooth. It has gouges from the scraper, exposed tape at the seams, and screw dimples that were hidden by the texture. We skim the whole ceiling with a wide knife, sand it, and skim again if the light shows waves. Under the strong side light from a Las Vegas window, an unskimmed ceiling shows every seam, which is why a scrape-and-paint job from a cheaper bid often looks worse than the popcorn did.",
      ],
      highlights: [
        { icon: "shield-check", label: "Room sealed in plastic", detail: "Floors, walls, and fixtures covered so the scraped texture stays in the tray, not your house." },
        { icon: "layers", label: "Full skim coat", detail: "One or two coats of compound over the entire ceiling, sanded, so seams and scrape marks vanish." },
        { icon: "paint-roller", label: "Primed and painted", detail: "Drywall primer and a flat ceiling paint, or your color, so the job ends finished." },
      ],
    },
    {
      heading: "Smooth, orange peel, or knockdown",
      lead: "After the skim you choose the ceiling finish, and the same choices apply to any wall we texture.",
      body: [
        "Smooth ceilings are the modern look and they demand a level 5 skim: an extra full coat and careful sanding under a raking light, because there's no texture to hide anything. Light orange peel is the most common choice in the valley since it matches the walls in most tract homes and forgives small imperfections. Knockdown is heavier: sprayed splatter that's dragged flat with a knife after a few minutes to leave the flattened, mottled pattern on many 2000s ceilings and walls.",
        "For texture matching on walls, we spray from a hopper gun and dial in the compound thickness, air pressure, and nozzle to match the existing pattern, then test on a scrap board before touching the wall. Knockdown timing is the part that separates a match from a near miss; drag it too early and it smears, too late and the peaks stay sharp. We feather the new texture into the old so there's no visible edge.",
      ],
      callout: {
        type: "tip",
        title: "Scrape before the floors go in",
        text: "If you're planning new flooring, do the ceilings first. Popcorn removal is the messiest job on the list, and even under plastic it's easier to protect a subfloor than a new plank floor. It's also the right time to add recessed lights, since the ceiling is open and getting skimmed anyway; that's our lighting and fan service.",
      },
    },
    {
      heading: "Texture after a remodel or repair",
      lead: "Any time a wall is opened, patched, or removed, the new drywall has to be textured to match or the repair shows forever.",
      body: [
        "The most common texture calls we get are after a half wall comes down, a doorway is widened, or another contractor patched a wall and left a smooth rectangle on an orange peel surface. We also skim textured walls to smooth for homeowners who want a flat, modern finish in a living room or primary bedroom, which is a full skim of every wall in the room followed by primer and paint.",
        "We match texture on ceilings and walls, corners and bullnose edges, and on the odd spots like the return beside a window where the original spray went thin. On smooth-wall homes we skim and sand under a raking light so the repair doesn't telegraph through the paint. Every texture job ends with primer and paint to the nearest break, done by the same crew, so you're not scheduling a painter afterward.",
      ],
      highlights: [
        { icon: "spray-can", label: "Hopper-gun match", detail: "Pressure, thickness, and knockdown timing tuned to the existing pattern, tested first." },
        { icon: "sparkles", label: "Textured to smooth", detail: "Full skim coat over orange peel or knockdown for a flat, modern wall." },
        { icon: "paintbrush", label: "Painted to the break", detail: "Primer and two coats to the nearest corner so the texture and color both disappear." },
      ],
    },
  ],
  benefits: [
    { title: "Flat under side light", description: "A full skim coat, not a scrape-and-paint, so the ceiling looks new when the afternoon sun hits it." },
    { title: "Texture that disappears", description: "Orange peel and knockdown matched on a test board before it goes on your wall." },
    { title: "Painted and rehung", description: "Primer, paint, fixtures rehung, and the plastic gone, by the same crew that scraped." },
  ],
  process: [
    { title: "Look, test if needed, quote", description: "We check whether the popcorn is painted, test for asbestos on older homes, and price per square foot of ceiling." },
    { title: "Seal the room", description: "Furniture out or centered, floors and walls in plastic, fixtures down and boxes covered." },
    { title: "Scrape and skim", description: "Popcorn misted and scraped, then one or two full skim coats sanded flat, with any tape or crack repairs done in the same pass." },
    { title: "Texture, prime, paint", description: "Smooth, orange peel, or knockdown as chosen, then primer and paint, fixtures rehung, and the room cleaned." },
  ],
  faqs: [
    {
      question: "How much does popcorn ceiling removal cost in Las Vegas?",
      answer: "Popcorn removal is priced per square foot of ceiling and includes the scrape, skim coat, new texture or smooth finish, primer, and paint. Painted popcorn, high ceilings, and heavy repairs raise the price. Measure the rooms you want done and send the dimensions with a photo; we'll quote from that.",
    },
    {
      question: "Does popcorn ceiling in Las Vegas have asbestos?",
      answer: "It can if it was applied before the mid-1980s. Most Las Vegas homes were built after that and their popcorn is plain gypsum and polystyrene, but older neighborhoods can have original ceilings. We send a sample to a lab for any home from that era before we scrape. If it's positive, a licensed abatement contractor removes it.",
    },
    {
      question: "How long does it take to remove a popcorn ceiling?",
      answer: "A single room typically takes two to three days: one to scrape and start skimming, one for the second skim and sanding, and one to texture, prime, and paint, with drying time between. Whole-house jobs are done in sections so you can live around the work. Painted popcorn adds time.",
    },
    {
      question: "Can you match orange peel or knockdown texture on a patch?",
      answer: "Yes. We spray from a hopper gun and tune the pressure, compound thickness, and knockdown timing to match what's on your wall, testing on a board first. After primer and paint to the nearest corner, the patch should be invisible in normal light.",
    },
    {
      question: "Can you make my textured walls smooth?",
      answer: "Yes. Smoothing orange peel or knockdown means skim-coating every wall in the room with two coats of compound, sanding under a raking light, and then primer and paint. It's more labor than a repaint, so it's usually done room by room, and it's a good fit for a living room or primary bedroom you want to modernize.",
    },
  ],
  relatedProductSlugs: [],
  meta: {
    title: "Drywall Texture & Popcorn Ceiling Removal in Las Vegas",
    description: "Popcorn ceiling removal and drywall texture matching in Las Vegas: scraped, skim-coated, textured smooth, orange peel, or knockdown, then primed and painted.",
  },
};
