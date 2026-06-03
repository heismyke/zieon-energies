<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "../../../lib/gsap";

onMounted(() => {
  const revealElements = [".reveal-scale"];
  revealElements.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
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
  <section class="min-h-screen bg-brand-50 flex items-center justify-center p-12 text-center overflow-hidden">
    <div class="reveal-scale opacity-0 scale-[0.98]">
      <p class="section-title text-brown mb-12">The future is</p>
      <div class="w-32 mx-auto mb-12 text-brown">
        <svg viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 18H30M6 18C6 12.4772 10.4772 8 16 8C21.5228 8 26 12.4772 26 18M16 2V10M10 5L12.8 9.2M22 5L19.2 9.2" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <h2 class="display-title--hero text-brown leading-none">Bright</h2>
    </div>
  </section>
</template>
