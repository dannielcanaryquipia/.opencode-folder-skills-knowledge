# ASSET-MANIFEST — where files go, and what's checked

Every visual the site uses is declared in `site.config.ts` and physically lives
under `public/`. **Nothing is guessed.** A slot is either:

- `placeholder` (default) → renders as a labeled dashed tag via `PlaceholderSlot`;
- `supplied` → must exist on disk; `npm run assets:check` verifies it.

## Folder map

```
public/
├─ favicon.svg
├─ wireframe.html                  # lo-fi review page → /wireframe.html
└─ assets/
   ├─ logo/                        # brand logo (SVG/PNG) → site.brand.logo
   ├─ images/                      # 2D images: halos, backgrounds, og-image
   ├─ models/                      # 3D: .glb/.gltf (+ optional .bin, draco/ktx2) → sited section assets.model
   ├─ videos/                      # .mp4 (h.264, ≤ 8MB ideally) → section assets.video
   └─ textures/                    # finish maps, normal maps, screen textures
```

Naming convention: `kebab-case.slug + -NN` for repeats (e.g. `highlight-01.mp4`).

> Tip: keep videos ≤ 8 MB (compress with HandBrake, 720p, CRF 26) and models
> draco-compressed ≤ 3 MB for a fast first scroll.

## Checklist — current slots in `site.config.ts`

Run `npm run assets:check` for the live status of every row.

| Slot | Config reference | Expected file | Status |
|------|------------------|---------------|--------|
| Favicon | `meta.favicon` | `public/favicon.svg` | supplied (repo) |
| OGP image | `meta.ogImage` | `public/assets/logo/logo-placeholder.svg` | placeholder |
| Logo | `brand.logo` | `public/assets/logo/logo-placeholder.svg` | placeholder → **swap in client logo** |
| Hero halo | `hero.assets.image` | `public/assets/images/hero-halo.svg` | placeholder |
| AURA model | `hero.assets.model` (`model.assets.model` too) | `public/assets/models/aura.glb` | placeholder → **CC0 or client GLB** |
| Highlight film | `highlights.assets.video` | `public/assets/videos/highlight-01.mp4` | placeholder |
| Finish texture | `model.assets.textures` | `public/assets/textures/finish-map.jpg` | placeholder |

## How to add a new asset

1. Drop the file into its folder above.
2. In `site.config.ts`, point the relevant `AssetRef.path` at it and set
   `status: 'supplied'` (add a section slot if needed).
3. `npm run assets:check` → row flips to `[OK]`.

If a file is referenced as `supplied` but missing, the check reports
`[MISSING]` **and** the running site shows the labeled placeholder — the AI is
never allowed to invent an image, model, or headline on its own.