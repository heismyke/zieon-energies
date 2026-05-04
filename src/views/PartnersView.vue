<script setup lang="ts">
import { onMounted } from "vue";
import SiteHeader from "../components/site/SiteHeader.vue";
import SiteFooter from "../components/site/SiteFooter.vue";
import { gsap } from "../lib/gsap";

const whySteps = [
  {
    num: "01",
    eyebrow: "CLOSE FASTER",
    title: "A deal designed to sell",
    description: "Unlike competitors who make storage a complicated negotiation, zieon energies keeps it simple: every install includes a battery, full stop."
  },
  {
    num: "02",
    eyebrow: "GET PAID SOONER",
    title: "Stop waiting 4 months for your commission",
    description: "We pay the majority of your commission within 10 days of installation and approval."
  },
  {
    num: "03",
    eyebrow: "EASIER OPERATIONS",
    title: "Back office, handled",
    description: "zieon energies acts as your operations team. We handle procurement, compliance, and filings — and our partner portal gives you real-time tracking for every project."
  }
];

const comparisonItems = [
  { label: "BATTERY COST", old: "$50–$100/mo add-on", new: "$0 — Standard on every install" },
  { label: "SALES FRICTION", old: "Price jumps stall deals", new: "Storage is the hook — converts as-is" },
  { label: "PARTNER PAYOUT", old: "60–120 day wait for M2", new: "Faster commission payouts" },
  { label: "PROCUREMENT", old: "Usually your problem", new: "Handled by zieon energies" }
];

const tableRows = [
  { label: "BATTERY COST", old: "Add-on", new: "$0" },
  { label: "SALES FRICTION", old: "Price objections stall the deal", new: "BATTERY CLOSES THE DEAL", oldStrikethrough: true },
  { label: "PARTNER PAYOUT", old: "M2 held 60–120 days", new: "FASTER COMMISSION PAYOUTS", oldStrikethrough: true },
  { label: "PROCUREMENT", old: "Figure it out yourself", new: "WE HANDLE PROCUREMENT", oldStrikethrough: true }
];

onMounted(() => {
  // Hero Animation
  gsap.from(".about-hero__logo", {
    scale: 0.9,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
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
  <div class="site-page">
    <SiteHeader />

    <main>
      <!-- Hero Section -->
      <section class="about-hero">
        <div class="about-hero__waves">
           <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <g opacity="0.4">
              <path d="M-100 200C200 150 400 350 700 300C1000 250 1200 450 1500 400" stroke="white" stroke-width="80" />
              <path d="M-100 400C200 350 400 550 700 500C1000 450 1200 650 1500 600" stroke="white" stroke-width="80" />
              <path d="M-100 600C200 550 400 750 700 700C1000 650 1200 850 1500 800" stroke="white" stroke-width="80" />
              <path d="M-100 800C200 750 400 950 700 900C1000 850 1200 1050 1500 1000" stroke="white" stroke-width="80" />
            </g>
          </svg>
        </div>
        <div class="about-hero__inner">
          <div class="about-hero__logo">
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
          </div>
        </div>
      </section>

      <!-- Why Partners Choose Section -->
      <section class="partners-why">
        <div class="partners-why__inner">
          <div class="partners-why__card reveal">
             <p class="eyebrow eyebrow--light">THE ZIEON DIFFERENCE</p>
             <h2 class="display-title">Why partners choose zieon energies</h2>
             <p class="partners-why__summary">
               Close faster with a battery included, get paid on time, and let us handle equipment costs.
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

      <!-- PPA Comparison Section -->
      <section class="ppa-comparison">
        <div class="ppa-comparison__inner">
          <p class="eyebrow reveal">HOW WE COMPARE</p>
          <h2 class="display-title display-title--dark reveal">Not all PPAs are built the same</h2>
          <p class="ppa-comparison__subtitle reveal">Same roof, different deal.</p>

          <div class="ppa-comparison__grid">
            <div class="ppa-card ppa-card--old reveal">
              <p class="eyebrow">THE OLD WAY</p>
              <h3 class="section-title">Typical PPAs</h3>
              <div class="ppa-card__items">
                <div v-for="item in comparisonItems" :key="item.label" class="ppa-item">
                  <p class="ppa-item__value">{{ item.old }}</p>
                  <p class="eyebrow">{{ item.label }}</p>
                </div>
              </div>
            </div>
            <div class="ppa-card ppa-card--new reveal">
              <div class="ppa-card__badge">THE ZIEON WAY</div>
              <h3 class="section-title">Built different</h3>
              <div class="ppa-card__items">
                <div v-for="item in comparisonItems" :key="item.label" class="ppa-item">
                  <p class="ppa-item__value">{{ item.new }}</p>
                  <p class="eyebrow eyebrow--light">{{ item.label }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="ppa-table reveal">
            <div v-for="row in tableRows" :key="row.label" class="ppa-table__row">
              <div class="ppa-table__cell">
                <p class="eyebrow">{{ row.label }}</p>
                <p :class="{ 'ppa-table__strikethrough': row.oldStrikethrough }">{{ row.old }}</p>
              </div>
              <div class="ppa-table__cell ppa-table__cell--center">
                <p class="ppa-table__highlight">{{ row.new }}</p>
              </div>
            </div>
            <div class="ppa-table__total">
              <p class="eyebrow">TOTAL ADVANTAGE</p>
              <h3 class="ppa-table__win">zieon energies wins.</h3>
            </div>
          </div>
        </div>
      </section>

      <!-- Step into Section -->
      <section class="step-into">
        <div class="step-into__inner">
          <div class="step-into__copy reveal">
            <p class="eyebrow">PARTNER WITH US</p>
            <h2 class="display-title">Step into zieon energies</h2>
            <p>Join the network of partners closing faster, earning more, and building better businesses.</p>
          </div>
          <div class="step-into__form reveal">
            <div class="partner-form-container">
              <form class="partner-form" @submit.prevent>
                <p class="eyebrow">CONTACT INFORMATION</p>
                <div class="form-grid">
                  <div class="form-group">
                    <label>FIRST NAME *</label>
                    <input type="text" placeholder="Jane" required />
                  </div>
                  <div class="form-group">
                    <label>LAST NAME *</label>
                    <input type="text" placeholder="Smith" required />
                  </div>
                  <div class="form-group full-width">
                    <label>EMAIL *</label>
                    <input type="email" placeholder="email@company.com" required />
                  </div>
                  <div class="form-group">
                    <label>YOUR PHONE # *</label>
                    <input type="tel" placeholder="(555) 000-0000" required />
                  </div>
                  <div class="form-group">
                    <label>JOB TITLE *</label>
                    <input type="text" placeholder="Sales Manager" required />
                  </div>
                </div>

                <p class="eyebrow mt-8">COMPANY INFORMATION</p>
                <div class="form-grid">
                   <div class="form-group full-width">
                    <label>COMPANY NAME *</label>
                    <input type="text" placeholder="Acme Solar" required />
                  </div>
                  <div class="form-group">
                    <label>COMPANY TYPE *</label>
                    <select required>
                      <option value="" disabled selected>Select...</option>
                      <option value="installer">Installer</option>
                      <option value="sales">Sales Org</option>
                      <option value="both">Both</option>
                    </select>
                  </div>
                   <div class="form-group">
                    <label>COMPANY WEBSITE *</label>
                    <input type="url" placeholder="www.acmesolar.com" required />
                  </div>
                   <div class="form-group">
                    <label>COMPANY ADDRESS *</label>
                    <input type="text" placeholder="Street, City, State, Zip" required />
                  </div>
                   <div class="form-group">
                    <label>COMPANY PHONE # *</label>
                    <input type="tel" placeholder="(555) 000-0000" required />
                  </div>
                </div>

                <div class="form-group full-width mt-6">
                  <label>STATES SERVICED</label>
                  <div class="checkbox-grid">
                    <label class="checkbox-label"><input type="checkbox" /> Massachusetts (MA)</label>
                    <label class="checkbox-label"><input type="checkbox" /> Illinois (IL)</label>
                    <label class="checkbox-label"><input type="checkbox" /> New Jersey (NJ)</label>
                  </div>
                </div>

                <div class="form-group full-width mt-4">
                  <label>OTHER STATES SERVICED?</label>
                  <input type="text" placeholder="List areas of operation" />
                </div>

                <button type="submit" class="button button--dark w-full mt-8">Become a Partner</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>

<style scoped>
.about-hero {
  height: 100vh;
  background: #4e6bbd;
  background: radial-gradient(circle at center, #5d81df 0%, #2d4da7 100%);
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
}

.about-hero__waves {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-hero__waves svg {
  width: 120%;
  height: 120%;
  transform: rotate(-15deg);
}

.about-hero__inner {
  position: relative;
  z-index: 1;
  text-align: center;
}

.about-hero__logo .brand-mark {
  gap: 1.5rem;
}

.about-hero__logo .brand-mark__icon {
  width: clamp(4rem, 8vw, 6rem);
  color: white;
}

.about-hero__logo .brand-mark__text {
  font-size: clamp(3.5rem, 7vw, 6rem);
  color: white;
  letter-spacing: -0.06em;
  font-weight: 500;
}

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

.partner-step__content p:not(.eyebrow) {
  margin-top: 1rem;
  font-size: 1.05rem;
  line-height: 1.45;
  color: rgba(17, 17, 17, 0.75);
}

.ppa-comparison {
  background: var(--color-beige);
  padding: 4rem 2rem 8rem;
}

.ppa-comparison__inner {
  max-width: var(--site-max-width);
  margin: 0 auto;
}

.ppa-comparison__subtitle {
  font-size: 1.35rem;
  margin-top: 0.75rem;
  color: var(--color-grey);
}

.ppa-comparison__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 4rem;
}

.ppa-card {
  padding: clamp(2rem, 4vw, 4rem);
  border-radius: 1.5rem;
}

.ppa-card--old {
  background: var(--color-beige-1);
}

.ppa-card--new {
  background: var(--color-gradient);
  color: white;
  position: relative;
  overflow: hidden;
}

.ppa-card__badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 999px;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  backdrop-filter: blur(8px);
}

.ppa-card .section-title {
  font-size: clamp(2rem, 4vw, 3.5rem);
  margin-top: 1.5rem;
}

.ppa-card__items {
  margin-top: clamp(2rem, 5vw, 4rem);
  display: flex;
  flex-direction: column;
  gap: clamp(1.5rem, 3vw, 2.5rem);
}

.ppa-item {
  border-bottom: 1px solid rgba(17, 17, 17, 0.08);
  padding-bottom: 1.25rem;
}

.ppa-card--new .ppa-item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}

.ppa-item__value {
  font-size: clamp(1.1rem, 2vw, 1.6rem);
  font-weight: 500;
  margin-bottom: 0.6rem;
  letter-spacing: -0.02em;
}

.ppa-table {
  margin-top: 4rem;
  background: var(--color-beige-1);
  border-radius: 1.5rem;
  padding: clamp(2rem, 4vw, 4rem);
}

.ppa-table__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1.75rem 0;
  border-bottom: 1px dashed rgba(17, 17, 17, 0.15);
}

.ppa-table__cell--center {
  text-align: right;
}

.ppa-table__highlight {
  color: #f66f00;
  font-size: 1.1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.ppa-table__strikethrough {
  text-decoration: line-through;
  opacity: 0.45;
}

.ppa-table__total {
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 1rem;
}

.ppa-table__win {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-family: var(--font-body);
  font-weight: 500;
  color: #f66f00;
  letter-spacing: -0.04em;
}

.step-into {
  background: var(--color-dark-blue);
  color: white;
  padding: clamp(4rem, 10vw, 10rem) 2rem;
}

.step-into__inner {
  max-width: var(--site-max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: clamp(2rem, 5vw, 6rem);
  align-items: start;
}

.step-into__copy .display-title {
  margin-top: 1rem;
  margin-bottom: 2.5rem;
}

.step-into__copy p:not(.eyebrow) {
  font-size: 1.25rem;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.9);
}

.partner-form-container {
  background: var(--color-beige);
  color: var(--color-black);
  padding: clamp(2rem, 4vw, 4rem);
  border-radius: 1.5rem;
  box-shadow: 0 30px 60px rgba(0,0,0,0.2);
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-group label {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  color: var(--color-grey);
}

.form-group input, .form-group select {
  border: none;
  border-bottom: 1px solid rgba(17, 17, 17, 0.15);
  background: transparent;
  padding: 0.6rem 0;
  font-size: 1rem;
  font-family: var(--font-body);
  transition: border-color 0.2s;
}

.form-group input:focus {
  outline: none;
  border-color: #f66f00;
}

.checkbox-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.2rem;
  margin-top: 0.75rem;
}

.checkbox-label {
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
}

.checkbox-label input {
  width: 1.1rem;
  height: 1.1rem;
  accent-color: #f66f00;
}

.mt-8 { margin-top: 3rem; }
.mt-6 { margin-top: 2rem; }
.mt-4 { margin-top: 1.5rem; }
.w-full { width: 100%; }

@media (max-width: 960px) {
  .partners-why__inner, .ppa-comparison__grid, .step-into__inner {
    grid-template-columns: 1fr;
  }
  
  .partners-why__card {
    position: static;
    min-height: auto;
  }
  
  .about-hero__logo .brand-mark {
    flex-direction: column;
    gap: 1rem;
  }
  
  .ppa-table__row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .ppa-table__cell--center {
    text-align: left;
  }
}

@media (max-width: 640px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
  
  .ppa-table__total {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
