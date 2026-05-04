<script setup lang="ts">
import { onMounted, ref } from "vue";
import SiteHeader from "../components/site/SiteHeader.vue";
import SiteFooter from "../components/site/SiteFooter.vue";
import { gsap, ScrollTrigger } from "../lib/gsap";

const aboutHero = ref(null);
const sections = ref([]);

onMounted(() => {
  // Hero Animation
  gsap.from(".about-hero__content > *", {
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
  });

  // Reveal sections on scroll
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      y: 60,
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
    y: -50,
    ease: "none",
  });
});
</script>

<template>
  <div class="site-page">
    <SiteHeader />

    <main>
      <!-- Hero Section (Screenshot 1 & 8) -->
      <section class="about-hero" ref="aboutHero">
        <div class="about-hero__grid">
          <div class="grid-line grid-line--v"></div>
          <div class="grid-line grid-line--v"></div>
          <div class="grid-line grid-line--v"></div>
          <div class="grid-line grid-line--h"></div>
          <div class="grid-line grid-line--h"></div>
        </div>
        
        <div class="about-hero__main-img"></div>
        
        <div class="about-hero__content">
          <p class="eyebrow eyebrow--light">ABOUT ZIEON ENERGIES</p>
          <h1 class="display-title display-title--hero">More Power</h1>
          <p class="about-hero__summary">
            zieon energies is creating the power we all need by decentralizing the American power grid.
          </p>
          <div class="about-hero__actions">
            <RouterLink class="button button--light" to="/get-started">For homeowners</RouterLink>
            <RouterLink class="button button--dark" to="/partners">For partners</RouterLink>
          </div>
        </div>

        <div class="about-hero__stats">
          <div class="hero-stat reveal">
            <p class="eyebrow eyebrow--light">kWh generated</p>
            <p class="hero-stat__value">8.2kWh – 9.5kWh</p>
          </div>
          <div class="hero-stat reveal">
            <p class="eyebrow eyebrow--light">Thermostat</p>
            <p class="hero-stat__value">68°F</p>
          </div>
          <div class="hero-stat reveal">
            <p class="eyebrow eyebrow--light">Backup stored</p>
            <div class="stat-progress">
              <div class="stat-progress__bar" style="width: 70%"></div>
            </div>
          </div>
        </div>
        
        <div class="about-hero__accent-box reveal"></div>
      </section>

      <!-- Financing Section (Screenshot 2) -->
      <section class="about-split about-split--blue">
        <div class="about-split__visual reveal">
           <div class="about-split__img about-split__img--solar parallax-img"></div>
           <div class="about-split__overlay"></div>
        </div>
        <div class="about-split__content reveal">
          <h2 class="display-title">Financing the electrified world</h2>
          <div class="about-split__copy">
            <div class="copy-meta">
              <p class="eyebrow">ZIEON</p>
              <p class="eyebrow">OUR PLATFORM</p>
            </div>
            <p>
              Behind every home in the network is a vertically integrated capital markets platform purpose-built for distributed energy. zieon energies built every layer. Financing, installation, monitoring, and grid operations. One company, end to end.
            </p>
          </div>
        </div>
      </section>

      <!-- New Kind of Energy Company (Screenshot 3) -->
      <section class="about-split about-split--yellow about-split--reverse">
        <div class="about-split__visual reveal">
           <div class="about-split__img about-split__img--living parallax-img"></div>
           <div class="about-split__overlay"></div>
        </div>
        <div class="about-split__content reveal">
          <h2 class="display-title">A new kind of energy company</h2>
          <div class="about-split__copy">
            <div class="copy-meta">
              <p class="eyebrow">ZIEON</p>
              <p class="eyebrow">WHAT WE DO</p>
            </div>
            <p>
              zieon energies is building a distributed energy network that gets stronger with every home. The grid of the future won't come from one place. It'll come from everywhere.
            </p>
          </div>
        </div>
      </section>

      <!-- Grid Has No Master (Screenshot 4) -->
      <section class="about-full about-full--dark">
        <div class="about-full__bg parallax-img"></div>
        <div class="about-full__overlay"></div>
        <div class="about-full__content reveal">
          <h2 class="display-title display-title--serif">The grid has no master</h2>
          <p class="about-full__summary">
            Power should be generated where it’s used, stored where it’s needed, and shared by the people who produce it.
          </p>
        </div>
        <div class="about-full__meta">
          <p class="eyebrow eyebrow--light">ZIEON</p>
          <p class="eyebrow eyebrow--light">OUR THESIS</p>
        </div>
      </section>

      <!-- Investors (Screenshot 5) -->
      <section class="investors reveal">
        <p class="eyebrow text-center">BACKED BY THE INDUSTRY'S LEADING INVESTORS</p>
        <div class="investors__grid">
          <span class="investor-logo">coinbase | Ventures</span>
          <span class="investor-logo">not boring capital</span>
          <span class="investor-logo">M13</span>
          <span class="investor-logo">EV</span>
          <span class="investor-logo">LERER HIPPEAU</span>
          <span class="investor-logo">Room40</span>
          <span class="investor-logo">Framework</span>
          <span class="investor-logo">alózcrypto</span>
          <span class="investor-logo">LATTICE</span>
        </div>
      </section>

      <!-- Lower Electric Bill (Screenshot 6 & 7) -->
      <section class="about-mosaic">
        <div class="about-mosaic__grid">
          <div class="mosaic-item mosaic-item--text reveal">
            <h2 class="section-title">A lower electric bill in every home</h2>
          </div>
          <div class="mosaic-item mosaic-item--img reveal">
             <div class="mosaic-img mosaic-img--houses parallax-img"></div>
          </div>
          <div class="mosaic-item mosaic-item--img reveal">
             <div class="mosaic-img mosaic-img--storm parallax-img"></div>
          </div>
          <div class="mosaic-item mosaic-item--large-text reveal">
             <h2 class="display-title display-title--dark">More Power</h2>
          </div>
        </div>
      </section>

       <!-- Co-founder Note (Screenshot 8) -->
       <section class="founder-note reveal">
         <div class="founder-note__inner">
           <h2 class="display-title display-title--serif">A note from our co-founder</h2>
           <div class="founder-note__body">
             <p>I grew up in Louisiana, where power outages were part of life. Back then, I thought they were a local problem. Today, they're everyone's problem. The grid is aging. Blackouts are rising. Prices keep climbing. And the systems we rely on aren't built to handle the demand ahead.</p>
             <p>The good news? The solution is right in front of us. Equipped with solar and batteries, our homes can work together to create a stronger, more resilient energy system for everyone. That's the idea behind zieon energies.</p>
             <p>One home can weather a storm. Thousands working together can shift the entire system. The future is bright, and we're so glad you've joined us.</p>
           </div>
           <div class="founder-note__footer">
             <div class="founder-note__sig">
               <p class="section-title">Power on,</p>
               <p class="section-title">Jason</p>
               <p class="eyebrow">CEO AND CO-FOUNDER</p>
             </div>
             <div class="founder-note__logo">
                <svg viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 18H30M6 18C6 12.4772 10.4772 8 16 8C21.5228 8 26 12.4772 26 18M16 2V10M10 5L12.8 9.2M22 5L19.2 9.2" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
             </div>
           </div>
         </div>
       </section>

       <!-- Future is Bright (Screenshot 9) -->
       <section class="closing-bright reveal">
          <div class="closing-bright__inner">
            <p class="section-title">The future is</p>
            <div class="closing-bright__logo">
               <svg viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 18H30M6 18C6 12.4772 10.4772 8 16 8C21.5228 8 26 12.4772 26 18M16 2V10M10 5L12.8 9.2M22 5L19.2 9.2" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <h2 class="massive-text">Bright</h2>
          </div>
       </section>
    </main>

    <SiteFooter />
  </div>
</template>

<style scoped>
.about-hero {
  position: relative;
  min-height: 100vh;
  background: #a9bbed;
  overflow: hidden;
  padding: 8rem 2rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.about-hero__grid {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.grid-line {
  position: absolute;
  background: rgba(255, 255, 255, 0.2);
}

.grid-line--v { width: 1px; height: 100%; top: 0; }
.grid-line--v:nth-child(1) { left: 25%; }
.grid-line--v:nth-child(2) { left: 50%; }
.grid-line--v:nth-child(3) { left: 75%; }

.grid-line--h { height: 1px; width: 100%; left: 0; }
.grid-line--h:nth-child(4) { top: 30%; }
.grid-line--h:nth-child(5) { top: 70%; }

.about-hero__main-img {
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
  height: 100%;
  background: url('/consumption.png') center/cover no-repeat;
  mask-image: linear-gradient(to right, black 80%, transparent);
}

.about-hero__content {
  position: relative;
  z-index: 2;
  max-width: 40rem;
  margin-bottom: 4rem;
}

.about-hero__summary {
  font-size: 1.5rem;
  margin-top: 1.5rem;
  line-height: 1.3;
}

.about-hero__actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.about-hero__stats {
  position: absolute;
  right: 5%;
  top: 35%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  z-index: 2;
}

.hero-stat__value {
  font-size: 1.2rem;
  margin-top: 0.5rem;
}

.stat-progress {
  width: 10rem;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  margin-top: 1rem;
}

.stat-progress__bar {
  height: 100%;
  background: white;
}

.about-hero__accent-box {
  position: absolute;
  right: 18%;
  top: 30%;
  width: 18rem;
  aspect-ratio: 1;
  background: #9061ff;
  opacity: 0.8;
  z-index: 1;
}

.about-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
}

.about-split--reverse {
  direction: rtl;
}

.about-split--reverse .about-split__content {
  direction: ltr;
}

.about-split--blue { background: #bed5ff; color: #1d3e86; }
.about-split--yellow { background: #f4cf58; color: #4c2806; }

.about-split__visual {
  position: relative;
  overflow: hidden;
}

.about-split__img {
  width: 100%;
  height: 120%;
  background-size: cover;
  background-position: center;
}

.about-split__img--solar { background-image: url('/public/simulator_screenshot_96F6D73C-3A9B-48F0-97AC-1BD93D245614.png'); }
.about-split__img--living { background-image: url('/public/home1.png'); }

.about-split__overlay {
  position: absolute;
  inset: 20%;
  background: currentColor;
  opacity: 0.8;
}

.about-split__content {
  padding: 8rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about-split__copy {
  margin-top: 4rem;
  display: flex;
  gap: 4rem;
}

.copy-meta {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 8rem;
}

.about-split__copy p:not(.eyebrow) {
  font-size: 1.25rem;
  line-height: 1.4;
  max-width: 30rem;
}

.about-full {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 4rem;
  overflow: hidden;
}

.about-full--dark { background: black; color: white; }

.about-full__bg {
  position: absolute;
  inset: 0;
  background: url('/public/simulator_screenshot_0F5887C3-12CE-4F11-92AE-19683F26E333.png') center/cover no-repeat;
  opacity: 0.6;
}

.about-full__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.8));
}

.about-full__content {
  position: relative;
  z-index: 1;
  max-width: 50rem;
}

.display-title--serif {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(3rem, 8vw, 6rem);
}

.about-full__summary {
  font-size: 1.5rem;
  margin-top: 2rem;
  max-width: 35rem;
  margin-inline: auto;
}

.about-full__meta {
  position: absolute;
  top: 4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 4rem;
}

.investors {
  background: #fff7e9;
  padding: 8rem 2rem;
}

.investors__grid {
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem 5rem;
  opacity: 0.6;
}

.investor-logo {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.about-mosaic {
  background: black;
  color: white;
  padding: 1px 0;
}

.about-mosaic__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
}

.mosaic-item {
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  position: relative;
  overflow: hidden;
}

.mosaic-item--text { background: black; }
.mosaic-item--large-text { background: black; grid-column: span 2; min-height: 60vh; }

.mosaic-item .section-title { font-size: 3rem; text-align: center; }
.mosaic-item .display-title { font-size: 8rem; }

.mosaic-img {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0.8;
}

.mosaic-img--houses { background-image: url('/public/home1.png'); }
.mosaic-img--storm { background-image: url('/public/simulator_screenshot_B4AA8A88-0A1D-4EE1-AB64-E1B6D158F534.png'); }

.founder-note {
  background: #c8b0ff;
  padding: 10rem 2rem;
  display: flex;
  justify-content: center;
}

.founder-note__inner {
  background: #eee6ff;
  max-width: 50rem;
  padding: clamp(2rem, 8vw, 6rem);
  box-shadow: 0 50px 100px rgba(0,0,0,0.1);
}

.founder-note__body {
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #321f61;
}

.founder-note__footer {
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.founder-note__logo {
  width: 4rem;
  color: #321f61;
}

.closing-bright {
  background: #fff7e9;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  color: #4c2806;
}

.closing-bright__inner {
  text-align: center;
  position: relative;
}

.closing-bright__logo {
  width: 8rem;
  margin: 0 auto 2rem;
}

.massive-text {
  font-family: var(--font-display);
  font-size: clamp(6rem, 20vw, 15rem);
  line-height: 0.8;
  letter-spacing: -0.04em;
}

@media (max-width: 960px) {
  .about-split { grid-template-columns: 1fr; }
  .about-split__visual { min-height: 50vh; }
  .about-hero__main-img { width: 100%; mask-image: linear-gradient(to bottom, black 70%, transparent); }
  .about-hero__stats { position: static; margin-top: 4rem; flex-direction: row; flex-wrap: wrap; gap: 2rem; }
  .about-mosaic__grid { grid-template-columns: 1fr; }
  .mosaic-item--large-text { grid-column: auto; }
}
</style>
