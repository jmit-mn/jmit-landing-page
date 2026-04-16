import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: false,
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
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
        { property: "og:title", content: "JMIT — Japan Mongolia IT Consortium" },
        {
          property: "og:description",
          content:
            "Intellectual cooperation between Japan and Mongolia — connecting IT startups with Japanese companies.",
        },
      ],
    },
  },
});
