import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: true,
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    locales: [
      { code: "en", language: "en-US", name: "EN", file: "en.json" },
      { code: "ja", language: "ja-JP", name: "日本語", file: "ja.json" },
      { code: "mn", language: "mn-MN", name: "Монгол", file: "mn.json" },
    ],
    defaultLocale: "en",
    strategy: "prefix_except_default",
    lazy: true,
    langDir: "i18n/locales",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_locale",
      redirectOn: "root",
    },
  },
  app: {
    head: {
      title: "JMIT — Japan Mongolia IT Consortium",
      htmlAttrs: { lang: "en" },
      link: [{ rel: "icon", type: "image/png", href: "/logo.png" }],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "The Japan-Mongolia IT Consortium connects Japan and Mongolia, fostering collaboration between Mongolian IT startups and Japanese companies.",
        },
        {
          property: "og:title",
          content: "JMIT — Japan Mongolia IT Consortium",
        },
        {
          property: "og:description",
          content:
            "Intellectual cooperation between Japan and Mongolia — connecting IT startups with Japanese companies.",
        },
      ],
    },
  },
});
