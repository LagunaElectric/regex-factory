<script setup lang="ts">
export type FactoryRuleProps = {
  match: string
  substitute: string
  isRegEx: boolean
  isCaseSensitive: boolean
  isWholeWord: boolean
  isSelection: boolean
}

const props = defineProps<FactoryRuleProps>()
const emit = defineEmits([
  "update:match",
  "update:substitute",
  "update:isRegEx",
  "update:isCaseSensitive",
  "update:isWholeWord",
  "update:isSelection",
])

const toggleRegEx = () => {
  emit("update:isRegEx", !props.isRegEx)
}

const toggleCaseSensitive = () => {
  emit("update:isCaseSensitive", !props.isCaseSensitive)
}

const toggleWholeWord = () => {
  emit("update:isWholeWord", !props.isWholeWord)
}

const toggleSelection = () => {
  emit("update:isSelection", !props.isSelection)
}

const toggleDelete = () => {
  // implement delete functionality here
}
</script>

<template>
  <div class="flex justify-between">
    <div class="flex gap-1">
      <span>{{ props.match }}</span>
      <span>{{ props.substitute }}</span>
    </div>
    <div class="flex gap-1">
      <IconButton
        name="mdi:regex"
        :class="{
          'text-blue-300': props.isRegEx,
          'text-gray-300': !props.isRegEx,
        }"
        @click="toggleRegEx"
      />
      <IconButton
        name="mdi:format-letter-case"
        :class="{
          'text-blue-300': props.isCaseSensitive,
          'text-gray-300': !props.isCaseSensitive,
        }"
        @click="toggleCaseSensitive"
      />
      <IconButton
        name="material-symbols:match-word-rounded"
        :class="{
          'text-blue-300': props.isWholeWord,
          'text-gray-300': !props.isWholeWord,
        }"
        @click="toggleWholeWord"
      />
      <IconButton
        name="codicon:list-selection"
        :class="{
          'text-blue-300': props.isSelection,
          'text-gray-300': !props.isSelection,
        }"
        @click="toggleSelection"
      />
    </div>
  </div>
</template>
