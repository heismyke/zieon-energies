<script setup lang="ts">
import Background from '../components/layout/Background.vue';
import Navigation from '../components/layout/Navigation.vue';
import Footer from '../components/layout/Footer.vue';
import { onMounted } from 'vue';

onMounted(() => {
    window.scrollTo(0, 0);
});
</script>

<template>
    <div class="relative min-h-screen bg-[#050505] font-sans selection:bg-brand-500/30">
        <Background />
        <Navigation />

        <main class="relative z-10 w-full flex flex-col items-center pt-32 px-6">
            <!-- Hero -->
            <section class="w-full max-w-[90rem] mb-32 flex flex-col items-center text-center">
                <span class="text-[0.6rem] font-bold uppercase tracking-[0.5em] text-brand-500 mb-8">Developers</span>
                <h1 class="text-6xl md:text-8xl lg:text-9xl font-semibold text-white tracking-tighter leading-none mb-12">
                    Build.
                </h1>
                <p class="text-xl text-neutral-400 max-w-2xl font-light leading-relaxed">
                    Integrate our energy and payment infrastructure directly into your applications.
                </p>
            </section>

            <!-- API Showcase -->
            <section class="w-full max-w-6xl mb-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div class="flex flex-col gap-10">
                    <div class="flex flex-col gap-4">
                        <h3 class="text-3xl font-medium text-white tracking-tight">Powerful APIs.</h3>
                        <p class="text-neutral-400 font-light leading-relaxed">
                            Our RESTful APIs allow you to validate meters, purchase tokens, and monitor consumption programmatically. Build custom dashboards for your commercial clients or integrate energy management into your smart home apps.
                        </p>
                    </div>
                    
                    <div class="flex flex-col gap-6">
                        <div class="flex items-center gap-4 text-white">
                            <div class="w-2 h-2 rounded-full bg-brand-500"></div>
                            <span class="text-sm font-bold uppercase tracking-widest">Real-time Webhooks</span>
                        </div>
                        <div class="flex items-center gap-4 text-white">
                            <div class="w-2 h-2 rounded-full bg-brand-500"></div>
                            <span class="text-sm font-bold uppercase tracking-widest">Sandbox Environment</span>
                        </div>
                        <div class="flex items-center gap-4 text-white">
                            <div class="w-2 h-2 rounded-full bg-brand-500"></div>
                            <span class="text-sm font-bold uppercase tracking-widest">SDKs in 4+ Languages</span>
                        </div>
                    </div>
                </div>

                <div class="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md overflow-hidden shadow-2xl">
                    <div class="flex gap-2 mb-6">
                        <div class="w-3 h-3 rounded-full bg-white/20"></div>
                        <div class="w-3 h-3 rounded-full bg-white/20"></div>
                        <div class="w-3 h-3 rounded-full bg-white/20"></div>
                    </div>
                    <pre class="text-xs text-neutral-300 font-mono overflow-x-auto"><code><span class="text-brand-300">curl</span> -X POST https://api.zelavra.com/v1/meters/validate \
-H <span class="text-neutral-500">"Authorization: Bearer pk_live_xxx"</span> \
-H <span class="text-neutral-500">"Content-Type: application/json"</span> \
-d '{
  <span class="text-brand-300">"meter_number"</span>: <span class="text-neutral-500">"12345678901"</span>,
  <span class="text-brand-300">"disco"</span>: <span class="text-neutral-500">"IKEDC"</span>
}'</code></pre>
                </div>
            </section>

             <div class="w-full max-w-[90rem] py-12">
                <Footer />
            </div>
        </main>
    </div>
</template>
