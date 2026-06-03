<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

interface Tab {
  to: string;
  label: string;
}

const applicantTabs: Tab[] = [
  { to: '/profiel', label: 'Profiel' },
  { to: '/locaties', label: 'Locaties' },
  { to: '/matches', label: 'Matches' },
  { to: '/woongenoten', label: 'Woongenoten' },
  { to: '/voortgang', label: 'Voortgang' },
];

const officerTabs: Tab[] = [
  { to: '/officer/cases', label: 'Lopende zaken' },
  { to: '/officer/overview', label: 'Overview' },
];

const route = useRoute();
const tabs = computed<Tab[]>(() =>
  route.path.startsWith('/officer') ? officerTabs : applicantTabs,
);
</script>

<template>
  <nav class="bg-navy-deep/60 rounded-full px-2 py-1.5 flex items-center gap-1">
    <router-link
      v-for="tab in tabs"
      :key="tab.to"
      :to="tab.to"
      class="nav-tab"
      active-class="nav-tab--active"
    >
      {{ tab.label }}
    </router-link>
  </nav>
</template>

<style lang="scss" scoped>
.nav-tab {
  padding: 0.45rem 1.1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  position: relative;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }

  &--active {
    background: #ffffff;
    color: #0b2447;

    &::after {
      content: '';
      position: absolute;
      left: 20%;
      right: 20%;
      bottom: -18px;
      height: 3px;
      background: #f07c2c;
      border-radius: 2px;
    }
  }
}
</style>
