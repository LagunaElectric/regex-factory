<script setup lang="ts">
import { FactoryRuleProps } from "components/FactoryRule.vue"
import { ref } from "vue"

const appTitle = "RegEx Factory"
const appDescription =
  "RegEx Factory is a tool for transforming text with RegEx. It allows you to easily create rules and apply them to input text, providing you with the output text that matches your rules. With RegEx Factory, you can save time and effort in creating complex regular expressions, and focus on what really matters - your project."

useSeoMeta({
  title: appTitle,
  description: appDescription,
  ogTitle: appTitle,
  ogDescription: appDescription,
  ogImage: "[og:image]",
  ogUrl: "[og:url]",
  twitterTitle: appTitle,
  twitterDescription: appDescription,
  twitterImage: "[twitter:image]",
  twitterCard: "summary",
})

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
})

const input = ref("")
const output = ref("")

const factoryRules = reactive<FactoryRuleProps[]>([])

function applyRules() {
  let result = input.value
  for (const rule of factoryRules) {
    let match = rule.match
    if (!rule.isRegEx) match = match.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    match = rule.isWholeWord ? `\\b${match}\\b` : match
    let flags = "m"
    if (!rule.isCaseSensitive) flags += "i"
    if (rule.isReplaceAll) flags += "g"
    const regex = new RegExp(match, flags)
    result = result.replace(regex, rule.substitute)
  }
  output.value = result
}

watch([input, factoryRules], applyRules)
</script>

<template>
  <div class="h-[100vh] grid grid-cols-3 gap-1 justify-stretch items-stretch dark:bg-primary-900 dark:text-neutral-200">
    <!-- <NuxtWelcome /> -->
    <BigText label="Input:" class="h-full inline-block p-2 sticky" v-model="input" />
    <div class="flex flex-col grow">
      <RuleFactory
        class="border-2 border-orange-400 border-dashed justify-between"
        @rule-created="(rule) => factoryRules.push(rule)"
      />
      <FactoryRule
        v-for="(rule, i) in factoryRules"
        class="border-2 border-purple-400 border-dashed"
        :key="
          `${i}-${((rule.match.length * (rule.substitute.length || 1.68)) / 2) * rule.match.charCodeAt(0)}`.replace(
            '.',
            '',
          )
        "
        v-bind="rule"
        @update:is-reg-ex="(val) => (rule.isRegEx = val)"
        @update:is-case-sensitive="(val) => (rule.isCaseSensitive = val)"
        @update:is-whole-word="(val) => (rule.isWholeWord = val)"
        @update:is-replace-all="(val) => (rule.isReplaceAll = val)"
        @delete="() => factoryRules.splice(i, 1)"
      />
    </div>
    <BigText label="Output:" class="h-full p-2 inline-block" v-model="output" />
  </div>
</template>
