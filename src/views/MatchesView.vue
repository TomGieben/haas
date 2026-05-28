<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import MatchCard from '../components/matches/MatchCard.vue';
import BaseButton from '../components/ui/BaseButton.vue';
import { useMatchesStore } from '../stores/matches';

const store = useMatchesStore();
const { ranked, selectedId } = storeToRefs(store);
const router = useRouter();
</script>

<template>
  <div class="bg-white rounded-card shadow-card p-8">
    <h1 class="text-2xl font-bold text-slate-900 mb-1">Je matches in de buurt</h1>
    <p class="text-sm text-slate-500 mb-6">Op basis van je profiel hebben we deze woningen gevonden.</p>

    <hr class="mb-6 border-slate-100" />

    <div class="space-y-3">
      <MatchCard
        v-for="m in ranked"
        :key="m.id"
        :match="m"
        :selected="m.id === selectedId"
        @select="store.select"
      />
    </div>

    <div class="mt-8">
      <BaseButton block @click="router.push('/voortgang')">
        Naar voortgang overzicht
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </BaseButton>
    </div>
  </div>
</template>
