import type { Service } from "@/lib/data/types";
import { getServiceSummary } from "@/lib/data/services/catalog";

const summary = getServiceSummary("kitchen-refresh-remodeling")!;

export const service: Service = {
  ...summary,
  tagline: "Cabinets, countertops, backsplash, lighting, and fixtures updated in the same footprint in weeks, not months.",
  quickFacts: {
    typicalDuration: "Refinished cabinets and new counters: 2–3 weeks. Replaced cabinets, counters, backsplash, and lighting: 4–6 weeks, mostly waiting on cabinet delivery and countertop fabrication.",
    priceBand: "Written scope with line items after a walkthrough. Refinishing existing cabinets instead of replacing them is the single biggest lever on price.",
    whenToCall: "Tile counters with stained grout, builder oak cabinets, a fluorescent box light, a faucet that's lost its finish, or a kitchen that works fine but looks like 1998.",
  },
  contentSections: [
    {
      heading: "Kitchen refresh and remodeling in Las Vegas",
      lead: "A refresh keeps the walls, the plumbing, and the layout, and replaces the surfaces and fixtures that make the room feel dated.",
      body: [
        "A kitchen refresh means updating the finishes in your existing layout: cabinets refinished or replaced in the same footprint, new countertops and sink, a tile backsplash, updated lighting, a new faucet and disposal, and paint. Walls stay where they are, the sink stays over the same drain, and the range and fridge stay on their existing gas, water, and electrical. That's the difference between a project measured in weeks and a gut remodel measured in months, and it's why most of the cost goes into what you'll see and touch every day.",
        "We sequence and perform every trade: cabinet work, countertop templating and coordination with the fabricator, tile, electrical, plumbing, drywall patching, and paint. If you're refinishing, that's our cabinet painting and refinishing service; if you're tiling a backsplash, that's our tile installation service. Both are scheduled inside the same job so the kitchen isn't out of commission twice and nobody is waiting on a sub who hasn't called back.",
        "If you want a wall opened, an island added where there wasn't one, or the sink moved to a window, that changes the scope to structural and slab plumbing work, and we'll say so at the walkthrough. For projects that go that direction at the high end, our parent company Xtreme Build Group handles them. Everything short of that, we do in the footprint you have.",
      ],
      callout: {
        type: "local",
        title: "The 1990s–2000s Las Vegas kitchen we see most",
        text: "Valley tract kitchens from that era share a kit: raised-panel oak or maple cabinets on a face frame, ceramic tile countertops with grout lines that stain, a fluorescent light box set into a drywall soffit, a single-basin steel sink, and a switched outlet where an under-cabinet light was meant to go. Every one of those is fixable without touching the walls. The face-frame boxes are solid enough to refinish, the tile comes off for a quartz top, and the soffit box becomes recessed LEDs on a dimmer.",
      },
    },
    {
      heading: "Cabinets: refinish or replace",
      lead: "The cabinet decision sets the budget and the calendar, and the boxes in most valley homes are better than they look.",
      body: [
        "Refinishing keeps your boxes and doors and gives them a sprayed, factory-style finish. Doors and drawer fronts come off and are sprayed off-site or in a sealed booth in the garage; boxes are cleaned, degreased, scuff-sanded, primed with a bonding primer, and sprayed in place. New hinges, soft-close slides, and hardware go on at the same time. Oak grain will show through paint unless we grain-fill, which is an extra step we'll quote if you want a smooth, modern look.",
        "Replacement makes sense when the boxes are particleboard that's swelled at the sink base, the layout wastes space, or you want full-overlay doors and deep drawers that face-frame boxes can't do well. We install stock or semi-custom cabinets in the existing footprint, shim them level and plumb, and close the gaps against out-of-plumb walls with scribe molding. Lead time on cabinets is typically several weeks, so ordering happens before demo, not after.",
        "Either way, we add what builders skipped: a trash pull-out, roll-outs in the base cabinets, a spice pull-out beside the range, and lighting under the upper cabinets. Small additions like those change how the kitchen works more than a new color does, and they cost less to add while the cabinets are already apart than as a separate visit later. We'll suggest them at the walkthrough and price each one as its own line so you can keep or drop them.",
      ],
      highlights: [
        { icon: "paint-bucket", label: "Sprayed, not brushed", detail: "Bonding primer and a catalyzed or waterborne enamel sprayed for a level finish that resists chipping." },
        { icon: "ruler", label: "Set level and scribed", detail: "New cabinets shimmed plumb and scribed to the wall so counters sit flat and doors line up." },
        { icon: "wrench", label: "Soft-close as standard", detail: "New hinges and slides on every door and drawer, whether we refinish or replace." },
      ],
    },
    {
      heading: "Countertops, sink, and backsplash",
      lead: "Counters are templated after the cabinets are final, and the backsplash goes in after the counters, so the order of operations matters.",
      body: [
        "Quartz is the usual choice in a refresh: no sealing, consistent color, and hard enough to shrug off a kitchen. Granite and quartzite are options if you want natural stone and don't mind sealing. The fabricator templates after cabinets are set and level, fabrication takes roughly one to two weeks, and installation is a half day. Removing tile countertops means the plywood substrate goes with them and the cabinets are checked for level before the template, because a quartz top will crack over a high spot the tile used to hide.",
        "The sink is chosen with the counter: undermount for quartz and stone, with a new faucet, a high-loop or air-gap dishwasher connection, and a disposal sized for the household. We replace the supply stops and lines while the base is open, since the originals are usually seized. If you're adding a reverse-osmosis tap or a pot filler, this is the point to run it, before the counter goes on and the wall is closed.",
        "The backsplash is tiled after the counters are in, from counter to upper cabinets or up to the hood. We use a thin-set bed on primed drywall, lay out from the focal point so cuts land in corners, and finish outlets with extension rings so devices sit flush with the tile. Grout is a stain-resistant type, and the counter-to-tile joint is caulked, not grouted, so it moves without cracking.",
      ],
    },
    {
      heading: "Lighting, electrical, and the schedule",
      lead: "Lighting is the cheapest change with the biggest effect, and it's also where the permit question usually comes up.",
      body: [
        "A fluorescent box in a soffit becomes four to eight recessed LEDs on a dimmer, pendants over a peninsula, and under-cabinet LED strips on their own switch. We wire under-cabinet lighting with a hardwired driver hidden inside a cabinet rather than plug-in strips with visible cords. Counter receptacles are brought to GFCI where they aren't already, and if you're adding a microwave drawer or an induction cooktop we'll confirm the circuit before you buy the appliance.",
        "Permits in Clark County and the valley cities follow the work: replacing cabinets, counters, a faucet, and a disposal in place generally doesn't require one, while new lighting circuits, a new dedicated appliance circuit, or moving gas or plumbing does. We tell you which line items trigger a permit, pull it, and schedule the inspection between rough-in and drywall patching so it never holds up the counters.",
        "A refresh with refinished cabinets and new counters usually runs two to three weeks including cure time on the finish. Full cabinet replacement with counters, backsplash, and lighting runs four to six, with most of that waiting on cabinet delivery and countertop fabrication. We set up a temporary sink where we can, keep the fridge running, and sequence the work so you have a functioning kitchen before the punch list.",
      ],
      callout: {
        type: "tip",
        title: "Order the appliances first",
        text: "If a new range, fridge, or dishwasher is part of the plan, pick them before the cabinets are ordered or the counters are templated. Cutout sizes, panel heights, and the range's rear clearance all depend on the exact model, and a cabinet run built for a 30-inch range doesn't fit a 36.",
      },
    },
  ],
  benefits: [
    { title: "Weeks, not months", description: "Same footprint, no wall moves, and every trade on one schedule so the kitchen is back in service fast." },
    { title: "Spend where you'll see it", description: "Refinish good cabinets, put the savings into counters and lighting, and skip the slab cutting that comes with moving plumbing." },
    { title: "One point of contact", description: "Cabinets, counters, tile, electrical, plumbing, and paint coordinated and performed by the same crew." },
  ],
  process: [
    { title: "Walkthrough and line-item scope", description: "We inspect the cabinet boxes, the substrate under the counters, and the electrical, and write a scope with refinish and replace options priced separately." },
    { title: "Selections and ordering", description: "Cabinets or finish color, countertop slab, tile, sink, faucet, and lighting chosen and ordered so long-lead items arrive before we start." },
    { title: "Demo, cabinets, electrical", description: "Old counters and backsplash out, cabinets refinished or set, lighting and circuits roughed in, inspection if required, and drywall patched." },
    { title: "Counters, backsplash, trim", description: "Template, fabricate, and install counters; plumb the sink and disposal; tile the backsplash; hang the lights; paint; and walk the punch list with you." },
  ],
  faqs: [
    {
      question: "How much does a kitchen remodel cost in Las Vegas?",
      answer: "For a refresh in the existing layout, the biggest variables are whether cabinets are refinished or replaced and what countertop you choose. We give a written scope with each item on its own line after a walkthrough, with refinish and replace priced side by side so you can decide. Keeping walls and plumbing where they are is what keeps it predictable.",
    },
    {
      question: "How long does a kitchen refresh take?",
      answer: "Refinished cabinets with new counters usually take two to three weeks. Full cabinet replacement with counters, backsplash, and lighting takes four to six. Most of that time is cabinet delivery and countertop fabrication rather than work in your kitchen, and we plan the sequence so you're without a sink for as short a stretch as possible.",
    },
    {
      question: "Is it cheaper to paint or replace kitchen cabinets?",
      answer: "Painting costs considerably less than replacement when the boxes are sound, and the face-frame oak and maple cabinets in most 1990s and 2000s valley homes are. Replacement makes sense when boxes are water-swelled at the sink, you want full-overlay doors and deep drawers, or the layout wastes space. We'll show you both numbers side by side.",
    },
    {
      question: "Can you replace tile countertops with quartz?",
      answer: "Yes. The tile and its plywood or backer substrate come off, cabinets are checked and shimmed level, and the fabricator templates for quartz directly on the cabinet tops. A new undermount sink and faucet usually go in at the same time. Plan on one to two weeks between template and install for fabrication.",
    },
    {
      question: "Do I need a permit for a kitchen remodel in Clark County?",
      answer: "Replacing cabinets, counters, a backsplash, a faucet, and a disposal in place generally does not require a permit. New lighting circuits, a dedicated circuit for a new appliance, or any gas or plumbing relocation typically does. We identify which line items need one, pull the permit, and schedule the inspection so it doesn't hold up drywall or counters.",
    },
  ],
  relatedProductSlugs: [],
  meta: {
    title: "Kitchen Refresh & Remodeling in Las Vegas",
    description: "Kitchen refresh and remodeling in Las Vegas: cabinets refinished or replaced, quartz counters, backsplash, and lighting updated in the same layout in weeks.",
  },
};
