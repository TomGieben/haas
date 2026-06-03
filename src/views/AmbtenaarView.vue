<script setup lang="ts">
import { useRouter } from 'vue-router';
import { panden } from '../data/panden';

const router = useRouter();
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
          @click="router.push(`/ambtenaar/${pand.id}`)"
        >
          <div class="flex items-center gap-4">
            <div class="w-9 h-9 rounded-full bg-navy/10 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-navy"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <div>
              <p class="text-sm font-semibold text-slate-800">{{ pand.straat }} {{ pand.huisnummer }}</p>
              <p class="text-xs text-slate-400">{{ pand.wijk }} · Arnhem</p>
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
  </div>
</template>
