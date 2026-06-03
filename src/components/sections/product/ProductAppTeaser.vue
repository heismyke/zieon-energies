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
  <section id="zenerlink" class="py-24 md:py-48 px-6 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
      <div class="reveal-left opacity-0 translate-x-[-30px]">
        <div class="w-32 mb-12 shadow-xl rounded-2xl overflow-hidden bg-brand-500 flex items-center justify-center text-white text-4xl aspect-square">
          ZL
        </div>
        <p class="font-mono text-xs tracking-widest text-brand-700 uppercase mb-6">OUR MOBILE PLATFORM</p>
        <h2 class="text-5xl md:text-8xl font-heading tracking-tighter leading-[0.9] mb-12">Zenerlink: The future of management</h2>
        <p class="text-2xl text-black/70 leading-relaxed mb-16 max-w-xl">
          Nigeria's first platform to transmit prepaid electricity tokens directly to meters — no manual entry, ever.
        </p>
        <div class="space-y-12">
          <div class="grid grid-cols-[80px,1fr] gap-8 items-center reveal-up opacity-0 translate-y-[30px]">
            <span class="text-3xl font-bold text-brand-500 font-mono">90s</span>
            <p class="text-lg opacity-70">Purchase-to-power journey in under 90 seconds. Total elimination of the 20-digit manual entry struggle.</p>
          </div>
          <div class="grid grid-cols-[80px,1fr] gap-8 items-center reveal-up opacity-0 translate-y-[30px]">
            <span class="text-3xl font-bold text-brand-500 font-mono">STS</span>
            <p class="text-lg opacity-70">Built on global STS standards with proprietary LoRaWAN dispatch for 100% reliable transmission.</p>
          </div>
          <div class="grid grid-cols-[80px,1fr] gap-8 items-center reveal-up opacity-0 translate-y-[30px]">
            <span class="text-3xl font-bold text-brand-500 font-mono">ZVN</span>
            <p class="text-lg opacity-70"><strong>ZVN Share:</strong> Send kWh units directly to any meter. A landlord can top up 10 tenant meters from one wallet.</p>
          </div>
        </div>
      </div>
      <div class="relative reveal-right opacity-0 translate-x-[30px]">
         <div class="bg-brand-50 p-12 md:p-24 rounded-[4rem] flex justify-center">
            <div class="max-w-[320px] aspect-[9/19] bg-black shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] rounded-[3rem] overflow-hidden border-[8px] border-black flex items-center justify-center text-brand-700/10 text-xl font-heading text-center p-8">
              [Zenerlink App Interface Mockup]
            </div>
         </div>
         <div class="absolute -bottom-12 -left-12 w-48 h-48 bg-brand-gradient rounded-3xl -z-10 rotate-12 reveal-scale opacity-0 scale-[0.98]"></div>
      </div>
    </div>
  </section>
</template>
