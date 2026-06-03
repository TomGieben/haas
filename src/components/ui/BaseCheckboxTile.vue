<script setup lang="ts">
import type { Component } from 'vue';
import IconCheck from '../icons/IconCheck.vue';

defineProps<{
  modelValue: boolean;
  label: string;
  icon?: Component;
}>();
defineEmits<{ (e: 'update:modelValue', v: boolean): void }>();
</script>

<template>
  <button
    type="button"
    class="flex items-center gap-2 px-3 py-3 rounded-lg border border-slate-200 bg-white hover:border-brand-orange transition w-full"
    :class="modelValue ? 'border-brand-orange bg-orange-50' : ''"
    @click="$emit('update:modelValue', !modelValue)"
  >
    <span
      class="w-5 h-5 rounded border-2 flex items-center justify-center"
      :class="modelValue ? 'border-brand-orange bg-brand-orange' : 'border-slate-300 bg-white'"
    >
      <IconCheck v-if="modelValue" :size="12" :stroke-width="3" class="text-white" />
    </span>
    <component :is="icon" v-if="icon" class="text-teal" />
    <span class="text-sm font-medium text-slate-800">{{ label }}</span>
  </button>
</template>
