<script setup lang="ts">
export type FactoryRuleProps = {
  match: string
  substitute: string
  isRegEx: boolean
  isCaseSensitive: boolean
  isWholeWord: boolean
  isReplaceAll: boolean
}

const props = defineProps<FactoryRuleProps>()
const emit = defineEmits([
  "update:isRegEx",
  "update:isCaseSensitive",
  "update:isWholeWord",
  "update:isReplaceAll",
  "delete",
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

const toggleReplaceAll = () => {
  emit("update:isReplaceAll", !props.isReplaceAll)
}

const requestDelete = () => {
  emit("delete")
}
</script>

<template>
  <div class="flex justify-between">
    <div class="flex gap-1">
      <span>{{ props.match }}</span>
      <span class="text-gray-300"> → </span>
      <span>{{ props.substitute || '""' }}</span>
    </div>
    <div class="flex gap-1">
      <IconButton
        name="mdi:regex"
        :class="{
          'text-blue-600': props.isRegEx,
          'text-gray-300': !props.isRegEx,
        }"
        @click="toggleRegEx"
      />
      <IconButton
        name="mdi:format-letter-case"
        :class="{
          'text-blue-600': props.isCaseSensitive,
          'text-gray-300': !props.isCaseSensitive,
        }"
        @click="toggleCaseSensitive"
      />
      <IconButton
        name="material-symbols:match-word-rounded"
        :class="{
          'text-blue-600': props.isWholeWord,
          'text-gray-300': !props.isWholeWord,
        }"
        @click="toggleWholeWord"
      />
      <IconButton
        name="codicon:replace-all"
        :class="{
          'text-blue-600': props.isReplaceAll,
          'text-gray-300': !props.isReplaceAll,
        }"
        @click="toggleReplaceAll"
      />
      <IconButton name="mdi:delete-outline" class="text-red-300" @click="requestDelete" />
    </div>
  </div>
</template>
