<script setup lang="ts">
import SiteHeader from "../components/site/SiteHeader.vue";
import SiteFooter from "../components/site/SiteFooter.vue";
import PartnersHero from "../components/sections/partners/PartnersHero.vue";
import PartnersWhy from "../components/sections/partners/PartnersWhy.vue";
import PartnersTiers from "../components/sections/partners/PartnersTiers.vue";
import PartnersCTA from "../components/sections/partners/PartnersCTA.vue";
</script>

<template>
  <div class="min-h-screen bg-brand-50 selection:bg-brand-500 selection:text-white">
    <SiteHeader />

    <main>
      <PartnersHero />
      <PartnersWhy />
      <PartnersTiers />
      <PartnersCTA />
    </main>

    <SiteFooter />
  </div>
</template>
