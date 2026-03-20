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

    <section class="z-20 relative mb-6 border border-white/10 rounded-2xl p-8 md:p-12 bg-[#101010] overflow-hidden">
      <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <p class="relative text-[0.65rem] uppercase tracking-[0.2em] text-brand-400 mb-3">Zelavra Blog</p>
      <h1 class="relative text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">Stories From The Grid</h1>
      <p class="relative mt-4 max-w-2xl text-sm text-neutral-400">
        Product updates, electricity tips, and operating guides for households, landlords, and teams.
      </p>
    </section>

    <section class="z-20 relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      <article class="group bg-[#161616] border border-white/5 hover:border-brand-500/30 rounded-xl p-6 transition-all duration-500">
        <p class="text-[0.6rem] uppercase tracking-widest text-brand-500 mb-3">Guide</p>
        <h2 class="text-lg text-white font-heading mb-2">How To Prevent Token Downtime</h2>
        <p class="text-xs text-neutral-400 leading-relaxed">Best practices for monitoring usage and topping up before outages.</p>
      </article>
      <article class="group bg-[#161616] border border-white/5 hover:border-brand-500/30 rounded-xl p-6 transition-all duration-500">
        <p class="text-[0.6rem] uppercase tracking-widest text-brand-500 mb-3">Release</p>
        <h2 class="text-lg text-white font-heading mb-2">Bulk Meter Dashboard Is Live</h2>
        <p class="text-xs text-neutral-400 leading-relaxed">Track multiple homes and properties from one Zelavra account.</p>
      </article>
      <article class="group bg-[#161616] border border-white/5 hover:border-brand-500/30 rounded-xl p-6 transition-all duration-500">
        <p class="text-[0.6rem] uppercase tracking-widest text-brand-500 mb-3">Policy</p>
        <h2 class="text-lg text-white font-heading mb-2">Understanding Tariff Bands</h2>
        <p class="text-xs text-neutral-400 leading-relaxed">A plain-language guide to DisCo billing bands and service windows.</p>
      </article>
    </section>

    <Footer />
  </main>
</template>
