<script setup lang="ts">
import { onMounted } from 'vue';
import Background from '../components/layout/Background.vue';
import Navigation from '../components/layout/Navigation.vue';
import HeroSection from '../components/sections/HeroSection.vue';
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
    
    <!-- Main Card Container --> 
    <main class="xl:rounded-[2rem] xl:p-10 overflow-hidden flex flex-col xl:max-w-[90rem] xl:shadow-2xl z-10 bg-[#0F0F0F] w-full border-white/5 border rounded-none pt-6 pr-6 pb-6 pl-6 relative shadow-none"> 
        <Navigation />
        
        <HeroSection />

        <section class="z-20 relative mb-6 border border-white/5 rounded-2xl p-6 md:p-8 bg-[#101010]">
            <p class="text-[0.65rem] uppercase tracking-[0.2em] text-brand-400 mb-3">Discover Our Services</p>
            <h2 class="text-2xl md:text-3xl font-heading font-semibold text-white tracking-tight">Everything Energy. Everything Payments. One App.</h2>
            <p class="mt-3 max-w-3xl text-sm text-neutral-400">
                Zelavra is built around three core services that work seamlessly together — giving every Nigerian complete control over their power, their units, and their money.
            </p>
        </section>
        
        <!-- Grid Section: Services & Interaction --> 
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 z-20 relative mb-6"> 
            <ServicesGrid />
            <WaitlistForm />
        </div> 
        
        <BenefitsGrid />

        <section class="z-20 relative border border-white/10 rounded-2xl p-8 md:p-10 bg-[#101010] mb-6">
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <p class="text-[0.65rem] uppercase tracking-[0.2em] text-brand-400 mb-3">Mission</p>
                    <h2 class="text-2xl md:text-3xl font-heading font-semibold text-white tracking-tight">We don't wait for power. We bring it.</h2>
                </div>
                <p class="text-sm text-neutral-400 max-w-2xl">
                    From purchase to transmission to tracking, Zelavra removes the fragmented steps in Nigeria’s electricity experience.
                </p>
            </div>
            <div class="mt-6 inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand-500 text-black text-xs font-bold uppercase tracking-widest shadow-[0_12px_28px_rgba(200,130,58,0.22)]">
                Get The App
            </div>
        </section>
        
        <Footer />
    </main>
</template>
