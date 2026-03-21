<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

const isMobileMenuOpen = ref(false);
</script>

<template>
    <!-- Navigation Bar --> 
    <nav class="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-8 py-5 md:px-12 transition-all duration-300 isolate"> 
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center z-[70] group relative"> 
            <span class="text-lg font-bold text-white tracking-tight group-hover:text-neutral-400 transition-colors">Zelavra</span>
        </RouterLink> 

        <!-- Centered Links (Desktop) -->
        <div class="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2"> 
            <RouterLink to="/grid" class="text-sm font-medium text-white/90 hover:bg-white/10 px-4 py-2 rounded-md transition-all duration-300">Grid</RouterLink> 
            <RouterLink to="/platform" class="text-sm font-medium text-white/90 hover:bg-white/10 px-4 py-2 rounded-md transition-all duration-300">App</RouterLink> 
            <RouterLink to="/manufacturing" class="text-sm font-medium text-white/90 hover:bg-white/10 px-4 py-2 rounded-md transition-all duration-300">Manufacturing</RouterLink> 
            <RouterLink to="/store" class="text-sm font-medium text-white/90 hover:bg-white/10 px-4 py-2 rounded-md transition-all duration-300">Store</RouterLink> 
        </div> 

        <!-- Right Side (Desktop) -->
        <div class="hidden md:flex gap-4 items-center z-[70]"> 
            <RouterLink to="/contactus" class="text-sm font-medium text-white/90 hover:bg-white/10 px-4 py-2 rounded-md transition-all duration-300">Support</RouterLink> 
        </div> 

        <!-- Mobile Menu Button -->
        <button
            class="lg:hidden z-[70] p-4 bg-white/5 backdrop-blur-md rounded-full text-white transition-all hover:bg-white/10 active:scale-95 touch-manipulation transform-gpu relative cursor-pointer"
            style="-webkit-tap-highlight-color: transparent;"
            type="button"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            aria-label="Toggle Menu"
        >
            <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <!-- Mobile Overlay -->
        <div
            v-if="isMobileMenuOpen"
            class="fixed inset-0 bg-black z-50 flex flex-col pt-32 px-10 gap-8 animate-fade-in"
        >
            <RouterLink to="/grid" class="text-2xl font-medium text-white border-b border-white/5 pb-4" @click="isMobileMenuOpen = false">Grid</RouterLink>
            <RouterLink to="/platform" class="text-2xl font-medium text-white border-b border-white/5 pb-4" @click="isMobileMenuOpen = false">App</RouterLink>
            <RouterLink to="/manufacturing" class="text-2xl font-medium text-white border-b border-white/5 pb-4" @click="isMobileMenuOpen = false">Manufacturing</RouterLink>
            <RouterLink to="/store" class="text-2xl font-medium text-white border-b border-white/5 pb-4" @click="isMobileMenuOpen = false">Store</RouterLink>
            <RouterLink to="/contactus" class="text-2xl font-medium text-white border-b border-white/5 pb-4" @click="isMobileMenuOpen = false">Support</RouterLink>
        </div>
    </nav>
</template>
