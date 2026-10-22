# Repository guide

- This is a single Next.js App Router app (Next 16, React 19) under `src/app`; `src/app/page.tsx` is the home page and shared UI is in `src/components/`.
- Use the npm scripts in `package.json`: `npm run dev` for local development, `npm run lint` for ESLint, `npm run build` for a production build, and `npm run start` to serve a built app. There is no test or typecheck script defined.
- TypeScript is strict; the `@/*` import alias resolves to `src/*`.
- `package-lock.json` is the checked-in lockfile; use npm for dependency installation and script execution.
