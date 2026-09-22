import type { Service } from "@/lib/data/types";
import { getServiceSummary } from "@/lib/data/services/catalog";

const summary = getServiceSummary("plumbing-repairs")!;

export const service: Service = {
  ...summary,
  tagline: "Leaks, drips, running toilets, and slow drains fixed on the first visit, with the common parts already on the truck.",
  quickFacts: {
    typicalDuration: "Most single-fixture repairs: 1–3 hours in one visit. Several angle stops or a toilet reset: half a day.",
    priceBand: "Flat price per repair quoted from your description and photos, with common parts included.",
    whenToCall: "A dripping faucet, a toilet that runs or rocks, a drain that gurgles or backs up, a damp cabinet floor, or a shutoff valve that won't turn.",
  },
  contentSections: [
    {
      heading: "Plumbing repairs in Las Vegas for the fixtures you use every day",
      lead: "Most household plumbing problems are a worn part, a scaled-up part, or a fitting that let go, and all three are a same-week fix.",
      body: [
        "Plumbing repair is finding the failed part in a fixture or supply line and replacing it: a faucet cartridge, a toilet fill valve or flapper, a P-trap, a braided supply line, the angle stop under a sink, or the wax ring under a toilet that has started to rock. We diagnose the leak, replace the part with a matching one from the truck or the supply house, and run the fixture under pressure before we leave. That covers kitchen and bath faucets, toilets, tub and shower valves, sink drains, hose bibs, and the shutoff valves behind every fixture.",
        "We are not a rooter company and we don't do main sewer lines, repipes, or slab leak location. We do the repairs a homeowner runs into most: the drip that keeps you up, the toilet that refills every twenty minutes, the bathroom sink that drains in slow motion, the disposal that hums, and the water stain in the cabinet under the kitchen sink. If the diagnosis turns up something bigger, we tell you what we found and who should handle it.",
        "Because we also do drywall, cabinets, and paint, a leak that damaged the wall or cabinet around it gets repaired by the same crew instead of a second contractor you have to find and schedule. We fix the pipe, let the area dry, replace the wet material, then texture and paint to the nearest corner. You get one quote, one crew, and one schedule for the whole thing, and nobody argues about whose job the water stain is.",
      ],
      callout: {
        type: "local",
        title: "Hard water is behind half the calls",
        text: "Las Vegas tap water comes from Lake Mead and measures roughly 16 grains per gallon of hardness, well past the threshold the water district calls very hard. Scale builds up inside faucet cartridges, aerators, toilet fill valves, and shower heads until they stick, drip, or slow to a trickle. We stock the common cartridges and fill valves for exactly that reason, and we'll tell you when a softener would stop the cycle instead of just replacing the part again.",
      },
    },
    {
      heading: "What we fix and how",
      lead: "Each fixture fails in a predictable way, and the fix is a specific part, not a whole new fixture.",
      body: [
        "Dripping faucets almost always need a new cartridge or, on older two-handle faucets, new seats and springs. We pull the handle, match the cartridge by brand and stem, and reassemble with plumber's grease on the O-rings. Running toilets are a flapper that no longer seals, a fill valve that never shuts off, or a float set too high; we replace the fill valve and flapper together because they wear at the same rate. A toilet that rocks or leaves a ring at the base gets pulled, the flange inspected, and a new wax or waxless seal set.",
        "Slow drains in a bathroom sink or tub are hair and soap scum in the P-trap and the first few feet of the branch line. We pull the trap, clear it, and run a hand auger down the line. We don't pour chemical drain cleaner, which eats gaskets and does nothing for a solid clog. Kitchen drains are grease, and a disposal that hums but won't spin is jammed rather than dead more often than not.",
      ],
      highlights: [
        { icon: "wrench", label: "Common parts on the truck", detail: "Cartridges, fill valves, flappers, angle stops, and braided lines for the brands in most valley homes, so the fix happens on the first visit." },
        { icon: "droplets", label: "Tested under pressure", detail: "Every repair runs for several minutes with the cabinet open and a dry paper towel under the joint before we call it done." },
        { icon: "shield-check", label: "No chemical drain cleaner", detail: "Traps pulled and lines augered by hand, so clearing a drain doesn't cost you a gasket or a trap." },
      ],
    },
    {
      heading: "Shutoff valves and supply lines: the small parts that flood houses",
      lead: "The angle stop under your sink and the braided line to your toilet are the two parts most likely to fail while you're out of town.",
      body: [
        "Most Las Vegas tract homes built in the 1990s and 2000s have multi-turn compression angle stops under every sink and behind every toilet. After twenty years of scale they either won't turn at all or start weeping from the packing nut the first time someone tries. We replace them with quarter-turn ball valves, which don't seize and shut off with a flick when you need them to. The main house shutoff and the hose bibs get the same treatment when they're stuck or dripping.",
        "Supply lines are the other quiet failure. Plastic-nut braided lines and the old grey polybutylene stubs crack without warning, usually at the crimp where the hose meets the nut. We swap them for stainless braided lines with brass nuts and tighten them hand-tight plus a quarter turn, which is all a compression fitting wants. While we're under the sink we check the disposal flange, the dishwasher drain loop, and the trap for the slow leaks that ruin a cabinet floor before anyone notices, and we run the dishwasher briefly to confirm nothing drips at the loop or the air gap.",
      ],
      callout: {
        type: "tip",
        title: "Find your main shutoff before you need it",
        text: "In most valley homes it's a valve on the exterior wall near the hose bib closest to the street, or in the box at the meter. Turn it once a year so it doesn't seize. If it won't move or drips when you try, that's a repair worth doing before it's an emergency.",
      },
    },
    {
      heading: "When the leak has already done damage",
      lead: "Stopping the water is half the job when the cabinet floor, drywall, or baseboard is already wet.",
      body: [
        "Valley homes are built slab-on-grade with the supply and drain lines cast into the concrete, so most leaks you'll actually see are above the slab: under sinks, behind toilets, at the tub spout, and in the wall behind a shower valve. We fix the plumbing first, then dry and assess the damage. Swollen particleboard under a sink gets replaced with a new cabinet floor, wet drywall gets cut back to dry board and patched, and stained baseboard gets replaced and painted.",
        "That's our drywall repair, trim, and painting services working alongside the plumbing repair on one schedule, so the wall is closed, textured, and painted the same week the pipe is fixed. If a leak is showing up as a warm spot on the floor, a water bill that doubled, or a meter that spins with everything shut off, that's a slab leak. We won't guess where to open the floor; we'll refer you to a leak-location specialist with the equipment to find it, and we'll handle the patching and flooring repair once the line is fixed.",
      ],
    },
  ],
  benefits: [
    { title: "Fixed on the first visit", description: "Common cartridges, fill valves, flappers, angle stops, and supply lines are on the truck, so most repairs don't wait on a parts run." },
    { title: "Parts, not whole fixtures", description: "We replace the cartridge, valve, or seal that failed and tell you honestly when a fixture is worn enough to swap." },
    { title: "Damage repaired by the same crew", description: "Wet drywall, ruined cabinet floors, and stained baseboard are handled by us, not a second contractor." },
  ],
  process: [
    { title: "Describe it or send a photo", description: "Tell us what's dripping, running, or draining slow, and where. A photo of the fixture and the brand name helps us bring the right parts." },
    { title: "Diagnose and quote", description: "We confirm the failed part, check the fixture and lines around it, and give you a flat price before any work starts." },
    { title: "Repair and test", description: "Parts replaced, connections tightened to spec, then the fixture runs under pressure while we check every joint." },
    { title: "Clean up and walk through", description: "Cabinet dried, tools out, and a quick rundown of what we changed and what to watch for." },
  ],
  faqs: [
    {
      question: "How much does a plumber cost in Las Vegas for a small repair?",
      answer: "Small repairs like a faucet cartridge, toilet fill valve, or angle stop are a flat price per fixture, with common parts included. We quote from your description and photos so you know the number before we arrive. Repairs that need a specialty part or opening a wall are priced after we see them, and we tell you before starting.",
    },
    {
      question: "Can you fix a leaking faucet without replacing it?",
      answer: "Usually yes. Most drips come from a worn cartridge or seats and springs, and we carry replacements for the common brands. If the faucet body is corroded, the finish is pitted, or the cartridge is discontinued, we'll say so, and a new faucet is often the better value. Installing one is part of our fixture installation service.",
    },
    {
      question: "Why does my toilet keep running?",
      answer: "A running toilet is almost always a flapper that no longer seals against the flush valve, or a fill valve that doesn't shut off. Hard water scale in Las Vegas wears both quickly. We replace the fill valve and flapper as a pair and set the float so the tank fills to the line and stops.",
    },
    {
      question: "How long does a plumbing repair take?",
      answer: "Most single-fixture repairs take one to three hours, including testing. Replacing several angle stops or resetting a toilet takes a half day. If we find water damage in the cabinet or wall, the plumbing gets fixed the same visit and the drywall or cabinet work is scheduled as a follow-up.",
    },
    {
      question: "Do you handle slab leaks or sewer lines?",
      answer: "No. We do fixture and supply-line repairs above the slab: faucets, toilets, drains, valves, hose bibs, and the connections under sinks. Slab leaks, main sewer lines, and whole-house repipes need a plumbing contractor with leak-detection and excavation equipment, and we'll tell you if what we find points that direction.",
    },
  ],
  relatedProductSlugs: [],
  meta: {
    title: "Plumbing Repairs in Las Vegas",
    description: "Plumbing repairs in Las Vegas: leaking faucets, running toilets, slow drains, and supply lines fixed on the first visit. Flat prices from photos.",
  },
};
