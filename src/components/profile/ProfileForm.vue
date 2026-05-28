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

type KnownDataStatus = 'known' | 'optional';

interface KnownDataItem {
  label: string;
  source: string;
  status: KnownDataStatus;
}

const knownMunicipalityData: KnownDataItem[] = [
  { label: 'Inkomen / salarisindicatie', source: 'SUWI', status: 'known' },
  { label: 'Zorggebruik (Wmo/Jeugdwet-indicatie)', source: 'Gemeentelijke zorgregistratie', status: 'known' },
  { label: 'Huishoudsamenstelling', source: 'BRP', status: 'known' },
  { label: 'Huidig woonadres', source: 'BRP', status: 'known' },
  { label: 'Uitkeringsstatus', source: 'Participatie- en inkomensdossiers', status: 'optional' },
  { label: 'Schuldhulpverlening / betalingsregeling', source: 'Gemeentelijke dienstverlening', status: 'optional' },
  { label: 'Werk- en re-integratietraject', source: 'Werk & Inkomen', status: 'optional' },
  { label: 'Urgentie of maatschappelijke indicatie', source: 'Woonloket / zorgketen', status: 'optional' },
];

function submit() {
  router.push('/locaties');
}
</script>

<template>
  <div class="bg-white rounded-card shadow-card p-6 md:p-8 xl:p-10">
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

    <hr class="my-5 border-slate-100" />

    <form class="grid grid-cols-1 xl:grid-cols-12 gap-5 xl:gap-6" @submit.prevent="submit">
      <div class="xl:col-span-7 space-y-5">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        </div>

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
      </div>

      <section class="xl:col-span-5 rounded-xl border border-teal-100 bg-teal-50/40 p-4 md:p-5 xl:sticky xl:top-4 xl:self-start">
        <div class="flex items-start justify-between gap-3">
          <div>
            <h2 class="text-sm font-semibold text-slate-900">Al bekend bij gemeente</h2>
            <p class="text-xs text-slate-600 mt-1">
              Vaak al beschikbaar via gekoppelde systemen, zodat u minder hoeft in te vullen.
            </p>
          </div>
          <span class="inline-flex items-center rounded-full bg-white border border-teal-200 px-3 py-1 text-[11px] font-medium text-teal-700">
            Systeemcheck
          </span>
        </div>

        <ul class="mt-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-2">
          <li
            v-for="item in knownMunicipalityData"
            :key="item.label"
            class="flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2"
          >
            <div class="min-w-0">
              <p class="text-sm text-slate-800 leading-5">{{ item.label }}</p>
              <p class="text-xs text-slate-500 truncate">Bron: {{ item.source }}</p>
            </div>

            <span
              class="shrink-0 inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium"
              :class="item.status === 'known'
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                : 'bg-amber-50 text-amber-700 border border-amber-200'"
            >
              {{ item.status === 'known' ? 'Bekend' : 'Mogelijk nodig' }}
            </span>
          </li>
        </ul>
      </section>
    </form>
  </div>
</template>
