import { defineStore } from 'pinia';
import { ref } from 'vue';

export type Role = 'woningzoekende' | 'ambtenaar';

export const useRoleStore = defineStore('role', () => {
  const role = ref<Role>('woningzoekende');

  function setRole(r: Role) {
    role.value = r;
  }

  return { role, setRole };
});