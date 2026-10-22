# Repository guide

- This is a Next.js 16 App Router portfolio (React 19). `src/app/page.tsx` composes the home page; `src/app/projects/page.tsx` reuses the Projects section as a standalone route. Shared sections live in `src/components/`, project content in `src/data/projects.ts`, and project previews in `public/projects/`.
- Use npm and the checked-in `package-lock.json`: `npm run dev`, `npm run lint`, `npm run build`, and `npm run start`. There is no test or standalone typecheck script; `next build` performs TypeScript checking.
- `next.config.ts` enables Cache Components and partial prefetching. Dynamic values such as `new Date()` need to be cached (for example, with `"use cache"`) or prerendering can fail.
- Tailwind CSS v4 is loaded through the Turbopack CSS loader in `next.config.ts`; the active global theme is `src/app/globals.css`. `src/app/test.css` is not imported.
- TypeScript is strict, and the `@/*` alias resolves to `src/*`.
