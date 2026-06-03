<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "../../../lib/gsap";

const steps = [
  {
    step: "STEP 1",
    title: "Subscribe to zieon energies",
    caption: "YOU'RE PART OF A GROWING NETWORK",
    description:
      "Your home becomes part of a decentralized energy network that shares power locally to make energy more reliable and affordable for everyone.",
    art: "badge",
  },
  {
    step: "STEP 2",
    title: "Power up",
    caption: "YOUR HOUSE ACTS LIKE A MINI POWER PLANT",
    description:
      "Every day, your system generates and stores energy. We keep it running smoothly with full-service maintenance on all equipment.",
    art: "house",
  },
  {
    step: "STEP 3",
    title: "Your energy works for you",
    caption: "ZIEON ENERGIES TRADES ENERGY YOU DON'T USE",
    description:
      "zieon energies trades excess energy from your battery with the grid. You earn rewards for supporting a more reliable grid.",
    art: "empty",
  },
];

onMounted(() => {
  const stepElements = document.querySelectorAll(".step-stack");
  
  stepElements.forEach((section, index) => {
    if (index === stepElements.length - 1) return; // Last section doesn't dim
    
    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinSpacing: false
      },
      scale: 0.95,
      opacity: 0.4,
      filter: "blur(4px)",
      ease: "none"
    });
  });

  // Entry reveals for content
  const revealElements = [".reveal-left", ".reveal-right"];
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
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      });
    });
  });
});
</script>

<template>
  <section class="flex flex-col bg-brand-100">
    <div 
      v-for="(step, index) in steps" 
      :key="step.title" 
      class="step-stack"
      :style="{ zIndex: index + 1 }"
    >
      <article class="grid grid-cols-1 md:grid-cols-2 items-center gap-16 md:gap-32 p-12 md:p-32 bg-brand-100 border-b border-black/5 overflow-hidden min-h-[80vh]">
        <div class="max-w-md reveal-left opacity-0 translate-x-[-30px]">
          <p class="eyebrow text-brand-700 mb-8">{{ step.step }}</p>
          <h3 class="section-title mb-6">{{ step.title }}</h3>
          <p class="eyebrow opacity-60 mb-8">{{ step.caption }}</p>
          <p class="copy-text text-black/70">{{ step.description }}</p>
        </div>
        <div class="aspect-square bg-brand-200/50 rounded-[4rem] overflow-hidden p-12 flex items-center justify-center reveal-right opacity-0 translate-x-[30px]">
           <div :class="['w-full h-full rounded-3xl shadow-2xl transition-transform duration-700 hover:scale-105', step.art === 'badge' ? 'bg-brand-500' : step.art === 'house' ? 'bg-blue-400' : 'bg-brand-300']"></div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.step-stack {
  position: relative;
  width: 100%;
  will-change: transform, opacity;
}
</style>
