<script setup lang="ts">
</script>

<template>
  <div class="flex h-fit">
    <div class="flex flex-col border-2 border-dashed border-red-400">
      <label class="text-sm" for="find-text">Match:</label>
      <input type="text" name="findText" id="find-text" class="border-blue-400 border-2">
    </div>
    <div class="flex flex-col border-2 border-dashed border-red-400">
      <label class="text-sm" for="find-text">Replace:</label>
      <input type="text" name="findText" id="find-text" class="border-blue-400 border-2">
    </div>
    <div class="px-2 bg-green-200 h-fit w-fit">
      <IconButton name="mdi:regex" color="black" @click="console.log('clicked')" />
    </div>
  </div>
</template>
