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
      <p class="text-[0.65rem] uppercase tracking-[0.2em] text-brand-400 mb-3">Platform</p>
      <h1 class="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">An Integrated Energy + Payments Stack</h1>
      <p class="mt-4 max-w-3xl text-sm text-neutral-400">
        Zelavra sits at the intersection of energy, fintech, and connectivity, unifying token purchase, smart metering, and digital payments into one secure platform.
      </p>
    </section>

    <section class="z-20 relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div class="bg-[#161616] border border-white/5 rounded-xl p-6">
        <p class="text-[0.6rem] uppercase tracking-widest text-brand-500 mb-3">Distribution</p>
        <h2 class="text-lg text-white font-heading mb-2">DISCO Coverage</h2>
        <p class="text-xs text-neutral-400 leading-relaxed">Connect to all 12 Nigerian DISCOs with a unified purchase and reconciliation flow.</p>
      </div>
      <div class="bg-[#161616] border border-white/5 rounded-xl p-6">
        <p class="text-[0.6rem] uppercase tracking-widest text-brand-500 mb-3">Smart Metering</p>
        <h2 class="text-lg text-white font-heading mb-2">Live kWh Tracking</h2>
        <p class="text-xs text-neutral-400 leading-relaxed">Real-time balance, low-credit alerts, and automated token transmission to meters.</p>
      </div>
      <div class="bg-[#161616] border border-white/5 rounded-xl p-6">
        <p class="text-[0.6rem] uppercase tracking-widest text-brand-500 mb-3">Payments</p>
        <h2 class="text-lg text-white font-heading mb-2">Wallet & Bills</h2>
        <p class="text-xs text-neutral-400 leading-relaxed">Pay bills, buy airtime/data, and move money without switching apps.</p>
      </div>
      <div class="bg-[#161616] border border-white/5 rounded-xl p-6">
        <p class="text-[0.6rem] uppercase tracking-widest text-brand-500 mb-3">Connectivity</p>
        <h2 class="text-lg text-white font-heading mb-2">Always Online</h2>
        <p class="text-xs text-neutral-400 leading-relaxed">Reliable device and meter connectivity for uninterrupted updates and alerts.</p>
      </div>
    </section>

    <section class="z-20 relative border border-white/10 rounded-2xl p-8 md:p-10 bg-[#101010] mb-6">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p class="text-[0.65rem] uppercase tracking-[0.2em] text-brand-400 mb-3">Other Products</p>
          <h2 class="text-2xl md:text-3xl font-heading font-semibold text-white tracking-tight">Built for Homes, Businesses, and Communities</h2>
        </div>
        <p class="text-sm text-neutral-400 max-w-2xl">
          Zelavra supports diverse customer needs across Nigeria — from single households to estates, agents, and business operations.
        </p>
      </div>
      <div class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="bg-[#161616] border border-white/5 rounded-xl p-6">
          <h3 class="text-white font-heading text-lg mb-2">Zelavra Business</h3>
          <p class="text-xs text-neutral-400 leading-relaxed">Centralize meters, approvals, and expense controls for SMEs, estates, and facilities.</p>
        </div>
        <div class="bg-[#161616] border border-white/5 rounded-xl p-6">
          <h3 class="text-white font-heading text-lg mb-2">Zelavra Connect</h3>
          <p class="text-xs text-neutral-400 leading-relaxed">Secure device connectivity for smart meters and remote monitoring at scale.</p>
        </div>
        <div class="bg-[#161616] border border-white/5 rounded-xl p-6">
          <h3 class="text-white font-heading text-lg mb-2">Zelavra Insight</h3>
          <p class="text-xs text-neutral-400 leading-relaxed">Analytics dashboards for usage trends, outage patterns, and payment behavior.</p>
        </div>
      </div>
    </section>

    <Footer />
  </main>
</template>
