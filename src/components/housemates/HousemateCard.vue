<script setup lang="ts">
import type { Housemate } from '../../domain/Housemate';
import MatchBadge from '../ui/MatchBadge.vue';
import TagChip from '../ui/TagChip.vue';
import BaseButton from '../ui/BaseButton.vue';
import IconBriefcase from '../icons/IconBriefcase.vue';
import IconClose from '../icons/IconClose.vue';
import IconHeart from '../icons/IconHeart.vue';

defineProps<{ housemate: Housemate }>();
defineEmits<{ (e: 'skip'): void; (e: 'like'): void }>();
</script>

<template>
  <div class="bg-white rounded-2xl overflow-hidden shadow-card border border-slate-100">
    <div class="relative h-56 bg-teal flex items-center justify-center">
      <span class="text-white text-7xl font-semibold">{{ housemate.initial }}</span>
      <div class="absolute top-3 right-3">
        <MatchBadge :percent="housemate.matchPercent" />
      </div>
    </div>
    <div class="p-5 space-y-4">
      <div>
        <h2 class="text-lg font-bold text-slate-900">{{ housemate.nameWithAge }}</h2>
        <p class="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
          <IconBriefcase :size="14" class="text-teal" />
          {{ housemate.profession }}
        </p>
      </div>

      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in housemate.tags"
          :key="tag"
          class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-teal-soft text-teal-dark text-xs font-medium"
        >
          {{ tag }}
        </span>
      </div>

      <p class="text-sm text-slate-700 leading-relaxed">{{ housemate.bio }}</p>

      <div>
        <p class="text-xs font-semibold text-slate-500 mb-1">Interesses</p>
        <div class="flex flex-wrap gap-1.5">
          <TagChip v-for="i in housemate.interests" :key="i">{{ i }}</TagChip>
        </div>
      </div>

      <div class="border-l-4 border-brand-orange bg-orange-50/40 rounded-r-lg px-3 py-2">
        <p class="text-xs font-semibold text-slate-700">Zoekt</p>
        <p class="text-sm text-slate-700">{{ housemate.seeking }}</p>
      </div>

      <div class="grid grid-cols-2 gap-3 pt-2">
        <BaseButton variant="outline" @click="$emit('skip')">
          <IconClose :size="16" :stroke-width="2.5" />
          Overslaan
        </BaseButton>
        <BaseButton @click="$emit('like')">
          <IconHeart :size="16" :stroke-width="2.5" />
          Interesse
        </BaseButton>
      </div>
    </div>
  </div>
</template>
