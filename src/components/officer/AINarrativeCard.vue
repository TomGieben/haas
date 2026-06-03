<script setup lang="ts">
import SectionCard from '../ui/SectionCard.vue';

defineProps<{ narrative: string }>();

const iconAi = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4"/><path d="M12 18v4"/><path d="m4.93 4.93 2.83 2.83"/><path d="m16.24 16.24 2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="m4.93 19.07 2.83-2.83"/><path d="m16.24 7.76 2.83-2.83"/></svg>`;
</script>

<template>
  <SectionCard title="AI keuzeproces" :icon="iconAi">
    <template #header>
      <span class="inline-flex items-center px-2.5 py-1 rounded-full bg-teal-soft text-teal text-[10px] font-bold uppercase tracking-wide">
        Gegenereerd door HaaS
      </span>
    </template>
    <p class="text-sm text-slate-700 leading-relaxed whitespace-pre-line">{{ narrative }}</p>
  </SectionCard>
</template>
