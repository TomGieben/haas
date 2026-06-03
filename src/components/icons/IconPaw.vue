<script setup lang="ts">
withDefaults(
  defineProps<{ size?: number | string; strokeWidth?: number | string }>(),
  { size: 16, strokeWidth: 2 },
);
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    :stroke-width="strokeWidth"
  >
    <circle cx="11" cy="4" r="2" />
    <circle cx="18" cy="8" r="2" />
    <circle cx="4" cy="8" r="2" />
    <circle cx="20" cy="16" r="2" />
    <circle cx="2" cy="16" r="2" />
    <path d="M7 21c0-3 2-5 5-5s5 2 5 5" />
  </svg>
</template>
