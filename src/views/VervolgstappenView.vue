<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { panden } from '../data/panden';

const route = useRoute();
const router = useRouter();

const pand = computed(() => panden.find(p => p.id === route.params.pandId) ?? null);

const stappen = ref([
  { label: 'Pandeigenaar informeren', done: false },
  { label: 'Woningzoekenden informeren', done: false },
]);

const alleDone = computed(() => stappen.value.every(s => s.done));
</script>

<template>
  <div class="max-w-xl mx-auto space-y-6">

    <!-- Back -->
    <button
      class="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition"
      @click="router.back()"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      Terug naar aanvraag
    </button>

    <div class="bg-white rounded-card shadow-card p-6">
      <div class="mb-1">
        <h1 class="text-2xl font-bold text-slate-900">Vervolgstappen</h1>
        <p v-if="pand" class="text-sm text-slate-500 mt-0.5">
          {{ pand.straat }} {{ pand.huisnummer }} · {{ pand.wijk }}
        </p>
      </div>

      <hr class="my-5 border-slate-100" />

      <ul class="space-y-3">
        <li
          v-for="(stap, i) in stappen"
          :key="i"
          class="flex items-center gap-4 p-4 rounded-xl border transition"
          :class="stap.done
            ? 'border-teal/30 bg-teal-soft/40'
            : 'border-slate-200 hover:border-slate-300'"
        >
          <button
            class="w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition"
            :class="stap.done
              ? 'bg-teal border-teal'
              : 'border-slate-300 hover:border-teal'"
            @click="stap.done = !stap.done"
          >
            <svg v-if="stap.done" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </button>
          <span
            class="text-sm font-medium transition"
            :class="stap.done ? 'line-through text-slate-400' : 'text-slate-800'"
          >
            {{ stap.label }}
          </span>
        </li>
      </ul>

      <Transition name="fade">
        <div v-if="alleDone" class="mt-5 flex items-center gap-3 bg-teal-soft/60 rounded-xl p-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-teal shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          <p class="text-sm font-semibold text-teal">Alle stappen zijn afgerond.</p>
        </div>
      </Transition>
    </div>

  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(6px);
}
</style>
