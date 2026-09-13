# Open-Source Interactive Website Templates

> Curated index of open-source, Apple-style interactive sites — Three.js + GSAP + scroll animation — to clone, copy from, and remix into stunning product pages. Live demo links and license noted per repo.

---

## The Apple-Style Recipe (stack that every repo below uses)

1. **UI layer** — React + Tailwind (or Radix Themes / shadcn for components).
2. **3D layer** — Three.js via React Three Fiber (`@react-three/fiber`) + `@react-three/drei` (`useGLTF`, `Environment`, `PresentationControls`, `View`).
3. **Motion layer** — GSAP + ScrollTrigger (`@gsap/react` `useGSAP`) for **pin + scrub** timelines; video textures and masked reveals for the "cinematic" feel.
4. **State** — Zustand to talk between DOM controls and 3D material props (color/scale/texture).
5. **Smooth scroll** — Lenis (inertial scrolling) where the site is scroll-story based.
6. **Guardrails** — animate only `transform`/`opacity`, lazy-init WebGL off-screen, `gsap.matchMedia()` respect `prefers-reduced-motion`.

## Best — closest Apple product-page clones

| Repo | What it is | Stack | License | Live demo |
|---|---|---|---|---|
| **[WhiiteRose/Apple](https://github.com/WhiiteRose/Apple)** | MacBook Pro product page clone: scroll-animated 3D model, video textures synced to text reveals, glassmorphism dark theme | React, R3F, drei, GSAP, Tailwind v4, Zustand | — | [demo](https://apple-woad-six.vercel.app/) |
| **[arnobt78/iPhone-Showcase-Landing-Page--React-Frontend](https://github.com/arnobt78/iPhone-Showcase-Landing-Page--React-Frontend)** | iPhone 15 Pro showcase: 3D model with color/size switching, GSAP scroll-timeline, video highlights carousel. Excellent clean `components/` structure to copy | React 18, TS, Vite, R3F, drei, GSAP, Tailwind | open-source | — |
| **[arnobt78/MacBook-Showcase-Landing-Page--React-Frontend](https://github.com/arnobt78/MacBook-Showcase-Landing-Page--React-Frontend)** | MacBook showcase: ScrollTrigger pin+scrub, scroll-scrubbed model rotation, texture swaps, Zustand state. Sibling of the iPhone repo — has `docs/` on its scroll system | React, TS, Vite, GSAP, R3F, Zustand, Tailwind | open-source | — |
| **[Itssanthoshhere/Macbook-Landing-Page](https://github.com/Itssanthoshhere/Macbook-Landing-Page)** | MacBook 3D page: cinematic lighting, scroll-triggered animations, image masking + reveal effects, media-query animation breakpoints | React, Three.js, GSAP, Tailwind, Zustand | — | — |
| **[t-Federer/apple_macbook_clone00](https://github.com/t-Federer/apple_macbook_clone00)** | Apple-style 3D landing: dynamic lighting, scroll-linked motion, pinned sections, image masking, seamless multi-section timelines | React, R3F, drei, GSAP, Tailwind, Vite | **MIT** | — |
| **[izzSVR-tech/Mac-GSAP](https://github.com/itzzSVR-tech/Mac-GSAP)** | Apple-style Mac page: SplitText text reveals, ScrollTrigger parallax, pinned sections, scroll-synced video, masking, fully custom carousel | React, Three.js, GSAP, Tailwind | — | — |
| **[gideonabe/macbook_gsap_landing](https://github.com/gideonabe/macbook_gsap_landing)** | Sleek Apple-inspired MacBook showcase: scroll-driven 3D, GSAP pinned sections, cinematic transitions | React, Three.js, GSAP, Tailwind, Vite | **MIT** | [demo](https://macbook-gsap.vercel.app/) |

## General 3D landing templates

| Repo | What it is | Stack | License | Live demo |
|---|---|---|---|---|
| **[coslynx/virtuoso-3d-web-showcase](https://github.com/coslynx/virtuoso-3d-web-showcase)** | 3D landing page template (HomePage / LandingHero / ScrollScene / AdvancedScene), dark/light theme, swap models from `/public/models/` | React 18, TS, R3F, GSAP, Tailwind, Vite | — | — |
| **[Ali-Sanati/awwwards-adidas](https://github.com/ali-sanati/awwwards-adidas)** | Awwwards-level 3D adidas landing page: preload/lazy-load optimizations, scroll transitions, contact form, Aceternity + Magic UI | Next.js, TS, R3F, drei, GSAP, Tailwind | — | — |
| **[digitalfairy/fizzi-soda-brand](https://github.com/digitalfairy/fizzi-soda-brand)** | High-performance soda brand page: 3D scene tightly synced to scroll, CMS-driven content, SEO + type-safe | Next.js 14, TS, R3F, GSAP ScrollTrigger, Tailwind, Prismic | **Apache-2.0** | [demo](https://fizzi.anitacreativestudio.com/) |
| **[pratham7711/lumina](https://github.com/pratham7711/lumina)** | Immersive SaaS landing: 3D hero with camera interaction + post-processing, GSAP pinned sections, framer-motion transitions, full sections (Hero/Features/Showcase/Pricing/Footer) | React, TS, Vite, R3F, GSAP, framer-motion | **MIT** | [demo](https://lumina-beta-one.vercel.app) |
| **[ShAuRyA-Noodle/ThreeJS-Celestial-Forge](https://github.com/ShAuRyA-Noodle/ThreeJS-Celestial-Forge)** | Awwwards SOTD recreation (SPYLT): WebGL particle hero, ScrollTrigger choreography, clip-path transitions, **Lenis** smooth scroll. Big bonus: pristine single-HTML build + a React/Vite reference tree | Three.js, GSAP, Lenis, React 19, Tailwind v4 | — | [demo](https://three-js-celestial-forge.vercel.app) |
| **[smart-developer1791/solidjs-threejs-gsap-dimensional-glass-landing](https://github.com/smart-developer1791/solidjs-threejs-gsap-dimensional-glass-landing)** | 3D glassmorphism landing: prismatic refraction, magnetic cursor, reduced-motion support, 85KB gzipped | Solid.js, Three.js, GSAP ScrollTrigger, Tailwind | **MIT** | [demo](https://solidjs-threejs-gsap-dimensional-glas.netlify.app/) |
| **[arnobt78/Portfolio-Landing-Page-14--React-Frontend](https://github.com/arnobt78/Portfolio-Landing-Page-14--react-frontend)** | Portfolio template: 3D character with head-tracking, GSAP scroll timelines, horizontal-scroll Work section, Rapier-physics tech stack, custom cursor, loading screen | React 18, TS, Three.js, R3F, Rapier, GSAP | — | [demo](https://portfolio-ui-14.vercel.app) |

## Reading worth copying (not a repo)

| Resource | Why it matters |
|---|---|
| **[Iventions case study](https://www.hontran.dev/blog/iventions-award-winning-events-website-case-study)** | Engineering notes from an Awwwards SOTD site built with Next.js + Three.js + GSAP: treating nav/page transitions as one GSAP timeline, full-res textures with DPR-aware shaders, lazy WebGL init + pausing render loop off-screen, `gsap.matchMedia()` for reduced-motion, and the "animate only transform/opacity" rule. |

## Copy pattern per section (from these repos, for Apple-style pages)

- **Hero** — full-viewport R3F model + headline; GSAP entrance fade of title/subtitle/CTA.
- **Highlights** — autoplay muted videos in a carousel with progress bars; text reveals on scroll.
- **Model / Showcase** — pinned section: `ScrollTrigger` with `scrub` rotating the model or swapping screen textures as you scroll past 5 text blocks.
- **Features** — scroll-triggered text + image scale (`clipPath` / `scale` reveals, SplitText for words).
- **Transitions** — page/menu exit + enter fused into one timeline; Lenis for continuous-surface feel.
- **Footer** — minimal, glass / dark.

## Before cloning anything

1. Check the **license** badge above — MIT/Apache repos are safe to lift wholesale; unlicensed ones are study-only.
2. **3D models in repos are often Sketchfab downloads** — respect each model's license; swap in your own product GLB.
3. These are learning/showcase repos — expect rough edges; copy **patterns**, not dependencies, into your project.
4. Map any motion to `DESIGN.md` tokens and keep `prefers-reduced-motion` support.