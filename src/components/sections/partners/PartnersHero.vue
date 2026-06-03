<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "../../../lib/gsap";

onMounted(() => {
  gsap.from(".partners-hero__logo", {
    scale: 0.9,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });
});
</script>

<template>
  <section class="partners-hero">
    <div class="partners-hero__waves">
       <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <g opacity="0.4">
          <path d="M-100 200C200 150 400 350 700 300C1000 250 1200 450 1500 400" stroke="white" stroke-width="80" />
          <path d="M-100 400C200 350 400 550 700 500C1000 450 1200 650 1500 600" stroke="white" stroke-width="80" />
          <path d="M-100 600C200 550 400 750 700 700C1000 650 1200 850 1500 800" stroke="white" stroke-width="80" />
          <path d="M-100 800C200 750 400 950 700 900C1000 850 1200 1050 1500 1000" stroke="white" stroke-width="80" />
        </g>
      </svg>
    </div>
    <div class="partners-hero__inner">
      <div class="partners-hero__logo">
         <span class="brand-mark">
          <span class="brand-mark__icon" aria-hidden="true">
            <svg viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 18H30M6 18C6 12.4772 10.4772 8 16 8C21.5228 8 26 12.4772 26 18M16 2V10M10 5L12.8 9.2M22 5L19.2 9.2"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span class="brand-mark__text">zieon energies</span>
        </span>
        <div class="mt-12">
          <p class="font-mono text-xs tracking-[0.2em] text-white/60 uppercase">Partnership Network</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.partners-hero {
  height: 90vh;
  background: #1d3e86; /* Professional Dark Blue */
  background: radial-gradient(circle at center, #2d4da7 0%, #1d3e86 100%);
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
}

.partners-hero__waves {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.partners-hero__waves svg {
  width: 120%;
  height: 120%;
  transform: rotate(-15deg);
}

.partners-hero__inner {
  position: relative;
  z-index: 1;
  text-align: center;
}

.partners-hero__logo .brand-mark {
  @apply flex items-center justify-center;
  gap: 1.5rem;
}

.partners-hero__logo .brand-mark__icon {
  width: clamp(4rem, 8vw, 6rem);
  color: white;
}

.partners-hero__logo .brand-mark__text {
  font-size: clamp(3.5rem, 7vw, 6rem);
  color: white;
  letter-spacing: -0.06em;
  font-weight: 500;
}

@media (max-width: 960px) {
  .partners-hero__logo .brand-mark {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
