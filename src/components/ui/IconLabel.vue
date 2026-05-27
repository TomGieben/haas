<script setup lang="ts">
defineProps<{ label: string; icon?: string }>();
</script>

<template>
  <span class="inline-flex items-center gap-1 text-sm text-slate-600">
    <span v-if="icon" class="text-teal" v-html="icon" />
    {{ label }}
  </span>
</template>
