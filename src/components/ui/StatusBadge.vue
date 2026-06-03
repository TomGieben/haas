<script setup lang="ts">
import type { BadgeTone } from '../../domain/Enums';

defineProps<{ label: string; tone?: BadgeTone }>();
</script>

<template>
  <span class="status-badge" :class="`status-badge--${tone ?? 'slate'}`">
    {{ label }}
  </span>
</template>

<style lang="scss" scoped>
.status-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.7rem;
  border-radius: 9999px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  white-space: nowrap;

  &--blue {
    background: #dbeafe;
    color: #1d4ed8;
  }
  &--orange {
    background: #ffe7d4;
    color: #c2410c;
  }
  &--purple {
    background: #ede9fe;
    color: #6d28d9;
  }
  &--green {
    background: #dcfce7;
    color: #15803d;
  }
  &--red {
    background: #fee2e2;
    color: #b91c1c;
  }
  &--slate {
    background: #f1f5f9;
    color: #334155;
  }
}
</style>
