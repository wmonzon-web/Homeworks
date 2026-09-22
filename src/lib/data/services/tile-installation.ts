import type { Service } from "@/lib/data/types";
import { getServiceSummary } from "@/lib/data/services/catalog";

const summary = getServiceSummary("tile-installation")!;

export const service: Service = {
  ...summary,
  tagline: "Floor, backsplash, and shower tile set flat, waterproofed behind the surface, and grouted so it stays clean.",
  quickFacts: {
    typicalDuration: "Backsplash: 1–2 days. Tile floor in a room or two: 2–3 days. Shower rebuild with waterproofing: 4–7 working days.",
    priceBand: "Priced per square foot installed; showers and niches are quoted as a package after a walkthrough.",
    whenToCall: "Cracked or hollow tile, a shower that leaks into the next room, a dated backsplash, or a new floor in a kitchen, bath, or entry.",
  },
  contentSections: [
    {
      heading: "Tile installation in Las Vegas that stays flat and stays dry",
      lead: "Tile is permanent, so the layout, the substrate, and the waterproofing have to be right before the first piece is set.",
      body: [
        "Tile installation means preparing a flat, rigid, and (in wet areas) waterproof substrate, planning a layout so the cuts land where you won't see them, setting each tile in properly troweled thin-set with consistent joints, and grouting and sealing once it cures. We install porcelain, ceramic, and natural stone on floors, kitchen backsplashes, tub surrounds, and full shower rebuilds in owner-occupied homes across the Las Vegas valley, following the Tile Council of North America (TCNA) methods that inspectors and manufacturers reference.",
        "Most of our tile work happens in kitchens and bathrooms, often alongside a vanity or countertop swap. If the job grows into cabinets, fixtures, and lighting on one schedule, that's our bathroom remodeling or kitchen refresh service, and the same crew carries it through. For a single backsplash or a re-tiled entry we keep it simple: measure, quote, set, grout, done. Either way you get the same substrate prep and the same grout and sealant choices, because a backsplash set poorly looks just as bad as a shower that leaks.",
        "We also handle the tile problems valley homes develop over time: hollow-sounding floor tile that has lost its bond, tile cracked along a slab crack, and shower pans that were never properly waterproofed and now stain the drywall on the other side of the wall. We open up what needs opening, tell you what we found, and quote the repair that fixes the cause rather than the one that hides it for another year. Sometimes that's a few tiles; sometimes it's the pan.",
      ],
      callout: {
        type: "local",
        title: "Why tile cracks and showers leak in valley homes",
        text: "Las Vegas tract homes from the 1990s and 2000s were built fast on slabs over expansive soil. Floor tile set directly on that slab without an uncoupling membrane cracks right along the slab crack beneath it. In showers, the era's standard was a mortar bed over a plastic liner with drywall or unsealed backer board above it; after twenty years of hard water and daily use, those pans and corners are the leak. We set floors over an uncoupling membrane and build showers with a bonded waterproofing membrane so water never reaches the framing.",
      },
    },
    {
      heading: "Waterproofing showers the right way",
      lead: "A shower is a waterproof box with tile glued to the inside of it. The tile is the finish, not the barrier.",
      body: [
        "We strip a failing shower to the studs, check for wet or rotted framing, and rebuild from there. The floor gets a properly sloped mortar pre-slope or a foam pan, a bonded waterproofing membrane (a sheet system or a liquid-applied membrane rated for continuous water exposure), and a drain assembly that's integrated with that membrane. Walls get cement or foam backer board, seams and corners banded, and the membrane carried up past the shower head and over the curb and any niche.",
        "Before tile goes on, we flood-test the pan for 24 hours and fix anything that seeps. Then we set wall tile from a laser level line, not from the tub or floor, so grout joints stay straight even where the pan slopes. Niches get a slight forward pitch, the curb slopes inward, and the corners where planes meet get silicone sealant instead of grout so they don't crack when the house moves.",
      ],
      highlights: [
        { icon: "shield-check", label: "Bonded membrane, flood-tested", detail: "Sheet or liquid waterproofing on the pan and walls, tested for 24 hours before any tile is set." },
        { icon: "droplets", label: "Integrated drain", detail: "Drain assembly bonded to the membrane so water on the pan has exactly one place to go." },
        { icon: "ruler", label: "Set from a level line", detail: "Wall tile starts from a laser line so joints stay straight as the floor slopes to the drain." },
      ],
    },
    {
      heading: "Floors and backsplashes: layout and substrate",
      lead: "Good tile work is planned at the doorway and the countertop, before a single tile is cut.",
      body: [
        "Floor tile starts with the slab: we grind highs, fill lows, and lay an uncoupling membrane over any slab with cracks or control joints, which is most of them. Large-format tile (any side over 15 inches) needs a substrate flat to 1/8 inch in 10 feet, a large-and-heavy-tile mortar, back-buttering, and at least 95% coverage in wet areas, which we check by pulling a tile mid-job. Lippage is controlled with a leveling clip system on big formats and a 1/3 offset instead of 50% on plank tile, per TCNA guidance.",
        "Backsplashes are laid out from the center of the range or sink so cuts split evenly at the ends and outlets land in whole tiles where possible. We add box extenders so outlet covers sit flush on the finished surface, and we run tile behind the range and under the upper cabinets, not just the visible band. Exposed edges get a metal profile or a bullnose so nothing is left raw.",
        "Natural stone (marble, travertine, slate) is sealed before grouting so the grout doesn't stain the face, and sealed again afterward. It also gets a white thin-set so the mortar doesn't shadow through lighter stone, and filled travertine is sometimes re-filled and honed on site after setting. Porcelain and ceramic don't need sealing, but their grout does, and porcelain in particular needs a polymer-modified mortar rated for it, because the tile absorbs almost no water and gives an unmodified mortar nothing to grab.",
      ],
    },
    {
      heading: "Grout, sealant, and what to expect afterward",
      lead: "Grout is where tile shows its age, so we choose it for the room instead of the price.",
      body: [
        "We use high-performance cement grout or a single-component urethane or epoxy grout on floors, showers, and backsplashes where hard water and cooking splatter would stain ordinary grout within a year. Joint width follows the tile: 1/16 inch on rectified porcelain, 3/16 on handmade-look ceramic and stone. Every change of plane (wall to floor, wall to wall, tile to tub or counter) gets 100% silicone matched to the grout color instead of grout, because grout in a corner will crack.",
        "Cement grout gets a penetrating sealer once it cures. We leave you with the grout name and color, the spare tile from the job, and a short note on cleaning: pH-neutral cleaner, no vinegar on stone, and a squeegee on shower glass if you're fighting the valley's hard water spots. If your existing grout is sound but stained or cracked in places, re-grouting and re-caulking is our caulking, grout, and weatherproofing service.",
      ],
      callout: {
        type: "tip",
        title: "Buy 10–15% extra tile",
        text: "Order about 10% overage for straight lays and 15% for diagonal or herringbone patterns. Keep a box afterward; dye lots change, and a matching box in the garage turns a cracked tile into a one-hour fix instead of a re-do.",
      },
    },
  ],
  benefits: [
    { title: "Waterproof before it's pretty", description: "Showers get a bonded membrane and a 24-hour flood test, so the tile is the finish and not the barrier." },
    { title: "Flat, without lippage", description: "Slab leveled, uncoupling membrane down, and a clip system on large formats so edges don't catch a bare foot." },
    { title: "Grout that stays the color you picked", description: "Stain-resistant grout, silicone at every corner, and sealer on cement grout and natural stone." },
  ],
  process: [
    { title: "Walkthrough and layout", description: "We check the slab or walls, measure, plan the layout around doorways, counters, and fixtures, and quote per square foot with materials listed." },
    { title: "Demo and substrate", description: "Old tile removed, framing checked in wet areas, slab ground and leveled, and backer board or membrane installed and flood-tested." },
    { title: "Set the tile", description: "Layout lines snapped, tile set in properly troweled mortar with consistent joints, cuts made on a wet saw, and coverage checked." },
    { title: "Grout, seal, and clean", description: "Grout after the mortar cures, silicone at every change of plane, sealer where needed, and a haze-free clean before we leave." },
  ],
  faqs: [
    {
      question: "How much does tile installation cost in Las Vegas?",
      answer: "Tile is priced per square foot installed, and the biggest variables are tile size and pattern, whether we're tearing out old tile, and how much slab prep the floor needs. Showers are quoted as a package because demo, waterproofing, pan, niche, and curb work don't scale by the square foot. Send photos and rough dimensions and we'll give you a range before a walkthrough.",
    },
    {
      question: "How long does it take to tile a shower?",
      answer: "A full shower rebuild takes four to seven working days: a day for demo and framing checks, a day or two for backer board and waterproofing, a day for the flood test, two days to set tile, and a final visit to grout and seal after the mortar cures. You'll be without that shower for the whole stretch, so we schedule around your second bathroom.",
    },
    {
      question: "Can you tile over existing tile?",
      answer: "On a backsplash or a sound floor, sometimes. The old tile has to be firmly bonded, flat, and scuffed for adhesion, and the added height has to work at doors, toilets, and countertops. We don't tile over tile in showers, over cracked or hollow floors, or where the extra thickness creates a trip edge. In most valley homes, tear-out is the better long-term answer.",
    },
    {
      question: "Why does my tile floor sound hollow?",
      answer: "A hollow sound usually means the mortar didn't bond to the tile or the slab, often because the tile wasn't back-buttered or the slab was dusty when it was set. Hollow tile hasn't failed yet, but it will crack under a dropped pan or a heavy chair. A few pieces can be popped and reset; if it's most of the floor, we replace it over an uncoupling membrane.",
    },
    {
      question: "Do you install large format and wood-look plank tile?",
      answer: "Yes. Large-format and plank porcelain need a flatter substrate than small tile, a large-and-heavy-tile mortar, and a leveling clip system to control lippage. Wood-look planks are laid at a 1/3 offset rather than 50%, because the slight bow in long tiles stacks up at the center of the joint. We prep and set to those specs.",
    },
  ],
  relatedProductSlugs: [],
  meta: {
    title: "Tile Installation in Las Vegas",
    description: "Tile installation in Las Vegas: floors, backsplashes, and showers set over leveled slabs and bonded waterproofing, then grouted to last. Priced per square foot.",
  },
};
