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
  <section class="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-16 pt-32 pb-16 bg-brand-gradient overflow-hidden text-white">
    <div class="absolute inset-0 opacity-20 pointer-events-none">
      <div class="absolute top-0 bottom-0 left-1/4 w-px bg-white"></div>
      <div class="absolute top-0 bottom-0 left-1/2 w-px bg-white"></div>
      <div class="absolute top-0 bottom-0 left-3/4 w-px bg-white"></div>
      <div class="absolute left-0 right-0 top-1/3 h-px bg-white"></div>
      <div class="absolute left-0 right-0 top-2/3 h-px bg-white"></div>
    </div>

    <div class="relative z-10 max-w-5xl mx-auto text-center">
      <p class="hero-reveal reveal-up font-mono text-xs tracking-widest uppercase mb-8 opacity-0 translate-y-[30px]">THE LAST MILE OF ELECTRICITY</p>
      <h1 class="hero-reveal reveal-up font-heading text-6xl md:text-[8rem] leading-[0.85] tracking-tighter mb-12 opacity-0 translate-y-[30px]">
        Nigeria's first automatic prepaid platform
      </h1>
      <p class="hero-reveal reveal-up text-xl md:text-3xl max-w-2xl mx-auto leading-snug opacity-0 translate-y-[30px] mb-16">
        No keypad. No code. No friction. Payment to power in under 90 seconds.
      </p>
      <div class="hero-reveal reveal-up flex flex-wrap justify-center gap-4 opacity-0 translate-y-[30px]">
        <RouterLink class="bg-white text-brand-500 px-10 py-5 rounded-xl font-medium text-lg hover:scale-105 transition-transform shadow-2xl" to="/contact">
          Get started now
        </RouterLink>
        <RouterLink class="bg-brand-600/30 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-xl font-medium text-lg hover:bg-brand-600/50 transition-all" to="/zenerlink">
          Explore Zenerlink
        </RouterLink>
      </div>
    </div>
  </section>
</template>
