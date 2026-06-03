<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { aanvragerProfielen } from '../data/panden';

const route = useRoute();
const router = useRouter();

const persoon = computed(() => aanvragerProfielen[route.params.personId as string] ?? null);

const docStatusClass: Record<string, string> = {
  geverifieerd:   'bg-teal-soft text-teal',
  in_behandeling: 'bg-blue-100 text-blue-700',
  ontbreekt:      'bg-orange-100 text-orange-700',
};

const docStatusLabel: Record<string, string> = {
  geverifieerd:   'Geverifieerd',
  in_behandeling: 'In behandeling',
  ontbreekt:      'Ontbreekt',
};
</script>

<template>
  <div v-if="persoon" class="max-w-2xl mx-auto space-y-5">

    <!-- Back -->
    <button
      class="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition"
      @click="router.back()"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      Terug naar aanvraag
    </button>

    <!-- Persoonsgegevens -->
    <div class="bg-white rounded-card shadow-card p-6">
      <h2 class="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-4">Persoonsgegevens</h2>
      <div class="flex items-center gap-4 mb-5">
        <div class="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-navy"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </div>
        <div>
          <p class="text-lg font-bold text-slate-900">{{ persoon.naam }}</p>
          <p class="text-sm text-slate-500">{{ persoon.geboortedatum }}</p>
        </div>
      </div>
      <dl class="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
        <div>
          <dt class="text-slate-400 text-xs mb-0.5">E-mailadres</dt>
          <dd class="text-slate-800">{{ persoon.email }}</dd>
        </div>
        <div>
          <dt class="text-slate-400 text-xs mb-0.5">Telefoonnummer</dt>
          <dd class="text-slate-800">{{ persoon.telefoon }}</dd>
        </div>
      </dl>
    </div>

    <!-- Woonsituatie -->
    <div class="bg-white rounded-card shadow-card p-6">
      <h2 class="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-4">Woonsituatie</h2>
      <dl class="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
        <div>
          <dt class="text-slate-400 text-xs mb-0.5">Huidige situatie</dt>
          <dd class="font-medium text-slate-800">{{ persoon.huidigeSituatie }}</dd>
        </div>
        <div>
          <dt class="text-slate-400 text-xs mb-0.5">Personen in huishouden</dt>
          <dd class="font-medium text-slate-800">{{ persoon.huishoudenGrootte }} {{ persoon.huishoudenGrootte === 1 ? 'persoon' : 'personen' }}</dd>
        </div>
      </dl>
    </div>

    <!-- Woonwens -->
    <div class="bg-white rounded-card shadow-card p-6">
      <h2 class="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-4">Woonwens</h2>
      <div class="flex flex-wrap gap-2">
        <span
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium"
          :class="persoon.woonwens.kinderen ? 'bg-teal-soft text-teal' : 'bg-slate-100 text-slate-400'"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6 9 9 0 0 1 2.3-4"/><path d="M12 3c1 2 2 3.5 2 5s-.5 2.5-2 3"/></svg>
          Kinderen
        </span>
        <span
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium"
          :class="persoon.woonwens.huisdier ? 'bg-teal-soft text-teal' : 'bg-slate-100 text-slate-400'"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5"/><path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"/><path d="M8 14v.5"/><path d="M16 14v.5"/><path d="M11.25 16.25h1.5L12 17l-.75-.75Z"/><path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306"/></svg>
          Huisdier
        </span>
        <span
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium"
          :class="persoon.woonwens.woongroep ? 'bg-teal-soft text-teal' : 'bg-slate-100 text-slate-400'"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          Woongroep
        </span>
      </div>
    </div>

    <!-- Historie -->
    <div class="bg-white rounded-card shadow-card p-6">
      <h2 class="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-4">Historie</h2>
      <dl class="text-sm mb-5">
        <div>
          <dt class="text-slate-400 text-xs mb-0.5">Inschrijfdatum</dt>
          <dd class="font-medium text-slate-800">{{ persoon.inschrijfdatum }}</dd>
        </div>
      </dl>

      <p class="text-xs font-semibold text-slate-500 mb-2">Eerdere aanvragen</p>
      <ul class="space-y-2">
        <li
          v-for="(aanvraag, i) in persoon.vorigeAanvragen"
          :key="i"
          class="flex items-center justify-between text-sm py-2 border-b border-slate-100 last:border-0"
        >
          <span class="text-slate-700">{{ aanvraag.adres }}</span>
          <div class="flex items-center gap-3 shrink-0 ml-4">
            <span class="text-slate-400 text-xs">{{ aanvraag.jaar }}</span>
            <span class="text-xs font-medium" :class="aanvraag.uitkomst === 'Ingetrokken' ? 'text-slate-400' : 'text-orange-600'">
              {{ aanvraag.uitkomst }}
            </span>
          </div>
        </li>
      </ul>
    </div>

    <!-- Documenten -->
    <div class="bg-white rounded-card shadow-card p-6">
      <h2 class="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-4">Documenten</h2>
      <ul class="space-y-3">
        <li
          v-for="(doc, i) in persoon.documenten"
          :key="i"
          class="flex items-center justify-between"
        >
          <div class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-slate-400 shrink-0"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            <span class="text-sm text-slate-700">{{ doc.naam }}</span>
          </div>
          <span :class="['text-xs font-semibold px-2.5 py-1 rounded-full shrink-0', docStatusClass[doc.status]]">
            {{ docStatusLabel[doc.status] }}
          </span>
        </li>
      </ul>
    </div>

  </div>

  <div v-else class="text-center text-slate-400 mt-20 text-sm">Persoon niet gevonden.</div>
</template>
