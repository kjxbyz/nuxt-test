<template lang="pug">
div
  v-theme-provider(:theme="colorMode.preference")
    v-locale-provider(:locale="locale === 'zh' ? 'zhHans' : locale")
      NuxtLayout
        NuxtPage
</template>

<script setup lang="ts">
const { locale } = useI18n()
const colorMode = useColorMode()
</script>
