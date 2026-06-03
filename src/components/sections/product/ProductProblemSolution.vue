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
  <section class="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
    <div class="bg-black text-white p-12 md:p-32 flex flex-col justify-center reveal-left opacity-0 translate-x-[-30px]">
       <p class="font-mono text-xs tracking-widest uppercase mb-10 opacity-50">THE PROBLEM</p>
       <h3 class="text-5xl md:text-7xl font-heading tracking-tighter leading-none mb-12">The 20-digit manual entry struggle.</h3>
       <p class="text-xl md:text-2xl opacity-70 leading-relaxed mb-16 max-w-md">Emeka paid for his electricity. He still has no power. He has to find a CIU device and type a code in the dark.</p>
       <div class="flex flex-wrap gap-12">
          <div class="reveal-up opacity-0 translate-y-[30px]">
             <span class="block text-5xl font-bold text-brand-500 mb-2">20</span>
             <p class="font-mono text-[10px] tracking-widest uppercase opacity-40">DIGITS</p>
          </div>
          <div class="reveal-up opacity-0 translate-y-[30px]">
             <span class="block text-5xl font-bold text-brand-500 mb-2">15</span>
             <p class="font-mono text-[10px] tracking-widest uppercase opacity-40">MINUTES</p>
          </div>
          <div class="reveal-up opacity-0 translate-y-[30px]">
             <span class="block text-5xl font-bold text-brand-500 mb-2">3</span>
             <p class="font-mono text-[10px] tracking-widest uppercase opacity-40">FAILURES</p>
          </div>
       </div>
    </div>
    <div class="bg-brand-500 text-white p-12 md:p-32 flex flex-col justify-center reveal-right opacity-0 translate-x-[30px]">
       <p class="font-mono text-xs tracking-widest uppercase mb-10 opacity-70">THE SOLUTION</p>
       <h3 class="text-5xl md:text-7xl font-heading tracking-tighter leading-none mb-12">Payment to power. Zero friction.</h3>
       <p class="text-xl md:text-2xl opacity-90 leading-relaxed mb-16 max-w-md">Automatic transmission. Intelligent fallback. Multi-meter compatibility. Built on existing MAP infrastructure.</p>
       <ul class="space-y-6 text-xl font-medium">
         <li class="flex items-center gap-4 reveal-up opacity-0 translate-y-[30px]"><span class="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full">✓</span> Token generated instantly</li>
         <li class="flex items-center gap-4 reveal-up opacity-0 translate-y-[30px]"><span class="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full">✓</span> Meter loaded automatically</li>
         <li class="flex items-center gap-4 reveal-up opacity-0 translate-y-[30px]"><span class="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full">✓</span> All 12 DISCOs supported</li>
       </ul>
    </div>
  </section>
</template>
