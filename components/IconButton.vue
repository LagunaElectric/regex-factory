<script setup lang="ts">
export type IconButtonProps = {
  name: string
  color?: string
}

const props = defineProps<IconButtonProps>()
</script>

<template>
  <div class="w-6 h-6 px-1 py-1 flex justify-center items-center rounded-sm cursor-pointer">
    <Icon :name="props.name" :color="props.color || 'currentColor'" />
  </div>
</template>
