# JMIT Landing Page

Static SPA for the **Japan Mongolia IT Consortium (JMIT)** built with Nuxt 3, Tailwind CSS v4, and Bun.

Focused on the consortium's **mission, vision, and focus areas** — intellectual cooperation between Japan and Mongolia.

## Stack

- [Bun](https://bun.sh) — package manager & runtime
- [Nuxt 3](https://nuxt.com) — Vue framework (configured as SPA, `ssr: false`)
- [Tailwind CSS v4](https://tailwindcss.com) — styling via `@tailwindcss/vite`

## Development

```bash
bun install
bun run dev
```

Open http://localhost:3000.

## Build (static SPA)

```bash
bun run generate
```

Outputs a static site to `.output/public/` — deploy this folder to any static host.

## Deploy

### Vercel (recommended, free)

1. Push this branch to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Nuxt. Keep defaults and deploy.
4. Live at `https://<project>.vercel.app`.

### GitHub Pages (free)

1. `bun run generate`
2. Push contents of `.output/public/` to the `gh-pages` branch (or wire up a GitHub Action).
3. Enable Pages in repo Settings → Pages → Source: `gh-pages` branch.

### Netlify (free)

1. Build command: `bun run generate`
2. Publish directory: `.output/public`

## Structure

```
app.vue                 Root layout
nuxt.config.ts          Nuxt + Tailwind config (SPA mode)
assets/css/main.css     Tailwind entry + theme
components/
  TheNavbar.vue
  HeroSection.vue
  MissionSection.vue    Purpose + Vision
  WhyNowSection.vue     Japan / Mongolia shared opportunities
  FocusAreasSection.vue 6 focus areas
  AchievementsSection.vue Stats & milestones
  AboutSection.vue      Executive Director (small avatar)
  TheFooter.vue
```

## Customizing

Edit copy directly in the component files under `components/`. The mission,
vision, and focus text is stored inline per component.
