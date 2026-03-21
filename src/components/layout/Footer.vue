<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
    <footer class="w-full py-12 flex flex-col items-center gap-8 opacity-40 hover:opacity-100 transition-opacity duration-500">
        <div class="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[0.7rem] font-medium tracking-wide text-white">
            <span>Zelavra © 2026</span>
            <RouterLink to="/grid" class="hover:text-neutral-400">The Grid</RouterLink>
            <RouterLink to="/platform" class="hover:text-neutral-400">The App</RouterLink>
            <RouterLink to="/manufacturing" class="hover:text-neutral-400">Manufacturing</RouterLink>
            <RouterLink to="/store" class="hover:text-neutral-400">Store</RouterLink>
            <RouterLink to="/contactus" class="hover:text-neutral-400">Contact</RouterLink>
            <RouterLink to="/faq" class="hover:text-neutral-400">FAQ</RouterLink>
        </div>
    </footer>
</template>
