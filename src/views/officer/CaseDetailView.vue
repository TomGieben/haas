<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import SectionCard from '../../components/ui/SectionCard.vue';
import StatusBadge from '../../components/ui/StatusBadge.vue';
import BaseButton from '../../components/ui/BaseButton.vue';
import HousemateChip from '../../components/officer/HousemateChip.vue';
import PropertyCard from '../../components/officer/PropertyCard.vue';
import AINarrativeCard from '../../components/officer/AINarrativeCard.vue';
import { useCasesStore } from '../../stores/cases';
import { housemates } from '../../data/housemates';
import { properties } from '../../data/properties';

const props = defineProps<{ id: string }>();
const router = useRouter();
const store = useCasesStore();

const caseItem = computed(() => store.getById(props.id));
const property = computed(() =>
  caseItem.value ? properties.find((p) => p.id === caseItem.value!.propertyId) : null,
);
const chosen = computed(() =>
  caseItem.value
    ? caseItem.value.chosenHousemateIds
        .map((id) => housemates.find((h) => h.id === id))
        .filter((h): h is NonNullable<typeof h> => Boolean(h))
    : [],
);

const iconUsers = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;

function startReview() {
  if (caseItem.value) {
    router.push({ name: 'officer-case-review', params: { id: caseItem.value.id } });
  }
}
</script>

<template>
  <div v-if="caseItem">
    <router-link
      to="/officer/cases"
      class="inline-flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-slate-900 mb-4"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      Terug naar lopende zaken
    </router-link>

    <div class="bg-white rounded-card shadow-card p-6 mb-6">
      <div class="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div class="flex items-center gap-3 mb-1">
            <span class="font-mono text-sm font-semibold text-slate-500">{{ caseItem.caseNumber }}</span>
            <StatusBadge :label="caseItem.statusLabel" :tone="caseItem.statusTone" />
          </div>
          <h1 class="text-2xl font-bold text-slate-900">{{ caseItem.applicantName }}</h1>
          <p class="text-sm text-slate-500 mt-0.5">
            {{ caseItem.applicantProfession }} · {{ caseItem.applicantAge }} jaar · {{ caseItem.householdType }}
          </p>
          <p class="text-xs text-slate-400 mt-1">Ingediend op {{ caseItem.submittedLabel }}</p>
        </div>
        <BaseButton @click="startReview">
          HaaS review starten
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </BaseButton>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="space-y-6">
        <SectionCard title="Gekozen woongenoten" :icon="iconUsers" :subtitle="`${chosen.length} ${chosen.length === 1 ? 'woongenoot' : 'woongenoten'}`">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <HousemateChip v-for="h in chosen" :key="h.id" :housemate="h" />
            <p v-if="chosen.length === 0" class="text-sm text-slate-500 col-span-full">
              Nog geen woongenoten gekozen.
            </p>
          </div>
        </SectionCard>

        <AINarrativeCard :narrative="caseItem.narrative" />
      </div>

      <div>
        <PropertyCard v-if="property" :property="property" />
      </div>
    </div>
  </div>

  <div v-else class="bg-white rounded-card shadow-card p-8 text-center">
    <h2 class="text-lg font-semibold text-slate-900">Zaak niet gevonden</h2>
    <p class="text-sm text-slate-500 mt-1">De opgegeven zaak bestaat niet.</p>
    <router-link to="/officer/cases" class="text-brand-orange font-semibold text-sm mt-4 inline-block">
      Terug naar lopende zaken
    </router-link>
  </div>
</template>
