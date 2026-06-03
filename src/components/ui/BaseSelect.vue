<script setup lang="ts" generic="T extends string">
import type { Component } from 'vue';

defineProps<{
  modelValue: T | undefined;
  options: { value: T; label: string }[];
  placeholder?: string;
  label?: string;
  icon?: Component;
}>();
defineEmits<{ (e: 'update:modelValue', v: T | undefined): void }>();
</script>

<template>
  <label class="block">
    <span v-if="label" class="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
      <component :is="icon" v-if="icon" class="text-navy" />
      {{ label }}
    </span>
    <select
      :value="modelValue"
      class="w-full px-4 py-3 rounded-full border border-slate-200 bg-white text-sm text-slate-800 focus:border-brand-orange focus:ring-0 focus:outline-none appearance-none"
      @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value as T)"
    >
      <option value="" disabled :selected="!modelValue">{{ placeholder ?? 'Selecteer…' }}</option>
      <option v-for="opt in options" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
    </select>
  </label>
</template>
