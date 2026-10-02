#!/usr/bin/env bash
# Shallow-clone ThreeUI Community into ./.threeui-src (gitignored) so the agent can read real source.
set -euo pipefail
DEST="${1:-.threeui-src}"
if [ -d "$DEST/.git" ]; then git -C "$DEST" pull --ff-only --depth 1; else git clone --depth 1 https://github.com/MengTo/threeui.git "$DEST"; fi
grep -qxF "$DEST/" .gitignore 2>/dev/null || echo "$DEST/" >> .gitignore
echo "ThreeUI source at $DEST (commit $(git -C "$DEST" rev-parse --short HEAD))"
