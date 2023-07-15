<template lang="pug">
.title
  NuxtLink(href="/") Home
  | &nbsp;
  NuxtLink(href="/blog") Blog
  | &nbsp;
  v-select.select(label="Select", v-model="lang", :items="locales", item-title="name", item-value="code")
  | &nbsp;
  v-select.select(label="Select", v-model="colorMode.preference", :items="darkModes", item-title="text", item-value="value")
</template>

<script setup lang="ts">
const lang = useDefaultLanguage()
const { locales } = useI18n()
const colorMode = useColorMode()
const darkModes = ref([{value: 'system', text: 'System'}, {value: 'light', text: 'Light'}, {value: 'dark', text: 'Dark'}]);
</script>

<style scoped lang="stylus">
.title
  display flex
  align-items center
  font-size 3em
  color var(--color-primary)
  .select
    //display inline-block
    flex unset
    ::v-deep(.v-input__control)
      width 250px
    ::v-deep(.v-input__details)
      display none
</style>
