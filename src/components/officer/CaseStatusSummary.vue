<script setup lang="ts">
import StatTile from '../ui/StatTile.vue';
import IconPlus from '../icons/IconPlus.vue';
import IconClock from '../icons/IconClock.vue';
import IconChat from '../icons/IconChat.vue';
import { CaseStatus, caseStatusLabels } from '../../domain/Enums';
import type { CaseSummary } from '../../services/CaseService';

defineProps<{ summary: CaseSummary }>();
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
    <StatTile
      :label="caseStatusLabels[CaseStatus.New]"
      :count="summary.byStatus[CaseStatus.New]"
      :icon="IconPlus"
      tone="blue"
    />
    <StatTile
      :label="caseStatusLabels[CaseStatus.InProgress]"
      :count="summary.byStatus[CaseStatus.InProgress]"
      :icon="IconClock"
      tone="orange"
    />
    <StatTile
      :label="caseStatusLabels[CaseStatus.WaitingForResponse]"
      :count="summary.byStatus[CaseStatus.WaitingForResponse]"
      :icon="IconChat"
      tone="purple"
    />
  </div>
</template>
