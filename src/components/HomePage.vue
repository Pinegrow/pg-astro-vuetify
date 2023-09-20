<script setup lang="ts">
  import { getCurrentInstance } from 'vue'

  import pinia from '@/plugins/pinia'
  import head from '@/plugins/head'
  import vuetify from '@/plugins/vuetify'
  import { useHero } from '@/composables/hero'

  const { heroImageSrc } = useHero()

  const app = getCurrentInstance().appContext.app
  app.use(pinia)
  app.use(head)
  app.use(vuetify)
</script>

<template>
  <v-app>
    <v-main> <span>A Fresh Start!</span> </v-main>
  </v-app>
</template>

<style></style>
