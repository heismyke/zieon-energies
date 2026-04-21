<script setup lang="ts">
import { RouterLink } from "vue-router";
import SiteFooter from "../components/site/SiteFooter.vue";
import SiteHero from "../components/site/SiteHero.vue";
import SiteHeader from "../components/site/SiteHeader.vue";

const steps = [
  {
    step: "STEP 1",
    title: "Subscribe to zievon",
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
    caption: "ZIEVON TRADES ENERGY YOU DON'T USE",
    description:
      "zievon trades excess energy from your battery with the grid. You earn rewards for supporting a more reliable grid.",
    art: "empty",
  },
];
</script>

<template>
  <div class="site-page">
    <SiteHeader />

    <main>
      <SiteHero
        eyebrow="POWER YOU CONTROL"
        title="Power your home for less"
        summary="Battery backup and solar. $0 upfront. A lower electric bill every month."
      >
        <template #actions>
          <RouterLink class="button button--light" to="/get-started">
            See if you qualify
          </RouterLink>
          <RouterLink class="button button--warm" to="/get-started">
            Get your estimate
          </RouterLink>
        </template>
      </SiteHero>

      <section class="benefits-grid">
        <div class="benefit-row benefit-row--top">
          <div class="benefit-row__spacer"></div>
          <article class="benefit-copy">
            <p class="eyebrow">SAVE</p>
            <h2 class="section-title benefit-copy__title">Cut your electric bill by 20% or more</h2>
          </article>
          <div class="benefit-image benefit-image--home"></div>
        </div>

        <div class="benefit-row benefit-row--middle">
          <div class="benefit-image benefit-image--battery"></div>
          <article class="benefit-copy">
            <p class="eyebrow">PROTECT</p>
            <h2 class="section-title benefit-copy__title">Keep the lights on with battery backup</h2>
          </article>
          <div class="benefit-row__spacer"></div>
        </div>

        <div class="benefit-row benefit-row--bottom">
          <div class="benefit-row__spacer"></div>
          <article class="benefit-copy">
            <p class="eyebrow">EARN</p>
            <h2 class="section-title benefit-copy__title">Get rewarded for using zievon</h2>
          </article>
          <div class="benefit-image benefit-image--phone"></div>
        </div>
      </section>

      <section class="how-it-works">
        <div class="how-it-works__intro">
          <p class="eyebrow eyebrow--light">HOW ZIEVON WORKS</p>
          <h2 class="display-title">A new way to power your home</h2>
          <p>
            With zievon, your home generates and stores power with solar and battery
            backup. We cover installation and upfront costs, so you get outage protection and
            lower market energy rates.
          </p>
          <RouterLink class="button button--light" to="/get-started">
            See if your house qualifies
          </RouterLink>
        </div>

        <div class="how-it-works__steps">
          <article v-for="step in steps" :key="step.title" class="step-card">
            <div class="step-card__copy">
              <p class="eyebrow">{{ step.step }}</p>
              <h3 class="section-title section-title--compact">{{ step.title }}</h3>
              <p class="step-card__caption">{{ step.caption }}</p>
              <p class="step-card__description">{{ step.description }}</p>
              <RouterLink
                v-if="step.step === 'STEP 3'"
                class="button button--dark"
                to="/get-started"
              >
                Get your estimate
              </RouterLink>
            </div>
            <div :class="['step-card__art', `step-card__art--${step.art}`]">
              <div v-if="step.art === 'badge'" class="step-badge">
                <svg viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2 18H30M6 18C6 12.4772 10.4772 8 16 8C21.5228 8 26 12.4772 26 18M16 2V10M10 5L12.8 9.2M22 5L19.2 9.2"
                    stroke="currentColor"
                    stroke-width="2.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div v-else-if="step.art === 'house'" class="house-wireframe">
                <span class="house-wireframe__roof"></span>
                <span class="house-wireframe__body"></span>
                <span class="house-wireframe__panel"></span>
                <span class="house-wireframe__battery"></span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section class="insight-stack">
        <article class="insight-banner insight-banner--hero">
          <p class="eyebrow eyebrow--light">HOW ZIEVON WORKS</p>
          <h2 class="display-title">Today's grid was built for yesterday's world</h2>
        </article>

        <article class="insight-banner insight-banner--facts">
          <p class="eyebrow eyebrow--light">HOW ZIEVON WORKS</p>
          <div class="insight-banner__facts">
            <p>Electricity costs are skyrocketing</p>
            <p>Blackouts are 10X more common than in 1980</p>
            <p>More than 50% of U.S. homes are at risk of outages</p>
          </div>
        </article>

        <article class="insight-banner insight-banner--network">
          <p class="eyebrow eyebrow--light">HOW ZIEVON WORKS</p>
          <h2 class="display-title display-title--narrow">
            zievon is creating the power we all need by building the world's largest
            decentralized energy network
          </h2>
        </article>
      </section>

      <section class="rewards-section">
        <p class="eyebrow">SUN POINTS</p>
        <h2 class="display-title display-title--dark">Power the network. Get rewarded.</h2>
        <p class="rewards-section__copy">
          zievon rewards the people that power it. Earn Sun Points for gift cards, merch,
          or to pay your zievon subscription.
        </p>
        <RouterLink class="button button--dark" to="/get-started">
          See if your house qualifies
        </RouterLink>
        <div class="rewards-map">
          <span v-for="index in 12" :key="index" class="rewards-map__dot"></span>
        </div>
      </section>

      <section class="closing-cta">
        <div class="closing-cta__content">
          <p class="eyebrow">THE FUTURE IS BRIGHT</p>
          <h2 class="display-title display-title--dark">Step into zievon</h2>
          <p>
            Ready to take control of your power? It’s time to step out of the past and into a
            more resilient, rewarding energy future.
          </p>
          <RouterLink class="button button--dark" to="/get-started">
            See if you qualify
          </RouterLink>
        </div>
        <div class="closing-cta__visual">
          <div class="closing-cta__photo"></div>
          <div class="closing-cta__fold"></div>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>
