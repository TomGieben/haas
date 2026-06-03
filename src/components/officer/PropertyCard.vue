<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import L from 'leaflet';
import SectionCard from '../ui/SectionCard.vue';
import TagChip from '../ui/TagChip.vue';
import IconHome from '../icons/IconHome.vue';
import type { Property } from '../../domain/Property';

const props = defineProps<{ property: Property }>();

const mapEl = ref<HTMLElement | null>(null);
let map: L.Map | null = null;

function buildMarker(): L.DivIcon {
  return L.divIcon({
    className: 'haas-marker',
    html: `
      <div class="haas-marker__wrap">
        <svg viewBox="0 0 24 32" width="28" height="36" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 20 12 20s12-11 12-20c0-6.6-5.4-12-12-12z" fill="#f07c2c"/>
          <circle cx="12" cy="12" r="4.5" fill="#fff"/>
        </svg>
      </div>
    `,
    iconSize: [28, 36],
    iconAnchor: [14, 36],
  });
}

onMounted(() => {
  if (!mapEl.value) return;
  map = L.map(mapEl.value, { zoomControl: false, attributionControl: false, dragging: false, scrollWheelZoom: false }).setView(props.property.coords, 15);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);
  L.marker(props.property.coords, { icon: buildMarker() }).addTo(map);
});

onBeforeUnmount(() => {
  map?.remove();
  map = null;
});
</script>

<template>
  <SectionCard title="Pand" :icon="IconHome">
    <div ref="mapEl" class="w-full h-44 rounded-xl overflow-hidden border border-slate-200 mb-4" />
    <div class="text-sm font-semibold text-slate-900">{{ property.address }}</div>
    <div class="text-xs text-slate-500 mb-4">{{ property.district }}</div>

    <dl class="grid grid-cols-2 gap-y-3 gap-x-4 text-sm mb-4">
      <div>
        <dt class="text-xs text-slate-500">Type</dt>
        <dd class="font-semibold text-slate-800">{{ property.type }}</dd>
      </div>
      <div>
        <dt class="text-xs text-slate-500">Oppervlak</dt>
        <dd class="font-semibold text-slate-800">{{ property.areaLabel }}</dd>
      </div>
      <div>
        <dt class="text-xs text-slate-500">Huurprijs</dt>
        <dd class="font-semibold text-slate-800">{{ property.rentLabel }}</dd>
      </div>
      <div>
        <dt class="text-xs text-slate-500">Beschikbaar</dt>
        <dd class="font-semibold text-slate-800">{{ property.availableFrom }}</dd>
      </div>
    </dl>

    <div class="flex flex-wrap gap-1.5">
      <TagChip v-for="tag in property.tags" :key="tag">{{ tag }}</TagChip>
    </div>
  </SectionCard>
</template>
