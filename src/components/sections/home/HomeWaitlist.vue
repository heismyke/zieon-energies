<script setup lang="ts">
import { onMounted } from "vue";
import { RouterLink } from "vue-router";
import { gsap } from "../../../lib/gsap";

onMounted(() => {
  gsap.to(".reveal-scale", {
    scrollTrigger: {
      trigger: ".waitlist-card",
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
    <div class="max-w-5xl mx-auto waitlist-card reveal-scale opacity-0 scale-[0.98]">
      <div class="bg-black rounded-[4rem] p-12 md:p-24 text-center text-white overflow-hidden relative">
        <!-- Decorative background -->
        <div class="absolute inset-0 bg-brand-gradient opacity-10 blur-3xl -z-10"></div>
        
        <p class="eyebrow text-brand-500 mb-8">JOIN THE FUTURE</p>
        <h2 class="display-title mb-12">The grid of the future starts with you.</h2>
        <p class="copy-text text-white/70 mb-16 max-w-2xl mx-auto text-xl">
          Join over 5,000+ early adopters waiting to take control of their power. Be the first to know when we launch in your area.
        </p>
        
        <div class="flex flex-col md:flex-row justify-center gap-6">
          <RouterLink class="bg-brand-500 text-white px-12 py-6 rounded-2xl font-bold text-lg hover:bg-brand-600 transition-all hover:scale-105 shadow-2xl" to="/contact">
            Join the Waitlist
          </RouterLink>
          <RouterLink class="bg-white/10 backdrop-blur-md text-white border border-white/20 px-12 py-6 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all" to="/about">
            Learn Our Story
          </RouterLink>
        </div>

        <div class="mt-20 flex flex-wrap justify-center gap-12 opacity-50">
          <div class="text-center">
            <p class="text-3xl font-bold mb-1">5k+</p>
            <p class="text-xs uppercase tracking-widest font-mono">Signups</p>
          </div>
          <div class="text-center">
            <p class="text-3xl font-bold mb-1">12</p>
            <p class="text-xs uppercase tracking-widest font-mono">Discos Supported</p>
          </div>
          <div class="text-center">
            <p class="text-3xl font-bold mb-1">100%</p>
            <p class="text-xs uppercase tracking-widest font-mono">Nigerian Built</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
