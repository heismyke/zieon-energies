<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "../../../lib/gsap";

const steps = [
  {
    num: "01",
    title: "Buy your meter",
    description: "Purchase your smart Zieon prepaid meter through our authorized partners or directly from our website."
  },
  {
    num: "02",
    title: "Connect on Zenerlink",
    description: "Download the app and pair it with your meter in seconds using our secure LoRaWAN technology."
  },
  {
    num: "03",
    title: "Monitor & Pay",
    description: "Track your real-time consumption and top up your units instantly without typing long codes."
  }
];

onMounted(() => {
  gsap.to(".reveal-up", {
    scrollTrigger: {
      trigger: ".steps-container",
      start: "top 80%",
    },
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
  });
});
</script>

<template>
  <section class="py-24 bg-white px-6">
    <div class="max-w-7xl mx-auto">
      <div class="mb-20">
        <p class="eyebrow text-brand-500 mb-6">SIMPLICITY FIRST</p>
        <h2 class="display-title text-black">Three steps to total control.</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 steps-container">
        <div v-for="step in steps" :key="step.num" class="relative reveal-up opacity-0 translate-y-[30px]">
          <div class="text-8xl font-heading text-brand-50 absolute -top-12 -left-4 -z-10 select-none">
            {{ step.num }}
          </div>
          <h3 class="text-3xl font-bold mb-6 font-heading">{{ step.title }}</h3>
          <p class="text-black/60 text-lg leading-relaxed">
            {{ step.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
