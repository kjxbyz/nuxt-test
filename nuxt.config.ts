// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: [
    '@vueuse/nuxt',
  ],
  devtools: { enabled: true },
})
