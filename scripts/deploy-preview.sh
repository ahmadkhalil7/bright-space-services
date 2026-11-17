#!/usr/bin/env bash
# Builds the static site and publishes it to the gh-pages branch,
# which GitHub Pages serves at https://ahmadkhalil7.github.io/bright-space-services/
set -euo pipefail
cd "$(dirname "$0")/.."

BASE_PATH="${BASE_PATH-/bright-space-services}" npm run build
touch out/.nojekyll   # let GitHub Pages serve the _next/ folder

SRC_SHA="$(git rev-parse --short HEAD)"
TMP="$(mktemp -d)"
cp -R out/. "$TMP"
cd "$TMP"
git init -q -b gh-pages
git add -A
git -c user.name="Roshan Site Deploy" -c user.email="roshancleaning@gmail.com" \
  commit -q -m "Deploy preview from ${SRC_SHA}"
git push -q -f "$(git -C "$OLDPWD" remote get-url origin)" gh-pages
echo "Deployed ${SRC_SHA} to gh-pages"
