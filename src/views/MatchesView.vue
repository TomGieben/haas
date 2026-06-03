<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import MatchCard from '../components/matches/MatchCard.vue';
import BaseButton from '../components/ui/BaseButton.vue';
import IconArrowRight from '../components/icons/IconArrowRight.vue';
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
        <IconArrowRight :size="18" :stroke-width="2.5" />
      </BaseButton>
    </div>
  </div>
</template>
