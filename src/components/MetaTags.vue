<script setup lang="ts">
  import site from '~/site'
  import { useHead, useSeoMeta } from 'unhead'

  import checkDarkTheme from '@/composables/dark-color-scheme-check?raw'
  import type { Script } from '@unhead/schema'
  type TurboScript = Script & { once: true }

  import { pg_font_urls } from '~~/themes/pg-vuetify/tokens.mjs'

  const link: any = [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.svg',
    },
  ]
  const noscript: any = []

  if (pg_font_urls.length) {
    const googleapis = 'https://fonts.googleapis.com'
    const gstatic = 'https://fonts.gstatic.com'
    link.push(
      { rel: 'dns-prefetch', href: googleapis },
      { rel: 'dns-prefetch', href: gstatic },
      { rel: 'preconnect', crossorigin: 'anonymous', href: googleapis },
      { rel: 'preconnect', crossorigin: 'anonymous', href: gstatic },
      {
        rel: 'preload',
        as: 'style',
        onload: "this.onload=null;this.rel='stylesheet'",
        href: pg_font_urls.toString(),
      },
    )
    noscript.push(
      `<link rel="stylesheet" crossorigin="anonymous" href="${pg_font_urls.toString()}" />`,
    )
  }

  const { title, description } = site

  useSeoMeta({
    title,
    ogTitle: title,
    description,
    ogDescription: description,
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
  })

  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - ${title}` : title
    },
    htmlAttrs: { lang: 'en-US' },
    meta: [
      { property: 'charset', content: 'utf-8' },
      {
        property: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { property: 'author', content: 'Pinegrow' },
      {
        property: 'twitter:image',
        content: 'https://icons.vuetelescope.com/vue.svg',
      },
      {
        property: 'twitter:image:alt',
        content: 'Vue',
      },
      {
        property: 'twitter:site',
        content: '@pinegrow',
      },
      {
        property: 'twitter:card',
        content: 'summary',
      },
    ],
    script: [{ innerHTML: checkDarkTheme, once: true } as TurboScript],
    link,
    noscript,
  })
</script>

<template>
  <div></div>
</template>
