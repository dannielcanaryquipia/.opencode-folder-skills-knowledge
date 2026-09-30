# Using Phosphor Icons in a Web/App Project

This folder is the full local Phosphor set: **1,512 icons × 6 weights** (thin, light, regular, bold, fill, duotone), available as **Fonts**, **PNGs**, **SVGs**, and **SVGs Flat**.

## Browse & pick icons

Open **`gallery.html`** — searchable, switch weights, click any icon to copy its name / path / `<img>` tag / inline SVG.

- Opening the file directly (`file://`) works for everything **except** "Copy inline SVG" (browsers block `fetch` on `file://`).
- To enable inline-SVG copy, serve the folder locally:
  ```bash
  cd "C:/Users/Danniel Canary/.opencode/phosphor-icons"
  npx serve .        # or: python -m http.server
  ```

## Which format to use per project

| Project type | Recommended route |
|---|---|
| React / Next.js | **npm package** `@phosphor-icons/react` (tree-shakeable, weight prop) |
| Vue | `@phosphor-icons/vue` |
| Plain HTML/CSS | **Icon font** (this folder's `Fonts/`) or inline SVG |
| Framework-agnostic / offline | The **SVG files** in this folder via `<img>` or inline |

### React / Vue (best for real projects)
```bash
npm i @phosphor-icons/react     # React
```
```jsx
import { Horse, Heart, Cube } from "@phosphor-icons/react";
<Heart weight="fill" size={24} color="#e11" />
```
Weights: `thin | light | regular | bold | fill | duotone`. No need to copy files — the package ships them.

### Local SVG (offline / any stack)
Filenames: regular is bare (`heart.svg`); other weights carry a suffix (`heart-bold.svg`, `heart-fill.svg`, `heart-duotone.svg`, etc.).
```html
<!-- as an image -->
<img src="phosphor-icons/SVGs/regular/heart.svg" width="24" height="24" alt="heart">

<!-- inline (recolorable via CSS `currentColor` / fill) -->
<svg width="24" height="24"><!-- paste contents of heart.svg --></svg>
```
Line-weight SVGs use `currentColor`, so inline SVGs inherit CSS `color`. `<img>` icons can be tinted with CSS `filter`.

### Icon font (plain HTML)
`Fonts/<weight>/` contains `Phosphor.woff2`, `style.css`, and `selection.json`.
```html
<link rel="stylesheet" href="phosphor-icons/Fonts/regular/style.css">
<i class="ph-heart"></i>   <!-- class names are in Fonts/regular/selection.json / style.css -->
```

## Files added here
- `gallery.html` — offline searchable icon browser
- `icons.js` — generated list of all icon base names (regenerate with the Node one-liner below)

```bash
node -e "const fs=require('fs');const n=fs.readdirSync('SVGs/regular').filter(f=>f.endsWith('.svg')).map(f=>f.replace(/\.svg$/,''));fs.writeFileSync('icons.js','window.PHOSPHOR_ICONS = '+JSON.stringify(n)+';\n')"
```
