<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "../../../lib/gsap";

const features = [
  {
    title: "Live Monitoring",
    description: "Watch your units count down in real-time. Know exactly how much power your AC or fridge is using."
  },
  {
    title: "Instant Recharge",
    description: "Buy units directly in the app. No more typing 20-digit codes into a keypad in the dark."
  },
  {
    title: "Usage History",
    description: "Analyze your patterns over weeks or months. Identify where you can save money."
  },
  {
    title: "Outage Alerts",
    description: "Get notified the moment the grid goes down or when power is restored to your area."
  },
  {
    title: "Multi-Property",
    description: "Manage multiple meters—home, office, or rental property—all from a single account."
  },
  {
    title: "ZVN Share",
    description: "Send energy units directly to friends, family, or tenants with just a phone number."
  }
];

onMounted(() => {
  gsap.to(".reveal-up", {
    scrollTrigger: {
      trigger: ".features-grid",
      start: "top 85%",
    },
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.1,
    ease: "power3.out"
  });
});
</script>

<template>
  <section id="features" class="py-24 bg-brand-50 px-6">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-20 reveal-up opacity-0 translate-y-[30px]">
        <p class="eyebrow text-brand-500 mb-6">FEATURES</p>
        <h2 class="display-title text-black">Built for the way you live.</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 features-grid">
        <div v-for="feature in features" :key="feature.title" class="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all reveal-up opacity-0 translate-y-[30px] group">
          <div class="w-12 h-12 bg-brand-50 rounded-xl mb-8 flex items-center justify-center group-hover:bg-brand-500 transition-colors duration-500">
             <div class="w-4 h-4 border-2 border-brand-500 group-hover:border-white rounded-sm rotate-45 transition-colors"></div>
          </div>
          <h3 class="text-2xl font-bold mb-4 font-heading">{{ feature.title }}</h3>
          <p class="text-black/60 leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
