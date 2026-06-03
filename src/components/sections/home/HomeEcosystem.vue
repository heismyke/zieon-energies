<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "../../../lib/gsap";

onMounted(() => {
  const revealElements = [".reveal-up", ".reveal-scale"];
  revealElements.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      });
    });
  });
});
</script>

<template>
  <section class="py-24 bg-brand-50 px-6 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-20 reveal-up">
        <p class="eyebrow text-brand-700 mb-6">THE ECOSYSTEM</p>
        <h2 class="display-title text-black">A complete power solution.</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-xl transition-all reveal-up flex flex-col items-center text-center group">
          <div class="w-20 h-20 bg-brand-500 rounded-2xl mb-8 flex items-center justify-center text-white relative overflow-hidden">
            <div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            <div class="w-2 h-8 bg-white/40 rounded-full"></div>
          </div>
          <h3 class="text-2xl font-bold mb-4 font-heading">Zieon Meters</h3>
          <p class="text-black/60 leading-relaxed">
            Smart hardware designed for the Nigerian grid, providing real-time data and tamper-proof reliability.
          </p>
        </div>

        <div class="bg-brand-500 p-12 rounded-[3rem] shadow-xl text-white reveal-up flex flex-col items-center text-center scale-105 z-10 group">
          <div class="w-20 h-20 bg-white rounded-2xl mb-8 flex items-center justify-center text-brand-500 relative overflow-hidden">
             <div class="absolute inset-4 border-2 border-brand-500/20 rounded-lg"></div>
             <div class="w-6 h-6 bg-brand-500 rounded-full animate-pulse"></div>
          </div>
          <h3 class="text-2xl font-bold mb-4 font-heading">Zenerlink App</h3>
          <p class="text-white/80 leading-relaxed">
            Your energy in your pocket—monitor usage, buy units instantly, and get outage alerts anywhere.
          </p>
        </div>

        <div class="bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-xl transition-all reveal-up flex flex-col items-center text-center group">
          <div class="w-20 h-20 bg-brand-500 rounded-2xl mb-8 flex items-center justify-center text-white relative overflow-hidden">
            <div class="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            <div class="w-8 h-px bg-white/40"></div>
            <div class="w-px h-8 bg-white/40 absolute"></div>
          </div>
          <h3 class="text-2xl font-bold mb-4 font-heading">Energy Supply</h3>
          <p class="text-black/60 leading-relaxed">
            Decentralized and reliable power delivery that ensures your home or business never skips a beat.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
