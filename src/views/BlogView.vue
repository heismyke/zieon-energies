<script setup lang="ts">
import SiteHeader from "../components/site/SiteHeader.vue";
import SiteFooter from "../components/site/SiteFooter.vue";
import BlogHero from "../components/sections/blog/BlogHero.vue";
import BlogList from "../components/sections/blog/BlogList.vue";
</script>

<template>
  <div class="min-h-screen bg-white selection:bg-brand-500 selection:text-white">
    <SiteHeader />

    <main>
      <BlogHero />
      <BlogList />
    </main>

    <SiteFooter />
  </div>
</template>
