<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import L from 'leaflet';

const props = defineProps<{
  coords: [number, number];
  label: string;
}>();

const mapEl = ref<HTMLElement | null>(null);
let map: L.Map | null = null;

onMounted(() => {
  if (!mapEl.value) return;
  map = L.map(mapEl.value, { zoomControl: true, attributionControl: true }).setView(props.coords, 15);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>-bijdragers',
    maxZoom: 19,
  }).addTo(map);

  const icon = L.divIcon({
    className: 'haas-marker',
    html: `
      <div class="haas-marker__wrap is-selected">
        <div class="haas-marker__label">${props.label}</div>
        <svg viewBox="0 0 24 32" width="28" height="36" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 20 12 20s12-11 12-20c0-6.6-5.4-12-12-12z" fill="#f07c2c"/>
          <circle cx="12" cy="12" r="4.5" fill="#fff"/>
        </svg>
      </div>
    `,
    iconSize: [28, 36],
    iconAnchor: [14, 36],
  });

  L.marker(props.coords, { icon }).addTo(map);
});

onBeforeUnmount(() => {
  map?.remove();
  map = null;
});
</script>

<template>
  <div ref="mapEl" class="w-full h-[300px] rounded-2xl overflow-hidden border border-slate-200" />
</template>

<style lang="scss">
.haas-marker {
  background: transparent !important;
  border: none !important;
}
.haas-marker__wrap {
  position: relative;
  transform: translate(-50%, -100%);
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}
.haas-marker__label {
  position: absolute;
  bottom: 100%;
  margin-bottom: 4px;
  white-space: nowrap;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 2px 8px;
  font-size: 11px;
  font-weight: 600;
  color: #0b2447;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}
</style>
