<script setup>
defineProps({
  title: String,
  description: String,
})
</script>

<template>
  <div>
    <h1 class="page-title">{{ title }}</h1>
    <p class="page-description">{{ description }}</p>
  </div>
</template>

<style scoped>
  .page-title {
    @apply text-[64px] font-semibold text-nowrap mb-6
  }
  .page-description {
    @apply text-base font-normal mb-8
  }
</style>