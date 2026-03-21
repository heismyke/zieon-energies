<script setup lang="ts">
import { onMounted } from 'vue';
import Background from '../components/layout/Background.vue';
import Navigation from '../components/layout/Navigation.vue';
import HeroCarousel from '../components/sections/HeroCarousel.vue';
import HardwareSection from '../components/sections/HardwareSection.vue';
import ServicesGrid from '../components/sections/ServicesGrid.vue';
import WaitlistForm from '../components/sections/WaitlistForm.vue';
import BenefitsGrid from '../components/sections/BenefitsGrid.vue';
import Footer from '../components/layout/Footer.vue';

onMounted(() => {
    // Initialize Icons
    if (typeof window !== 'undefined' && (window as any).lucide) {
        (window as any).lucide.createIcons();
    }
});
</script>

<template>
    <Background />
    
    <div class="relative z-10 w-full min-h-screen flex flex-col items-center">
        <!-- Navigation - Sticky & Minimal -->
        <Navigation />
        
        <!-- Hero Carousel - Full Screen -->
        <HeroCarousel />

        <!-- Hardware Section - FIRST CLASS PRODUCTS -->
        <div class="w-full max-w-[90rem] px-4 md:px-6 mb-32 mt-32">
            <HardwareSection />
        </div>

        <!-- Services & Form - Integrated Grid --> 
        <div class="w-full max-w-[90rem] px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32"> 
            <ServicesGrid class="lg:col-span-7" />
            <WaitlistForm class="lg:col-span-5" />
        </div> 
        
        <!-- Benefits -->
        <div class="w-full max-w-[90rem] px-4 md:px-6 mb-32">
            <BenefitsGrid />
        </div>

        <!-- About / Story Section -->
        <section class="w-full max-w-[90rem] px-6 mb-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div class="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden">
                <div class="absolute inset-0 bg-neutral-900/20 z-10"></div>
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2301&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover grayscale opacity-80 hover:scale-105 transition-transform duration-[2s]" alt="Manufacturing Facility">
            </div>
            <div class="flex flex-col gap-8">
                <span class="text-[0.6rem] font-bold uppercase tracking-[0.4em] text-neutral-500">The Mission</span>
                <h2 class="text-4xl md:text-5xl font-medium text-white tracking-tight leading-tight">
                    Engineering the<br/>Future of Metering.
                </h2>
                <div class="flex flex-col gap-6 text-neutral-400 text-lg font-light leading-relaxed">
                    <p>
                        Zelavra is dedicated to modernizing the energy landscape through high-precision hardware and intelligent software.
                    </p>
                    <p>
                        In partnership with leading DisCos like Eko Disco, we manufacture prepaid meters that bring transparency, reliability, and control to every household and business.
                    </p>
                    <p>
                        No more queues. No more unexpected outages. Just clean, reliable energy management at your fingertips.
                    </p>
                </div>
                <div class="h-px w-full bg-white/10 my-4"></div>
                <div class="grid grid-cols-3 gap-8">
                    <div>
                        <h4 class="text-3xl font-bold text-white mb-1">12+</h4>
                        <p class="text-xs text-neutral-500 uppercase tracking-wider">DisCos</p>
                    </div>
                    <div>
                        <h4 class="text-3xl font-bold text-white mb-1">Local</h4>
                        <p class="text-xs text-neutral-500 uppercase tracking-wider">Manufacturing</p>
                    </div>
                    <div>
                        <h4 class="text-3xl font-bold text-white mb-1">100%</h4>
                        <p class="text-xs text-neutral-500 uppercase tracking-wider">Precision</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <div class="w-full bg-[#050505]">
            <div class="max-w-[90rem] mx-auto px-6 py-12">
                <Footer />
            </div>
        </div>
    </div>
</template>
