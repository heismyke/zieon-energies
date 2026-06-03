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
  <div>
    <!-- Thesis -->
    <section class="relative min-h-screen flex items-center justify-center text-center p-8 overflow-hidden bg-black text-white">
      <div class="absolute inset-0 bg-brand-900 bg-cover bg-center opacity-40 parallax-element">
         <div class="w-full h-full flex items-center justify-center text-white/10 text-9xl font-heading uppercase tracking-widest pointer-events-none select-none">Thesis</div>
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      
      <div class="relative z-10 max-w-3xl reveal-up opacity-0 translate-y-[30px]">
        <h2 class="display-title--hero leading-none mb-10">The grid has <br/> no master</h2>
        <p class="copy-text opacity-80 max-w-lg mx-auto leading-relaxed">
          Power should be generated where it’s used, stored where it’s needed, and shared by the people who produce it.
        </p>
      </div>

      <div class="absolute top-12 left-12 right-12 flex justify-between">
        <p class="eyebrow opacity-40">ZIEON</p>
        <p class="eyebrow opacity-40">OUR THESIS</p>
      </div>
    </section>

    <!-- Mosaic -->
    <section class="bg-black py-px">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="min-h-[50vh] flex items-center justify-center p-12 reveal-up opacity-0 translate-y-[30px]">
          <h2 class="display-title text-white text-center">A lower electric bill in every home</h2>
        </div>
        <div class="min-h-[50vh] relative overflow-hidden parallax-container reveal-up opacity-0 translate-y-[30px]">
           <div class="absolute inset-0 bg-brand-800 bg-cover bg-center opacity-80 parallax-element">
              <div class="w-full h-full flex items-center justify-center text-white/10 text-4xl font-heading">[Image]</div>
           </div>
        </div>
        <div class="min-h-[50vh] relative overflow-hidden parallax-container reveal-up opacity-0 translate-y-[30px]">
           <div class="absolute inset-0 bg-brand-700 bg-cover bg-center opacity-80 parallax-element">
              <div class="w-full h-full flex items-center justify-center text-white/10 text-4xl font-heading">[Image]</div>
           </div>
        </div>
        <div class="min-h-[60vh] flex items-center justify-center p-12 reveal-up opacity-0 translate-y-[30px]">
          <h2 class="display-title--hero text-white">More Power</h2>
        </div>
      </div>
    </section>
  </div>
</template>
