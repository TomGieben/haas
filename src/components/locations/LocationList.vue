<script setup lang="ts">
import type { Location } from '../../domain/Location';
import IconMapPin from '../icons/IconMapPin.vue';

defineProps<{
  locations: Location[];
  selectedId: string | null;
}>();
defineEmits<{ (e: 'select', id: string): void }>();
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
            <IconMapPin :size="18" class="text-teal" />
            {{ loc.name }}
          </span>
          <span class="text-xs text-slate-500">{{ loc.availableHomes }} woningen</span>
        </button>
      </li>
    </ul>
  </div>
</template>
