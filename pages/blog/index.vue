<template lang="pug">
ContentList(path="/blog", v-slot="{ list }")
  NuxtLink(v-for="article in list", :href="article._path", :key="article._id")
    h2 {{ article.title }}
    //- p {{ article.description }}
</template>
