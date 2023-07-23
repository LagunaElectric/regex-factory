<script setup></script>

<template>
  <div
    class="dark:bg-primary-900 dark:text-primary-icon max-h-16 items-center flex justify-center lg:justify-between p-4"
  >
    <span class="text-4xl font-bold self-center">
      <span class="bg-gradient-to-br bg-clip-text text-transparent from-red-500 to-orange-300 italic">RegEx</span
      >Factory
    </span>
    <div class="lg:flex gap-1 hidden">
      <NuxtLink to="https://www.github.com/LagunaElectric" target="_blank">
        <IconButton class="text-primary-icon w-8 h-8 grow hover:bg-primary-active" name="brandico:github" />
      </NuxtLink>
      <NuxtLink to="https://www.paypal.com/paypalme/my/profile" target="_blank">
        <IconButton class="text-primary-icon w-8 h-8 grow hover:bg-primary-active" name="simple-icons:paypal" />
      </NuxtLink>
      <IconButton class="text-primary-icon w-8 h-8 grow hover:bg-primary-active" name="mdi:information-outline" />
    </div>
  </div>
</template>
