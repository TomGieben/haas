import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', redirect: '/profiel' },
  { path: '/profiel', name: 'profiel', component: () => import('../views/ProfileView.vue') },
  { path: '/locaties', name: 'locaties', component: () => import('../views/LocationsView.vue') },
  { path: '/matches', name: 'matches', component: () => import('../views/MatchesView.vue') },
  { path: '/woongenoten', name: 'woongenoten', component: () => import('../views/HousematesView.vue') },
  { path: '/voortgang', name: 'voortgang', component: () => import('../views/ProgressView.vue') },
  { path: '/officer', redirect: '/officer/cases' },
  {
    path: '/officer/cases',
    name: 'officer-cases',
    component: () => import('../views/officer/CasesView.vue'),
  },
  {
    path: '/officer/overview',
    name: 'officer-overview',
    component: () => import('../views/officer/OverviewView.vue'),
  },
  {
    path: '/officer/cases/:id',
    name: 'officer-case-detail',
    component: () => import('../views/officer/CaseDetailView.vue'),
    props: true,
  },
  {
    path: '/officer/cases/:id/review',
    name: 'officer-case-review',
    component: () => import('../views/officer/CaseReviewView.vue'),
    props: true,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
