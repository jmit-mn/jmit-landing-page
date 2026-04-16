# i18n (en/ja/mn) + SSR — Design Spec

**Date:** 2026-04-16
**Status:** Approved

## Overview

Add multilingual support (English, Japanese, Mongolian) to the JMIT landing page using `@nuxtjs/i18n`. Enable SSR via `ssr: true` with static pre-rendering (`nuxt generate`) for GitHub Pages deployment.

## Architecture

- **Module:** `@nuxtjs/i18n` v9 (Nuxt 3 canonical i18n module)
- **SSR:** `ssr: true` — pages pre-rendered at build time via `nuxt generate`
- **Deployment:** GitHub Pages (static) — unchanged
- **Routing strategy:** `prefix_except_default`
  - English (default): `/` — no prefix
  - Japanese: `/ja/`
  - Mongolian: `/mn/`
- **Default locale:** `en`
- **Locale order/priority:** en → ja → mn
- **Browser detection:** enabled with cookie persistence — first-time visitors auto-land on detected locale; choice remembered

## File Structure

### New files

```
i18n/
  locales/
    en.json    — all current English copy, keyed
    ja.json    — Japanese draft translations
    mn.json    — Mongolian draft translations
i18n.config.ts — i18n module configuration
```

### Modified files

```
nuxt.config.ts              — ssr: true, add @nuxtjs/i18n module
package.json                — add @nuxtjs/i18n dependency
components/TheNavbar.vue    — language switcher + $t()
components/HeroSection.vue  — $t()
components/MissionSection.vue — $t()
components/WhyNowSection.vue — $t()
components/FocusAreasSection.vue — $t()
components/AchievementsSection.vue — $t()
components/MemberCompaniesSection.vue — $t() for labels (company names literal)
components/AboutSection.vue — $t()
components/TheFooter.vue    — $t(), contact email
```

## Translation Key Strategy

Flat dotted namespaces per section:

- `nav.mission`, `nav.whyNow`, `nav.focus`, etc.
- `hero.title`, `hero.subtitle`, `hero.description`
- `mission.kicker`, `mission.heading`, `mission.body`
- `achievements.milestones[0].date`, `achievements.milestones[0].event`
- etc.

## What stays literal (NOT translated)

- Brand names: "JMIT", "Gotanda Valley", "Tab Solution Co.,Ltd", "JUGAMO", "Gertech Inc", "DX Mongolia LLC", "Tab Systems Mongolia LLC"
- Person names: "Sura.Kh", "Mori Yoshitaka", "B.Khatanbold", etc.
- Contact email: jmit-consortium@googlegroups.com

## Translation Drafting Rules

- **Tone:** Professional consortium-voice matching the English register
- **Technical terms (ja):** Katakana — コンソーシアム, R&D, エンジニア
- **Technical terms (mn):** Transliterate/loan where Cyrillic equivalent isn't established
- **Dates (ja):** `2024年11月` format
- **Dates (mn):** `2024 оны 11 сар` format
- **Names/orgs:** Untranslated (rule above)

## Language Switcher UI

Navbar, right side:

```
[EN]  日本語  Монгол
```

- Active locale: full black text
- Inactive: muted slate-500 with hover
- Click routes to same page in target locale
- Mobile: collapses to current locale code, opens small popover on tap

## Contact

Site-wide contact email: `jmit-consortium@googlegroups.com`
(Replaces any other addresses from presentation materials)

## Verification

1. `bun run dev` — walk `/`, `/ja/`, `/mn/` manually
2. `bun run generate` — inspect `.output/public/` for `ja/` and `mn/` directories
3. Check `<html lang="...">` updates per locale
4. Check `<head>` contains `hreflang` alternate links
5. Verify GitHub Pages deploy still works

## Out of Scope

- No CMS / no runtime translation loading — JSON files bundled at build time
- No per-locale images — logo stays single-source
- No right-to-left support — not needed for en/ja/mn
- No pluralization rules — no count-dependent strings in current copy
