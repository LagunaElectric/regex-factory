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

const factoryRules = reactive<FactoryRuleProps[]>([
  {
    match: "hello",
    substitution: "world",
    isRegEx: true,
    isCaseSensitive: false,
    isWholeWord: false,
    isReplaceAll: false,
  },
  {
    match: "world",
    substitution: "hello",
    isRegEx: true,
    isCaseSensitive: false,
    isWholeWord: false,
    isReplaceAll: false,
  },
  {
    match: 'this is a "test"',
    substitution: "test",
    isRegEx: false,
    isCaseSensitive: false,
    isWholeWord: false,
    isReplaceAll: true,
  },
])

function applyRules() {
  const regexFactory = new RegExFactory(factoryRules)
  output.value = regexFactory.process(input.value)
}

const genRuleKey = (rule: FactoryRuleProps, i: number) =>
  `${i}-${((rule.match.length * (rule.substitution.length || 1.68)) / 2) * rule.match.charCodeAt(0)}`.replace(".", "")

watch([input, factoryRules], applyRules)
</script>

<template>
  <div class="flex flex-col h-[100vh]">
    <Header />
    <div
      class="grow grid lg:grid-cols-3 lg:grid-rows-1 grid-rows-3 gap-1 justify-stretch items-stretch dark:bg-primary-800 dark:text-neutral-200"
    >
      <div class="flex flex-col overflow-auto gap-1">
        <RuleFactory
          class="justify-between sticky top-0 lg:mt-8 z-10 dark:bg-primary-700 rounded-sm p-1 border dark:border-primary-border"
          @rule-created="(rule) => factoryRules.push(rule)"
        />
        <FactoryRule
          v-for="(rule, i) in factoryRules"
          class="px-1 text-lg dark:bg-primary-500 rounded-sm border dark:border-primary-border"
          :key="genRuleKey(rule, i)"
          v-bind="rule"
          @update:is-reg-ex="(val) => (rule.isRegEx = val)"
          @update:is-case-sensitive="(val) => (rule.isCaseSensitive = val)"
          @update:is-whole-word="(val) => (rule.isWholeWord = val)"
          @update:is-replace-all="(val) => (rule.isReplaceAll = val)"
          @delete="() => factoryRules.splice(i, 1)"
        />
      </div>
      <BigText label="Input:" class="h-full p-2 lg:order-first" v-model="input" />
      <BigText label="Output:" class="h-full p-2" v-model="output" />
    </div>
    <Footer />
  </div>
</template>
ß
