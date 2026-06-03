<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "../../../lib/gsap";

const posts = [
  {
    title: "The Future of Prepaid Metering in Nigeria",
    category: "Industry",
    date: "May 12, 2026",
    excerpt: "How LoRaWAN and smart technology are changing the way we pay for power."
  },
  {
    title: "5 Tips to Reduce Your Electricity Bill",
    category: "Tips",
    date: "May 08, 2026",
    excerpt: "Small changes in your daily routine that can lead to big savings on your next recharge."
  },
  {
    title: "Announcing Zenerlink Beta",
    category: "Updates",
    date: "May 01, 2026",
    excerpt: "Our mobile app is entering private beta. Here's what you need to know."
  }
];

onMounted(() => {
  gsap.to(".reveal-up", {
    scrollTrigger: {
      trigger: ".blog-grid",
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
  <section class="py-24 bg-white px-6">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 blog-grid">
        <article v-for="post in posts" :key="post.title" class="group cursor-pointer reveal-up opacity-0 translate-y-[30px]">
          <div class="aspect-video bg-brand-50 rounded-[2rem] mb-8 overflow-hidden">
            <div class="w-full h-full bg-brand-100 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center text-brand-700/10 text-4xl font-heading">
              [Blog Image]
            </div>
          </div>
          <p class="font-mono text-[10px] tracking-widest uppercase text-brand-500 mb-4">{{ post.category }} • {{ post.date }}</p>
          <h3 class="text-2xl font-bold mb-4 font-heading group-hover:text-brand-500 transition-colors">{{ post.title }}</h3>
          <p class="text-black/60 leading-relaxed">{{ post.excerpt }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
