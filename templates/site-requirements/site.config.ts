export type AssetKind = 'logo' | 'image' | 'model' | 'video' | 'texture'
export type AssetStatus = 'placeholder' | 'supplied'
export type RecipeId = 'R1' | 'R2' | 'R3' | 'R4' | 'R5' | 'R6' | 'R7'
export type ScrollPattern = 'pin' | 'scrub' | 'parallax' | 'reveal' | 'horizontal' | 'none'

export interface AssetRef {
  /** Path relative to /public, e.g. "assets/models/aura.glb". */
  path: string
  alt?: string
  kind: AssetKind
  /**
   * placeholder = unfilled slot (renders a labeled tag, never guessed).
   * supplied = the user dropped a real file (checked by `npm run assets:check`).
   */
  status: AssetStatus
}

export interface CTA {
  label: string
  href: string
}

export interface SectionAssetMap {
  image?: AssetRef
  model?: AssetRef
  video?: AssetRef
  textures?: AssetRef
}

export interface SectionMeta {
  id: string
  /** Entry from MOTION-SPEC.md recipe bank. */
  recipe: RecipeId
  /** What the user wants to visualize — copied from MOTION-SPEC.md verbatim. */
  visualize: string
  scroll: ScrollPattern
  mood?: string
  kicker?: string
  headline?: string
  subhead?: string
  body?: string
  cta?: CTA
  assets?: SectionAssetMap
  features?: { title: string; body: string }[]
  stats?: { value: string; label: string }[]
}

export interface SiteConfig {
  meta: {
    title: string
    description: string
    favicon: string
    ogImage?: string
  }
  brand: {
    name: string
    logo: AssetRef
    tagline: string
    colors: {
      accent: string
      accentSoft: string
      background: string
      foreground: string
      muted: string
    }
  }
  motion: {
    ease: string
    duration: number
    reducedMotionDefault: 'reduce' | 'prefer' | 'full'
  }
  story: SectionMeta[]
}

/**
 * ──────────────────────────── SITE CONFIG ────────────────────────────
 * SINGLE SOURCE OF TRUTH. Edit this file (and drop files into
 * /public/assets per ASSET-MANIFEST.md), then run `npm run assets:check`.
 * The build reads ONLY from this object — no AI guessing, no hardcoded copy.
 *
 * Currently filled with the fictional "AURA" spatial-audio headset so every
 * slot is visible and replaceable. For a client: swap brand, theme colors,
 * story copy, and point every AssetRef at a real file.
 * ─────────────────────────────────────────────────────────────────────
 */
export const site: SiteConfig = {
  meta: {
    title: 'AURA — Spatial Audio, Redefined',
    description:
      'AURA is a spatial-audio headset engineered for immersion. Scroll to explore design, features, and performance.',
    favicon: 'favicon.svg',
    ogImage: 'assets/logo/logo-placeholder.svg',
  },
  brand: {
    name: 'AURA',
    logo: { path: 'assets/logo/logo-placeholder.svg', kind: 'logo', status: 'placeholder', alt: 'AURA logo' },
    tagline: 'Sound you can feel.',
    colors: {
      accent: '#2997ff',
      accentSoft: '#81b9ff',
      background: '#0a0a0c',
      foreground: '#f5f5f7',
      muted: '#6e6e73',
    },
  },
  motion: {
    ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
    duration: 0.9,
    reducedMotionDefault: 'reduce',
  },
  story: [
    {
      id: 'hero',
      recipe: 'R1',
      visualize: 'The headset floats above a soft light halo; headline writes itself in as you enter.',
      scroll: 'none',
      mood: 'dark, cinematic, quiet',
      kicker: 'AURA',
      headline: 'Spatial audio.\nEngineered for immersion.',
      subhead: 'Sixteen custom drivers. A buoyant alloy frame. Silence you can almost hear.',
      cta: { label: 'Buy AURA', href: '#' },
      assets: {
        model: { path: 'assets/models/aura.glb', kind: 'model', status: 'placeholder' },
        image: { path: 'assets/images/hero-halo.svg', kind: 'image', status: 'placeholder' },
      },
    },
    {
      id: 'highlights',
      recipe: 'R4',
      visualize: 'A horizontal gallery of four feature films, autoplaying, with a progress rail.',
      scroll: 'horizontal',
      mood: 'editorial, amber and indigo',
      headline: 'Every detail, in motion.',
      features: [
        { title: 'Adaptive ANC', body: 'Noise cancelling that reads your room 200× a second.' },
        { title: 'Spatial Haptics', body: 'Bass you feel in the jawbone, not just the ear.' },
        { title: '42h Battery', body: 'A full week of commuting on a single charge.' },
        { title: 'Alloy Frame', body: 'Titanium-laminated magnesium, 212 grams.' },
      ],
      assets: {
        video: { path: 'assets/videos/highlight-01.mp4', kind: 'video', status: 'placeholder' },
      },
    },
    {
      id: 'model',
      recipe: 'R2',
      visualize: 'A pinned close-up 3D view; scrolling rotates the headset and swaps finish textures per text block.',
      scroll: 'scrub',
      mood: 'studio, cold steel',
      headline: 'Design that disappears.',
      features: [
        { title: 'Zero-Gravity Fit', body: 'Weight balanced around the ear axis for all-day wear.' },
        { title: 'Vapor Finish', body: 'Anodized aluminium micro-textured by hand.' },
      ],
      assets: {
        model: { path: 'assets/models/aura.glb', kind: 'model', status: 'placeholder' },
        textures: {
          path: 'assets/textures/finish-map.jpg',
          kind: 'texture',
          status: 'placeholder',
        },
      },
    },
    {
      id: 'features',
      recipe: 'R5',
      visualize: 'Headline breaks, cards drift along a motion path, the accent light wipes the stripe out.',
      scroll: 'pin',
      mood: 'electric, indigo lens flares',
      headline: 'Engineered to disappear.',
      features: [
        { title: 'Adaptive ANC', body: 'Noise cancelling that reads your room 200× a second.' },
        { title: 'Spatial Haptics', body: 'Bass tuned to the jawbone for tactile lows.' },
        { title: 'Zero-Gravity Fit', body: 'Weight balanced around the ear axis.' },
        { title: '42h Battery', body: 'A full week of commuting per charge.' },
      ],
      cta: { label: 'See all specs', href: '#' },
    },
    {
      id: 'specs',
      recipe: 'R6',
      visualize: 'Parallax drift layers and statistic counters ticking in as you scroll in.',
      scroll: 'parallax',
      mood: 'clean, white-on-black',
      headline: 'The numbers speak.',
      stats: [
        { value: '16', label: 'custom drivers' },
        { value: '42h', label: 'battery life' },
        { value: '0.02s', label: 'ANC latency' },
        { value: '212g', label: 'alloy frame' },
      ],
    },
    {
      id: 'cta',
      recipe: 'R7',
      visualize: 'A magnetic buy button, a type marquee, and a closing statement that echoes the hero.',
      scroll: 'none',
      mood: 'calm, resolve',
      headline: 'Hear the room.\nThen hear the absence of it.',
      cta: { label: 'Buy AURA — $499', href: '#' },
    },
    {
      id: 'footer',
      recipe: 'R1',
      visualize: 'Minimal footer with brand, links, and magnetic social icons.',
      scroll: 'none',
      mood: 'quiet',
    },
  ],
}