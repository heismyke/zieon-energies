<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "../../../lib/gsap";

onMounted(() => {
  const revealElements = [".reveal-up", ".reveal-left", ".reveal-right", ".reveal-scale"];
  revealElements.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      });
    });
  });
});
</script>

<template>
  <section class="py-24 bg-white px-6 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="reveal-left">
          <p class="eyebrow text-brand-500 mb-6">THE REALITY</p>
          <h2 class="display-title text-black mb-12">Nigeria's power problem is more than just outages.</h2>
          <p class="copy-text text-black/70 mb-8 text-xl leading-relaxed">
            It's the constant hum of generators, the rising cost of petrol, and the uncertainty of when the next bill arrives.
          </p>
          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center shrink-0">
                <span class="text-brand-500 font-bold">!</span>
              </div>
              <div>
                <h4 class="font-bold text-lg mb-1">Unpredictable Outages</h4>
                <p class="text-black/60">Hours of darkness when you need light the most.</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center shrink-0">
                <span class="text-brand-500 font-bold">₦</span>
              </div>
              <div>
                <h4 class="font-bold text-lg mb-1">High Generator Costs</h4>
                <p class="text-black/60">Spending thousands on fuel and maintenance weekly.</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center shrink-0">
                <span class="text-brand-500 font-bold">?</span>
              </div>
              <div>
                <h4 class="font-bold text-lg mb-1">Estimated Billing Pain</h4>
                <p class="text-black/60">Paying for energy you didn't even use.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="relative reveal-right">
          <div class="aspect-square bg-brand-50 rounded-[4rem] overflow-hidden flex items-center justify-center">
             <div class="w-4/5 h-4/5 bg-brand-200 rounded-3xl flex items-center justify-center text-brand-700/20 text-4xl font-heading text-center p-8">
               [Relatable imagery of the power struggle]
             </div>
          </div>
          <!-- Decorative element -->
          <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-brand-500 rounded-2xl -z-10 rotate-12"></div>
        </div>
      </div>
    </div>
  </section>
</template>
