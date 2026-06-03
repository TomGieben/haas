<script setup lang="ts">
import StatusBadge from '../ui/StatusBadge.vue';
import { ReviewDecision } from '../../domain/Enums';
import type { ReviewItem } from '../../domain/ReviewItem';

defineProps<{ item: ReviewItem }>();
defineEmits<{
  (e: 'decide', id: string, decision: ReviewDecision): void;
}>();
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
      <div class="review-item-card__icon" v-html="item.icon" />
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
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        Afkeuren
      </button>
      <button
        type="button"
        class="review-btn review-btn--approve"
        @click="$emit('decide', item.id, ReviewDecision.Approved)"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        Goedkeuren
      </button>
    </div>
    <div v-else class="text-xs font-semibold flex items-center gap-1.5" :class="item.isApproved ? 'text-emerald-700' : 'text-red-700'">
      <svg v-if="item.isApproved" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      <svg v-else width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
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
