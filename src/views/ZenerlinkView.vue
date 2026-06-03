<script setup lang="ts">
import { onMounted } from "vue";
import SiteHeader from "../components/site/SiteHeader.vue";
import SiteFooter from "../components/site/SiteFooter.vue";
import ZenerlinkHero from "../components/sections/zenerlink/ZenerlinkHero.vue";
import ZenerlinkFeatures from "../components/sections/zenerlink/ZenerlinkFeatures.vue";
import ZenerlinkConnection from "../components/sections/zenerlink/ZenerlinkConnection.vue";
import ZenerlinkDownload from "../components/sections/zenerlink/ZenerlinkDownload.vue";
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
  <div class="min-h-screen bg-white selection:bg-brand-500 selection:text-white">
    <SiteHeader />

    <main>
      <div class="stack-section z-[1]">
        <ZenerlinkHero />
      </div>
      <div class="stack-section z-[2]">
        <ZenerlinkFeatures />
      </div>
      <ZenerlinkConnection />
      <ZenerlinkDownload />
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
