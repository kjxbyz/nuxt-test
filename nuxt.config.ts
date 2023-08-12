// https://nuxt.com/docs/api/configuration/nuxt-config
import { isCI, isDevelopment, isWindows } from 'std-env'
import { currentLocales } from './config/i18n'
import { pwa } from './config/pwa'

export default defineNuxtConfig({
  typescript: {
    tsConfig: {
      exclude: ['../service-worker'],
      vueCompilerOptions: {
        target: 3.3,
      },
    },
  },
  ssr: false,
  css: [
    '@mdi/font/css/materialdesignicons.css',
    'vuetify/lib/styles/main.css',
    '~/assets/css/vars.css',
    '~/assets/css/global.css',
  ],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    '@vue-macros/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    'nuxt-vercel-analytics',
    ...(isDevelopment || isWindows) ? [] : ['nuxt-security'],
    '~/modules/build-env',
    '~/modules/tauri/index',
    '~/modules/pwa/index',
  ],
  macros: {
    setupSFC: true,
  },
  colorMode: {
    classSuffix: '',
  },
  devtools: { enabled: true },
  pwa,
  i18n: {
    locales: currentLocales,
    lazy: true,
    strategy: 'no_prefix',
    detectBrowserLanguage: false,
    langDir: 'locales',
    defaultLocale: 'en-US',
    vueI18n: './config/i18n.config.ts',
  },
})
