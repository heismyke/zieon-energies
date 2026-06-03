<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "../../../lib/gsap";

onMounted(() => {
  gsap.to(".reveal-up", {
    scrollTrigger: {
      trigger: ".connection-visual",
      start: "top 85%",
    },
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out"
  });
});
</script>

<template>
  <section class="py-24 bg-white px-6 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="reveal-left opacity-0 translate-x-[-30px]">
          <p class="eyebrow text-brand-500 mb-6">THE CONNECTION</p>
          <h2 class="display-title text-black mb-12">Seamless synchronization.</h2>
          <p class="copy-text text-black/70 text-xl leading-relaxed mb-8">
            Zenerlink doesn't just talk to our servers—it talks directly to your meter using our proprietary LoRaWAN bridge.
          </p>
          <p class="copy-text text-black/70 text-lg leading-relaxed">
            This ensures that even when the local mobile network is congested, your token delivery and usage data remain fast and reliable. It's a closed-loop system designed for 99.9% uptime.
          </p>
        </div>
        
        <div class="relative connection-visual reveal-up opacity-0 translate-y-[30px]">
          <div class="bg-brand-50 rounded-[4rem] p-12 flex flex-col items-center gap-12">
            <div class="flex items-center justify-between w-full max-w-md">
              <div class="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center font-bold text-brand-500">APP</div>
              <div class="flex-1 flex items-center justify-center px-4">
                <div class="h-px bg-brand-200 w-full relative">
                  <div class="absolute inset-0 bg-brand-500 animate-pulse"></div>
                  <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full text-[10px] font-mono uppercase text-brand-500 border border-brand-200 shadow-sm">LoRaWAN</div>
                </div>
              </div>
              <div class="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center font-bold text-brand-500">METER</div>
            </div>
            
            <div class="text-center">
              <p class="font-bold text-lg mb-2">90 Seconds or Less</p>
              <p class="text-black/50 text-sm">Average purchase-to-power delivery time.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes pulse {
  0% { left: 0; width: 0; opacity: 0; }
  50% { left: 0; width: 100%; opacity: 1; }
  100% { left: 100%; width: 0; opacity: 0; }
}
.animate-pulse {
  animation: pulse 2s infinite ease-in-out;
}
</style>
