# MENINGES LABS — Brand Kit & Digital Experience System

**Version:** 2.0  
**Status:** Working brand standard for the website rebrand  
**Brand:** MENINGES LABS  
**Tagline:** Engineering Systems. Elevating Businesses.  
**Website:** https://meningeslabs.com/  
**Primary application:** Website, digital product previews, social assets, presentations and client-facing materials

> This document supersedes earlier working colour and typography suggestions wherever they conflict with the current approved direction. The approved visual direction is the orange identity, the existing abstract ML monogram, Geist wordmark and one consistent Allura treatment for the complete tagline.

---

## 1. Brand essence

### What MENINGES LABS is

MENINGES LABS is a digital engineering and growth partner. It connects software and web engineering, applied AI, intelligent automation, search intelligence, performance marketing and growth consulting into practical systems shaped around business needs.

It is **not** positioned as only a website studio, an advertising agency or an AI gimmick brand.

### Brand promise

**We engineer connected digital systems that help businesses become more visible, operate more effectively and grow with greater clarity.**

### Brand personality

- **Intelligent:** thoughtful, informed and technically capable.
- **Precise:** clear structure, careful detail and deliberate execution.
- **Confident:** assured without shouting or making exaggerated claims.
- **Inventive:** original visual thinking and useful technical solutions.
- **Warm:** human, approachable and collaborative.
- **Grounded:** business value before visual spectacle or technology hype.

### What a visitor should feel

1. **Clarity:** “I understand what this company does and how it can help.”
2. **Confidence:** “They think in systems, not disconnected deliverables.”
3. **Momentum:** “There is a practical path from my current problem to a better system.”
4. **Trust:** “The presentation is polished, but the claims are measured and believable.”
5. **Curiosity:** “I want to explore how these capabilities could fit together.”

The site should feel premium and energetic, but never noisy, childish, excessively futuristic or difficult to navigate.

---

## 2. Identity foundations

### Approved logo direction

- Use the **approved abstract ML monogram** made from the three flowing, nested ribbon-like strokes.
- Use the approved wordmark **Meninges Labs** with the Geist typographic direction.
- For the tagline lockup, set the **entire sentence** “Engineering Systems. Elevating Businesses.” in **Allura**. Do not split the sentence across two fonts.
- The preferred horizontal arrangement is monogram at left, a restrained vertical divider, then the wordmark with the tagline beneath it.
- The standalone monogram is the primary small-format brand identifier for favicon, app icon and avatar use.

### Logo usage rules

- Preserve the supplied monogram artwork. Do not redraw, reinterpret, distort, rotate, stretch or regenerate it with an image model.
- Do not recreate the wordmark or tagline by asking an image generator to render text. Use the approved SVG/vector asset or real typeset text.
- Do not add bevels, shadows, gradients, outlines or 3D effects to the master logo.
- Maintain clear space around the logo, at least the width of one of the monogram's outer ribbon strokes.
- Never place the logo over a visually busy image.
- The white-on-orange lockup is the signature brand treatment. For light or dark backgrounds, use only approved contrast-safe variants derived from the same master artwork.
- Do not use the older burgundy/red logo in new pages or newly created materials. Archive obsolete variants rather than deleting masters without confirmation.
- Do not force the tagline into the small navigation logo. Use the wordmark-only or monogram-plus-wordmark version there.

### Asset source-of-truth rule

Before implementation, inspect the current repository assets and compare them visually with the latest approved orange-and-white monogram supplied by the brand owner. Some older files may still represent the previous burgundy identity. **Do not assume an old filename means it is the current approved artwork.** Preserve original files; create clearly named current variants only after verifying the source artwork.

Suggested asset destinations (adapt to the existing repo if an equivalent exists):

```text
public/brand/
  logos/
    ml-monogram-white.svg
    ml-monogram-orange.svg
    meninges-labs-horizontal-orange.svg
    meninges-labs-horizontal-dark.svg
    meninges-labs-horizontal-with-tagline.svg
  icons/
    favicon.ico
    favicon-32.png
    favicon-16.png
    apple-touch-icon.png
    pwa-192.png
    pwa-512.png
  social/
    og-default.png
```

Do not create fake vector files by embedding a low-resolution PNG inside an SVG and calling it a vector master. If no genuine vector master exists, document that limitation and use the approved high-resolution transparent raster asset until a vector master is produced.

---

## 3. Colour system

The colour system is fruit-inspired: vivid tangerine, papaya/cream, warm peach, citrus yellow and restrained deep green/ink. Orange is the signature; supporting colours add hierarchy rather than competing with it.

### Core palette

| Token | Hex | Role | Usage |
|---|---|---|---|
| `brand-orange` | `#FF7300` | Primary brand colour | Main identity field, key highlights, graphic accents and selected CTAs |
| `brand-orange-deep` | `#E85F00` | Orange interaction | Hover/pressed states, dark-orange details and controlled emphasis |
| `brand-orange-soft` | `#FFE2CC` | Pale orange | Soft card surfaces, chips and illustration backgrounds |
| `brand-peach` | `#FBCC98` | Warm supporting accent | Small decorative areas, visual layers and callouts |
| `brand-yellow` | `#FCD92A` | Citrus highlight | Small emphasis, tags and selected data accents only |
| `brand-persimmon` | `#E35906` | Secondary warm accent | Occasional visual emphasis; not a second primary |
| `brand-red` | `#D92603` | Strong accent | Use sparingly for a key state or emphasis, not as a competing brand colour |
| `surface-cream` | `#FFF4E6` | Main light canvas | Main website background and spacious content sections |
| `surface-white` | `#FFFFFF` | Clean surface | Cards, forms, menus and content panels |
| `surface-warm` | `#F7EBDD` | Secondary canvas | Alternating page sections and subtle separation |
| `ink` | `#202124` | Primary text | Headlines, body text and high-contrast UI text |
| `ink-soft` | `#4B4B4B` | Secondary text | Supporting copy and descriptions |
| `ink-muted` | `#77716A` | Tertiary text | Metadata, captions and low-priority labels; never for tiny low-contrast text |
| `deep-forest` | `#163B2D` | Deep supporting surface | Occasional dark section, footer or technical feature panel |
| `deep-navy` | `#14252B` | Alternative dark surface | Product previews, architecture diagrams and high-contrast feature panels |
| `line` | `#E8DCCD` | Borders | Dividers, quiet outlines and card boundaries |
| `success` | `#18794E` | Status only | Successful states and confirmation indicators |
| `warning` | `#9A6700` | Status only | Warnings and attention states |

### Colour usage balance

A typical light-first page should feel mostly warm and calm:

- 60–70% warm cream / white surfaces.
- 15–25% ink, dark navy or forest surfaces and typography.
- 10–15% orange and supporting fruit accents combined.

These are visual guidelines, not hard-coded quotas. A branded orange hero or campaign page may use more orange, while reading-heavy pages should remain light.

### Contrast rules

- Use dark `ink` text on bright orange for ordinary buttons and UI labels. White text on `#FF7300` is not suitable for small body text because the contrast is limited.
- The white logo on orange remains an approved **graphic identity treatment**; do not reuse that colour pairing for small UI copy.
- Use `ink` on cream, white or peach for body copy.
- Do not place yellow text on white, orange text on peach, or muted text on a saturated surface without checking contrast.
- Aim for WCAG AA contrast: 4.5:1 for normal text and 3:1 for large text and meaningful UI graphics.
- Never rely on colour alone to communicate status; pair colour with a label or icon.

### Suggested CSS tokens

```css
:root {
  --color-brand: #FF7300;
  --color-brand-hover: #E85F00;
  --color-brand-soft: #FFE2CC;
  --color-peach: #FBCC98;
  --color-yellow: #FCD92A;
  --color-persimmon: #E35906;
  --color-red-accent: #D92603;

  --color-bg: #FFF4E6;
  --color-surface: #FFFFFF;
  --color-surface-warm: #F7EBDD;
  --color-ink: #202124;
  --color-ink-soft: #4B4B4B;
  --color-ink-muted: #77716A;
  --color-forest: #163B2D;
  --color-navy: #14252B;
  --color-line: #E8DCCD;

  --color-success: #18794E;
  --color-warning: #9A6700;

  --radius-sm: 10px;
  --radius-md: 18px;
  --radius-lg: 28px;
  --radius-pill: 999px;

  --content-max: 1280px;
  --page-gutter: clamp(20px, 5vw, 76px);
  --ease-standard: cubic-bezier(.22, 1, .36, 1);
}
```

---

## 4. Typography system

### Primary typeface: Geist

Use Geist for:
- Navigation and menus.
- Hero and section headings.
- Body copy and descriptions.
- Buttons, forms, labels and controls.
- Service titles, cards and interface previews.

Suggested weights:
- 400: body copy and descriptions.
- 500: navigation, labels and subtle emphasis.
- 600: section headings and buttons.
- 700: hero headlines and key messages.

Typography should feel contemporary, precise and confident. Avoid extremely tight tracking that harms readability, and avoid oversized headings that consume the whole mobile viewport.

### Technical typeface: Geist Mono

Use Geist Mono sparingly for:
- Section numbers and small eyebrow labels.
- System status labels and technical annotations.
- Process step numbers, metadata and short IDs.
- Tiny interface captions and code-like details.

Do not set long paragraphs in monospace.

### Script accent: Allura

Use Allura for the **complete tagline only** in the logo lockup:

“Engineering Systems. Elevating Businesses.”

Do not use Allura for body paragraphs, navigation, buttons, page headings or long content. The script should feel like a refined signature accent, not a second primary typeface.

### Recommended type scale

| Role | Desktop guidance | Mobile guidance |
|---|---:|---:|
| Hero heading | `clamp(3.5rem, 7.5vw, 7rem)` | `clamp(2.8rem, 12vw, 4.4rem)` |
| Section heading | `clamp(2.4rem, 5vw, 4.5rem)` | `clamp(2rem, 8vw, 3.1rem)` |
| Card heading | `1.35–2rem` | `1.2–1.5rem` |
| Body lead | `1.1–1.25rem` | `1rem–1.1rem` |
| Body | `1rem–1.1rem` | `1rem` |
| Eyebrow / metadata | `0.68–0.78rem` | `0.65–0.72rem` |

Use comfortable line-height: 1.05–1.15 for large display headings, 1.45–1.65 for body copy. Limit body text line length to roughly 60–75 characters where practical.

### Font loading

- Prefer self-hosted or locally bundled font files where licensing permits.
- Use the appropriate Geist variable font files and a real Allura font file; do not rely on screenshots or rasterised text for the website's actual typography.
- Set sensible fallback stacks.
- Avoid loading unnecessary font families and weights.
- Ensure font swapping does not cause severe layout shifts.

---

## 5. Visual language

### Overall art direction

**Warm editorial engineering with product-led storytelling.** The site should combine clean editorial layouts with tangible demonstrations of digital systems.

Key ingredients:
- Generous but purposeful whitespace.
- Clear alignment, strong grids and a considered editorial rhythm.
- Warm cream foundations, tangerine accents and restrained dark surfaces.
- Product interface previews that look like plausible real software.
- Custom diagrams showing connected systems and workflows.
- Occasional sculptural/ribbon geometry derived from the monogram's layered form.
- Small, consistent icons with clear meanings.
- Subtle gradients only where they add depth to a surface or visual focal point.

### Make the site visual, not text-dumb

Every major section should communicate through a combination of concise copy and a useful visual. Examples:
- Digital Engineering: responsive website, dashboard or product-interface preview.
- Search Intelligence: a search visibility / content-structure illustration using clearly labelled sample data.
- AI & Automation: a workflow diagram with human approval and integration points.
- Performance Marketing: a campaign-to-landing-page-to-measurement flow.
- Growth Intelligence: a diagnostic map showing business goals, bottlenecks and prioritised work.

Do not add visuals merely to fill space. Each visual must explain a service, show a real capability, demonstrate a process or strengthen brand recognition.

### Illustration and interface rules

- Prefer custom, simple vector diagrams and genuine interface mockups over generic stock imagery.
- Use consistent corner radii, shadows, icon sizes and spacing.
- Keep interface mockups readable at their display size.
- Label conceptual interface demonstrations as **illustrative concept** when they do not depict a deployed client product.
- Never show made-up revenue, campaign results, client logos, user counts or performance data as real. Clearly mark demo data.
- Do not generate text-heavy dashboards as images. Build important text and UI natively in HTML/CSS/React for crisp, accessible rendering.
- Do not imitate Creto's mascot, product screens, exact composition or graphic assets.

---

## 6. Iconography and app assets

### Icon style

- Use one coherent icon family, preferably Lucide-style outline icons or a small custom geometric set.
- Use consistent 1.5–1.75px stroke weight, rounded joins and consistent visual size.
- Use 16–20px icons for small controls, 20–24px for navigation and 28–40px for feature illustrations.
- Use orange selectively; default interface icons should use ink or muted ink.
- Do not mix emoji, filled illustrations and outline icons in the same navigation or feature row.
- Give icon-only controls accessible labels and visible focus states.

### Required application and browser assets

- Monogram favicon (`favicon.ico` plus PNG sizes where useful).
- Apple touch icon.
- PWA icons at 192×192 and 512×512.
- Browser theme colour and manifest background colour consistent with the approved identity.
- Social preview image (1200×630) with the approved logo, readable HTML-free artwork and restrained copy baked into a properly typeset design file—not AI-rendered text.
- A square social/avatar image using the standalone monogram.

Review the existing app icons and manifest before changing them. Ensure the manifest paths actually exist and point to the verified new assets.

---

## 7. Layout and component principles

### Navigation

- Keep the header clean, compact and consistent across pages.
- Use the horizontal wordmark without tagline in the desktop header; use the standalone monogram or compact wordmark on mobile if necessary.
- Provide a clear primary CTA, such as “Start a conversation”.
- Use an accessible navigation menu with keyboard support, escape-to-close and correct focus handling.
- Avoid a decorative settings/gear control unless it has a real user-facing purpose.

### Hero

- One clear headline explaining the business value.
- One short supporting paragraph.
- One primary and one secondary CTA at most.
- One strong visual anchor: a system diagram, original monogram-inspired sculpture, responsive interface preview or a short product walkthrough.
- Do not place multiple competing illustrations, floating cards and animations in the first viewport.
- On mobile, stack content in a clear reading order and keep the CTA visible without excessive scrolling.

### Service sections

- Use editorial service rows, split panels or a deliberate asymmetric grid rather than repeating identical generic cards.
- Each service should have a short description, a meaningful icon/visual, concrete capabilities and a relevant next step.
- Use accordions or tabs only when they genuinely reduce complexity; do not hide important content unnecessarily.

### Process section

Use a simple, visually connected process:

1. Discover — understand the business and goal.
2. Diagnose — identify friction and opportunities.
3. Architect — design the appropriate system and scope.
4. Engineer — build, integrate and test.
5. Improve — measure, maintain and refine where agreed.

A horizontal step line on desktop can become a vertical timeline on mobile. Keep the labels and explanations available to assistive technology.

### Work and credibility

- Feature only genuine projects, real screenshots and verified outcomes.
- If case studies are not ready, show selected capability demonstrations marked as concepts, or keep the section concise.
- Do not invent testimonials, client names, ratings, awards, metrics or partner badges.

### FAQ

- Use semantic `<details>`/`<summary>` or an accessible accordion component.
- Include clear plus/minus or chevron states.
- Animate height only if it remains accessible and does not cause layout instability.
- Keep answers concise and crawlable.

### Contact

- Make contact methods obvious and mobile-friendly.
- Keep existing verified contact details: `info@meningeslabs.com` and `+91 7671979762` where intended.
- Do not invent a physical office address. The business is remote-first and meetings can be arranged by prior agreement.

---

## 8. Motion and interaction language

Motion should make the website feel responsive, considered and alive—not like a game or an animation showcase. Use motion as feedback and explanation, not decoration.

### Core motion principles

1. **Purposeful:** every movement explains a relationship, confirms an action or guides attention.
2. **Subtle:** small distances and short durations are preferred.
3. **Consistent:** use a small set of easing curves and timing tokens.
4. **Performant:** animate transform and opacity wherever possible; avoid expensive layout and paint effects.
5. **Accessible:** respect reduced-motion preferences and never make essential information depend on animation.
6. **Calm:** no constant floating, pulsing, shaking or attention-seeking movement.

### Motion tokens

| Token | Duration | Use |
|---|---:|---|
| `motion-fast` | 140–180ms | Button feedback, icon shifts, focus/hover transitions |
| `motion-standard` | 200–280ms | Menus, tabs, card feedback and small panels |
| `motion-reveal` | 420–600ms | Scroll reveals and section entrances |
| `motion-feature` | 650–900ms | One-off process or hero illustration sequence |

Suggested easing:

```css
--ease-standard: cubic-bezier(.22, 1, .36, 1);
--ease-soft: cubic-bezier(.2, .7, .2, 1);
--ease-linear: linear;
```

### Approved micro-interactions

- Buttons: subtle colour transition and 1–2px lift on hover; press state returns to baseline.
- Text links: underline or arrow movement of 2–4px.
- Cards: border/background transition and a maximum 2–4px lift; avoid exaggerated scale.
- Navigation: smooth underline or colour change; do not animate the entire header on every scroll tick.
- Accordions: icon rotates or changes state; content opens without a sudden jump.
- Tabs: active indicator slides a short distance and content changes clearly.
- Diagram nodes: highlight the connected route when the user focuses or hovers a node.
- Form fields: clear focus border, error message and success feedback.
- Scroll reveal: opacity plus 8–16px vertical movement; stagger sibling elements by 40–80ms.

### Approved section-level motion

- A process line may draw from one step to the next once as it enters the viewport.
- A workflow diagram may reveal nodes and connectors sequentially.
- A small interface preview may show one short, understandable state change.
- A hero illustration may have a restrained one-time entrance or very slow ambient movement.
- A stat may count up only when it is a verified real metric; demonstration values must be labelled as sample data.

### Motion to avoid

- Scroll-jacking or forcing the visitor to scroll horizontally.
- Constant parallax on all sections.
- Infinite looping text, carousels or number counters.
- Aggressive cursor followers or custom cursors that replace the native pointer.
- Large elastic/bouncy movements on professional content.
- Heavy 3D or WebGL effects in every section.
- Auto-playing video with sound.
- Animation that blocks navigation or delays access to content.
- Animated background particles behind long text.

### Reduced motion

When `prefers-reduced-motion: reduce` is active:
- Remove parallax, looping ambient motion and large transforms.
- Make reveal content immediately visible.
- Keep interaction state changes instantaneous or near-instantaneous.
- Preserve all information and functionality.

---

## 9. User experience target

The intended visitor journey:

1. **First 5 seconds:** understand that MENINGES LABS engineers connected digital and growth systems for businesses.
2. **First 20 seconds:** identify the capabilities relevant to their problem.
3. **Exploration:** see a clear visual explanation of how one or more capabilities work together.
4. **Confidence:** understand the process, scope and evidence without inflated promises.
5. **Action:** know exactly how to start a conversation.

The experience should feel:
- Clear, not crowded.
- Sophisticated, not cold.
- Energetic, not loud.
- Technically capable, not jargon-heavy.
- Interactive, not distracting.
- Human, not robotic.

---

## 10. Copy and content guidelines

### Voice

- Clear, concise, confident and practical.
- Explain technology in terms of a business problem or useful outcome.
- Use active voice and specific verbs.
- Use technical language when it adds precision, but explain uncommon terms.
- Never promise guaranteed leads, rankings, sales, AI citations or autonomous business outcomes.

### Preferred messaging

**Primary brand line:**  
Engineering Systems. Elevating Businesses.

**Positioning line:**  
We engineer the digital infrastructure behind business growth.

**Supporting explanation:**  
From software and websites to applied AI, automation, search intelligence and customer acquisition, we connect the systems businesses need to move forward.

### Avoid

- Generic “digital transformation” claims without specifics.
- “Revolutionary AI” and “guaranteed growth” language.
- Fake client results, case studies, review counts or company statistics.
- Repeating the same service list in every section.
- Overlong paragraphs where a diagram, list or short example would explain better.

---

## 11. Responsive design rules

- Design mobile-first, then enhance for tablet and desktop.
- Avoid horizontal overflow at 320px and above.
- Use fluid typography and spacing with `clamp()` where appropriate.
- Stack two-column layouts on narrow screens; do not squeeze text and visuals into tiny columns.
- Make touch targets at least 44×44px where practical.
- Do not rely on hover for important information or controls.
- Keep cards, forms, accordions and navigation usable by touch and keyboard.
- Use mobile-specific crops for visual assets rather than shrinking wide compositions until they become unreadable.
- Ensure the logo remains legible in the header and does not push navigation off-screen.

---

## 12. Accessibility, performance and technical quality

### Accessibility

- Semantic landmarks and heading hierarchy.
- Keyboard-operable menus, tabs, accordions and controls.
- Visible focus states.
- Useful alt text for informative images; empty alt for decorative imagery.
- Sufficient colour contrast.
- Reduced-motion support.
- Do not communicate meaning through colour or animation alone.
- Ensure forms have labels, clear validation and understandable error messages.

### Performance

- Prioritise fast first render and content visibility.
- Use optimized local image assets and responsive image sizes.
- Lazy-load below-the-fold media.
- Avoid shipping a large animation library for a few small transitions.
- Use CSS transitions for simple interactions; use the existing Motion library only for sequences that genuinely need it.
- Avoid loading video or large 3D scenes on mobile unless the visitor initiates them.
- Prevent layout shift by reserving image and media dimensions.

### Technical baseline

The existing GitHub project was observed as a Next.js App Router application using Next.js 16, React 19 and Tailwind CSS 4. Verify the current local project before changing dependencies. Do not downgrade the stack or replace the router without a documented technical reason.

Preserve existing route URLs, metadata, sitemap, robots rules, FAQ content, contact details and founder material unless the owner explicitly approves a content change. Audit the current route registry because the repository has a larger route set than the README's “12 core pages” description.

---

## 13. Page experience direction

The following is a design direction, not permission to remove existing routes:

### Home

- Clear hero message, one visual anchor and strong contact CTA.
- Explain the connected-system idea with a simple animated diagram.
- Introduce core capabilities with distinct visual treatments.
- Show the five-step engagement process.
- Feature genuine work or clearly labelled concept demonstrations.
- End with concise FAQ and contact CTA.

### Services

- Explain the modular service system.
- Show how clients can combine capabilities without implying every client needs every service.
- Link to detailed capability pages.

### Capability pages

- Use a consistent structure but vary the central visual to match the service.
- Include what the service solves, what is included, how it works, what depends on the client and a useful next step.

### Industries / Hyderabad

- Keep local claims accurate.
- Do not create fake office/address claims or thin doorway pages.
- Use service-area context and genuine industry examples.

### About / Founder

- Retain accurate company philosophy and supplied founder details.
- Use the genuine founder photo where appropriate; do not create a synthetic replacement.

### Work / Insights

- Do not populate with fabricated case studies or articles.
- Clearly label concept work, or keep unavailable sections in a modest “being prepared” state.

### Contact

- Make email and WhatsApp/phone actions obvious.
- Keep the form short, accessible and reliable.

### Brand Assets

- Present only verified current brand files and correct usage variants.
- Retire or clearly mark obsolete logo versions.

---

## 14. Implementation priorities

### Phase 1 — Brand foundation

- Inspect every existing logo and icon file.
- Identify the latest approved orange/white monogram and lockups.
- Create one central theme/token file for colour, typography, radius, spacing and motion.
- Switch primary website typography to Geist and apply the Allura restriction.
- Remove obsolete burgundy styling from live UI after mapping all occurrences.

### Phase 2 — Core experience

- Rework header, footer, navigation, buttons, links and shared section layouts.
- Redesign homepage hero and the connected-system explanation.
- Establish service visual modules and process sequence.
- Improve FAQ, contact and mobile layouts.

### Phase 3 — Visual storytelling

- Add 2–3 high-quality service illustrations or native interface mockups.
- Add a light animated workflow diagram.
- Add restrained scroll reveals and interaction feedback.
- Use the existing animation tooling before adding new dependencies.

### Phase 4 — Quality and verification

- Test all existing routes and links.
- Verify logo and icon use across all pages.
- Verify favicon, Apple touch icon and PWA manifest asset paths.
- Test mobile widths, keyboard navigation and reduced motion.
- Run lint/type-check/build scripts available in the repo.
- Review performance, image loading, SEO metadata and sitemap.

---

## 15. Starter prompt for OpenCode

Copy the prompt below into OpenCode after placing this file at the root of the website repository as `MENINGES-LABS-Brand-Kit-v2.0.md`.

```text
You are working inside the existing MENINGES LABS website repository.

FIRST: read MENINGES-LABS-Brand-Kit-v2.0.md completely. Treat it as the current source of truth for brand colours, typography, logo rules, motion, visual direction and UX. Also inspect the existing README, route registry, app structure, shared layout/components, public assets, package.json, manifest, metadata, sitemap and robots implementation before changing anything.

GOAL
Rebrand and improve the existing website using the approved MENINGES LABS hybrid direction: warm editorial engineering + product-led storytelling. The result must feel polished, distinctive, useful and alive, without requiring heavy animations in every section.

APPROVED BRAND
- Brand orange: #FF7300.
- Warm cream: #FFF4E6; white: #FFFFFF.
- Main ink: #202124; deep forest: #163B2D; deep navy: #14252B.
- Supporting accents: peach #FBCC98, citrus yellow #FCD92A, persimmon #E35906 and red #D92603. Use accents sparingly.
- Geist is the primary typeface for all website UI and headings.
- Geist Mono is for short technical labels/metadata only.
- Allura is reserved for the complete tagline “Engineering Systems. Elevating Businesses.” in the tagline logo lockup. Do not split the tagline across fonts and do not use Allura for general page copy.
- Preserve the exact approved ML monogram artwork. Never regenerate or approximate the logo with AI. Audit existing files visually because older burgundy assets may coexist with newer orange identity files.

IMPORTANT CONSTRAINTS
- Do not replace the project with a starter template or rewrite the whole app blindly.
- Verify the actual local package versions and file structure before implementation. The connected repository was previously observed using Next.js 16, React 19 and Tailwind CSS 4; preserve the current stack unless a specific issue requires a change.
- Preserve every current public URL, page, useful content, contact detail, SEO metadata, sitemap, robots directives, FAQ content, founder information and working functionality.
- Do not invent office addresses, clients, testimonials, metrics, awards, case-study outcomes, search rankings or product features.
- Do not copy Creto's mascot, brand identity, illustrations, page composition or exact UI. Use only broad inspiration from its clear visual storytelling and demonstration-led approach.
- Do not make the website a text-only page. Every major section should pair concise copy with a purposeful visual, diagram, real interface preview or useful interaction.
- Do not add a mascot or complex 3D experience as a prerequisite. A simple original monogram-inspired visual or connected-systems diagram is sufficient for the first implementation.

DESIGN TASKS
1. Create a central, reusable design-token system based on the brand kit: colour, type, spacing, border, radius, shadows and motion.
2. Replace the old colour treatment consistently across the entire site. Remove obsolete burgundy branding from live components after identifying where it is used; do not delete the old master asset files.
3. Implement Geist consistently, with reliable local font loading/fallbacks. Add Allura only where the complete tagline lockup is displayed.
4. Audit and update header, navigation, footer, CTAs, buttons, cards, forms, FAQ accordions and shared page sections.
5. Improve the homepage with: (a) a concise, confident hero, (b) one strong visual anchor, (c) an explanation of how capabilities connect, (d) distinctive capability sections, (e) a five-step process — Discover, Diagnose, Architect, Engineer, Improve, (f) genuine work or clearly labelled concept demonstrations, and (g) a clear contact CTA.
6. Make service pages visual and specific. Use service-appropriate interface previews and diagrams: engineering/interface preview; search structure/visibility diagram; AI automation workflow; performance acquisition-to-conversion flow; growth diagnostic map. Use native HTML/CSS/SVG/React for legible interface text rather than embedding text in generated images.
7. Add only subtle, purposeful motion: 140–180ms micro-interactions; 200–280ms menu/tab/panel transitions; 420–600ms section reveals; 8–16px reveal distance; 40–80ms stagger. Use transform/opacity where possible. Respect prefers-reduced-motion. No scroll-jacking, excessive parallax, constant floating, aggressive cursor effects or auto-playing sound.
8. Improve responsive behaviour. Mobile should be intentionally composed, with no horizontal overflow, small text, compressed two-column blocks or hover-only essential information.
9. Use one consistent outline icon style. Icons must have consistent stroke weight and accessible labels when icon-only.
10. Verify logo, favicon, Apple touch icon, PWA manifest icons and social preview. Ensure every manifest and metadata path points to a real verified asset. Use the correct current orange/white symbol; do not guess based on filename.

VISUAL QUALITY BAR
- The website must not look like a generic SaaS template or an overdecorated AI agency.
- Use generous but purposeful whitespace, strong typographic hierarchy, clear visual rhythm, warm surfaces, orange emphasis and occasional deep sections.
- Prefer a few excellent visuals over dozens of generic cards.
- Keep interface demos believable and mark sample data as illustrative.
- Keep text readable and content searchable; do not bake meaningful copy into image files.
- Preserve the site’s business clarity: MENINGES LABS is a digital engineering and growth partner, not only an ads agency or website shop.

EXECUTION
- Begin with an audit and a concise implementation plan in your working notes, then make the actual code changes.
- Implement in small, coherent phases; do not stop after writing another planning document.
- Reuse existing components and the current Motion dependency if appropriate. Avoid adding libraries unless they clearly earn their cost.
- After changes, run the available lint, type-check and production build commands. Fix errors caused by your changes.
- Test all current routes, navigation, accordions, CTAs, contact links, metadata, sitemap, robots, PWA manifest, mobile breakpoints, keyboard access and reduced-motion behaviour.
- Report precisely what changed, what was tested, any remaining issues and which assets need the owner's visual approval. Do not claim tests passed if you did not run them.

Start by inspecting the repository; then implement the rebrand according to this brief.
```

---

## 16. Final brand checklist

Before approving a page or asset, confirm:

- [ ] The approved ML monogram is used without alteration.
- [ ] The current orange identity is used consistently.
- [ ] Geist is the primary typeface.
- [ ] Allura appears only as the complete tagline treatment.
- [ ] Colours have sufficient contrast for text and controls.
- [ ] The page communicates through useful visuals as well as copy.
- [ ] Motion is subtle, purposeful and reduced-motion safe.
- [ ] Icons belong to one consistent family.
- [ ] No unsupported business claims or fabricated data appear.
- [ ] Mobile, tablet and desktop layouts are all considered.
- [ ] Keyboard navigation and focus states work.
- [ ] Favicon, social and PWA asset paths are verified.
- [ ] Existing working routes, contact details and SEO foundations remain intact.

**The guiding principle:** Make MENINGES LABS feel like an intelligent engineering partner: visually distinctive, easy to understand, calm to explore and credible enough to trust.
