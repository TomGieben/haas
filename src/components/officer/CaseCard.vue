<script setup lang="ts">
import { computed } from 'vue';
import Avatar from '../ui/Avatar.vue';
import StatusBadge from '../ui/StatusBadge.vue';
import { properties } from '../../data/properties';
import type { Case } from '../../domain/Case';

const props = defineProps<{ caseItem: Case }>();
defineEmits<{ (e: 'select', id: string): void }>();

const property = computed(() => properties.find((p) => p.id === props.caseItem.propertyId));
</script>

<template>
  <button
    type="button"
    class="case-card"
    @click="$emit('select', caseItem.id)"
  >
    <div class="flex items-start gap-3">
      <Avatar :initial="caseItem.applicantInitial" size="md" />
      <div class="flex-1 min-w-0">
        <div class="flex items-start justify-between gap-2">
          <div class="min-w-0">
            <h3 class="font-semibold text-slate-900 truncate">{{ caseItem.applicantName }}</h3>
            <p class="text-xs text-slate-500 truncate">
              {{ caseItem.applicantProfession }} · {{ caseItem.applicantAge }} jaar
            </p>
          </div>
          <StatusBadge :label="caseItem.statusLabel" :tone="caseItem.statusTone" />
        </div>
      </div>
    </div>

    <div class="mt-4 space-y-1.5 text-xs text-slate-600">
      <div class="flex items-center gap-2">
        <span class="text-slate-400">Zaaknr.</span>
        <span class="font-mono font-semibold text-slate-700">{{ caseItem.caseNumber }}</span>
      </div>
      <div v-if="property" class="flex items-center gap-2">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-teal shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        <span class="truncate">{{ property.address }}</span>
      </div>
      <div class="flex items-center gap-2">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-teal shrink-0"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
        <span class="truncate">{{ caseItem.householdType }}</span>
      </div>
      <div class="flex items-center gap-2">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-teal shrink-0"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        <span>Ingediend {{ caseItem.submittedLabel }}</span>
      </div>
    </div>

    <div class="mt-4 flex items-center justify-end text-xs font-semibold text-brand-orange">
      Bekijk zaak
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="ml-1"><polyline points="9 18 15 12 9 6"/></svg>
    </div>
  </button>
</template>

<style lang="scss" scoped>
.case-card {
  width: 100%;
  text-align: left;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  padding: 1.25rem;
  transition: border-color 0.15s, box-shadow 0.15s, transform 0.15s;

  &:hover {
    border-color: #cbd5e1;
    box-shadow: 0 4px 14px rgba(11, 36, 71, 0.08);
    transform: translateY(-1px);
  }
}
</style>
