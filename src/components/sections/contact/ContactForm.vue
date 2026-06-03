<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "../../../lib/gsap";

onMounted(() => {
  gsap.to(".reveal-scale", {
    scrollTrigger: {
      trigger: ".contact-form-container",
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
  <section class="py-24 bg-brand-50 px-6">
    <div class="max-w-4xl mx-auto contact-form-container reveal-scale opacity-0 scale-[0.98]">
      <div class="bg-white rounded-[4rem] p-12 md:p-20 shadow-xl border border-black/5">
        <h2 class="text-4xl font-bold mb-12 font-heading text-black">Join the Waitlist</h2>
        <form @submit.prevent class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="flex flex-col gap-2">
            <label class="font-mono text-[10px] uppercase tracking-widest text-black/50">Full Name</label>
            <input type="text" placeholder="John Doe" class="bg-brand-50 border-b border-black/10 p-4 rounded-t-lg outline-none focus:bg-brand-100 transition-all placeholder:text-black/20">
          </div>
          <div class="flex flex-col gap-2">
            <label class="font-mono text-[10px] uppercase tracking-widest text-black/50">Email Address</label>
            <input type="email" placeholder="john@example.com" class="bg-brand-50 border-b border-black/10 p-4 rounded-t-lg outline-none focus:bg-brand-100 transition-all placeholder:text-black/20">
          </div>
          <div class="flex flex-col gap-2">
            <label class="font-mono text-[10px] uppercase tracking-widest text-black/50">Phone Number</label>
            <input type="tel" placeholder="+234..." class="bg-brand-50 border-b border-black/10 p-4 rounded-t-lg outline-none focus:bg-brand-100 transition-all placeholder:text-black/20">
          </div>
          <div class="flex flex-col gap-2">
            <label class="font-mono text-[10px] uppercase tracking-widest text-black/50">Location</label>
            <input type="text" placeholder="City, State" class="bg-brand-50 border-b border-black/10 p-4 rounded-t-lg outline-none focus:bg-brand-100 transition-all placeholder:text-black/20">
          </div>
          <div class="md:col-span-2 flex flex-col gap-2">
            <label class="font-mono text-[10px] uppercase tracking-widest text-black/50">How can we help?</label>
            <select class="bg-brand-50 border-b border-black/10 p-4 rounded-t-lg outline-none focus:bg-brand-100 transition-all">
              <option value="waitlist">I want to join the waitlist</option>
              <option value="estimate">I want an energy estimate</option>
              <option value="partnership">I'm interested in partnership</option>
              <option value="support">I need technical support</option>
            </select>
          </div>
          <div class="md:col-span-2 mt-8">
            <button class="w-full bg-brand-500 text-white py-6 rounded-2xl font-bold text-lg hover:bg-brand-600 transition-all shadow-xl">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
