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
      <p class="text-[0.65rem] uppercase tracking-[0.2em] text-brand-400 mb-3">Company</p>
      <h1 class="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">About Zelavra</h1>
      <p class="mt-4 max-w-3xl text-sm text-neutral-400">
        Zelavra is a Nigerian energy-tech and fintech company focused on building an integrated platform that connects electricity distribution, smart metering, and digital payments.
      </p>
    </section>

    <section class="z-20 relative grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
      <div class="bg-[#161616] border border-white/5 rounded-xl p-6 lg:col-span-2">
        <p class="text-[0.6rem] uppercase tracking-widest text-brand-500 mb-3">Why We Exist</p>
        <h2 class="text-2xl font-heading font-semibold text-white mb-2">We don't wait for power. We bring it.</h2>
        <p class="text-sm text-neutral-400 leading-relaxed">
          We address the fragmented experience millions of Nigerians face when buying and receiving electricity — from token purchase to meter transmission to tracking daily usage.
        </p>
      </div>
      <div class="bg-[#161616] border border-white/5 rounded-xl p-6">
        <p class="text-[0.6rem] uppercase tracking-widest text-brand-500 mb-3">Our Promise</p>
        <p class="text-sm text-neutral-400 leading-relaxed">
          Simple, transparent energy and payments for every household, business, and community we serve.
        </p>
      </div>
    </section>

    <section class="z-20 relative border border-white/10 rounded-2xl p-8 md:p-10 bg-[#101010] mb-6">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p class="text-[0.65rem] uppercase tracking-[0.2em] text-brand-400 mb-3">Values</p>
          <h2 class="text-2xl md:text-3xl font-heading font-semibold text-white tracking-tight">Built With Diversity at the Core</h2>
        </div>
        <p class="text-sm text-neutral-400 max-w-2xl">
          Zelavra is powered by diverse teams across Nigeria and the diaspora, bringing regional insights into a single, unified product experience.
        </p>
      </div>
      <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-[#161616] border border-white/5 rounded-xl p-6">
          <h3 class="text-white font-heading text-lg mb-2">Customer First</h3>
          <p class="text-xs text-neutral-400 leading-relaxed">We design for real households, real cashflows, and real usage patterns.</p>
        </div>
        <div class="bg-[#161616] border border-white/5 rounded-xl p-6">
          <h3 class="text-white font-heading text-lg mb-2">Reliability</h3>
          <p class="text-xs text-neutral-400 leading-relaxed">Energy and payments are critical — our platform is built to be dependable.</p>
        </div>
        <div class="bg-[#161616] border border-white/5 rounded-xl p-6">
          <h3 class="text-white font-heading text-lg mb-2">Transparency</h3>
          <p class="text-xs text-neutral-400 leading-relaxed">Clear pricing, clear consumption data, and clear transaction history.</p>
        </div>
      </div>
    </section>

    <section class="z-20 relative grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div class="bg-[#161616] border border-white/5 rounded-xl p-6">
        <p class="text-[0.6rem] uppercase tracking-widest text-brand-500 mb-3">Footprint</p>
        <h3 class="text-white font-heading text-lg mb-2">Nationwide Coverage</h3>
        <p class="text-xs text-neutral-400 leading-relaxed">Serving customers across all Nigerian DISCO regions.</p>
      </div>
      <div class="bg-[#161616] border border-white/5 rounded-xl p-6">
        <p class="text-[0.6rem] uppercase tracking-widest text-brand-500 mb-3">Impact</p>
        <h3 class="text-white font-heading text-lg mb-2">Millions of Units Tracked</h3>
        <p class="text-xs text-neutral-400 leading-relaxed">Helping households monitor and optimize electricity usage daily.</p>
      </div>
      <div class="bg-[#161616] border border-white/5 rounded-xl p-6">
        <p class="text-[0.6rem] uppercase tracking-widest text-brand-500 mb-3">Community</p>
        <h3 class="text-white font-heading text-lg mb-2">Agents + Partners</h3>
        <p class="text-xs text-neutral-400 leading-relaxed">A growing network of agents and partners enabling faster access.</p>
      </div>
    </section>

    <Footer />
  </main>
</template>
