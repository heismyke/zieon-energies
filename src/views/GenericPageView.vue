<script setup lang="ts">
import SiteHero from "../components/site/SiteHero.vue";
import SiteFooter from "../components/site/SiteFooter.vue";
import SiteHeader from "../components/site/SiteHeader.vue";

defineProps<{
  eyebrow: string;
  title: string;
  description: string;
}>();
</script>

<template>
  <div class="site-page">
    <SiteHeader />

    <main class="generic-page">
      <SiteHero :eyebrow="eyebrow" :title="title" :summary="description" />
    </main>

    <SiteFooter />
  </div>
</template>
