// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver, useNuxt } from '@nuxt/kit'
import { isCI, isDevelopment, isWindows } from 'std-env'
import { currentLocales } from './config/i18n'
import { pwa } from './config/pwa'

const { resolve } = createResolver(import.meta.url)

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
  appConfig: {
    storage: {
      driver: process.env.NUXT_STORAGE_DRIVER ?? (isCI ? 'cloudflare' : 'fs'),
    },
  },
  runtimeConfig: {
    adminKey: '',
    cloudflare: {
      accountId: '',
      namespaceId: '',
      apiToken: '',
    },
    public: {
      privacyPolicyUrl: '',
      // We use LibreTranslate (https://github.com/LibreTranslate/LibreTranslate) as
      // our default translation server #76
      translateApi: '',
      // Use the instance where Elk has its Mastodon account as the default
      defaultServer: 'm.webtoo.ls',
      singleInstance: false,
    },
    storage: {
      fsBase: 'node_modules/.cache/app',
    },
  },
  hooks: {
    'prepare:types': function ({ references }) {
      references.push({ types: '@types/wicg-file-system-access' })
    },
    'nitro:config': function (config) {
      const nuxt = useNuxt()
      config.virtual = config.virtual || {}
      config.virtual['#storage-config'] = `export const driver = ${JSON.stringify(nuxt.options.appConfig.storage.driver)}`
    },
    'vite:extendConfig': function (config, { isServer }) {
      if (isServer) {
        const alias = config.resolve!.alias as Record<string, string>
        for (const dep of ['eventemitter3', 'isomorphic-ws'])
          alias[dep] = resolve('./mocks/class')
        for (const dep of ['shiki-es', 'fuse.js'])
          alias[dep] = 'unenv/runtime/mock/proxy'
        const resolver = createResolver(import.meta.url)

        config.plugins!.unshift({
          name: 'mock',
          enforce: 'pre',
          resolveId(id) {
            if (id.match(/(^|\/)(@tiptap)\//))
              return resolver.resolve('./mocks/tiptap.ts')
            if (id.match(/(^|\/)(prosemirror)/))
              return resolver.resolve('./mocks/prosemirror.ts')
          },
        })

        const noExternal = config.ssr!.noExternal as string[]
        noExternal.push('masto', '@fnando/sparkline', 'vue-i18n', '@mastojs/ponyfills')
      }
    },
  },
})
