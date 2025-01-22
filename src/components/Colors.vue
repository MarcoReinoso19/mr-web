<script setup lang="ts">
const colorRanges = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
const { color = 'primary' } = defineProps<{ color?: string }>()
</script>
<template>
  <div class="flex flex-wrap justify-center items-center h-96 w-96 bg-white dark:bg-red-300">
    <div
      :class="`bg-${color}-${colorRange}`"
      class="text-white p-5 h-20 w-20"
      v-for="colorRange in colorRanges"
      :key="colorRange"
    >
      {{ colorRange }}
    </div>
  </div>
</template>
