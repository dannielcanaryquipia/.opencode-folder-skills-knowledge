#!/usr/bin/env bash
# Run the real ThreeUI Community catalog locally so candidates can be seen live, with controls and a Code tab.
# Usage: scripts/preview.sh   (then open the printed URL, e.g. http://localhost:5173/browse)
set -euo pipefail
DIR="${THREEUI_SRC:-.threeui-src}"
[ -d "$DIR/.git" ] || "$(dirname "$0")/fetch-threeui.sh" "$DIR"
cd "$DIR"
[ -d node_modules ] || npm install --no-audit --no-fund
echo "Starting ThreeUI preview. Use /browse and the search box; each component page has live controls, variants and source."
exec npm run dev -- --host 127.0.0.1
