<script setup lang="ts">
import { ref, nextTick } from 'vue';

interface ChatMessage {
  from: 'bot' | 'user';
  text: string;
}

const open = ref(false);
const input = ref('');
const messages = ref<ChatMessage[]>([
  { from: 'bot', text: 'Hoi! Ik ben HaaS. Hoe kan ik u helpen met uw woonaanvraag?' },
]);
const scrollRef = ref<HTMLElement | null>(null);

const cannedReplies = [
  'Goede vraag! Vul eerst uw profiel in zodat ik passende locaties kan tonen.',
  'U vindt uw matches onder het tabblad “Matches”. De percentages zijn gebaseerd op uw voorkeuren.',
  'In “Voortgang” ziet u live de status van uw aanvraag.',
  'Twijfelt u over een woongenoot? U kunt altijd “Overslaan” en later terugkomen.',
];

function toggle() {
  open.value = !open.value;
}

async function send() {
  const text = input.value.trim();
  if (!text) return;
  messages.value.push({ from: 'user', text });
  input.value = '';
  const reply = cannedReplies[Math.floor(Math.random() * cannedReplies.length)];
  setTimeout(() => {
    messages.value.push({ from: 'bot', text: reply });
    nextTick(() => {
      if (scrollRef.value) scrollRef.value.scrollTop = scrollRef.value.scrollHeight;
    });
  }, 500);
  await nextTick();
  if (scrollRef.value) scrollRef.value.scrollTop = scrollRef.value.scrollHeight;
}
</script>

<template>
  <div class="fixed bottom-6 right-6 z-50 flex items-end gap-3">
    <transition name="fade">
      <div v-if="!open" class="bg-slate-800 text-white text-sm rounded-xl px-4 py-2 shadow-card max-w-[220px]">
        Heeft u hulp nodig? Ik help u graag verder.
      </div>
    </transition>

    <transition name="scale">
      <div
        v-if="open"
        class="w-80 h-96 bg-white rounded-2xl shadow-card flex flex-col overflow-hidden border border-slate-200"
      >
        <div class="bg-navy text-white px-4 py-3 flex items-center gap-2">
          <img src="/rabbit.svg" class="w-7 h-7 bg-white rounded-lg p-0.5" alt="HaaS" />
          <div class="leading-tight">
            <div class="font-semibold text-sm">HaaS Assistent</div>
            <div class="text-xs text-white/70">Online</div>
          </div>
          <button class="ml-auto text-white/70 hover:text-white" @click="toggle" aria-label="Sluiten">✕</button>
        </div>
        <div ref="scrollRef" class="flex-1 overflow-y-auto p-3 space-y-2 bg-bg-page/40">
          <div
            v-for="(m, i) in messages"
            :key="i"
            class="flex"
            :class="m.from === 'user' ? 'justify-end' : 'justify-start'"
          >
            <div
              class="max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-snug"
              :class="m.from === 'user' ? 'bg-brand-orange text-white' : 'bg-teal-soft text-slate-800'"
            >
              {{ m.text }}
            </div>
          </div>
        </div>
        <form class="border-t border-slate-200 p-2 flex gap-2" @submit.prevent="send">
          <input
            v-model="input"
            type="text"
            placeholder="Typ uw vraag…"
            class="flex-1 px-3 py-2 text-sm rounded-lg border border-slate-200 focus:border-brand-orange focus:outline-none"
          />
          <button
            type="submit"
            class="px-3 py-2 bg-brand-orange hover:bg-brand-orange-dark text-white rounded-lg text-sm font-semibold"
          >
            Stuur
          </button>
        </form>
      </div>
    </transition>

    <button
      class="w-14 h-14 rounded-full bg-white shadow-card flex items-center justify-center hover:shadow-lg transition relative"
      @click="toggle"
      aria-label="Chatbot openen"
    >
      <img src="/rabbit.svg" class="w-9 h-9" alt="HaaS" />
    </button>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.scale-enter-active,
.scale-leave-active { transition: transform 0.2s, opacity 0.2s; transform-origin: bottom right; }
.scale-enter-from, .scale-leave-to { opacity: 0; transform: scale(0.9); }
</style>
