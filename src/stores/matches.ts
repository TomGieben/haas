import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { matches as raw } from '../data/matches';
import { MatchingService } from '../services/MatchingService';
import { useProfileStore } from './profile';
import type { Match } from '../domain/Match';

export const useMatchesStore = defineStore('matches', () => {
  const selectedId = ref<string | null>('klarendal-appartement');

  const ranked = computed<Match[]>(() => {
    const profile = useProfileStore();
    return MatchingService.rankMatches(profile.user, raw);
  });

  function select(id: string) {
    selectedId.value = id;
  }

  return { ranked, selectedId, select };
});
