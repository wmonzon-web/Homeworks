import type { Service } from "@/lib/data/types";
import { getServiceSummary } from "@/lib/data/services/catalog";

const summary = getServiceSummary("exterior-painting")!;

export const service: Service = {
  ...summary,
  tagline: "Stucco, fascia, trim, and garage doors washed, crack-sealed, primed, and coated with paint built for 115-degree sun.",
  quickFacts: {
    typicalDuration: "Trim, fascia, and garage door: 1–2 days. Full stucco exterior: 3–5 days single-story, 4–7 days two-story.",
    priceBand: "Priced by stucco square footage plus linear feet of fascia and trim. Hairline crack sealing is included; stucco patching is a separate line.",
    whenToCall: "Chalky stucco that rubs off on your hand, peeling fascia, faded trim, hairline cracks spreading across a wall, or an HOA notice.",
  },
  contentSections: [
    {
      heading: "Exterior painting in Las Vegas that holds up to the sun",
      lead: "Desert exteriors don't fail from rain. They fail from UV, heat, and daily thermal movement, so the prep and the product have to be chosen for that.",
      body: [
        "Exterior painting means pressure washing the house, sealing hairline cracks in the stucco, scraping and priming any peeling fascia and trim, masking windows, roof edges, and landscaping, and spraying and back-rolling two coats of a 100% acrylic or elastomeric exterior paint. Fascia, trim, shutters, entry doors, and garage doors are brushed or sprayed separately with an exterior enamel. We paint stucco homes, block walls, patio covers, and the metal and wood pieces around them.",
        "Most of our exterior work is on the stucco tract homes that make up the valley: 1990s and 2000s construction with cement stucco over foam or lath, wood or composite fascia, and a steel sectional garage door. Each of those materials chalks, cracks, or peels in its own way, and each gets its own prep before it sees a coat of paint.",
        "If the stucco has more than hairline cracks, missing chunks at corners, or spots that sound hollow when you tap them, we repair it before paint. That's our stucco repair service, and on an exterior repaint it's bundled into the same job and the same crew. Painting over a hollow or delaminated patch just hides it until the section falls off with the new paint attached, so we'd rather fix it while the masking is already up.",
      ],
      callout: {
        type: "local",
        title: "What the Mojave does to exterior paint",
        text: "South- and west-facing walls here reach surface temperatures well over 140 degrees in July, and the UV index sits at very high or extreme for much of the year. Cheap exterior paint chalks in a few summers: the binder breaks down and the pigment turns to powder that rubs off on your hand. Stucco also expands and contracts with the 40-degree swing between afternoon and night, which opens hairline cracks. We use paint with a high acrylic binder content and UV-stable pigments, and we seal cracks with an elastomeric filler that stretches instead of reopening.",
      },
    },
    {
      heading: "Prep on stucco, fascia, and trim",
      lead: "Every exterior surface gets washed, repaired, and primed to what it actually needs, not what's fastest.",
      body: [
        "Stucco is pressure washed to remove chalk, dust, and cobwebs, then allowed to dry fully. Hairline cracks get an elastomeric crack sealer worked in with a brush. Heavily chalked walls get a bonding primer or conditioner so the new paint bonds to solid material instead of powder. Any exposed foam at corners or around fixtures gets patched with stucco and textured before paint goes on.",
        "Wood fascia and trim is where most valley exteriors show their age first. We scrape loose paint, sand the edges feathered, replace any boards that are rotted or split beyond repair, spot-prime bare wood with an exterior oil or bonding primer, and caulk the joints and nail holes. Steel garage doors are washed, scuffed, spot-primed where rust shows, and sprayed with a direct-to-metal acrylic enamel that stays flexible in the heat instead of peeling.",
      ],
      highlights: [
        { icon: "droplets", label: "Washed and dried first", detail: "Chalk and dust pressure washed off so paint bonds to stucco, not powder." },
        { icon: "shield-check", label: "Cracks sealed elastomeric", detail: "Hairline cracks filled with a flexible sealer that moves with the wall." },
        { icon: "hammer", label: "Fascia repaired, not hidden", detail: "Rotted or split boards replaced and bare wood primed before the topcoat." },
      ],
    },
    {
      heading: "Paint systems that last in the desert",
      lead: "The product matters as much as the prep. Here's what we use and why.",
      body: [
        "On stucco we spray and back-roll two coats of a premium 100% acrylic exterior paint in flat or low sheen, which is what most HOAs specify. Back-rolling after spraying pushes the paint into the stucco texture so it doesn't just sit on the peaks. Where the stucco has a history of cracking, we recommend an elastomeric coating, which goes on thicker and bridges hairline movement, though it needs a sound, fully dry wall underneath to work.",
        "Fascia, trim, and doors get an exterior acrylic enamel in satin or semi-gloss, which sheds dust and washes off easily. Light colors last longer here than dark ones, because dark paint absorbs more heat and fades faster. If you want a dark front door or accent, we'll use a product with heat-reflective pigments and tell you what to expect over time.",
        "We paint when the surface is below the manufacturer's maximum temperature, which in summer means starting early and following the shade around the house. Paint applied to a wall that's too hot skins over before it bonds and fails within a year or two. We also watch the monsoon forecast in July and August; a wall hit by a late-afternoon storm before the paint has set will show wash marks and need a recoat.",
      ],
      callout: {
        type: "tip",
        title: "Check your HOA palette first",
        text: "Most Las Vegas HOAs have an approved color book and require an architectural application before repainting, even in the same color. Send us your HOA's paint scheme or approved manufacturer codes and we'll quote in those exact products. Approval can take a few weeks, so start it before you schedule.",
      },
    },
    {
      heading: "Garage doors, gates, block walls, and patio covers",
      lead: "The pieces around the house fade before the walls do, and they're often a quick, separate job.",
      body: [
        "Steel sectional garage doors fade to chalk on the sun side and show rust where the panels meet. We wash, scuff-sand, treat rust, spot-prime, and spray two coats of a direct-to-metal enamel with the door closed and the panel joints masked so paint doesn't bridge the hinges. Wrought-iron gates and security doors get the same rust treatment and a rust-inhibiting enamel.",
        "Aluminum and wood patio covers get washed, primed where bare, and sprayed. Wood covers that have gone gray need sanding and a solid-color stain or a primer and topcoat, depending on how far gone they are. Block walls get a masonry primer and a breathable acrylic paint that lets moisture out; sealing them with a non-breathable coating traps efflorescence and peels.",
      ],
      highlights: [
        { icon: "sun", label: "Direct-to-metal on doors", detail: "Rust treated, primed, and sprayed with enamel that stays flexible in the heat." },
        { icon: "layers", label: "Breathable on block", detail: "Masonry primer and acrylic paint so moisture escapes instead of blistering." },
        { icon: "calendar-check", label: "Scheduled around the sun", detail: "Early starts and shade-following in summer so paint cures instead of skinning." },
      ],
    },
  ],
  benefits: [
    { title: "Built for UV and heat", description: "100% acrylic and elastomeric products chosen for how they age through desert summers, not for the lowest bid." },
    { title: "Stucco actually repaired", description: "Cracks sealed with flexible filler and damaged corners restuccoed before paint, so they don't telegraph through." },
    { title: "HOA-ready", description: "Quoted in your HOA's approved colors and products, with the product details you need for the application." },
  ],
  process: [
    { title: "Walkthrough and measurement", description: "We measure stucco square footage and fascia length, check for cracks and rot, and note HOA colors so the quote is complete." },
    { title: "Wash and repair", description: "Pressure wash, dry, seal cracks, patch stucco, replace failed fascia, and spot-prime bare wood and metal." },
    { title: "Mask and paint", description: "Windows, roof line, fixtures, and plants covered. Two coats sprayed and back-rolled on stucco, enamel on trim and doors." },
    { title: "Inspect in daylight", description: "We walk the house with you in the sun, touch up thin spots, pull masking, and leave the yard clean." },
  ],
  faqs: [
    {
      question: "How much does it cost to paint the exterior of a house in Las Vegas?",
      answer: "The price is driven by square footage of stucco, linear feet of fascia and trim, number of stories, and how much crack sealing or stucco patching is needed. A single-story home with sound stucco is at the low end; a two-story with peeling fascia costs more. We quote from a walkthrough with measurements so there are no surprises.",
    },
    {
      question: "How often should you paint a stucco house in Las Vegas?",
      answer: "With a premium 100% acrylic paint and proper prep, stucco paint in the valley typically holds up around a decade before it chalks and fades noticeably. Fascia and south- or west-facing trim need attention sooner. Cheap paint, or good paint applied over chalk without a primer, can fail in a few summers.",
    },
    {
      question: "Can you paint in the summer heat?",
      answer: "Yes, with limits. We start at first light and follow the shade around the house so paint goes on a surface within the manufacturer's temperature range. Direct afternoon sun on a west wall in July is skipped and done the next morning. Spring and fall are ideal, and winter works on all but the coldest mornings.",
    },
    {
      question: "Do you need HOA approval to repaint the same color?",
      answer: "Most Las Vegas HOAs require an architectural application even for a same-color repaint, and many have an approved palette from a specific manufacturer. Check your CC&Rs or call the management company. We can quote in your approved colors and provide the product information the application asks for.",
    },
    {
      question: "Will you fix the cracks in my stucco before painting?",
      answer: "Yes. Hairline cracks are sealed with an elastomeric crack filler as part of every exterior job. Wider cracks, missing chunks, and hollow spots get a proper stucco patch, textured to match, and that's quoted as a separate line so you can see exactly what the repair costs.",
    },
  ],
  relatedProductSlugs: [],
  meta: {
    title: "Exterior Painting in Las Vegas",
    description: "Exterior painting in Las Vegas: stucco, fascia, trim, and garage doors prepped, crack-sealed, and coated with acrylic paint built for desert sun.",
  },
};
