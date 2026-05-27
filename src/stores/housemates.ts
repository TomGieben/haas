import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { housemates } from '../data/housemates';

export const useHousematesStore = defineStore('housemates', () => {
  const deck = ref(housemates);
  const currentIndex = ref(0);
  const liked = ref<string[]>([]);
  const skipped = ref<string[]>([]);

  const current = computed(() => deck.value[currentIndex.value] ?? null);
  const total = computed(() => deck.value.length);
  const isDone = computed(() => currentIndex.value >= deck.value.length);
  const progressLabel = computed(() =>
    isDone.value
      ? `${total.value} van ${total.value}`
      : `${currentIndex.value + 1} van ${total.value}`,
  );
  const progressPercent = computed(() =>
    total.value === 0 ? 0 : Math.round((currentIndex.value / total.value) * 100),
  );

  function like() {
    if (!current.value) return;
    liked.value.push(current.value.id);
    currentIndex.value += 1;
  }
  function skip() {
    if (!current.value) return;
    skipped.value.push(current.value.id);
    currentIndex.value += 1;
  }
  function reset() {
    currentIndex.value = 0;
    liked.value = [];
    skipped.value = [];
  }

  return {
    deck,
    currentIndex,
    liked,
    skipped,
    current,
    total,
    isDone,
    progressLabel,
    progressPercent,
    like,
    skip,
    reset,
  };
});
