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
  <section class="py-24 bg-brand-50 px-0">
    <div class="grid grid-cols-1 md:grid-cols-3 border-t border-l border-black/5">
      <div class="hidden md:block h-96 border-r border-b border-black/5"></div>
      <div class="hidden md:block h-96 border-r border-b border-black/5"></div>
      <!-- Image 1 -->
      <div class="relative h-96 border-r border-b border-black/5 overflow-hidden reveal-up opacity-0">
        <div class="absolute inset-[-10%] bg-brand-200 bg-cover bg-center parallax-element">
           <!-- Placeholder text -->
           <div class="w-full h-full flex items-center justify-center text-brand-700/20 text-2xl font-heading">[Image]</div>
        </div>
      </div>
      
      <!-- Text 1 -->
      <div class="flex flex-col justify-center p-12 md:p-24 border-r border-b border-black/5 text-center reveal-up opacity-0">
         <p class="eyebrow text-brand-700 mb-6">SAVE</p>
         <h2 class="display-title">Cut your electric bill by 20% or more</h2>
      </div>
      
      <!-- Image 2 -->
      <div class="relative h-96 border-r border-b border-black/5 overflow-hidden reveal-up opacity-0">
        <div class="absolute inset-[-10%] bg-brand-200 bg-cover bg-center parallax-element">
           <!-- Placeholder text -->
           <div class="w-full h-full flex items-center justify-center text-brand-700/20 text-2xl font-heading">[Image]</div>
        </div>
      </div>
      
      <!-- Text 2 -->
      <div class="flex flex-col justify-center p-12 md:p-24 border-r border-b border-black/5 text-center reveal-up opacity-0">
         <p class="eyebrow text-brand-700 mb-6">PROTECT</p>
         <h2 class="display-title">Keep the lights on with battery backup</h2>
      </div>
    </div>
  </section>
</template>
