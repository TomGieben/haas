<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import BaseSelect from '../ui/BaseSelect.vue';
import BaseCheckboxTile from '../ui/BaseCheckboxTile.vue';
import BaseButton from '../ui/BaseButton.vue';
import { useProfileStore } from '../../stores/profile';
import {
  HouseholdSize,
  Budget,
  Lifestyle,
  householdLabels,
  budgetLabels,
  lifestyleLabels,
} from '../../domain/Enums';

const store = useProfileStore();
const { user, isComplete } = storeToRefs(store);
const router = useRouter();

const householdOptions = Object.values(HouseholdSize).map((v) => ({ value: v, label: householdLabels[v] }));
const budgetOptions = Object.values(Budget).map((v) => ({ value: v, label: budgetLabels[v] }));
const lifestyleOptions = Object.values(Lifestyle).map((v) => ({ value: v, label: lifestyleLabels[v] }));

const iconUsers = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;
const iconEuro = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10h12"/><path d="M4 14h9"/><path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"/></svg>`;
const iconHeart = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
const iconChild = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`;
const iconPaw = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="4" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><circle cx="2" cy="16" r="2"/><path d="M7 21c0-3 2-5 5-5s5 2 5 5"/></svg>`;
const iconBriefcase = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>`;

function submit() {
  router.push('/locaties');
}
</script>

<template>
  <div class="bg-white rounded-card shadow-card p-8 md:p-10">
    <div class="flex items-start gap-4 mb-6">
      <div class="w-14 h-14 bg-teal-soft rounded-2xl flex items-center justify-center shrink-0">
        <img src="/rabbit.svg" class="w-10 h-10" alt="HaaS" />
      </div>
      <div>
        <h1 class="text-2xl font-bold text-slate-900 mb-1">Hoi, ik ben HaaS! 🐰</h1>
        <div class="inline-block bg-teal-soft text-slate-700 text-sm rounded-2xl px-4 py-2">
          Vul uw voorkeuren in, zodat wij een passende woning voor u kunnen zoeken.
        </div>
      </div>
    </div>

    <hr class="my-6 border-slate-100" />

    <form class="space-y-6" @submit.prevent="submit">
      <BaseSelect
        :model-value="user.householdSize"
        :options="householdOptions"
        label="Huishoudgrootte"
        placeholder="Selecteer aantal personen"
        :icon="iconUsers"
        @update:model-value="store.setHouseholdSize($event)"
      />

      <BaseSelect
        :model-value="user.budget"
        :options="budgetOptions"
        label="Budget per maand"
        placeholder="Selecteer budget"
        :icon="iconEuro"
        @update:model-value="store.setBudget($event)"
      />

      <BaseSelect
        :model-value="user.lifestyle"
        :options="lifestyleOptions"
        label="Leefstijl"
        placeholder="Selecteer leefstijl"
        :icon="iconHeart"
        @update:model-value="store.setLifestyle($event)"
      />

      <fieldset class="border border-slate-200 rounded-xl p-4">
        <legend class="text-xs font-medium text-slate-500 px-2">Aanvullende informatie</legend>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
          <BaseCheckboxTile
            :model-value="user.hasChildren"
            label="Kinderen"
            :icon="iconChild"
            @update:model-value="store.toggleChildren()"
          />
          <BaseCheckboxTile
            :model-value="user.hasPets"
            label="Huisdieren"
            :icon="iconPaw"
            @update:model-value="store.togglePets()"
          />
          <BaseCheckboxTile
            :model-value="user.worksFromHome"
            label="Werkt thuis"
            :icon="iconBriefcase"
            @update:model-value="store.toggleWfh()"
          />
        </div>
      </fieldset>

      <BaseButton type="submit" block :disabled="!isComplete">
        Volgende: Locaties bekijken
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </BaseButton>
    </form>
  </div>
</template>
