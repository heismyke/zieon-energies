<script setup lang="ts">
import { onMounted } from "vue";
import { RouterLink } from "vue-router";
import { gsap } from "../../../lib/gsap";

onMounted(() => {
  gsap.to(".reveal-scale", {
    scrollTrigger: {
      trigger: ".pricing-container",
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
    <div class="max-w-4xl mx-auto pricing-container">
      <div class="text-center mb-16">
        <p class="eyebrow text-brand-500 mb-6">OWN THE POWER</p>
        <h2 class="display-title text-black">Simple, transparent pricing.</h2>
      </div>

      <div class="bg-white rounded-[4rem] p-12 md:p-20 shadow-xl border border-black/5 reveal-scale opacity-0 scale-[0.98]">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 class="text-4xl font-bold mb-6 font-heading">Zieon Smart Meter</h3>
            <p class="text-black/60 mb-8 text-lg">
              Everything you need to start your journey towards energy independence.
            </p>
            <ul class="space-y-4 mb-12">
              <li class="flex items-center gap-3">
                <span class="text-brand-500">✓</span>
                <span>Smart Prepaid Meter</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="text-brand-500">✓</span>
                <span>Zenerlink App Access</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="text-brand-500">✓</span>
                <span>Professional Installation</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="text-brand-500">✓</span>
                <span>12-Month Warranty</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="text-brand-500">✓</span>
                <span>24/7 Priority Support</span>
              </li>
            </ul>
          </div>
          <div class="flex flex-col justify-center items-center md:items-end text-center md:text-right">
            <p class="text-brand-500 font-mono text-xs tracking-widest uppercase mb-4">Starting At</p>
            <div class="flex items-start gap-2 mb-4">
              <span class="text-4xl font-bold mt-2">₦</span>
              <span class="text-8xl font-bold font-heading leading-none">65k</span>
            </div>
            <p class="text-black/40 mb-12">One-time purchase. No hidden fees.</p>
            <RouterLink class="w-full bg-black text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-500 transition-all text-center" to="/contact">
              Order Your Meter
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
