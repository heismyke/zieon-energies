<script setup lang="ts">
import SiteHeader from "../components/site/SiteHeader.vue";
import SiteFooter from "../components/site/SiteFooter.vue";
import AboutHero from "../components/sections/about/AboutHero.vue";
import AboutVision from "../components/sections/about/AboutVision.vue";
import AboutValues from "../components/sections/about/AboutValues.vue";
import AboutTeam from "../components/sections/about/AboutTeam.vue";
import AboutFounder from "../components/sections/about/AboutFounder.vue";
import AboutClosing from "../components/sections/about/AboutClosing.vue";
import AboutCopyright from "../components/sections/about/AboutCopyright.vue";
</script>

<template>
  <div class="min-h-screen bg-brand-50 selection:bg-brand-500 selection:text-white">
    <SiteHeader />

    <main>
      <AboutHero />
      <AboutVision />
      <AboutValues />
      <AboutTeam />
      <AboutFounder />
      <AboutClosing />
      <AboutCopyright />
    </main>

    <SiteFooter />
  </div>
</template>
