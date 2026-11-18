# MENINGES LABS website

Production website for MENINGES LABS — digital engineering and growth partner.
Built with the Next.js App Router, React 19 and the Motion library.

## Commands

```bash
npm install
npm run dev     # local development
npm run build   # production build
npm run start   # serve the production build
```

## Structure

- `app/page.tsx` — homepage.
- `app/[slug]/page.tsx` — shared template for services, capability pages,
  industries, contact, work and insights, with static params.
- `app/about/`, `app/founder/`, `app/brand-assets/`, `app/hyderabad/` — custom
  page designs.
- `app/content.ts` — routes, page copy, FAQs and verified contact details.
- `app/globals.css` — design tokens, layout, component and page styles.
- `app/home-page.tsx`, `app/page-content.tsx`, `app/system-visuals.tsx`,
  `app/ui.tsx` — shared page composition and custom visuals.
- `app/site-shell.tsx` — header, Explore overlay and footer.
- `app/brand-film.tsx` — click-to-play brand film with controls and transcript.

## Fonts and brand system

Geist is used for interface and body copy, Geist Mono for labels and metadata,
and Allura only inside the complete tagline lockup. All three are self-hosted
through Fontsource.

The approved orange/cream identity lives in `docs/brand/`. Production logos,
icons, social previews and photography are in `public/brand-assets/`. The
retired burgundy identity and its documentation are preserved in
`archive/brand-v1/` and must not be used in new work.

## SEO and assets

- `app/layout.tsx` — metadata, Open Graph/Twitter, canonical base and schema.
- `app/sitemap.ts` — indexable routes and image references.
- `app/robots.ts` — crawler rules and sitemap location.
- `app/manifest.ts` — installable web app manifest and icons.
- Work and Insights remain `noindex, follow` coming-soon routes.
- Brand film: `public/videos/meninges-labs-brand-film.mp4`; poster:
  `public/brand/meninges-labs-brand-film-poster.webp`.

Update `socialLinks` and the contact details in `app/content.ts` when they
change. Deployment is handled outside this repository.
