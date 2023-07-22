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

const dummyLetter = ref<HTMLCanvasElement | null>(null)
const ctx = computed(() => dummyLetter.value?.getContext("2d"))
const letterWidth = computed(() => ctx.value?.measureText("a").width.toFixed(2))
dummyLetter.value?.remove()

const matchSpanRef = ref<HTMLSpanElement | null>(null)
const substituteSpanRef = ref<HTMLSpanElement | null>(null)
const { width: matchSpanWidth } = useElementSize(matchSpanRef)
const { width: substituteSpanWidth } = useElementSize(substituteSpanRef)

const isMatchOverflown = computed(() => matchSpanWidth.value > 200)

const matchTruncated = computed(() => {
  if (props.match.length > 20) return props.match.slice(0, 20) + "..."
  return props.match
})

const substituteTruncated = computed(() => {
  if (props.substitute.length > 20) return props.substitute.slice(0, 20) + "..."
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
  <div class="">
    <canvas hidden class="font-mono" ref="dummyLetter" />
    <span>{{ letterWidth }} {{ matchSpanWidth }} {{ substituteSpanWidth }}</span>
    <div class="flex gap-1 items-center">
      <!-- TODO: Truncate text at a certain length. -->
      <span ref="matchSpanRef" class="font-mono text-sm grow-0 border border-red-400">{{ props.match }}</span>
      <span class="text-gray-300"> → </span>
      <span ref="substituteSpanRef" class="font-mono text-sm border border-red-400">{{
        substituteTruncated || '""'
      }}</span>
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
