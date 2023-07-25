<script setup>
const colorMode = useColorMode()

const isDark = ref(colorMode.preference === "dark")
const themeIcon = computed(() =>
  isDark.value ? "material-symbols:dark-mode-outline-rounded" : "material-symbols:light-mode-outline",
)

watch(
  () => colorMode.preference,
  (preference) => {
    isDark.value = preference === "dark"
  },
)

const toggleColorMode = () => {
  console.log(colorMode)
  colorMode.preference = isDark.value ? "light" : "dark"
}
console.log(colorMode)
</script>

<template>
  <div
    class="dark:bg-primary-dark-900 bg-primary-light-900 border-primary-light-border border-b dark:border-none dark:text-primary-dark-icon text-primary-light-icon max-h-16 items-center font-brand flex justify-center lg:justify-between p-4 relative"
  >
    <span class="text-4xl font-bold self-center">
      <span class="bg-gradient-to-br bg-clip-text text-transparent from-red-500 to-orange-300">RegEx</span>Factory
    </span>
    <div class="hidden xxs:flex gap-1 absolute lg:static right-2 sm:right-4 top-4">
      <NuxtLink to="https://www.github.com/LagunaElectric" target="_blank">
        <IconButton
          class="w-8 h-8 rounded-sm grow hover:bg-primary-dark-active hidden sm:flex"
          name="brandico:github"
        />
      </NuxtLink>
      <NuxtLink to="https://www.paypal.com/paypalme/my/profile" target="_blank">
        <IconButton
          class="w-8 h-8 rounded-sm grow hover:bg-primary-dark-active hidden xs:flex"
          name="simple-icons:paypal"
        />
      </NuxtLink>
      <IconButton
        class="w-8 h-8 rounded-sm grow hover:bg-primary-dark-active"
        :name="themeIcon"
        @click="toggleColorMode"
      />
    </div>
  </div>
</template>
