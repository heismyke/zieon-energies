<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "../../../lib/gsap";

onMounted(() => {
  const revealElements = [".reveal-up", ".reveal-left", ".reveal-right", ".reveal-scale"];
  revealElements.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        x: 0,
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
  <section class="py-24 md:py-48 px-6 bg-brand-50 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-32 reveal-up opacity-0 translate-y-[30px]">
        <p class="font-mono text-xs tracking-widest text-brand-700 uppercase mb-8">PHASE 4: HARDWARE</p>
        <h2 class="text-6xl md:text-[10rem] font-heading tracking-tighter leading-[0.8] mb-12">Next-Gen Smart Meters</h2>
        <p class="text-2xl text-black/60 max-w-3xl mx-auto leading-relaxed">
          We are vertically integrating the energy stack. zieon energies is developing proprietary prepaid meters with built-in LoRaWAN technology.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all reveal-up opacity-0 translate-y-[30px]">
          <div class="aspect-video bg-brand-100 rounded-2xl mb-10 overflow-hidden relative group">
            <div class="w-full h-full bg-brand-200 group-hover:scale-110 transition-transform duration-700 flex items-center justify-center text-brand-700/10 text-2xl font-heading">[Hardware Image]</div>
          </div>
          <h4 class="text-3xl font-medium tracking-tight mb-6">LoRaWAN Integration</h4>
          <p class="text-lg text-black/60 leading-relaxed">The radio layer nobody else uses. Our meters communicate over long ranges with minimal power, even in dense urban environments.</p>
        </div>
        <div class="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all reveal-up opacity-0 translate-y-[30px]">
          <div class="aspect-video bg-brand-100 rounded-2xl mb-10 overflow-hidden relative group">
            <div class="w-full h-full bg-brand-200 group-hover:scale-110 transition-transform duration-700 flex items-center justify-center text-brand-700/10 text-2xl font-heading">[Hardware Image]</div>
          </div>
          <h4 class="text-3xl font-medium tracking-tight mb-6">Recharge Intelligence</h4>
          <p class="text-lg text-black/60 leading-relaxed">Real-time recharge intelligence, demand forecasting, and load behavior tools embedded directly into the hardware layer.</p>
        </div>
        <div class="bg-brand-gradient p-10 rounded-[2.5rem] shadow-2xl reveal-up opacity-0 translate-y-[30px] text-white flex flex-col justify-end min-h-[400px]">
          <div class="mb-auto">
             <div class="w-16 h-1 bg-white/30 rounded-full mb-8"></div>
          </div>
          <h4 class="text-3xl font-medium tracking-tight mb-6">Full Stack Control</h4>
          <p class="text-lg opacity-80 leading-relaxed mb-8">When we control the hardware, we control the full stack from payment to meter. High-margin device sales coming soon.</p>
          <div class="bg-white/20 backdrop-blur-md p-4 rounded-xl font-mono text-xs tracking-widest text-center uppercase">New Meters Coming Soon</div>
        </div>
      </div>
    </div>
  </section>
</template>
