<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'ghost' | 'outline';
  block?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit';
}>();
</script>

<template>
  <button
    :type="type ?? 'button'"
    :disabled="disabled"
    class="base-btn"
    :class="[
      `base-btn--${variant ?? 'primary'}`,
      block ? 'w-full' : '',
      disabled ? 'is-disabled' : '',
    ]"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.base-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.85rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 0.95rem;
  transition: background-color 0.15s, opacity 0.15s, box-shadow 0.15s;

  &--primary {
    background: #f07c2c;
    color: #fff;
    &:hover { background: #d96a1f; }
  }
  &--ghost {
    background: transparent;
    color: #0b2447;
    border: 1px solid #e5e7eb;
    &:hover { background: #f8fafc; }
  }
  &--outline {
    background: #fff;
    color: #0b2447;
    border: 1px solid #e5e7eb;
    &:hover { background: #f8fafc; }
  }
  &.is-disabled {
    opacity: 0.55;
    pointer-events: none;
  }
}
</style>
