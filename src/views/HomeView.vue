<script setup lang="ts">
import { onMounted } from "vue";
import SiteHeader from "../components/site/SiteHeader.vue";
import SiteFooter from "../components/site/SiteFooter.vue";
import HomeHero from "../components/sections/home/HomeHero.vue";
import HomeProblem from "../components/sections/home/HomeProblem.vue";
import HomeBenefits from "../components/sections/home/HomeBenefits.vue";
import HomeEcosystem from "../components/sections/home/HomeEcosystem.vue";
import HomeFeature from "../components/sections/home/HomeFeature.vue";
import HomeSteps from "../components/sections/home/HomeSteps.vue";
import HomeClosing from "../components/sections/home/HomeClosing.vue";
import HomeWaitlist from "../components/sections/home/HomeWaitlist.vue";
import { gsap } from "../lib/gsap";

onMounted(() => {
  // Stacking logic for core sections
  const stackSections = document.querySelectorAll(".stack-section");
  
  stackSections.forEach((section, index) => {
    if (index === stackSections.length - 1) return; // Last section doesn't dim
    
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
});
</script>

<template>
  <div class="min-h-screen bg-brand-50 selection:bg-brand-500 selection:text-white">
    <SiteHeader />

    <main>
      <HomeHero />
      <div class="stack-section z-[1]">
        <HomeProblem />
      </div>
      <div class="stack-section z-[2]">
        <HomeBenefits />
      </div>
      <div class="stack-section z-[3]">
        <HomeEcosystem />
      </div>
      <HomeFeature />
      <HomeSteps />
      <HomeClosing />
      <HomeWaitlist />
    </main>

    <SiteFooter />
  </div>
</template>

<style scoped>
.stack-section {
  position: relative;
  width: 100%;
  will-change: transform, opacity;
}
</style>
