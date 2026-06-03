<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  percent: number;
  color?: string;
  height?: string;
}>();

const clamped = computed(() => Math.max(0, Math.min(100, props.percent)));
</script>

<template>
  <div class="progress-bar" :style="{ height: height ?? '0.5rem' }">
    <div
      class="progress-bar__fill"
      :style="{ width: clamped + '%', background: color ?? '#f07c2c' }"
    />
  </div>
</template>

<style lang="scss" scoped>
.progress-bar {
  width: 100%;
  background: #e5e7eb;
  border-radius: 9999px;
  overflow: hidden;

  &__fill {
    height: 100%;
    border-radius: 9999px;
    transition: width 0.25s ease;
  }
}
</style>
