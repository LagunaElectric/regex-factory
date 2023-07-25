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

Math.random()
function applyRules() {
  const regexFactory = new RegExFactory(factoryRules)
  output.value = regexFactory.process(input.value)
}

const genRuleKey = (rule: FactoryRuleProps, i: number) =>
  `${i}-${((rule.match.length * (rule.substitution.length || 1.68)) / 2) * rule.match.charCodeAt(0)}`.replace(".", "")

watch([input, factoryRules], applyRules)
</script>

<template>
  <div class="flex flex-col h-screen max-h-screen">
    <Header class="" />
    <div
      class="grid lg:grid-cols-3 grow max-h-full lg:grid-rows-1 grid-rows-3 gap-1 justify-stretch items-stretch dark:bg-primary-800 dark:text-neutral-200"
    >
      <div class="relative h-full">
        <div class="absolute inset-0 flex flex-col overflow-auto gap-1 px-2 pb-2">
          <RuleFactory
            class="justify-between sticky top-0 lg:mt-8 z-10 dark:bg-primary-700 rounded-sm p-1 border dark:border-primary-border"
            @rule-created="(rule) => factoryRules.push(rule)"
          />
          <div class="overflow-auto shrink">
              <FactoryRule
              v-for="(rule, i) in factoryRules"
                class="px-1 mb-1 text-lg dark:bg-primary-500 rounded-sm border dark:border-primary-border"
                v-bind="rule"
                :key="genRuleKey(rule, i)"
                @update:is-reg-ex="(val) => (rule.isRegEx = val)"
                @update:is-case-sensitive="(val) => (rule.isCaseSensitive = val)"
                @update:is-whole-word="(val) => (rule.isWholeWord = val)"
                @update:is-replace-all="(val) => (rule.isReplaceAll = val)"
                @delete="() => factoryRules.splice(i, 1)"
              />
          </div>
        </div>
      </div>
      <BigText label="Input:" class="lg:py-2 px-2 lg:order-first" v-model="input" />
      <BigText label="Output:" class="lg:py-2 px-2" v-model="output" />
    </div>
    <Footer />
  </div>
</template>

<style>
body {
  height: 100vh;
}

#__nuxt {
  height: 100vh;
}
</style>
