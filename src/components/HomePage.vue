<script setup lang="ts">
  import { getCurrentInstance } from 'vue'

  import pinia from '@/plugins/pinia'
  import head from '@/plugins/head'
  import vuetify from '@/plugins/vuetify'

  import { pg_background_urls } from '~~/themes/pg-vuetify/tokens.mjs'

  const heroImageSrc =
    pg_background_urls['design-image-large'] ||
    pg_background_urls['design-image']

  const app = getCurrentInstance().appContext.app
  app.use(pinia)
  app.use(head)
  app.use(vuetify)
</script>

<template>
  <v-app>
    <v-main>
      <SampleCard />
    </v-main>
  </v-app>
</template>

<style></style>
