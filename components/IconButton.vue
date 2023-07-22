<script setup lang="ts">
export type IconButtonProps = {
  name: string
  color?: string
}

const props = defineProps<IconButtonProps>()
</script>

<template>
  <div class="px-1 py-1 flex justify-center items-center cursor-pointer">
    <Icon :name="props.name" :color="props.color || 'currentColor'" />
  </div>
</template>
