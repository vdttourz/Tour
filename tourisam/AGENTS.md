<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Development

This Next.js app lives in `tourisam/` at the repository root. No secrets, databases, or external services are required.

From the repository root:

- Install dependencies: `npm ci --prefix tourisam`
- Dev server: `npm run dev --prefix tourisam` (port 3000, hostname `0.0.0.0`)
- Lint: `npm run lint --prefix tourisam`
- Production build: `npm run build --prefix tourisam`

Open the app at `http://127.0.0.1:3000` or `http://localhost:3000`. The inquiry form on `/contact` posts to `/api/inquiry` and returns JSON. `allowedDevOrigins` includes `127.0.0.1` so Next.js dev HMR works on that host.
