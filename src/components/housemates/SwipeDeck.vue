<script setup lang="ts">
import { storeToRefs } from 'pinia';
import HousemateCard from './HousemateCard.vue';
import BaseButton from '../ui/BaseButton.vue';
import { useHousematesStore } from '../../stores/housemates';

const store = useHousematesStore();
const { current, progressLabel, progressPercent, liked, skipped } = storeToRefs(store);
</script>

<template>
  <div>
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-slate-900">Vind je woongenoten</h1>
      <p class="text-sm text-slate-500 mt-1">{{ progressLabel }}</p>
      <div class="mt-2 h-1.5 bg-slate-200 rounded-full overflow-hidden">
        <div class="h-full bg-brand-orange transition-all" :style="{ width: progressPercent + '%' }" />
      </div>
    </div>

    <HousemateCard
      v-if="current"
      :housemate="current"
      @skip="store.skip()"
      @like="store.like()"
    />

    <div v-else class="bg-white rounded-2xl p-8 text-center shadow-card">
      <div class="text-4xl mb-3">🎉</div>
      <h2 class="text-lg font-bold text-slate-900">Klaar!</h2>
      <p class="text-sm text-slate-600 mt-1">Je hebt alle woongenoten bekeken.</p>
      <BaseButton class="mt-4" variant="outline" @click="store.reset()">Opnieuw beginnen</BaseButton>
    </div>

    <p class="text-center text-xs text-slate-500 mt-4">
      {{ liked.length }} geïnteresseerd · {{ skipped.length }} overgeslagen
    </p>
  </div>
</template>
