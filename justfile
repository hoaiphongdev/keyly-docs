# ╭──────────────────────────────────────────╮
# │           🔑 Keyly Docs                  │
# ╰──────────────────────────────────────────╯

# Install dependencies
install:
    @echo "\033[1;36m📦 Installing dependencies...\033[0m"
    @rm -rf node_modules && bun install
    @echo "\033[1;32m✓ Done!\033[0m"

# Run development server
dev:
    @echo "\033[1;35m🚀 Starting dev server...\033[0m"
    @rm -rf .astro && bun run dev

# Build & preview production
prod:
    @echo "\033[1;33m🔨 Building for production...\033[0m"
    @rm -rf .astro && bun run build
    @echo "\033[1;32m✓ Build complete!\033[0m"
    @echo "\033[1;34m👀 Starting preview server...\033[0m"
    @bun run preview
