<script setup lang="ts">
import { onMounted } from "vue";
import { RouterLink } from "vue-router";
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
  <section class="relative min-h-screen flex items-center justify-center p-8 overflow-hidden bg-brand-500 text-white text-center">
    <div class="absolute inset-0 opacity-40 bg-brand-600 bg-cover bg-center sepia brightness-75 parallax-element">
       <!-- Placeholder for feature image -->
       <div class="w-full h-full flex items-center justify-center text-white/10 text-9xl font-heading uppercase tracking-widest pointer-events-none select-none">
         Future
       </div>
    </div>
    <div class="relative z-10 max-w-4xl reveal-scale opacity-0 scale-[0.98]">
      <p class="eyebrow mb-10 text-white/80">HOW ZIEON ENERGIES WORKS</p>
      <h2 class="display-title--hero mb-12">A new way to <br/> power your home</h2>
      <p class="copy-text mt-10 opacity-90 max-w-2xl mx-auto">
        With zieon energies, your home generates and stores power with solar and battery backup. We cover installation and upfront costs. You get 24/7 outage protection and below-market energy rates.
      </p>
      <RouterLink class="inline-block bg-white text-black px-12 py-6 rounded-xl font-medium mt-16 transition-all hover:scale-105 hover:bg-brand-50 shadow-2xl" to="/contact">
        See if your house qualifies
      </RouterLink>
    </div>
  </section>
</template>
