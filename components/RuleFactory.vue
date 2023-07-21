<script setup lang="ts">
import { ref } from "vue"
import { FactoryRuleProps } from "./FactoryRule.vue"
const emit = defineEmits(["ruleCreated"])

const match = ref("")
const substitute = ref("")

const isRegEx = ref(false)
const isCaseSensitive = ref(false)
const isWholeWord = ref(false)
const isReplaceAll = ref(false)

function toggleRegEx() {
  isRegEx.value = !isRegEx.value
}

function toggleCaseSensitive() {
  isCaseSensitive.value = !isCaseSensitive.value
}

function toggleWholeWord() {
  isWholeWord.value = !isWholeWord.value
}

function toggleReplaceAll() {
  isReplaceAll.value = !isReplaceAll.value
}

function reset() {
  match.value = ""
  substitute.value = ""
  isRegEx.value = false
  isCaseSensitive.value = false
  isWholeWord.value = false
  isReplaceAll.value = false
}

function createRule() {
  if (!match.value) return
  emit("ruleCreated", {
    match: match.value,
    substitute: substitute.value,
    isRegEx: isRegEx.value,
    isCaseSensitive: isCaseSensitive.value,
    isWholeWord: isWholeWord.value,
    isReplaceAll: isReplaceAll.value,
  } as FactoryRuleProps)
  reset()
}
</script>

<template>
  <div class="flex items-center h-fit gap-1 px-1">
    <div>
      <div class="flex flex-col border-2 border-dashed border-red-400">
        <input
          v-model="match"
          placeholder="Find"
          type="text"
          name="findText"
          id="find-text"
          class="border-blue-400 border-2"
        />
      </div>
      <div class="flex flex-col border-2 border-dashed border-red-400">
        <input
          v-model="substitute"
          placeholder="Replace"
          type="text"
          name="findText"
          id="find-text"
          class="border-blue-400 border-2"
        />
      </div>
    </div>
    <div class="grid grid-cols-2 justify-center items-center h-fit gap-1 bg-green-200">
      <IconButton
        name="mdi:regex"
        color="black"
        @click="toggleRegEx()"
        :is-toggled="isRegEx"
        :class="{
          'bg-green-400': isRegEx,
          'bg-green-200': !isRegEx,
        }"
      />
      <IconButton
        name="mdi:format-letter-case"
        color="black"
        @click="toggleCaseSensitive()"
        :is-toggled="isCaseSensitive"
        :class="{
          'bg-green-400': isCaseSensitive,
          'bg-green-200': !isCaseSensitive,
        }"
      />
      <IconButton
        name="material-symbols:match-word-rounded"
        color="black"
        @click="toggleWholeWord()"
        :is-toggled="isWholeWord"
        :class="{
          'bg-green-400': isWholeWord,
          'bg-green-200': !isWholeWord,
        }"
      />
      <IconButton
        name="codicon:replace-all"
        color="black"
        @click="toggleReplaceAll()"
        :is-toggled="isReplaceAll"
        :class="{
          'bg-green-400': isReplaceAll,
          'bg-green-200': !isReplaceAll,
        }"
      />
    </div>
    <IconButton name="mdi:plus-circle-outline" color="black" @click="createRule()" />
  </div>
</template>
