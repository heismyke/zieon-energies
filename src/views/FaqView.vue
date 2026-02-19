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

    <section class="z-20 relative mb-6 border border-white/10 rounded-2xl p-8 md:p-12 bg-[#101010]">
      <p class="text-[0.65rem] uppercase tracking-[0.2em] text-brand-400 mb-3">FAQ</p>
      <h1 class="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">Frequently Asked Questions</h1>
      <p class="mt-4 max-w-2xl text-sm text-neutral-400">
        Common answers about token vending, failed transactions, and meter support.
      </p>
    </section>

    <section class="z-20 relative space-y-4 mb-6">
      <div class="bg-[#161616] border border-white/5 rounded-xl p-6">
        <h2 class="text-base text-white font-heading">How fast are tokens delivered?</h2>
        <p class="mt-2 text-xs text-neutral-400">Most token purchases are delivered in a few seconds after successful payment.</p>
      </div>
      <div class="bg-[#161616] border border-white/5 rounded-xl p-6">
        <h2 class="text-base text-white font-heading">Which DisCos are supported?</h2>
        <p class="mt-2 text-xs text-neutral-400">Pulselink supports major Nigerian DisCos including AEDC, EKEDC, IKEDC, IBEDC, and more.</p>
      </div>
      <div class="bg-[#161616] border border-white/5 rounded-xl p-6">
        <h2 class="text-base text-white font-heading">What if a payment fails?</h2>
        <p class="mt-2 text-xs text-neutral-400">Failed payments are auto-reconciled. If needed, support can trace and resolve using transaction ID.</p>
      </div>
    </section>

    <Footer />
  </main>
</template>
