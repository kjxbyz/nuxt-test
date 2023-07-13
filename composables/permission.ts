import { rolesKey } from '~/constants'

export const useAppPermission = () => {
  const localStorage = useLocalStorage(rolesKey, '')

  function useAdminPermission() {
    localStorage.value = ['/', '/admin', '/user'].join()
  }

  function useUserPermission() {
    localStorage.value = ['/', '/user'].join()
  }

  function logOut() {
    localStorage.value = ''
  }

  return {
    localStorage,
    useAdminPermission,
    useUserPermission,
    logOut,
  }
}
