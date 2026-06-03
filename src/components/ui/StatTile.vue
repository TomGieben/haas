<script setup lang="ts">
import type { BadgeTone } from '../../domain/Enums';

defineProps<{
  label: string;
  count: number;
  icon?: string;
  tone?: BadgeTone;
}>();
</script>

<template>
  <div class="stat-tile" :class="`stat-tile--${tone ?? 'slate'}`">
    <div class="stat-tile__icon" v-if="icon" v-html="icon" />
    <div class="stat-tile__body">
      <div class="stat-tile__count">{{ count }}</div>
      <div class="stat-tile__label">{{ label }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.stat-tile {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 1rem 1.25rem;
  border-radius: 1rem;
  background: #fff;
  border: 1px solid #e5e7eb;
  flex: 1;
  min-width: 0;

  &__icon {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  &__count {
    font-size: 1.5rem;
    font-weight: 700;
    color: #0b2447;
    line-height: 1;
  }
  &__label {
    font-size: 0.8rem;
    color: #64748b;
    margin-top: 0.2rem;
  }

  &--blue .stat-tile__icon {
    background: #dbeafe;
    color: #1d4ed8;
  }
  &--orange .stat-tile__icon {
    background: #ffe7d4;
    color: #c2410c;
  }
  &--purple .stat-tile__icon {
    background: #ede9fe;
    color: #6d28d9;
  }
  &--green .stat-tile__icon {
    background: #dcfce7;
    color: #15803d;
  }
  &--red .stat-tile__icon {
    background: #fee2e2;
    color: #b91c1c;
  }
  &--slate .stat-tile__icon {
    background: #f1f5f9;
    color: #334155;
  }
}
</style>
