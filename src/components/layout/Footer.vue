<script setup lang="ts">
const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};
</script>

<template>
    <footer class="w-full pt-24 pb-12 flex flex-col gap-16 border-t border-white/5 mt-24">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 px-4">
            <!-- Brand -->
            <div class="col-span-2 flex flex-col gap-6">
                <span class="text-xl font-bold text-white tracking-tight">zvnenergy</span>
                <p class="text-sm text-neutral-500 font-light max-w-xs leading-relaxed">
                    The next generation of energy management. High-precision hardware and intelligent software unified into a single ecosystem.
                </p>
            </div>

            <!-- Product -->
            <div class="flex flex-col gap-6">
                <h4 class="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white">Product</h4>
                <ul class="flex flex-col gap-4 text-sm text-neutral-500 font-light">
                    <li><button @click="scrollToSection('interface')" class="hover:text-brand-500 transition-colors text-left">The Interface</button></li>
                    <li><button @click="scrollToSection('features')" class="hover:text-brand-500 transition-colors text-left">Core Features</button></li>
                    <li><button @click="scrollToSection('zvnenergy-ai')" class="hover:text-brand-500 transition-colors text-left">zvnenergy AI</button></li>
                </ul>
            </div>

            <!-- Company -->
            <div class="flex flex-col gap-6">
                <h4 class="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white">Resources</h4>
                <ul class="flex flex-col gap-4 text-sm text-neutral-500 font-light">
                    <li><button @click="scrollToSection('faq')" class="hover:text-brand-500 transition-colors text-left">Common FAQ</button></li>
                    <li><button @click="scrollToSection('support')" class="hover:text-brand-500 transition-colors text-left">Support Hub</button></li>
                    <li><button @click="scrollToSection('reviews')" class="hover:text-brand-500 transition-colors text-left">User Stories</button></li>
                </ul>
            </div>

            <!-- Legal -->
            <div class="flex flex-col gap-6">
                <h4 class="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white">Connect</h4>
                <ul class="flex flex-col gap-4 text-sm text-neutral-500 font-light">
                    <li><a href="#" class="hover:text-brand-500 transition-colors">Twitter / X</a></li>
                    <li><a href="#" class="hover:text-brand-500 transition-colors">LinkedIn</a></li>
                    <li><a href="#" class="hover:text-brand-500 transition-colors">Instagram</a></li>
                </ul>
            </div>
        </div>

        <div class="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5 px-4 text-[0.65rem] text-neutral-600 font-medium uppercase tracking-[0.1em]">
            <div class="flex gap-8">
                <span>© 2026 zvnenergy Inc.</span>
                <span>All Rights Reserved.</span>
            </div>
            <div class="flex gap-8">
                <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
            </div>
        </div>
    </footer>
</template>
