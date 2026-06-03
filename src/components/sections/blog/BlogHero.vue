<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "../../../lib/gsap";

onMounted(() => {
  gsap.to(".hero-reveal", {
    y: 0,
    opacity: 1,
    duration: 1.2,
    stagger: 0.15,
    ease: "power4.out"
  });
});
</script>

<template>
  <section class="relative min-h-[50vh] flex flex-col justify-center px-6 md:px-16 pt-32 pb-16 bg-brand-gradient overflow-hidden text-white">
    <div class="max-w-7xl mx-auto text-center">
      <p class="hero-reveal reveal-up font-mono text-xs tracking-widest uppercase mb-8 opacity-0 translate-y-[30px]">INSIGHTS & UPDATES</p>
      <h1 class="hero-reveal reveal-up font-heading text-6xl md:text-[8rem] tracking-tighter leading-none mb-12 opacity-0 translate-y-[30px]">
        The Voice of Energy.
      </h1>
      <p class="hero-reveal reveal-up text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed opacity-0 translate-y-[30px]">
        Thoughts on the future of energy in Africa, product updates, and tips for smarter consumption.
      </p>
    </div>
  </section>
</template>
