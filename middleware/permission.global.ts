import type { RouteLocationNormalized } from 'vue-router'

export default defineNuxtRouteMiddleware((to) => {
  if (process.server) return
  console.log('running global middleware', to)
  if (isHydrated.value) return handleAuth(to)

  onHydrated(() => handleAuth(to))
})

function handleAuth(to: RouteLocationNormalized) {
  const { localStorage } = useAppPermission()
  const roles = localStorage.value ? localStorage.value.split(',') : []
  console.log('roles', roles)
  if (to.fullPath != '/' && !roles.includes(to.fullPath)) {
    console.log('navigateTo')
    return navigateTo('/')
  }
}
