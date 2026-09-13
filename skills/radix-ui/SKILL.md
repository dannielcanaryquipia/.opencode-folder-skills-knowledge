# Radix UI Skill

> Build accessible, polished UI with Radix — the pre-styled **Radix Themes** library, or the headless **Radix Primitives** that power shadcn/ui.

---

## Triggers

Use this skill when the user says:
- "use radix", "radix ui", "radix themes", "add radix"
- "pre-styled components", "a theme for my app", "customize the look"
- "make a component library / design system with radix"
- "accessible dialog/select/slider", "headless components"
- Building a stunning site or landing page and needs a component foundation

## Which Radix layer?

Radix ships two products. Pick by how much styling control you want:

| Layer | Package | What it is | Use when |
|---|---|---|---|
| **Radix Themes** | `@radix-ui/themes` | Pre-styled, drop-in components (`Button`, `Card`, `Text`, `Dialog`, …) with a theme system | You want a stunning look **out of the box**. Fastest path to a polished site |
| **Radix Primitives** | `@radix-ui/react-*` (per-component packages) | Unstyled, accessible primitives (Dialog, Select, Tabs, Switch, …) | You want full control of the visuals (typically + Tailwind) |
| **shadcn/ui** | `shadcn` CLI (already configured) | Radix Primitives pre-wrapped in copy-paste Tailwind components | Your project already uses shadcn — this IS Radix under the hood |

**How to choose:**
- **Radix Themes** — "I want beautiful components and a theme immediately" (recommended for fast, stunning marketing/landing sites).
- **shadcn** — "I want Radix accessibility but my own Tailwind styling in the codebase."
- **Primitives directly** — rare; only when you need a single headless primitive shadcn doesn't wrap.

> shadcn and Radix Themes both install Radix Primitives internally — they are not mutually exclusive.

## Radix Themes quickstart

```bash
npm install @radix-ui/themes
```

```tsx
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

export default function Root({ children }) {
  return (
    <html>
      <body>
        <Theme appearance="dark" accentColor="indigo" grayColor="slate" radius="medium">
          {children}
        </Theme>
      </body>
    </html>
  );
}
```

### Theme customization (on the `<Theme>` component)

| Prop | Options | Notes |
|---|---|---|
| `appearance` | `"light"` \| `"dark"` \| `"inherit"` | Dark mode without CSS work |
| `accentColor` | `tomato, ruby, crimson, pink, plum, purple, violet, indigo, blue, cyan, teal, green, grass, orange, brown, gray` | Brand color |
| `grayColor` | `gray, mauve, slate, sage, olive, sand` | Neutral scale |
| `radius` | `none, small, medium, large, full` | Corner radius |
| `scaling` | `90%–110%` | Global component scale |

### ThemePanel — live theme preview

```tsx
import { Theme, ThemePanel } from "@radix-ui/themes";

<Theme>
  <MyApp />
  <ThemePanel /> {/* floating panel; remove for production */}
</Theme>
```

### Dark mode with a toggle

Use `appearance="inherit"` on `Theme` and toggle the root `<html>` class (`class="dark"` / `light` / `system`). Radix Themes applies the appearance from the `data-radix-theme` color-scheme automatically.

## Layout primitives

Radix Themes includes layout components — prefer them over hand-rolled divs:

```tsx
import { Box, Flex, Grid, Container, Section, Text, Button, Card, Badge } from "@radix-ui/themes";

<Container size="2">
  <Flex direction="column" gap="4" align="center">
    <Text as="p" size="4">Hello from Radix</Text>
    <Button size="3" variant="solid">Get started</Button>
  </Flex>
</Container>
```

- **`Box`** — generic div with margin/padding/width props
- **`Flex`** — `direction`, `align`, `justify`, `gap` props (no className needed)
- **`Grid`** — `columns`, `gap`, `rows`
- **`Container`** — `size` 1–4 for max-width
- **`Section`** — stage-section wrapper with `size` 1–3

## Common component set

`Button, IconButton, Card, Badge, Text, Heading, Link, Avatar, Callout, Dialog, AlertDialog, DropdownMenu, Select, Tabs, Switch, Checkbox, RadioGroup, Slider, Tooltip, HoverCard, Popover, Skeleton, Spinner, Table, Tabs, Progress, Separator, Inset`

## Styling & overrides

1. Use Radix's built-in props/design tokens first (`size`, `color`, `variant`, `m`/`p`/`gap`).
2. For one-off tweaks, pass a `style` prop or a `className` (Radix ships CSS variables under `--accent-9`, `--gray-3`, etc.).
3. RADIX CSS VARIABLES are the clean override seam: `--accent-contrast`, `--gray-a3`, `--radius-*`. Set them on `:root`/theme wrapper to re-theme without touching components.
4. For heavy custom animation, grab the headless sibling from shadcn/Radix Primitives, or wrap Radix Themes elements in Motion/GSAP (see below) — don't fight `prefers-reduced-motion`.

## Radix + motion (Apple-style sites)

Radix Themes gives the UI layer; pair it with `web-animation` / `gsap-core` for interaction:

```tsx
import { motion } from "framer-motion";
import { Card } from "@radix-ui/themes";

<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
>
  <Card>Animated Radix card</Card>
</motion.div>
```

For scroll-scrubbed 3D product pages (Apple-style), follow `OPEN-SOURCE-TEMPLATES.md` + `web-animation` skill recipes: React Three Fiber for the model, GSAP ScrollTrigger for pin + scrub, Radix Themes for the surrounding UI, Lenis for smooth scroll.

## Accessibility

- All Radix components ship WAI-ARIA support, keyboard nav, and focus management for free.
- Dialogs: focus trap + `aria-labelledby` automatic. Selects/Combobox: full keyboard support.
- Always keep `prefers-reduced-motion` guards on any animation you add around Radix components (see `DESIGN.md`).

## Related Skills & Files

| Resource | Location | Covers |
|---|---|---|
| `RADIX-UI.md` | `.opencode/RADIX-UI.md` | Installation + decision guide |
| `ui-component-integration` | `.opencode/skills/ui-component-integration.md` | Search → fetch → verify protocol (shadcn MCP) |
| `web-animation` | `.opencode/skills/web-animation/` | Motion, scroll, micro-interactions |
| `gsap-core` | `.opencode/skills/gsap-core/` | GSAP timelines, ScrollTrigger |
| `OPEN-SOURCE-TEMPLATES.md` | `.opencode/OPEN-SOURCE-TEMPLATES.md` | Curated Apple-style/Three.js template index |
| `ui-styling` | `.opencode/skills/ui-styling/` | shadcn/ui + Tailwind (Radix Primitives path) |