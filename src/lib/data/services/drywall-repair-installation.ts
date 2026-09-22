import type { Service } from "@/lib/data/types";
import { getServiceSummary } from "@/lib/data/services/catalog";

const summary = getServiceSummary("drywall-repair-installation")!;

/**
 * EXEMPLAR. Every service file follows this shape and voice:
 * - First body paragraph answers the search query directly, in plain words.
 * - Specific over generic: name the materials, the steps, the failure modes.
 * - One `local` callout with a real Las Vegas / desert reason.
 * - No invented numbers, awards, or customer counts.
 * - FAQ questions phrased the way people type them.
 */
export const service: Service = {
  ...summary,
  tagline: "Holes, cracks, and water damage patched so smooth you can't find the repair.",
  quickFacts: {
    typicalDuration: "Small patches: 1 visit plus a return to sand and paint. New walls: 2–4 days.",
    priceBand: "Most repairs are a flat price quoted from your photos.",
    whenToCall: "Holes, corner cracks, nail pops, water stains, soft spots, or a room that needs new walls.",
  },
  contentSections: [
    {
      heading: "Drywall repair in Las Vegas that actually disappears",
      lead: "A drywall repair is only finished when the patch, the texture, and the paint all match the wall around it.",
      body: [
        "Drywall repair means cutting out damaged gypsum board, installing a new piece backed by wood or a metal clip, taping the seams, and applying three thin coats of joint compound that are sanded flat. Then the texture is matched to the existing wall and the area is primed and painted. Skip any of those steps and the repair shows as a flat spot, a ridge, or a shiny rectangle under the light.",
        "We handle the whole sequence with one crew: doorknob holes, corner-bead damage from a vacuum or a stroller, cracks above doors and windows, nail pops, and the soft, stained board that shows up after a roof or plumbing leak. For larger jobs we hang and finish new drywall in garages, additions, and rooms opened up during a remodel.",
        "Because we also paint, you don't coordinate a second contractor. The patch is finished, textured, primed, and painted to the nearest corner so the color break is invisible.",
      ],
      callout: {
        type: "local",
        title: "Why Las Vegas walls crack in the first place",
        text: "Valley homes sit on expansive soil that moves with the seasons, and interior humidity swings from single digits in summer to 40% when the swamp cooler or a winter storm rolls through. Framing shrinks and shifts, and the drywall cracks at the corners of openings. We tape those cracks with mesh and setting-type compound instead of just filling them, so they don't reopen next summer.",
      },
    },
    {
      heading: "What a proper patch looks like",
      lead: "The difference between a repair that lasts and one that reappears is in the prep and the backing.",
      body: [
        "Small holes up to about the size of a fist get a self-adhesive metal patch or a California patch cut from scrap board. Anything larger gets the damaged section squared off, a wood backer screwed behind the opening, and a new piece of matching-thickness drywall screwed to it. Water-damaged board is cut back until we reach dry, firm material, and the cavity is checked for the leak that caused it.",
        "Seams get paper or mesh tape and a setting-type compound for the first coat, which cures hard and doesn't shrink. Two more coats of lightweight compound feather the repair out 8 to 12 inches past the patch so there's no hump. Each coat is sanded before the next.",
      ],
      highlights: [
        { icon: "shield-check", label: "Backed, not floating", detail: "Every patch larger than a fist gets solid backing so it can't flex and crack." },
        { icon: "layers", label: "Three coats, feathered wide", detail: "Setting compound first, then two lightweight coats sanded flat and feathered out a foot." },
        { icon: "sparkles", label: "Texture matched", detail: "Orange peel, knockdown, or smooth: sprayed and knocked down to match what's already there." },
      ],
    },
    {
      heading: "Texture matching is where most repairs fail",
      lead: "Almost every Las Vegas home built after 1990 has orange peel or knockdown texture, and a smooth patch on a textured wall is obvious from across the room.",
      body: [
        "We spray texture from a hopper gun, adjust the air pressure and compound thickness to match the existing pattern, and for knockdown we wait the right number of minutes before dragging the knife so the flattened peaks look the same size as the originals. On smooth-wall homes we skim the repair with a wide knife and sand it under a raking light so nothing telegraphs through the paint.",
        "Ceiling repairs get the same care. If your ceiling still has popcorn, we can patch to match or, more often, remove it entirely and refinish the whole ceiling. That's its own service and we'll tell you honestly which makes sense.",
      ],
      callout: {
        type: "tip",
        title: "Take a photo in raking light",
        text: "Hold your phone's flashlight against the wall at a low angle and photograph the damage. It shows us the texture pattern and how far the damage spreads, which is usually enough to quote a flat price without a visit.",
      },
    },
    {
      heading: "New drywall installation",
      lead: "For garages, additions, basements, and remodels, we hang, tape, finish, and texture from bare studs to paint-ready.",
      body: [
        "We use 1/2-inch board on walls and 5/8-inch on ceilings and garage walls shared with the house, where code requires a fire-rated assembly. Moisture-resistant board goes in bathrooms and laundry rooms. Sheets are hung horizontally with screws on a set pattern, corners get metal or vinyl bead, and the finish level is chosen for the room: level 4 under textured paint, level 5 skim coat where you want smooth walls under a semi-gloss or strong side light.",
        "Once finished and textured, the same crew primes and paints, so a new room goes from framing to move-in without a handoff.",
      ],
      highlights: [
        { icon: "shield-check", label: "Fire-rated where required", detail: "5/8-inch type X board on garage-to-house walls and ceilings." },
        { icon: "droplets", label: "Moisture-resistant in wet rooms", detail: "Green or purple board behind bathroom and laundry walls." },
        { icon: "paintbrush", label: "Primed and painted", detail: "Finished with the right primer for new drywall, then two coats of paint." },
      ],
    },
  ],
  benefits: [
    { title: "Invisible when it's done", description: "Texture, primer, and paint matched to the wall, so guests can't find the repair." },
    { title: "Fixed once", description: "Backed patches and setting-type compound on cracks so they don't reopen with the next seasonal shift." },
    { title: "One crew, start to paint", description: "Cut, patch, tape, texture, and paint by the same people on the same schedule." },
  ],
  process: [
    { title: "Send photos or book a look", description: "Most repairs are quoted from your photos. Water damage or large areas get a quick walkthrough so we can find the cause." },
    { title: "Prep and protect", description: "Floors and furniture covered, dust contained with plastic where we're sanding, and any leak behind the wall addressed first." },
    { title: "Patch, tape, and finish", description: "Backed patch or new board, taped seams, three coats of compound sanded flat, then texture to match." },
    { title: "Prime, paint, and clean up", description: "Drywall primer, two coats of paint to the nearest break, and the room left the way we found it." },
  ],
  faqs: [
    {
      question: "How much does drywall repair cost in Las Vegas?",
      answer: "Small patches like a doorknob hole are a flat price that covers the patch, texture, and paint. Larger repairs and water damage are priced by the area and whether the leak still needs fixing. Send photos through the quote form and we'll give you a number before anyone comes out.",
    },
    {
      question: "Can you match orange peel or knockdown texture?",
      answer: "Yes. We spray texture from a hopper gun and adjust pressure, thickness, and knockdown timing to match the existing pattern. After paint, the repair should be invisible in normal light.",
    },
    {
      question: "How long does a drywall repair take?",
      answer: "A typical patch takes two short visits: one to patch and texture, and one after the compound has dried to sand, prime, and paint. New drywall in a room or garage usually takes two to four days including finish and texture.",
    },
    {
      question: "Do I need to paint the whole wall after a repair?",
      answer: "Usually no. We paint from the repair to the nearest corner or natural break so the sheen and color line up. If the existing paint is old or faded, we'll tell you, and repainting the whole wall is an easy add-on since we're already there.",
    },
    {
      question: "Will you fix the leak that damaged the drywall?",
      answer: "If it's a plumbing leak, yes. We handle plumbing repairs with the same crew. Roof leaks we'll identify and refer, and we won't close up a wall until the source is fixed.",
    },
  ],
  relatedProductSlugs: [],
  meta: {
    title: "Drywall Repair & Installation in Las Vegas",
    description: "Drywall repair and installation in Las Vegas: holes, cracks, water damage, and new walls patched, textured, and painted to match. Flat-price quotes from your photos.",
  },
};
