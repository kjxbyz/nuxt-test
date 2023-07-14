<template lang="pug">
h1.title {{ title }}
.desc Div
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})
const title = ref('User')
</script>

<style scoped lang="stylus">
.title
  color red
  font-weight bolder
  font-size 24px

.desc
  color blue
</style>
