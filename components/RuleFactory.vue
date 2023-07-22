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
  <div class="flex flex-col 2xl:flex-row items-center h-fit gap-1 p-1">
    <div class="flex grow flex-col w-full 2xl:w-auto border-2 border-dashed border-red-400/40 gap-1">
      <input
        v-model="match"
        placeholder="Find"
        type="text"
        name="findText"
        id="find-text"
        class="dark:bg-primary-700 dark:border-neutral-200/80 rounded-sm border grow"
      />
      <input
        v-model="substitute"
        placeholder="Replace"
        type="text"
        name="findText"
        id="find-text"
        class="dark:bg-primary-700 dark:border-neutral-200/80 rounded-sm border grow"
      />
    </div>
    <div class="flex w-full 2xl:w-auto justify-between 2xl:justify-normal">
      <div class="2xl:grid 2xl:grid-cols-2 flex justify-center shrink-0 items-center h-fit gap-1">
        <IconButton
          name="mdi:regex"
          class="rounded-sm dark:hover:bg-neutral-200/20 dark:active:bg-neutral-200/30 transition-colors duration-200 dark:text-neutral-200"
          @click="toggleRegEx()"
          :is-toggled="isRegEx"
          :class="{
            'dark:text-neutral-200 dark:bg-neutral-200/30': isRegEx,
          }"
        />
        <IconButton
          name="mdi:format-letter-case"
          class="rounded-sm dark:hover:bg-neutral-200/20 dark:active:bg-neutral-200/30 transition-colors duration-200 dark:text-neutral-200"
          @click="toggleCaseSensitive()"
          :is-toggled="isCaseSensitive"
          :class="{
            'dark:text-neutral-200 dark:bg-neutral-200/30': isCaseSensitive,
          }"
        />
        <IconButton
          name="material-symbols:match-word-rounded"
          class="rounded-sm dark:hover:bg-neutral-200/20 dark:active:bg-neutral-200/30 transition-colors duration-200 dark:text-neutral-200"
          @click="toggleWholeWord()"
          :is-toggled="isWholeWord"
          :class="{
            'dark:text-neutral-200 dark:bg-neutral-200/30': isWholeWord,
          }"
        />
        <IconButton
          name="codicon:replace-all"
          class="rounded-sm dark:hover:bg-neutral-200/20 dark:active:bg-neutral-200/30 transition-colors duration-200 dark:text-neutral-200"
          @click="toggleReplaceAll()"
          :is-toggled="isReplaceAll"
          :class="{
            'dark:text-neutral-200 dark:bg-neutral-200/30': isReplaceAll,
          }"
        />
      </div>
      <IconButton
        name="mdi:plus-circle-outline"
        class="rounded-sm h-full self-center dark:hover:bg-neutral-200/20 dark:active:bg-neutral-200/30 transition-colors duration-200 dark:text-neutral-200"
        @click="createRule()"
      />
    </div>
  </div>
</template>
