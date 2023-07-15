<template lang="pug">
NuxtLink.link(href="/admin", target="_blank") Admin Page
//- | &nbsp;
|
| |
|
NuxtLink.link(href="/user", target="_blank") User Page
br
br
v-btn(@click="loginWithAdmin", variant="flat", color="blue") {{ $t('loginWithAdmin') }}
| &nbsp;
v-btn(@click="loginWithUser", variant="flat", color="blue") {{ $t('loginWithUser') }}
| &nbsp;
v-btn(@click="logout", variant="flat", color="red") {{ $t('logout') }}
| &nbsp;
v-date-picker
</template>

<script setup lang="ts">
const { useAdminPermission, useUserPermission, logOut } = useAppPermission()
const { t, locale } = useI18n()

const loginWithAdmin = () => {
  console.log('loginWithAdmin')
  useAdminPermission()
}

const loginWithUser = () => {
  console.log('loginWithUser')
  useUserPermission()
}

const logout = () => {
  console.log('logout')
  logOut()
}
</script>

<style scoped lang="stylus">
.link
  color red
  font-weight bolder
</style>
