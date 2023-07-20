<script setup lang="ts">
export type IconButtonProps = {
  name: string
  color: string
}

const props = defineProps<IconButtonProps>()

</script>

<template>
  <div
    class="bg-red-200 px-1 py-1 flex justify-center items-center rounded-sm hover:bg-orange-300 active:bg-orange-200 cursor-pointer"
    id="test" :class="{ 'text-blue-500': true }" style="color: black;">
    <Icon :name="props.name" :color="props.color" />
  </div>
</template>