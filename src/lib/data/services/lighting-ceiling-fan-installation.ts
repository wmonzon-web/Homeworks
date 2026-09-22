import type { Service } from "@/lib/data/types";
import { getServiceSummary } from "@/lib/data/services/catalog";

const summary = getServiceSummary("lighting-ceiling-fan-installation")!;

export const service: Service = {
  ...summary,
  tagline: "Recessed LEDs, pendants, ceiling fans, and exterior fixtures hung on the right box and wired to the right switch.",
  quickFacts: {
    typicalDuration: "Fan or fixture swap on an existing box: 1–2 hours. Recessed lighting in a room: one day. New wiring runs: 1–2 days plus inspection where required.",
    priceBand: "Fixture and fan swaps are a flat price per unit. New recessed lighting is quoted per light in a written scope after we look at ceiling and attic access.",
    whenToCall: "A dark kitchen, a wobbling fan, a fixture you bought and don't want to hang, a dated fluorescent box, or a porch light that died.",
  },
  contentSections: [
    {
      heading: "Lighting and ceiling fan installation in Las Vegas",
      lead: "Good lighting work is half electrical and half carpentry: the box, the bracing, and the ceiling patch matter as much as the wiring.",
      body: [
        "Lighting and ceiling fan installation covers hanging a fixture you've bought, replacing an old fixture with a new one, adding recessed LED lights where there were none, mounting ceiling fans on fan-rated boxes, replacing exterior lights, and swapping standard switches for dimmers and smart switches. We handle the electrical, the ceiling cuts and patching, and the cleanup, so a new fixture doesn't leave you with a hole to fix or a switch that doesn't control what you expected.",
        "Most jobs start with what's in the ceiling. A plastic box nailed to a joist will hold a light but not a fan, and a builder's fluorescent box light in a 1990s kitchen usually sits in a drywall soffit with a single cable and no room for a modern fixture. We open it up, install the right support, and run new cable where the layout calls for it. Where the ceiling gets cut, we patch, texture, and paint it as part of the same job.",
        "Bring us the fixture you've picked, or ask for a short list that fits your box, ceiling height, and switch wiring. We'll also tell you when an integrated-LED fixture means replacing the whole unit when the driver eventually fails, versus a fixture that takes a standard bulb you can change yourself. Either is fine; you should just know which one you're buying and what it takes to service it later.",
      ],
      highlights: [
        { icon: "fan", label: "Fan-rated boxes, always", detail: "Every fan hangs from a listed fan-support box braced to the framing, never from a light box." },
        { icon: "lightbulb", label: "Layout before cutting", detail: "Recessed lights spaced from the walls and each other for even coverage, marked and approved before a hole is cut." },
        { icon: "hammer", label: "Ceiling patched and painted", detail: "Old fixture holes and soffit cuts patched, textured, and painted, not left for another contractor." },
      ],
    },
    {
      heading: "Recessed LED lighting",
      lead: "Canless LED wafers changed what's possible in a finished ceiling: no housing, no attic crawl, and a small hole saw.",
      body: [
        "In an existing ceiling we use slim canless LED downlights with a remote driver, which need only a 3- or 4-inch hole and a little slack in the cable. Where we have attic access, we can also install IC-rated housings that are safe in contact with insulation. Wafers are rated for insulation contact and are airtight, which matters under a ceiling with blown-in insulation. We lay out spacing by the room: for general lighting, roughly half the ceiling height between lights and a few feet off the walls; for a kitchen, lights centered over the counter edge so you're not working in your own shadow.",
        "Circuits are run from an existing switch box where the wiring allows or from a new switch location. Six or eight lights on one dimmer is typical; we use dimmers listed for the LED load and set the low-end trim so the lights dim without flicker. Color temperature is your call, but we'll steer you toward 2700K–3000K in living spaces and 3000K–3500K in kitchens and baths, and we install selectable-CCT fixtures when you're undecided.",
        "Removing an old fluorescent box, a fan-light combo, or a track leaves a hole. We patch it with drywall, tape, texture, and paint to match, which is the same work our drywall repair service does every day. If you're also removing popcorn or planning to paint the ceiling, we'll sequence the lights first so the finish work happens once, and the ceiling is only sanded and painted one time.",
      ],
      callout: {
        type: "local",
        title: "Why LED drivers die early in a Las Vegas attic",
        text: "Attic temperatures in the valley run well above 130 degrees on a summer afternoon, and the electronics in an LED driver age fastest with heat. A fixture with a long rated life at room temperature can fail in a few summers if its driver sits in the hottest part of the attic. We mount remote drivers below the insulation line or in the ceiling cavity, choose fixtures with a listed ambient rating, and keep housings clear of the ductwork so the light lasts as long as the box says it will.",
      },
    },
    {
      heading: "Ceiling fans",
      lead: "A fan that wobbles, hums, or hangs from the wrong box is a fan installed on the cheap, and valley ceilings are tall enough to make that dangerous.",
      body: [
        "Code requires ceiling fans to hang from a box listed for fan support, secured to a joist or to a brace bar spanning two joists. Standard light boxes are rated for fixtures up to 50 pounds and are not rated for the dynamic load of a spinning fan. From a finished ceiling, we install a retrofit brace box through the existing hole without cutting more drywall; with attic access, we screw a fan-rated pancake or saddle box directly to the framing. Fans over 70 pounds get supported independently of the box.",
        "Vaulted and two-story ceilings in Las Vegas tract homes need a downrod sized so the blades sit around 8 to 9 feet above the floor and clear the slope, and a sloped-ceiling adapter when the pitch exceeds what the canopy allows. We balance every fan after mounting, set the reversing switch for summer downdraft, and wire the fan and light separately when the box has the conductors for it, so a single switch doesn't force you to run both.",
        "Bedrooms usually have a switch loop feeding a single light. If you want fan and light controlled separately without new wire, a fan with a remote receiver or a smart canopy module solves it. If you'd rather have two wall switches, we'll price pulling a new three-conductor cable from the switch to the box, which is usually a short run in a single-story home with attic access.",
      ],
    },
    {
      heading: "Exterior fixtures and smart switches",
      lead: "Outside, the fixture rating and the seal against stucco decide whether it lasts. Inside, the neutral in the box decides which smart switch you can use.",
      body: [
        "Exterior fixtures need a wet-location rating where rain reaches them and at least a damp rating under a covered patio. On stucco, we mount to a proper exterior box, seal the penetration with an exterior-rated sealant so monsoon rain doesn't track behind the fixture, and use a gasketed base. Plastic fixtures chalk and crack under desert UV within a few years, so we recommend powder-coated aluminum or brass. Coach lights, pathway lights, and motion floods on existing wiring are a straightforward swap; new exterior circuits are quoted separately.",
        "Smart switches and dimmers need a neutral conductor in the box. In a 1990s–2000s Las Vegas home, many switch boxes have one because power feeds the switch first, but switch loops fed from the fixture don't. We check before you buy, and where there's no neutral we install a no-neutral model or a smart-bulb setup with a dedicated controller. Three-way circuits need matched companion switches on the other end, and we'll confirm which end is the line side.",
        "We wire smart devices to the manufacturer's diagram and test them from the app before we leave. Setting up hubs, scenes, and schedules is on your side, but we'll pair the device, confirm the switch responds, and check that the load dims cleanly through its range so the first thing you do with it isn't troubleshooting. If a device won't pair or drops off the network, that's usually a range or hub issue rather than wiring, and we'll tell you which.",
      ],
      callout: {
        type: "tip",
        title: "Check the box before you buy the fan",
        text: "Take the existing fixture down or send a photo of the box with the canopy off. If we can see whether it's a fan-rated box and whether there's a red conductor for a separate light switch, we can quote the job and tell you which fan will work before you order it.",
      },
    },
  ],
  benefits: [
    { title: "Hung to code", description: "Fan-rated boxes braced to the framing, IC-rated recessed housings, and wet-rated exterior fixtures every time." },
    { title: "Finished ceilings", description: "Holes patched, textured, and painted by the same crew, so a new fixture doesn't leave a repair behind." },
    { title: "Switches that make sense", description: "Dimmers matched to the LED load, and fans and lights on their own controls wherever the wiring allows." },
  ],
  process: [
    { title: "Send the fixture and the ceiling", description: "Photos of the fixture, the ceiling, and the switch tell us what box, bracing, and cable we'll need." },
    { title: "Confirm the layout", description: "Recessed lighting positions marked on the ceiling with tape and approved before cutting. Fan height and downrod length set for the room." },
    { title: "Install and wire", description: "Boxes and bracing set, cable run where needed, fixtures hung, dimmers or smart switches wired, and everything tested under load." },
    { title: "Patch and clean", description: "Drywall patched and textured where we cut, dust vacuumed, and the old fixture and packaging hauled off with us." },
  ],
  faqs: [
    {
      question: "How much does it cost to install a ceiling fan in Las Vegas?",
      answer: "A fan hung on an existing fan-rated box with the wiring already there is a flat price. If the box has to be replaced with a fan-rated brace, or the ceiling is vaulted and needs a longer downrod and adapter, those are line items we quote up front from your photos. Fans on two-story ceilings that need scaffolding are priced after a look.",
    },
    {
      question: "Can you install recessed lighting without attic access?",
      answer: "Yes. Canless LED wafer lights need only a small hole and are fed from a remote driver in the ceiling cavity. We fish cable from an existing switch or fixture box, and where a wall or ceiling has to be opened to route the wire, we patch and paint it. A first-floor ceiling under a bedroom is routine work.",
    },
    {
      question: "Do I need a fan-rated box for a ceiling fan?",
      answer: "Yes. The electrical code requires a box listed for fan support, and standard light boxes are not. Many builder fixtures in the valley hang from plastic boxes nailed to a joist that will loosen under a fan. We install a retrofit brace box from below or a fan-rated box from the attic as part of every fan job where one isn't already there.",
    },
    {
      question: "How long does it take to install recessed lights?",
      answer: "A typical room with six to eight canless LED lights on a new dimmer takes one working day, including patching where we removed the old fixture. Larger layouts, or runs that need new switch locations, may take two. If a permit and inspection are required for the new wiring, the inspection is scheduled after the rough-in.",
    },
    {
      question: "Will you install a light fixture I bought online?",
      answer: "Yes. Send a photo of the fixture and the ceiling where it's going. We'll tell you if the box needs upgrading, whether the fixture is rated for the location, and what it will cost to hang. Heavy chandeliers need support beyond a standard box, and we handle that. We also haul away the old fixture and the packaging.",
    },
  ],
  relatedProductSlugs: [],
  meta: {
    title: "Lighting & Ceiling Fan Installation in Las Vegas",
    description: "Lighting and ceiling fan installation in Las Vegas: recessed LEDs, pendants, fans on fan-rated boxes, exterior fixtures, and smart switches, ceilings patched.",
  },
};
