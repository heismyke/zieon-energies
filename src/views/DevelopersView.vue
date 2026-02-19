<script setup lang="ts">
import { onMounted } from "vue";
import Background from "../components/layout/Background.vue";
import Navigation from "../components/layout/Navigation.vue";
import Footer from "../components/layout/Footer.vue";

onMounted(() => {
  if (typeof window !== "undefined" && (window as any).lucide) {
    (window as any).lucide.createIcons();
  }
});
</script>

<template>
  <Background />
  <main
    class="xl:rounded-[2rem] xl:p-10 overflow-hidden flex flex-col xl:max-w-[90rem] xl:shadow-2xl z-10 bg-[#0F0F0F] w-full border-white/5 border rounded-none pt-6 pr-6 pb-6 pl-6 relative shadow-none"
  >
    <Navigation />

    <section class="z-20 relative mb-6 border border-white/10 rounded-2xl p-8 md:p-12 bg-[#101010]">
      <p class="text-[0.65rem] uppercase tracking-[0.2em] text-brand-400 mb-3">Developers</p>
      <h1 class="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">Build On Pulselink APIs</h1>
      <p class="mt-4 max-w-2xl text-sm text-neutral-400">
        Integrate token purchase, meter validation, and transaction webhooks directly into your apps.
      </p>
    </section>

    <section class="z-20 relative grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
      <div class="bg-[#161616] border border-white/5 rounded-xl p-6">
        <p class="text-[0.6rem] uppercase tracking-widest text-brand-500 mb-4">Endpoints</p>
        <ul class="space-y-2 text-xs text-neutral-300">
          <li><code>POST /v1/meters/validate</code></li>
          <li><code>POST /v1/tokens/purchase</code></li>
          <li><code>GET /v1/transactions/:id</code></li>
          <li><code>POST /v1/webhooks/events</code></li>
        </ul>
      </div>
      <div class="bg-[#161616] border border-white/5 rounded-xl p-6">
        <p class="text-[0.6rem] uppercase tracking-widest text-brand-500 mb-4">Quickstart</p>
        <pre class="text-xs text-neutral-300 overflow-x-auto"><code>curl -X POST https://api.pulselink.com/v1/meters/validate \
-H "Authorization: Bearer pk_live_xxx" \
-H "Content-Type: application/json" \
-d '{"meter_number":"12345678901","disco":"IKEDC"}'</code></pre>
      </div>
    </section>

    <Footer />
  </main>
</template>
