<script setup lang="ts"></script>

<template>
    <!-- Navigation Bar --> 
    <nav class="relative z-20 flex flex-wrap items-center justify-between gap-6 mb-10 animate-fade-in"> 
        <div class="flex items-center gap-4 group cursor-pointer"> 
            <div class="w-8 h-8 bg-brand-500 rounded flex items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(16,185,129,0.3)]"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-black"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg> 
            </div> 
            <div class="flex flex-col"> 
                <span class="text-base font-bold text-white tracking-tight font-heading leading-none">Digital CIU</span>
            </div> 
        </div> 
        <div class="hidden md:flex items-center gap-10 text-xs font-medium tracking-[0.15em] uppercase text-neutral-400"> 
            <a href="#" class="hover:text-white transition-colors duration-300">Features</a> 
            <a href="#" class="hover:text-white transition-colors duration-300">DisCos</a> 
            <a href="#" class="hover:text-white transition-colors duration-300">Support</a> 
        </div> 
        <div class="flex gap-4 items-center"> 
            <button class="group relative px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 backdrop-blur-sm overflow-hidden"> 
                <span class="relative z-10 text-xs font-medium tracking-widest uppercase text-white flex items-center gap-2"> 
                    Download App 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg> 
                </span> 
            </button> 
        </div> 
    </nav>
</template>

