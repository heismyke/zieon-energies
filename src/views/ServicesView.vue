<script setup lang="ts">
import Background from '../components/layout/Background.vue';
import Navigation from '../components/layout/Navigation.vue';
import Footer from '../components/layout/Footer.vue';
import HardwareSection from '../components/sections/HardwareSection.vue';
import { onMounted } from 'vue';

onMounted(() => {
    window.scrollTo(0, 0);
});
</script>

<template>
    <div class="relative min-h-screen bg-[#050505] font-sans selection:bg-brand-500/30">
        <Background />
        <Navigation />

        <main class="relative z-10 w-full flex flex-col items-center pt-32">
            <!-- Hero -->
            <section class="w-full max-w-[90rem] px-6 mb-32 flex flex-col items-center text-center">
                <span class="text-[0.6rem] font-bold uppercase tracking-[0.5em] text-brand-500 mb-8 animate-fade-in">Energy Hardware</span>
                <h1 class="text-6xl md:text-8xl lg:text-9xl font-semibold text-white tracking-tighter leading-[0.9] mb-12 animate-fade-in" style="animation-delay: 0.2s">
                    Powering the<br/>Next Generation.
                </h1>
                <p class="text-xl text-neutral-400 max-w-2xl font-light leading-relaxed animate-fade-in" style="animation-delay: 0.4s">
                    Sustainable energy solutions designed for independence. Our hardware ecosystem provides reliable power from source to storage.
                </p>
            </section>

            <!-- Hardware Display -->
            <div class="w-full max-w-[90rem] px-4 md:px-6 mb-32 animate-fade-in" style="animation-delay: 0.6s">
                <HardwareSection />
            </div>

            <!-- Specifications / Details -->
            <section class="w-full max-w-7xl px-6 mb-32 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                <div class="flex flex-col gap-12">
                    <div class="flex flex-col gap-4">
                        <h2 class="text-4xl font-medium text-white tracking-tight">Built for Longevity.</h2>
                        <p class="text-neutral-400 font-light leading-relaxed">
                            Every component in our energy system is selected for its durability and efficiency in diverse climates. From high-conversion solar cells to long-cycle lithium batteries.
                        </p>
                    </div>
                    
                    <div class="grid grid-cols-1 gap-6">
                        <div class="flex flex-col gap-2 p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                            <h4 class="text-white font-bold">Smart Monitoring</h4>
                            <p class="text-sm text-neutral-500">Integrated IoT sensors track every watt generated and consumed in real-time via the Zelavra App.</p>
                        </div>
                        <div class="flex flex-col gap-2 p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                            <h4 class="text-white font-bold">Weather Resistance</h4>
                            <p class="text-sm text-neutral-500">IP65 rated hardware ensures your energy system remains safe and functional in any environment.</p>
                        </div>
                        <div class="flex flex-col gap-2 p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                            <h4 class="text-white font-bold">Modular Expansion</h4>
                            <p class="text-sm text-neutral-500">Start with a single battery and scale your energy capacity as your home or business needs grow.</p>
                        </div>
                    </div>
                </div>
                
                <div class="relative aspect-square rounded-[3rem] overflow-hidden bg-neutral-900 border border-white/5">
                    <img src="https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=2600&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover grayscale opacity-60" alt="Energy Detail">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                </div>
            </section>

            <!-- CTA -->
            <section class="w-full max-w-[90rem] px-6 py-40 text-center bg-[#0A0A0A] border-y border-white/5">
                <h2 class="text-4xl md:text-7xl font-medium text-white tracking-tighter mb-12">Start Your Energy Journey.</h2>
                <div class="flex flex-col md:flex-row justify-center gap-6">
                    <button class="px-12 py-5 bg-white text-black text-sm font-bold uppercase tracking-widest rounded-full hover:bg-neutral-200 transition-colors">
                        Request a Quote
                    </button>
                    <button class="px-12 py-5 border border-white/10 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white/10 transition-colors backdrop-blur-md">
                        Contact Sales
                    </button>
                </div>
            </section>

            <div class="w-full max-w-[90rem] px-6 py-12">
                <Footer />
            </div>
        </main>
    </div>
</template>
