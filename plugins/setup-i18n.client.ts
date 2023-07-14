import type { VueI18n } from 'vue-i18n'

export default defineNuxtPlugin(async (nuxt) => {
  const i18n = nuxt.vueApp.config.globalProperties.$i18n as VueI18n
  const { setLocale } = i18n
  const lang = useDefaultLanguage()

  if (lang.value !== i18n.locale) {
    await setLocale(lang.value);
  }

  watch(
    [$$(lang), isHydrated],
    () => {
      if (isHydrated.value && lang.value !== i18n.locale) {
        setLocale(lang.value);
      }
    },
    { immediate: true },
  )
})
