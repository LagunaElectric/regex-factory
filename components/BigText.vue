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
  <div class="flex flex-col border-2 border-dashed border-green-400">
    <label v-if="props.label" for="textInput">{{ props.label }}</label>
    <textarea
      class="resize-none min-w-32 w-full h-full aspect-square min-h-min border-4 border-blue-500"
      name="input"
      id="textInput"
      cols="30"
      rows="10"
      autocomplete="off"
      v-model="value"
    ></textarea>
  </div>
</template>
