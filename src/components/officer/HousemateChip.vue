<script setup lang="ts">
import Avatar from '../ui/Avatar.vue';
import type { Housemate } from '../../domain/Housemate';

defineProps<{ housemate: Housemate }>();
</script>

<template>
  <div class="flex items-center gap-3 p-3 rounded-xl border border-slate-200 bg-white">
    <Avatar :initial="housemate.initial" size="sm" />
    <div class="min-w-0">
      <div class="text-sm font-semibold text-slate-900 truncate">
        {{ housemate.nameWithAge }}
      </div>
      <div class="text-xs text-slate-500 truncate">{{ housemate.profession }}</div>
    </div>
  </div>
</template>
