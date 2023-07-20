<script setup lang="ts">
import { ref } from "vue";

const input = ref("");
</script>

<template>
  <div class="h-[100vh] flex">
    <!-- <NuxtWelcome /> -->
    <BigText class="w-1/3 h-full p-2" v-model="input" />
    <p class="whitespace-pre-wrap">{{ input }}</p>
    <FactoryRule class="w-1/3 border-2 border-green-400 border-dashed" />
  </div>
</template>
