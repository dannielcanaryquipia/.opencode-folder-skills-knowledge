# .opencode — Personal Agent Workspace

A self-contained agent-development workspace: 110+ skill collections, a 5-crew dev
team, website/motion design system, manifest-first site templates, and a live
graphify knowledge graph covering the **entire directory**.

## What this is

This is the home directory for your AI tooling setup. It combines:

- **Skills** (`skills/`) — 110 top-level collections (261+ skills total) spanning
  coding, design, game development, UI/UX, media, and productivity.
- **Dev team agents** (`agent/`) — 5 crews implemented as opencode subagents with
  a defined work-splitting protocol.
- **Design system** — canonical animation/motion tokens (`DESIGN.md`), Radix UI
  guidance (`RADIX-UI.md`), open-source Apple-style template index
  (`OPEN-SOURCE-TEMPLATES.md`).
- **Templates** (`templates/`) — requirements-driven site builds with a typed
  manifest and asset-checking pipeline.
- **Knowledge graph** (`graphify-out/`) — a graph of this whole directory, so
  agents can answer questions about it without mass-grepping source files.

## Directory layout

| Path | Contents |
|---|---|
| `agent/` | Dev-team subagent definitions (5 crews). See `TEAM-GUIDE.md`. |
| `skills/` | Skill collections — see "Skills" below. |
| `templates/` | Site-requirements scaffold (`site.config.ts`, `ASSET-MANIFEST.md`, `MOTION-SPEC.md`, `PLAN.md`). |
| `graphify-out/` | Knowledge graph: `graph.json`, `graph.html`, `GRAPH_REPORT.md`, `PROJECT-MAP.md`, community labels, caches. |
| `.claude/` | Claude Code settings (`settings.json`). |
| `.opencode/` | opencode plugin config (plugins, `node_modules`, package files). |
| `node_modules/` | JS deps from `package.json` (gitignored). |
| `.gitignore` | Ignores `node_modules` + package-lock/package files. |
| Top-level `.md` files | Documentation map — see below. |
| `opencode.json` | opencode config: shadcn MCP + graphify MCP servers. |

## Documentation map

| File | Covers |
|---|---|
| `AGENTS.md` | Agent rules: graphify usage, UI/motion/Radix workflow, ADHD mode, manifest-first site builds. |
| `CLAUDE.md` | Claude Code equivalent of `AGENTS.md` (graphify + rules). |
| `SKILLS-GUIDE.md` | Master mapping of skills, components, and patterns per project type. |
| `TEAM-GUIDE.md` | The dev team roster, per-crew skill inventory, and work-splitting protocol. |
| `DESIGN.md` | Canonical design/animation tokens (easing, durations) the `web-animation` skill reads. |
| `RADIX-UI.md` | Radix Themes & Primitives skill — when/how to choose components. |
| `WEB-ANIMATION.md` | The `web-animation` skill — what it covers and how to use it. |
| `OPEN-SOURCE-TEMPLATES.md` | Curated open-source Apple-style interactive sites (Three.js + GSAP) to clone/remix. |
| `UI-COMPONENT-MCP.md` | On-demand MCP servers (playwright, etc.) for pulling in and browser-testing UI components. |

## Dev team agents (`agent/`)

| Crew | File | Dispatch for |
|---|---|---|
| Dev/Build | `dev-build.md` | Scaffolding, features, refactors, bugfixes |
| Design Studio | `design-studio.md` | Landing pages, portfolios, redesigns, UI polish |
| Game Dev | `game-dev.md` | Game projects, engine work, shaders, multiplayer, assets |
| Ops/Planning | `ops-planning.md` | Project kickoff, planning, work-splitting, runbooks |
| QA/Review | `qa-review.md` | Review gates, bug hunts (read-only, never edits) |

## Skills (`skills/`)

110 top-level collections. Main clusters:

- **Coding & engineering** — `Claude-Cortex` (patterns, security, infra, perf,
  docs, review), superpowers-* (planning, TDD, verification), ponytail-*,
  caveman-*, systematic-debugging, karpathy-guidelines, test-driven-development.
- **Web / design / motion** — design-taste-frontend, frontend-design/dev,
  ui-ux-pro-max, ui-ux-design-pro, high-end-visual-design, brand/brandkit,
  banner-design, image-to-code, imagegen-* (web + mobile), gpt-taste, minimalist-ui,
  brutalist-ui, industrial-brutalist-ui, radix-ui, web-animation, gsap-core,
  emilkowalski-motion, impeccable-design-polish, ui-styling, slides, dashboard-designer.
- **Game development** — game-development-* (orchestrator + 10 platform skills),
  unity-* (develop, ecs-patterns, ai-game-creator), unreal-engine-cpp-pro,
  godot-* (13 skills), game-art/audio/design.
- **Mobile** — `expo-skills` (router, native-ui, animation, EAS, design system,
  and more), expo-overview.
- **Media & audio** — audio-to-midi, midi-synth, seedance, 2d-pixel-asset,
  gemini-image-gen, google-ai-studio-tts, video-download / video-summarizer.
- **Agent/productivity** — i-have-adhd, clarity, skill-creator, writing-*,
  grilling, grilling-with-docs, graphify-setup, opencode, research, backlog-md.

## Templates (`templates/site-requirements/`)

Requirements-driven build contract for client/interactive sites:

- `site.config.ts` — typed manifest (assets, copy, sections).
- `ASSET-MANIFEST.md` — required asset inventory; unresolved slots render as
  labeled `PlaceholderSlot`s.
- `MOTION-SPEC.md` — motion/animation spec to plan from.
- `PLAN.md` — the full Phase 1–5 build process.

## Knowledge graph (`graphify-out/`)

Current graph of the entire directory (just refreshed):

- **30,676 nodes · 37,623 edges · 2,313 communities** (98% extracted, 2% inferred)
- `graph.json` — the graph itself; `graph.html` — interactive aggregated view.
- `GRAPH_REPORT.md` — broad architecture review; `PROJECT-MAP.md` — token-cheap
  orientation.
- `wiki/index.md` (when present) — navigation for broad sweeps.

Usage:

```
graphify query "..."      # scoped subgraph for a question
graphify path "A" "B"     # relationships between two things
graphify explain "X"      # plain-language node + neighbors
graphify update .         # re-extract code / keep graph current (AST-only, free)
```

## Config & dependencies

- `opencode.json` — registers the `shadcn` and `graphify` local MCP servers.
- `package.json` — `@opencode-ai/plugin`, `@radix-ui/themes`, `framer-motion`,
  `shadcn` (dev).
- `node_modules/`, `package.json`, `package-lock.json` are gitignored.

## Contributing & conventions

- After modifying code, run `graphify update .` to keep the graph current.
- Keep new docs linked from this README and `SKILLS-GUIDE.md` where relevant.
- Wire any new agent crew updates into `TEAM-GUIDE.md`.

## Git

Initialized on `main` (initial commit: "Add graphify knowledge graph + skills").
Push with:

```
git remote add origin <your-repo-url>
git push -u origin main
```