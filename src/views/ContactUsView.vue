<script setup lang="ts">
import Background from '../components/layout/Background.vue';
import Navigation from '../components/layout/Navigation.vue';
import Footer from '../components/layout/Footer.vue';
import { onMounted } from 'vue';

onMounted(() => {
    window.scrollTo(0, 0);
});
</script>

<template>
    <div class="relative min-h-screen bg-[#050505] font-sans selection:bg-brand-500/30">
        <Background />
        <Navigation />

        <main class="relative z-10 w-full flex flex-col items-center pt-32 px-6">
            <!-- Hero -->
            <section class="w-full max-w-[90rem] mb-32 flex flex-col items-center text-center">
                <span class="text-[0.6rem] font-bold uppercase tracking-[0.5em] text-brand-500 mb-8">Contact</span>
                <h1 class="text-6xl md:text-8xl lg:text-9xl font-semibold text-white tracking-tighter leading-none mb-12">
                    Connect.
                </h1>
                <p class="text-xl text-neutral-400 max-w-2xl font-light leading-relaxed">
                    Whether you're looking for support, partnership, or to join our grid network.
                </p>
            </section>

            <!-- Contact Form -->
            <section class="w-full max-w-4xl mb-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                <div class="flex flex-col gap-10">
                    <div class="flex flex-col gap-2">
                        <h3 class="text-2xl font-medium text-white">General Inquiries</h3>
                        <p class="text-neutral-500 font-light">info@zelavra.com</p>
                    </div>
                    <div class="flex flex-col gap-2">
                        <h3 class="text-2xl font-medium text-white">Technical Support</h3>
                        <p class="text-neutral-500 font-light">support@zelavra.com</p>
                    </div>
                    <div class="flex flex-col gap-2">
                        <h3 class="text-2xl font-medium text-white">Business Partnerships</h3>
                        <p class="text-neutral-500 font-light">partners@zelavra.com</p>
                    </div>
                </div>

                <form class="flex flex-col gap-8">
                    <div class="flex flex-col gap-1">
                        <label class="text-[0.65rem] uppercase tracking-widest text-neutral-500 font-bold ml-1">Full Name</label>
                        <input type="text" class="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-500/50 transition-all font-light" placeholder="John Doe">
                    </div>
                    <div class="flex flex-col gap-1">
                        <label class="text-[0.65rem] uppercase tracking-widest text-neutral-500 font-bold ml-1">Email Address</label>
                        <input type="email" class="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-500/50 transition-all font-light" placeholder="john@example.com">
                    </div>
                    <div class="flex flex-col gap-1">
                        <label class="text-[0.65rem] uppercase tracking-widest text-neutral-500 font-bold ml-1">Message</label>
                        <textarea rows="6" class="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-500/50 transition-all font-light resize-none" placeholder="How can we help?"></textarea>
                    </div>
                    <button class="px-12 py-5 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-neutral-200 transition-colors">
                        Send Message
                    </button>
                </form>
            </section>

             <div class="w-full max-w-[90rem] py-12">
                <Footer />
            </div>
        </main>
    </div>
</template>
