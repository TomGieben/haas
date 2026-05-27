import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { ProgressService } from '../services/ProgressService';
import { StepStatus } from '../domain/Enums';
import type { ProgressStep } from '../domain/ProgressStep';

export const useProgressStore = defineStore('progress', () => {
  const steps = ref<ProgressStep[]>(ProgressService.buildInitialPipeline());
  const currentIndex = ref(0);

  const current = computed(() => steps.value[currentIndex.value] ?? null);
  const total = computed(() => steps.value.length);

  function goTo(index: number) {
    if (index < 0 || index >= steps.value.length) return;
    currentIndex.value = index;
  }
  function next() {
    if (currentIndex.value < steps.value.length - 1) {
      const step = steps.value[currentIndex.value];
      if (step.status === StepStatus.Active) step.status = StepStatus.Done;
      currentIndex.value += 1;
      const nextStep = steps.value[currentIndex.value];
      if (nextStep.status === StepStatus.Pending) nextStep.status = StepStatus.Active;
    }
  }
  function prev() {
    if (currentIndex.value > 0) currentIndex.value -= 1;
  }

  return { steps, currentIndex, current, total, goTo, next, prev };
});
