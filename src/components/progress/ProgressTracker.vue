<script setup lang="ts">
import type { ProgressStep } from '../../domain/ProgressStep';

defineProps<{ steps: ProgressStep[]; currentIndex: number }>();
defineEmits<{ (e: 'select', idx: number): void }>();
</script>

<template>
  <div class="relative flex items-start justify-between px-4">
    <div class="absolute top-5 left-[10%] right-[10%] h-0.5 bg-slate-200 -z-0" />
    <button
      v-for="(step, i) in steps"
      :key="step.index"
      type="button"
      class="relative z-10 flex flex-col items-center gap-2 flex-1 group"
      @click="$emit('select', i)"
    >
      <span
        class="w-11 h-11 rounded-full flex items-center justify-center font-semibold text-sm border-2 transition"
        :class="[
          i === currentIndex
            ? 'bg-white border-teal text-teal'
            : step.isDone
            ? 'bg-teal border-teal text-white'
            : 'bg-white border-slate-300 text-slate-400',
        ]"
      >
        <svg v-if="step.isDone && i !== currentIndex" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        <svg v-else-if="i === currentIndex" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        <template v-else>{{ step.index }}</template>
      </span>
      <span
        class="text-xs text-center font-medium leading-tight max-w-[110px]"
        :class="i === currentIndex ? 'text-slate-800' : 'text-slate-500'"
      >
        {{ step.title }}
      </span>
    </button>
  </div>
</template>
