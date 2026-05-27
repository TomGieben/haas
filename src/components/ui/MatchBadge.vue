<script setup lang="ts">
defineProps<{ percent: number }>();
</script>

<template>
  <span class="inline-flex items-center px-3 py-1 rounded-full bg-brand-orange text-white text-xs font-bold whitespace-nowrap">
    {{ percent }}% match
  </span>
</template>
