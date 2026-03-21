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

        <main class="relative z-10 w-full flex flex-col items-center">
            <!-- Hero -->
            <section class="w-full h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
                <div class="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop" class="w-full h-full object-cover opacity-30 grayscale" alt="Manufacturing Hero">
                    <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black"></div>
                </div>
                
                <div class="relative z-10 flex flex-col gap-6 animate-fade-in-up">
                    <h1 class="text-6xl md:text-8xl lg:text-[10rem] font-semibold text-white tracking-tighter leading-none">
                        Precision.
                    </h1>
                    <p class="text-xl md:text-2xl text-neutral-400 max-w-2xl font-light leading-relaxed">
                        Engineering world-class prepaid meters for the Nigerian grid.
                    </p>
                </div>

                <div class="absolute bottom-20 flex flex-col sm:flex-row gap-6 animate-fade-in" style="animation-delay: 0.8s">
                    <button class="px-20 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-md hover:bg-neutral-200 transition-all">
                        Our Process
                    </button>
                    <button class="px-20 py-3 border border-white text-white text-xs font-bold uppercase tracking-widest rounded-md hover:bg-white hover:text-black transition-all">
                        Partnerships
                    </button>
                </div>
            </section>

            <!-- Partnership Section -->
            <section class="w-full max-w-7xl px-6 py-40 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                <div class="flex flex-col gap-10">
                    <span class="text-[0.6rem] font-bold uppercase tracking-[0.5em] text-brand-500">Strategic Partnership</span>
                    <h2 class="text-5xl md:text-6xl font-medium text-white tracking-tighter leading-tight">
                        Zelavra ×<br/>Eko Disco.
                    </h2>
                    <p class="text-neutral-400 text-lg font-light leading-relaxed">
                        In collaboration with Eko Electricity Distribution Company, we've developed a hardware standard that ensures 100% compatibility and instant deployment across the network.
                    </p>
                    
                    <div class="grid grid-cols-2 gap-10 border-t border-white/5 pt-10">
                        <div>
                            <h4 class="text-3xl font-bold text-white mb-1">Local</h4>
                            <p class="text-xs text-neutral-500 uppercase tracking-wider">Manufacturing</p>
                        </div>
                        <div>
                            <h4 class="text-3xl font-bold text-white mb-1">Grid</h4>
                            <p class="text-xs text-neutral-500 uppercase tracking-wider">Certified</p>
                        </div>
                    </div>
                </div>

                <div class="relative aspect-[3/4] rounded-[3rem] overflow-hidden bg-neutral-900 border border-white/5">
                    <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2670&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover grayscale opacity-50" alt="Factory Floor">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
            </section>

            <!-- Manufacturing Process -->
            <section class="w-full max-w-7xl px-6 mb-48">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="p-10 rounded-[2.5rem] bg-white/5 border border-white/5 flex flex-col gap-6">
                        <div class="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center border border-brand-500/20 text-brand-500">
                            <span class="font-bold">01</span>
                        </div>
                        <h4 class="text-xl font-bold text-white">Component Sourcing</h4>
                        <p class="text-sm text-neutral-500 font-light leading-relaxed">Using only high-grade industrial sensors and processing units to ensure long-term stability.</p>
                    </div>
                    <div class="p-10 rounded-[2.5rem] bg-white/5 border border-white/5 flex flex-col gap-6">
                        <div class="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center border border-brand-500/20 text-brand-500">
                            <span class="font-bold">02</span>
                        </div>
                        <h4 class="text-xl font-bold text-white">Automated Assembly</h4>
                        <p class="text-sm text-neutral-500 font-light leading-relaxed">State-of-the-art robotic assembly lines maintain 100% precision across every meter produced.</p>
                    </div>
                    <div class="p-10 rounded-[2.5rem] bg-white/5 border border-white/5 flex flex-col gap-6">
                        <div class="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center border border-brand-500/20 text-brand-500">
                            <span class="font-bold">03</span>
                        </div>
                        <h4 class="text-xl font-bold text-white">Testing</h4>
                        <p class="text-sm text-neutral-500 font-light leading-relaxed">Every unit undergoes 48 hours of continuous stress testing and grid simulation.</p>
                    </div>
                </div>
            </section>

             <div class="w-full max-w-[90rem] py-12">
                <Footer />
            </div>
        </main>
    </div>
</template>

<style scoped>
.animate-fade-in-up {
    animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
}
</style>
