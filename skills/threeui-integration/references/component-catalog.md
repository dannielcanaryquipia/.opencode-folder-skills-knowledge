# ThreeUI Community component catalog

Generated from MengTo/threeui (MIT) by `scripts/build-catalog.mjs`. 43 parent components, 104 entries including variants.

Columns: **id** (route / upstream-skill name) · **import** (named export of `@designcodeio/threeui`) · **runtime** · **assets** (what ships with it) · **variants** · **controls** (tunable props).

## Landing Pages

| id | import | runtime | assets | variants | controls |
|---|---|---|---|---|---|
| `kage-landing-page` | `KageLandingPage` | Full HTML + DOM/CSS + Three.js | Fourteen local WebP scene layers | – | headingFont, bodyFont, headingWeight, bodyWeight, primaryColor, headingSize, bodySize, headingLetterSpacing |
| `meng-to-sketchbook-landing-page` | `MengToSketchbookLandingPage` | Full HTML + DOM/CSS + JavaScript | Fourteen local paper, botanical, and Singapore illustration images plus three local variable and display fonts | – | headingFont, bodyFont, headingWeight, bodyWeight, primaryColor, headingSize, bodySize, headingLetterSpacing |

## Hero

| id | import | runtime | assets | variants | controls |
|---|---|---|---|---|---|
| `complete-shelf-landing-page` | `CompleteShelfLandingPage` | Full HTML + DOM/CSS + Three.js r165 | All visual and media data remains embedded in the original HTML | – | headingFont, bodyFont, headingWeight, bodyWeight, primaryColor, headingSize, bodySize, headingLetterSpacing |
| `bestsellers-book-showcase` | `BestsellersBookShowcase` | Full HTML + DOM/CSS + embedded media | All visual and video data remains embedded in the original HTML | – | headingFont, bodyFont, headingWeight, bodyWeight, primaryColor, headingSize, bodySize, headingLetterSpacing |
| `sylva-hero` | `SylvaHero` | Full HTML + DOM/CSS + local Three.js | Four local assets are packaged at their authored relative paths; the page makes no external request | – | headingFont, bodyFont, headingWeight, bodyWeight, primaryColor, headingSize, bodySize, headingLetterSpacing |

## Backgrounds

| id | import | runtime | assets | variants | controls |
|---|---|---|---|---|---|
| `predictive-arc` | `PredictiveArcCanvas` | Canvas 2D + Raw WebGL + Three.js r128 | No external assets | 4 | mode, speed, hue, saturation, brightness |
| `liquid-form` | `LiquidFormBackground` | Raw WebGL | No external assets | – | speed, morph, noiseScale, mouseAmount, metal, camera, tintHue, tintAmount |
| `crt` | `CrtBackground` | Raw WebGL + Canvas 2D | No external assets | – | speed, typeSpeed, motion, hue, saturation, brightness, opacity |
| `energy-orb` | `GlobeCollection` | Raw WebGL + Canvas 2D | No runtime assets | – | speed, scale, smokeScale, smokeStrength, smokeSpeed, hue, saturation, glow, starDensity, starSpeed, starSize, brightness, opacity |
| `spark-badge` | `SparkBadge` | Canvas 2D | One self-contained authored HTML badge scene; no external assets | – | speed, particleAmount, rainAmount, turbulence, spread |
| `elements` | `ElementsCollection` | Raw WebGL2 + Canvas 2D | Three embedded vector brand paths; no external binary assets | 5 | speed, size, particleAmount, hue, saturation, brightness, opacity |
| `constellation-field` | `ConstellationField` | Canvas 2D + Raw WebGL | No owned binary assets | 7 | mode, speed, size, strokeWidth, length, density, opacity, hue, saturation, brightness |
| `portal-field` | `PortalFieldCollection` | Three.js r134 + Raw WebGL + Canvas 2D | No owned binary assets | 4 | speed, size, length, density, opacity, hue, saturation, brightness |
| `matrix-field` | `LaserCollection` | Raw WebGL | No external assets | – | speed, size, length, density, opacity, hue, saturation, brightness |

## Text Animation

| id | import | runtime | assets | variants | controls |
|---|---|---|---|---|---|
| `typography-vortex` | `TypographyVortexCanvas` | Canvas 2D | Exact embedded Fragment Mono font extracted from the authored source | – | mode, speed, ringGrowth, opacity, dissolveRadius, particleAmount, suctionDuration |
| `semantic-bloom` | `SemanticBloom` | Canvas 2D + DOM/CSS | No external assets | – | mode, text, size, opacity |
| `globe-study` | `TextPathStudies` | Canvas 2D | No external assets | 5 | mode, scale, opacity, hue, saturation, brightness |
| `gallery-heading` | `GalleryHeading` | Canvas 2D | No external assets | – | mode, font, weight, headlineSize, hue, saturation, brightness |
| `article-headings` | `TextAnimationCollection` | DOM/CSS + Canvas 2D | Exact embedded Fragment Mono font; all other sources and marks are bundled inline | 4 | mode, duration, stagger, scrambleLength, preserveChance, tailChance |

## Buttons

| id | import | runtime | assets | variants | controls |
|---|---|---|---|---|---|
| `star-portal` | `ShaderButtons` | Raw WebGL + Canvas 2D + CSS | No owned binary assets | 5 | mode, hue, saturation, brightness |
| `rectangle-buttons` | `RectangleButtons` | DOM + CSS | 5 local SF Pro font subsets + 1 authored remote portrait reference | 11 | mode, hue, saturation, brightness |
| `circle-buttons` | `CircleButtons` | DOM + CSS | Inline SVG icons; no external runtime assets | – | mode, hue, saturation, brightness |
| `liquid-metal-button` | `LiquidMetalButton` | Raw WebGL 2 + DOM/CSS | 1 exact authored HTML scene with remote Inter stylesheet and system-font fallback | – | – |

## UI Elements

| id | import | runtime | assets | variants | controls |
|---|---|---|---|---|---|
| `character-carousel` | `CharacterCarousel` | DOM + CSS | 4 embedded authored portrait JPEGs shared by both exact source documents | 2 | speed, scale, opacity, hue, saturation, brightness |
| `gallery` | `Gallery` | Three.js r149 | 5 locally optimized authored gallery images | – | speed, scale, opacity, hue, saturation, brightness |
| `engraved-certificate` | `EngravedCertificate` | Canvas 2D + DOM/CSS | No owned binary assets | – | hue, saturation, brightness |
| `diagnostics-panel` | `DiagnosticsPanel` | Canvas 2D | No owned binary assets | – | mode, speed, size, opacity, hue, saturation, brightness |
| `skeuomorphic-toggle` | `SkeuomorphicToggleCollection` | DOM/CSS + Three.js + Raw WebGL | No owned binary assets | – | mode, speed, size, opacity, hue, saturation, brightness |
| `wireframe-forms` | `WireframeForms` | Canvas 2D | No owned binary assets | – | mode, speed, size, length, density, opacity, hue, saturation, brightness |
| `brand-orbs` | `BrandOrbs` | Canvas 2D | Embedded vector paths and procedural geometry; no external runtime assets | – | size, mode, speed |

## Three.js

| id | import | runtime | assets | variants | controls |
|---|---|---|---|---|---|
| `sylva-living-world` | `SylvaLivingWorldScene` | Three.js r149 | No binary assets — the canonical HTML and local MIT Three.js runtime are carried as source | – | – |
| `temple-night` | `TempleNightScene` | Three.js r149 | No external scene assets | – | – |
| `landscape` | `LandscapeScene` | Three.js r149 | No external scene assets — the exact self-contained source carries its runtime and procedural systems | – | – |
| `japanese-tower` | `JapaneseTowerLandscape` | Three.js r149 + Canvas 2D | 1 exact self-contained authored HTML scene with six country architectures, embedded Three.js runtime, procedural landscape, and texture set | – | – |
| `bookshelf` | `BookshelfScene` | Three.js r165 | 2 exact embedded owned atlases — cover artwork and walnut texture | – | – |
| `structure-flow` | `StructureFlowCollection` | Three.js r128–r160 | No external assets | 12 | speed, pointSize, opacity, maskStart, maskSolid |
| `warp-field` | `WarpFieldBackground` | Three.js r128 | No external assets | – | speed, streakOpacity, tileOpacity, fov, hue, saturation, brightness |
| `woven-cloth` | `WovenCloth` | Three.js r160 | No owned binary assets | – | hue, saturation, brightness |

## CSS

| id | import | runtime | assets | variants | controls |
|---|---|---|---|---|---|
| `performance-gauges` | `PerformanceGauges` | DOM + CSS | No owned binary assets | – | hue, saturation, brightness |
| `uplink-loader` | `UplinkLoader` | DOM + CSS + JavaScript | No owned binary assets | – | – |
| `koi-studies` | `KoiStudies` | DOM + CSS 3D + Canvas 2D + WebGL | 3 embedded JPEGs + 3 embedded MP4 clips + 1 inline halftone mask; the optional authored CDN shader has a CSS fallback | – | – |
| `animated-top-dock` | `AnimatedTopDock` | DOM + CSS + WebGL + Three.js r128 | Exact embedded Fragment Mono font extracted from the authored source | – | proximity, spring, damping, widthGrowth, heightGrowth, drop |
| `sketchbook` | `Sketchbook` | DOM + CSS 3D | 14 exact artworks + 3 exact local font files | – | – |

## Descriptions (match a component to a UI need)

- **Kage** (`kage-landing-page`, Landing Pages) — The complete authored Kage temple experience, preserved as an interactive full-page document with its original navigation, scroll scenes, and local Three.js world. Tags: landing page, full html, website, kage, japanese, temple, garden, cinematic, threejs, three.js.
- **Complete Shelf** (`complete-shelf-landing-page`, Hero) — The complete Working Volumes bookshelf page with all seven tools, its responsive editorial interface, and authored Three.js presentation. Tags: landing page, full html, website, hero, bookshelf, books, working volumes, editorial, portfolio, threejs.
- **Bestsellers Book Showcase** (`bestsellers-book-showcase`, Hero) — The complete Field Manuals book showcase, preserved unchanged with its editorial layout, authored motion, interactions, and embedded media. Tags: landing page, full html, website, hero, books, bestsellers, field manuals, editorial, showcase, typography.
- **Sylva** (`sylva-hero`, Hero) — The complete Sylva Living Green page, preserved with its Three.js scene, local typography, card imagery, and embedded liquid-metal buttons. The moss-root world with pale flowers, ferns, drifting pollen, the landing butterfly, and native liquid-metal controls behind the full hero layout. Tags: landing page, full html, website, hero, sylva, living world, nature, moss, forest, roots.
- **Sketchbook** (`meng-to-sketchbook-landing-page`, Landing Pages) — A tactile personal portfolio built as a Singapore sketchbook, with nine illustrated plates, curled page turns, a draggable magnifying glass, zoom controls, a botanical paper atmosphere, and an editorial index. Tags: landing page, full html, website, meng to, portfolio, personal, sketchbook, singapore, illustration, editorial.
- **Predictive Arc** (`predictive-arc`, Backgrounds) — Eight animated arc, signal, ribbon, void, and halftone scenes collected in one Canvas 2D, raw-WebGL, and Three.js family. Tags: canvas, canvas2d, webgl, threejs, three.js, glsl, shader, background, pixels, pixel art.
- **Liquid Form** (`liquid-form`, Backgrounds) — A centered silver ray-marched liquid form with authored studio reflections and pointer-responsive camera drift. Tags: webgl, glsl, shader, ray marching, raymarching, 3d, liquid, metallic, reflections, pointer.
- **CRT** (`crt`, Backgrounds) — One sharpened curved-glass CRT tube driving four screens: the Matrix-era boot terminal, a monochrome film leader, a noise-torn blue signal fault, and an 8-bit console title. Tags: webgl, glsl, shader, canvas, canvas2d, crt, terminal, matrix, scanlines, aperture grille.
- **Globe** (`energy-orb`, Backgrounds) — The original layered FBM energy sphere with translucent rim glow and depth-aware star field. Tags: webgl, glsl, shader, canvas, canvas2d, 3d, sphere, orb, globe, world.
- **Spark Badge** (`spark-badge`, Backgrounds) — A luminous credential badge held together by curl-noise embers, carved typography, rain occlusion, waterline sparks, and an adaptive particle field. Tags: canvas, canvas2d, particles, badge, typography, rain, sparks, embers, curl noise, interactive.
- **Elements** (`elements`, Backgrounds) — Water, lightning, fire, condensation, and a painterly generative tree collected as one elemental family across WebGL2 and Canvas 2D. Tags: webgl2, webgl, glsl, shader, canvas, canvas2d, background, elements, elemental, water.
- **Typography Vortex** (`typography-vortex`, Text Animation) — Sable’s complete rotating typography vortex with crisp prerendered rings, drifting glyphs, pointer dissolution, particle dust, and click suction — with dark and light surfaces. Tags: canvas, canvas2d, typography, text, vortex, glyphs, rings, particles, pointer, click.
- **Semantic Bloom** (`semantic-bloom`, Text Animation) — A customizable Codex wordmark that draws a viscous particle organism toward its letters, illuminating the text as the network searches and reconnects. Tags: canvas, canvas2d, css, dom, typography, text animation, wordmark, codex, organic, semantic.
- **Text Path Studies** (`globe-study`, Text Animation) — Six interactive Canvas 2D typography studies spanning a globe, flowing outlines, morphing glyphs, cloth physics, ripples, and a particle sphere. Tags: canvas, canvas2d, typography, text path, text path studies, 3d, globe, world map, sphere, halftone.
- **Gallery Heading** (`gallery-heading`, Text Animation) — An oversized headline ringed by twelve 4:3 plates — one flat colour each, shaded by a procedural noise field rather than a gradient — that hold still until the pointer arrives, then orbit. Four galleries, each with its own field, typography, and direction. Tags: canvas, canvas2d, gallery, flat color, noise, grain, dither, halftone, glitch, carousel.
- **Shader Buttons** (`star-portal`, Buttons) — Six authored shader and canvas button treatments collected into one interactive family. Tags: webgl, glsl, shader, canvas, canvas2d, css, button, shader buttons, cta, particles.
- **Rectangle Buttons** (`rectangle-buttons`, Buttons) — Twenty-two authored rectangle-button and animated CTA treatments collected into one family. Tags: css, dom, button, cta, rectangle, rectangular, glass, glassmorphism, dark glass, gradient border.
- **Circle Buttons** (`circle-buttons`, Buttons) — Three compact circular icon controls using the exact Dark Glass, Launch, and Dot Border material systems. Tags: css, dom, button, icon button, circle, circular, round, play, video, media control.
- **Liquid Metal Button** (`liquid-metal-button`, Buttons) — A prismatic liquid-metal control in Sign up pill, Liquid Orb, and configurable Play Circle variants, with pointer-following bloom and press ripples. Tags: webgl2, webgl, glsl, shader, button, cta, liquid metal, metallic, chromatic, iridescent.
- **Character Carousel** (`character-carousel`, UI Elements) — Two authored editorial character-card carousels collected as a light filmstrip and a dark responsive wave. Tags: css, dom, ui, carousel, filmstrip, wave, cards, portraits, characters, profiles.
- **Gallery** (`gallery`, UI Elements) — The isolated Vantrix hero image ribbon: sixteen curved editorial panels orbiting a vertical cylindrical rail on a quiet paper grid. Tags: threejs, three.js, 3d, webgl, ui, gallery, carousel, image ribbon, cylindrical, spiral.
- **Sylva Living World** (`sylva-living-world`, Three.js) — The original procedural moss-root world with pale flowers, ferns, drifting pollen, scan light, and a landing butterfly. Tags: threejs, three.js, 3d, webgl, glsl, shader, procedural, moss, roots, arch.
- **Temple Night** (`temple-night`, Three.js) — Kage’s procedural Kyoto mountain temple after dark, with the exact authored architecture, rain, mist, leaves, pointer wisps, camera composition, and bloom pipeline. Tags: threejs, three.js, 3d, webgl, shader, architecture, japanese, temple, rain, mist.
- **Landscape** (`landscape`, Three.js) — A tower-free procedural terrain whose light, sky, fog, stars, rain, lightning, snow, grass, and stones move through seven authored environment states. Tags: threejs, three.js, 3d, webgl, shader, landscape, terrain, heightfield, polar grid, grass.
- **Country Towers** (`japanese-tower`, Three.js) — Six country-specific towers assembling above a procedural landscape: Japanese, Chinese, Vietnamese, Thai, Khmer, and Ottoman. Tags: threejs, three.js, 3d, webgl, shader, canvas, canvas2d, landscape, architecture, tower.
- **Bookshelf** (`bookshelf`, Three.js) — The exact seven-volume Bookshelf collection with its authored room, carousel shelf, individual cover artwork, foil, pages, inspection, opening, and page-turn system. Tags: threejs, three.js, 3d, webgl, books, bookshelf, carousel, room, interaction, page turn.
- **Structure Flow** (`structure-flow`, Three.js) — Thirteen authored Three.js field studies collected as one family, spanning particle domes, horizons, orbital systems, matrices, topology, fluid fields, embers, and vortexes. Tags: threejs, three.js, 3d, webgl, shader, particles, dome, monochrome, background, drift.
- **Warp Field** (`warp-field`, Three.js) — Nexus’s focused hero warp: 400 emerald additive streaks and 40 luminous tiles streaming through an authored deep-space fog field. Tags: threejs, three.js, 3d, webgl, particles, streaks, tiles, space, fog, emerald.
- **Engraved Certificate** (`engraved-certificate`, UI Elements) — A responsive engraved certificate: plate field, dual guilloche rosettes, and a drifting harmonic pass that auto-cycles through four cam states. Tags: canvas, canvas2d, css, dom, ui, certificate, guilloche, engraving, rosette, vintage.
- **Woven Cloth** (`woven-cloth`, Three.js) — A Three.js woven-cloth simulation with Woven Cloth typography printed into its procedural textile so every letter deforms with the fabric, and three companion cloths woven around the same Verlet sheet. Tags: threejs, three.js, 3d, webgl, glsl, shader, cloth, fabric, textile, typography.
- **Performance Gauges** (`performance-gauges`, CSS) — Four layered CSS instruments — tachometer, speedometer, turbo boost, and EV power — each isolated to one full-bleed dial with polar tick geometry, scale bands, and a self-testing needle sweep. Tags: css, dom, ui, gauges, dashboard, diagnostics, needles, instruments, telemetry, animated.
- **Uplink Loader** (`uplink-loader`, CSS) — A cinematic secure-uplink loader with stepped progress, illuminated telemetry ticks, neon readouts, technical corner markers, mirrored side rails, scanlines, and procedural grain. Tags: css, dom, javascript, ui, loading, loader, progress, uplink, telemetry, technical.
- **Koi Studies** (`koi-studies`, CSS) — A tactile stack of three Japanese koi studies with CSS 3D depth, pointer tilt, drag and keyboard navigation, pixel-mask reveals, and animated halftone imagery. Tags: css, css3d, dom, canvas, canvas2d, webgl, ui, cards, card stack, koi.
- **Article Headings** (`article-headings`, Text Animation) — Three expressive text treatments collected in one family: a chromatic intro, a particle wordmark, and an audio-reactive identity lockup. Tags: css, dom, canvas, canvas2d, typography, text animation, scramble, decode, heading, noise.
- **Animated Top Dock** (`animated-top-dock`, CSS) — Sable’s proximity-spring menu in four fits: the authored centred dock, a modern command bar, a fitted pixel-terminal strip, and a vertical refracting Three.js glass rail. Tags: css, dom, ui, navigation, dock, spring, glass, liquid glass, proximity, responsive.
- **Sketchbook** (`sketchbook`, CSS) — The exact Singapore paper sketchbook with nested-strip page curls, direct dragging, tilt, zoom, a movable magnifying glass, and its complete authored plate set. Tags: css, dom, css3d, 3d, book, paper, page curl, drag, zoom, illustration.
- **Constellation Field** (`constellation-field`, Backgrounds) — A family of particle networks, gateways, interface lines, defense traces, and topographic fields gathered into one configurable collection. Tags: canvas, canvas2d, particles, network, nodes, lines, stars, constellation, background, animated.
- **Portal Field** (`portal-field`, Backgrounds) — Five ambient field backgrounds collected across Three.js, raw WebGL, and Canvas 2D renderers. Tags: threejs, three.js, 3d, webgl, canvas, canvas2d, glsl, shader, shadermaterial, portal.
- **Diagnostics Panel** (`diagnostics-panel`, UI Elements) — Three diagnostic illustration variants — layered planes, node cubes, and a flowing mesh — each isolated without page chrome or copy. Tags: canvas, canvas2d, ui, dashboard, diagnostics, diagrams, layers, nodes, cube, mesh.
- **Skeuomorphic Toggle** (`skeuomorphic-toggle`, UI Elements) — Four takes on one switch: the preserved tactile skeuomorphic export plus flat modern, Three.js glass, and shader-lit treatments, each matching light and dark appearances automatically. Tags: css, dom, ui, toggle, switch, skeuomorphic, light mode, dark mode, interactive, control.
- **Laser** (`matrix-field`, Backgrounds) — Four pointer-reactive laser scenes spanning a preserved matrix junction, atmospheric blade, vanishing array, and halftone relay. Tags: webgl, glsl, shader, laser, beam, matrix, pointer, reactive, background, grid.
- **Wireframe Forms** (`wireframe-forms`, UI Elements) — A family of rotating wireframe forms, with the cube, crossed cylinders, and nested sphere isolated as individual variants. Tags: canvas, canvas2d, ui, wireframe, 3d, cube, cylinders, sphere, rotating, geometry.
- **Brand Orbs** (`brand-orbs`, UI Elements) — Twenty-three animated brand marks rebuilt as small and medium dimensional dot orbs for AI status, product activity, and compact loading states. Tags: canvas, canvas2d, ui, loading, loader, status, spinner, agent, thinking, orb.

## Components with a verbatim upstream build skill

Full authored-source recipes live in `upstream-skills/<id>.md`: `kage-landing-page`, `complete-shelf-landing-page`, `bestsellers-book-showcase`, `sylva-hero`, `meng-to-sketchbook-landing-page`, `predictive-arc`, `liquid-form`, `crt`, `energy-orb`, `spark-badge`, `elements`, `typography-vortex`, `semantic-bloom`, `globe-study`, `gallery-heading`, `star-portal`, `rectangle-buttons`, `circle-buttons`, `liquid-metal-button`, `character-carousel`, `gallery`, `sylva-living-world`, `temple-night`, `landscape`, `japanese-tower`, `bookshelf`, `structure-flow`, `warp-field`, `engraved-certificate`, `woven-cloth`, `performance-gauges`, `uplink-loader`, `koi-studies`, `article-headings`, `animated-top-dock`, `sketchbook`, `constellation-field`, `portal-field`, `diagnostics-panel`, `skeuomorphic-toggle`, `matrix-field`, `wireframe-forms`, `brand-orbs`.
