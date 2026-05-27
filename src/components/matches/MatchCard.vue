<script setup lang="ts">
import type { Match } from '../../domain/Match';
import Avatar from '../ui/Avatar.vue';
import MatchBadge from '../ui/MatchBadge.vue';
import TagChip from '../ui/TagChip.vue';

defineProps<{ match: Match; selected: boolean }>();
defineEmits<{ (e: 'select', id: string): void }>();

const iconChild = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`;
const iconPaw = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="4" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><circle cx="2" cy="16" r="2"/><path d="M7 21c0-3 2-5 5-5s5 2 5 5"/></svg>`;
</script>

<template>
  <button
    type="button"
    class="w-full text-left rounded-2xl border bg-white p-4 transition"
    :class="selected ? 'border-teal bg-teal-soft/40 ring-2 ring-teal/20' : 'border-slate-200 hover:border-slate-300'"
    @click="$emit('select', match.id)"
  >
    <div class="flex items-start gap-4">
      <Avatar :initial="match.initial" size="md" />
      <div class="flex-1 min-w-0">
        <div class="flex items-baseline gap-2">
          <h3 class="font-semibold text-slate-900">{{ match.nameWithAge }}</h3>
        </div>
        <p class="text-xs text-slate-500 mb-2">{{ match.profession }}</p>
        <p class="text-sm font-semibold text-slate-800 mb-2">{{ match.headline }}</p>
        <div class="flex flex-wrap items-center gap-3 mb-2 text-xs text-slate-600">
          <span v-if="match.flags.children" class="inline-flex items-center gap-1"><span class="text-teal" v-html="iconChild" /> Kinderen</span>
          <span v-if="match.flags.pets" class="inline-flex items-center gap-1"><span class="text-teal" v-html="iconPaw" /> Huisdieren</span>
        </div>
        <div class="flex flex-wrap gap-1.5">
          <TagChip v-for="tag in match.tags" :key="tag">{{ tag }}</TagChip>
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
