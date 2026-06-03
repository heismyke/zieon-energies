<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "../../../lib/gsap";

onMounted(() => {
  gsap.to(".reveal-scale", {
    scrollTrigger: {
      trigger: ".partner-form-container",
      start: "top 85%",
    },
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: "power3.out"
  });
});
</script>

<template>
  <section class="py-24 md:py-48 bg-white px-6">
    <div class="max-w-4xl mx-auto partner-form-container reveal-scale opacity-0 scale-[0.98]">
      <div class="bg-brand-500 rounded-[4rem] p-12 md:p-24 text-white shadow-2xl relative overflow-hidden">
        <div class="absolute inset-0 bg-black/10 z-0"></div>
        
        <div class="relative z-10">
          <p class="eyebrow text-white/60 mb-8">CONTACT US</p>
          <h2 class="display-title text-5xl md:text-8xl mb-12">Become a partner.</h2>
          
          <form @submit.prevent class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
            <div class="flex flex-col gap-4">
              <label class="font-mono text-[10px] uppercase tracking-widest opacity-60">Organization Name</label>
              <input type="text" placeholder="Acme Ltd" class="bg-transparent border-b border-white/20 pb-4 outline-none focus:border-white transition-all placeholder:text-white/20">
            </div>
            <div class="flex flex-col gap-4">
              <label class="font-mono text-[10px] uppercase tracking-widest opacity-60">Interest Tier</label>
              <select class="bg-transparent border-b border-white/20 pb-4 outline-none focus:border-white transition-all text-white appearance-none">
                <option value="reseller" class="text-black">Reseller</option>
                <option value="installer" class="text-black">Installer</option>
                <option value="developer" class="text-black">Estate Developer</option>
              </select>
            </div>
            <div class="flex flex-col gap-4">
              <label class="font-mono text-[10px] uppercase tracking-widest opacity-60">Contact Email</label>
              <input type="email" placeholder="hello@company.com" class="bg-transparent border-b border-white/20 pb-4 outline-none focus:border-white transition-all placeholder:text-white/20">
            </div>
            <div class="flex flex-col gap-4">
              <label class="font-mono text-[10px] uppercase tracking-widest opacity-60">Phone Number</label>
              <input type="tel" placeholder="+234..." class="bg-transparent border-b border-white/20 pb-4 outline-none focus:border-white transition-all placeholder:text-white/20">
            </div>
            <div class="md:col-span-2 flex flex-col gap-4 mt-8">
              <button class="w-full bg-white text-brand-500 py-8 rounded-3xl font-bold text-xl hover:bg-brand-50 transition-all shadow-xl active:scale-[0.98]">Submit Application</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
