<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "../../../lib/gsap";

onMounted(() => {
  gsap.to(".reveal-up", {
    scrollTrigger: {
      trigger: ".future-grid",
      start: "top 85%",
    },
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
  });
});
</script>

<template>
  <section class="py-24 bg-white px-6">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-20 reveal-up">
        <p class="eyebrow text-brand-500 mb-6">WHAT'S NEXT</p>
        <h2 class="display-title text-black">We're just getting started.</h2>
        <p class="copy-text text-black/60 mt-8 max-w-2xl mx-auto text-xl">
          The Zieon ecosystem is expanding. Soon, every device in your home will be part of a smarter, more efficient grid.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 future-grid">
        <div class="bg-brand-50 p-12 rounded-[3rem] border border-black/5 reveal-up opacity-0 translate-y-[30px]">
          <h3 class="text-2xl font-bold mb-4 font-heading">Smart Plugs</h3>
          <p class="text-black/60">Control individual appliances and monitor their specific energy footprint.</p>
          <div class="mt-8 text-brand-500 font-mono text-xs tracking-widest uppercase">Coming Q4 2026</div>
        </div>
        <div class="bg-brand-50 p-12 rounded-[3rem] border border-black/5 reveal-up opacity-0 translate-y-[30px]">
          <h3 class="text-2xl font-bold mb-4 font-heading">Home Batteries</h3>
          <p class="text-black/60">Store energy when it's cheap and use it when the grid goes down.</p>
          <div class="mt-8 text-brand-500 font-mono text-xs tracking-widest uppercase">Development Phase</div>
        </div>
        <div class="bg-brand-50 p-12 rounded-[3rem] border border-black/5 reveal-up opacity-0 translate-y-[30px]">
          <h3 class="text-2xl font-bold mb-4 font-heading">Solar Kits</h3>
          <p class="text-black/60">Plug-and-play solar solutions that feed directly into your Zieon ecosystem.</p>
          <div class="mt-8 text-brand-500 font-mono text-xs tracking-widest uppercase">Researching</div>
        </div>
      </div>
    </div>
  </section>
</template>
