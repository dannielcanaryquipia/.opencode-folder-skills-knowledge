# Radix UI

> `.opencode/skills/radix-ui/` — Radix Themes & Primitives, how to choose, and how it slots into this repo's UI stack.

---

## What This Is

A reusable **opencode skill** that gives the AI agent everything it needs to build UI on Radix. When you say things like "use radix", "add a theme to this site", "make a dialog/dropdown/select", or "they want Apple-style polish", the agent loads this skill and follows its patterns.

## Quick Check — do we have it?

| Dependency | Status |
|---|---|
| `@radix-ui/themes` | **Not yet installed** (on-demand `npm install` per project — this guide is the config) |
| `shadcn` (built on Radix Primitives) | **Installed** — CLI `npx shadcn@latest`, MCP server configured, registry includes Skiper UI / Magic UI / Origin UI |
| `framer-motion` | **Installed** (motion layer, see `WEB-ANIMATION.md`) |
| `gsap` | Optional — install on demand (`npm install gsap`) for Apple-style scroll timelines |
| `playwright` MCP | **Enabled** — used to verify every UI build |

So: **Radix is not configured yet, but the stack already speaks Radix** — shadcn/ui *is* Radix Primitives with Tailwind styling wrappers. This doc adds the *pre-styled* layer (Radix Themes) and the decision protocol on top.

## Pick your Radix layer

| I want… | Use |
|---|---|
| Stunning UI **immediately**, theme-driven | **Radix Themes** (`@radix-ui/themes`) — install in the project, import `styles.css`, wrap app in `<Theme>`, done |
| Radix accessibility + **my own Tailwind look** | **shadcn/ui** (already available) — search via `shadcn` MCP |
| **One specific headless primitive** | Radix Primitives `@radix-ui/react-*` — usually unnecessary; shadcn wraps most |

Rule of thumb: **shadcn = Radix Primitives + Tailwind. Radix Themes = Radix Primitives + pre-built theme.** Both are legitimately "Radix". Use Themes when speed-to-pretty matters, shadcn when you want full styling control.

## Three-line install (Radix Themes)

```bash
npm install @radix-ui/themes
```

```tsx
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
// <Theme appearance="dark" accentColor="indigo">{app}</Theme>
```

Full setup, customization (colors, radius, scaling), `ThemePanel`, dark mode, layout primitives, styling/override seam, and motion recipes: see `skills/radix-ui/SKILL.md`.

## Apple-style interactive sites

For product-page motion like Apple (scroll-scrubbed 3D, smooth scroll, cinematic transitions) the recipe in this repo is:

1. **UI layer** — Radix Themes (or shadcn) for structure/typography/cards.
2. **3D layer** — React Three Fiber + drei for the product model.
3. **Motion layer** — GSAP + ScrollTrigger for pin/scrub timelines, or Motion (`useScroll`) for lighter pages.
4. **Smooth scroll** — Lenis (optional, desktops).
5. **Guardrails** — GPU-only props, lazy-init WebGL, `prefers-reduced-motion` (see `DESIGN.md`).

Curated open-source templates to copy from: **`OPEN-SOURCE-TEMPLATES.md`**.

## Related Skills & Files

| Resource | Location |
|---|---|
| Radix skill | `.opencode/skills/radix-ui/SKILL.md` |
| Component MCP guide (shadcn/vengeanceui/playwright/figma) | `.opencode/UI-COMPONENT-MCP.md` |
| Integration protocol (search → fetch → verify) | `.opencode/skills/ui-component-integration.md` |
| Animation guide | `.opencode/WEB-ANIMATION.md` |
| Design/animation tokens | `.opencode/DESIGN.md` |
| Open-source template index | `.opencode/OPEN-SOURCE-TEMPLATES.md` |