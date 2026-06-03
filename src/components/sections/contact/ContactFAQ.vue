<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "../../../lib/gsap";

const faqs = [
  {
    question: "When will Zieon meters be available in my area?",
    answer: "We are currently rolling out in pilot phases starting with major cities like Abuja and Lagos. Join our waitlist to be notified the moment we launch in your specific area."
  },
  {
    question: "Is the Zenerlink app free to use?",
    answer: "Yes, the basic features of Zenerlink, including real-time monitoring and recharges, are free for all Zieon meter owners."
  },
  {
    question: "How do I top up my units through the app?",
    answer: "Once your meter is paired with Zenerlink, you can use various payment methods (Card, Bank Transfer, USSD) directly in the app to buy units. The units are then pushed automatically to your meter."
  },
  {
    question: "Can I use Zieon with my existing solar system?",
    answer: "Yes! Zieon meters are designed to be compatible with most existing energy setups, including solar and battery backups."
  }
];

onMounted(() => {
  gsap.to(".reveal-up", {
    scrollTrigger: {
      trigger: ".faq-list",
      start: "top 85%",
    },
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.1,
    ease: "power3.out"
  });
});
</script>

<template>
  <section class="py-24 bg-white px-6">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-16 reveal-up">
        <p class="eyebrow text-brand-500 mb-6">FAQ</p>
        <h2 class="display-title text-black">Common Questions</h2>
      </div>

      <div class="space-y-6 faq-list">
        <div v-for="faq in faqs" :key="faq.question" class="bg-brand-50 p-8 rounded-3xl reveal-up opacity-0 translate-y-[20px]">
          <h4 class="text-xl font-bold mb-4 font-heading text-black">{{ faq.question }}</h4>
          <p class="text-black/60 leading-relaxed">{{ faq.answer }}</p>
        </div>
      </div>
      
      <div class="mt-20 text-center reveal-up opacity-0">
        <p class="copy-text text-black/50">Still have questions?</p>
        <a href="mailto:hello@zieonenergies.com" class="text-brand-500 font-bold text-lg hover:underline">hello@zieonenergies.com</a>
      </div>
    </div>
  </section>
</template>
