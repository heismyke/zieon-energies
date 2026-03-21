<script setup lang="ts">
import Background from '../components/layout/Background.vue';
import Navigation from '../components/layout/Navigation.vue';
import Footer from '../components/layout/Footer.vue';
import { onMounted, ref, computed } from 'vue';

onMounted(() => {
    window.scrollTo(0, 0);
});

const searchQuery = ref('');

const products = [
    {
        id: 1,
        name: "Single-Phase Smart Meter",
        price: "₦65,000",
        description: "Residential precision.",
        image: "/ciu-logo-full.svg"
    },
    {
        id: 2,
        name: "Three-Phase Industrial Meter",
        price: "₦120,000",
        description: "High-load analytics.",
        image: "/ciu-logo-full.svg"
    },
    {
        id: 3,
        name: "Zelavra Gateway",
        price: "₦25,000",
        description: "Grid connectivity unit.",
        image: "/ciu-logo-full.svg"
    },
    {
        id: 4,
        name: "Zelavra Bridge",
        price: "₦15,000",
        description: "IoT Extension.",
        image: "/ciu-logo-full.svg"
    }
];

const filteredProducts = computed(() => {
    return products.filter(p => p.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
});
</script>

<template>
    <div class="relative min-h-screen bg-[#050505] font-sans selection:bg-brand-500/30">
        <Background />
        <Navigation />

        <main class="relative z-10 w-full flex flex-col items-center pt-40 px-6">
            <!-- Apple-style minimal header -->
            <section class="w-full max-w-7xl mb-16 flex flex-col items-center text-center">
                <h1 class="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-8">
                    Store. <span class="text-neutral-500">The best way to buy the meters you love.</span>
                </h1>
                
                <!-- Search Bar -->
                <div class="relative w-full max-w-md mt-4">
                    <div class="absolute inset-y-0 left-5 flex items-center pointer-events-none text-neutral-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                    </div>
                    <input 
                        v-model="searchQuery"
                        type="text" 
                        placeholder="Search for meters..." 
                        class="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-14 pr-6 text-white text-sm focus:outline-none focus:border-brand-500/50 transition-all placeholder:text-neutral-600"
                    >
                </div>
            </section>

            <!-- Compact Grid -->
            <section class="w-full max-w-7xl px-6 mb-40">
                <div v-if="filteredProducts.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div v-for="product in filteredProducts" :key="product.id" class="group flex flex-col bg-[#111111] rounded-[1.5rem] overflow-hidden transition-all duration-500 hover:bg-[#161616]">
                        <div class="aspect-square flex items-center justify-center p-12 bg-gradient-to-b from-transparent to-black/20">
                            <img :src="product.image" class="w-full h-full object-contain opacity-80 group-hover:scale-105 transition-transform duration-[2s]" :alt="product.name">
                        </div>
                        <div class="p-6 flex flex-col gap-1">
                            <h3 class="text-base font-semibold text-white tracking-tight">{{ product.name }}</h3>
                            <p class="text-xs text-neutral-500 font-light">{{ product.description }}</p>
                            <div class="flex items-center justify-between mt-4">
                                <p class="text-xs text-white font-medium">{{ product.price }}</p>
                                <button class="px-4 py-1.5 bg-white text-black text-[0.65rem] font-bold rounded-full hover:bg-neutral-200 transition-colors">
                                    Buy
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="w-full py-20 text-center">
                    <p class="text-neutral-500">No products found for "{{ searchQuery }}".</p>
                </div>
            </section>

            <!-- Support section -->
            <section class="w-full max-w-7xl px-6 mb-48 border-t border-white/5 pt-24">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div class="flex flex-col gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c8823a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                        <h4 class="text-base font-semibold text-white">Fast, free delivery</h4>
                        <p class="text-xs text-neutral-500 font-light leading-relaxed">Enjoy ad-free delivery on every order, or pick up available items at a local partner.</p>
                    </div>
                    <div class="flex flex-col gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c8823a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                        <h4 class="text-base font-semibold text-white">Grid Certified</h4>
                        <p class="text-xs text-neutral-500 font-light leading-relaxed">Every meter is pre-certified by national DISCOs for instant grid activation.</p>
                    </div>
                    <div class="flex flex-col gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c8823a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                        <h4 class="text-base font-semibold text-white">Expert Support</h4>
                        <p class="text-xs text-neutral-500 font-light leading-relaxed">Our specialists are here to help you choose the right solution for your home or business.</p>
                    </div>
                </div>
            </section>

             <div class="w-full max-w-[90rem] py-12">
                <Footer />
            </div>
        </main>
    </div>
</template>
