<script setup lang="ts">
import AppHeader from '../components/layout/AppHeader.vue';
import AppFooter from '../components/layout/AppFooter.vue';
import ChatbotWidget from '../components/layout/ChatbotWidget.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-1 w-full max-w-6xl mx-auto px-4 py-10">
      <slot />
    </main>
    <AppFooter />
    <ChatbotWidget />
  </div>
</template>
