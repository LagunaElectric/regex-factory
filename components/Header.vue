<script setup></script>

<template>
  <div
    class="dark:bg-primary-900 dark:text-primary-icon max-h-16 items-center font-brand flex justify-center lg:justify-between p-4 relative"
  >
    <span class="text-4xl font-bold self-center">
      <span class="bg-gradient-to-br bg-clip-text text-transparent from-red-500 to-orange-300">RegEx</span
      >Factory
    </span>
    <div class="hidden xxs:flex gap-1 absolute lg:static right-2 sm:right-4 top-4">
      <NuxtLink to="https://www.github.com/LagunaElectric" target="_blank">
        <IconButton
          class="text-primary-icon w-8 h-8 rounded-sm grow hover:bg-primary-active hidden sm:flex"
          name="brandico:github"
        />
      </NuxtLink>
      <NuxtLink to="https://www.paypal.com/paypalme/my/profile" target="_blank">
        <IconButton
          class="text-primary-icon w-8 h-8 rounded-sm grow hover:bg-primary-active hidden xs:flex"
          name="simple-icons:paypal"
        />
      </NuxtLink>
      <IconButton
        class="text-primary-icon w-8 h-8 rounded-sm grow hover:bg-primary-active"
        name="mdi:information-outline"
      />
    </div>
  </div>
</template>
