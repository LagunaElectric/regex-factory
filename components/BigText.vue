<script setup lang="ts">
import { computed } from "vue"

export type BigTextProps = {
  label?: string
  modelValue?: string
}

const props = defineProps<BigTextProps>()
const emit = defineEmits(["update:modelValue"])

const value = computed({
  get() {
    return props.modelValue ?? ""
  },
  set(value) {
    emit("update:modelValue", value)
  },
})
</script>

<template>
  <div class="flex flex-col">
    <label v-if="props.label" for="textInput" class="dark:text-neutral-200">{{ props.label }}</label>
    <textarea
      class="resize-none min-w-32 w-full h-full dark:bg-primary-700 dark:text-neutral-200 dark:border-primary-border border font-semibold tracking-wide rounded-sm p-2"
      name="input"
      id="textInput"
      cols="30"
      rows="10"
      autocomplete="off"
      spellcheck="false"
      v-model="value"
    ></textarea>
  </div>
</template>
