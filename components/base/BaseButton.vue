<script setup>

</script>

<template>
  <button class="base-button">
    <slot></slot>
  </button>
</template>

<style scoped>
.base-button {
  @apply text-white px-6 py-3 rounded-xl;
  width: 97px;
  height: 46px;
  background: linear-gradient(to bottom left, #0098EA 0%, #002584 100%)
}
</style>