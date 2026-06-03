<script setup lang="ts">
import { computed } from 'vue';
import { useCasesStore } from '../../stores/cases';
import ReviewItemCard from '../../components/officer/ReviewItemCard.vue';
import ReviewCounter from '../../components/officer/ReviewCounter.vue';
import StatusBadge from '../../components/ui/StatusBadge.vue';
import IconChevronLeft from '../../components/icons/IconChevronLeft.vue';
import { ReviewDecision } from '../../domain/Enums';

const props = defineProps<{ id: string }>();
const store = useCasesStore();

const caseItem = computed(() => store.getById(props.id));
const progress = computed(() => store.reviewProgress(props.id));

function decide(itemId: string, decision: ReviewDecision) {
  store.decideReviewItem(props.id, itemId, decision);
}
</script>

<template>
  <div v-if="caseItem">
    <router-link
      :to="{ name: 'officer-case-detail', params: { id: caseItem.id } }"
      class="inline-flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-slate-900 mb-4"
    >
      <IconChevronLeft :size="14" :stroke-width="2.5" />
      Terug naar zaak detail
    </router-link>

    <div class="flex flex-wrap items-start justify-between gap-4 mb-6">
      <div>
        <div class="flex items-center gap-3 mb-1">
          <span class="font-mono text-sm font-semibold text-slate-500">{{ caseItem.caseNumber }}</span>
          <StatusBadge :label="caseItem.statusLabel" :tone="caseItem.statusTone" />
        </div>
        <h1 class="text-2xl font-bold text-slate-900">HaaS review</h1>
        <p class="text-sm text-slate-500 mt-0.5">
          Beoordeel ieder onderdeel van de aanvraag van {{ caseItem.applicantName }}.
        </p>
      </div>
      <ReviewCounter :progress="progress" />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <ReviewItemCard
        v-for="item in caseItem.reviewItems"
        :key="item.id"
        :item="item"
        @decide="decide"
      />
    </div>
  </div>

  <div v-else class="bg-white rounded-card shadow-card p-8 text-center">
    <h2 class="text-lg font-semibold text-slate-900">Zaak niet gevonden</h2>
    <router-link to="/officer/cases" class="text-brand-orange font-semibold text-sm mt-4 inline-block">
      Terug naar lopende zaken
    </router-link>
  </div>
</template>
