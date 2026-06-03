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

  // Parallax
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
  <!-- Hero -->
  <section class="relative min-h-screen flex flex-col justify-end p-8 md:p-16 bg-[#a9bbed] overflow-hidden">
    <div class="absolute inset-0 opacity-20 pointer-events-none">
      <div class="absolute top-0 bottom-0 left-1/4 w-px bg-white"></div>
      <div class="absolute top-0 bottom-0 left-1/2 w-px bg-white"></div>
      <div class="absolute top-0 bottom-0 left-3/4 w-px bg-white"></div>
      <div class="absolute left-0 right-0 top-1/3 h-px bg-white"></div>
      <div class="absolute left-0 right-0 top-2/3 h-px bg-white"></div>
    </div>

    <!-- Placeholder for about hero image -->
    <div class="absolute left-0 top-0 w-1/2 h-full bg-blue-300 mix-blend-multiply opacity-60">
       <div class="w-full h-full flex items-center justify-center text-dark-blue/20 text-4xl font-heading">[Image]</div>
    </div>
    
    <div class="relative z-10 max-w-4xl">
      <p class="hero-reveal reveal-up eyebrow text-dark-blue mb-6 opacity-0 translate-y-[30px]">ABOUT ZIEON ENERGIES</p>
      <h1 class="hero-reveal reveal-up display-title--hero text-dark-blue mb-12 opacity-0 translate-y-[30px]">
        More <br/> Power
      </h1>
      <div class="hero-reveal reveal-up max-w-lg opacity-0 translate-y-[30px]">
        <p class="copy-text text-dark-blue/80 mb-10">
          zieon energies is creating the power we all need by decentralizing the power grid.
        </p>
        <div class="flex gap-4">
          <RouterLink class="bg-white text-dark-blue px-8 py-4 rounded-xl font-medium" to="/contact">For homeowners</RouterLink>
          <RouterLink class="bg-dark-blue text-white px-8 py-4 rounded-xl font-medium" to="/partners">For partners</RouterLink>
        </div>
      </div>
    </div>

    <!-- Floating Stats -->
    <div class="absolute right-[10%] top-[30%] hidden lg:flex flex-col gap-12 z-20">
      <div class="hero-reveal reveal-right opacity-0 translate-x-[30px]">
        <p class="font-mono text-xs tracking-widest text-dark-blue opacity-60 mb-2 uppercase">kWh generated</p>
        <p class="text-2xl font-medium text-dark-blue">8.2kWh – 9.5kWh</p>
      </div>
      <div class="hero-reveal reveal-right opacity-0 translate-x-[30px]">
        <p class="font-mono text-xs tracking-widest text-dark-blue opacity-60 mb-2 uppercase">Thermostat</p>
        <p class="text-2xl font-medium text-dark-blue">68°F</p>
      </div>
      <div class="hero-reveal reveal-right opacity-0 translate-x-[30px]">
        <p class="font-mono text-xs tracking-widest text-dark-blue opacity-60 mb-4 uppercase">Backup stored</p>
        <div class="w-48 h-1 bg-dark-blue/10 rounded-full overflow-hidden">
          <div class="w-3/4 h-full bg-dark-blue"></div>
        </div>
      </div>
    </div>

    <div class="absolute right-[18%] top-[35%] w-72 aspect-square bg-purple-500/80 rounded-2xl hero-reveal reveal-scale opacity-0 scale-[0.98] z-10"></div>
  </section>
</template>
