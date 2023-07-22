<script setup lang="ts">
import { createContext } from "vm"

export interface FactoryRuleProps {
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

const dummyLetter = ref<HTMLSpanElement | null>(null)
const { width: letterWidth } = useElementSize(dummyLetter)

const matchSpanRef = ref<HTMLSpanElement | null>(null)
const substituteSpanRef = ref<HTMLSpanElement | null>(null)

const { width: matchSpanWidth } = useElementSize(matchSpanRef)
const matchSpanWidthInChars = computed(() => {
  if (!letterWidth.value) return 0
  return Math.floor(matchSpanWidth.value / letterWidth.value)
})

const { width: substituteSpanWidth } = useElementSize(substituteSpanRef)
const substituteSpanWidthInChars = computed(() => {
  if (!letterWidth.value) return 0
  return Math.floor(substituteSpanWidth.value / letterWidth.value)
})

const isMatchOverflown = computed(() => matchSpanWidthInChars.value < props.match.length)
const isSubstituteOverflown = computed(() => substituteSpanWidthInChars.value < props.substitute.length)

const matchTruncated = computed(() => {
  if (isMatchOverflown.value) return props.match.slice(0, matchSpanWidthInChars.value - 3) + "..."
  return props.match
})

const substituteTruncated = computed(() => {
  if (isSubstituteOverflown.value) return props.substitute.slice(0, substituteSpanWidthInChars.value) + "..."
  return props.substitute
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
    <!-- <span>{{ letterWidth }} {{ matchSpanWidth }} {{ substituteSpanWidth }}</span> -->
    <div class="flex gap-2 items-center grow">
      <!-- TODO: Truncate text at a certain length. -->
      <span ref="matchSpanRef" class="font-mono text-sm grow basis-1">{{ matchTruncated }}</span>
      <span class="text-gray-300 grow-0 shrink-0"> → </span>
      <span ref="substituteSpanRef" class="font-mono grow text-sm basis-1">{{ substituteTruncated }}</span>
    </div>
    <div class="flex gap-1 shrink-0">
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
