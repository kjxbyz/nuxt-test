import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { PurpleTheme } from '@/theme/LightTheme'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: false,
    components,
    directives,
    theme: {
      defaultTheme: 'PurpleTheme',
      themes: {
        PurpleTheme,
      },
    },
  })
  nuxtApp.vueApp.use(vuetify)
})
