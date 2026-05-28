<script setup lang="ts">
import type { Match } from '../../domain/Match';
import MatchBadge from '../ui/MatchBadge.vue';
import TagChip from '../ui/TagChip.vue';

defineProps<{ match: Match; selected: boolean }>();
defineEmits<{ (e: 'select', id: string): void }>();
</script>

<template>
  <button
    type="button"
    class="w-full text-left rounded-2xl border bg-white p-4 transition"
    :class="selected ? 'border-teal bg-teal-soft/40 ring-2 ring-teal/20' : 'border-slate-200 hover:border-slate-300'"
    @click="$emit('select', match.id)"
  >
    <div class="flex items-start gap-4">
      <div class="w-12 h-12 rounded-xl bg-teal-soft text-teal flex items-center justify-center shrink-0" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9v11h14V9"/><path d="M9 20v-5h6v5"/></svg>
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex items-baseline gap-2">
          <h3 class="font-semibold text-slate-900">{{ match.name }}</h3>
        </div>
        <p class="text-xs text-slate-500 mb-2">{{ match.profession }}</p>
        <p class="text-sm font-semibold text-slate-800 mb-2">{{ match.headline }}</p>
        <div v-if="match.tags[0]" class="flex flex-wrap gap-1.5">
          <TagChip>{{ match.tags[0] }}</TagChip>
        </div>
      </div>
      <div class="flex flex-col items-end gap-2 shrink-0">
        <MatchBadge :percent="match.matchPercent" />
        <span
          v-if="selected"
          class="w-6 h-6 rounded-full bg-teal text-white flex items-center justify-center"
          aria-label="Geselecteerd"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </span>
      </div>
    </div>
  </button>
</template>
