<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import BaseSelect from '../ui/BaseSelect.vue';
import BaseCheckboxTile from '../ui/BaseCheckboxTile.vue';
import BaseButton from '../ui/BaseButton.vue';
import IconUsers from '../icons/IconUsers.vue';
import IconEuro from '../icons/IconEuro.vue';
import IconHeart from '../icons/IconHeart.vue';
import IconSmile from '../icons/IconSmile.vue';
import IconPaw from '../icons/IconPaw.vue';
import IconBriefcase from '../icons/IconBriefcase.vue';
import IconArrowRight from '../icons/IconArrowRight.vue';
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
            :icon="IconUsers"
            @update:model-value="store.setHouseholdSize($event)"
          />

          <BaseSelect
            :model-value="user.budget"
            :options="budgetOptions"
            label="Budget per maand"
            placeholder="Selecteer budget"
            :icon="IconEuro"
            @update:model-value="store.setBudget($event)"
          />
        </div>

        <BaseSelect
          :model-value="user.lifestyle"
          :options="lifestyleOptions"
          label="Leefstijl"
          placeholder="Selecteer leefstijl"
          :icon="IconHeart"
          @update:model-value="store.setLifestyle($event)"
        />

        <fieldset class="border border-slate-200 rounded-xl p-4">
          <legend class="text-xs font-medium text-slate-500 px-2">Aanvullende informatie</legend>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
            <BaseCheckboxTile
              :model-value="user.hasChildren"
              label="Kinderen"
              :icon="IconSmile"
              @update:model-value="store.toggleChildren()"
            />
            <BaseCheckboxTile
              :model-value="user.hasPets"
              label="Huisdieren"
              :icon="IconPaw"
              @update:model-value="store.togglePets()"
            />
            <BaseCheckboxTile
              :model-value="user.worksFromHome"
              label="Werkt thuis"
              :icon="IconBriefcase"
              @update:model-value="store.toggleWfh()"
            />
          </div>
        </fieldset>

        <BaseButton type="submit" block :disabled="!isComplete">
          Volgende: Locaties bekijken
          <IconArrowRight :size="18" :stroke-width="2.5" />
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
