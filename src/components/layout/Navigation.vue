<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

const isMobileMenuOpen = ref(false);
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<template>
    <!-- Navigation Bar --> 
    <nav class="relative z-20 flex flex-wrap items-center justify-between gap-4 mb-10 animate-fade-in"> 
        <div class="flex items-center gap-4 group cursor-pointer"> 
            <div class="w-8 h-8 bg-brand-500 rounded flex items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(200,130,58,0.35)]"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-black"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg> 
            </div> 
            <div class="flex flex-col"> 
                <RouterLink to="/" class="text-base font-bold text-white tracking-tight font-heading leading-none">Zelavra</RouterLink>
            </div> 
        </div> 
        <div class="hidden md:flex items-center gap-10 text-xs font-medium tracking-[0.15em] uppercase text-neutral-400"> 
            <RouterLink to="/services" class="hover:text-white transition-colors duration-300">Services</RouterLink> 
            <RouterLink to="/platform" class="hover:text-white transition-colors duration-300">Platform</RouterLink> 
            <RouterLink to="/company" class="hover:text-white transition-colors duration-300">Company</RouterLink> 
            <RouterLink to="/faq" class="hover:text-white transition-colors duration-300">FAQ</RouterLink> 
            <RouterLink to="/contactus" class="hover:text-white transition-colors duration-300">Contact Us</RouterLink> 
        </div> 
        <div class="flex gap-2 items-center"> 
            <button
                class="md:hidden group relative px-3 py-2 rounded-full bg-brand-500/15 hover:bg-brand-500/25 border border-brand-500/30 transition-all duration-300 backdrop-blur-sm overflow-hidden"
                type="button"
                @click="isMobileMenuOpen = !isMobileMenuOpen"
                :aria-expanded="isMobileMenuOpen"
                aria-label="Toggle navigation menu"
            >
                <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-brand-300"><line x1="3" x2="21" y1="6" y2="6"></line><line x1="3" x2="21" y1="12" y2="12"></line><line x1="3" x2="21" y1="18" y2="18"></line></svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-brand-300"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
            </button>
            <button class="group relative px-5 py-2 rounded-full bg-brand-500 hover:bg-brand-400 border border-brand-500/40 transition-all duration-300 backdrop-blur-sm overflow-hidden shadow-[0_12px_30px_rgba(200,130,58,0.25)]"> 
                <span class="relative z-10 text-xs font-medium tracking-widest uppercase text-black flex items-center gap-2"> 
                    Download App 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg> 
                </span> 
            </button> 
        </div> 

        <div
            v-if="isMobileMenuOpen"
            class="md:hidden w-full border border-white/10 rounded-xl bg-[#151515]/95 backdrop-blur-sm p-4 flex flex-col gap-3 text-xs font-medium tracking-[0.15em] uppercase text-neutral-300"
        >
            <RouterLink to="/services" class="hover:text-white transition-colors duration-300" @click="closeMobileMenu">Services</RouterLink>
            <RouterLink to="/platform" class="hover:text-white transition-colors duration-300" @click="closeMobileMenu">Platform</RouterLink>
            <RouterLink to="/company" class="hover:text-white transition-colors duration-300" @click="closeMobileMenu">Company</RouterLink>
            <RouterLink to="/faq" class="hover:text-white transition-colors duration-300" @click="closeMobileMenu">FAQ</RouterLink>
            <RouterLink to="/contactus" class="hover:text-white transition-colors duration-300" @click="closeMobileMenu">Contact Us</RouterLink>
        </div>
    </nav>
</template>
