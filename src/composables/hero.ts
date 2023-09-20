import { pg_background_urls } from '~~/themes/pg-vuetify/tokens.mjs'

export const useHero = () => {
  const heroImageSrc =
    pg_background_urls['design-image-large'] ||
    pg_background_urls['design-image']

  // const img = useImage()
  // const heroImage = computed(() => {
  //   return img.getSizes(heroImageSrc, {
  //     sizes: 'xs:100vw sm:100vw md:100vw lg:100vw xl:100vw',
  //     modifiers: {
  //       format: 'webp',
  //       quality: 70,
  //       height: 800,
  //     },
  //   })
  // })

  // const heroLazySrc = computed(() => {
  //   return img(heroImageSrc, { width: 10, quality: 70 })
  // })

  // const heroSrc = computed(() => {
  //   return img(heroImageSrc, { height: 800, quality: 70 })
  // })

  return {
    heroImageSrc,
  }
}
