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
  <section class="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-[#bed5ff] text-dark-blue overflow-hidden">
    <div class="relative overflow-hidden parallax-container min-h-[50vh] md:min-h-0 reveal-left opacity-0 translate-x-[-30px]">
       <div class="absolute inset-[-10%] bg-blue-200 bg-cover bg-center parallax-element">
          <div class="w-full h-full flex items-center justify-center text-dark-blue/20 text-4xl font-heading">[Image]</div>
       </div>
       <div class="absolute inset-[20%] bg-dark-blue/80 rounded-2xl"></div>
    </div>
    <div class="p-12 md:p-24 flex flex-col justify-center reveal-right opacity-0 translate-x-[30px]">
      <h2 class="display-title mb-16 leading-tight">Financing the electrified world</h2>
      <div class="flex gap-12 md:gap-20">
        <div class="flex flex-col gap-2 min-w-[8rem]">
          <p class="eyebrow opacity-60">ZIEON</p>
          <p class="eyebrow opacity-60">OUR PLATFORM</p>
        </div>
        <p class="copy-text opacity-90 max-w-md">
          Behind every home in the network is a vertically integrated capital markets platform purpose-built for distributed energy. zieon energies built every layer. Financing, installation, monitoring, and grid operations. One company, end to end.
        </p>
      </div>
    </div>
  </section>
</template>
