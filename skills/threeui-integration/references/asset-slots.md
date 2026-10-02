# Mapping user assets onto ThreeUI

ThreeUI is a library of finished effects, not a scene framework. Classify each asset the user provides into one of three outcomes and tell them which before building.

## Outcome A — tunable through props (no code beyond props)
Colors, hue/saturation/brightness, speed, scale, opacity, mode (dark/light), variant, fonts/weights/sizes for the full-page components (`customization`). Take brand colors and font names here. Fonts: for iframe pages the allowed fonts are the checkpoint list in each component's contract (see catalog `controls`); arbitrary web fonts are not injectable without adapting the HTML.

## Outcome B — swappable by editing a copied asset or source file
Components with local assets at known paths can have those files replaced **at the same path/name/format** (e.g. `Gallery`: 5 WebP textures; `CharacterCarousel`: 4 portrait JPEGs; `Sketchbook`: 14 artworks + 3 fonts via `assetBaseUrl`; `Kage`: 14 WebP layers).
Procedure:
1. Copy runtime assets into `public/` (see install doc), or vendor the component source.
2. Read `upstream-skills/<id>.md` for the exact filenames, count and dimensions the document expects.
3. Convert the user's images to the same format/aspect/size (`sharp`/`cwebp`), keep file names, keep count (or edit the document's list if you copied the source).
4. Run and eyeball: wrong aspect ratios show as stretched/cropped panels.
Byte-exact authored HTML documents embed text, layout and media; changing content means editing the copied HTML, which is allowed since it is MIT, but it is manual work. Say so.

## Outcome C — not supported, needs new code
- **User 3D models (GLB/GLTF/OBJ/FBX)**: no ThreeUI component loads external models. Options, in order of effort:
  1. Keep the ThreeUI effect as the backdrop and render the model in a separate layer (`@react-three/fiber` + `@react-three/drei` `useGLTF`, transparent canvas stacked above the backdrop).
  2. Vendor a Three.js-based component (runtime says `Three.js rN`) and add `GLTFLoader` + the model into its scene. Match its Three.js version (r128/r149/r160/r165 differ in color management and API) or the lighting will look wrong.
  3. Don't force it: if the component is raw WebGL / Canvas 2D / DOM, a model cannot be added; pick another component.
  Prepare models: Draco/meshopt-compress, < 5 MB, origin at the base, real-world scale, PBR textures ≤ 2K, add an HDRI/env map if the scene has none.
- **User video** in components built on embedded MP4: only by editing the copied document.
- **Audio**: Kage ships with audio removed; adding audio is custom work and needs a user gesture to play.
- **Arbitrary text/copy** in effect canvases (wordmarks, typography vortex): check the contract; many take fixed authored text.

## Where to put user files
```
public/threeui/            runtime documents copied from the package (keep upstream relative paths)
public/assets/threeui-user/{images,models,fonts,video}/   user-provided originals, plus optimized variants
src/vendor/threeui/<name>/ only if source was copied
```
Record every placed file in `templates/asset-manifest.md` (path, format, size, source, license).

## Rights
Never import images, models or fonts the user does not have rights to. Ask for the license of each third-party asset; ThreeUI's bundled images are for use under the repo's asset licenses, not a stock library.
