<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "../../../lib/gsap";

const whySteps = [
  {
    num: "01",
    eyebrow: "FASTER RECHARGE",
    title: "Instant token delivery",
    description: "Zenerlink eliminates manual code entry. Partners can offer their customers a 90-second payment-to-power experience."
  },
  {
    num: "02",
    eyebrow: "RELIABILITY",
    title: "Built for the Nigerian grid",
    description: "Our hardware and software are vertically integrated to ensure 100% reliable transmission even in areas with poor network."
  },
  {
    num: "03",
    eyebrow: "MANAGEMENT",
    title: "Bulk management portal",
    description: "Estate developers and large-scale distributors get a dedicated portal to monitor and manage thousands of meters at once."
  }
];

onMounted(() => {
  // Reveal animations
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  });

  // Stagger steps
  gsap.from(".partner-step", {
    scrollTrigger: {
      trigger: ".partners-why__list",
      start: "top 80%",
    },
    x: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
  });
});
</script>

<template>
  <section class="partners-why">
    <div class="partners-why__inner">
      <div class="partners-why__card reveal">
         <p class="eyebrow eyebrow--light">THE ZIEON DIFFERENCE</p>
         <h2 class="display-title">Why partners choose zieon energies</h2>
         <p class="partners-why__summary">
           Offer your customers Nigeria's first fully automated prepaid experience. Get better margins and easier operations.
         </p>
      </div>
      <div class="partners-why__list">
        <div v-for="step in whySteps" :key="step.num" class="partner-step">
          <span class="partner-step__num">{{ step.num }}</span>
          <div class="partner-step__content">
            <p class="eyebrow">{{ step.eyebrow }}</p>
            <h3 class="section-title">{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.partners-why {
  background: var(--color-beige);
  padding: clamp(4rem, 10vw, 10rem) 2rem;
}

.partners-why__inner {
  max-width: var(--site-max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: clamp(2rem, 5vw, 6rem);
  align-items: start;
}

.partners-why__card {
  position: sticky;
  top: 8rem;
  background: var(--color-gradient);
  padding: clamp(2rem, 4vw, 4rem);
  border-radius: 1.5rem;
  color: white;
  min-height: clamp(25rem, 40vh, 35rem);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.partners-why__card .display-title {
  margin-top: 1rem;
}

.partners-why__summary {
  font-size: clamp(1.1rem, 1.5vw, 1.35rem);
  margin-top: 2rem;
  line-height: 1.35;
  color: rgba(255, 255, 255, 0.9);
}

.partners-why__list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.partner-step {
  background: var(--color-beige-1);
  padding: clamp(1.5rem, 3vw, 3.5rem);
  border-radius: 1.5rem;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: clamp(1.5rem, 3vw, 3rem);
  align-items: start;
}

.partner-step__num {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-family: var(--font-body);
  font-weight: 500;
  color: #f66f00;
  line-height: 0.8;
}

.partner-step__content h3 {
  @apply mb-2;
}

.partner-step__content p:not(.eyebrow) {
  font-size: 1.05rem;
  line-height: 1.45;
  color: rgba(17, 17, 17, 0.75);
}

@media (max-width: 960px) {
  .partners-why__inner {
    grid-template-columns: 1fr;
  }
  
  .partners-why__card {
    position: static;
    min-height: auto;
  }
}
</style>
