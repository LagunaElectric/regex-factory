<script setup lang="ts">
import { FactoryRuleProps } from "components/FactoryRule.vue"
import { ref } from "vue"

const input = ref("")
const output = ref("")

const factoryRules = reactive<FactoryRuleProps[]>([])

function applyRules() {
  let result = input.value
  for (const rule of factoryRules) {
    const regex = new RegExp(rule.match, "g")
    result = result.replace(regex, rule.substitute)
  }
  output.value = result
}

watch([input, factoryRules], applyRules)
</script>

<template>
  <div class="h-[100vh] flex justify-between">
    <!-- <NuxtWelcome /> -->
    <BigText label="Input:" class="w-1/3 h-full p-2" v-model="input" />
    <div class="flex flex-col">
      <RuleFactory class="border-2 border-green-400 border-dashed" @rule-created="(rule) => factoryRules.push(rule)" />
      <FactoryRule
        v-for="rule in factoryRules"
        class="border-2 border-green-400 border-dashed"
        v-bind="rule"
        @update:is-reg-ex="(val) => (rule.isRegEx = val)"
        @update:is-case-sensitive="(val) => (rule.isCaseSensitive = val)"
        @update:is-whole-word="(val) => (rule.isWholeWord = val)"
        @update:is-selection="(val) => (rule.isSelection = val)"
      />
      <p class="whitespace-pre-wrap">{{ input }}</p>
    </div>
    <BigText label="Output:" class="w-1/3 h-full p-2" v-model="output" />
  </div>
</template>
