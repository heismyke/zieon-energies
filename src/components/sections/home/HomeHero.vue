<script setup lang="ts">
import { onMounted } from "vue";
import { RouterLink } from "vue-router";
import { gsap } from "../../../lib/gsap";

onMounted(() => {
  // Hero reveal
  gsap.to(".hero-reveal", {
    y: 0,
    opacity: 1,
    duration: 1.2,
    stagger: 0.15,
    ease: "power4.out"
  });

  // Scroll reveals
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

  // Parallax
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
  <!-- Hero Section -->
  <section class="relative min-h-screen pt-32 pb-16 px-6 overflow-hidden flex flex-col justify-center bg-black">
    <!-- Background Layer -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-black/40 z-10"></div>
      <!-- Placeholder for hero image -->
      <div class="w-full h-full bg-brand-950/80 bg-cover bg-center"></div>
    </div>

    <!-- Grid Lines -->
    <div class="absolute inset-0 z-10 pointer-events-none opacity-20">
      <div class="absolute top-0 bottom-0 left-1/3 w-px bg-white"></div>
      <div class="absolute top-0 bottom-0 left-2/3 w-px bg-white"></div>
      <div class="absolute left-0 right-0 top-1/3 h-px bg-white"></div>
      <div class="absolute left-0 right-0 top-2/3 h-px bg-white"></div>
    </div>

    <!-- Accent Orange Box -->
    <div class="absolute right-[15%] top-1/3 w-1/4 aspect-square bg-brand-500 z-10 opacity-90 reveal-scale hidden md:block"></div>

    <div class="relative z-20 max-w-6xl mx-auto w-full">
      <p class="hero-reveal reveal-up eyebrow text-white/80 mb-8 opacity-0">POWER YOU CONTROL</p>
      <h1 class="hero-reveal reveal-up display-title--hero opacity-0">
        Power your home <br />
        <span class="block mt-4 md:mt-8">for less</span>
      </h1>
      <div class="hero-reveal reveal-up opacity-0">
        <p class="copy-text text-white/90 mt-12 max-w-xl">
          Battery backup and solar. $0 upfront. A lower electric bill every month.
        </p>
        <div class="flex gap-4 mt-12">
          <RouterLink class="bg-white text-black px-10 py-5 rounded-xl font-medium transition-all hover:bg-brand-50 shadow-xl" to="/contact">
            See if you qualify
          </RouterLink>
          <RouterLink class="bg-brand-500 text-white px-10 py-5 rounded-xl font-medium transition-all hover:bg-brand-600 shadow-xl" to="/contact">
            Get your estimate
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Stats -->
    <div class="absolute right-[15%] top-1/4 z-20 text-white hidden lg:block hero-reveal reveal-right opacity-0">
      <p class="font-mono text-xs tracking-widest uppercase opacity-70">kWh generated</p>
      <p class="text-3xl font-medium mt-2">8.2kWh – 9.5kWh</p>
    </div>
  </section>
</template>

<style scoped>
.hero-reveal {
  transform: translateY(30px);
}
</style>
