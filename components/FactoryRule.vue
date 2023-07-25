<script setup lang="ts">
import { ReplaceRule } from "utils/ReplaceRule"
import { createContext } from "vm"

export interface FactoryRuleProps extends ReplaceRule {
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

const dummyLetter = ref<HTMLSpanElement | null>(null)
const { width: letterWidth } = useElementSize(dummyLetter)

const matchSpanRef = ref<HTMLSpanElement | null>(null)
const substitutionSpanRef = ref<HTMLSpanElement | null>(null)

const { width: matchSpanWidth } = useElementSize(matchSpanRef)
const matchSpanWidthInChars = computed(() => {
  if (!letterWidth.value) return 0
  return Math.floor(matchSpanWidth.value / letterWidth.value)
})

const { width: substitutionSpanWidth } = useElementSize(substitutionSpanRef)
const substitutionSpanWidthInChars = computed(() => {
  if (!letterWidth.value) return 0
  return Math.floor(substitutionSpanWidth.value / letterWidth.value)
})

const isMatchOverflown = computed(() => matchSpanWidthInChars.value < props.match.length)
const isSubstitutionOverflown = computed(() => substitutionSpanWidthInChars.value < props.substitution.length)

const matchTruncated = computed(() => {
  if (isMatchOverflown.value) return props.match.slice(0, matchSpanWidthInChars.value - 3).trim() + "..."
  return props.match
})

const substitutionTruncated = computed(() => {
  if (isSubstitutionOverflown.value)
    return props.substitution.slice(0, substitutionSpanWidthInChars.value).trim() + "..."
  return props.substitution
})

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
  <div class="flex max-w-full justify-between min-w-0 break-all relative">
    <span class="text-sm font-mono text-transparent absolute z-0" ref="dummyLetter">a</span>
    <div class="flex gap-2 items-center grow">
      <span ref="matchSpanRef" class="font-mono text-sm grow basis-1">{{ matchTruncated }}</span>
      <span class="dark:text-gray-300 text-primary-light-icon grow-0 shrink-0"> → </span>
      <span ref="substitutionSpanRef" class="font-mono grow text-sm basis-1">{{ substitutionTruncated }}</span>
    </div>
    <div class="flex gap-1 shrink-0 dark:text-primary-dark-icon">
      <IconButton
        name="mdi:regex"
        :class="{
          'dark:bg-primary-dark-active': props.isRegEx,
        }"
        @click="toggleRegEx"
      />
      <IconButton
        name="mdi:format-letter-case"
        :class="{
          'dark:bg-primary-dark-active': props.isCaseSensitive,
        }"
        @click="toggleCaseSensitive"
      />
      <IconButton
        name="material-symbols:match-word-rounded"
        :class="{
          'dark:bg-primary-dark-active': props.isWholeWord,
        }"
        @click="toggleWholeWord"
      />
      <IconButton
        name="codicon:replace-all"
        :class="{
          'dark:bg-primary-dark-active': props.isReplaceAll,
        }"
        @click="toggleReplaceAll"
      />
      <IconButton name="mdi:delete-outline" class="text-red-400" @click="requestDelete" />
    </div>
  </div>
</template>
