# ╭──────────────────────────────────────────╮
# │           🔑 Keyly Docs                  │
# ╰──────────────────────────────────────────╯

# Install dependencies
install:
    @echo "\033[1;36m📦 Installing dependencies...\033[0m"
    @rm -rf node_modules && bun install
    @echo "\033[1;32m✓ Done!\033[0m"

alias run := dev

# Run development server (just run 4000 to pick a port)
dev port="3005":
    @echo "\033[1;35m🚀 Starting dev server on port {{port}}...\033[0m"
    @rm -rf .astro && bun run dev --port {{port}}

# Build & preview production (just prod 4000 to pick a port)
prod port="3005":
    @echo "\033[1;33m🔨 Building for production...\033[0m"
    @rm -rf .astro && rm -rf dist && bun run build
    @echo "\033[1;32m✓ Build complete!\033[0m"
    @echo "\033[1;34m👀 Starting preview server...\033[0m"
    @bun run preview --port {{port}}

# Regenerate the per-app template pages from the keyly repo (just sync-templates ../keyly/templates)
sync-templates dir="../keyly/templates":
    @node scripts/sync-templates.mjs {{dir}}
