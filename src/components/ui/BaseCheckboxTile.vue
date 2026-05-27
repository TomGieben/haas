<script setup lang="ts">
defineProps<{
  modelValue: boolean;
  label: string;
  icon?: string;
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
      <svg v-if="modelValue" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    </span>
    <span v-if="icon" class="text-teal" v-html="icon" />
    <span class="text-sm font-medium text-slate-800">{{ label }}</span>
  </button>
</template>
