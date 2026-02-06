#!/usr/bin/env bash
set -euo pipefail

BASE_URL="https://sabaris-56.opah-gar.ts.net/forgejo"
OWNER="Sabaris"
REPO="sabaris-brand-system"

TAG="${1:-latest}"
OUT_FILE="src/styles/brand-tokens.css"
DOC_FILE="docs/BRAND_TOKENS.md"

require_cmd() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "Missing required command: $1" >&2
    exit 1
  fi
}

require_cmd curl
require_cmd unzip
require_cmd node

if [ "$TAG" = "latest" ]; then
  RELEASE_URL="$BASE_URL/api/v1/repos/$OWNER/$REPO/releases/latest"
else
  RELEASE_URL="$BASE_URL/api/v1/repos/$OWNER/$REPO/releases/tags/$TAG"
fi

release_json=$(curl -fsSL "$RELEASE_URL")

# Extract tag and asset URLs via node (no jq dependency)
read -r TAG_NAME TEMPLATES_URL ASSETS_URL <<EOF_PARSE
$(node - <<'NODE'
const fs = require('fs');
const input = fs.readFileSync(0, 'utf8');
const data = JSON.parse(input);
const assets = data.assets || [];
const pick = (prefix) => assets.find((a) => a.name?.startsWith(prefix) && a.name?.endsWith('.zip'));
const templates = pick('sabaris-templates-');
const assetsZip = pick('sabaris-assets-');
const tag = data.tag_name || 'unknown';
console.log([tag, templates?.browser_download_url || '', assetsZip?.browser_download_url || ''].join('\n'));
NODE
)
EOF_PARSE

if [ -z "$TEMPLATES_URL" ] && [ -z "$ASSETS_URL" ]; then
  echo "No release assets found for tag: $TAG_NAME" >&2
  exit 1
fi

tmpdir=$(mktemp -d)
trap 'rm -rf "$tmpdir"' EXIT

if [ -n "$TEMPLATES_URL" ]; then
  curl -fsSL -o "$tmpdir/templates.zip" "$TEMPLATES_URL"
  unzip -q "$tmpdir/templates.zip" -d "$tmpdir/templates"
fi

if [ -n "$ASSETS_URL" ]; then
  curl -fsSL -o "$tmpdir/assets.zip" "$ASSETS_URL"
  unzip -q "$tmpdir/assets.zip" -d "$tmpdir/assets"
fi

# Find tokens.css inside extracted archives
TOKENS_PATH=$(find "$tmpdir" -type f -path "*/tokens/tokens.css" -print -quit)
if [ -z "$TOKENS_PATH" ]; then
  echo "tokens.css not found in release assets" >&2
  exit 1
fi

mkdir -p "$(dirname "$OUT_FILE")"
cp "$TOKENS_PATH" "$OUT_FILE"

# Update version line in docs (if present)
if [ -f "$DOC_FILE" ]; then
  if grep -q "^\- Current version:" "$DOC_FILE"; then
    sed -i "s/^\- Current version:.*/- Current version: ${TAG_NAME}/" "$DOC_FILE"
  else
    printf "\n- Current version: %s\n" "$TAG_NAME" >> "$DOC_FILE"
  fi
fi

echo "Updated $OUT_FILE from $TAG_NAME"
