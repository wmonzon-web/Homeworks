import type { Service } from "@/lib/data/types";
import { getServiceSummary } from "@/lib/data/services/catalog";

const summary = getServiceSummary("cabinet-painting-refinishing")!;

export const service: Service = {
  ...summary,
  tagline: "Your existing kitchen or bath cabinets degreased, sanded, primed, and sprayed with a hard enamel that reads like a factory finish.",
  quickFacts: {
    typicalDuration: "Average kitchen: 4–6 working days, with doors sprayed off-site and boxes done in place. Bathroom vanities: 2–3 days.",
    priceBand: "Priced per door and drawer front plus the cabinet boxes, so the quote scales with your kitchen. A fraction of what new cabinets and installation cost.",
    whenToCall: "Sound but dated oak or maple cabinets from the original build, a finish that's sticky or peeling around the handles, or a kitchen refresh where the layout stays.",
  },
  contentSections: [
    {
      heading: "Cabinet painting and refinishing in Las Vegas",
      lead: "Painted cabinets fail at the prep stage or not at all. The sprayed finish is what everyone sees, but the degreasing, sanding, and primer decide whether it chips.",
      body: [
        "Cabinet painting means taking off every door, drawer front, and hinge, degreasing all of it, sanding the old finish to a dull scuff, filling dings and old hardware holes, priming with a bonding primer, and spraying two coats of a waterborne or catalyzed cabinet enamel. Doors and drawer fronts go to our spray setup so they're finished flat with no runs; the boxes are masked and sprayed in your kitchen. Then everything is reinstalled with new or cleaned hardware and the doors are adjusted so the gaps are even.",
        "Refinishing is the same process with stain instead of paint, or a fresh clear coat over cabinets whose color you like but whose finish has worn. We do both, and we'll tell you honestly which your cabinets are good candidates for. Solid wood and plywood boxes with wood or MDF doors paint beautifully. Thermofoil doors that are peeling, and particleboard that has swelled from a leak, generally don't.",
        "This is the core of most kitchen refreshes: paint the cabinets, swap the hardware, add a backsplash, and the kitchen reads as new for far less than a gut remodel. That's our kitchen refresh service when you want all of it done on one schedule by one crew. It also keeps your existing layout, countertops, and plumbing in place, which is where most of the cost and disruption of a full remodel comes from.",
      ],
      callout: {
        type: "local",
        title: "Why the finish gets sticky around the handles",
        text: "Most valley kitchens built between the mid-1990s and 2010 have oak or maple doors with a thin factory lacquer. After two decades of cooking oil, hand oils, and dry heat, that lacquer breaks down and turns gummy near the pulls, and the sun through a kitchen window bleaches the stain on the doors it hits. You can't paint over that. We strip the failed areas back to sound material with a degreaser and sanding, which is the step that separates a finish that lasts from one that peels in a year.",
      },
    },
    {
      heading: "The prep that makes it stick",
      lead: "A cabinet finish takes more abuse than any other painted surface in the house. Prep is where we spend most of the time.",
      body: [
        "Every piece gets washed with a degreaser that cuts cooking residue, then rinsed and dried. We scuff-sand with 150–220 grit so the primer has a mechanical bite, then vacuum and tack-cloth the dust. Open-grain woods like oak get a grain filler if you want a smooth, modern look; otherwise the grain shows softly through the paint, which some people prefer. Dings, old hardware holes, and chips are filled with a hard two-part filler and sanded flush.",
        "Primer is a bonding primer chosen for the surface: shellac-based or a dedicated adhesion primer over slick factory lacquer, and a stain-blocking primer over oak so the tannins don't bleed yellow through a white finish. The primer is sanded lightly before the topcoat. Skipping the sand between coats is why some painted cabinets feel rough or show dust nibs when you run a hand over them.",
      ],
      highlights: [
        { icon: "droplets", label: "Degreased before primer", detail: "Cooking residue removed with a real degreaser so the primer bonds to wood, not oil." },
        { icon: "shield-check", label: "Bonding and stain-blocking primer", detail: "Adhesion primer over slick lacquer, tannin blocker over oak, sanded before topcoat." },
        { icon: "layers", label: "Filled and sanded flush", detail: "Old hardware holes, dings, and optional grain fill so the sprayed finish reads flat." },
      ],
    },
    {
      heading: "Spraying for a factory finish",
      lead: "Brushed cabinets show brush marks. Rolled ones show stipple. A sprayed enamel is the only way to get the smooth, hard finish you're picturing.",
      body: [
        "We spray with an HVLP or fine-finish airless setup using a waterborne acrylic-alkyd or catalyzed cabinet enamel. These products cure to a hard shell that resists chipping and cleans with a damp cloth, unlike wall paint, which stays soft and marks. Doors and drawer fronts are sprayed horizontally and flipped between coats so the enamel levels flat with no sags or drips at the edges.",
        "The boxes stay in your kitchen. We mask countertops, appliances, floors, and openings with plastic and paper, run filtered exhaust to control overspray, and spray the face frames and end panels in place. Two coats, sanded between with fine paper, and a light final coat if the color needs it. Whites and light colors over dark stain often need the extra coat, and we'll say so in the quote.",
        "Cure time matters. The finish is dry to the touch within hours but keeps hardening for two to three weeks. We reinstall doors carefully and ask you to go easy on them at first; that patience is the difference between a finish that lasts and one that chips at the corners. We also fit soft bumpers on every door and drawer so they don't slam against the frame while the enamel is still curing, and for the life of the finish after that.",
      ],
      callout: {
        type: "tip",
        title: "Pick your hardware before we start",
        text: "If you're changing from knobs to pulls or to a different pull spacing, tell us before prep. We fill the old holes and drill new ones so the finish is unbroken. Bring one sample pull and we'll set the spacing off it.",
      },
    },
    {
      heading: "Which cabinets are good candidates",
      lead: "Painting is a great option for most valley kitchens, but not every cabinet. Here's how we call it.",
      body: [
        "Solid wood doors on plywood or solid boxes, which is what most 1990s and 2000s builder kitchens have in oak, maple, or cherry, paint very well. MDF doors, common in newer homes with a painted look, also take paint well as long as the edges aren't swollen. Sound thermofoil that isn't peeling can be painted with the right primer, though we test adhesion on a door first.",
        "Peeling thermofoil, swollen particleboard under the sink, and doors that have warped won't hold a finish, and we'll say so. Sometimes the answer is to paint the boxes and replace the worst doors, which we can do. If the boxes themselves are beyond saving, a new cabinet install becomes the honest recommendation, and our parent company Xtreme Build Group handles full custom kitchens if that's the direction you want.",
      ],
      highlights: [
        { icon: "circle-check", label: "Wood, plywood, MDF: yes", detail: "The doors and boxes in most valley kitchens take a sprayed enamel finish well." },
        { icon: "info", label: "Peeling thermofoil: usually no", detail: "We test adhesion; if the foil is lifting we recommend replacing those doors." },
        { icon: "house", label: "Bath vanities too", detail: "Same process on a smaller scale, usually finished in two to three days." },
      ],
    },
  ],
  benefits: [
    { title: "Hard, cleanable finish", description: "A sprayed cabinet enamel that cures to a shell you can wipe, not a wall paint that marks and chips." },
    { title: "Kitchen stays usable", description: "Doors and fronts leave, boxes are masked and done in place, and you keep your countertop and sink the whole time." },
    { title: "Honest about candidates", description: "We test adhesion and tell you which doors will hold a finish and which are better replaced." },
  ],
  process: [
    { title: "Photos, count, and color", description: "Send photos of the kitchen and a count of doors and drawers. We quote per piece and confirm the color, sheen, and any hardware change." },
    { title: "Remove, label, and degrease", description: "Every door and front is numbered, hinges bagged, and everything washed with a degreaser and scuff-sanded." },
    { title: "Prime and spray", description: "Bonding primer, sanded, then two coats of cabinet enamel: doors flat in the spray setup, boxes masked and sprayed in place." },
    { title: "Reinstall and adjust", description: "Doors rehung on adjusted hinges, new hardware fitted, gaps aligned, and masking pulled with the kitchen cleaned." },
  ],
  faqs: [
    {
      question: "How much does it cost to paint kitchen cabinets in Las Vegas?",
      answer: "Cabinet painting is priced per door and drawer front plus the boxes, so a small galley costs less than a large kitchen with an island. Grain filling, a color change from dark stain to white, and new hardware holes add to it. Send photos and a piece count and we'll give you a flat price. It's consistently far less than replacing the cabinets.",
    },
    {
      question: "How long do painted cabinets last?",
      answer: "With proper degreasing, a bonding primer, and a sprayed cabinet enamel, the finish holds up through many years of normal kitchen use. The high-wear spots are the edges around the sink and the trash pull-out. Full hardness takes two to three weeks after spraying, so treat the doors gently at first.",
    },
    {
      question: "Can you paint oak cabinets so the grain doesn't show?",
      answer: "Yes. Oak has deep open grain, and to hide it we apply a grain filler before primer, sand it flush, and then prime and spray. It's an extra step that adds time and cost. Without it, the finish is smooth to the touch but the grain pattern shows faintly through the color, which many people like.",
    },
    {
      question: "Do you spray the cabinets or brush them?",
      answer: "We spray. Doors and drawer fronts are taken to our spray setup and finished flat; the boxes are masked and sprayed in your kitchen with the room sealed off from the rest of the house. Brushing leaves marks in a hard enamel and rolling leaves stipple, and neither matches a factory finish.",
    },
    {
      question: "Can I use my kitchen while the cabinets are being painted?",
      answer: "Mostly. Your sink, stove, and fridge stay usable except during the hours we're spraying the boxes, when the kitchen is masked off. Doors and drawer fronts are gone for several days, so plan on open shelves. We'll give you a day-by-day schedule before we start.",
    },
  ],
  relatedProductSlugs: [],
  meta: {
    title: "Cabinet Painting & Refinishing in Las Vegas",
    description: "Cabinet painting and refinishing in Las Vegas: kitchen and bath cabinets degreased, primed, and sprayed with hard enamel for a factory-smooth finish.",
  },
};
