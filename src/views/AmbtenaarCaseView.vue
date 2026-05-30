<script setup lang="ts">
import { computed, ref } from 'vue';
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

const topKandidaat = computed(() => aanvragers.value[0] ?? null);

function scoreColor(score: number) {
  if (score >= 80) return 'text-teal font-semibold';
  if (score >= 60) return 'text-slate-700 font-semibold';
  return 'text-slate-400 font-semibold';
}

// Beoordeling flow
const isLoading = ref(false);
const modalOpen = ref(false);

const criteria = [
  { label: 'Inkomensmatch',         score: 7 },
  { label: 'Gezinssamenstelling',   score: 9 },
  { label: 'Urgentie',              score: 6 },
];

function startBeoordeling() {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    modalOpen.value = true;
  }, 1500);
}

function closeModal() {
  modalOpen.value = false;
}

function overnemen() {
  modalOpen.value = false;
  router.push(`/ambtenaar/${route.params.id}/vervolgstappen`);
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
          :key="a.id"
          class="px-6 py-4 flex items-center justify-between hover:bg-slate-50 cursor-pointer transition"
          @click="router.push(`/ambtenaar/${route.params.id}/aanvrager/${a.id}`)"
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
          <div class="flex items-center gap-3 shrink-0">
            <div class="flex items-center gap-1.5">
              <span :class="['text-base', scoreColor(a.score)]">{{ a.score }}%</span>
              <span class="text-xs text-slate-400">match</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-300"><path d="m9 18 6-6-6-6"/></svg>
          </div>
        </li>
      </ul>
    </div>

    <!-- Genereer beoordeling -->
    <div class="flex justify-end pb-4">
      <button
        class="flex items-center gap-2 bg-navy text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-navy-deep transition disabled:opacity-60"
        :disabled="isLoading"
        @click="startBeoordeling"
      >
        <svg v-if="isLoading" class="animate-spin" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/></svg>
        {{ isLoading ? 'Analyseren…' : 'Genereer beoordeling' }}
      </button>
    </div>
  </div>

  <div v-else class="text-center text-slate-400 mt-20 text-sm">Pand niet gevonden.</div>

  <!-- Modal: Concept beoordeling -->
  <Transition name="fade">
    <div
      v-if="modalOpen"
      class="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4"
      @click.self="closeModal"
    >
      <div class="bg-white rounded-2xl w-full max-w-md shadow-xl overflow-hidden">
        <div class="px-6 pt-6 pb-4 flex items-center justify-between border-b border-slate-100">
          <h2 class="font-bold text-slate-900">Concept beoordeling</h2>
          <button @click="closeModal" class="text-slate-400 hover:text-slate-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        <div class="px-6 py-5 space-y-5">
          <!-- Disclaimer -->
          <div class="flex items-start gap-3 bg-orange-50 rounded-xl p-3.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-brand-orange shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <p class="text-xs text-orange-800 leading-relaxed">
              Dit advies is gegenereerd op basis van de beschikbare gegevens.
              De uiteindelijke beslissing ligt bij de ambtenaar.
            </p>
          </div>

          <!-- Criteria -->
          <div class="space-y-3">
            <div v-for="c in criteria" :key="c.label" class="flex items-center gap-3">
              <span class="text-sm text-slate-600 w-44 shrink-0">{{ c.label }}</span>
              <div class="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  class="h-full bg-teal rounded-full transition-all"
                  :style="`width: ${c.score * 10}%`"
                />
              </div>
              <span class="text-sm font-semibold text-slate-700 w-10 text-right shrink-0">{{ c.score }}/10</span>
            </div>
          </div>

          <!-- Recommended candidate -->
          <div v-if="topKandidaat" class="bg-teal-soft/60 rounded-xl p-4">
            <p class="text-xs font-semibold uppercase tracking-wide text-teal mb-1">Geadviseerde kandidaat</p>
            <p class="text-sm font-bold text-slate-900">{{ topKandidaat.naam }}</p>
            <p class="text-xs text-slate-600 mt-1">
              Hoogste match ({{ topKandidaat.score }}%) op basis van inschrijfduur, inkomen en gezinssamenstelling.
            </p>
          </div>
        </div>

        <div class="px-6 pb-6 flex gap-3">
          <button
            class="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition"
            @click="closeModal"
          >
            Zelf beoordelen
          </button>
          <button
            class="flex-1 px-4 py-2.5 rounded-xl bg-navy text-white text-sm font-semibold hover:bg-navy-deep transition"
            @click="overnemen"
          >
            Advies overnemen
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
