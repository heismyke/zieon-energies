<script setup lang="ts"></script>

<template>
    <!-- Right: Interactive Form --> 
    <div class="lg:col-span-5 bg-gradient-to-b from-[#131313] to-[#0F0F0F] border border-white/10 rounded-xl p-8 flex flex-col relative overflow-hidden group"> 
        <div class="relative z-10 h-full flex flex-col"> 
            <span class="text-[0.6rem] font-semibold text-brand-500 uppercase tracking-[0.2em] mb-4 block">Waitlist</span> 
            <h3 class="text-2xl font-heading text-white mb-2 tracking-tight">Get Early Access.</h3> 
            <p class="text-xs text-neutral-500 mb-8">Join thousands managing their prepaid meters the smart way.</p> 
            <form class="flex flex-col gap-4 flex-grow justify-center"> 
                <div class="flex flex-col gap-3"> 
                    <div class="relative group/input"> 
                        <input type="text" placeholder="Phone Number" class="w-full bg-black/30 border border-white/10 rounded-lg px-3 py-3 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-brand-500/50 focus:bg-black/50 transition-all"> 
                    </div> 
                    <div class="relative group/input"> 
                        <input type="email" placeholder="Email Address" class="w-full bg-black/30 border border-white/10 rounded-lg px-3 py-3 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-brand-500/50 focus:bg-black/50 transition-all"> 
                    </div> 
                </div> 
                <!-- Custom Topic Selection --> 
                <div class="space-y-3 mt-2"> 
                    <label class="text-[0.65rem] uppercase tracking-widest text-neutral-500 font-semibold">Select your provider</label> 
                    <div class="flex flex-col gap-2"> 
                        <label class="flex items-center gap-3 cursor-pointer group/check"> 
                            <input type="checkbox" class="custom-checkbox hidden"> 
                            <div class="w-4 h-4 rounded border border-neutral-700 bg-neutral-900 flex items-center justify-center transition-all group-hover/check:border-neutral-500"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="text-black opacity-0 transform scale-50 transition-all duration-200"><polyline points="20 6 9 17 4 12"></polyline></svg> 
                            </div> 
                            <span class="text-xs text-neutral-300 group-hover/check:text-white transition-colors">I use AEDC (Abuja)</span> 
                        </label> 
                        <label class="flex items-center gap-3 cursor-pointer group/check"> 
                            <input type="checkbox" class="custom-checkbox hidden"> 
                            <div class="w-4 h-4 rounded border border-neutral-700 bg-neutral-900 flex items-center justify-center transition-all group-hover/check:border-neutral-500"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="text-black opacity-0 transform scale-50 transition-all duration-200"><polyline points="20 6 9 17 4 12"></polyline></svg> 
                            </div> 
                            <span class="text-xs text-neutral-300 group-hover/check:text-white transition-colors">I use EKEDC / IKEDC (Lagos)</span> 
                        </label> 
                        <label class="flex items-center gap-3 cursor-pointer group/check"> 
                            <input type="checkbox" class="custom-checkbox hidden"> 
                            <div class="w-4 h-4 rounded border border-neutral-700 bg-neutral-900 flex items-center justify-center transition-all group-hover/check:border-neutral-500"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="text-black opacity-0 transform scale-50 transition-all duration-200"><polyline points="20 6 9 17 4 12"></polyline></svg> 
                            </div> 
                            <span class="text-xs text-neutral-300 group-hover/check:text-white transition-colors">Other DisCo</span> 
                        </label> 
                    </div> 
                </div> 
                <button type="button" class="mt-4 w-full bg-white text-black text-xs font-bold uppercase tracking-widest py-3 rounded-lg hover:bg-brand-400 transition-colors flex items-center justify-center gap-2 group-hover:gap-3 transition-all"> 
                    Join Waitlist 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3 h-3"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> 
                </button> 
            </form> 
        </div> 
    </div>
</template>

