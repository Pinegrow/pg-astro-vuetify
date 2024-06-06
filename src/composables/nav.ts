import { computed } from 'vue'
import site from '../site'
import { isClient, useBrowserLocation } from '@vueuse/core'

export const useNav = () => {
  const navlinksFromConfig = site.nav
  const navlinks = computed(() => navlinksFromConfig /* || navlinksFromRouter*/)

  const currentLocation = useBrowserLocation()

  return {
    navlinks,
    currentLocation,
  }
}
