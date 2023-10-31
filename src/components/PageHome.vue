<script setup lang="ts">
  import { getCurrentInstance } from 'vue'
  import vuetify from '@/plugins/vuetify'

  import { heroImageUrl } from '@/utils/hero'

  const app = getCurrentInstance().appContext.app
  app.use(vuetify)
</script>

<template>
  <div>
    <!-- <div class="container mx-auto"> -->
    <v-app
      class="bg-background text-on-background"
      style="min-height: 100vh !important"
    >
      <!-- <v-app :theme="isDark ? 'dark' : 'light'"> -->
      <!-- https://vuetifyjs.com/en/features/application-layout/
        Navbar contains all nav components such as v-app-bar, v-system-bar, v-navigation-drawer, v-bottom-navigation -->
      <!-- <NavBar /> -->
      <v-main class="py-4">
        <div>
          <div
            style="
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding-top: 1.5rem /* 24px */;
              padding-bottom: 1.5rem /* 24px */;
            "
          >
            <DarkModeSwitch /><span style="margin-left: 0.5rem; /* 8px */"
              >A Fresh Start!</span
            >
          </div>
        </div>
      </v-main>
      <!-- https://vuetifyjs.com/en/features/application-layout/
        TheFooter contains the v-footer -->
      <!-- <TheFooter /> -->
    </v-app>
    <!-- </div> -->
  </div>
</template>

<style></style>
