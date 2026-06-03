<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import SectionCard from '../../components/ui/SectionCard.vue';
import DonutGauge from '../../components/ui/DonutGauge.vue';
import ProgressBar from '../../components/ui/ProgressBar.vue';
import CaseRow from '../../components/officer/CaseRow.vue';
import IconClock from '../../components/icons/IconClock.vue';
import IconCheck from '../../components/icons/IconCheck.vue';
import IconList from '../../components/icons/IconList.vue';
import { useCasesStore } from '../../stores/cases';
import { CaseStatus } from '../../domain/Enums';

const store = useCasesStore();
const { cases, approvalRate, avgDaysSaved } = storeToRefs(store);
const router = useRouter();

const openCases = computed(() => cases.value.filter((c) => c.status !== CaseStatus.Completed));

function openCase(id: string) {
  router.push({ name: 'officer-case-detail', params: { id } });
}

const timeSavedPercent = computed(() => Math.min(100, (avgDaysSaved.value / 12) * 100));
</script>

<template>
  <div>
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-slate-900">Overview</h1>
      <p class="text-sm text-slate-500 mt-1">
        Overzicht van prestaties en openstaande zaken voor de gemeente Arnhem.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2">
        <SectionCard title="Zaken openstaand" :icon="IconList" :subtitle="`${openCases.length} zaken in behandeling`">
          <div class="space-y-1">
            <CaseRow
              v-for="c in openCases"
              :key="c.id"
              :case-item="c"
              @select="openCase"
            />
            <p v-if="openCases.length === 0" class="text-sm text-slate-500 text-center py-8">
              Geen openstaande zaken.
            </p>
          </div>
        </SectionCard>
      </div>

      <div class="space-y-6">
        <SectionCard title="Tijd bespaard" :icon="IconClock" subtitle="Gemiddeld per zaak">
          <div class="text-center mb-3">
            <div class="text-4xl font-bold text-slate-900">{{ avgDaysSaved }}</div>
            <div class="text-xs text-slate-500 uppercase tracking-wide mt-1">Dagen gemiddeld</div>
          </div>
          <ProgressBar :percent="timeSavedPercent" color="#2f6b6b" />
          <p class="text-xs text-slate-500 mt-2">
            Vergeleken met de traditionele doorlooptijd van 12 dagen.
          </p>
        </SectionCard>

        <SectionCard title="Goedkeuringen" :icon="IconCheck" subtitle="Aandeel toegewezen reviews">
          <div class="flex justify-center">
            <DonutGauge :percent="approvalRate" color="#15803d" />
          </div>
          <p class="text-xs text-slate-500 mt-3 text-center">
            Percentage van alle reviews dat goedgekeurd is.
          </p>
        </SectionCard>
      </div>
    </div>
  </div>
</template>
