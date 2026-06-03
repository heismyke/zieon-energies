<script setup lang="ts">
import SiteHeader from "../components/site/SiteHeader.vue";
import SiteFooter from "../components/site/SiteFooter.vue";
import ContactHero from "../components/sections/contact/ContactHero.vue";
import ContactForm from "../components/sections/contact/ContactForm.vue";
import ContactFAQ from "../components/sections/contact/ContactFAQ.vue";
</script>

<template>
  <div class="min-h-screen bg-white selection:bg-brand-500 selection:text-white">
    <SiteHeader />

    <main>
      <ContactHero />
      <ContactForm />
      <ContactFAQ />
    </main>

    <SiteFooter />
  </div>
</template>
