<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import LocationMap from '../components/locations/LocationMap.vue';
import LocationList from '../components/locations/LocationList.vue';
import BaseButton from '../components/ui/BaseButton.vue';
import IconArrowRight from '../components/icons/IconArrowRight.vue';
import { useLocationsStore } from '../stores/locations';

const store = useLocationsStore();
const { all, selectedId } = storeToRefs(store);
const router = useRouter();
</script>

<template>
  <div class="bg-white rounded-card shadow-card p-8">
    <h1 class="text-2xl font-bold text-slate-900 mb-1">Kies je voorkeurslocatie in Arnhem</h1>
    <p class="text-sm text-slate-500 mb-6">Klik op een wijk om beschikbare woningen te zien.</p>

    <hr class="mb-6 border-slate-100" />

    <div class="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
      <LocationMap :locations="all" :selected-id="selectedId" @select="store.select" />
      <LocationList :locations="all" :selected-id="selectedId" @select="store.select" />
    </div>

    <p class="text-xs text-slate-400 mt-2">Kaart: © OpenStreetMap contributors</p>

    <div class="mt-8">
      <BaseButton block :disabled="!selectedId" @click="router.push('/matches')">
        Volgende: Matches bekijken
        <IconArrowRight :size="18" :stroke-width="2.5" />
      </BaseButton>
    </div>
  </div>
</template>
