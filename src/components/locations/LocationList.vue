<script setup lang="ts">
import type { Location } from '../../domain/Location';

defineProps<{
  locations: Location[];
  selectedId: string | null;
}>();
defineEmits<{ (e: 'select', id: string): void }>();

const pinIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`;
</script>

<template>
  <div>
    <h3 class="font-bold text-slate-900 mb-4">Beschikbare wijken</h3>
    <ul class="space-y-2">
      <li v-for="loc in locations" :key="loc.id">
        <button
          type="button"
          class="w-full flex items-center justify-between px-4 py-3 rounded-full border border-slate-200 bg-white hover:border-brand-orange transition text-left"
          :class="loc.id === selectedId ? 'border-brand-orange ring-2 ring-brand-orange/20' : ''"
          @click="$emit('select', loc.id)"
        >
          <span class="flex items-center gap-2 text-slate-800 font-medium text-sm">
            <span class="text-teal" v-html="pinIcon" />
            {{ loc.name }}
          </span>
          <span class="text-xs text-slate-500">{{ loc.availableHomes }} woningen</span>
        </button>
      </li>
    </ul>
  </div>
</template>
