<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import SiteFooter from "../components/site/SiteFooter.vue";
import SiteHeader from "../components/site/SiteHeader.vue";
import { gsap } from "../lib/gsap";

const steps = [
  {
    step: "STEP 1",
    title: "Subscribe to zieon energies",
    caption: "YOU'RE PART OF A GROWING NETWORK",
    description:
      "Your home becomes part of a decentralized energy network that shares power locally to make energy more reliable and affordable for everyone.",
    art: "badge",
  },
  {
    step: "STEP 2",
    title: "Power up",
    caption: "YOUR HOUSE ACTS LIKE A MINI POWER PLANT",
    description:
      "Every day, your system generates and stores energy. We keep it running smoothly with full-service maintenance on all equipment.",
    art: "house",
  },
  {
    step: "STEP 3",
    title: "Your energy works for you",
    caption: "ZIEON ENERGIES TRADES ENERGY YOU DON'T USE",
    description:
      "zieon energies trades excess energy from your battery with the grid. You earn rewards for supporting a more reliable grid.",
    art: "empty",
  },
];

onMounted(() => {
  // Hero Animation
  gsap.from(".home-hero__content > *", {
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
  });

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

  // Parallax for grid images
  gsap.to(".parallax-img", {
    scrollTrigger: {
      trigger: ".parallax-img",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
    y: -40,
    ease: "none",
  });
});
</script>

<template>
  <div class="site-page">
    <SiteHeader />

    <main>
      <!-- Hero Section (Screenshot 4) -->
      <section class="home-hero">
        <div class="home-hero__media">
          <div class="home-hero__grid-lines">
            <div class="grid-line grid-line--v"></div>
            <div class="grid-line grid-line--v"></div>
            <div class="grid-line grid-line--v"></div>
            <div class="grid-line grid-line--h"></div>
            <div class="grid-line grid-line--h"></div>
          </div>
          <div class="home-hero__bg-img"></div>
          <div class="home-hero__orange-box reveal"></div>
          
          <div class="home-hero__content">
            <p class="eyebrow eyebrow--light">POWER YOU CONTROL</p>
            <h1 class="display-title display-title--hero">Power your home for less</h1>
            <p class="home-hero__summary">
              Battery backup and solar. $0 upfront. A lower electric bill every month.
            </p>
            <div class="home-hero__actions">
              <RouterLink class="button button--light" to="/get-started">See if you qualify</RouterLink>
              <RouterLink class="button button--warm" to="/get-started">Get your estimate</RouterLink>
            </div>
          </div>

          <div class="home-hero__stats">
            <div class="hero-stat reveal">
              <p class="eyebrow eyebrow--light">kWh generated</p>
              <p class="hero-stat__value">8.2kWh – 9.5kWh</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Benefits Mosaic (Screenshot 6) -->
      <section class="benefits-mosaic">
        <div class="benefits-mosaic__grid">
          <div class="mosaic-item mosaic-item--spacer"></div>
          <div class="mosaic-item mosaic-item--spacer"></div>
          <div class="mosaic-item mosaic-item--img reveal">
             <div class="mosaic-img mosaic-img--solar parallax-img"></div>
          </div>
          
          <div class="mosaic-item mosaic-item--text reveal">
             <p class="eyebrow">SAVE</p>
             <h2 class="section-title">Cut your electric bill by 20% or more</h2>
          </div>
          
          <div class="mosaic-item mosaic-item--img reveal">
             <div class="mosaic-img mosaic-img--battery parallax-img"></div>
          </div>
          
          <div class="mosaic-item mosaic-item--text reveal">
             <p class="eyebrow">PROTECT</p>
             <h2 class="section-title">Keep the lights on with battery backup</h2>
          </div>
        </div>
      </section>

      <!-- A New Way to Power (Screenshot 5) -->
      <section class="how-it-works-hero">
        <div class="how-it-works-hero__bg"></div>
        <div class="how-it-works-hero__content reveal">
          <p class="eyebrow eyebrow--light">HOW ZIEON ENERGIES WORKS</p>
          <h2 class="display-title">A new way to power your home</h2>
          <p class="how-it-works-hero__summary">
            With zieon energies, your home generates and stores power with solar and battery backup. We cover installation and upfront costs. You get 24/7 outage protection and below-market energy rates.
          </p>
          <RouterLink class="button button--light" to="/get-started">
            See if your house qualifies
          </RouterLink>
        </div>
      </section>

      <!-- Steps Section (Animated list) -->
      <section class="how-it-works">
        <div class="how-it-works__steps">
          <article
            v-for="(step, index) in steps"
            :key="step.title"
            class="step-card reveal"
          >
            <div class="step-card__copy">
              <p class="eyebrow">{{ step.step }}</p>
              <h3 class="section-title section-title--compact">{{ step.title }}</h3>
              <p class="step-card__caption">{{ step.caption }}</p>
              <p class="step-card__description">{{ step.description }}</p>
            </div>
            <div :class="['step-card__art', `step-card__art--${step.art}`]">
               <div class="art-placeholder" :class="step.art"></div>
            </div>
          </article>
        </div>
      </section>

      <!-- Get Rewarded Mosaic (Screenshot 3) -->
      <section class="rewards-mosaic">
        <div class="rewards-mosaic__grid">
          <div class="mosaic-item mosaic-item--spacer"></div>
          <div class="mosaic-item mosaic-item--spacer"></div>
          <div class="mosaic-item mosaic-item--text reveal">
             <p class="eyebrow">EARN</p>
             <h2 class="section-title">Get rewarded for using zieon energies</h2>
          </div>
          <div class="mosaic-item mosaic-item--img reveal">
             <div class="mosaic-img mosaic-img--phone parallax-img"></div>
          </div>
        </div>
      </section>

      <!-- Sun Points (Screenshot 2) -->
      <section class="rewards-section reveal">
        <p class="eyebrow text-center">SUN POINTS</p>
        <h2 class="display-title display-title--dark text-center mt-4">Power the network. Get rewarded.</h2>
        <p class="rewards-section__copy text-center mx-auto mt-6 max-w-2xl">
          zieon energies rewards the people that power it. Earn Sun Points for gift cards, merch,
          or to pay your zieon energies subscription.
        </p>
        <div class="text-center mt-8">
          <RouterLink class="button button--dark" to="/get-started">
            See if your house qualifies
          </RouterLink>
        </div>
        <div class="rewards-map reveal mt-12">
          <!-- US Map Placeholder -->
          <svg viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full opacity-20">
            <path d="M100 100 L900 100 L900 500 L100 500 Z" stroke="currentColor" />
          </svg>
          <span v-for="index in 12" :key="index" class="rewards-map__dot"></span>
        </div>
      </section>

      <!-- Closing CTA (Screenshot 1) -->
      <section class="closing-cta-new">
        <div class="closing-cta-new__grid">
           <div class="closing-cta-new__content reveal">
              <h2 class="display-title display-title--serif">Step into zieon energies</h2>
              <div class="closing-cta-new__body mt-8">
                 <div class="brand-logo-small mb-6">
                    <svg viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 18H30M6 18C6 12.4772 10.4772 8 16 8C21.5228 8 26 12.4772 26 18M16 2V10M10 5L12.8 9.2M22 5L19.2 9.2" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                 </div>
                 <p class="eyebrow">THE FUTURE IS BRIGHT</p>
                 <p class="mt-4 text-lg max-w-md">
                   Ready to take control of your power? It’s time to step out of the past, and into a more resilient, rewarding energy future.
                 </p>
                 <RouterLink class="button button--dark mt-8" to="/get-started">
                    See if you qualify
                 </RouterLink>
              </div>
           </div>
           <div class="closing-cta-new__visual reveal">
              <div class="visual-img visual-img--family parallax-img"></div>
              <div class="visual-accent-box reveal"></div>
           </div>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>

<style scoped>
.home-hero {
  background: var(--color-beige);
}

.home-hero__media {
  position: relative;
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  overflow: hidden;
  background: #444; /* Fallback */
}

.home-hero__grid-lines {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.grid-line {
  position: absolute;
  background: rgba(255, 255, 255, 0.15);
}

.grid-line--v { width: 1px; height: 100%; top: 0; }
.grid-line--v:nth-child(1) { left: 33.33%; }
.grid-line--v:nth-child(2) { left: 66.66%; }

.grid-line--h { height: 1px; width: 100%; left: 0; }
.grid-line--h:nth-child(4) { top: 30%; }
.grid-line--h:nth-child(5) { top: 70%; }

.home-hero__bg-img {
  position: absolute;
  inset: 0;
  background: url('/public/simulator_screenshot_0099F8C2-4DBC-466B-BAFF-097844508CFD.png') center/cover no-repeat;
  filter: brightness(0.6);
}

.home-hero__orange-box {
  position: absolute;
  right: 15%;
  top: 30%;
  width: 25%;
  aspect-ratio: 1;
  background: var(--color-gradient);
  z-index: 2;
  opacity: 0.9;
}

.home-hero__content {
  position: relative;
  z-index: 3;
  max-width: 44rem;
  margin-top: 10vh;
}

.home-hero__summary {
  font-size: 1.5rem;
  margin-top: 1.5rem;
  color: white;
  line-height: 1.2;
}

.home-hero__actions {
  display: flex;
  gap: 1rem;
  margin-top: 2.5rem;
}

.home-hero__stats {
  position: absolute;
  right: 15%;
  top: 25%;
  z-index: 3;
  color: white;
}

.hero-stat__value {
  font-size: 1.2rem;
  margin-top: 0.5rem;
}

.benefits-mosaic {
  background: var(--color-beige);
  padding: 4rem 0;
}

.benefits-mosaic__grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: minmax(20rem, auto);
  border-top: 1px solid rgba(0,0,0,0.05);
  border-left: 1px solid rgba(0,0,0,0.05);
}

.mosaic-item {
  border-right: 1px solid rgba(0,0,0,0.05);
  border-bottom: 1px solid rgba(0,0,0,0.05);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  text-align: center;
}

.mosaic-img {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
}

.mosaic-img--solar { background-image: url('/public/simulator_screenshot_A6DDA02A-EDC5-4AF1-80C8-F6A3C08D880C.png'); }
.mosaic-img--battery { background-image: url('/public/simulator_screenshot_B4AA8A88-0A1D-4EE1-AB64-E1B6D158F534.png'); }
.mosaic-img--phone { background-image: url('/public/share.png'); }

.mosaic-item .section-title {
  font-size: 2.5rem;
  margin-top: 1rem;
  line-height: 1.1;
}

.how-it-works-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  background: #f7ae46;
  color: white;
  text-align: center;
  overflow: hidden;
}

.how-it-works-hero__bg {
  position: absolute;
  inset: 0;
  background: url('/public/simulator_screenshot_0F5887C3-12CE-4F11-92AE-19683F26E333.png') center/cover no-repeat;
  filter: brightness(0.7) sepia(0.3);
  opacity: 0.8;
}

.how-it-works-hero__content {
  position: relative;
  z-index: 1;
  max-width: 52rem;
}

.how-it-works-hero__summary {
  font-size: 1.5rem;
  margin: 2rem 0 3rem;
  line-height: 1.35;
}

.closing-cta-new {
  background: #c8b0ff;
  color: #321f61;
}

.closing-cta-new__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
}

.closing-cta-new__content {
  padding: clamp(2rem, 10vw, 8rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.display-title--serif {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(3rem, 8vw, 6.5rem);
}

.brand-logo-small {
  width: 3rem;
}

.closing-cta-new__visual {
  position: relative;
  overflow: hidden;
}

.visual-img {
  width: 100%;
  height: 120%;
  background: url('/public/home1.png') center/cover no-repeat;
}

.visual-accent-box {
position: absolute;
top: 10%;
right: 10%;
width: 40%;
aspect-ratio: 0.8;
background: #9061ff;
opacity: 0.9;
}

.how-it-works__steps {
display: flex;
flex-direction: column;
}

.step-card {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 4rem;
padding: 8rem 4rem;
background: var(--color-beige-1);
border-bottom: 1px solid rgba(0,0,0,0.05);
align-items: center;
}

.step-card__art {
height: 30rem;
width: 100%;
}

.art-placeholder {
width: 100%;
height: 100%;
border-radius: 2rem;
}

.art-placeholder.badge { background: var(--color-gradient); }
.art-placeholder.house { background: var(--color-light-blue); }
.art-placeholder.empty { background: var(--color-dark-beige); }

@media (max-width: 960px) {  .benefits-mosaic__grid { grid-template-columns: 1fr; }
  .mosaic-item--spacer { display: none; }
  .closing-cta-new__grid { grid-template-columns: 1fr; }
  .closing-cta-new__visual { min-height: 60vh; }
}
</style>
