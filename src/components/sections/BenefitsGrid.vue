<script setup lang="ts">
// Simplified component for a more minimal design
</script>

<template>
    <div class="flex flex-col gap-16 py-20 border-t border-white/5"> 
        <div class="flex flex-col gap-4 text-center items-center"> 
            <span class="text-[0.6rem] font-bold uppercase tracking-[0.4em] text-brand-500">Excellence</span>
            <h2 class="text-4xl md:text-5xl font-heading font-medium text-white tracking-tight">Engineered for Reliability.</h2> 
            <p class="text-sm text-neutral-500 max-w-xl font-light leading-relaxed">Everything you need to manage your energy and finances in one high-performance application.</p>
        </div> 
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> 
            <!-- Benefit 1 --> 
            <div class="group p-8 bg-white/5 border border-white/5 rounded-3xl hover:bg-white/10 transition-all duration-500"> 
                <div class="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-500 mb-6 border border-brand-500/10"> 
                    <span class="font-heading font-bold text-sm">₦0</span>
                </div> 
                <h4 class="text-lg font-heading font-bold text-white mb-2 tracking-tight">Service Fee</h4> 
                <p class="text-xs text-neutral-400 font-light leading-relaxed">Pay exactly for what you consume. No hidden charges or extra fees.</p>
            </div> 

            <!-- Benefit 2 --> 
            <div class="group p-8 bg-white/5 border border-white/5 rounded-3xl hover:bg-white/10 transition-all duration-500"> 
                <div class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 mb-6"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg> 
                </div> 
                <h4 class="text-lg font-heading font-bold text-white mb-2 tracking-tight">Always On</h4> 
                <p class="text-xs text-neutral-400 font-light leading-relaxed">24/7 availability for tokens and transfers. We never sleep, so you stay powered.</p>
            </div> 

            <!-- Benefit 3 --> 
            <div class="group p-8 bg-white/5 border border-white/5 rounded-3xl hover:bg-white/10 transition-all duration-500"> 
                <div class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 mb-6"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg> 
                </div> 
                <h4 class="text-lg font-heading font-bold text-white mb-2 tracking-tight">Instant</h4> 
                <p class="text-xs text-neutral-400 font-light leading-relaxed">Tokens generated in seconds. Transfers reflected in real-time. Speed is our priority.</p>
            </div> 

            <!-- Benefit 4 --> 
            <div class="group p-8 bg-white/5 border border-white/5 rounded-3xl hover:bg-white/10 transition-all duration-500"> 
                <div class="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-500 mb-6 border border-brand-500/10"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2Z"></path><rect width="4" height="4" x="2" y="2" rx="1"></rect><path d="M19 14h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2Z"></path><rect width="4" height="4" x="17" y="2" rx="1"></rect></svg> 
                </div> 
                <h4 class="text-lg font-heading font-bold text-white mb-2 tracking-tight">Full Coverage</h4> 
                <p class="text-xs text-neutral-400 font-light leading-relaxed">Unified support for all Nigerian DisCos. One platform for all your regional needs.</p>
            </div> 
        </div> 
    </div>
</template>
