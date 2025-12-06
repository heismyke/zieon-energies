<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

let timer: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
    // Team Carousel Logic (Preserved 3D Effect)
    const cards = document.querySelectorAll('.team-card');
    let currentIndex = 0;
    const totalCards = cards.length;
    
    function updateCards() {
        cards.forEach((card, index) => {
            // Determine position relative to current
            let offset = (index - currentIndex + totalCards) % totalCards;
            const cardElement = card as HTMLElement;
            if (offset === 0) {
                // Center / Active
                cardElement.style.transform = 'translateX(0) scale(1) translateZ(0)';
                cardElement.style.zIndex = '30';
                cardElement.style.opacity = '1';
                cardElement.style.filter = 'blur(0px)';
                cardElement.classList.remove('pointer-events-none');
            } else if (offset === 1) {
                // Right
                cardElement.style.transform = 'translateX(50%) scale(0.85) translateZ(-50px)';
                cardElement.style.zIndex = '10';
                cardElement.style.opacity = '0.3';
                cardElement.style.filter = 'blur(2px)';
                cardElement.classList.add('pointer-events-none');
            } else if (offset === 2) {
                // Left
                cardElement.style.transform = 'translateX(-50%) scale(0.85) translateZ(-50px)';
                cardElement.style.zIndex = '10';
                cardElement.style.opacity = '0.3';
                cardElement.style.filter = 'blur(2px)';
                cardElement.classList.add('pointer-events-none');
            }
        });
    }
    
    function nextCard() {
        currentIndex = (currentIndex + 1) % totalCards;
        updateCards();
    }
    
    function prevCard() {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        updateCards();
    }
    
    function resetTimer() {
        if (timer) clearInterval(timer);
        timer = setInterval(nextCard, 5000);
    }
    
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextCard();
            resetTimer();
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevCard();
            resetTimer();
        });
    }
    
    // Auto Loop
    resetTimer();
    // Init state
    updateCards();
});

onUnmounted(() => {
    if (timer) {
        clearInterval(timer);
    }
});
</script>

<template>
    <!-- Carousel Section: Smart Features --> 
    <div class="w-full relative mt-4 border border-white/5 rounded-2xl bg-[#131313] overflow-hidden p-8 lg:p-12 z-20"> 
        <div class="flex items-center justify-between mb-12"> 
            <div> 
                <h2 class="text-2xl font-heading font-medium text-white">Smart Features</h2> 
                <p class="text-xs text-neutral-500 mt-2 uppercase tracking-wider">Control your home remotely</p> 
            </div> 
            <div class="flex gap-2"> 
                <button id="prevBtn" class="p-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all text-white/50"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="m15 18-6-6 6-6"></path></svg> 
                </button> 
                <button id="nextBtn" class="p-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all text-white/50"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="m9 18 6-6-6-6"></path></svg> 
                </button> 
            </div> 
        </div> 
        
        <!-- Carousel Container --> 
        <div class="relative h-[380px] w-full flex items-center justify-center perspective-1000"> 
            <!-- Card 1 --> 
            <div class="team-card absolute w-full max-w-[340px] bg-[#1A1A1A] border border-white/10 p-1 rounded-xl shadow-xl card-enter" data-index="0" style="transform: translateX(-50%) scale(0.85) translateZ(-50px); z-index: 10; opacity: 0.3; filter: blur(2px);"> 
                <div class="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-800"> 
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" class="object-cover w-full h-full hover:scale-105 transition-transform duration-700 opacity-80 hover:opacity-100 grayscale hover:grayscale-0"> 
                    <div class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent"> 
                        <h4 class="text-base text-white font-medium">Monitor Usage</h4> 
                        <p class="text-[0.6rem] text-brand-400 uppercase tracking-widest mt-0.5">Real-time Analytics</p> 
                    </div> 
                </div> 
                <div class="p-4"> 
                    <p class="text-xs text-neutral-400 leading-relaxed">Track how much power you consume daily. See which appliances cost you the most.</p> 
                </div> 
            </div> 
            <!-- Card 2 --> 
            <div class="team-card absolute w-full max-w-[340px] bg-[#1A1A1A] border border-white/10 p-1 rounded-xl shadow-xl card-enter" data-index="1" style="transform: translateX(0px) scale(1) translateZ(0px); z-index: 30; opacity: 1; filter: blur(0px);"> 
                <div class="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-800"> 
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="object-cover w-full h-full hover:scale-105 transition-transform duration-700 opacity-80 hover:opacity-100 grayscale hover:grayscale-0"> 
                    <div class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent"> 
                        <h4 class="text-base text-white font-medium">Manage Appliances</h4> 
                        <p class="text-[0.6rem] text-brand-400 uppercase tracking-widest mt-0.5">Remote Control</p> 
                    </div> 
                </div> 
                <div class="p-4"> 
                    <p class="text-xs text-neutral-400 leading-relaxed">Turn off appliances remotely and set schedules to save electricity during high-cost periods.</p> 
                </div> 
            </div> 
            <!-- Card 3 --> 
            <div class="team-card absolute w-full max-w-[340px] bg-[#1A1A1A] border border-white/10 p-1 rounded-xl shadow-xl card-enter" data-index="2" style="transform: translateX(50%) scale(0.85) translateZ(-50px); z-index: 10; opacity: 0.3; filter: blur(2px);"> 
                <div class="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-800"> 
                    <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80" class="object-cover w-full h-full hover:scale-105 transition-transform duration-700 opacity-80 hover:opacity-100 grayscale hover:grayscale-0"> 
                    <div class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent"> 
                        <h4 class="text-base text-white font-medium">Outage Alerts</h4> 
                        <p class="text-[0.6rem] text-brand-400 uppercase tracking-widest mt-0.5">Instant Notifications</p> 
                    </div> 
                </div> 
                <div class="p-4"> 
                    <p class="text-xs text-neutral-400 leading-relaxed">Know when power is restored instantly. Get alerts for planned maintenance in your area.</p> 
                </div> 
            </div> 
        </div> 
    </div>
</template>

