// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/devtools",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
  ],
  googleFonts: {
    families: {
      "Fira+Code": true,
      "Fira+Sans": true,
    },
  },
  colorMode: {
    classSuffix: "",
  },
})
