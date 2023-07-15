// https://nuxt.com/docs/api/configuration/nuxt-config
import { i18n } from './config/i18n'

export default defineNuxtConfig({
  ssr: false,
  css: ['@mdi/font/css/materialdesignicons.css', 'vuetify/lib/styles/main.css', '~/assets/css/vars.css', '~/assets/css/global.css'],
  build: {
    transpile: ['vuetify'],
  },
  modules: ['@vueuse/nuxt', '@nuxtjs/i18n', '@vue-macros/nuxt', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxt/content', 'nuxt-vercel-analytics'],
  macros: {
    setupSFC: true,
  },
  colorMode: {
    classSuffix: '',
  },
  devtools: { enabled: true },
  i18n,
})
