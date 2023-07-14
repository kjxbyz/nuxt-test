<template lang="pug">
.title
  | Header
  | &nbsp;
  v-select.select(label="Select", v-model="lang", :items="locales", item-title="name", item-value="code")
</template>

<script setup lang="ts">
const lang = useDefaultLanguage()
const { locales } = useI18n()
</script>

<style scoped lang="stylus">
.title
  display flex
  align-items center
  font-size 3em
  color darksalmon
  .select
    //display inline-block
    ::v-deep(.v-input__control)
      width 250px
    ::v-deep(.v-input__details)
      display none
</style>
