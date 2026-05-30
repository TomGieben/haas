<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import PinMap from '../components/locations/PinMap.vue';
import { panden, aanvragersByPand } from '../data/panden';

const route = useRoute();
const router = useRouter();

const pand = computed(() => panden.find(p => p.id === route.params.id) ?? null);

const aanvragers = computed(() => {
  if (!pand.value) return [];
  return [...(aanvragersByPand[pand.value.id] ?? [])].sort((a, b) => b.score - a.score);
});

function scoreColor(score: number) {
  if (score >= 80) return 'text-teal font-semibold';
  if (score >= 60) return 'text-slate-700 font-semibold';
  return 'text-slate-400 font-semibold';
}
</script>

<template>
  <div v-if="pand" class="max-w-3xl mx-auto space-y-6">
    <!-- Back -->
    <button
      class="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition"
      @click="router.back()"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      Terug naar overzicht
    </button>

    <!-- Address header -->
    <div class="bg-white rounded-card shadow-card p-6">
      <div class="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 class="text-2xl font-bold text-slate-900">{{ pand.straat }} {{ pand.huisnummer }}</h1>
          <p class="text-sm text-slate-500 mt-0.5">{{ pand.wijk }} · Arnhem</p>
        </div>
        <span class="text-sm font-semibold bg-teal-soft text-teal px-3 py-1 rounded-full shrink-0">
          {{ pand.geinteresseerd }} geïnteresseerd
        </span>
      </div>

      <hr class="my-4 border-slate-100" />

      <dl class="grid grid-cols-3 gap-4 text-sm">
        <div>
          <dt class="text-slate-400 text-xs uppercase tracking-wide mb-0.5">Bouwjaar</dt>
          <dd class="font-semibold text-slate-800">{{ pand.bouwjaar }}</dd>
        </div>
        <div>
          <dt class="text-slate-400 text-xs uppercase tracking-wide mb-0.5">Oppervlakte</dt>
          <dd class="font-semibold text-slate-800">{{ pand.oppervlakte }} m²</dd>
        </div>
        <div>
          <dt class="text-slate-400 text-xs uppercase tracking-wide mb-0.5">Kamers</dt>
          <dd class="font-semibold text-slate-800">{{ pand.kamers }}</dd>
        </div>
      </dl>
    </div>

    <!-- Map -->
    <div class="bg-white rounded-card shadow-card p-6">
      <h2 class="text-sm font-semibold text-slate-700 mb-4">Locatie</h2>
      <PinMap :coords="pand.coords" :label="`${pand.straat} ${pand.huisnummer}`" />
      <p class="text-xs text-slate-400 mt-2">Kaart: © OpenStreetMap contributors</p>
    </div>

    <!-- Applicants -->
    <div class="bg-white rounded-card shadow-card overflow-hidden">
      <div class="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
        <h2 class="text-sm font-semibold text-slate-700">Woningzoekenden</h2>
        <span class="text-xs text-slate-400">{{ aanvragers.length }} aanvragen · gesorteerd op match</span>
      </div>

      <ul class="divide-y divide-slate-100">
        <li
          v-for="(a, i) in aanvragers"
          :key="i"
          class="px-6 py-4 flex items-center justify-between"
        >
          <div class="flex items-center gap-4">
            <div class="w-9 h-9 rounded-full bg-navy/10 flex items-center justify-center shrink-0 text-xs font-bold text-navy">
              {{ i + 1 }}
            </div>
            <div>
              <p class="text-sm font-semibold text-slate-800">{{ a.naam }}</p>
              <p class="text-xs text-slate-400">{{ a.situatie }} · {{ a.datum }}</p>
            </div>
          </div>
          <div class="flex items-center gap-1.5 shrink-0">
            <span :class="['text-base', scoreColor(a.score)]">{{ a.score }}%</span>
            <span class="text-xs text-slate-400">match</span>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <div v-else class="text-center text-slate-400 mt-20 text-sm">Pand niet gevonden.</div>
</template>
