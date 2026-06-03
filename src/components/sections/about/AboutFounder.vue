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
});
</script>

<template>
  <section class="bg-purple-200 py-32 px-6 flex justify-center selection:bg-purple-600 selection:text-white">
    <div class="bg-purple-50 max-w-4xl w-full p-12 md:p-24 shadow-2xl reveal-scale opacity-0 scale-[0.98]">
      <h2 class="display-title text-dark-purple leading-tight mb-16">A note from our co-founder</h2>
      <div class="space-y-8 copy-text text-dark-purple/80 leading-relaxed max-w-2xl">
        <p>I grew up in Louisiana, where power outages were part of life. Back then, I thought they were a local problem. Today, they're everyone's problem. The grid is aging. Blackouts are rising. Prices keep climbing. And the systems we rely on aren't built to handle the demand ahead.</p>
        <p>The good news? The solution is right in front of us. Equipped with solar and batteries, our homes can work together to create a stronger, more resilient energy system for everyone. That's the idea behind zieon energies.</p>
        <p>One home can weather a storm. Thousands working together can shift the entire system. The future is bright, and we're so glad you've joined us.</p>
      </div>
      <div class="mt-20 flex justify-between items-end">
        <div>
          <p class="section-title text-dark-purple mb-1 leading-none">Power on,</p>
          <p class="section-title text-dark-purple mb-4 leading-none">Jason</p>
          <p class="eyebrow text-dark-purple/60">CEO AND CO-FOUNDER</p>
        </div>
        <svg class="w-16 text-dark-purple" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 18H30M6 18C6 12.4772 10.4772 8 16 8C21.5228 8 26 12.4772 26 18M16 2V10M10 5L12.8 9.2M22 5L19.2 9.2" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  </section>
</template>
