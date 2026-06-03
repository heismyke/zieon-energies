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

  document.querySelectorAll(".parallax-element").forEach(el => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      },
      y: -60,
      ease: "none"
    });
  });
});
</script>

<template>
  <section class="relative py-24 md:py-48 px-6 bg-black text-white overflow-hidden">
     <div class="absolute inset-0 opacity-20 pointer-events-none">
        <svg class="w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M0 50 Q 25 45, 50 50 T 100 50" stroke="white" fill="transparent" vector-effect="non-scaling-stroke" class="parallax-element" />
        </svg>
     </div>
     <div class="max-w-7xl mx-auto relative z-10">
        <h2 class="text-5xl md:text-8xl font-heading tracking-tighter leading-none text-center mb-32 reveal-up opacity-0 translate-y-[30px]">The Technology</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-32">
           <div class="reveal-left opacity-0 translate-x-[-30px]">
              <h5 class="text-2xl font-bold text-brand-500 mb-6">Automatic Transmission</h5>
              <p class="text-lg opacity-60 leading-relaxed">Tokens are pushed to your meter the moment payment is confirmed. No codes to type, ever.</p>
           </div>
           <div class="reveal-up opacity-0 translate-y-[30px]">
              <h5 class="text-2xl font-bold text-brand-500 mb-6">Intelligent Fallback</h5>
              <p class="text-lg opacity-60 leading-relaxed">Multiple paths for token delivery ensures 94% success rate even on unstable urban networks.</p>
           </div>
           <div class="reveal-right opacity-0 translate-x-[30px]">
              <h5 class="text-2xl font-bold text-brand-500 mb-6">Vertical Integration</h5>
              <p class="text-lg opacity-60 leading-relaxed">12-18 months of focused engineering to replicate our proprietary transmission layer.</p>
           </div>
        </div>
     </div>
  </section>
</template>
