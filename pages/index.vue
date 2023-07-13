<template lang="pug" src="./index.pug"/>
<style scoped lang="stylus" src="./index.styl"/>
<script setup lang="ts">
const { useAdminPermission, useUserPermission, logOut } = useAppPermission()

const loginWithAdmin = () => {
  console.log("loginWithAdmin");
  useAdminPermission();
}

const loginWithUser = () => {
  console.log("loginWithUser");
  useUserPermission();
}

const logout = () => {
  console.log("logout");
  logOut();
}
</script>
