import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', redirect: '/profiel' },
  { path: '/profiel', name: 'profiel', component: () => import('../views/ProfileView.vue') },
  { path: '/locaties', name: 'locaties', component: () => import('../views/LocationsView.vue') },
  { path: '/matches', name: 'matches', component: () => import('../views/MatchesView.vue') },
  { path: '/woongenoten', name: 'woongenoten', component: () => import('../views/HousematesView.vue') },
  { path: '/voortgang', name: 'voortgang', component: () => import('../views/ProgressView.vue') },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
