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
                    <img src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=2574&auto=format&fit=crop" class="w-full h-full object-cover opacity-30 grayscale" alt="Grid Hero">
                    <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black"></div>
                </div>
                
                <div class="relative z-10 flex flex-col gap-6 animate-fade-in-up">
                    <h1 class="text-6xl md:text-8xl lg:text-[10rem] font-semibold text-white tracking-tighter leading-none">
                        Zelavra AI.
                    </h1>
                    <p class="text-xl md:text-2xl text-neutral-400 max-w-2xl font-light leading-relaxed">
                        Intelligent monitoring and insights for the modern grid.
                    </p>
                </div>

                <div class="absolute bottom-20 flex flex-col sm:flex-row gap-6 animate-fade-in" style="animation-delay: 0.8s">
                    <button class="px-20 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-md hover:bg-neutral-200 transition-all">
                        Request Demo
                    </button>
                    <button class="px-20 py-3 border border-white text-white text-xs font-bold uppercase tracking-widest rounded-md hover:bg-white hover:text-black transition-all">
                        For Discos
                    </button>
                </div>
            </section>

            <!-- AI Showcase -->
            <section class="w-full max-w-7xl px-6 py-40 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                <div class="relative aspect-[3/4] rounded-[3rem] overflow-hidden bg-neutral-900 border border-white/5 order-last md:order-first">
                    <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2670&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover grayscale opacity-50" alt="AI Visualization">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                <div class="flex flex-col gap-10">
                    <span class="text-[0.6rem] font-bold uppercase tracking-[0.5em] text-brand-500">The Neural Layer</span>
                    <h2 class="text-5xl md:text-6xl font-medium text-white tracking-tighter leading-tight">
                        Securing the<br/>Energy Stream.
                    </h2>
                    <p class="text-neutral-400 text-lg font-light leading-relaxed">
                        Zelavra AI is our proprietary model built specifically for Electricity Distribution Companies. It provides a comprehensive suite of tools to maintain grid integrity and optimize revenue.
                    </p>
                    
                    <div class="flex flex-col gap-8 mt-4">
                        <div class="flex gap-6 items-start">
                            <div class="w-10 h-10 rounded-xl bg-brand-500/10 flex-shrink-0 flex items-center justify-center text-brand-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                            </div>
                            <div>
                                <h4 class="text-white font-bold mb-1">Bypass Detection</h4>
                                <p class="text-sm text-neutral-500 font-light">Real-time monitoring against meter tampering and electricity theft with instant alerts.</p>
                            </div>
                        </div>
                        <div class="flex gap-6 items-start">
                            <div class="w-10 h-10 rounded-xl bg-brand-500/10 flex-shrink-0 flex items-center justify-center text-brand-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7"/><path d="M16 19h6"/><path d="M19 16v6"/><circle cx="9" cy="12" r="1"/></svg>
                            </div>
                            <div>
                                <h4 class="text-white font-bold mb-1">Remote Monitoring</h4>
                                <p class="text-sm text-neutral-500 font-light">Manage and update smart meters across the entire network without physical intervention.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Infrastructure Health Section -->
            <section class="w-full max-w-7xl px-6 py-40 grid grid-cols-1 md:grid-cols-2 gap-24 items-center border-t border-white/5">
                <div class="flex flex-col gap-10">
                    <span class="text-[0.6rem] font-bold uppercase tracking-[0.5em] text-brand-500">Predictive Maintenance</span>
                    <h2 class="text-5xl md:text-6xl font-medium text-white tracking-tighter leading-tight">
                        Infrastructure<br/>Health.
                    </h2>
                    <p class="text-neutral-400 text-lg font-light leading-relaxed">
                        Zelavra AI monitors the thermal and electrical stress on grid components. By identifying potential failure points before they occur, Discos can reduce downtime and maintenance costs.
                    </p>
                    <div class="p-8 rounded-3xl bg-white/5 border border-white/5">
                        <div class="flex items-center gap-4 mb-4">
                            <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span class="text-xs text-neutral-400 uppercase tracking-widest">Active System Scan</span>
                        </div>
                        <p class="text-sm text-neutral-300 font-light italic">"Preventative alerts have reduced our emergency repair response time by 60%."</p>
                    </div>
                </div>
                <div class="relative aspect-square rounded-[3rem] overflow-hidden bg-[#0A0A0A] border border-white/5 flex items-center justify-center p-20">
                    <div class="absolute inset-0 bg-brand-500/5 blur-[100px]"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#c8823a" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="opacity-20"><path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7"/><path d="M16 19h6"/><path d="M19 16v6"/><circle cx="9" cy="12" r="1"/></svg>
                </div>
            </section>

            <!-- Load Balancing Section -->
            <section class="w-full max-w-7xl px-6 py-40 grid grid-cols-1 md:grid-cols-2 gap-24 items-center border-t border-white/5">
                <div class="relative aspect-square rounded-[3rem] overflow-hidden bg-[#0A0A0A] border border-white/5 flex items-center justify-center p-20 order-last md:order-first">
                    <div class="absolute inset-0 bg-brand-500/5 blur-[100px]"></div>
                    <div class="flex gap-4 items-end h-32">
                        <div class="w-3 bg-brand-500/20 h-16 rounded-full"></div>
                        <div class="w-3 bg-brand-500/40 h-24 rounded-full"></div>
                        <div class="w-3 bg-brand-500/60 h-20 rounded-full"></div>
                        <div class="w-3 bg-brand-500 h-32 rounded-full shadow-[0_0_20px_#c8823a]"></div>
                        <div class="w-3 bg-brand-500/40 h-12 rounded-full"></div>
                    </div>
                </div>
                <div class="flex flex-col gap-10">
                    <span class="text-[0.6rem] font-bold uppercase tracking-[0.5em] text-brand-500">Grid Stability</span>
                    <h2 class="text-5xl md:text-6xl font-medium text-white tracking-tighter leading-tight">
                        Dynamic Load<br/>Balancing.
                    </h2>
                    <p class="text-neutral-400 text-lg font-light leading-relaxed">
                        Automatically redistribute load across the grid during peak hours. Zelavra AI uses historical consumption data to forecast demand and prevent transformer overloads.
                    </p>
                    <ul class="flex flex-col gap-4">
                        <li class="flex items-center gap-4 text-neutral-300 text-sm">
                            <div class="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                            Peak Demand Forecasting
                        </li>
                        <li class="flex items-center gap-4 text-neutral-300 text-sm">
                            <div class="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                            Automated Load Shedding Management
                        </li>
                        <li class="flex items-center gap-4 text-neutral-300 text-sm">
                            <div class="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                            Voltage Optimization
                        </li>
                    </ul>
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
