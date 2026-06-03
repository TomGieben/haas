<script setup lang="ts">
import type { Component } from 'vue';

defineProps<{
  title?: string;
  icon?: Component;
  subtitle?: string;
}>();
</script>

<template>
  <section class="bg-white rounded-card shadow-card p-6">
    <header v-if="title || $slots.header" class="flex items-start justify-between gap-4 mb-4">
      <div class="flex items-center gap-3">
        <div
          v-if="icon"
          class="w-9 h-9 rounded-xl bg-teal-soft text-teal flex items-center justify-center shrink-0"
        >
          <component :is="icon" :size="18" />
        </div>
        <div>
          <h3 v-if="title" class="text-base font-bold text-slate-900 leading-tight">{{ title }}</h3>
          <p v-if="subtitle" class="text-xs text-slate-500 mt-0.5">{{ subtitle }}</p>
        </div>
      </div>
      <slot name="header" />
    </header>
    <slot />
  </section>
</template>
