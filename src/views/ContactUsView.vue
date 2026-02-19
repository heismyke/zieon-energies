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
      <p class="text-[0.65rem] uppercase tracking-[0.2em] text-brand-400 mb-3">Contact Us</p>
      <h1 class="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">Talk To The Pulselink Team</h1>
      <p class="mt-4 max-w-2xl text-sm text-neutral-400">
        Reach support, partnerships, or technical operations.
      </p>
    </section>

    <section class="z-20 relative grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
      <div class="bg-[#161616] border border-white/5 rounded-xl p-6 space-y-3">
        <p class="text-[0.6rem] uppercase tracking-widest text-neutral-500">Channels</p>
        <p class="text-sm text-white">support@pulselink.com</p>
        <p class="text-sm text-white">+234 800 000 0000</p>
        <p class="text-sm text-white">Lagos, Nigeria</p>
      </div>
      <form class="bg-[#161616] border border-white/5 rounded-xl p-6 flex flex-col gap-3">
        <input type="text" placeholder="Name" class="w-full bg-black/30 border border-white/10 rounded-lg px-3 py-3 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-brand-500/50" />
        <input type="email" placeholder="Email" class="w-full bg-black/30 border border-white/10 rounded-lg px-3 py-3 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-brand-500/50" />
        <textarea placeholder="Message" rows="5" class="w-full bg-black/30 border border-white/10 rounded-lg px-3 py-3 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-brand-500/50"></textarea>
        <button type="button" class="mt-2 bg-white text-black text-xs font-bold uppercase tracking-widest py-3 rounded-lg hover:bg-brand-400 transition-colors">
          Send Message
        </button>
      </form>
    </section>

    <Footer />
  </main>
</template>
