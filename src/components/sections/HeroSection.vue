<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
    // Logo stagger
    document.querySelectorAll('.logo-text').forEach((el, i) => {
        // Simple fade in effect simulation
        setTimeout(() => {
            (el as HTMLElement).style.opacity = '1';
        }, 2000 + (i * 200));
    });
});
</script>

<template>
    <!-- Main Hero Content --> 
    <div class="flex-grow flex flex-col min-h-[85vh] overflow-hidden group border-white/5 rounded-[2.5rem] mt-4 mb-8 pt-0 pb-0 relative justify-center bg-[#050505] items-center text-center"> 
        <div class="z-0 absolute top-0 right-0 bottom-0 left-0"> 
            <!-- Abstract Glow / Mesh -->
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
            <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-150 contrast-200 pointer-events-none"></div>
        </div> 
        
        <div class="px-6 md:px-16 flex flex-col w-full z-10 relative items-center"> 
            <div class="mb-8 animate-fade-in" style="animation-delay: 0.5s; opacity: 0; animation-fill-mode: forwards;"> 
                <div class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-xl"> 
                    <span class="w-2 h-2 rounded-full bg-brand-500 shadow-[0_0_10px_#c8823a]"></span> 
                    <span class="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-neutral-400">Integrated Energy Ecosystem</span> 
                </div> 
            </div> 
            
            <!-- Minimal Large H1 --> 
            <h1 class="text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] text-white tracking-tighter max-w-7xl font-semibold mb-10" id="hero-title"> 
                <span class="block text-neutral-300">The Future</span> 
                <span class="block text-white">Of Energy</span> 
                <span class="block text-neutral-500 font-medium text-5xl md:text-7xl lg:text-8xl mt-4">Is Here.</span> 
            </h1> 
            
            <p class="mt-4 max-w-3xl text-base md:text-xl text-neutral-400 leading-relaxed tracking-wide font-light animate-fade-in" style="animation-delay: 1s; opacity: 0; animation-fill-mode: forwards;"> 
                From smart solar hardware to unified digital payments. Zelavra is building the complete ecosystem for sustainable power and financial freedom.
            </p> 

            <div class="mt-12 flex flex-col sm:flex-row items-center gap-4 animate-fade-in" style="animation-delay: 1.2s; opacity: 0; animation-fill-mode: forwards;">
                <button class="px-10 py-4 bg-white text-black text-sm font-bold uppercase tracking-widest rounded-full hover:bg-neutral-200 transition-colors">
                    Explore Products
                </button>
                <button class="px-10 py-4 border border-white/10 bg-white/5 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white/10 transition-colors backdrop-blur-md">
                    Our Mission
                </button>
            </div>
            
        </div> 
    </div>
</template>
