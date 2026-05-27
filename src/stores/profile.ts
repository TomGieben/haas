import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { User } from '../domain/User';
import type { Budget, HouseholdSize, Lifestyle } from '../domain/Enums';

export const useProfileStore = defineStore('profile', () => {
  const user = ref<User>(new User());

  const isComplete = computed(() => user.value.isComplete);

  function setHouseholdSize(value: HouseholdSize | undefined) {
    user.value.householdSize = value;
  }
  function setBudget(value: Budget | undefined) {
    user.value.budget = value;
  }
  function setLifestyle(value: Lifestyle | undefined) {
    user.value.lifestyle = value;
  }
  function toggleChildren() {
    user.value.hasChildren = !user.value.hasChildren;
  }
  function togglePets() {
    user.value.hasPets = !user.value.hasPets;
  }
  function toggleWfh() {
    user.value.worksFromHome = !user.value.worksFromHome;
  }

  return {
    user,
    isComplete,
    setHouseholdSize,
    setBudget,
    setLifestyle,
    toggleChildren,
    togglePets,
    toggleWfh,
  };
});
