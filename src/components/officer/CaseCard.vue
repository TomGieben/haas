<script setup lang="ts">
import { computed } from 'vue';
import Avatar from '../ui/Avatar.vue';
import StatusBadge from '../ui/StatusBadge.vue';
import IconMapPin from '../icons/IconMapPin.vue';
import IconUsers from '../icons/IconUsers.vue';
import IconCalendar from '../icons/IconCalendar.vue';
import IconChevronRight from '../icons/IconChevronRight.vue';
import { properties } from '../../data/properties';
import type { Case } from '../../domain/Case';

const props = defineProps<{ caseItem: Case }>();
defineEmits<{ (e: 'select', id: string): void }>();

const property = computed(() => properties.find((p) => p.id === props.caseItem.propertyId));
</script>

<template>
  <button
    type="button"
    class="case-card"
    @click="$emit('select', caseItem.id)"
  >
    <div class="flex items-start gap-3">
      <Avatar :initial="caseItem.applicantInitial" size="md" />
      <div class="flex-1 min-w-0">
        <div class="flex items-start justify-between gap-2">
          <div class="min-w-0">
            <h3 class="font-semibold text-slate-900 truncate">{{ caseItem.applicantName }}</h3>
            <p class="text-xs text-slate-500 truncate">
              {{ caseItem.applicantProfession }} · {{ caseItem.applicantAge }} jaar
            </p>
          </div>
          <StatusBadge :label="caseItem.statusLabel" :tone="caseItem.statusTone" />
        </div>
      </div>
    </div>

    <div class="mt-4 space-y-1.5 text-xs text-slate-600">
      <div class="flex items-center gap-2">
        <span class="text-slate-400">Zaaknr.</span>
        <span class="font-mono font-semibold text-slate-700">{{ caseItem.caseNumber }}</span>
      </div>
      <div v-if="property" class="flex items-center gap-2">
        <IconMapPin :size="13" class="text-teal shrink-0" />
        <span class="truncate">{{ property.address }}</span>
      </div>
      <div class="flex items-center gap-2">
        <IconUsers :size="13" class="text-teal shrink-0" />
        <span class="truncate">{{ caseItem.householdType }}</span>
      </div>
      <div class="flex items-center gap-2">
        <IconCalendar :size="13" class="text-teal shrink-0" />
        <span>Ingediend {{ caseItem.submittedLabel }}</span>
      </div>
    </div>

    <div class="mt-4 flex items-center justify-end text-xs font-semibold text-brand-orange">
      Bekijk zaak
      <IconChevronRight :size="14" class="ml-1" />
    </div>
  </button>
</template>

<style lang="scss" scoped>
.case-card {
  width: 100%;
  text-align: left;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  padding: 1.25rem;
  transition: border-color 0.15s, box-shadow 0.15s, transform 0.15s;

  &:hover {
    border-color: #cbd5e1;
    box-shadow: 0 4px 14px rgba(11, 36, 71, 0.08);
    transform: translateY(-1px);
  }
}
</style>
