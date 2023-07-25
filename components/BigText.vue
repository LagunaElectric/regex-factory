<script setup lang="ts">
import { computed } from "vue"

export type BigTextProps = {
  label?: string
  modelValue?: string
  readonly?: boolean
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
      class="resize-none min-w-32 w-full h-full bg-primary-light-700 dark:bg-primary-dark-700 dark:text-neutral-200 border-primary-light-border dark:border-primary-dark-border border tracking-wide rounded-sm p-2"
      name="input"
      id="textInput"
      cols="30"
      rows="10"
      autocomplete="off"
      spellcheck="false"
      :readonly="props.readonly"
      v-model="value"
    ></textarea>
  </div>
</template>
