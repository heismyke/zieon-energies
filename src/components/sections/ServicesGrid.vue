<script setup lang="ts"></script>

<template>
    <!-- Left: Features/Services --> 
    <div class="lg:col-span-7 flex flex-col gap-4"> 
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> 
            <!-- Card 1 --> 
            <div class="group bg-[#161616] hover:bg-[#1A1A1A] border border-white/5 hover:border-brand-500/30 rounded-xl p-6 transition-all duration-500 cursor-pointer flex flex-col justify-between h-[200px]"> 
                <div class="flex justify-between items-start"> 
                    <div class="p-2.5 bg-brand-500/10 rounded-lg text-brand-400 border border-brand-500/10 group-hover:text-brand-300"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg> 
                    </div> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg> 
                </div> 
                <div class=""> 
                    <h3 class="text-lg font-medium text-white mb-1 tracking-tight font-heading">Zelavra Core</h3> 
                    <p class="text-xs text-neutral-400 leading-relaxed tracking-wide">Buy electricity from all 12 Nigerian DISCOs, receive your token, and transmit directly to your meter.</p> 
                </div> 
            </div> 
            <!-- Card 2 --> 
            <div class="group bg-[#161616] hover:bg-[#1A1A1A] border border-white/5 hover:border-brand-500/30 rounded-xl p-6 transition-all duration-500 cursor-pointer flex flex-col justify-between h-[200px]"> 
                <div class="flex justify-between items-start"> 
                    <div class="p-2.5 bg-brand-500/10 rounded-lg text-brand-400 border border-brand-500/10 group-hover:text-brand-300"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg> 
                    </div> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg> 
                </div> 
                <div class=""> 
                    <h3 class="text-lg font-medium text-white mb-1 tracking-tight font-heading">Zelavra Share</h3> 
                    <p class="text-xs text-neutral-400 leading-relaxed tracking-wide">Distribute units across multiple meters, set limits, and track usage from one dashboard.</p> 
                </div> 
            </div> 
        </div> 
        <!-- Wide Card --> 
        <div class="group bg-[#161616] hover:bg-[#1A1A1A] border border-white/5 hover:border-brand-500/20 rounded-xl p-6 transition-all duration-500 cursor-pointer flex flex-col md:flex-row items-center justify-between gap-6 flex-grow relative overflow-hidden"> 
            <div class="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-brand-900/10 to-transparent pointer-events-none"></div>
            <div class="flex flex-col gap-2 max-w-sm relative z-10"> 
                <div class="flex items-center gap-3"> 
                    <div class="p-2.5 bg-brand-500/10 rounded-lg text-brand-400 border border-brand-500/10"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> 
                    </div> 
                    <h3 class="text-lg font-medium text-white tracking-tight font-heading">Zelavra Pay</h3> 
                </div> 
                <p class="text-xs text-neutral-400 leading-relaxed tracking-wide mt-2"> 
                    Send and receive money, pay bills, buy airtime and data, and manage every transaction inside your energy app.
                </p> 
            </div> 
            <div class="w-full md:w-auto relative z-10"> 
                <div class="px-4 py-2 rounded-full border border-brand-500/40 bg-brand-500/10 text-xs font-medium uppercase tracking-wider text-brand-300 hover:bg-brand-500 hover:text-black transition-colors text-center"> 
                    Explore Zelavra Pay 
                </div> 
            </div> 
        </div> 
    </div>
</template>

