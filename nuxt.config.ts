// https://nuxt.com/docs/api/configuration/nuxt-config
import { i18n } from './config/i18n'
export default defineNuxtConfig({
  ssr: false,
  css: ['vuetify/lib/styles/main.css'],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    '@vue-macros/nuxt',
  ],
  macros: {
    setupSFC: true,
  },
  devtools: { enabled: true },
  i18n,
})
