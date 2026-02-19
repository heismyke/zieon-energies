<script setup lang="ts">
import { onMounted } from 'vue';
import Background from '../components/layout/Background.vue';
import Navigation from '../components/layout/Navigation.vue';
import HeroSection from '../components/sections/HeroSection.vue';
import ServicesGrid from '../components/sections/ServicesGrid.vue';
import WaitlistForm from '../components/sections/WaitlistForm.vue';
import CarouselSection from '../components/sections/CarouselSection.vue';
import BenefitsGrid from '../components/sections/BenefitsGrid.vue';
import LeadershipGrid from '../components/sections/LeadershipGrid.vue';
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
        
        <!-- Grid Section: Services & Interaction --> 
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 z-20 relative mb-6"> 
            <ServicesGrid />
            <WaitlistForm />
        </div> 
        
        <CarouselSection />
        
        <BenefitsGrid />

        <LeadershipGrid />
        
        <Footer />
    </main>
</template>
