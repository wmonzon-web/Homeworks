import type { Service } from "@/lib/data/types";
import { getServiceSummary } from "@/lib/data/services/catalog";

const summary = getServiceSummary("handyman-small-repairs")!;

export const service: Service = {
  ...summary,
  tagline: "One visit, one crew, and the whole punch list handled: fixtures, doors, caulk, shelving, and the dozen small things you've been meaning to fix.",
  quickFacts: {
    typicalDuration: "Most lists are done in a half day to a full day. Single items are usually under an hour.",
    priceBand: "Flat price for the list when we can see it in photos, or by the hour with a minimum for open-ended visits.",
    whenToCall: "Any time you have three or more small things: a sticking door, a dripping faucet, a loose towel bar, cracked caulk, a shelf to hang, a fan to mount.",
  },
  contentSections: [
    {
      heading: "Handyman services in Las Vegas for the list you keep adding to",
      lead: "A handyman visit is most efficient when there's a list. Send it over and we'll knock it out in one trip.",
      body: [
        "Handyman service means a skilled tradesperson who handles the small repairs and installs around your house that don't justify calling a plumber, an electrician, and a carpenter separately. In one visit we can adjust a door that won't latch, replace a leaking faucet cartridge, re-caulk a tub, hang shelves and a TV mount, swap a light fixture, fix a running toilet, patch a small hole, and tighten a loose handrail. We bring the tools and common parts, and we hand the list back with each item checked off.",
        "Typical work includes door and lock adjustments, faucet and toilet repairs, caulking and grout touch-ups, shelving and closet systems, TV and mirror mounting, ceiling fan and light fixture swaps, weatherstripping, dryer vent cleaning, garbage disposal replacement, window screen repair, small drywall patches, and furniture assembly. If it's a small, defined job and it's in a house, it's probably on the list.",
        "When an item turns out to be bigger than a handyman fix, a door that needs replacing rather than adjusting, or a leak inside a wall, we'll tell you, and the same company handles the larger job under its own service. You're not handed off to a stranger. We'll finish the rest of the list on the same visit, give you a separate price for the bigger item, and schedule it when it works for you.",
      ],
      callout: {
        type: "local",
        title: "The small repairs Las Vegas homes need most",
        text: "Valley houses share the same failure points. Hard water eats faucet cartridges, fill valves, and shower heads, so drips and running toilets are a constant. Low humidity shrinks door slabs and wood trim so caulk lines open and doors rub after a season. Expansive soil shifts the house enough that doors stop latching and the strike plate needs moving. And UV cooks the vinyl on weatherstripping and window screens. We carry the cartridges, strikes, caulk, and screen material these jobs need.",
      },
    },
    {
      heading: "Doors, locks, and hardware",
      lead: "A door that rubs, won't latch, or swings open on its own is usually a fifteen-minute fix with the right shims and a sharp chisel.",
      body: [
        "We tighten and shim hinges, plane or adjust doors that rub the jamb, move or deepen the strike plate so the latch catches, and replace hinges that have worn loose in the screw holes. Interior doors that swing on their own get a hinge pin bent slightly to add friction. Exterior doors get the threshold and sweep adjusted, weatherstripping replaced, and the deadbolt aligned so it throws without you lifting the handle.",
        "Lock and handle swaps, smart lock installs, closet door track repairs, pocket door adjustments, and bifold door rehangs are all standard. Sliding glass patio doors that drag get new rollers and a cleaned track, which makes a twenty-year-old slider glide again. If the door itself is warped, split, or the wrong size, we'll recommend replacement through our door installation service instead of fighting it.",
      ],
      highlights: [
        { icon: "door-open", label: "Latch and rub fixes", detail: "Hinges shimmed, strikes moved, doors planed so they close and stay closed." },
        { icon: "wrench", label: "Hardware swapped", detail: "Handles, deadbolts, smart locks, and closet track hardware installed and aligned." },
        { icon: "sun", label: "Sliders that glide", detail: "Rollers replaced and tracks cleaned on patio doors worn by dust and heat." },
      ],
    },
    {
      heading: "Plumbing and bath small repairs",
      lead: "Dripping faucets, running toilets, and failed caulk are the three most common handyman calls, and all three are quick to fix properly.",
      body: [
        "A dripping faucet almost always needs a new cartridge, and we carry the common ones. Running toilets get a new fill valve and flapper, and we check the flush valve seat while we're in there. Slow bathroom sinks get the pop-up and trap cleared. Shower heads and aerators clogged with scale are replaced or descaled. Loose towel bars, toilet paper holders, and grab bars are remounted into solid blocking or with proper anchors so they don't pull out again.",
        "Caulking is one of the most useful small jobs we do. The bead between tub and tile, around the shower door, along the kitchen backsplash, and at the base of the toilet all dry out and crack in our climate, and once they do, water gets behind them. We cut out the old caulk completely, clean and dry the joint, and lay a new bead of 100% silicone in wet areas. That's also its own service if you want the whole house re-caulked at once.",
        "Anything beyond a fixture or valve moves to our plumbing repairs service on the same scheduling: a leak inside a wall, a water heater that's leaking or short on hot water, a main drain that won't clear with a hand snake, or a shutoff valve under the sink that's seized and won't turn. Those need different tools and sometimes a permit, and we'd rather say so up front than half-fix them on a handyman visit.",
      ],
      highlights: [
        { icon: "droplets", label: "Cartridges and fill valves", detail: "The parts hard water kills first, replaced on the spot." },
        { icon: "bath", label: "Caulk cut out and redone", detail: "Old bead removed, joint dried, fresh silicone tooled clean." },
        { icon: "toilet", label: "Fixtures remounted solid", detail: "Towel bars and grab bars anchored so they don't loosen again." },
      ],
    },
    {
      heading: "Mounting, assembly, and the rest of the list",
      lead: "The jobs that need two people, a stud finder, and the right anchors are exactly what a handyman visit is for.",
      body: [
        "We mount TVs on articulating or fixed brackets into studs, run the cords through the wall with an in-wall kit where the wall allows, and hang mirrors, art, and heavy shelving with anchors rated for the load. Floating shelves, closet organizers, garage storage racks, and curtain rods are installed level and into framing. Ceiling fans and light fixtures are swapped on existing boxes; if the box isn't fan-rated, we'll say so and install a proper one, which is our lighting and fan service.",
        "Furniture assembly, garage door opener sensor alignment, dryer vent cleaning, doorbell and smoke detector replacement, weatherstripping, and small drywall patches round out most lists. Give us the full list up front, including the things you think are too small to mention; grouping them is how a handyman visit stays affordable. Dryer vents in particular are worth adding: the long runs in two-story valley homes pack with lint, and a clogged vent is both a fire risk and the reason a dryer takes two cycles.",
      ],
      callout: {
        type: "tip",
        title: "Send the whole list with photos",
        text: "Walk the house with your phone and photograph every item, even the trivial ones. A photo tells us which parts to bring, and the list tells us how long to book. Most lists get a flat price back the same day, and it's cheaper than three separate visits.",
      },
    },
  ],
  benefits: [
    { title: "One visit, whole list", description: "A single skilled tradesperson and a stocked truck, so the door, the faucet, and the shelf all get done the same day." },
    { title: "Parts for valley problems", description: "Cartridges, fill valves, strikes, and silicone for the failures hard water and dry heat cause most often." },
    { title: "Honest about scope", description: "If an item is bigger than a handyman fix, you hear that before the work starts, and the same company handles it." },
  ],
  process: [
    { title: "Send your list and photos", description: "Every item, with a photo. We reply with a flat price for the list or an hourly estimate with a time block." },
    { title: "Book one visit", description: "We schedule a half or full day and confirm any parts you'd rather pick yourself, like a faucet or light fixture." },
    { title: "Work the list", description: "Each item done, tested, and cleaned up behind, with anything that turns out larger flagged before we touch it." },
    { title: "Check off and walk through", description: "You get the list back marked complete, with notes on anything we recommend watching or scheduling later." },
  ],
  faqs: [
    {
      question: "How much does a handyman cost in Las Vegas?",
      answer: "We price most jobs as a flat rate for the list, quoted from your photos, so you know the total before we arrive. Open-ended visits are billed hourly with a minimum. Bundling several small items into one visit is the most cost-effective way to use a handyman, since travel and setup happen once.",
    },
    {
      question: "What kinds of small repairs do you do?",
      answer: "Doors that stick or won't latch, dripping faucets, running toilets, caulking, shelving and TV mounting, light fixture and ceiling fan swaps, weatherstripping, screen repair, small drywall patches, disposal replacement, and furniture assembly. If it's a defined job inside a home and takes a few hours or less, it's usually a fit.",
    },
    {
      question: "How long does a handyman visit take?",
      answer: "Most lists of five to ten items fit in a half day to a full day. We book a time block based on your list and photos, and we'll tell you if the list needs a second visit. Single items like a faucet cartridge or a door adjustment are usually under an hour, which is why bundling makes sense.",
    },
    {
      question: "Can I buy the parts myself or do you bring them?",
      answer: "Either. We carry common repair parts like faucet cartridges, fill valves, flappers, strike plates, anchors, caulk, and screen material. For anything you'd choose by style, such as a faucet, light fixture, fan, or shelving, buy it ahead and we'll install it, or tell us and we'll pick it up for a materials charge.",
    },
    {
      question: "Do I need a licensed contractor for small repairs in Nevada?",
      answer: "Nevada exempts minor work under a state-set dollar limit that doesn't need a permit from contractor licensing, which covers most handyman items like caulk, door adjustments, and fixture swaps. Larger work, and any plumbing or electrical that requires a permit, has to be done by a licensed contractor. We'll tell you which side of that line an item falls on before we start.",
    },
  ],
  relatedProductSlugs: [],
  meta: {
    title: "Handyman & Small Repairs in Las Vegas",
    description: "Handyman services in Las Vegas for small repairs: doors, faucets, toilets, caulk, shelving, and fixtures done in one visit. Flat price from your list.",
  },
};
