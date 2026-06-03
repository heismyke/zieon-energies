<script setup lang="ts">
import { onMounted } from "vue";
import { RouterLink } from "vue-router";
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
  <section class="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-purple-200 text-dark-purple overflow-hidden">
    <div class="p-12 md:p-32 flex flex-col justify-center reveal-left opacity-0 translate-x-[-30px]">
       <h2 class="display-title--hero mb-16">Step into <br/> zieon energies</h2>
       <div class="max-w-md">
         <svg class="w-16 h-16 mb-12 text-dark-purple" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 18H30M6 18C6 12.4772 10.4772 8 16 8C21.5228 8 26 12.4772 26 18M16 2V10M10 5L12.8 9.2M22 5L19.2 9.2" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>
         <p class="eyebrow mb-6 opacity-70">THE FUTURE IS BRIGHT</p>
         <p class="copy-text opacity-90 mb-12">
           Ready to take control of your power? It’s time to step out of the past, and into a more resilient, rewarding energy future.
         </p>
         <RouterLink class="inline-block bg-dark-purple text-white px-12 py-6 rounded-xl font-medium hover:-translate-y-2 transition-all shadow-2xl" to="/contact">
            See if you qualify
         </RouterLink>
       </div>
    </div>
    <div class="relative min-h-[60vh] md:min-h-0 reveal-right opacity-0 translate-x-[30px] overflow-hidden">
      <div class="absolute inset-[-10%] bg-purple-300 bg-cover bg-center parallax-element opacity-90">
         <div class="w-full h-full flex items-center justify-center text-dark-purple/20 text-4xl font-heading">[Image]</div>
      </div>
      <div class="absolute top-[10%] right-[10%] w-2/5 aspect-[0.85] bg-purple-600/90 rounded-3xl reveal-scale opacity-0 scale-[0.98] shadow-2xl backdrop-blur-md"></div>
    </div>
  </section>
</template>
