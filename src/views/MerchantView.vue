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
                <span class="text-[0.6rem] font-bold uppercase tracking-[0.5em] text-brand-500 mb-8">Merchants</span>
                <h1 class="text-6xl md:text-8xl lg:text-9xl font-semibold text-white tracking-tighter leading-none mb-12">
                    Scale.
                </h1>
                <p class="text-xl text-neutral-400 max-w-2xl font-light leading-relaxed">
                    A comprehensive merchant portal for high-volume energy vending and hardware distribution.
                </p>
            </section>

            <!-- Stats -->
            <section class="w-full max-w-[90rem] mb-32 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="p-12 rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 flex flex-col items-center text-center gap-4 group hover:bg-white/5 transition-all">
                    <span class="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-neutral-500 group-hover:text-brand-500 transition-colors">Settlement</span>
                    <h3 class="text-6xl font-bold text-white tracking-tighter">T+0</h3>
                    <p class="text-neutral-500 font-light max-w-[12rem]">Same-day merchant settlement windows for improved cashflow.</p>
                </div>
                <div class="p-12 rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 flex flex-col items-center text-center gap-4 group hover:bg-white/5 transition-all">
                    <span class="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-neutral-500 group-hover:text-brand-500 transition-colors">Vending Uptime</span>
                    <h3 class="text-6xl font-bold text-white tracking-tighter">99.9%</h3>
                    <p class="text-neutral-400 font-light max-w-[12rem]">Engineered for high-volume transactions without interruption.</p>
                </div>
                <div class="p-12 rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 flex flex-col items-center text-center gap-4 group hover:bg-white/5 transition-all">
                    <span class="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-neutral-500 group-hover:text-brand-500 transition-colors">Dedicated Support</span>
                    <h3 class="text-6xl font-bold text-white tracking-tighter">24/7</h3>
                    <p class="text-neutral-400 font-light max-w-[12rem]">Priority access to our technical and operational support teams.</p>
                </div>
            </section>

            <!-- CTA -->
            <section class="w-full max-w-[90rem] px-6 py-40 text-center bg-[#0A0A0A] border-y border-white/5">
                <h2 class="text-4xl md:text-7xl font-medium text-white tracking-tighter mb-12">Become a Partner.</h2>
                <div class="flex flex-col md:flex-row justify-center gap-6">
                    <button class="px-12 py-5 bg-white text-black text-sm font-bold uppercase tracking-widest rounded-full hover:bg-neutral-200 transition-colors">
                        Register Now
                    </button>
                    <button class="px-12 py-5 border border-white/10 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white/10 transition-colors backdrop-blur-md">
                        Talk to Sales
                    </button>
                </div>
            </section>

             <div class="w-full max-w-[90rem] py-12">
                <Footer />
            </div>
        </main>
    </div>
</template>
