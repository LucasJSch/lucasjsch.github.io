# Lucas Scheinkerman portfolio

Next.js App Router, TypeScript and Tailwind CSS. Static export for GitHub Pages.

## Local development

Use Node 22.23.3 (`nvm use`), then `npm ci` and `npm run dev`.
Run `npm run lint`, `npm run typecheck`, and `npm run build` before shipping.
The build exports `out/`; preview it with `python3 -m http.server 8000 --directory out`.

## Content

Edit typed experience, case studies and skill groups in `app/content.ts`.
Page sections live in `app/page.tsx`, client navigation/theme controls in
`app/components.tsx`, and the design system in `app/globals.css`.
Media and the CV are served from `public/assets/` at the existing `/assets/` URLs.

## GitHub Pages

In repository Settings → Pages, select **GitHub Actions** as the build source.
The workflow checks pull requests without deploying. Pushes to `main` and manual
workflow runs build and deploy `out/`. No base path is required for this user site.
No Node server, API routes, or server image optimizer is needed in production.

Visual structure inspired by https://owaisasghar.github.io/; implemented locally
with Lucas’s own portfolio content and media. No reference-site personal data or
source bundle is included. External skill icons still require their image hosts.
