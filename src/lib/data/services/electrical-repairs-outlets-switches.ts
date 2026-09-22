import type { Service } from "@/lib/data/types";
import { getServiceSummary } from "@/lib/data/services/catalog";

const summary = getServiceSummary("electrical-repairs-outlets-switches")!;

export const service: Service = {
  ...summary,
  tagline: "Dead outlets, nuisance-tripping breakers, and worn switches traced to the cause and fixed the same visit.",
  quickFacts: {
    typicalDuration: "Outlet, switch, and GFCI work: one visit of 1–3 hours. Breaker troubleshooting: same visit, with a return only if a circuit needs new wire.",
    priceBand: "Device swaps are a flat price per device. Troubleshooting is priced by the visit, with the repair quoted before we start it.",
    whenToCall: "An outlet with no power, a breaker that keeps tripping, a warm or discolored cover plate, a buzzing dimmer, or a two-prong outlet you want grounded.",
  },
  contentSections: [
    {
      heading: "Electrical repairs in Las Vegas: outlets, switches, and breakers",
      lead: "Most residential electrical problems come down to a loose connection, a worn device, or a breaker doing its job.",
      body: [
        "Electrical repair is finding why a circuit isn't working and fixing it at the source. We test dead outlets, trace tripping breakers, replace worn receptacles, switches, and dimmers, add GFCI and AFCI protection where code calls for it, and install USB and smart devices in existing boxes. Every repair starts with the circuit turned off at the panel and verified dead with a tester, and ends with the device tested under load and the cover plate back on straight.",
        "The most common call is an outlet that stopped working. Usually it's one of three things: a tripped GFCI in the garage or a bathroom that protects outlets you didn't know were downstream of it, a loose push-in connection on a receptacle upstream, or a breaker that tripped to the middle position and looks on. We check those in that order before opening a wall, and we explain what we found so the next one doesn't cost you a visit.",
        "For anything bigger than device-level work, we're honest about scope. Adding a circuit, running new wire, or replacing a panel is quoted separately after a walkthrough, and where Clark County, the City of Las Vegas, Henderson, or North Las Vegas requires a permit and inspection, we pull it and schedule the inspector. Like-for-like replacement of a receptacle or switch generally doesn't need one, and we'll tell you up front which category your job falls in.",
      ],
      callout: {
        type: "local",
        title: "What's actually in the walls of a 1990s–2000s Las Vegas home",
        text: "The valley's tract homes from that era were wired with copper NM cable, so aluminum branch wiring isn't the concern it is in older markets. The real issue is builder-grade 15-amp receptacles with push-in back-stab connections. Twenty-plus summers of 110-degree days and attic temperatures over 140 degrees expand and contract those spring contacts until they loosen, and a loose connection arcs, heats, and eventually kills the outlet or every outlet downstream of it. We move the conductors to the side screws or replace the device with a back-wired clamp style, which is the fix that lasts.",
      },
    },
    {
      heading: "Tripping breakers and what they're telling you",
      lead: "A breaker that trips repeatedly is protecting something. Resetting it over and over is how wires overheat.",
      body: [
        "Standard breakers trip on overload or a short. Overload is a space heater, a hair dryer, and a vacuum sharing one 15-amp circuit, and the fix is moving the load or adding a circuit. A short or ground fault trips instantly, even with nothing plugged in, and usually traces to a damaged cord, a screw through a cable, a failed device, or water in an exterior box. We isolate it by splitting the circuit at each junction until the fault clears.",
        "GFCI and AFCI breakers trip for different reasons. A GFCI trips on a few milliamps of leakage, which can mean a real fault, a worn appliance, a wet exterior receptacle, or a fridge with an aging compressor. AFCI breakers, required on bedroom circuits in homes built from roughly the mid-2000s on and on most living-area circuits in newer construction, trip on arcing patterns and are known to react to certain vacuums, treadmills, and old dimmers. We test with the loads that trigger it and tell you whether it's the breaker, the device, or the wiring.",
        "If a breaker is warm to the touch, buzzes, won't reset, or trips with everything unplugged, stop resetting it and call. Breakers wear out, especially in garage panels that bake in the afternoon sun, and a breaker that has failed closed will not protect the circuit at all. Replacement is a quick job when the panel is a common brand, and we'll tell you if yours is one of the discontinued panel types that warrants a bigger conversation.",
      ],
      highlights: [
        { icon: "zap", label: "Tested, not guessed", detail: "Every dead circuit gets traced with a tester and a plug-in load, not a shrug and a new breaker." },
        { icon: "shield-check", label: "GFCI and AFCI done right", detail: "Line and load wired correctly, downstream outlets labeled, and every device tripped and reset before we leave." },
        { icon: "clock", label: "Fixed in one visit when possible", detail: "The truck carries common receptacles, switches, dimmers, GFCIs, and cover plates so most repairs finish the same day." },
      ],
    },
    {
      heading: "GFCI, AFCI, dimmers, and USB outlets",
      lead: "Device upgrades are quick, but the wiring behind them decides whether they work and pass inspection.",
      body: [
        "GFCI protection is required at kitchen counters, bathrooms, garages, outdoors, laundry areas, and anywhere within six feet of a sink. Many valley homes from the 1990s have a single GFCI in the garage or the primary bath protecting a chain of outlets, and when it wears out everything on the chain goes dead. We replace the worn device or, where you'd rather not hunt for a hidden reset, add a GFCI at each location or a GFCI breaker at the panel. Each installed device is tested with a plug-in tester and its own test button.",
        "Dimmers are the most common call after outlets. LED bulbs on an old incandescent dimmer flicker, buzz, or won't dim low, and the fix is a dimmer listed for LED loads matched to the bulb type. We check whether the switch is single-pole or part of a three-way and bring the right dimmer, then verify the bulbs are dimmable, because a non-dimmable LED on a good dimmer still strobes. Where the low end still flickers, we set the dimmer's trim adjustment rather than living with it.",
        "USB receptacles and smart switches fit standard boxes but are deeper than the devices they replace. We check box fill, confirm there's a neutral conductor in the box for smart switches, and use shallow-body models when the box is crowded. If a switch loop has no neutral, we'll tell you which no-neutral smart switches will work rather than forcing a device that won't, and we'll confirm the device is listed for the load it's controlling.",
      ],
      callout: {
        type: "tip",
        title: "Check the garage and bathrooms before you call",
        text: "If an outlet is dead, press the reset button on every GFCI in the house, including the garage, exterior, and each bathroom. Builders often chained outdoor and bathroom outlets off a single GFCI. If that brings it back, you saved a visit. If the GFCI won't reset or trips again immediately, that's the call.",
      },
    },
    {
      heading: "Grounding, loose neutrals, and older wiring",
      lead: "Some repairs are about safety and the resale inspection as much as convenience.",
      body: [
        "If your home has ungrounded two-prong receptacles, or three-prong receptacles with no ground (a common finding when a home inspector plugs in a tester), you have a few code-compliant options. Where there's a ground in the box, we connect it. Where there isn't, the NEC allows a GFCI receptacle labeled 'No equipment ground' or a GFCI breaker on the circuit, which gives shock protection without rewiring. Running a new equipment ground or new cable is the complete fix, and we'll price both so you can choose.",
        "Warm cover plates, discolored receptacles, a burning smell, or lights that dim when the AC compressor kicks on are signs of a loose or overloaded connection and worth a same-week visit. We open the device box, check the terminations, look at the conductor insulation for heat damage, and inspect the neutral bar and breaker terminations in the panel. Loose neutrals in particular cause flickering, and in a multi-wire branch circuit a loose neutral can send close to 240 volts to 120-volt devices.",
        "Whole-house rewiring, service upgrades, and EV charger circuits are outside this service. Panel replacements and 200-amp service upgrades in particular require a permit, an inspection, and coordination with NV Energy for the disconnect, so they're scheduled as their own project. If your repair turns out to be heading that direction, we'll say so and quote it separately rather than start a repair that turns into a rewire in your hallway.",
      ],
    },
  ],
  benefits: [
    { title: "Root cause, not symptom", description: "We find the loose connection or failed device causing the problem instead of resetting a breaker and leaving." },
    { title: "Code-correct devices", description: "GFCI, AFCI, and tamper-resistant receptacles installed where the current code requires them, wired line and load correctly." },
    { title: "Same-visit fixes", description: "Common devices ride on the truck, so outlet, switch, and dimmer repairs usually finish the day we arrive." },
  ],
  process: [
    { title: "Describe the symptom", description: "Tell us what's dead, what trips, and when. Photos of the device and the panel label help us arrive with the right parts." },
    { title: "Test and trace", description: "Power off and verified at the device, then the circuit is traced from panel to outlet with a tester until the fault is found." },
    { title: "Repair and replace", description: "Loose terminations remade on the screws, worn devices swapped, GFCI or AFCI protection added where required, and any heat-damaged conductor cut back to clean copper." },
    { title: "Load test and label", description: "Each device tested under load and with a plug-in tester, GFCI downstream outlets labeled, and the panel directory updated if we changed anything." },
  ],
  faqs: [
    {
      question: "How much does it cost to fix an outlet in Las Vegas?",
      answer: "A single receptacle or switch replacement is a flat per-device price, and troubleshooting a dead circuit is priced by the visit with the repair quoted before we do it. Most outlet calls end within one visit. If the fix turns out to be a new circuit or panel work, we stop and give you a written quote first.",
    },
    {
      question: "Why does my breaker keep tripping?",
      answer: "Either the circuit is overloaded, something on it has a short or ground fault, or the breaker itself is worn. A breaker that trips under a heavy load like a space heater is overloaded. One that trips instantly with nothing plugged in has a fault. One that trips at random or won't reset may need replacing. We test each possibility rather than guessing.",
    },
    {
      question: "Do I need a permit to replace outlets or switches in Clark County?",
      answer: "Replacing a receptacle, switch, or dimmer in the same box with no new wiring generally does not require a permit in Clark County or the valley cities. Adding circuits, extending wiring into new boxes, or replacing a panel does. We tell you which applies before the work and pull the permit when it's needed.",
    },
    {
      question: "Can you install a dimmer that works with LED bulbs?",
      answer: "Yes. We install dimmers listed for LED loads and match them to your bulb type and to single-pole or three-way wiring. We also confirm your bulbs are dimmable, since a non-dimmable LED will flicker on any dimmer. If the flicker is coming from somewhere else, like a loose neutral, we find that instead.",
    },
    {
      question: "Does my 1990s Las Vegas house have aluminum wiring?",
      answer: "Almost certainly not. Aluminum branch-circuit wiring was used from the mid-1960s to the early 1970s, and valley tract homes from the 1990s and 2000s were wired with copper. What those homes do have is back-stabbed receptacles that loosen with age, and that's the usual cause of dead or intermittent outlets. If you're in an older home and unsure, we'll check at the panel.",
    },
  ],
  relatedProductSlugs: [],
  meta: {
    title: "Electrical Repairs, Outlets & Switches in Las Vegas",
    description: "Electrical repairs in Las Vegas: dead outlets, tripping breakers, GFCI upgrades, dimmers, and USB outlets traced to the cause and fixed, usually in one visit.",
  },
};
