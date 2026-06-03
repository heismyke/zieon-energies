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
  <section class="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-yellow-400 text-brown overflow-hidden">
    <div class="p-12 md:p-24 flex flex-col justify-center order-2 md:order-1 reveal-left opacity-0 translate-x-[-30px]">
      <h2 class="display-title mb-16 leading-tight">A new kind of energy company</h2>
      <div class="flex gap-12 md:gap-20">
        <div class="flex flex-col gap-2 min-w-[8rem]">
          <p class="eyebrow opacity-60">ZIEON</p>
          <p class="eyebrow opacity-60">WHAT WE DO</p>
        </div>
        <p class="copy-text opacity-90 max-w-md">
          zieon energies is building a distributed energy network that gets stronger with every home. The grid of the future won't come from one place. It'll come from everywhere.
        </p>
      </div>
    </div>
    <div class="relative overflow-hidden parallax-container min-h-[50vh] md:min-h-0 order-1 md:order-2 reveal-right opacity-0 translate-x-[30px]">
       <div class="absolute inset-[-10%] bg-yellow-500 bg-cover bg-center parallax-element">
          <div class="w-full h-full flex items-center justify-center text-brown/20 text-4xl font-heading">[Image]</div>
       </div>
       <div class="absolute inset-[20%] bg-brown/80 rounded-2xl"></div>
    </div>
  </section>
</template>
