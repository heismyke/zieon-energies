<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const slides = [
    {
        title: 'The Grid',
        subtitle: 'Smart monitoring and integrated control for the modern energy network.',
        image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=2574&auto=format&fit=crop',
        ctaPrimary: 'Explore Grid',
        ctaSecondary: 'Support'
    },
    {
        title: 'Manufacturing',
        subtitle: 'Engineering world-class prepaid meters in partnership with Eko Disco.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop',
        ctaPrimary: 'Our Process',
        ctaSecondary: 'Partnerships'
    },
    {
        title: 'The App',
        subtitle: 'Everything at a glance. Control your power from the palm of your hand.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop',
        ctaPrimary: 'Download Now',
        ctaSecondary: 'Features'
    }
];

const currentIndex = ref(0);
let timer: any = null;

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % slides.length;
};

onMounted(() => {
    timer = setInterval(nextSlide, 6000);
});

onUnmounted(() => {
    if (timer) clearInterval(timer);
});
</script>

<template>
    <div class="relative w-full h-screen overflow-hidden bg-black">
        <!-- Slides -->
        <div v-for="(slide, index) in slides" :key="index" 
             class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
             :class="index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'">
            
            <!-- Background Image -->
            <div class="absolute inset-0">
                <img :src="slide.image" class="w-full h-full object-cover opacity-50 grayscale transition-transform duration-[10s]" 
                     :class="index === currentIndex ? 'scale-110' : 'scale-100'" alt="Slide background">
                <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
            </div>

            <!-- Content -->
            <div class="relative h-full flex flex-col items-center justify-start pt-[20vh] text-center px-6">
                <div class="flex flex-col gap-2 animate-fade-in-up">
                    <h1 class="text-6xl md:text-8xl lg:text-9xl font-semibold text-white tracking-tighter transition-all">
                        {{ slide.title }}
                    </h1>
                    <p class="text-lg md:text-xl text-neutral-300 font-light tracking-wide">
                        {{ slide.subtitle }}
                    </p>
                </div>

                <div class="mt-auto mb-20 flex flex-col sm:flex-row gap-6 animate-fade-in" style="animation-delay: 0.8s">
                    <button class="px-16 py-3 bg-white/90 backdrop-blur-md text-black text-xs font-bold uppercase tracking-widest rounded-md hover:bg-white transition-all shadow-xl">
                        {{ slide.ctaPrimary }}
                    </button>
                    <button class="px-16 py-3 border border-white text-white text-xs font-bold uppercase tracking-widest rounded-md hover:bg-white hover:text-black transition-all">
                        {{ slide.ctaSecondary }}
                    </button>
                </div>
            </div>
        </div>

        <!-- Indicators -->
        <div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-4">
            <button v-for="(_, index) in slides" :key="index" 
                    @click="currentIndex = index"
                    class="h-1 transition-all duration-500 rounded-full"
                    :class="index === currentIndex ? 'w-12 bg-white' : 'w-6 bg-white/20'"></button>
        </div>
    </div>
</template>

<style scoped>
.animate-fade-in-up {
    animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
}
</style>
