<script setup lang="ts">
import { onMounted } from "vue";
import { RouterLink } from "vue-router";
import { gsap } from "../../../lib/gsap";

onMounted(() => {
  gsap.to(".reveal-scale", {
    scrollTrigger: {
      trigger: ".download-card",
      start: "top 85%",
    },
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: "power3.out"
  });
});
</script>

<template>
  <section class="py-24 bg-brand-50 px-6">
    <div class="max-w-5xl mx-auto download-card reveal-scale opacity-0 scale-[0.98]">
      <div class="bg-black rounded-[4rem] p-12 md:p-24 text-center text-white overflow-hidden relative">
        <p class="eyebrow text-brand-500 mb-8">GET THE APP</p>
        <h2 class="display-title mb-12">Control in your hands.</h2>
        <p class="copy-text text-white/70 mb-16 max-w-2xl mx-auto text-xl">
          We're currently in private beta. Join the waitlist to get early access to Zenerlink and be part of our pilot program.
        </p>
        
        <div class="flex flex-col md:flex-row justify-center gap-6 mb-16">
          <RouterLink class="bg-brand-500 text-white px-12 py-6 rounded-2xl font-bold text-lg hover:bg-brand-600 transition-all hover:scale-105 shadow-2xl" to="/contact">
            Join the Waitlist
          </RouterLink>
        </div>

        <div class="flex flex-wrap justify-center gap-8 opacity-40 grayscale pointer-events-none">
          <div class="flex items-center gap-4 bg-white/10 px-8 py-4 rounded-xl border border-white/10">
            <div class="w-2 h-2 bg-white rounded-full"></div>
            <div class="text-left">
              <p class="text-[10px] uppercase font-mono tracking-wider opacity-60">Coming Soon to</p>
              <p class="font-bold text-sm">App Store</p>
            </div>
          </div>
          <div class="flex items-center gap-4 bg-white/10 px-8 py-4 rounded-xl border border-white/10">
            <div class="w-2 h-2 bg-white rounded-full"></div>
            <div class="text-left">
              <p class="text-[10px] uppercase font-mono tracking-wider opacity-60">Coming Soon to</p>
              <p class="font-bold text-sm">Google Play</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
