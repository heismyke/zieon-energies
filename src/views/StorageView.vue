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
                    <img src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2671&auto=format&fit=crop" class="w-full h-full object-cover opacity-30 grayscale" alt="Storage Hero">
                    <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black"></div>
                </div>
                
                <div class="relative z-10 flex flex-col gap-6 animate-fade-in-up">
                    <h1 class="text-6xl md:text-8xl lg:text-[10rem] font-semibold text-white tracking-tighter leading-none">
                        Storage.
                    </h1>
                    <p class="text-xl md:text-2xl text-neutral-400 max-w-2xl font-light leading-relaxed">
                        Sustainable energy, stored for when you need it most.
                    </p>
                </div>

                <div class="absolute bottom-20 flex flex-col sm:flex-row gap-6 animate-fade-in" style="animation-delay: 0.8s">
                    <button class="px-20 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-md hover:bg-neutral-200 transition-all">
                        Order Now
                    </button>
                    <button class="px-20 py-3 border border-white text-white text-xs font-bold uppercase tracking-widest rounded-md hover:bg-white hover:text-black transition-all">
                        Specs
                    </button>
                </div>
            </section>

            <!-- Product Showcase -->
            <section class="w-full max-w-7xl px-6 py-40 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                <div class="flex flex-col gap-10">
                    <span class="text-[0.6rem] font-bold uppercase tracking-[0.5em] text-brand-500">Zelavra Storage</span>
                    <h2 class="text-5xl md:text-6xl font-medium text-white tracking-tighter leading-tight">
                        Power for the<br/>Unexpected.
                    </h2>
                    <p class="text-neutral-400 text-lg font-light leading-relaxed">
                        Our Lithium Iron Phosphate (LiFePO4) battery packs are designed to handle thousands of cycles with minimal degradation. Integrated with our smart BMS, it's the safest way to store energy in your home.
                    </p>
                    
                    <div class="grid grid-cols-2 gap-10 border-t border-white/5 pt-10">
                        <div>
                            <h4 class="text-3xl font-bold text-white mb-1">10kWh</h4>
                            <p class="text-xs text-neutral-500 uppercase tracking-wider">Capacity</p>
                        </div>
                        <div>
                            <h4 class="text-3xl font-bold text-white mb-1">5kW</h4>
                            <p class="text-xs text-neutral-500 uppercase tracking-wider">Peak Discharge</p>
                        </div>
                    </div>
                </div>
                
                <div class="relative aspect-[3/4] rounded-[3rem] overflow-hidden bg-neutral-900 border border-white/5">
                    <img src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2670&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover grayscale opacity-50" alt="Battery Detail">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
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
