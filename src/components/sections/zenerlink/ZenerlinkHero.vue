<script setup lang="ts">
import { onMounted } from "vue";
import { RouterLink } from "vue-router";
import { gsap } from "../../../lib/gsap";

onMounted(() => {
  // Hero reveal
  gsap.to(".hero-reveal", {
    y: 0,
    opacity: 1,
    duration: 1.2,
    stagger: 0.15,
    ease: "power4.out"
  });

  // Scroll reveals
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
  <section class="relative min-h-screen flex flex-col justify-center px-6 md:px-16 pt-32 pb-16 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div class="relative z-10">
        <div class="w-32 mb-12 shadow-xl rounded-2xl overflow-hidden hero-reveal opacity-0 translate-y-[30px]">
          <div class="w-full aspect-square bg-brand-500 flex items-center justify-center text-white text-4xl">
            ZL
          </div>
        </div>
        <p class="hero-reveal reveal-up font-mono text-xs tracking-widest text-brand-700 uppercase mb-8 opacity-0 translate-y-[30px]">ZENERLINK COMPANION APP</p>
        <h1 class="hero-reveal reveal-up font-heading text-6xl md:text-8xl tracking-tighter leading-none mb-12 opacity-0 translate-y-[30px]">
          Your electricity, <br/> in your pocket.
        </h1>
        <p class="hero-reveal reveal-up text-xl md:text-2xl text-black/70 max-w-xl leading-relaxed opacity-0 translate-y-[30px] mb-16">
          The ultimate companion for your Zieon meter. Monitor usage, buy units, and manage your home's energy from anywhere.
        </p>
        <div class="hero-reveal reveal-up flex flex-wrap gap-4 opacity-0 translate-y-[30px]">
          <RouterLink class="bg-brand-500 text-white px-10 py-5 rounded-xl font-medium text-lg hover:scale-105 transition-transform shadow-2xl" to="/contact">
            Join the Waitlist
          </RouterLink>
          <a href="#features" class="bg-brand-50 text-brand-700 px-10 py-5 rounded-xl font-medium text-lg hover:bg-brand-100 transition-all">
            Explore Features
          </a>
        </div>
      </div>
      
      <div class="relative reveal-right opacity-0 translate-x-[30px] flex justify-center">
        <!-- Phone Mockup -->
        <div class="w-full max-w-[400px] aspect-[9/19] bg-black rounded-[4rem] border-[12px] border-black shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden flex items-center justify-center relative">
          <div class="w-full h-full bg-brand-50 flex items-center justify-center text-brand-700/10 text-2xl font-heading text-center p-8">
            [Zenerlink Dashboard Mockup]
          </div>
          <!-- Notch -->
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-8 bg-black rounded-b-3xl"></div>
        </div>
        <!-- Decorative elements -->
        <div class="absolute -bottom-12 -left-12 w-48 h-48 bg-brand-gradient rounded-3xl -z-10 rotate-12 reveal-scale opacity-0 scale-[0.98]"></div>
        <div class="absolute -top-12 -right-12 w-64 h-64 bg-brand-200 rounded-full -z-10 reveal-scale opacity-0 scale-[0.98]"></div>
      </div>
    </div>
  </section>
</template>
