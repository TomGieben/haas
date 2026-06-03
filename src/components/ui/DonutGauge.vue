<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  percent: number;
  size?: number;
  stroke?: number;
  color?: string;
  trackColor?: string;
}>();

const dim = computed(() => props.size ?? 140);
const stroke = computed(() => props.stroke ?? 12);
const radius = computed(() => (dim.value - stroke.value) / 2);
const circumference = computed(() => 2 * Math.PI * radius.value);
const clamped = computed(() => Math.max(0, Math.min(100, props.percent)));
const offset = computed(() => circumference.value * (1 - clamped.value / 100));
</script>

<template>
  <div class="donut-gauge" :style="{ width: dim + 'px', height: dim + 'px' }">
    <svg :width="dim" :height="dim" :viewBox="`0 0 ${dim} ${dim}`">
      <circle
        :cx="dim / 2"
        :cy="dim / 2"
        :r="radius"
        :stroke="trackColor ?? '#e5e7eb'"
        :stroke-width="stroke"
        fill="none"
      />
      <circle
        :cx="dim / 2"
        :cy="dim / 2"
        :r="radius"
        :stroke="color ?? '#15803d'"
        :stroke-width="stroke"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="offset"
        stroke-linecap="round"
        fill="none"
        :transform="`rotate(-90 ${dim / 2} ${dim / 2})`"
      />
    </svg>
    <div class="donut-gauge__label">
      <slot>
        <div class="donut-gauge__percent">{{ clamped }}%</div>
      </slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.donut-gauge {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &__label {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  &__percent {
    font-size: 1.5rem;
    font-weight: 700;
    color: #0b2447;
  }
}
</style>
