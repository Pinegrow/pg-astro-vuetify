<script setup lang="ts">
  import { ref } from 'vue'
  const loading = ref(false)
  const selection = ref(1)

  const reserve = () => {
    loading.value = true

    setTimeout(() => (loading.value = false), 2000)
  }
</script>
<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
    elevation="4"
  >
    <template #loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-img
      cover
      height="250"
      src="https://images.unsplash.com/photo-1654870468927-92c943da24fe?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDEzfHxiYWtlcnklMjBjb2ZmZWV8ZW58MHx8fHwxNjkzNTcxNzY4fDA&ixlib=rb-4.0.3&q=85"
    ></v-img>
    <v-card-item>
      <v-card-title class="text-primary">Cafe Badilico</v-card-title>
      <v-card-subtitle>
        <span class="me-1 text-secondary">Local Favorite</span>
        <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
      </v-card-subtitle>
    </v-card-item>
    <v-card-text class="">
      <v-row align="center" class="mx-0">
        <v-rating
          :model-value="4.5"
          color="amber"
          density="compact"
          half-increments
          readonly
          size="small"
        ></v-rating>
        <div class="text-grey ms-4">4.5 (413)</div>
      </v-row>
      <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>
      <div class="">
        Small plates, salads & sandwiches - an intimate setting with 12 indoor
        seats plus patio seating.
      </div>
    </v-card-text>
    <v-divider class="mx-4 mb-1"></v-divider>
    <v-card-title>Tonight's availability</v-card-title>
    <div class="px-4">
      <v-chip-group v-model="selection">
        <v-chip>5:30PM</v-chip>
        <v-chip>7:30PM</v-chip>
        <v-chip>8:00PM</v-chip>
        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </div>
    <v-card-actions>
      <v-btn color="primary" variant="tonal" @click="reserve"> Reserve </v-btn>
    </v-card-actions>
  </v-card>
</template>
<style scoped></style>
