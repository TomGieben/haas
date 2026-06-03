<script setup lang="ts">
import type { ReviewProgress } from '../../services/CaseService';

defineProps<{ progress: ReviewProgress }>();
</script>

<template>
  <div class="flex items-center gap-3 bg-white border border-slate-200 rounded-2xl px-4 py-3">
    <div class="text-center px-2">
      <div class="text-lg font-bold text-slate-900 leading-none">
        {{ progress.decided }}<span class="text-slate-400">/{{ progress.total }}</span>
      </div>
      <div class="text-[10px] uppercase tracking-wide text-slate-500 mt-1">Behandeld</div>
    </div>
    <div class="w-px h-8 bg-slate-200" />
    <div class="text-center px-2">
      <div class="text-lg font-bold text-emerald-700 leading-none">{{ progress.approved }}</div>
      <div class="text-[10px] uppercase tracking-wide text-slate-500 mt-1">Goedgekeurd</div>
    </div>
    <div class="w-px h-8 bg-slate-200" />
    <div class="text-center px-2">
      <div class="text-lg font-bold text-red-700 leading-none">{{ progress.rejected }}</div>
      <div class="text-[10px] uppercase tracking-wide text-slate-500 mt-1">Afgekeurd</div>
    </div>
  </div>
</template>
