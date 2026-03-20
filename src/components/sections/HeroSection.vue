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
    <div class="flex-grow flex flex-col md:py-0 lg:h-[600px] border-y overflow-hidden group h-[450px] border-white/5 rounded-2xl mt-4 mb-8 pt-0 pb-0 relative justify-center bg-[#080808]"> 
        <div class="z-0 absolute top-0 right-0 bottom-0 left-0"> 
            <!-- Abstract Tech Image -->
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop" alt="Energy Network" class="group-hover:scale-105 transition-transform duration-[3s] ease-out opacity-20 w-full h-full object-cover grayscale mix-blend-luminosity -translate-y-8 scale-100"> 
            <div class="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/80 to-transparent"></div> 
            <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
        </div> 
        
        <div class="md:px-16 flex flex-col w-full h-full z-10 pr-8 pl-8 relative justify-center"> 
            <div class="mb-6 animate-fade-in" style="animation-delay: 1.2s; opacity: 0; animation-fill-mode: forwards;"> 
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/20 bg-brand-500/5 backdrop-blur-md"> 
                    <span class="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span> 
                    <span class="text-[0.65rem] font-semibold uppercase tracking-widest text-brand-400">Integrated Platform</span> 
                </div> 
            </div> 
            
            <!-- Animated H1 --> 
            <h1 class="font-heading text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-white tracking-tight mix-blend-normal max-w-6xl" id="hero-title"> 
                <span class="block opacity-90 split-text font-medium"><span class="char-wrapper">E</span><span class="char-wrapper">v</span><span class="char-wrapper">e</span><span class="char-wrapper">r</span><span class="char-wrapper">y</span><span class="char-wrapper">t</span><span class="char-wrapper">h</span><span class="char-wrapper">i</span><span class="char-wrapper">n</span><span class="char-wrapper">g</span><span class="char-wrapper"> </span><span class="char-wrapper">E</span><span class="char-wrapper">n</span><span class="char-wrapper">e</span><span class="char-wrapper">r</span><span class="char-wrapper">g</span><span class="char-wrapper">y</span><span class="char-wrapper">.</span></span> 
                <span class="block text-neutral-500/50 ml-0 md:ml-1 split-text font-bold"><span class="char-wrapper">E</span><span class="char-wrapper">v</span><span class="char-wrapper">e</span><span class="char-wrapper">r</span><span class="char-wrapper">y</span><span class="char-wrapper">t</span><span class="char-wrapper">h</span><span class="char-wrapper">i</span><span class="char-wrapper">n</span><span class="char-wrapper">g</span><span class="char-wrapper"> </span><span class="char-wrapper">P</span><span class="char-wrapper">a</span><span class="char-wrapper">y</span><span class="char-wrapper">m</span><span class="char-wrapper">e</span><span class="char-wrapper">n</span><span class="char-wrapper">t</span><span class="char-wrapper">s</span><span class="char-wrapper">.</span></span> 
                <span class="block font-light text-white ml-8 md:ml-24 split-text mt-2"><span class="char-wrapper">O</span><span class="char-wrapper">n</span><span class="char-wrapper">e</span><span class="char-wrapper"> </span><span class="char-wrapper">A</span><span class="char-wrapper">p</span><span class="char-wrapper">p</span><span class="char-wrapper">.</span></span> 
            </h1> 
            
            <p class="mt-8 max-w-lg text-sm md:text-base text-neutral-400 leading-relaxed tracking-wide font-light animate-fade-in" style="animation-delay: 1.5s; opacity: 0; animation-fill-mode: forwards;"> 
                Zelavra is a Nigerian energy-tech and fintech company connecting electricity distribution, smart metering, and digital payments into one seamless experience. We don't wait for power. We bring it.
            </p> 
            
            <!-- Partners Ticker --> 
            <div class="absolute bottom-10 left-8 md:left-16 right-8 flex flex-col md:flex-row md:items-center justify-between border-t border-white/10 pt-6 animate-fade-in gap-4" style="animation-delay: 1.8s; opacity: 0; animation-fill-mode: forwards;"> 
                <span class="text-[0.6rem] uppercase tracking-widest text-neutral-600 font-semibold">Works with all Nigerian DisCos</span> 
                <div class="flex items-center gap-8 opacity-60 transition-all duration-500" id="logo-container"> 
                    <span class="text-xs font-mono font-semibold tracking-tight logo-text hover:text-white transition-colors cursor-default">AEDC</span> 
                    <span class="text-xs font-mono font-semibold tracking-wide logo-text hover:text-white transition-colors cursor-default">EKEDC</span> 
                    <span class="text-xs font-mono font-semibold tracking-widest logo-text hover:text-white transition-colors cursor-default">IKEDC</span> 
                    <span class="text-xs font-mono font-semibold logo-text hover:text-white transition-colors cursor-default">IBEDC</span> 
                    <span class="text-xs font-mono font-semibold logo-text hover:text-white transition-colors cursor-default">EEDC</span>
                    <span class="text-xs font-mono font-semibold logo-text hover:text-white transition-colors cursor-default">PHCN</span>
                </div> 
            </div> 
        </div> 
    </div>
</template>
