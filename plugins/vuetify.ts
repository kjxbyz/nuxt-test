import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as labs from 'vuetify/labs/components'
import * as directives from 'vuetify/directives'
import { en, zhHans } from 'vuetify/locale'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: false,
    locale: {
      locale: 'en',
      fallback: 'en',
      messages: { zhHans, en },
    },
    components: {
      ...components,
      ...labs,
    },
    directives,
  })
  nuxtApp.vueApp.use(vuetify)
})
