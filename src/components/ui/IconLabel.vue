<script setup lang="ts">
import type { Component } from 'vue';

defineProps<{ label: string; icon?: Component }>();
</script>

<template>
  <span class="inline-flex items-center gap-1 text-sm text-slate-600">
    <component :is="icon" v-if="icon" class="text-teal" />
    {{ label }}
  </span>
</template>
