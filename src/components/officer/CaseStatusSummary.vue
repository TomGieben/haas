<script setup lang="ts">
import StatTile from '../ui/StatTile.vue';
import { CaseStatus, caseStatusLabels } from '../../domain/Enums';
import type { CaseSummary } from '../../services/CaseService';

defineProps<{ summary: CaseSummary }>();

const iconNew = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>`;
const iconProgress = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;
const iconWaiting = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`;
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
    <StatTile
      :label="caseStatusLabels[CaseStatus.New]"
      :count="summary.byStatus[CaseStatus.New]"
      :icon="iconNew"
      tone="blue"
    />
    <StatTile
      :label="caseStatusLabels[CaseStatus.InProgress]"
      :count="summary.byStatus[CaseStatus.InProgress]"
      :icon="iconProgress"
      tone="orange"
    />
    <StatTile
      :label="caseStatusLabels[CaseStatus.WaitingForResponse]"
      :count="summary.byStatus[CaseStatus.WaitingForResponse]"
      :icon="iconWaiting"
      tone="purple"
    />
  </div>
</template>
