# Install and runtime

## Default: npm package

```bash
npm install @designcodeio/threeui three   # peers: react & react-dom >=18 <20, three >=0.149 <1 (verified v1.2.0). Package also bundles three128/three165 aliases for components pinned to those Three.js versions.
```

```tsx
import { AtTheHorizon } from "@designcodeio/threeui/components/AtTheHorizon"; // subpath = smallest bundle
import "@designcodeio/threeui/style.css";                                      // once, at app root
```

Root import `import { X } from "@designcodeio/threeui"` also works but pulls the whole index graph in dev. Subpath exports: `./components/*`, `./style.css`, `./assets/*`.

Verify an export exists before using it: `grep -o "export { [A-Za-z]* }" node_modules/@designcodeio/threeui/lib-dist/index.js` or open `lib-dist/package-components/<Name>.d.ts`. That file is only a re-export (e.g. `export { Gallery } from "../shaders/gallery/Gallery"`), so read the real prop types at `lib-dist/shaders/<folder>/<Name>.d.ts` (find with `grep -rl "<Name>" node_modules/@designcodeio/threeui/lib-dist/shaders --include=*.d.ts`). **Prop names come from those `.d.ts` files, not from memory.** The catalog's `controls` column lists tunable keys; confirm the real prop names in the `.d.ts`.

## Components that need runtime files

Components that render a full HTML document (landing pages, Kage, Sylva, Complete Shelf, Bestsellers, Landscape, Japanese Tower, Spark Badge, Sketchbook, Synthralos halftone) load files from root-relative URLs. Copy them from the package into the app's public directory, preserving paths:

```bash
cp -r node_modules/@designcodeio/threeui/lib-dist/assets/* public/
# gives: public/landing-pages/*, public/sketchbook/*, public/landscape.html, public/japanese-tower.html, public/spark-badge.html, ...
```

Or override per component: `sourceUrl="/my/path/kage.html"`, `assetBaseUrl="/my/sketchbook/"` (only where the prop exists; check the `.d.ts`). Verify with the network panel that no runtime file 404s.

These render in a sandboxed `<iframe>`: they need a sized parent (`position:relative; height:100vh` or similar), cannot share React state, and communicate only through the component's `customization` prop (fonts, weights, primaryColor, sizes).

## Framework notes

- **Vite/CRA**: works as is. Lazy-load below-the-fold effects with `React.lazy` + `Suspense`.
- **Next.js (App Router)**: components touch `window`/WebGL. Mount in a `"use client"` file, or `dynamic(() => import(...), { ssr: false })`. Copy runtime files to `public/`.
- **Remix/Astro**: client-only island (`client:only="react"` in Astro; `ClientOnly` wrapper in Remix).
- **Expo web / React Native**: not supported (DOM/WebGL). Use only in the web build.
- **TypeScript**: package ships `.d.ts`. If the project uses `moduleResolution: node` and subpath types fail, switch to `bundler`/`node16` or import from the package root.

## Layout recipe (background behind content)

```tsx
<section className="relative min-h-screen overflow-hidden">
  <div className="absolute inset-0 -z-10 pointer-events-none"><NebulaBackground /></div>
  <div className="relative z-10">{/* existing hero content, unchanged */}</div>
</section>
```

Check contrast of text over the effect in light AND dark; add a scrim (`bg-black/30`) if needed.

## Performance and accessibility

- One heavy WebGL effect per viewport. Pause/skip effects off-screen (components are visibility-aware, but do not stack many).
- Respect `prefers-reduced-motion` (components are reduced-motion aware; verify) and provide a static CSS fallback background on mobile if FPS is poor.
- Do not animate behind long-form reading text.

## Copying source instead of using npm

Only when the user needs to change internals (e.g. add a GLTFLoader). Use `scripts/fetch-threeui.sh`, copy `src/shaders/<name>/` into e.g. `src/vendor/threeui/<name>/`, add its CSS, include license headers, and note the upstream commit in a `VENDORED.md`.

## Peer-dependency conflicts
React 18.x and 19.x satisfy the range; React 20+ does not. If the project pins a different `three` or R3F, install with the project's version and test; never add `--force` without telling the user.
