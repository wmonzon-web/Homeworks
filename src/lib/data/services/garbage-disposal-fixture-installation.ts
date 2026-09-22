import type { Service } from "@/lib/data/types";
import { getServiceSummary } from "@/lib/data/services/catalog";

const summary = getServiceSummary("garbage-disposal-fixture-installation")!;

export const service: Service = {
  ...summary,
  tagline: "Disposals, faucets, sinks, and toilets installed with new seals, supply lines, and working shutoffs so we don't come back for a drip.",
  quickFacts: {
    typicalDuration: "Disposal or faucet: 1–2 hours. Toilet: about 2 hours. Sink with faucet and disposal: half a day.",
    priceBand: "Flat price per fixture for the installation, whether you supply the unit or we source it.",
    whenToCall: "A disposal that hums, leaks from the bottom, or keeps tripping its reset; a faucet you want swapped; a cracked or loose sink; or a toilet that's due for replacement.",
  },
  contentSections: [
    {
      heading: "Garbage disposal and fixture installation in Las Vegas",
      lead: "Swapping a fixture is a small job with a lot of ways to leak, so the details underneath matter more than the fixture on top.",
      body: [
        "Fixture installation means removing an old garbage disposal, faucet, sink, or toilet and installing a new one, including the parts that get skipped: new supply lines, a working shutoff, fresh plumber's putty or silicone at the flange, the correct drain tailpiece and trap alignment, and a toilet seal set on a flange that's at the right height. We install the unit you bought or one we source, run it under pressure, and leave the cabinet dry.",
        "Most calls are a disposal that has rusted through and drips from the bottom seam, a kitchen faucet that's worn out or that you want to replace with a pull-down, an undermount sink whose clips have let go from the countertop, or a toilet that's old, low, or has a cracked tank. Bathroom faucets, pedestal and vanity sinks, bidet seats, pot fillers, and the shutoff valves and supply lines behind all of them fall under the same service, and we can do several fixtures in one visit when you're refreshing a whole bathroom.",
        "If the swap uncovers a stuck angle stop, a corroded drain assembly, or a cabinet floor swollen from an old leak, we fix it in the same visit where we can and quote anything larger before touching it. A new cabinet floor, a patched wall behind a toilet, or a repainted vanity base is our cabinet, drywall, and painting work, and it goes on the same schedule rather than waiting for another company to come out.",
      ],
    },
    {
      heading: "Garbage disposals",
      lead: "Disposal replacement is straightforward when the mount, wiring, and drain are done in order.",
      body: [
        "We match the new unit to the existing mount when the brands agree, or replace the sink flange and mounting assembly with the one that ships with the disposal. The flange is bedded in plumber's putty and tightened evenly from below, and the dishwasher knockout is punched out and retrieved before the unit goes up. Leaving that plug in is the single most common do-it-yourself mistake and floods the cabinet on the first dishwasher cycle. The discharge is connected to the trap with a new tailpiece so the slope is right and the trap isn't under strain.",
        "Hardwired units get a direct connection in the junction box with the wires capped and the cover on; plug-in units get the cord kit installed and go to the switched outlet under the sink, and we confirm the switch and outlet are on a working circuit before the unit goes up. A half-horsepower unit is fine for most kitchens; three-quarter or one horsepower runs quieter, jams less, and handles fibrous scraps. We'll suggest a size but install whatever you've chosen, and we run water and a few ice cubes through it to confirm it spins clean.",
      ],
      highlights: [
        { icon: "circle-check", label: "Dishwasher knockout removed", detail: "The plug is punched out and fished out of the chamber before the unit goes up, every time." },
        { icon: "droplets", label: "Flange bedded in putty", detail: "Sink flange seated in fresh plumber's putty and tightened evenly so it doesn't weep at the rim." },
        { icon: "zap", label: "Circuit confirmed", detail: "Cord kit or hardwire done correctly and the switch tested before we leave." },
      ],
    },
    {
      heading: "Faucets, sinks, and toilets",
      lead: "Each fixture has one detail that decides whether it leaks in six months.",
      body: [
        "Kitchen and bath faucets get new stainless braided supply lines, and if the angle stops under the sink are the multi-turn valves from the original build, we recommend swapping them for quarter-turn stops while everything is apart. Pull-down kitchen faucets need the hose weight set so the spray head retracts, and a single-hole faucet on a three-hole sink gets a deck plate. Drop-in sinks get a bead of silicone under the rim; undermount sinks get epoxied clips and a silicone seal to the underside of the stone.",
        "Toilets are pulled, the old wax scraped, and the flange checked. A flange sitting below the finished floor, common after a tile or vinyl plank install, gets a spacer or an extra-thick seal so the toilet doesn't rock and leak. We set the toilet, snug the closet bolts without cracking the base, caulk the front and sides, and leave the back open so a leak shows itself. A new supply line and a fill valve set to the line finish it.",
      ],
      callout: {
        type: "local",
        title: "Hard water and what it does to a new fixture",
        text: "Valley tap water runs around 16 grains of hardness, and it starts scaling a new faucet's aerator and cartridge from day one. We install fixtures with ceramic-disc cartridges where you have a choice, leave the aerator accessible, and show you how to soak it in vinegar. If your home has a softener loop in the garage, which most 1990s-and-later tract homes do, a softener is the fix that protects every fixture at once.",
      },
    },
    {
      heading: "Bringing your own fixture",
      lead: "You can buy the fixture anywhere; here's what to check before you order.",
      body: [
        "Measure the hole spacing on the sink or countertop (single hole, 4-inch centerset, or 8-inch widespread), the rough-in distance from the wall to the toilet bolts (12 inches is standard here), and the bowl shape and height you want. For sinks, note the cabinet width, the countertop cutout, and whether the sink is drop-in or undermount. For disposals, check whether the outlet under the sink is switched or you'll need a cord and an air switch.",
        "Send us the product page or a photo of the box and we'll confirm it fits before you unbox it, which saves the restocking trip when a widespread faucet shows up for a centerset sink. If you'd rather we source it, we'll recommend units we install regularly and that hold up in this water: ceramic-disc faucet cartridges, stainless disposal chambers, and toilets with a wide flush valve that doesn't clog. Either way the installation price is the same flat number per fixture.",
      ],
      callout: {
        type: "tip",
        title: "Photograph under the sink before you shop",
        text: "One photo of the cabinet interior shows us the shutoffs, the drain layout, the disposal mount, and whether there's a switched outlet. It answers most of the questions that otherwise turn into a second trip.",
      },
    },
  ],
  benefits: [
    { title: "Installed dry", description: "Every connection is run under pressure and checked with the cabinet open before we pack up." },
    { title: "The parts underneath are new", description: "Supply lines, seals, and, where needed, shutoff valves are replaced with the fixture, not reused." },
    { title: "Your fixture or ours", description: "Bring what you bought or let us source it; the flat installation price doesn't change." },
  ],
  process: [
    { title: "Tell us what's going in", description: "Send the product link or a photo of the box, plus a photo under the sink or of the toilet, so we can confirm fit." },
    { title: "Flat quote per fixture", description: "A single number for the install, with any shutoff or drain work called out separately if we spot it." },
    { title: "Remove, install, connect", description: "Old unit out, new one set with fresh seals and supply lines, drain and power connected in the right order." },
    { title: "Test and clean up", description: "Run under pressure, checked for leaks, old fixture hauled away, cabinet wiped down." },
  ],
  faqs: [
    {
      question: "How much does it cost to install a garbage disposal in Las Vegas?",
      answer: "Installation is a flat price when the mount and wiring are standard, whether you supply the disposal or we do. Add-ons are a cord kit if your unit ships without one, or a new outlet or switch if the cabinet doesn't have power. Send a photo under the sink and we'll confirm the price before booking.",
    },
    {
      question: "Can you install a faucet I bought myself?",
      answer: "Yes. Most of what we install is homeowner-supplied from a big-box store or online. Send us the product page and a photo of your sink's holes and we'll confirm it fits. We bring new supply lines and any adapter the faucet needs, and the installation price is the same as if we'd sourced it.",
    },
    {
      question: "How long does it take to replace a toilet?",
      answer: "About two hours for a standard replacement, including pulling the old toilet, scraping the flange, setting a new seal, connecting a new supply line, and caulking. Add time if the flange is broken or sits below a new tile floor and needs a spacer. We haul the old toilet away.",
    },
    {
      question: "Why does my garbage disposal hum but not spin?",
      answer: "It's jammed, not dead. Something hard is wedged between the impeller and the grind ring. Turning the motor with an Allen key from underneath usually frees it, and the red reset button restores power if it tripped. If it still hums after the jam is cleared, or leaks from the bottom seam, the motor or seal has failed and replacement is the fix.",
    },
    {
      question: "Do you install undermount sinks in granite or quartz?",
      answer: "Yes. An undermount replacement means cutting the old silicone, removing the failed clips or epoxy, cleaning the stone, and setting the new sink with epoxied clips and a fresh silicone seal. The new sink has to match the existing cutout closely, so send the cutout dimensions or a photo before ordering.",
    },
  ],
  relatedProductSlugs: [],
  meta: {
    title: "Garbage Disposal & Fixture Installation in Las Vegas",
    description: "Garbage disposal, faucet, sink, and toilet installation in Las Vegas with new supply lines and seals, tested under pressure. Flat price per fixture.",
  },
};
