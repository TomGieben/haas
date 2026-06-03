<script setup lang="ts">
import { ref, nextTick, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import NavTabs from './NavTabs.vue';
import IconSearch from '../icons/IconSearch.vue';
import IconClose from '../icons/IconClose.vue';
import IconBell from '../icons/IconBell.vue';

const route = useRoute();
const router = useRouter();

const homeLink = computed(() =>
  route.path.startsWith('/officer') ? '/officer/overview' : '/profiel',
);

const notificationsOpen = ref(false);
const searchOpen = ref(false);
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
      <router-link :to="homeLink" class="flex items-center gap-3 group">
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
              <IconSearch :size="14" class="text-white/60 shrink-0" />
              <input
                ref="searchInput"
                v-model="searchQuery"
                type="text"
                placeholder="Zoeken..."
                class="bg-transparent text-sm text-white placeholder-white/50 outline-none w-44"
                @keydown.escape="closeSearch"
              />
              <button @click="closeSearch" class="text-white/50 hover:text-white transition" aria-label="Sluiten">
                <IconClose :size="14" />
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
                  <IconSearch :size="14" class="mt-0.5 text-slate-400 shrink-0" />
                  <div>
                    <p class="text-sm font-medium">{{ page.label }}</p>
                    <p class="text-xs text-gray-400">{{ page.description }}</p>
                  </div>
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
          <IconSearch :size="16" />
        </button>

        <div class="relative">
          <button
            class="relative w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
            aria-label="Notificaties"
            @click="notificationsOpen = !notificationsOpen"
          >
            <IconBell :size="16" />
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

.search-enter-active,
.search-leave-active {
  transition: opacity 0.15s ease;
}
.search-enter-from,
.search-leave-to {
  opacity: 0;
}
</style>
