<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="flex flex-col gap-12 w-full max-w-[90rem]">
        <div class="flex flex-col gap-4 text-center md:text-left">
            <span class="text-[0.6rem] font-bold uppercase tracking-[0.4em] text-brand-500">Hardware Solutions</span>
            <h2 class="text-4xl md:text-6xl font-medium text-white tracking-tight">Manufactured for Excellence.</h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Smart Meters -->
            <div class="group relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] bg-[#0A0A0A] rounded-[2.5rem] overflow-hidden border border-white/5">
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 z-10"></div>
                <img src="/ciu-logo-full.svg" class="absolute inset-0 w-full h-full object-contain p-20 grayscale opacity-40 group-hover:scale-110 transition-transform duration-[2s] group-hover:opacity-60" alt="Smart Meters">
                
                <div class="absolute bottom-10 left-10 right-10 z-20 flex flex-col gap-4">
                    <h3 class="text-3xl font-bold text-white tracking-tight">Smart Meters</h3>
                    <p class="text-sm text-neutral-400 font-light leading-relaxed max-w-xs">High-precision prepaid meters engineered for reliability and long-term durability.</p>
                    <RouterLink to="/manufacturing" class="w-fit text-[0.65rem] font-bold uppercase tracking-widest text-brand-500 mt-2 flex items-center gap-2 group/btn">
                        Learn More 
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover/btn:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </RouterLink>
                </div>
            </div>

            <!-- The Interface -->
            <div class="group relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] bg-[#0A0A0A] rounded-[2.5rem] overflow-hidden border border-white/5">
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 z-10"></div>
                <img src="/home1.png" class="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:scale-110 transition-transform duration-[2s] group-hover:opacity-50" alt="Inverter">
                
                <div class="absolute bottom-10 left-10 right-10 z-20 flex flex-col gap-4">
                    <h3 class="text-3xl font-bold text-white tracking-tight">The Interface</h3>
                    <p class="text-sm text-neutral-400 font-light leading-relaxed max-w-xs">A unified digital layer to manage your hardware, payments, and consumption patterns.</p>
                    <RouterLink to="/platform" class="w-fit text-[0.65rem] font-bold uppercase tracking-widest text-brand-500 mt-2 flex items-center gap-2 group/btn">
                        Learn More 
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover/btn:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </RouterLink>
                </div>
            </div>

            <!-- Integrated Grid -->
            <div class="group relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] bg-[#0A0A0A] rounded-[2.5rem] overflow-hidden border border-white/5">
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 z-10"></div>
                <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:scale-110 transition-transform duration-[2s] group-hover:opacity-50" alt="Integrated Grid">
                
                <div class="absolute bottom-10 left-10 right-10 z-20 flex flex-col gap-4">
                    <h3 class="text-3xl font-bold text-white tracking-tight">Integrated Grid</h3>
                    <p class="text-sm text-neutral-400 font-light leading-relaxed max-w-xs">Direct partnership with national DISCOs to ensure seamless energy distribution.</p>
                    <RouterLink to="/grid" class="w-fit text-[0.65rem] font-bold uppercase tracking-widest text-brand-500 mt-2 flex items-center gap-2 group/btn">
                        Learn More 
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover/btn:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>
