<script setup>
defineProps({
  id: String,
  type: {
    type: String,
    default: 'text'
  },
  modelValue: String,
  placeholder: String,
  errorMessage: String
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <input
      class="base-input"
      :id="id"
      :type="type"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
    />
    <span v-if="errorMessage" class="base-input-error">{{ errorMessage }}</span>
  </div>
</template>

<style scoped lang="scss">
.base-input {
  @apply rounded-lg border border-white px-4 py-3;
  width: 328px;
  height: 46px;
  &-error {
    @apply flex mt-1 text-xs text-rose-500
  }
}
</style>