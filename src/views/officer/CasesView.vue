<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import CaseStatusSummary from '../../components/officer/CaseStatusSummary.vue';
import CaseCard from '../../components/officer/CaseCard.vue';
import IconArrowRight from '../../components/icons/IconArrowRight.vue';
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
        <IconArrowRight :size="14" :stroke-width="2.5" />
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
