<script setup lang="ts">
import { computed } from 'vue';
import StatusBadge from '../ui/StatusBadge.vue';
import IconCheck from '../icons/IconCheck.vue';
import IconClose from '../icons/IconClose.vue';
import { reviewCategoryIcons } from '../icons/reviewCategoryIcons';
import { ReviewDecision } from '../../domain/Enums';
import type { ReviewItem } from '../../domain/ReviewItem';

const props = defineProps<{ item: ReviewItem }>();
defineEmits<{
  (e: 'decide', id: string, decision: ReviewDecision): void;
}>();

const categoryIcon = computed(() => reviewCategoryIcons[props.item.category]);
</script>

<template>
  <div
    class="review-item-card"
    :class="{
      'is-approved': item.isApproved,
      'is-rejected': item.isRejected,
    }"
  >
    <div class="flex items-start gap-3 mb-3">
      <div class="review-item-card__icon">
        <component :is="categoryIcon" :size="18" />
      </div>
      <div class="flex-1 min-w-0">
        <div class="text-xs uppercase tracking-wide text-slate-500 font-semibold">
          {{ item.categoryLabel }}
        </div>
        <div class="text-sm font-semibold text-slate-900 mt-0.5">{{ item.value }}</div>
      </div>
    </div>

    <div class="mb-3">
      <StatusBadge :label="item.badgeLabel" tone="green" />
    </div>

    <p class="text-sm text-slate-600 mb-4 leading-relaxed">{{ item.description }}</p>

    <div v-if="!item.isDecided" class="flex gap-2">
      <button
        type="button"
        class="review-btn review-btn--reject"
        @click="$emit('decide', item.id, ReviewDecision.Rejected)"
      >
        <IconClose :size="14" :stroke-width="2.5" />
        Afkeuren
      </button>
      <button
        type="button"
        class="review-btn review-btn--approve"
        @click="$emit('decide', item.id, ReviewDecision.Approved)"
      >
        <IconCheck :size="14" :stroke-width="2.5" />
        Goedkeuren
      </button>
    </div>
    <div v-else class="text-xs font-semibold flex items-center gap-1.5" :class="item.isApproved ? 'text-emerald-700' : 'text-red-700'">
      <IconCheck v-if="item.isApproved" :size="14" :stroke-width="2.5" />
      <IconClose v-else :size="14" :stroke-width="2.5" />
      {{ item.isApproved ? 'Goedgekeurd' : 'Afgekeurd' }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.review-item-card {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: border-color 0.15s, background 0.15s;

  &.is-approved {
    border-color: #86efac;
    background: #f0fdf4;
  }
  &.is-rejected {
    border-color: #fca5a5;
    background: #fef2f2;
  }

  &__icon {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 0.6rem;
    background: #dceae8;
    color: #2f6b6b;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
}

.review-btn {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 0.75rem;
  border-radius: 0.6rem;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid;
  transition: background 0.15s;

  &--reject {
    border-color: #fecaca;
    color: #b91c1c;
    background: #fff;
    &:hover {
      background: #fef2f2;
    }
  }
  &--approve {
    border-color: transparent;
    background: #15803d;
    color: #fff;
    &:hover {
      background: #166534;
    }
  }
}
</style>
