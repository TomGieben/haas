<script setup lang="ts">
import { ref, nextTick, computed } from 'vue';
import { useRouter } from 'vue-router';
import NavTabs from './NavTabs.vue';
import { useRoleStore } from '../../stores/role';
import type { Role } from '../../stores/role';

const roleStore = useRoleStore();

const router = useRouter();

const notificationsOpen = ref(false);
const roleMenuOpen = ref(false);
const searchOpen = ref(false);

const roles: { value: Role; label: string }[] = [
  { value: 'woningzoekende', label: 'Woningzoekende' },
  { value: 'ambtenaar', label: 'Ambtenaar' },
];

function switchRole(r: Role) {
  roleStore.setRole(r);
  roleMenuOpen.value = false;
  router.push(r === 'ambtenaar' ? '/ambtenaar' : '/profiel');
}
const searchInput = ref<HTMLInputElement | null>(null);
const searchQuery = ref('');

const pages = [
  { label: 'Profiel', description: 'Jouw profiel en voorkeuren', route: '/profiel', keywords: 'profiel naam leeftijd' },
  { label: 'Locaties', description: 'Wijken en beschikbare woningen', route: '/locaties', keywords: 'locatie wijk woning arnhem kaart' },
  { label: 'Matches', description: 'Gevonden matches op basis van je profiel', route: '/matches', keywords: 'matches personen buurt' },
  { label: 'Woongenoten', description: 'Swipe door mogelijke woongenoten', route: '/woongenoten', keywords: 'woongenoten swipe mensen' },
  { label: 'Voortgang', description: 'Status van je aanvraag', route: '/voortgang', keywords: 'voortgang aanvraag status stappen' },
];

const results = computed(() => {
  const q = searchQuery.value.trim().toLowerCase();
  if (!q) return [];
  return pages.filter(p =>
    `${p.label} ${p.description} ${p.keywords}`.toLowerCase().includes(q)
  );
});

async function openSearch() {
  searchOpen.value = true;
  await nextTick();
  searchInput.value?.focus();
}

function closeSearch() {
  searchOpen.value = false;
  searchQuery.value = '';
}

function navigate(route: string) {
  router.push(route);
  closeSearch();
}

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
        <Transition name="search">
          <div v-if="searchOpen" class="relative">
            <div class="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white/60 shrink-0"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <input
                ref="searchInput"
                v-model="searchQuery"
                type="text"
                placeholder="Zoeken..."
                class="bg-transparent text-sm text-white placeholder-white/50 outline-none w-44"
                @keydown.esc="closeSearch"
              />
              <button @click="closeSearch" class="text-white/50 hover:text-white transition" aria-label="Sluiten">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>

            <Transition name="dropdown">
              <div
                v-if="results.length"
                class="absolute right-0 top-12 w-72 bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden z-50"
              >
                <button
                  v-for="page in results"
                  :key="page.route"
                  class="w-full px-4 py-3 flex items-start gap-3 hover:bg-slate-50 transition text-left"
                  @click="navigate(page.route)"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mt-0.5 text-slate-400 shrink-0"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                  <span class="flex flex-col text-left">
                    <span class="text-sm font-medium">{{ page.label }}</span>
                    <span class="text-xs text-gray-400">{{ page.description }}</span>
                  </span>
                </button>
              </div>
            </Transition>
          </div>
        </Transition>

        <button
          v-if="!searchOpen"
          class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
          aria-label="Zoeken"
          @click="openSearch"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>

        <div class="relative">
          <button
            class="relative flex items-center gap-1.5 h-9 rounded-full bg-white/10 hover:bg-white/20 px-3 transition"
            :aria-label="`Rol: ${roleStore.role}`"
            @click="roleMenuOpen = !roleMenuOpen"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <span class="text-xs font-semibold hidden sm:inline">
              {{ roleStore.role === 'ambtenaar' ? 'Ambtenaar' : 'Woningzoekende' }}
            </span>
          </button>

          <Transition name="dropdown">
            <div
              v-if="roleMenuOpen"
              class="absolute right-0 top-12 w-52 bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden z-50"
            >
              <div class="px-4 py-3 border-b border-gray-100 text-xs font-semibold uppercase tracking-wide text-gray-400">
                Wissel van rol
              </div>
              <button
                v-for="r in roles"
                :key="r.value"
                class="w-full px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition text-left"
                :class="{ 'opacity-40 pointer-events-none': roleStore.role === r.value }"
                @click="switchRole(r.value)"
              >
                <span
                  class="w-2 h-2 rounded-full shrink-0"
                  :class="roleStore.role === r.value ? 'bg-brand-orange' : 'bg-slate-200'"
                ></span>
                <span class="text-sm font-medium">{{ r.label }}</span>
                <svg v-if="roleStore.role === r.value" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="ml-auto text-brand-orange"><polyline points="20 6 9 17 4 12"/></svg>
              </button>
            </div>
          </Transition>
        </div>

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

<style>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.search-enter-active,
.search-leave-active {
  transition: opacity 0.15s ease;
}
.search-enter-from,
.search-leave-to {
  opacity: 0;
}
</style>
