import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { locations } from '../data/locations';
import type { Location } from '../domain/Location';

export const useLocationsStore = defineStore('locations', () => {
  const all = ref<Location[]>(locations);
  const selectedId = ref<string | null>(null);

  const selected = computed(() => all.value.find((l) => l.id === selectedId.value) ?? null);

  function select(id: string) {
    selectedId.value = id;
  }

  return { all, selectedId, selected, select };
});
