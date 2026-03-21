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
                <span class="text-[0.6rem] font-bold uppercase tracking-[0.5em] text-brand-500 mb-8">About Zelavra</span>
                <h1 class="text-6xl md:text-8xl lg:text-9xl font-semibold text-white tracking-tighter leading-none mb-12">
                    Power to the<br/>Community.
                </h1>
                <p class="text-xl text-neutral-400 max-w-2xl font-light leading-relaxed">
                    We are an energy-tech and fintech company focused on building an integrated ecosystem for a more sustainable and electrified Nigeria.
                </p>
            </section>

            <!-- Mission -->
            <section class="w-full max-w-[90rem] grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
                <div class="p-12 md:p-16 rounded-[3rem] bg-white/5 border border-white/5 flex flex-col gap-8 justify-center">
                     <h2 class="text-4xl md:text-5xl font-medium text-white tracking-tight leading-tight">
                        We don't wait for power. We bring it.
                    </h2>
                    <p class="text-neutral-400 text-lg font-light leading-relaxed">
                        Zelavra addresses the fragmented experience millions of Nigerians face when buying and receiving electricity — from token purchase to meter transmission to tracking daily usage.
                    </p>
                </div>
                <div class="relative aspect-square rounded-[3rem] overflow-hidden bg-neutral-900 border border-white/5">
                    <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover grayscale opacity-40 hover:scale-105 transition-transform duration-[2s]" alt="Energy Tech">
                </div>
            </section>

            <!-- Values -->
            <section class="w-full max-w-[90rem] mb-32">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="p-10 rounded-[2.5rem] bg-[#0A0A0A] border border-white/5">
                        <h4 class="text-2xl font-medium text-white mb-4">Customer First</h4>
                        <p class="text-neutral-400 font-light leading-relaxed">We design for real households, real cashflows, and real usage patterns.</p>
                    </div>
                    <div class="p-10 rounded-[2.5rem] bg-[#0A0A0A] border border-white/5">
                        <h4 class="text-2xl font-medium text-white mb-4">Reliability</h4>
                        <p class="text-neutral-400 font-light leading-relaxed">Energy and payments are critical — our platform is built to be dependable.</p>
                    </div>
                    <div class="p-10 rounded-[2.5rem] bg-[#0A0A0A] border border-white/5">
                        <h4 class="text-2xl font-medium text-white mb-4">Transparency</h4>
                        <p class="text-neutral-400 font-light leading-relaxed">Clear pricing, clear consumption data, and clear transaction history.</p>
                    </div>
                </div>
            </section>

             <div class="w-full max-w-[90rem] py-12">
                <Footer />
            </div>
        </main>
    </div>
</template>
