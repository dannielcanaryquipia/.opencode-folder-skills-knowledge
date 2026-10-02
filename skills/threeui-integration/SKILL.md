---
name: threeui-integration
description: Integrate ThreeUI Community (MengTo/threeui) WebGL/Three.js/shader UI components into an existing web project. Use when the user wants animated 3D backgrounds, hero sections, buttons, text effects or landing pages from ThreeUI, or says "add threeui", "use a shader background", "integrate these 3D components", or supplies images/3D models/fonts to wire into ThreeUI.
---

# ThreeUI integration

Adds components from **ThreeUI Community** (github.com/MengTo/threeui, MIT, npm `@designcodeio/threeui`) to the user's project. Works in OpenCode and Claude Code. 43 parent components / 104 variants: shader backgrounds, Three.js scenes, hero/landing pages, buttons, text effects, UI elements.

## What this skill does and does not do

This skill is instructions, a catalog and helper scripts. It does not run by itself and fetches nothing on its own. The agent (OpenCode / Claude Code) reads it, then uses its own shell, npm and browser tools to follow the steps. Network is needed for `git clone`, `npm install`, and threeui.com. The catalog is a snapshot of upstream v1.2.0; the live source is always fetched fresh by `scripts/fetch-threeui.sh`.

## What ThreeUI is (and is not) — read first

- Components are **mostly self-contained**: ~28 of 43 ship no external assets. They are procedural (Canvas 2D / WebGL / Three.js) and take tuning props (colors, speed, scale, opacity, hue…), not arbitrary user content.
- 15 components bundle their own authored assets (images, fonts, MP4s, WebP layers). Several render a **byte-exact authored HTML document in an iframe** (`sourceUrl` + `customization`). Their images are **baked in**, not slots.
- There is **no GLB/GLTF loader or "model slot" anywhere in ThreeUI**. User 3D models are NOT drop-in. See `references/asset-slots.md` for the honest options (adapt a Three.js component's source, or build a small R3F/Three layer that sits beside it).
- Never promise the user "put your model here and it just works". State what is tunable, what needs source adaptation, and what is impossible without redesign.

## Workflow

Follow in order. Do not skip step 1 or 2.

1. **Analyze the project** (read-only). Detect framework (Vite/CRA/Next/Remix/Astro/Expo-web), React version, TS vs JS, styling (Tailwind/CSS modules), router, SSR, package manager, existing `public/` layout, existing three.js / R3F / drei versions, and the UI sections that exist (hero, nav, CTA, cards, footer, background). If the repo has a graphify `PROJECT-MAP.md` / `GRAPH_REPORT.md`, read that instead of grepping. Record findings in the plan.
2. **Collect the brief.** Ask only what you cannot infer: which sections get ThreeUI, brand colors/mood, light/dark, performance target (mobile?), and which assets the user has. Fill `templates/asset-manifest.md` with the user.
3. **Select components.** Open `references/component-catalog.md`, match each UI section to 1–3 candidates by category/tags/runtime. Prefer components with no assets and few props for backgrounds; prefer `Buttons`/`UI Elements` for CTAs. Check every candidate's `controls` list so the user can brand it (hue, primaryColor, fonts).
3b. **Preview candidates live (before committing).** Either open https://threeui.com (needs network) or run `scripts/preview.sh` to serve the cloned catalog locally (clones + `npm install` + `npm run dev`; run it in the background). Open `/browse`, search each candidate, and use the browser tool (Playwright / built-in browser) to screenshot it, check the live controls and variants, and read the Code tab. Show screenshots to the user and let them choose. If no browser tool or network is available, say so and rely on the catalog descriptions plus thumbnails (`thumbnail` URLs are in the upstream data) instead of claiming you saw them.
4. **Write the plan** from `templates/integration-plan.md` and show it to the user before editing code: chosen components → target files, install method, asset needs per component, fallbacks, risks. Wait for approval if the user is present.
5. **Install** per `references/install-and-runtime.md` (npm package by default; copy source only when you must modify internals).
6. **Place assets** per `references/asset-slots.md`: copy runtime documents/assets the component expects into `public/`, place the user's files under a documented folder, wire fonts/images through the component's props or a minimal adapted copy.
7. **Integrate**: import component + `@designcodeio/threeui/style.css` once, mount behind/inside the target section with correct stacking (`position:relative` parent, component `absolute inset-0 -z-10`, `pointer-events-none` for pure backgrounds), client-only for SSR frameworks, lazy-load below the fold, honor `prefers-reduced-motion`.
8. **Verify** (see below). Do not claim done until a real run proves it.
9. **Report**: components added, files touched, assets the user still must provide, known limits.

## Verification (required)

- `npm run build` (or the project's build) and typecheck pass.
- Start the dev server and open the page in a browser (Playwright/built-in browser). Confirm: canvas/iframe renders, no console errors, no 404s for runtime assets (check network panel), text over the effect is readable, mobile width OK.
- Confirm only the needed components are imported (subpath imports keep bundles small).
- Say exactly what you did and did not run.

## Licensing / attribution

ThreeUI app code and Community components: MIT. Bundled fonts: SIL OFL 1.1. Bundled Three.js: MIT. ThreeUI-authored Community imagery: MIT; some thumbnails/previews are hosted remotely at threeui.com and are not redistributed. Read `ASSET-LICENSES.md`, `FONT-LICENSES.md`, `THIRD_PARTY_NOTICES.md` in the upstream repo before shipping client work, and keep the license notices. Pro components (e.g. `cross-beam`) are NOT in this skill; they need a paid account via `npx @designcodeio/threeui-cli add <id>` and must not be reconstructed or scraped.

## Files in this skill

| Path | Use |
|---|---|
| `references/component-catalog.md` | All 43 components: import name, runtime, assets, variants, controls, descriptions |
| `references/install-and-runtime.md` | npm install, imports, style.css, public assets, Vite/Next/Astro notes, iframe components, perf |
| `references/asset-slots.md` | How user images / 3D models / fonts / video map onto ThreeUI; what is and is not swappable |
| `templates/asset-manifest.md` | Checklist the user fills with the assets they will provide |
| `templates/integration-plan.md` | Plan template to show before editing |
| `upstream-skills/<id>.md` | ThreeUI's own verbatim build recipe per component (use to copy source instead of npm) |
| `scripts/fetch-threeui.sh` | Shallow-clone upstream (to read real source/props) |
| `scripts/preview.sh` | Serve the ThreeUI catalog locally to try components in a browser |
| `scripts/build-catalog.mjs` | Regenerate catalog + upstream skills from a clone |

## Using upstream source (when npm is not enough)

Run `scripts/fetch-threeui.sh` (clones to `.threeui-src/`, gitignored). Component source lives in `src/shaders/<name>/`, public runtime documents in `public/`, per-component data in `src/data/shaders.tsx`. For any component with `upstream-skills/<id>.md`, follow that file: it lists the exact verified source files and the asset paths the document expects. Copy, do not paraphrase: those pages are byte-exact authored documents.

## Maintenance

Upstream syncs automatically from a private repo and publishes new npm versions. To refresh: `scripts/fetch-threeui.sh && node scripts/build-catalog.mjs .threeui-src`, then bump the date in `references/component-catalog.md` if you track one. Snapshot in this skill: upstream npm version 1.2.0 (43 parents, 104 entries), taken 2026-10-02.
