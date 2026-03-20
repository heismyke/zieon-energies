<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
    <!-- Footer Strip --> 
    <div class="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-end gap-6 opacity-60 hover:opacity-100 transition-opacity duration-300 z-20"> 
        <div class="flex flex-col gap-1"> 
        <span class="text-sm font-semibold text-white font-heading">Zelavra</span> 
            <p class="text-[0.65rem] uppercase tracking-widest text-neutral-500">Lagos • Abuja • Port Harcourt</p> 
        </div> 
        <div class="flex gap-6 text-[0.6rem] uppercase tracking-widest text-neutral-500"> 
            <a href="#" class="hover:text-white">Privacy</a> 
            <a href="#" class="hover:text-white">Terms</a> 
            <RouterLink to="/contactus" class="hover:text-white">Contact</RouterLink> 
        </div> 
    </div>
</template>
