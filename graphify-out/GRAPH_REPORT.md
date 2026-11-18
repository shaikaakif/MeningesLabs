# Graph Report - MeningesLabs-Website  (2026-11-18)

## Corpus Check
- 36 files · ~49,618 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 6 file(s) not represented in the graph (top: .ico 3, .css 2, (none) 1)

## Summary
- 228 nodes · 525 edges · 11 communities (9 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `538a2c02`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- page-content.tsx
- Icon
- content.ts
- icons.tsx
- generate-brand-assets.mjs
- compilerOptions
- next
- showcase.tsx

## God Nodes (most connected - your core abstractions)
1. `Icon()` - 61 edges
2. `PageVisual()` - 23 edges
3. `next` - 22 edges
4. `compilerOptions` - 16 edges
5. `react` - 15 edges
6. `PageContent()` - 14 edges
7. `SectionHead()` - 13 edges
8. `ClosingCTA()` - 12 edges
9. `HomePage()` - 12 edges
10. `PageHero()` - 11 edges

## Surprising Connections (you probably didn't know these)
- `RoutePage()` --calls--> `PageContent()`  [EXTRACTED]
  app/[slug]/page.tsx → app/page-content.tsx
- `NotFound()` --calls--> `Icon()`  [EXTRACTED]
  app/not-found.tsx → app/icons.tsx
- `ProcessRail()` --calls--> `Icon()`  [EXTRACTED]
  app/process-rail.tsx → app/icons.tsx
- `Transformation()` --calls--> `Icon()`  [EXTRACTED]
  app/transformation.tsx → app/icons.tsx
- `SiteShell()` --calls--> `Icon()`  [EXTRACTED]
  app/site-shell.tsx → app/icons.tsx

## Import Cycles
- None detected.

## Communities (11 total, 2 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.07
Nodes (34): metadata, RootLayout(), viewport, SiteShell(), dependencies, @fontsource/allura@^5.3.0, @fontsource/geist@^5.3.0, @fontsource/geist-mono@^5.3.0 (+26 more)

### Community 1 - "page-content.tsx"
Cohesion: 0.15
Nodes (29): AboutPage(), capabilities, metadata, problems, Asset, assets, BrandAssetsPage(), metadata (+21 more)

### Community 2 - "Icon"
Cohesion: 0.20
Nodes (23): Icon(), AboutVisual(), AutomationMock(), AutomationVisual(), BrandVisual(), BrowserMock(), CampaignMock(), CampaignVisual() (+15 more)

### Community 3 - "content.ts"
Cohesion: 0.10
Nodes (19): Card, contactDetails, FAQ, FAQGroup, faqGroups, Page, pages, Route (+11 more)

### Community 4 - "icons.tsx"
Cohesion: 0.09
Nodes (28): BrandFilm(), formatTime(), capabilities, CapabilityExplorer(), ConnectSystem(), links, nodes, ContactBrief() (+20 more)

### Community 5 - "generate-brand-assets.mjs"
Cohesion: 0.16
Nodes (16): COLORS, ensure(), extractArtwork(), icoHeader(), logoSrc, main(), monogramSrc, out() (+8 more)

### Community 6 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 7 - "next"
Cohesion: 0.20
Nodes (4): metadata, NotFound(), nextConfig, next

### Community 10 - "showcase.tsx"
Cohesion: 0.38
Nodes (9): AiPreview(), AnalyticsPreview(), BrowserBar(), items, PlatformPreview(), Preview(), Showcase(), WebsitePreview() (+1 more)

## Knowledge Gaps
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `package.json`, `page-content.tsx`, `Icon`, `content.ts`, `icons.tsx`, `showcase.tsx`?**
  _High betweenness centrality (0.206) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.07112375533428165 - nodes in this community are weakly interconnected._
- **Why does `Icon()` connect `Icon` to `package.json`, `page-content.tsx`, `content.ts`, `icons.tsx`, `next`, `showcase.tsx`?**
  _High betweenness centrality (0.169) - this node is a cross-community bridge._
- **Should `content.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.10153846153846154 - nodes in this community are weakly interconnected._
- **Why does `react` connect `icons.tsx` to `package.json`, `page-content.tsx`, `showcase.tsx`, `content.ts`?**
  _High betweenness centrality (0.044) - this node is a cross-community bridge._
- **Should `icons.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.0931174089068826 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._