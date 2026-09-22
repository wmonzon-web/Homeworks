# Homepage hero — decided from /proto/hero (2026-09-21)

Picked **Dark & Direct** over Cream Editorial and Services First.

- Direction: form-forward. Ink (`#0C1015`) full-bleed hero, uppercase Saira Condensed
  headline left, white quote card right. Matches the parent brand's dark photo hero
  without reusing any of its assets.
- Layout: `lg:grid-cols-[1.1fr_0.9fr]`, `gap-16`; hero padding `pt-28 pb-16 md:pt-40 md:pb-24`.
- Headline: 5xl / 6xl / 7xl, `leading-[0.95]`, `tracking-wide`. Two to three lines is fine.
- Card: white, `rounded-2xl`, `p-6 md:p-8`, `shadow-floating`. Inputs `h-12 rounded-lg`.
- Buttons: `rounded-lg` (12px) everywhere, not pills. The parent brand uses ~9px-radius
  uppercase condensed buttons; pills were a shadcn default, not a decision.
- Red (`--brand-red`) appears in exactly two places above the fold: the wordmark and the
  eyebrow label. The eyebrow is the site's signature motif and should open every section.
- Rejected: **Cream Editorial** felt calmer but the CTA carried the least weight for a
  lead-gen homepage. **Services First** solved "I don't know what to call it" but the tiles
  and the form competed; that job moves to the services grid directly under the hero.
- Removed during the unslop pass: radial glow blobs and the diagonal texture behind the
  hero (decoration standing in for a photo), icons in front of the trust line, the third
  trust item (restated the lead), and the duplicate helper line under the form.

## Open items

- **Hero photo.** The hero is designed for a photograph behind a left-to-right scrim.
  `Hero.astro` takes an optional `image`; until a real (licensed or company-owned) photo
  exists it renders flat ink. Do not use parent-company photography.
- **Claims must be true.** "Licensed & insured" and "Same-week scheduling" are placeholders
  the owner must confirm before launch.
