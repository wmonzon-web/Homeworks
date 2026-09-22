import type { Service } from "@/lib/data/types";
import { getServiceSummary } from "@/lib/data/services/catalog";

const summary = getServiceSummary("bathroom-remodeling")!;

export const service: Service = {
  ...summary,
  tagline: "Tile, vanity, fixtures, lighting, and glass replaced in place by one crew on one schedule, with the plumbing left where it is.",
  quickFacts: {
    typicalDuration: "Hall bath refresh: 1–2 weeks. Primary bath with a new tile shower: 3–4 weeks, driven by tile and glass lead times.",
    priceBand: "Written scope with line items after a walkthrough, so you can see what the shower, the vanity, and the glass each cost and adjust.",
    whenToCall: "A shower with cracked grout or a soft floor, a builder vanity you've outgrown, brass fixtures, a fluorescent light bar, or a tub you never use.",
  },
  contentSections: [
    {
      heading: "Bathroom remodeling in Las Vegas, refresh scope",
      lead: "A refresh keeps the layout and replaces everything you touch and see: tile, vanity, fixtures, lighting, and glass.",
      body: [
        "Bathroom remodeling, in the scope we do, means taking a bathroom down to the studs and subfloor where needed and rebuilding it in the same footprint: new tile on the floor and shower, a waterproofed shower pan and walls, a new vanity, faucet, toilet, and shower valve, updated lighting and exhaust, and a frameless or semi-frameless glass door. The toilet flange, the shower drain, and the supply lines stay where they are. That single decision is what keeps the job to weeks instead of months and keeps the concrete slab intact.",
        "We handle demo, plumbing rough-in and trim, electrical, tile, drywall, paint, glass measurement and install, and final caulk with one crew. There's no gap between the tile setter and the plumber because they're on the same schedule. If you're choosing materials, we'll walk you through what's in stock locally versus what's a special order, since lead time on tile and glass sets the calendar more than labor does.",
        "If you want walls moved, a curbless shower that requires recessing the slab, or a full plumbing relocation, that's a bigger project. We'll tell you straight and, for high-end work, introduce you to our parent company, Xtreme Build Group. For a refresh, the design choices are the open question and the plumbing is fixed, and that's the tradeoff that makes the price predictable.",
      ],
      callout: {
        type: "local",
        title: "Slab-on-grade is why we don't move the drain",
        text: "Nearly every Las Vegas home built since the 1980s sits on a concrete slab with the drain lines cast into it. Moving a toilet or shower drain means saw-cutting the slab, trenching, re-pouring, and a plumbing permit and inspection before the floor closes up. Keeping the drains where they are avoids all of that. A tub-to-shower conversion in the same spot is still possible, but the tub's 1.5-inch drain has to be upsized to a 2-inch shower drain, which means opening a small section of slab at the drain rather than trenching across the room.",
      },
    },
    {
      heading: "Showers: waterproofing before tile",
      lead: "The tile is what you see. The membrane under it is what decides whether the shower lasts.",
      body: [
        "Every tile shower we build gets a bonded waterproofing system: a pre-sloped pan with a sheet or liquid membrane run up the walls and over the curb, sealed at the drain with the matching flange, and flood-tested before tile. Walls are cement board or a foam board system, never green drywall. Niches are built into the wall and waterproofed as part of the same assembly rather than added after. This is our tile installation service applied to the wettest room in the house, and it's where a cheap remodel fails first.",
        "Tile is set on a mortar bed with a leveling system for large-format tile so lips don't catch your toe, and grout joints are sized for the tile. We use a high-performance cementitious grout as standard and epoxy grout where you want stain resistance in a steam-prone shower. Changes of plane get color-matched silicone, not grout, because grout in a corner cracks when the framing moves with the seasons.",
        "Shower valves are replaced with a pressure-balancing or thermostatic valve during the rebuild, since the wall is open anyway. Trim finish, whether brushed nickel, matte black, or brushed gold, is chosen with the faucet and accessories so everything matches, and the valve body is set to the correct depth for the tile thickness you've chosen so the trim plate sits flat.",
      ],
      highlights: [
        { icon: "droplets", label: "Flood-tested pans", detail: "Every pan is filled and left to sit before tile goes down, so a leak shows up on our schedule, not yours." },
        { icon: "grid-2x2", label: "Leveled large-format tile", detail: "Clip-and-wedge leveling on 12x24 and larger tile keeps the surface flat and the joints even." },
        { icon: "shield-check", label: "Silicone at every corner", detail: "Color-matched sealant at wall-to-wall and wall-to-floor joints instead of grout that cracks." },
      ],
    },
    {
      heading: "Vanity, fixtures, lighting, and glass",
      lead: "Once the shower is built, the rest of the room comes together in the order that avoids damage to what's already finished.",
      body: [
        "Vanities are set level and shimmed to the wall, with the top scribed where valley walls are out of plumb, and the faucet and drain assembled before the top goes on when access is tight. We install new supply stops and braided lines every time, because the original stops in a 1990s home are usually seized. Toilets get a new seal and are set on a flange that's checked for height against the new floor tile, with a spacer added if the tile raised the floor.",
        "Lighting gets rethought rather than replaced one-for-one. A single fluorescent bar over the mirror becomes a pair of sconces or a wide LED bar, plus a recessed light over the shower with a wet-location trim. Exhaust fans are replaced with a quieter model sized for the room and ducted to the outside, not into the attic. GFCI protection is brought to current code at the counter receptacles, and a dimmer goes on the overhead if you want one.",
        "Glass is the last thing in. We measure for frameless or semi-frameless doors after the tile is grouted, since the opening isn't final until then, and fabrication takes a week or two. The door swings out, hinges land on solid blocking we set during framing, and the sweep and seals are adjusted so water stays in the shower. Where a fixed panel meets a curb or a bench, the channel is set in silicone and the joint is finished so it can be cleaned without catching scale.",
      ],
      callout: {
        type: "tip",
        title: "Pick tile and glass first",
        text: "Tile and glass have the longest lead times in a bathroom refresh. Choosing them before demo starts means the shower can be built while the glass is fabricated, and the room isn't sitting half-done waiting on a special-order tile. We'll give you a list of in-stock options if speed matters more than a specific look.",
      },
    },
    {
      heading: "Timelines, permits, and living through it",
      lead: "A bathroom refresh runs in a predictable sequence, and most of the waiting is for materials and inspections, not labor.",
      body: [
        "A hall bath with the tub kept and everything else replaced usually runs one to two weeks. A primary bath with a rebuilt tile shower runs three to four, with the glass install a week or two after the tile is done. We schedule so the first bathroom of a two-bath house is back in service before we start the second, and we cover the path from the door to the bath, run a fan for dust, and haul debris daily.",
        "Permits depend on scope. In Clark County and the cities of Las Vegas, Henderson, and North Las Vegas, replacing a vanity, toilet, tile, and light fixtures in place is generally cosmetic work, while replacing the shower valve, altering the drain, or adding a circuit for new lighting typically triggers a plumbing or electrical permit and an inspection before the wall closes. We tell you which line items require a permit, pull it, and build the inspection into the schedule so it doesn't surprise you.",
        "Hard water is the other Las Vegas factor. Water from Lake Mead is very hard, and it etches shower glass and clogs aerators and valve cartridges. We order shower glass with a factory hydrophobic coating when the fabricator offers it, choose fixtures with ceramic cartridges, and will point you toward a softener if you're tired of scrubbing scale off everything you just paid for.",
      ],
    },
  ],
  benefits: [
    { title: "One crew, one schedule", description: "Demo, plumbing, electrical, tile, paint, and glass by the same people, so there's no idle week waiting on a sub." },
    { title: "Built to stay dry", description: "Bonded waterproofing, flood-tested pans, and silicone at every change of plane behind the tile you picked." },
    { title: "Predictable price", description: "A written scope with line items, no slab cutting, and change orders only when you change something." },
  ],
  process: [
    { title: "Walkthrough and scope", description: "We measure, check the drain and valve locations, look at the subfloor and slab, and write a line-item scope you can adjust before anything is ordered." },
    { title: "Selections and ordering", description: "Tile, vanity, fixtures, lighting, and glass chosen and ordered so the long-lead items arrive before demo." },
    { title: "Demo, rough-in, waterproof, tile", description: "Old finishes out, valve and supplies replaced, exhaust and lighting wired, inspection if required, pan built and flood-tested, then tile set and grouted." },
    { title: "Trim, glass, and punch list", description: "Vanity, toilet, faucet, and lights set, glass measured and installed, final caulk and paint, and a walkthrough with you before we call it done." },
  ],
  faqs: [
    {
      question: "How much does a bathroom remodel cost in Las Vegas?",
      answer: "It depends mostly on whether the shower is rebuilt and what tile and glass you choose. We price from a walkthrough with a written scope that lists the shower, vanity, fixtures, lighting, and glass as separate lines, so you can see what drives the number and trim it. Keeping the plumbing where it is holds the cost down more than any material choice.",
    },
    {
      question: "How long does a bathroom remodel take?",
      answer: "A hall bath refresh with the tub kept usually takes one to two weeks. A primary bath with a new tile shower takes three to four, with the glass door installed a week or two after the tile is grouted because it's measured from the finished opening. Material lead time, not labor, is the usual reason a job runs longer.",
    },
    {
      question: "Can you convert my tub to a walk-in shower?",
      answer: "Yes, in the same spot. The tub comes out, the drain is upsized to a 2-inch shower drain at the existing location, and a pre-sloped, waterproofed pan is built with a low curb. A truly curbless shower on a slab means recessing the floor and is a bigger job. We'll tell you which your bathroom can do.",
    },
    {
      question: "Do I need a permit to remodel a bathroom in Clark County?",
      answer: "For cosmetic replacement of a vanity, toilet, tile, and fixtures in place, generally no. Replacing the shower valve, changing drain size or location, or adding new electrical circuits typically requires a plumbing or electrical permit and an inspection. We identify which items trigger one, pull the permit, and schedule the inspection before walls close.",
    },
    {
      question: "Can I use one bathroom while you remodel the other?",
      answer: "Yes, and we plan the job that way. We finish and return the first bathroom to service before starting the second, keep the work area sealed with plastic and a fan for dust, and cover the path from the door. Water and power to the rest of the house are only shut off for short, scheduled windows.",
    },
  ],
  relatedProductSlugs: [],
  meta: {
    title: "Bathroom Remodeling in Las Vegas",
    description: "Bathroom remodeling in Las Vegas: tile showers, vanities, fixtures, lighting, and glass replaced in place by one crew. Written line-item scope, permits handled.",
  },
};
