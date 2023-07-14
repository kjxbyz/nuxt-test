import type { RouteLocationNormalized } from 'vue-router'

export default defineNuxtRouteMiddleware((to) => {
  if (process.server) return
  if (isHydrated.value) return handleAuth(to)

  onHydrated(() => handleAuth(to))
})

function handleAuth(to: RouteLocationNormalized) {
  const { localStorage } = useAppPermission()
  const roles = localStorage.value ? localStorage.value.split(',') : []
  if (to.fullPath != '/' && !roles.includes(to.fullPath)) {
    return navigateTo('/401')
  }
}
