<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "../../../lib/gsap";

const tiers = [
  {
    num: "01",
    title: "Authorized Resellers",
    eyebrow: "DISTRIBUTION",
    description: "Earn significant commissions by bringing Zieon smart meters to your local market. We provide the hardware stock, you provide the reach.",
    benefits: ["Wholesale pricing", "Marketing kits", "Region exclusivity"]
  },
  {
    num: "02",
    title: "Certified Installers",
    eyebrow: "TECHNICAL",
    description: "Get trained and certified to install the next generation of smart meters. Join our network of rapid-response technicians.",
    benefits: ["Professional training", "Install fees", "Priority support"]
  },
  {
    num: "03",
    title: "Estate Developers",
    eyebrow: "INFRASTRUCTURE",
    description: "Integrate Zenerlink-ready infrastructure into your housing projects. Offer your residents 24/7 automated energy management.",
    benefits: ["Bulk discounts", "Property portal", "Increased property value"]
  }
];

onMounted(() => {
  const stepElements = document.querySelectorAll(".tier-stack");
  
  stepElements.forEach((section, index) => {
    if (index === stepElements.length - 1) return;
    
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

  // Entry reveals
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
  <section class="flex flex-col bg-brand-50 pt-24">
    <div class="max-w-7xl mx-auto px-6 mb-20 text-center reveal-up">
       <p class="eyebrow text-brand-700 mb-6">Partnership Tiers</p>
       <h2 class="display-title">A role for every scale.</h2>
    </div>

    <div 
      v-for="(tier, index) in tiers" 
      :key="tier.title" 
      class="tier-stack"
      :style="{ zIndex: index + 1 }"
    >
      <article class="grid grid-cols-1 md:grid-cols-2 items-center gap-16 md:gap-32 p-12 md:p-32 bg-brand-50 border-b border-black/5 overflow-hidden min-h-[80vh]">
        <div class="max-w-md reveal-left opacity-0 translate-x-[-30px]">
          <p class="eyebrow text-brand-700 mb-8">{{ tier.eyebrow }}</p>
          <h3 class="display-title text-4xl md:text-6xl mb-6">{{ tier.title }}</h3>
          <p class="copy-text text-black/70 mb-10 text-xl">{{ tier.description }}</p>
          <ul class="space-y-4">
            <li v-for="benefit in tier.benefits" :key="benefit" class="flex items-center gap-4 text-sm font-bold uppercase tracking-widest opacity-60">
               <div class="w-2 h-2 bg-brand-500 rounded-full"></div>
               {{ benefit }}
            </li>
          </ul>
        </div>
        <div class="aspect-square bg-brand-100 rounded-[4rem] overflow-hidden p-12 flex items-center justify-center reveal-right opacity-0 translate-x-[30px]">
           <div class="w-full h-full rounded-3xl bg-brand-500 flex items-center justify-center text-white text-8xl font-heading opacity-10">
             {{ tier.num }}
           </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.tier-stack {
  position: relative;
  width: 100%;
  will-change: transform, opacity;
}
</style>
