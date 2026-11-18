# MENINGES LABS — Hybrid Website Rebrand & Implementation Brief

**Version:** 1.0  
**Prepared:** 13 November 2026  
**Project:** Website rebrand and experience redesign  
**Website:** https://meningeslabs.com/  
**Repository:** https://github.com/shaikaakif/MeningesLabs  
**Local project:** `C:\Users\aakif\Desktop\MeningesLabs-Website`  
**Direction:** Hybrid — editorial engineering + product-led storytelling

---

## 1. Executive direction

Reposition the MENINGES LABS website as a premium digital engineering and growth partner. The experience should combine the visual confidence of an editorial design studio with the clarity and product demonstrations of a modern technology platform.

The site must communicate that MENINGES LABS does not simply sell isolated websites, advertisements or AI tools. It connects digital engineering, applied AI, workflow automation, search visibility, performance marketing and growth intelligence into systems shaped around real business needs.

The result should feel:

- **Engineered:** precise layouts, coherent information architecture, clear system diagrams and credible technical details.
- **Editorial:** strong typography, memorable headlines, considered whitespace and restrained composition.
- **Product-led:** concrete demonstrations, interface previews, capability modules and a clear explanation of how the work operates.
- **Commercially grounded:** every capability connects to a business problem, a deliverable or a useful outcome.
- **Distinctive:** the tangerine identity and approved ML monogram are recognisable without making every section orange.

### Core brand lockup

**MENINGES LABS**  
**Engineering Systems. Elevating Businesses.**

The company name uses **Geist**. The complete tagline uses **Allura** as one continuous typeface. Do not split the tagline between fonts. The tagline is a brand lockup element, not a general website body font.

### Primary website message

> We engineer the systems behind business growth.

Supporting explanation:

> MENINGES LABS connects software, applied AI, automation, search and performance marketing into practical systems shaped around how a business works.

---

## 2. Inspiration reference: Creto

Reference: [creto.app](https://creto.app/)

The current Creto homepage uses a clear product-storytelling sequence: a hero with a product/interface preview, a set of capability previews, a numbered process, a visual automation-builder demonstration, feature comparison, FAQ and a strong close. Its current copy is creator-focused and should not be reused. The useful reference is its **demonstration-first structure**, not its brand, wording or exact layouts.

### Translate the pattern for MENINGES LABS

| Creto pattern | MENINGES LABS interpretation |
|---|---|
| Hero with visible product surfaces | Hero with a coherent connected-business system visual and a compact engineering/interface preview |
| Capability/toolkit modules | Five clear service divisions, each with its own visual and concrete deliverables |
| Numbered “how it works” sequence | Discovery → diagnosis → architecture → engineering → integration → optimisation |
| Flow-builder demonstration | A clearly labelled illustrative workflow/system architecture showing how enquiries, CRM, AI and follow-up can connect |
| Feature comparison | A transparent explanation of engagement models and what a project, retainer or managed system may include; no invented price table |
| FAQ | Useful service, scope, process, local-market and AI-safeguard questions |
| Strong closing CTA | A focused invitation to discuss a real business requirement |

**Do not copy:** Creto's logo, colours, exact card shapes, creator language, visual assets, UI screenshots, slogans or page composition. Do not imply MENINGES LABS sells a self-serve SaaS platform if the offering is a tailored engineering and services engagement.

---

## 3. Existing project audit — baseline to preserve

The public GitHub `main` branch was reviewed while preparing this brief. The checked-in project is newer than the older stack description in previous planning notes.

### Current repository baseline

- Next.js `^16.0.0`
- React and React DOM `^19.2.0`
- Tailwind CSS `^4.1.0`
- Motion `^12.23.0`
- TypeScript `^5.8.0`
- Existing local font packages include DM Sans, DM Serif Display, Cormorant Garamond, Manrope and IBM Plex Mono.

**Do not downgrade the project to Next.js 14, React 18 or Tailwind 3.** Use the actual checked-in package manifest as the implementation source of truth. Do not upgrade packages during this visual rebrand unless a verified technical blocker requires it.

### Important existing files and architecture

- `app/content.ts` — route registry, page copy, FAQ group references, contact details and social links.
- `app/[slug]/page.tsx` — shared dynamic page route and per-page metadata.
- `app/page.tsx` and `app/page-content.tsx` — homepage and shared page composition.
- `app/site-shell.tsx` — shared header, navigation and site shell.
- `app/globals.css` — current design tokens and global component styling.
- `app/layout.tsx` — root metadata and layout.
- `app/manifest.ts` — PWA manifest.
- `app/robots.ts` — crawler rules.
- `app/sitemap.ts` — sitemap with page image associations.
- `app/faq-section.tsx` — FAQ presentation.
- Existing visual/interaction modules include `app/flux-lines.tsx`, `app/hero-reel.tsx`, `app/layers-explorer.tsx` and `app/service-diagram.tsx`.
- Custom route files currently include `/about`, `/founder`, `/brand-assets` and `/hyderabad`.
- Founder portrait exists at `public/Aakif_founder.jpg`.

The route registry in `app/content.ts` currently contains these 15 entries (home plus 14 slugs):

1. `/` — Home
2. `/services`
3. `/digital-engineering`
4. `/search-intelligence`
5. `/performance-marketing`
6. `/ai-automation`
7. `/growth-intelligence`
8. `/industries`
9. `/hyderabad`
10. `/work`
11. `/about`
12. `/founder`
13. `/insights`
14. `/contact`
15. `/brand-assets`

The README calls out 12 core pages, while the route data currently defines 15 entries. Audit the rendered website and registry before changing navigation. **Preserve all current public URLs and useful content** unless a redirect and migration are deliberately planned. Do not silently rename slugs.

### Existing brand asset locations

The repository already contains a structured brand asset library:

- `meninges-labs-brand-assets/01-primary-logo/`
- `meninges-labs-brand-assets/02-logo-with-descriptor/`
- `meninges-labs-brand-assets/03-symbol/`
- `meninges-labs-brand-assets/04-app-icons/`
- `meninges-labs-brand-assets/05-guidelines/`
- `public/brand-assets/logos/`
- `public/brand-assets/app-icons/`
- `public/brand-assets/photography/`
- `public/brand-assets/social/`

Public brand files currently include primary-logo, descriptor-logo and ML-monogram PNGs, plus 192, 512 and 1024 app icons and a favicon. Root-level `public/icon-192.png`, `public/icon-512.png`, `public/icon-1024.png`, `public/favicon.ico` and `public/apple-touch-icon.png` also exist.

**Asset rule:** inspect the actual files before selecting them. The current repository may still contain the older burgundy identity. Do not assume a filename proves that an asset is the newly approved orange/white identity. Never use the blurry AI-generated logo banner as a production logo. Use the approved original monogram geometry and a clean vector lockup; set text with real font files or SVG text converted to outlines for final export.

### Current contact details already in route data

- Email: `info@meningeslabs.com`
- Phone: `+91 7671979762`
- WhatsApp URL is already generated in `app/content.ts`.
- Instagram: `https://www.instagram.com/meningeslabs/`
- No public walk-in office address. Keep the remote-first Hyderabad and India wording accurate; do not invent an office address or locality.

---

## 4. Brand identity system

### 4.1 Logo usage

The approved visual is the white, layered ML monogram with the company name. The symbol consists of three integrated ribbon-like strokes and must remain visually consistent. Do not replace it with a generic ML lettermark, an arrow, a brain icon or an unrelated generated mark.

Create and use these variants from one approved master:

1. **Primary horizontal lockup:** ML monogram + divider + “Meninges Labs”.
2. **Horizontal lockup with tagline:** monogram + divider + company name + complete tagline “Engineering Systems. Elevating Businesses.”
3. **Standalone monogram:** avatar, favicon and app icon.
4. **Wordmark-only:** “Meninges Labs” where a symbol would be redundant.
5. **Stacked lockup:** symbol above company name for square or narrow placements.
6. **Light and dark versions:** designed for light surfaces and dark surfaces.

Use the no-tagline horizontal lockup in the compact site header. The full tagline lockup belongs in the footer, brand-assets page, social/print contexts and selected brand moments where it has enough room to remain legible.

**Logo production requirements:** vector master (SVG), transparent PNG exports, light/dark variants, square symbol export, icon exports and a documented clear-space/minimum-size rule. Do not stretch, skew, crop or add effects to the mark.

### 4.2 Colour palette

The new identity is orange-led. The previous burgundy/brick-red palette is retired for the new website system and should not appear beside the new orange mark.

| Token | Hex | Primary use |
|---|---:|---|
| Tangerine | `#FF7300` | Main brand accent, hero accents, active states, key artwork and selected section backgrounds |
| Warm paper | `#FFF7ED` | Main light page background |
| Soft citrus | `#FFEBD7` | Secondary light sections, subtle panels and hover surfaces |
| Deep ink | `#17191B` | Main text, headings and dark text on orange |
| Deep technical | `#082B3A` | Dark product-demo panels and strong CTA/statement sections |
| White | `#FFFFFF` | Logo mark and content on deep technical backgrounds |
| Muted text | `#65615D` | Supporting text on light backgrounds |
| Hairline | `rgba(23,25,27,.14)` | Dividers, borders and table rules |

Colour proportions:

- 55–65% warm paper/white surfaces.
- 15–20% deep technical/deep ink surfaces.
- 10–15% orange accents and focused orange panels.
- Remaining area for soft citrus, muted text and imagery.

These are starting proportions, not rigid limits. The goal is visual rhythm, not an all-orange website.

**Contrast rule:** `#FF7300` is the signature brand orange, but do not assume small white text on it is accessible. Use deep ink for text on orange buttons and orange panels unless a measured contrast check confirms otherwise. White is acceptable for the monogram/logo artwork as a graphic mark. Use white text on deep technical surfaces.

### 4.3 Typography

**Primary interface and wordmark family: Geist Sans.** Use for headings, body copy, navigation, buttons, forms, labels and the company name in the new vector lockup.

**Technical accent: Geist Mono.** Use sparingly for eyebrow labels, section indexes, small metadata, code-like values and diagram labels.

**Brand-script accent: Allura Regular.** Use the same Allura face for the *entire* tagline, without mixing in another font halfway through the sentence. Restrict it to the full brand tagline and occasional large decorative brand moments. Do not use it for body text, navigation, buttons, form labels or paragraphs.

Implementation preference:

- Use the official Geist npm package in the existing Next.js app: `geist` with `GeistSans` and `GeistMono` from its font entry points. Review the package's current Next.js compatibility instructions before adding `transpilePackages` or changing config.
- Self-host Allura with `@fontsource/allura` (Regular 400 only) or a checked-in WOFF2 from the official Fontsource distribution. Prefer self-hosting to avoid a runtime dependency on Google Fonts.
- Remove obsolete font imports only after confirming no page/component still depends on them.
- Set font variables in the root layout and centralise typography tokens in the global stylesheet.

Suggested scale (responsive with `clamp()`):

| Role | Family | Weight / guidance |
|---|---|---|
| Hero headline | Geist Sans | 600–700, tight leading, controlled line length |
| Section headline | Geist Sans | 550–650 |
| Card/service title | Geist Sans | 550–600 |
| Body | Geist Sans | 400–450, generous line-height |
| Navigation/buttons | Geist Sans | 500–600 |
| Eyebrows/meta | Geist Mono | 400–500, uppercase, tracked |
| Full brand tagline | Allura | 400, one consistent face, legible display size |

Avoid a third display typeface. Do not continue the older DM Serif Display / Cormorant + DM Sans system as the new main identity.

---

## 5. Design language and layout rules

### Overall visual principle

**Editorial shell, product-led core.** Use restrained editorial composition for brand storytelling and use precise interface surfaces, diagrams and demonstrations when explaining capabilities.

### Grid and spacing

- Maximum overall content width: approximately 1,360–1,440px.
- Main reading/content width: approximately 1,080–1,200px.
- Desktop: 12-column grid, with asymmetric 5/7 or 4/8 compositions where useful.
- Tablet: 6-column or stacked arrangements.
- Mobile: single-column, touch-first flow.
- Side gutters: use responsive tokens, approximately 20–24px on small phones and 5–6vw on larger screens.
- Base spacing unit: 4px; build a consistent 4/8/12/16/24/32/48/64/96 scale.
- Use deliberate whitespace, but every large empty area must have a compositional purpose.

### Shapes and surfaces

- Use mostly square or subtly rounded geometry.
- Use generous 20–28px radius only for selected product-preview panels, not every card.
- A few signature asymmetric corners are acceptable in major statement or CTA panels.
- Use thin hairlines and clean section boundaries.
- Avoid excessive floating pills, generic rounded-card grids and gradients everywhere.
- No glassmorphism as the default treatment.

### Imagery and illustration

Use original artwork, genuine project screenshots, controlled 3D compositions, simple architectural diagrams and real UI previews. Use a consistent Citrus palette: tangerine, warm paper, white and deep technical.

Avoid generic robot/brain imagery, generic stock photos, glowing AI brains, random floating dashboard cards and AI-generated text/logos. All text in visuals must be rendered as actual HTML/SVG text, never baked into generated images.

### Iconography

Use one coherent outline icon family or a small set of custom SVGs. Keep stroke weight consistent (approximately 1.5–1.75px at a 24px viewBox). No emoji icons. Use custom icons for the five core capability divisions if the existing icon set cannot express them consistently. Do not introduce a large icon dependency solely for decoration.

---

## 6. Information architecture and page design

Preserve the current route registry and URL slugs. Improve how those pages are presented and navigated rather than replacing the route model.

### Primary navigation

Recommended desktop header:

- Left: compact horizontal monogram + “Meninges Labs” lockup (no tagline at this size).
- Centre/right: Services, Industries, About, Founder.
- Primary CTA: “Start a conversation” or “Connect”.
- Menu control: a clearly labelled “Explore” button, replacing the ambiguous gear-only affordance. It opens the existing navigation experience as a polished full-screen/large overlay.

The Explore panel should organise all routes into logical groups: Capabilities, Company, Resources and Contact. Include active-page state, clear close control and keyboard support.

### 15 current route entries

#### 1. `/` — Home

Purpose: explain the value proposition within the first viewport and lead visitors into capabilities or contact.

Recommended section sequence:

1. Hero: concise eyebrow, bold headline, supporting paragraph, primary and secondary CTA, one distinct visual demonstrating connected business systems.
2. Connected-systems overview: a visual map connecting engineering, AI/automation, search, acquisition and measurement.
3. Capability modules: the five current service divisions with strong visuals and clear links.
4. Product-led demonstration: an illustrative system/workflow visual. Clearly label it “Illustrative system architecture” if it is not a real deployed client system.
5. Engagement process: Discover → Diagnose → Prioritise → Design → Engineer → Integrate → Improve.
6. Work/credibility: show only real projects and actual evidence. Until publishable case studies exist, use a restrained “Selected work is being prepared” state rather than invented metrics or testimonials.
7. FAQs: a focused subset of real answers.
8. Closing CTA and footer with the brand lockup.

Suggested hero headline:

> Engineering the systems behind business growth.

Supporting copy:

> We connect digital engineering, applied AI, automation, search and performance marketing into practical systems shaped around how your business works.

CTA labels: “Discuss a project” and “Explore capabilities”.

#### 2. `/services` — Services overview

Purpose: show the connected practice and explain that engagements are modular, not a forced bundle.

- Introduce the five service divisions.
- Use a comparison/relationship diagram to show where they connect.
- Explain how projects are scoped around a diagnosed business need.
- Include related links and the relevant FAQ groups.

#### 3. `/digital-engineering` — Digital Engineering

Include websites, SaaS platforms, custom software, dashboards, applications, integrations and ongoing technical care. Use actual interface/device mockups only when clearly representative. Explain discovery, design, architecture, build, QA and deployment.

#### 4. `/search-intelligence` — Search Intelligence

Cover technical SEO, local SEO, content architecture, structured data, AEO and GEO. Use a visual model for discoverability → understanding → answer visibility, but do not promise rankings, citations or traffic. Explain that SEO, AEO and GEO overlap and depend on content quality, authority, crawl access, competition and platform changes.

#### 5. `/performance-marketing` — Performance Marketing

Cover Meta and Google Ads, campaign strategy, creative direction/production coordination, landing experiences, conversion tracking and reporting. Show the acquisition loop: offer → audience → creative → landing experience → qualified enquiry → measurement. Clearly separate client-funded ad spend from management fees. No guaranteed lead or ROAS claims.

#### 6. `/ai-automation` — Applied AI & Automation

Cover AI assistants/agents, enquiry handling, lead qualification, CRM updates, appointment scheduling, follow-ups and operational workflows. Create an interactive or animated workflow diagram with clear trigger → decision → action → human escalation steps. Mark demo data as illustrative. Include consent, human handoff, approved knowledge sources, permissions and monitoring boundaries.

#### 7. `/growth-intelligence` — Growth Intelligence

Explain diagnostics, audits, prioritisation, customer journey/funnel analysis, reporting and growth roadmaps. Use a roadmap or system review visual rather than a generic stock dashboard.

#### 8. `/industries` — Industries

Show the sectors the business can credibly serve, based on real experience and delivery capability. Potential examples already discussed include real estate, architecture/interiors, healthcare, manufacturing and hospitality. Label them as areas of focus/fit, not established client verticals unless supported by real work. Avoid invented client logos.

#### 9. `/hyderabad` — Hyderabad

Retain the local search landing page. Explain Hyderabad relevance and remote-first service delivery accurately. Do not create fake office imagery, map pins, street addresses or locality doorway pages. Keep a useful local CTA and cross-links.

#### 10. `/work` — Work / Case studies

Keep the route, but only publish real projects with approved screenshots, project context, scope, technologies and verifiable outcomes. Until there is approved evidence, show a designed coming-soon state and retain the current noindex setting. Do not manufacture sample client work and present it as completed work.

#### 11. `/about` — About

Explain the purpose, engineering philosophy, modular service model, operating principles and how the disciplines connect. Avoid unsupported company-history claims.

#### 12. `/founder` — Founder’s Desk

Use the real `public/Aakif_founder.jpg` portrait. Keep the approved designation “Founder & AI Product Developer” only if it remains accurate. Link “Explore my portfolio” to `https://shaikaakif.com` in a new tab with `rel="noopener noreferrer"`. Do not add unverified credentials, employment history or achievements.

#### 13. `/insights` — Insights

Retain the route. Publish only complete, useful articles. Until then, show a deliberate coming-soon state and retain noindex. Do not expose empty tag/category archives or thin placeholder posts.

#### 14. `/contact` — Contact

Create a clear conversion page with WhatsApp, email and phone actions. Use `info@meningeslabs.com` and the existing phone/WhatsApp values in `app/content.ts`. If a form exists or is added, validate input, provide success/error states and state how submitted information is handled. Do not add a public office address.

#### 15. `/brand-assets` — Brand assets

Keep this utility page. Display the approved current logo family, monogram, app icon, favicon and social preview with accessible names and download links. Remove/retire obsolete burgundy assets from the displayed “official” set once the new master assets are approved and in place. Preserve archived files outside the live identity rather than silently deleting historical sources.

---

## 7. Key components and interaction specifications

### 7.1 Header and Explore navigation

- Sticky, compact header with a neutral surface and subtle border/shadow only when needed.
- On scroll, preserve legibility and avoid layout jumps.
- Explore control must be a real button with `aria-expanded`, `aria-controls` and a clear accessible name.
- Overlay supports Escape to close, focus trapping, focus return to trigger and keyboard navigation.
- Body scroll is locked while overlay is open.
- On mobile, provide a full-screen navigation view with a clear close button; never use hover as the only interaction.

### 7.2 Hero visual

Use one high-quality visual concept, not a collage of random dashboard cards. Preferred concept: an architectural “connected systems” composition with the monogram’s layered-ribbon language echoed subtly in geometry, paired with one authentic product/interface preview.

Do not render the hero as a giant phone mockup unless the content is genuinely mobile-first. Avoid tiny text in hero visuals. Any interface text that communicates information must be actual HTML, not part of a bitmap.

### 7.3 Capability modules

Each capability module should contain:

- Number/label.
- Distinct visual or mini-interface.
- Service name.
- One-sentence business purpose.
- A short set of deliverable examples.
- “Explore capability” link.

Use varied but related compositions rather than five identical cards. Ensure the layout works on touch devices.

### 7.4 Workflow/system demonstration

Build a single strong reusable diagram component with accessible labels. Example illustrative path:

`New enquiry → Qualification → CRM record → Human/AI response → Booking or follow-up → Measurement`

Add branches only where they improve understanding. Use CSS/SVG/React elements for diagram labels and nodes. Label the component as illustrative, not a live client system. If controls are interactive, they must change visible content and support keyboard use.

### 7.5 FAQ

- Preserve the existing question/answer data in `app/content.ts` and existing FAQ component where possible.
- Use semantic `<details>/<summary>` or accessible disclosure primitives.
- Clear plus/minus state, visible focus, comfortable touch target and readable answer width.
- Do not hide core service copy exclusively inside interactions.

### 7.6 Footer

- Full logo/tagline lockup at a readable size.
- Clear groups: Explore, Capabilities, Company and Contact.
- Current contact links and verified Instagram only; leave unsupported social accounts out.
- Copyright line with current year generated dynamically or maintained appropriately.
- Brand-assets link can sit in a secondary/legal utility row.

---

## 8. Icons, favicon and PWA assets

The public repository already contains app icon assets and a root-level icon set. Audit the existing images visually before replacement. Keep the icon source consistent with the approved ML monogram.

### Required mappings

- Browser favicon: `public/favicon.ico` or the App Router file convention under `app/` (choose one authoritative implementation; avoid duplicates that conflict).
- Apple touch icon: `public/apple-touch-icon.png` or the App Router convention.
- PWA: 192×192 and 512×512 PNG icons with accurate manifest paths.
- Large source/master: 1024×1024 PNG.
- Social share image: 1200×630 image with brand mark and real HTML/vector artwork when generated.
- App/theme background and theme colour should align with the orange/cream system.

`app/manifest.ts` currently references root paths `/icon-192.png`, `/icon-512.png` and `/icon-1024.png`; those files are present in `public/`. Keep the paths accurate when updating them. The existing detailed icon files also live under `public/brand-assets/app-icons/`; avoid creating a second conflicting set unnecessarily.

### Social preview

Create one 1200×630 Open Graph image that uses the approved logo artwork and real typography. Do not use AI-rendered lettering. Check the preview at small social-card size and ensure the logo is not clipped.

---

## 9. Motion and micro-interaction system

Use the existing `motion` package only where motion improves comprehension or feedback. Keep the interface fast and calm.

Recommended motion:

- Hero visual: subtle, slow entrance or restrained movement; no endless heavy animation.
- Section reveals: short opacity/translate transitions, staggered only for grouped elements.
- Capability preview: hover/tap changes to a clear visual state.
- Workflow diagram: animate the active path in response to user selection, not an endless autoplay loop.
- Buttons/links: small colour/position response with reduced-motion fallback.
- Navigation overlay: one clean open/close transition.

Rules:

- Respect `prefers-reduced-motion`.
- No scroll hijacking, forced horizontal scrolling, cursor-following decorations, or long entrance delays.
- Do not animate every element.
- Avoid large canvas/WebGL effects unless they are demonstrably light and meaningful.
- Keep all content visible and usable when animations are disabled.

---

## 10. SEO, AEO, GEO and technical requirements

The existing SEO intent playbook is already in the repository: `MENINGES-LABS-SEO-Search-Intent-Playbook-v1.md`. Use it as the source for query intent and page-to-keyword mapping. Do not create a competing keyword list or add pages solely to repeat location terms.

### On-page and technical SEO

- Preserve and improve the existing per-route metadata in `app/content.ts` and `app/[slug]/page.tsx`.
- Use unique, accurate title and meta description for every indexable page.
- Canonical URLs must match the final route.
- Keep the sitemap in sync with all indexable public pages; exclude routes intentionally marked noindex.
- Continue to include image references within the sitemap page entries where appropriate. Images are associated with their containing page; do not list image files as separate website pages.
- Validate `robots.txt`, sitemap, canonical URLs and status codes after deployment.
- Add appropriate Organization, WebSite and Person structured data with only verified properties. Do not invent a postal address, aggregate ratings, social profiles, awards or client relationships.
- Use meaningful heading hierarchy, descriptive links, image alt text and crawlable server-rendered text.
- Maintain useful internal links between related services, Hyderabad, About, Founder and Contact.

### AEO/GEO content quality

- Explain services in direct language and answer real customer questions.
- Keep important definitions and claims visible in page content.
- Use accurate, maintained FAQs; avoid keyword-stuffed or repetitive question blocks.
- Distinguish SEO, AEO and GEO accurately; do not promise placements or AI citations.
- Do not add hidden SEO text, invisible blocks or doorway pages.
- Keep content readable for users first and interpretable by crawlers second.

### Performance and accessibility

- Use Next.js `Image` for raster media with correct dimensions and sizes.
- Prioritise the hero/LCP asset; lazy-load non-critical below-the-fold visuals.
- Avoid unnecessarily large video/canvas assets; provide poster/fallback states.
- Use semantic landmarks, keyboard access, visible focus, labels and sufficient contrast.
- Ensure all functional controls have accessible names.
- Ensure layouts work at 320px width through large desktop.
- Check Core Web Vitals in production after deployment; do not claim a score before measurement.

---

## 11. Content and credibility rules

Use the current route data as the starting content source. Improve clarity and presentation, but do not invent evidence.

Never fabricate:

- Customer names or logos.
- Testimonials or quotes.
- Project outcomes or ROI figures.
- Client counts, employee counts or years of experience.
- Search rankings, traffic increases or AI citations.
- Partner certifications or platform status.
- Office locations or service coverage beyond what is accurate.

When a case study, testimonial or metric is unavailable, use a truthful coming-soon state or a clearly labelled concept demonstration. Distinguish illustrative sample workflows from systems deployed for a client.

### Brand voice

Confident, precise, intelligent, calm and commercially aware. Prefer plain explanations of the business problem and system being built. Avoid generic AI hype and absolute performance guarantees.

---

## 12. Technical implementation rules

1. Work in the existing repository and App Router structure; do not scaffold a new project.
2. Inspect the current page, route registry, layout, shell, global CSS, manifest, sitemap, robots and existing assets before editing.
3. Preserve all working URLs and current useful copy. Update navigation labels and content only with a clear route/content map.
4. Use central design tokens for colours, typography, spacing, borders, radii and motion.
5. Add Geist and Allura dependencies only if they are not already installed. Use local/self-hosted font assets for production.
6. Keep most pages as Server Components. Add Client Components only for genuinely interactive UI.
7. Reuse the existing Motion dependency; do not introduce duplicate animation libraries.
8. Use the existing `app/content.ts` data model where practical. Do not duplicate page content in multiple components.
9. Keep custom route implementations (`about`, `founder`, `brand-assets`, `hyderabad`) working.
10. Do not rewrite the sitemap or robots logic without checking all current route flags and image mappings.
11. Preserve contact actions and validate them on desktop and mobile.
12. Do not remove a current feature until the replacement is implemented and tested.
13. Keep `npm run build` passing. Fix TypeScript, lint/build and hydration issues rather than suppressing errors.
14. Avoid broad dependency updates, framework migrations or configuration rewrites as part of the visual refresh.

### Suggested component organisation

Adapt to the current codebase rather than forcing this exact tree:

```text
app/
  layout.tsx
  globals.css
  content.ts
  site-shell.tsx
  page.tsx
  page-content.tsx
  components/
    site-header.tsx
    explore-navigation.tsx
    site-footer.tsx
    brand-lockup.tsx
    section-eyebrow.tsx
    capability-module.tsx
    capability-grid.tsx
    workflow-demo.tsx
    process-steps.tsx
    faq-section.tsx
    contact-actions.tsx
    case-study-placeholder.tsx
    section-reveal.tsx
  ...existing route files
public/
  brand-assets/
    logos/
    app-icons/
    social/
  images/
```

Do not move every existing file simply to match this example. Refactor only when it makes the existing implementation clearer and more maintainable.

---

## 13. Implementation phases

### Phase 0 — Audit and baseline

- Confirm branch and working tree state.
- Record existing routes and current screenshots at desktop/mobile sizes.
- Run the current build and note existing errors before changes.
- Inspect all candidate logo/icon assets visually.
- Identify which sections/components are reused and which are custom pages.
- Prepare a list of files to change and files to preserve.

**Exit condition:** a clear baseline and no unrecorded loss of existing behaviour.

### Phase 1 — Brand foundation

- Replace old colour tokens with the new Citrus engineering palette.
- Install/configure Geist Sans and Geist Mono.
- Add self-hosted Allura Regular and scope it to the entire tagline lockup only.
- Implement the official logo variants using clean vector artwork and true typography.
- Update favicon, Apple touch icon, PWA icons, manifest theme colours and social preview.

**Exit condition:** header/footer/logo/icon specimens are crisp, consistent and correct on light and dark backgrounds.

### Phase 2 — Global site shell

- Redesign header, Explore overlay and footer.
- Add global grid, type scale, spacing, buttons, links, eyebrow labels and section surfaces.
- Confirm keyboard, focus, overlay and mobile navigation behaviours.

**Exit condition:** every route shares a coherent responsive shell.

### Phase 3 — Homepage experience

- Redesign the hero and its system visual.
- Build connected-systems overview and capability modules.
- Add the process sequence and illustrative workflow demo.
- Rebuild credibility, FAQs and final CTA using real content only.

**Exit condition:** homepage clearly communicates what MENINGES LABS does and how it works within the first screen and throughout the page.

### Phase 4 — Service and company pages

- Update service overview and each capability route.
- Refine Industries, Hyderabad, About, Founder, Work, Insights, Contact and Brand Assets.
- Preserve existing slug paths and route metadata.

**Exit condition:** all current routes render correctly and share the new brand system.

### Phase 5 — Search, quality and release

- Validate metadata, sitemap, robots, manifest, favicon and social preview.
- Test all links, CTAs, forms, accordions and navigation.
- Test 320px, 375px, 768px, 1024px and wide desktop layouts.
- Test reduced-motion, keyboard navigation, contrast and image alt text.
- Run production build and resolve errors.
- Inspect actual deployed pages and search console results after deployment.

**Exit condition:** no broken routes/assets, no horizontal overflow, successful production build and verified metadata/icon delivery.

---

## 14. Acceptance checklist

### Brand
- [ ] Approved ML monogram geometry is unchanged.
- [ ] New orange identity has replaced old burgundy identity across visible site surfaces.
- [ ] Geist is used for the company name and all interface typography.
- [ ] The complete tagline uses Allura only; no font splitting.
- [ ] Header uses the compact no-tagline logo; footer/brand page can use full lockup.
- [ ] Logo is vector/crisp and not a blurry generated bitmap.

### Experience
- [ ] Hybrid editorial + product-led design is visually consistent.
- [ ] Hero tells the visitor what MENINGES LABS engineers.
- [ ] Capabilities have clear purpose, deliverables and links.
- [ ] Workflow/product visuals are labelled if illustrative.
- [ ] No generic stock dashboard collage or fake live metrics.
- [ ] CTA journey is clear on desktop and mobile.

### Routes and content
- [ ] All 15 current routes have been checked.
- [ ] Existing slugs are preserved or explicitly redirected.
- [ ] Founder photo and confirmed details are used correctly.
- [ ] Work and Insights remain noindex until genuinely useful content is published.
- [ ] Hyderabad copy does not imply an unverified walk-in office.
- [ ] Contact details work correctly.

### Technical
- [ ] `npm run build` succeeds.
- [ ] No hydration or console errors in the main user journey.
- [ ] No broken icons, images or font requests.
- [ ] Manifest paths match actual files.
- [ ] Sitemap contains only intended indexable URLs and valid image associations.
- [ ] Every route has accurate metadata and canonical URL.
- [ ] No horizontal overflow at 320px and common mobile widths.
- [ ] Keyboard and reduced-motion behaviours work.

---

## 15. OpenCode implementation prompt

Use this after placing this brief at the project root as `MENINGES-LABS-Hybrid-Website-Rebrand-Implementation-Brief-v1.0.md`.

```text
Read MENINGES-LABS-Hybrid-Website-Rebrand-Implementation-Brief-v1.0.md completely and treat it as the approved design and implementation specification.

Work directly in this existing Next.js repository. Do not scaffold a new application. First audit the current codebase, current branch, all routes, global styles, shared shell, content data, image/icon assets, manifest, sitemap, robots and the production build. The actual package.json is the source of truth: this repository currently uses Next.js 16, React 19, Tailwind 4 and Motion. Do not downgrade or perform unrelated dependency upgrades.

Implement the HYBRID direction: editorial engineering plus product-led storytelling. Preserve the approved ML monogram geometry, use the orange-led Citrus identity, Geist Sans for the company wordmark and the entire interface, Geist Mono for restrained technical labels, and Allura for the complete tagline only. Do not split the tagline typography. Do not use an AI-generated bitmap as the logo; use clean vector artwork and real typography.

Preserve every existing public URL and useful content. Keep the current route-data architecture wherever it is appropriate. Update the shared site shell, header/Explore navigation, footer, page templates, homepage, service pages, about/founder/industries/Hyderabad/work/insights/contact/brand-assets pages, design tokens, favicon, app icons, manifest, Open Graph image and metadata as specified. Reuse existing components and assets where appropriate; inspect them before use because some may still belong to the retired burgundy identity.

Build real, responsive HTML/CSS/SVG interface demonstrations. Any sample workflow must be labelled illustrative. Do not invent testimonials, customer logos, case studies, business metrics, rankings, AI citations, office address or performance guarantees. Keep Work and Insights noindex until genuine content is approved. Preserve the real founder portrait and current contact links.

Use the existing Motion package for restrained motion and support prefers-reduced-motion. Ensure all navigation and interactions work by keyboard and touch. Use semantic HTML, accessible names, visible focus states and responsive image optimisation.

Use the existing SEO intent playbook as the keyword/content map. Keep metadata, canonical URLs, sitemap, robots, structured data, PWA manifest and image references accurate. Do not add hidden text or doorway pages.

Implement in phases: audit/baseline, brand foundation, global shell, homepage, inner pages, then SEO/accessibility/performance QA. Run npm run build at the end and fix all errors. Test 320px, 375px, 768px, 1024px and desktop widths. Report the files changed, routes tested, assets selected, remaining blockers and build result. Do not stop after writing another plan: make the code changes.
```

---

## 16. Reference links

- [Creto — current product website](https://creto.app/)
- [Geist — official Vercel font site](https://vercel.com/font)
- [Geist package and Next.js integration](https://www.npmjs.com/package/geist)
- [Allura — Fontsource package](https://www.npmjs.com/package/@fontsource/allura)
- [Allura licence and font details](https://fontsource.org/fonts/allura/about)
- [Next.js metadata and OG image documentation](https://nextjs.org/docs/app/getting-started/metadata-and-og-images)
- [Next.js production checklist](https://nextjs.org/docs/app/guides/production-checklist)
- [Next.js Image optimisation](https://nextjs.org/docs/14/app/building-your-application/optimizing/images)
- [MENINGES LABS repository](https://github.com/shaikaakif/MeningesLabs)

---

**Final design principle:** Make MENINGES LABS look like a company that engineers connected business systems—and prove that capability through the quality, clarity and behaviour of the website itself.
