<script setup lang="ts">
import { onMounted } from "vue";
import Background from "../components/layout/Background.vue";
import Navigation from "../components/layout/Navigation.vue";
import Footer from "../components/layout/Footer.vue";

onMounted(() => {
  if (typeof window !== "undefined" && (window as any).lucide) {
    (window as any).lucide.createIcons();
  }
});
</script>

<template>
  <Background />
  <main
    class="xl:rounded-[2rem] xl:p-10 overflow-hidden flex flex-col xl:max-w-[90rem] xl:shadow-2xl z-10 bg-[#0F0F0F] w-full border-white/5 border rounded-none pt-6 pr-6 pb-6 pl-6 relative shadow-none"
  >
    <Navigation />

    <section class="z-20 relative mb-6 border border-white/10 rounded-2xl p-8 md:p-12 bg-gradient-to-b from-[#131313] to-[#0D0D0D]">
      <p class="text-[0.65rem] uppercase tracking-[0.2em] text-brand-400 mb-3">Merchant</p>
      <h1 class="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">Accept Power Payments At Scale</h1>
      <p class="mt-4 max-w-2xl text-sm text-neutral-400">
        Zelavra Merchant helps vendors, agents, and utility service points issue tokens with fast settlement and clear audit trails.
      </p>
    </section>

    <section class="z-20 relative grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div class="bg-[#161616] border border-white/5 rounded-xl p-6">
        <p class="text-[0.6rem] uppercase tracking-widest text-neutral-500">Settlement</p>
        <p class="mt-2 text-2xl text-white font-heading">T+0</p>
        <p class="text-xs text-neutral-400 mt-2">Same-day merchant settlement windows.</p>
      </div>
      <div class="bg-[#161616] border border-white/5 rounded-xl p-6">
        <p class="text-[0.6rem] uppercase tracking-widest text-neutral-500">Uptime</p>
        <p class="mt-2 text-2xl text-white font-heading">99.9%</p>
        <p class="text-xs text-neutral-400 mt-2">Built for high-volume token vending.</p>
      </div>
      <div class="bg-[#161616] border border-white/5 rounded-xl p-6">
        <p class="text-[0.6rem] uppercase tracking-widest text-neutral-500">Support</p>
        <p class="mt-2 text-2xl text-white font-heading">24/7</p>
        <p class="text-xs text-neutral-400 mt-2">Dedicated operations support channels.</p>
      </div>
    </section>

    <Footer />
  </main>
</template>
