<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import ProgressTracker from '../components/progress/ProgressTracker.vue';
import StepDetail from '../components/progress/StepDetail.vue';
import { useProgressStore } from '../stores/progress';

const store = useProgressStore();
const { steps, currentIndex, current } = storeToRefs(store);

const canPrev = computed(() => currentIndex.value > 0);
const canNext = computed(() => currentIndex.value < steps.value.length - 1);
</script>

<template>
  <div class="bg-white rounded-card shadow-card p-8 max-w-3xl mx-auto">
    <h1 class="text-2xl font-bold text-slate-900 mb-1">Je aanvraag is verstuurd</h1>
    <p class="text-sm text-slate-500 mb-6">Volg hier de voortgang van je woningaanvraag.</p>

    <hr class="mb-6 border-slate-100" />

    <div class="flex items-start gap-3 bg-teal-soft/60 rounded-2xl p-4 mb-8">
      <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0">
        <img src="/rabbit.svg" class="w-7 h-7" alt="HaaS" />
      </div>
      <div>
        <p class="text-sm font-semibold text-slate-800">HaaS — je woon-assistent</p>
        <p class="text-sm text-slate-700">
          Hoi! Ik heb je profiel geanalyseerd en de beste matches gevonden. Een ambtenaar gaat je aanvraag nu beoordelen. Ik houd je op de hoogte.
        </p>
      </div>
    </div>

    <ProgressTracker :steps="steps" :current-index="currentIndex" @select="store.goTo" />

    <div class="mt-10">
      <StepDetail
        v-if="current"
        :step="current"
        :can-prev="canPrev"
        :can-next="canNext"
        @prev="store.prev"
        @next="store.next"
      />
    </div>
  </div>
</template>
