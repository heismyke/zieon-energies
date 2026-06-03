<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "../../../lib/gsap";

onMounted(() => {
  const revealElements = [".reveal-up"];
  revealElements.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      });
    });
  });
});
</script>

<template>
  <section class="bg-black py-40 px-8 overflow-hidden selection:bg-white selection:text-black">
    <div class="max-w-6xl mx-auto">
      <h2 class="display-title text-white mb-24 reveal-up opacity-0 translate-y-[30px]">
        FORMAT FOR THE APPLICATION OF TRANSFER OF COPYRIGHT OWNERSHIP 
      </h2>
      
      <div class="space-y-24 reveal-up opacity-0 translate-y-[30px]">
        <div class="space-y-2">
          <p class="copy-text text-white uppercase opacity-60">Head Regulatory dept</p>
          <p class="copy-text text-white uppercase opacity-60">Nig Copyright Commission</p>
          <p class="copy-text text-white uppercase opacity-60">Ground floor, phase 1 Annex 2,</p>
          <p class="copy-text text-white uppercase opacity-60">Fed Secretariat complex</p>
          <p class="copy-text text-white uppercase opacity-60">Abuja</p>
        </div>

        <h3 class="display-title text-white leading-tight">
          LETTER OF TRANSFER OF COPYRIGHT OWNERSHIP 
        </h3>

        <p class="display-title text-white leading-tight max-w-4xl">
          I......D AUTHOR OF THE WORK TITLED......WISH TO TRANSFER MY RIGHTS OF COPYRIGHT OWNERSHIP TO.......
        </p>

        <p class="display-title text-white">
          THANK YOU 
        </p>

        <div class="space-y-2 pt-12">
          <p class="copy-text text-white uppercase opacity-60">SIGNATURE</p>
          <p class="copy-text text-white uppercase opacity-60">NAME</p>
          <p class="copy-text text-white uppercase opacity-60">DATE</p>
        </div>
      </div>
    </div>
  </section>
</template>
