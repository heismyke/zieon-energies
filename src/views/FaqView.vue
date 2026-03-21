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
                <span class="text-[0.6rem] font-bold uppercase tracking-[0.5em] text-brand-500 mb-8">Support</span>
                <h1 class="text-6xl md:text-8xl lg:text-9xl font-semibold text-white tracking-tighter leading-none mb-12">
                    Questions.
                </h1>
                <p class="text-xl text-neutral-400 max-w-2xl font-light leading-relaxed">
                    Common answers about our energy hardware, digital infrastructure, and grid integration.
                </p>
            </section>

            <!-- FAQ Grid -->
            <section class="w-full max-w-4xl mb-32 flex flex-col gap-12">
                <div class="flex flex-col gap-4 border-b border-white/5 pb-8">
                    <h3 class="text-2xl font-medium text-white">How fast is delivery?</h3>
                    <p class="text-neutral-400 font-light leading-relaxed">Tokens are delivered in seconds. Hardware delivery depends on your location but typically takes 3-7 business days for installation.</p>
                </div>

                <div class="flex flex-col gap-4 border-b border-white/5 pb-8">
                    <h3 class="text-2xl font-medium text-white">What is a VPP?</h3>
                    <p class="text-neutral-400 font-light leading-relaxed">A Virtual Power Plant (VPP) is a network of decentralized energy resources, like home batteries and solar panels, that work together as a single power plant to stabilize the grid.</p>
                </div>

                <div class="flex flex-col gap-4 border-b border-white/5 pb-8">
                    <h3 class="text-2xl font-medium text-white">Is there a warranty?</h3>
                    <p class="text-neutral-400 font-light leading-relaxed">Yes. Our solar panels come with a 25-year performance warranty, and our battery storage units have a 10-year comprehensive warranty.</p>
                </div>

                <div class="flex flex-col gap-4 border-b border-white/5 pb-8">
                    <h3 class="text-2xl font-medium text-white">Can I scale my system?</h3>
                    <p class="text-neutral-400 font-light leading-relaxed">Absolutely. Our systems are modular. You can start with a single battery and add more as your storage needs grow.</p>
                </div>
            </section>

             <div class="w-full max-w-[90rem] py-12">
                <Footer />
            </div>
        </main>
    </div>
</template>
