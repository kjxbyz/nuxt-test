<template lang="pug">
ContentDoc(v-slot="{ doc }", :query="{path: '/blog', where: [{ _path: { $eq: route.fullPath } }], limit: 1}")
  //- h1 {{ doc.title }}
  ContentRenderer(:value="doc")
</template>
<script setup lang="ts">
const route = useRoute()
</script>
