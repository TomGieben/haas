<script setup lang="ts">
import SectionCard from '../ui/SectionCard.vue';
import IconAi from '../icons/IconAi.vue';

defineProps<{ narrative: string }>();
</script>

<template>
  <SectionCard title="AI keuzeproces" :icon="IconAi">
    <template #header>
      <span class="inline-flex items-center px-2.5 py-1 rounded-full bg-teal-soft text-teal text-[10px] font-bold uppercase tracking-wide">
        Gegenereerd door HaaS
      </span>
    </template>
    <p class="text-sm text-slate-700 leading-relaxed whitespace-pre-line">{{ narrative }}</p>
  </SectionCard>
</template>
