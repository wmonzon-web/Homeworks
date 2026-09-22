import type { Service } from "@/lib/data/types";
import { getServiceSummary } from "@/lib/data/services/catalog";

const summary = getServiceSummary("window-screen-repair")!;

export const service: Service = {
  ...summary,
  tagline: "Sticking sashes, broken balances, torn screens, and fogged glass fixed without replacing the whole window.",
  quickFacts: {
    typicalDuration: "Screens and hardware: same visit, often under an hour per window. Balances, rollers, and glass units: 1 visit plus a short return if parts are ordered.",
    priceBand: "Screens and small hardware are a flat price per window; balances, rollers, and glass units are quoted after we identify the part.",
    whenToCall: "A window that won't stay up, slides hard, won't lock, fogs between the panes, whistles in wind, or has a screen the dog or the sun got to.",
  },
  contentSections: [
    {
      heading: "Window and screen repair in Las Vegas",
      lead: "Most window problems are a worn part, not a failed window, and the part costs a fraction of replacement.",
      body: [
        "Window and screen repair means fixing the moving and sealing parts of the windows you already have: replacing the balances that hold a single-hung sash up, swapping rollers and track caps on sliders, re-screening or rebuilding screen frames, replacing locks, tilt latches, and cranks, resealing the perimeter, and replacing fogged insulated glass units in the existing frame. We work on the vinyl and aluminum single-hung and horizontal sliding windows found in nearly every Las Vegas home, plus casements and patio slider screens.",
        "We're a repair crew, not a window sales company, so the first question is what's actually failing. A sash that drops is a balance. A slider that fights you is rollers, a bent track, or packed dust. A screen that flaps is a stretched spline or a bent frame. Fog between the panes is a failed seal in the glass unit, and the unit can be replaced without touching the frame. We'll tell you when a window is truly done and full replacement makes more sense.",
        "Screen work covers standard window screens, patio slider screens, and entry screen doors: new fiberglass or aluminum mesh, pet-resistant mesh where you need it, new spline, and rebuilt or replaced frames with matching corners and pull tabs. We measure on site and bring frame stock with us. If a screen is missing entirely, which happens after a windstorm or a previous owner, we build one to fit the frame's channel and clip style so it sits flush and stays put.",
      ],
      callout: {
        type: "local",
        title: "What the desert does to windows and screens",
        text: "Las Vegas UV and 110-degree afternoons break down vinyl weatherstrip, dry out fiberglass mesh until it tears at a touch, and cook the butyl seal on insulated glass units until they fog. Fine dust from wind and monsoon storms packs into slider tracks and wears the rollers flat. Aluminum-frame windows on 1990s tract homes lose their tilt latches and balances first; the vinyl windows that replaced them in the 2000s now have brittle screens and faded sashes on south and west walls. Almost all of it is parts, not windows.",
      },
    },
    {
      heading: "Sashes, balances, and sliders",
      lead: "If a window won't stay open or won't slide, the fix is inside the frame.",
      body: [
        "Single-hung windows hold the bottom sash up with a pair of balances, either spiral (a twisted rod in a tube) or block-and-tackle (a spring and cord in a channel). When one fails, the sash drops or sits crooked. We identify the balance by length, weight rating, and tip style, pull the sash by releasing the tilt latches or pivot bar, swap both balances so they're matched, and reset the sash so it tilts and locks properly. Broken tilt latches and pivot bars get replaced at the same time, since they're the usual reason a sash comes off track.",
        "Horizontal sliders and patio doors ride on rollers in a track. Dust wears the rollers flat, and the sash starts to drag and gouge the track. We pull the sash, replace the rollers with the right wheel type and height, clean or cap the track, and adjust the rollers so the sash sits level and the lock lines up with its keeper. Stripped cam locks, keepers, and latches are swapped, and casement cranks and operators are replaced with matching units.",
      ],
      highlights: [
        { icon: "wrench", label: "Balances swapped in pairs", detail: "Matched by length and weight so the sash stays where you set it, on both sides." },
        { icon: "layers", label: "Rollers and track cap", detail: "Flat rollers replaced, a gouged track capped, and the sash leveled so the lock meets the keeper." },
        { icon: "shield-check", label: "Locks that actually lock", detail: "Stripped cam locks, keepers, and tilt latches replaced with matching hardware." },
      ],
    },
    {
      heading: "Screens: re-screen, rebuild, or replace",
      lead: "Screens are the cheapest repair on the house and the one the sun ruins first.",
      body: [
        "Re-screening means pulling the old spline and mesh, cleaning the frame channel, laying new mesh, rolling in new spline of the right diameter, and trimming. We use standard fiberglass mesh, aluminum where you want something that lasts longer in sun, pet-resistant vinyl-coated polyester at the height a dog or cat reaches, and solar screen mesh on west-facing windows when you want to cut heat and glare. Frames that are bent, split at the corners, or missing pull tabs get new corners and springs, or a new frame cut to size.",
        "Patio slider screens are their own job: the rollers wear, the frame bows, and the door pops off the track. We replace the rollers top and bottom, straighten or replace the frame, re-screen, and adjust so it glides and latches. Entry screen doors get closers, hinges, and latch hardware serviced or replaced. Everything is measured on site, and we carry frame stock, corners, and mesh so most screens are finished the same visit.",
      ],
      callout: {
        type: "tip",
        title: "Solar screens on the west side",
        text: "If a room gets brutal afternoon sun, solar screen mesh on those windows blocks much of the heat before it reaches the glass, which does more than any interior blind. Check your HOA first: many Las Vegas communities specify the screen color.",
      },
    },
    {
      heading: "Seals, glass, and when to replace instead",
      lead: "Air leaks and fogged glass are fixable in the frame; frame failure is not.",
      body: [
        "Air whistling in or dust collecting on the sill usually means the pile or bulb weatherstrip on the sash has flattened, or the sash isn't meeting the frame. We replace the pile weatherstrip with matching height and backing, adjust the sash, and reseal the exterior perimeter where the stucco meets the flange with a paintable sealant. That perimeter joint is also where water gets in during monsoon storms, and it's part of our caulking, grout, and weatherproofing service when you want the whole house done.",
        "Fog, haze, or water between the panes means the insulated glass unit's seal has failed. The frame is fine; the glass unit is replaced. We measure the unit, order a matching double-pane with the same low-E coating, and set it in the existing sash with new glazing tape or stops. Cracked or broken glass is handled the same way. If a frame is warped, or the vinyl has gone chalky and brittle, we'll say so and point you toward replacement, which is outside what we do.",
      ],
    },
  ],
  benefits: [
    { title: "Repaired, not replaced", description: "Balances, rollers, screens, seals, and glass units swapped inside the frame you already have." },
    { title: "Parts matched, not improvised", description: "Balances by length and weight, rollers by wheel type and height, mesh by how you use the room." },
    { title: "Most of it done in one visit", description: "We carry frame stock, mesh, spline, and common hardware, so screens and small fixes finish on the spot." },
  ],
  process: [
    { title: "Photos and a count", description: "Send photos of the window, the label on the frame if there is one, and a count of what needs work. Screens and hardware are quoted flat per window." },
    { title: "Identify the parts", description: "On site we pull the sash or screen, identify the balance, roller, or latch, and measure glass units where a seal has failed." },
    { title: "Repair on the spot or order", description: "Screens, rollers, locks, and common balances are done that visit; uncommon balances and glass units are ordered and installed on a short return." },
    { title: "Test and seal", description: "Every window opened, closed, locked, and checked for an even seal, with the perimeter caulked where it needs it." },
  ],
  faqs: [
    {
      question: "How much does window repair cost in Las Vegas?",
      answer: "Screens and small hardware like locks and latches are a flat price per window that we can quote from a photo and a count. Balances and rollers are priced per window once we identify the part. Replacement glass units are quoted by size and glass type after we measure. All of it costs a fraction of a new window.",
    },
    {
      question: "Can you fix a window that won't stay open?",
      answer: "Yes. A sash that slides down on its own or sits crooked has a broken or worn balance, the spring mechanism inside the frame. We replace both balances so they're matched, replace any broken tilt latches or pivot bars at the same time, and reset the sash. It's usually a single visit if we have the balance on the truck.",
    },
    {
      question: "Can a fogged window be fixed without replacing the whole window?",
      answer: "Yes. Fog between the panes means the insulated glass unit's seal failed, but the frame is unaffected. We measure the unit, order a matching double-pane with the same low-E coating and spacer, and set it in your existing sash. It's a repair, not a replacement, and it costs far less than a new window.",
    },
    {
      question: "Do you repair patio sliding screen doors?",
      answer: "Yes. Patio screen doors usually fail at the rollers and the frame corners. We replace the rollers top and bottom, straighten or replace the frame, re-screen with the mesh you want (standard, pet-resistant, or solar), and adjust the door so it rolls and latches. Most are finished the same visit.",
    },
    {
      question: "How long does window and screen repair take?",
      answer: "Screens, locks, and rollers take under an hour per window and are usually finished on the first visit. Balances take about the same when we have the part; uncommon sizes are ordered and installed on a short return. Replacement glass units take a week or two to arrive and about an hour to set.",
    },
  ],
  relatedProductSlugs: [],
  meta: {
    title: "Window & Screen Repair in Las Vegas",
    description: "Window and screen repair in Las Vegas: broken balances, stuck sliders, torn screens, and fogged glass fixed in your existing frames. Flat prices per window.",
  },
};
