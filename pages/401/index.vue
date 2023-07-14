<template lang="pug">
h1.title {{ title }}
.desc No permission to view
NuxtLink(href="/") Back to home
</template>
<script setup lang="ts">
definePageMeta({
  layout: "none",
});
const title = ref('401')
</script>

<style scoped lang="stylus">
.title
  color red
  font-weight bolder
  font-size 24px

.desc
  color blue
</style>
