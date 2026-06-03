<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import LocationMap from '../components/locations/LocationMap.vue';
import LocationList from '../components/locations/LocationList.vue';
import BaseButton from '../components/ui/BaseButton.vue';
import { useLocationsStore } from '../stores/locations';
import { useRoleStore } from '../stores/role';

const store = useLocationsStore();
const { all, selectedId } = storeToRefs(store);
const router = useRouter();
const roleStore = useRoleStore();
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

    <div v-if="roleStore.role !== 'ambtenaar'" class="mt-8">
      <BaseButton block :disabled="!selectedId" @click="router.push('/matches')">
        Volgende: Matches bekijken
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </BaseButton>
    </div>
  </div>
</template>
