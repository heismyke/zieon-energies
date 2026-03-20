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
      <p class="relative text-[0.65rem] uppercase tracking-[0.2em] text-brand-400 mb-3">Discover Our Services</p>
      <h1 class="relative text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">Everything Energy. Everything Payments. One App.</h1>
      <p class="relative mt-4 max-w-3xl text-sm text-neutral-400">
        Zelavra is built around three core services that work seamlessly together — giving every Nigerian complete control over their power, their units, and their money.
      </p>
    </section>

    <section class="z-20 relative grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
      <article class="group bg-[#161616] border border-white/5 hover:border-brand-500/30 rounded-xl p-6 transition-all duration-500">
        <p class="text-[0.6rem] uppercase tracking-widest text-brand-500 mb-3">Zelavra Core</p>
        <h2 class="text-lg text-white font-heading mb-2">Electricity That Just Works</h2>
        <p class="text-xs text-neutral-400 leading-relaxed">
          Buy electricity from all 12 Nigerian DISCOs, receive your token, and have it automatically transmitted directly to your meter. Monitor live kWh balance, get low-credit alerts, and track consumption history in one place.
        </p>
      </article>
      <article class="group bg-[#161616] border border-white/5 hover:border-brand-500/30 rounded-xl p-6 transition-all duration-500">
        <p class="text-[0.6rem] uppercase tracking-widest text-brand-500 mb-3">Zelavra Share</p>
        <h2 class="text-lg text-white font-heading mb-2">Split Units Across Meters</h2>
        <p class="text-xs text-neutral-400 leading-relaxed">
          See exactly how many kilowatt-hours you have purchased and distribute your units across multiple meters — your home, shop, rentals, or family. Set per-meter limits and monitor usage across every connected meter.
        </p>
      </article>
      <article class="group bg-[#161616] border border-white/5 hover:border-brand-500/30 rounded-xl p-6 transition-all duration-500">
        <p class="text-[0.6rem] uppercase tracking-widest text-brand-500 mb-3">Zelavra Pay</p>
        <h2 class="text-lg text-white font-heading mb-2">Wallet Built For Power</h2>
        <p class="text-xs text-neutral-400 leading-relaxed">
          A full-featured payment wallet inside your energy app. Send and receive money, pay bills, buy airtime and data, generate payment links, and manage all financial transactions in one place.
        </p>
      </article>
    </section>

    <section class="z-20 relative border border-white/10 rounded-2xl p-8 md:p-10 bg-[#101010] mb-6">
      <p class="text-[0.65rem] uppercase tracking-[0.2em] text-brand-400 mb-3">Our Mission</p>
      <h2 class="text-2xl md:text-3xl font-heading font-semibold text-white tracking-tight">We don't wait for power. We bring it.</h2>
      <p class="mt-3 max-w-3xl text-sm text-neutral-400">
        Zelavra closes the gap between energy distribution and daily payments, removing the fragmented steps Nigerians face when buying and receiving electricity.
      </p>
      <div class="mt-6 inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand-500 text-black text-xs font-bold uppercase tracking-widest shadow-[0_12px_28px_rgba(200,130,58,0.22)]">
        Get The App
      </div>
    </section>

    <Footer />
  </main>
</template>
