<script setup lang="ts">
import { onMounted } from "vue";
import SiteHeader from "../components/site/SiteHeader.vue";
import SiteFooter from "../components/site/SiteFooter.vue";
import ProductHero from "../components/sections/product/ProductHero.vue";
import ProductAppTeaser from "../components/sections/product/ProductAppTeaser.vue";
import ProductProblemSolution from "../components/sections/product/ProductProblemSolution.vue";
import ProductMeter from "../components/sections/product/ProductMeter.vue";
import ProductTech from "../components/sections/product/ProductTech.vue";
import { gsap } from "../lib/gsap";

onMounted(() => {
  const stackSections = document.querySelectorAll(".stack-section");
  
  stackSections.forEach((section, index) => {
    if (index === stackSections.length - 1) return;
    
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
      <ProductHero />
      <ProductAppTeaser />
      <div class="stack-section z-[1]">
        <ProductProblemSolution />
      </div>
      <div class="stack-section z-[2]">
        <ProductMeter />
      </div>
      <ProductTech />
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
