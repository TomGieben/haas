<script setup lang="ts">
defineProps<{
  initial: string;
  size?: 'sm' | 'md' | 'lg';
}>();
</script>

<template>
  <div
    class="bg-teal text-white flex items-center justify-center font-semibold rounded-xl select-none"
    :class="{
      'w-12 h-12 text-lg': (size ?? 'md') === 'md',
      'w-10 h-10 text-base rounded-lg': size === 'sm',
      'w-full h-full text-7xl rounded-xl': size === 'lg',
    }"
  >
    {{ initial }}
  </div>
</template>
