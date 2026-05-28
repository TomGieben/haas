<script setup lang="ts">
import { ref } from 'vue';
import NavTabs from './NavTabs.vue';

const notificationsOpen = ref(false);

const notification = {
  message: 'Aanvraag ingediend',
  timestamp: new Date(),
};

function formatDate(date: Date) {
  return date.toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' });
}

function formatTime(date: Date) {
  return date.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' });
}
</script>

<template>
  <header class="bg-navy text-white relative">
    <div class="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
      <router-link to="/profiel" class="flex items-center gap-3 group">
        <div class="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-soft">
          <img src="/rabbit.svg" alt="HaaS" class="w-8 h-8" />
        </div>
        <div class="leading-tight">
          <div class="flex items-center gap-2">
            <span class="font-bold text-lg tracking-tight">HaaS</span>
            <span class="text-[10px] font-bold uppercase tracking-wide bg-brand-orange text-white px-1.5 py-0.5 rounded">Beta</span>
          </div>
          <div class="text-xs text-white/70">Gemeente Arnhem</div>
        </div>
      </router-link>

      <NavTabs />

      <div class="flex items-center gap-3">
        <button class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition" aria-label="Zoeken">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>

        <div class="relative">
          <button
            class="relative w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
            aria-label="Notificaties"
            @click="notificationsOpen = !notificationsOpen"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
            <span class="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-orange rounded-full"></span>
          </button>

          <Transition name="dropdown">
            <div
              v-if="notificationsOpen"
              class="absolute right-0 top-12 w-72 bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden z-50"
            >
              <div class="px-4 py-3 border-b border-gray-100 text-xs font-semibold uppercase tracking-wide text-gray-400">
                Notificaties
              </div>
              <div class="px-4 py-3 flex items-start gap-3">
                <div class="mt-0.5 w-2 h-2 rounded-full bg-brand-orange shrink-0"></div>
                <div>
                  <p class="text-sm font-medium">{{ notification.message }}</p>
                  <p class="text-xs text-gray-400 mt-0.5">{{ formatDate(notification.timestamp) }} om {{ formatTime(notification.timestamp) }}</p>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>