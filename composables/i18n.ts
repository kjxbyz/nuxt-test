import {matchLanguages} from "~/utils/language";
import {VueI18n} from "vue-i18n";
import {LocaleObject} from "vue-i18n-routing";
import { languageKey } from '~/constants'

function getDefaultLanguage(languages: string[]) {
  if (process.server) return 'en'
  return matchLanguages(languages, navigator.languages) || 'en'
}

export const useDefaultLanguage = () => {
  const i18n = useNuxtApp().vueApp.config.globalProperties.$i18n as VueI18n
  const { locales } = i18n
  const supportLanguages = (locales as LocaleObject[]).map(locale => locale.code)
  return useLocalStorage(languageKey, getDefaultLanguage(supportLanguages))
}
