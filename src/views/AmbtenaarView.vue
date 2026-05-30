<script setup lang="ts">
import { ref } from 'vue';

interface Pand {
  id: string;
  straat: string;
  huisnummer: string;
  geinteresseerd: number;
}

const panden = ref<Pand[]>([
  { id: '1', straat: 'Velperweg', huisnummer: '12', geinteresseerd: 8 },
  { id: '2', straat: 'Kronenburgsingel', huisnummer: '34A', geinteresseerd: 5 },
  { id: '3', straat: 'Eusebiusbuitensingel', huisnummer: '7', geinteresseerd: 12 },
  { id: '4', straat: 'Hommelseweg', huisnummer: '91', geinteresseerd: 3 },
  { id: '5', straat: 'Zijpendaalseweg', huisnummer: '55B', geinteresseerd: 7 },
  { id: '6', straat: 'Parkstraat', huisnummer: '18', geinteresseerd: 2 },
]);

const selected = ref<Pand | null>(null);
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-slate-900">Locatie-aanvragen</h1>
      <p class="text-sm text-slate-500 mt-1">Overzicht van beschikbare panden en interesse — Gemeente Arnhem</p>
    </div>

    <div class="bg-white rounded-card shadow-card overflow-hidden">
      <div class="px-6 py-3 border-b border-slate-100 flex items-center justify-between">
        <span class="text-xs font-semibold uppercase tracking-wide text-slate-400">{{ panden.length }} panden</span>
        <span class="text-xs text-slate-400">Gesorteerd op interesse</span>
      </div>

      <ul class="divide-y divide-slate-100">
        <li
          v-for="pand in panden"
          :key="pand.id"
          class="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition cursor-pointer"
          @click="selected = pand"
        >
          <div class="flex items-center gap-4">
            <div class="w-9 h-9 rounded-full bg-navy/10 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-navy"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <div>
              <p class="text-sm font-semibold text-slate-800">{{ pand.straat }} {{ pand.huisnummer }}</p>
              <p class="text-xs text-slate-400">Arnhem</p>
            </div>
          </div>
          <div class="flex items-center gap-2 text-sm text-slate-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-400"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            <span class="font-semibold">{{ pand.geinteresseerd }}</span>
            <span class="text-slate-400">geïnteresseerd</span>
          </div>
        </li>
      </ul>
    </div>

    <Transition name="slide-up">
      <div
        v-if="selected"
        class="fixed inset-0 bg-black/30 z-40 flex items-end sm:items-center justify-center"
        @click.self="selected = null"
      >
        <div class="bg-white rounded-t-2xl sm:rounded-2xl w-full sm:max-w-md p-6 shadow-xl">
          <div class="flex items-center justify-between mb-4">
            <h2 class="font-bold text-slate-900">{{ selected.straat }} {{ selected.huisnummer }}</h2>
            <button @click="selected = null" class="text-slate-400 hover:text-slate-600 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
          <dl class="space-y-2 text-sm mb-6">
            <div class="flex justify-between">
              <dt class="text-slate-500">Straat</dt>
              <dd class="font-medium text-slate-800">{{ selected.straat }}</dd>
            </div>
            <div class="flex justify-between">
              <dt class="text-slate-500">Huisnummer</dt>
              <dd class="font-medium text-slate-800">{{ selected.huisnummer }}</dd>
            </div>
            <div class="flex justify-between">
              <dt class="text-slate-500">Stad</dt>
              <dd class="font-medium text-slate-800">Arnhem</dd>
            </div>
            <div class="flex justify-between">
              <dt class="text-slate-500">Geïnteresseerden</dt>
              <dd class="font-semibold text-slate-800">{{ selected.geinteresseerd }} personen</dd>
            </div>
          </dl>
          <button
            class="w-full bg-navy text-white rounded-xl py-2.5 text-sm font-semibold hover:bg-navy-deep transition"
            @click="selected = null"
          >
            Aanvragen bekijken
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(16px);
}
</style>