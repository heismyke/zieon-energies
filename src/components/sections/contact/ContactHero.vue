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
  <section class="relative min-h-[50vh] flex flex-col justify-center px-6 md:px-16 pt-32 pb-16 bg-white overflow-hidden text-black text-center">
    <div class="max-w-7xl mx-auto">
      <p class="hero-reveal reveal-up font-mono text-xs tracking-widest text-brand-700 uppercase mb-8 opacity-0 translate-y-[30px]">GET STARTED</p>
      <h1 class="hero-reveal reveal-up font-heading text-6xl md:text-[8rem] tracking-tighter leading-none mb-12 opacity-0 translate-y-[30px]">
        Let's power up.
      </h1>
      <p class="hero-reveal reveal-up text-xl md:text-2xl text-black/70 max-w-2xl mx-auto leading-relaxed opacity-0 translate-y-[30px]">
        Join the waitlist, ask a question, or book a consultation. We're here to help you take control of your energy.
      </p>
    </div>
  </section>
</template>
