import type { Service } from "@/lib/data/types";
import { getServiceSummary } from "@/lib/data/services/catalog";

const summary = getServiceSummary("water-heater-replacement")!;

export const service: Service = {
  ...summary,
  tagline: "A tank or tankless heater sized for your house and installed with the expansion tank, straps, pan, and permit the code requires.",
  quickFacts: {
    typicalDuration: "Tank-for-tank swap: one visit, usually 3–4 hours. Tankless conversion: 1–2 days depending on gas line and venting.",
    priceBand: "Priced by unit type and tank size, with the code items and permit included in the quote rather than added on site.",
    whenToCall: "Water that runs lukewarm, a tank past 10–12 years, rust-colored hot water, rumbling when it heats, or water in the drain pan.",
  },
  contentSections: [
    {
      heading: "Water heater replacement in Las Vegas, done to code the first time",
      lead: "A water heater swap is not just lifting out the old tank; it's the half dozen code items around it that quick installs skip.",
      body: [
        "Water heater replacement means draining and disconnecting the old unit, setting a new tank or tankless heater, connecting the water, gas or electrical, and vent, and adding the items current code requires that your old install probably didn't have: a thermal expansion tank, two seismic straps, a drain pan with a line to the exterior, a full-size temperature and pressure relief discharge, and a permit with inspection. We handle all of it, haul the old tank, and test for gas and water leaks before we leave.",
        "Most Las Vegas homes have a 40- or 50-gallon gas tank in the garage, and a good share of those tanks went in before the current expansion tank and strapping rules. We replace like for like when that's the right call, size up when a family has outgrown the tank, or convert to tankless when the gas line and venting make it practical. We'll give you a straight comparison of the three, with the numbers side by side, rather than steering you toward the most expensive option.",
        "If your water heater is in an interior closet or a second-floor laundry, the stakes are higher: a leak there goes into finished floors and ceilings rather than onto a garage slab. Those installs need a pan with a drain run to the exterior, and closets need combustion air openings or a sealed-combustion unit. If the old install has none of that, we'll tell you what has to change and why before you approve the quote, so nothing shows up as a surprise when the inspector comes.",
      ],
      callout: {
        type: "local",
        title: "Why the expansion tank and straps aren't optional here",
        text: "Las Vegas water is among the hardest in the country, and the scale that settles in the bottom of a tank is why heaters here rumble, lose capacity, and fail early. Nearly every valley home also has a pressure-reducing valve at the meter, which makes the plumbing a closed system: heated water has nowhere to expand, pressure spikes, and the relief valve drips. The plumbing code adopted in Southern Nevada requires an expansion tank for that reason, and seismic strapping because the valley sits in an active seismic zone.",
      },
    },
    {
      heading: "Tank or tankless: how we size it",
      lead: "The right heater depends on how many showers run at once, what your gas line can deliver, and where the unit sits.",
      body: [
        "For a tank, we size by first-hour rating: how much hot water it can deliver in the busiest hour of the morning, which depends on capacity and burner recovery. A 40-gallon tank suits one or two people; a 50-gallon or a high-recovery 50 covers a family of four with back-to-back showers. Electric tanks get sized the same way with slower recovery in mind. Power-vent units are an option where the old atmospheric flue can't be reused or the heater is moving to a closet.",
        "Tankless heaters are sized by flow rate and temperature rise. Winter inlet water here arrives in the 50s and needs to reach 120 degrees, so a unit has to handle that rise at two or three fixtures at once, which means a large burner. Many 1990s homes have a half-inch gas line to the heater that has to be upsized to three-quarter inch, and the unit needs stainless or PVC venting depending on whether it's condensing. Those two items decide whether tankless makes sense for your house.",
      ],
      highlights: [
        { icon: "flame", label: "Sized by first-hour rating", detail: "Tank capacity and burner recovery matched to how many showers run in your busiest hour." },
        { icon: "droplets", label: "Tankless sized for winter", detail: "Flow rate and temperature rise calculated for cold-month inlet water, not the nameplate's best case." },
        { icon: "ruler", label: "Gas line and vent checked first", detail: "We measure the gas line and inspect the flue before quoting, so the tankless number is real." },
      ],
    },
    {
      heading: "The code items included in every install",
      lead: "These are the parts an inspector looks for, and the parts that keep a leak from ruining a garage or a closet.",
      body: [
        "Every replacement gets a thermal expansion tank on the cold side, sized to the heater and pre-charged to your house pressure. Two seismic straps anchor the tank to studs in the upper and lower thirds. A drain pan goes under the tank with a line run to the exterior or an approved receptor, and the temperature and pressure relief valve gets a full-size discharge line that terminates where a blast of hot water can't hurt anyone. Gas units get a sediment trap, a new flex connector, and a draft check on the flue.",
        "Garage installs usually sit on an 18-inch stand unless the unit is listed as flammable-vapor ignition resistant, and get a steel bollard if the tank sits where a car could hit it. Gas lines get a shutoff within reach of the unit, and electric units get a disconnect or a breaker lockout. We pull the permit with Clark County or the city, meet the inspector, and hand you the signed-off paperwork, so the work is on record when you sell the house and the manufacturer's warranty holds.",
      ],
      callout: {
        type: "tip",
        title: "Look at the date on the tank",
        text: "The serial number on the rating plate encodes the manufacture date; the first letters or digits usually give the month and year. If it's past ten years and you're seeing rust in the pan or rumbling when it heats, replacing it on your schedule beats replacing it on a Sunday night with water on the garage floor.",
      },
    },
    {
      heading: "What to expect on install day",
      lead: "A tank swap is one visit; the parts around it are why it's done right instead of done fast.",
      body: [
        "We shut the gas and water, drain the old tank through a hose to the driveway, disconnect the vent, and remove it. The new tank is set on the stand or pan, plumbed with new flex lines or hard copper, vented, strapped, and connected. Then it's filled, purged of air at the nearest hot tap, lit, and checked for gas leaks with a detector and for water leaks at every fitting after the tank comes up to temperature.",
        "We set the thermostat to 120 degrees, show you the gas and water shutoffs and how to relight the pilot or reset the unit, and haul the old tank. Tankless conversions add a day for gas line work, venting through the roof or wall, and a condensate drain on condensing units, and the old tank's footprint gets cleaned up once it's gone. If the wall behind it needs drywall patching or paint where the old straps and vent were, the same crew handles that before we leave.",
      ],
    },
  ],
  benefits: [
    { title: "Code items in the quote", description: "Expansion tank, seismic straps, pan, drain, and permit are in the price, not surprises added during the install." },
    { title: "Sized for your house", description: "First-hour rating for tanks, temperature rise for tankless, based on how your family actually uses hot water." },
    { title: "Permitted and inspected", description: "Work is on record with the county or city, which matters at resale and keeps the manufacturer's warranty valid." },
  ],
  process: [
    { title: "Send a photo of the current heater", description: "A shot of the rating plate and the space around it tells us the size, fuel, venting, and what's missing." },
    { title: "Quote by unit and size", description: "You get a price for a like-for-like tank, a larger tank if it makes sense, and tankless if your gas line and venting allow it." },
    { title: "Install in one visit", description: "Old tank drained and removed, new unit set, plumbed, vented, strapped, and tested for gas and water leaks." },
    { title: "Permit, inspection, haul-away", description: "We pull the permit, meet the inspector, and take the old tank with us." },
  ],
  faqs: [
    {
      question: "How much does it cost to replace a water heater in Las Vegas?",
      answer: "Pricing depends on the unit type and tank size, and whether the install needs an expansion tank, straps, pan, or venting your old heater didn't have. We quote a complete number that includes those code items and the permit, from a photo of your current unit. Tankless conversions cost more because of gas line and venting work.",
    },
    {
      question: "How long does a water heater last in Las Vegas?",
      answer: "Hard water shortens tank life here. A tank that might last twelve to fifteen years in a soft-water city often shows rust, rumbling, or a slow leak between eight and twelve years in the valley. Annual flushing and replacing the anode rod help. Tankless units last longer but need descaling every year or two to keep the heat exchanger clear.",
    },
    {
      question: "Is a tankless water heater worth it in Las Vegas?",
      answer: "It can be, if your gas line and venting support it. Tankless saves standby energy and never runs out, but our hard water demands regular descaling, and many older homes need a gas line upsize that adds cost. We'll measure your gas line and flue and give you both numbers so you can decide.",
    },
    {
      question: "Do you need a permit to replace a water heater in Las Vegas?",
      answer: "Yes. Clark County and the cities in the valley require a plumbing permit and inspection for a water heater replacement. The inspector checks the expansion tank, seismic straps, T&P discharge, venting, and gas connection. We pull the permit and schedule the inspection as part of the job.",
    },
    {
      question: "Can you replace a water heater the same day?",
      answer: "Often, for a standard 40- or 50-gallon gas or electric tank in a garage. Send a photo of the rating plate in the morning and we'll confirm stock and a time. Tankless conversions, closet installs, and units that need new venting are scheduled once we've seen the space.",
    },
  ],
  relatedProductSlugs: [],
  meta: {
    title: "Water Heater Replacement in Las Vegas",
    description: "Water heater replacement in Las Vegas: tank and tankless units sized for your home, installed with expansion tank, seismic straps, drain pan, and permit.",
  },
};
