<template lang="pug" src="./index.pug"/>
<style scoped lang="stylus" src="./index.styl"/>
<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
});
const title = ref('User')
</script>
