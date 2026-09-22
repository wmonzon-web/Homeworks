import type { Service } from "@/lib/data/types";
import { getServiceSummary } from "@/lib/data/services/catalog";

const summary = getServiceSummary("baseboards-trim-carpentry")!;

export const service: Service = {
  ...summary,
  tagline: "Baseboards, casing, crown, shelving, and built-ins cut tight, nailed to framing, and painted so the joints disappear.",
  quickFacts: {
    typicalDuration: "Baseboards in a few rooms: 1 day plus a short return to paint. Crown or a built-in: 2–4 days.",
    priceBand: "Baseboards, casing, and crown are priced per linear foot installed; shelving and built-ins are quoted from a sketch or photos.",
    whenToCall: "Builder-grade base you want taller, trim damaged by a move or a dog, new flooring that needs base reset, or a closet or pantry that needs real shelving.",
  },
  contentSections: [
    {
      heading: "Baseboards, trim, and finish carpentry in Las Vegas",
      lead: "Trim is what makes a room look finished, and it's also what shows every shortcut, so we don't take them.",
      body: [
        "Finish carpentry means measuring, cutting, and installing the wood and MDF pieces that finish a room: baseboards along the floor, casing around doors and windows, crown at the ceiling, and shelving or built-ins that fit the wall they're on. We cope inside corners, glue and pin outside corners, nail to studs and plates rather than bare drywall, then fill, caulk, and paint so the joints don't show. We install new trim, replace damaged trim, and reset baseboards after new flooring.",
        "Most requests in valley homes are upgrades: swapping the 2-1/4-inch builder base for a 5-1/4-inch or taller profile, replacing thin ranch casing with something that has a real profile, adding crown to a living room or primary bedroom, or building shelves in a pantry, closet, or laundry room that never got past the wire rack. We size and match profiles to your door style and ceiling height so the additions look original to the house.",
        "Our crew paints, so we don't leave you with raw MDF and a punch list. Trim is primed, nail holes filled, caulked at the wall, and given two coats of enamel. When the walls need a fresh coat at the same time, that's our interior painting service on the same visit. If the trim is stain-grade, we sand, condition, stain, and topcoat it to match your existing doors or cabinets instead of leaving that to a second contractor.",
      ],
      callout: {
        type: "local",
        title: "MDF, wood, and the desert's dry air",
        text: "Las Vegas indoor humidity sits around 10–20% for much of the year, then jumps during monsoon season and whenever a swamp cooler runs. Solid pine and poplar trim shrinks in that dry air, opening miters and pulling away from caulk lines. For painted trim we use primed MDF on long runs, which stays put, and finger-jointed or poplar where a piece needs to be shaped or take a nail near an edge. Whatever the material, we glue every joint and nail into framing so seasonal movement doesn't show.",
      },
    },
    {
      heading: "How we install baseboards and casing",
      lead: "The joint you can't find is the one that was coped, glued, and nailed into something solid.",
      body: [
        "Baseboards start with finding and marking studs and bottom plates, because a nail into bare drywall holds nothing. Inside corners are coped, not mitered: one piece is cut square and the other is back-cut to the profile so it nests, which stays tight when the wall isn't quite 90 degrees, and in tract homes it usually isn't. Outside corners are mitered, glued, and pinned across the joint. Long walls get scarf joints over a stud. We shoot 15- or 16-gauge finish nails into framing and 18-gauge brads along the top edge to pull it tight to the wall.",
        "Door and window casing gets reveals marked on the jamb, miters cut on a sliding compound miter saw and checked against the actual opening, glue in every joint, and nails into both the jamb and the framing. Where the wall is out of plane with the jamb, we shim or back-bevel so the miter closes instead of leaving a gap for caulk to bridge. Then holes are filled, seams caulked, and everything is primed and painted.",
      ],
      highlights: [
        { icon: "ruler", label: "Coped inside corners", detail: "Profiles nested, not mitered, so corners stay tight when the wall isn't square." },
        { icon: "hammer", label: "Nailed to framing", detail: "Studs and plates located and nailed into, with glue in every joint." },
        { icon: "paintbrush", label: "Filled, caulked, painted", detail: "Nail holes filled, wall seam caulked, primer and two coats of enamel." },
      ],
    },
    {
      heading: "Crown moulding, shelving, and built-ins",
      lead: "The larger the piece, the more the planning matters.",
      body: [
        "Crown moulding is cut on the flat with compound angles or nested upside down against the fence, and we measure the actual spring angle on the profile because it varies by manufacturer. Ceilings in valley homes are rarely flat, so we shoot a laser line, snap a reference, and follow that line so the crown reads straight even where the drywall wanders, using caulk for hairline gaps and shims for bigger ones. On vaulted or two-story rooms we'll tell you honestly whether crown will suit the room or fight it.",
        "Shelving and built-ins are built from 3/4-inch plywood or MDF with solid edge banding, mounted to studs with cleats, and spanned so shelves don't sag under books. Pantry and closet shelving gets adjustable pin systems or fixed cleated shelves depending on how you use the space. Built-ins around a fireplace, a window seat, or a home office wall are sketched with you, built in sections, scribed to the wall, and trimmed out with base and crown that match the room.",
        "Paint-grade work is primed, filled, sanded, and sprayed or brushed with two coats of enamel. Stain-grade oak, alder, or maple is sanded, conditioned, stained, and topcoated, and we match existing stained doors and cabinets when that's what the room calls for. Larger built-ins are usually sprayed in the garage or off site so the finish is smooth and the house doesn't smell like enamel for a week, then installed and touched up in place. We'll tell you which finish schedule fits the piece.",
      ],
    },
    {
      heading: "Repair, replace, and reset after flooring",
      lead: "New floors, a move, or a dog often leave trim that needs more than paint.",
      body: [
        "After new LVP or tile, the old base often sits too low or comes off in pieces. We reinstall what survived, replace runs that split, and swap in taller base when you'd rather cover the expansion gap without quarter-round. Chewed, dented, or water-swollen base gets cut back to the nearest joint and replaced with a matching profile; if the profile is discontinued, we find the closest match or run the whole wall so nothing looks patched.",
        "Chair rail, wainscoting, board-and-batten, and window sills and aprons fall under the same work. Small repairs like a loose casing leg, a chipped miter, or a missing return are usually quoted from photos and often paired with a handyman and small repairs visit so one trip covers more than one thing. For a whole-house base and casing replacement we work room by room, so furniture only moves once and you're never living around a house full of loose trim.",
      ],
      callout: {
        type: "tip",
        title: "Match the base height to the ceiling",
        text: "With 9-foot ceilings, 5-1/4-inch base and 3-1/4-inch casing look proportional; 8-foot ceilings carry 4-1/4-inch base comfortably. Going taller than that on 8-foot walls makes the room feel shorter, so pick the height before you pick the profile.",
      },
    },
  ],
  benefits: [
    { title: "Joints that stay closed", description: "Coped corners, glued miters, and nails into framing so dry-season shrinkage doesn't open a gap." },
    { title: "Profiles that match the house", description: "Base, casing, and crown sized to your ceiling height and door style so the additions look original." },
    { title: "Painted, not left for you", description: "Primed, filled, caulked, and finished with two coats of enamel by the same crew that installed it." },
  ],
  process: [
    { title: "Measure and pick profiles", description: "We measure linear footage, check ceiling heights and door styles, and bring profile samples or a sketch for built-ins. Quoted per linear foot or as a package." },
    { title: "Prep", description: "Old trim removed cleanly, studs and plates marked, walls checked for plane, and material left in the house for a day to acclimate." },
    { title: "Cut and install", description: "Coped inside corners, glued and pinned outside corners, scarf joints over studs, and everything nailed to framing." },
    { title: "Fill, caulk, and paint", description: "Nail holes filled and sanded, seams caulked, primer and two coats of enamel, and a walkthrough with you." },
  ],
  faqs: [
    {
      question: "How much does it cost to install baseboards in Las Vegas?",
      answer: "Baseboards are priced per linear foot installed, and the total depends on the profile you choose, whether we're removing old base, how many corners and doorways the rooms have, and whether painting is included. A whole-house baseboard upgrade is quoted after we measure; a few rooms can usually be quoted from photos and a rough footage.",
    },
    {
      question: "Should I use MDF or wood baseboards?",
      answer: "For painted trim in Las Vegas, primed MDF is usually the better choice: it doesn't shrink in our dry air, has no knots to bleed through, and takes paint smoothly. Wood makes sense for stain-grade work, for edges that take abuse, or anywhere moisture is likely, since MDF swells if it gets wet. We'll recommend by room.",
    },
    {
      question: "Can you install crown moulding on a vaulted ceiling?",
      answer: "Yes, but it takes different cuts and an honest look at whether it suits the room. Crown on a sloped ceiling needs transition blocks or custom miters where the slope meets a flat wall, and very tall rooms can make standard crown look thin. We'll hold a sample in place and give you a straight opinion before we commit.",
    },
    {
      question: "Do you build custom shelving and built-ins?",
      answer: "Yes. Pantry shelving, closet systems, laundry storage, bookcases, window seats, and fireplace surrounds are all in scope. We build with 3/4-inch plywood or MDF, edge-band exposed edges, mount to studs, and trim the piece into the room with matching base and crown. Fully custom kitchen cabinetry is a bigger job than our scope, and we'll say so up front.",
    },
    {
      question: "How long does trim installation take?",
      answer: "Baseboards in three or four rooms take a day to install and a short return visit to paint after the filler and caulk cure. Casing on a house of doors, crown in two rooms, or a built-in bookcase runs two to four days. We'll give you a schedule with the quote.",
    },
  ],
  relatedProductSlugs: [],
  meta: {
    title: "Baseboards, Trim & Carpentry in Las Vegas",
    description: "Baseboards, trim, and finish carpentry in Las Vegas: base, casing, crown, shelving, and built-ins cut tight, painted, and priced per linear foot.",
  },
};
