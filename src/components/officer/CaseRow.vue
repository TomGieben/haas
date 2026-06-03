<script setup lang="ts">
import StatusBadge from '../ui/StatusBadge.vue';
import type { Case } from '../../domain/Case';

defineProps<{ caseItem: Case }>();
defineEmits<{ (e: 'select', id: string): void }>();
</script>

<template>
  <button
    type="button"
    class="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-slate-50 transition text-left border border-transparent hover:border-slate-200"
    @click="$emit('select', caseItem.id)"
  >
    <div class="flex-1 min-w-0">
      <div class="flex items-center gap-2">
        <span class="font-mono text-xs font-semibold text-slate-500">{{ caseItem.caseNumber }}</span>
        <StatusBadge :label="caseItem.statusLabel" :tone="caseItem.statusTone" />
      </div>
      <div class="text-sm font-semibold text-slate-900 truncate mt-0.5">
        {{ caseItem.applicantName }}
      </div>
      <div class="text-xs text-slate-500 truncate">{{ caseItem.applicantProfession }}</div>
    </div>
    <div class="text-right shrink-0">
      <div class="text-xs text-slate-400">Open</div>
      <div class="text-sm font-semibold text-slate-700">{{ caseItem.daysOpen }} dagen</div>
    </div>
  </button>
</template>
