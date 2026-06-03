<script setup lang="ts">
import type { ProgressStep } from '../../domain/ProgressStep';
import BaseButton from '../ui/BaseButton.vue';
import IconCheck from '../icons/IconCheck.vue';

defineProps<{ step: ProgressStep; canPrev: boolean; canNext: boolean }>();
defineEmits<{ (e: 'prev'): void; (e: 'next'): void }>();
</script>

<template>
  <div class="bg-white rounded-2xl border border-slate-100 p-6">
    <div class="flex items-center gap-2 mb-2">
      <span class="w-6 h-6 rounded-full bg-teal text-white flex items-center justify-center">
        <IconCheck :size="14" :stroke-width="3" />
      </span>
      <h3 class="font-bold text-slate-900">Stap {{ step.index }}: {{ step.title }}</h3>
      <span
        v-if="step.isDone"
        class="ml-auto inline-flex items-center px-2.5 py-1 rounded-full bg-teal text-white text-xs font-semibold"
      >
        Voltooid
      </span>
      <span
        v-else-if="step.isActive"
        class="ml-auto inline-flex items-center px-2.5 py-1 rounded-full bg-brand-orange text-white text-xs font-semibold"
      >
        Actief
      </span>
    </div>
    <p class="text-sm text-slate-500 mb-4">{{ step.description }}</p>

    <div
      v-if="step.note"
      class="rounded-lg border border-teal/30 bg-teal-soft/40 px-4 py-3 text-sm text-slate-700"
    >
      ✓ {{ step.note }}
    </div>

    <div class="flex items-center justify-between mt-6">
      <BaseButton variant="outline" :disabled="!canPrev" @click="$emit('prev')">
        ‹ Vorige
      </BaseButton>
      <BaseButton :disabled="!canNext" @click="$emit('next')">
        Volgende ›
      </BaseButton>
    </div>
  </div>
</template>
