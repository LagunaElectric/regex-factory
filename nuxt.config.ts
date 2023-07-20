// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/devtools",
    "@nuxtjs/eslint-module",
    "@nuxtjs/color-mode",
    "nuxt-mongoose",
    "@vueuse/nuxt",
    "nuxt-icon",
  ],
})
