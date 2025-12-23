# Install dependencies
install:
    @rm -rf node_modules && bun install

# Run development server
dev:
    @rm -rf .astro && bun run dev

# Build for production
prod:
    pnpm run build

