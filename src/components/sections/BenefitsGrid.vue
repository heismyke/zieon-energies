<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
    // Portfolio Filtering Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            const filterValue = btn.getAttribute('data-filter');
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                const itemElement = item as HTMLElement;
                if (filterValue === 'all' || category === filterValue) {
                    item.classList.remove('hidden-item');
                    setTimeout(() => {
                        itemElement.style.opacity = '1';
                        itemElement.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    itemElement.style.opacity = '0';
                    itemElement.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        item.classList.add('hidden-item');
                    }, 300);
                }
            });
        });
    });
});
</script>

<template>
    <!-- BENEFIT GRID SECTION --> 
    <div class="w-full relative mt-8 pt-12 border-t border-white/5 z-20"> 
        <!-- Header & Filter --> 
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6"> 
            <div> 
                <h2 class="text-2xl font-heading font-medium text-white">Why Choose CIU?</h2> 
                <p class="text-xs text-neutral-500 mt-2 uppercase tracking-wider">Everything you need in one app</p> 
            </div> 
            <!-- Filter Buttons --> 
            <div class="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide"> 
                <button class="filter-btn active px-4 py-1.5 rounded-full border border-white/10 text-[0.65rem] uppercase tracking-widest font-semibold text-neutral-400 hover:text-white hover:border-white/20 transition-all" data-filter="all">All Benefits</button> 
                <button class="filter-btn px-4 py-1.5 rounded-full border border-white/5 text-[0.65rem] uppercase tracking-widest font-semibold text-neutral-500 hover:text-white hover:border-white/20 transition-all" data-filter="payment">Payments</button> 
                <button class="filter-btn px-4 py-1.5 rounded-full border border-white/5 text-[0.65rem] uppercase tracking-widest font-semibold text-neutral-500 hover:text-white hover:border-white/20 transition-all" data-filter="service">Service</button> 
            </div> 
        </div> 
        
        <!-- Portfolio Grid --> 
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="portfolio-grid"> 
            <!-- Item 1 --> 
            <div class="portfolio-item group relative p-8 bg-[#161616] border border-white/5 hover:border-brand-500/20 rounded-xl flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:bg-[#1A1A1A] cursor-pointer" data-category="payment"> 
                <div class="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white/70 group-hover:text-brand-400 group-hover:scale-110 group-hover:bg-brand-500/10 transition-all duration-500"> 
                    <span class="font-heading font-bold text-lg">₦0</span>
                </div> 
                <div class="text-center">
                    <span class="text-sm font-medium text-neutral-300 group-hover:text-white tracking-wide transition-colors block">Service Fee</span> 
                    <span class="text-[0.65rem] text-neutral-500 mt-1">Pay exactly what you use</span>
                </div>
            </div> 
            <!-- Item 2 --> 
            <div class="portfolio-item group relative p-8 bg-[#161616] border border-white/5 hover:border-brand-500/20 rounded-xl flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:bg-[#1A1A1A] cursor-pointer" data-category="service"> 
                <div class="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white/70 group-hover:text-brand-400 group-hover:scale-110 group-hover:bg-brand-500/10 transition-all duration-500"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 stroke-[1.5]"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg> 
                </div> 
                <div class="text-center">
                    <span class="text-sm font-medium text-neutral-300 group-hover:text-white tracking-wide transition-colors block">24/7 Available</span> 
                    <span class="text-[0.65rem] text-neutral-500 mt-1">Always online</span>
                </div>
            </div> 
            <!-- Item 3 --> 
            <div class="portfolio-item group relative p-8 bg-[#161616] border border-white/5 hover:border-brand-500/20 rounded-xl flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:bg-[#1A1A1A] cursor-pointer" data-category="payment"> 
                <div class="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white/70 group-hover:text-brand-400 group-hover:scale-110 group-hover:bg-brand-500/10 transition-all duration-500"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 stroke-[1.5]"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg> 
                </div> 
                 <div class="text-center">
                    <span class="text-sm font-medium text-neutral-300 group-hover:text-white tracking-wide transition-colors block">Instant Delivery</span> 
                    <span class="text-[0.65rem] text-neutral-500 mt-1">Token generated in seconds</span>
                </div>
            </div> 
            <!-- Item 4 --> 
            <div class="portfolio-item group relative p-8 bg-[#161616] border border-white/5 hover:border-brand-500/20 rounded-xl flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:bg-[#1A1A1A] cursor-pointer" data-category="service"> 
                <div class="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white/70 group-hover:text-brand-400 group-hover:scale-110 group-hover:bg-brand-500/10 transition-all duration-500"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 stroke-[1.5]"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2Z"></path><rect width="4" height="4" x="2" y="2" rx="1"></rect><path d="M19 14h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2Z"></path><rect width="4" height="4" x="17" y="2" rx="1"></rect><path d="M12 2v4"></path><path d="M12 18v4"></path><path d="M5 6v4"></path><path d="M19 6v4"></path><path d="M5 14v-4"></path><path d="M19 14v-4"></path></svg> 
                </div> 
                 <div class="text-center">
                    <span class="text-sm font-medium text-neutral-300 group-hover:text-white tracking-wide transition-colors block">All Nigerian DisCos</span> 
                    <span class="text-[0.65rem] text-neutral-500 mt-1">AEDC, EKEDC, IBEDC &amp; more</span>
                </div>
            </div> 
            <!-- Item 5 --> 
            <div class="portfolio-item group relative p-8 bg-[#161616] border border-white/5 hover:border-brand-500/20 rounded-xl flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:bg-[#1A1A1A] cursor-pointer" data-category="payment"> 
                <div class="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white/70 group-hover:text-brand-400 group-hover:scale-110 group-hover:bg-brand-500/10 transition-all duration-500"> 
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 stroke-[1.5]"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg> 
                </div> 
                <div class="text-center">
                    <span class="text-sm font-medium text-neutral-300 group-hover:text-white tracking-wide transition-colors block">Payment History</span> 
                    <span class="text-[0.65rem] text-neutral-500 mt-1">Track every naira spent</span>
                </div>
            </div> 
            <!-- Item 6 --> 
            <div class="portfolio-item group relative p-8 bg-[#161616] border border-white/5 hover:border-brand-500/20 rounded-xl flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:bg-[#1A1A1A] cursor-pointer" data-category="service"> 
                <div class="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white/70 group-hover:text-brand-400 group-hover:scale-110 group-hover:bg-brand-500/10 transition-all duration-500"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 stroke-[1.5]"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg> 
                </div> 
                 <div class="text-center">
                    <span class="text-sm font-medium text-neutral-300 group-hover:text-white tracking-wide transition-colors block">Seamless Switch</span> 
                    <span class="text-[0.65rem] text-neutral-500 mt-1">Manage multiple meters</span>
                </div>
            </div> 
        </div> 
    </div>
</template>

