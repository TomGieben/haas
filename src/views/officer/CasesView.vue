<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import CaseStatusSummary from '../../components/officer/CaseStatusSummary.vue';
import CaseCard from '../../components/officer/CaseCard.vue';
import { useCasesStore } from '../../stores/cases';

const store = useCasesStore();
const { cases, summary } = storeToRefs(store);
const router = useRouter();

function openCase(id: string) {
  router.push({ name: 'officer-case-detail', params: { id } });
}
</script>

<template>
  <div>
    <div class="flex items-start justify-between gap-4 mb-6">
      <div>
        <h1 class="text-2xl font-bold text-slate-900">Lopende zaken</h1>
        <p class="text-sm text-slate-500 mt-1">
          Overzicht van openstaande aanvragen die wachten op behandeling.
        </p>
      </div>
      <router-link
        to="/officer/overview"
        class="text-sm font-semibold text-brand-orange hover:text-brand-orange-dark inline-flex items-center gap-1"
      >
        Bekijk overview
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </router-link>
    </div>

    <CaseStatusSummary :summary="summary" />

    <div class="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <CaseCard
        v-for="c in cases"
        :key="c.id"
        :case-item="c"
        @select="openCase"
      />
    </div>
  </div>
</template>
