<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import SiteFooter from "../components/site/SiteFooter.vue";
import SiteHero from "../components/site/SiteHero.vue";
import SiteHeader from "../components/site/SiteHeader.vue";
import { gsap } from "../lib/gsap";

const howCards = [
  {
    title: "01. Solar makes energy",
    text: "Your solar panels generate power every day, automatically put to work for your home.",
    tone: "solar",
  },
  {
    title: "02. Battery stores surplus",
    text: "Excess energy goes to your zieon energies battery. It's ready to power your home when you need it most.",
    tone: "battery",
  },
  {
    title: "03. Your home stays powered",
    text: "When your panels are generating, your home runs on solar. Your battery kicks in during outages to keep your critical loads running.",
    tone: "night",
  },
];

const hardwareCards = [
  {
    eyebrow: "SOLAR PANELS",
    title: "High-efficiency panels",
    text: "Tier-1 panels built for decades. zieon energies owns and maintains them, so you never pay for upkeep.",
    bullets: [
      "Hurricane-tested racking and snow-shedding design",
      "Sized and designed for your home and energy usage",
      "Full maintenance for the duration of your agreement",
      "25-year warranty",
    ],
    tone: "panel",
  },
  {
    eyebrow: "ZIEON ENERGIES BATTERY",
    title: "Backup power",
    text: "Stored energy activates in milliseconds during an outage, keeping your essentials running.",
    bullets: [
      "Powers your essentials for hours during outages",
      "No generators, no fumes, no noise",
      "10-year warranty",
    ],
    tone: "battery",
  },
  {
    eyebrow: "THE ZIEON ENERGIES APP",
    title: "Monitor everything",
    text: "Real-time monitoring of your solar, battery, and home energy usage with clear rewards and tracking.",
    bullets: [
      "Real-time production, storage, and usage monitoring",
      "Outage alerts and weather tracking",
      "Sun Points rewards for connecting devices and referring neighbors",
    ],
    tone: "app",
  },
];

const compareRows = [
  ["UPFRONT COST", "Payment required upfront", "$0 • No upfront system cost"],
  ["BATTERY BACKUP", "Optional add-on", "Included on every install"],
  ["MAINTENANCE", "You're responsible", "zieon energies covers & coordinates"],
  ["SYSTEM OWNERSHIP", "You own it", "Buy-out option after 5 years"],
  ["MONITORING", "Fragmented by equipment vendor", "Fully integrated • zieon energies app"],
  ["TRANSFERABILITY", "Resale depends on buyer", "Transfers easily with the home"],
];

const pathCards = [
  {
    eyebrow: "01 • SCOPE",
    title: "Qualify",
    bullets: [
      "Quick assessment to see if your house is right for zieon energies",
      "Customize your system",
      "Design coverage, battery size, and logistics",
    ],
    tone: "purple",
  },
  {
    eyebrow: "02 • INSTALL",
    title: "Install",
    bullets: [
      "Full-service setup by best-in-class installers",
      "All upfront costs covered by zieon energies",
      "Typical timeline: 12-14 weeks from contract to activation",
    ],
    tone: "blue",
  },
  {
    eyebrow: "03 • POWER ON",
    title: "Power on",
    bullets: [
      "Track production, savings, and backup in the zieon energies app",
      "A predictable monthly bill, lower than your utility",
      "Earn and redeem Sun Points for credits on your bill",
    ],
    tone: "yellow",
  },
];

const faqs = [
  {
    question: "How long does installation take?",
    answer:
      "Most installs take 1-2 days, with full activation in 12-14 weeks depending on permitting and utility timelines.",
  },
  {
    question: "What happens during an outage?",
    answer:
      "Your battery takes over automatically and keeps critical loads powered without a generator.",
  },
  {
    question: "What if I sell my home?",
    answer:
      "zieon energies transfers easily with the home, which makes resale simpler than a fragmented equipment stack.",
  },
  {
    question: "Can I pay off the system early?",
    answer:
      "Yes. zieon energies supports buy-out paths after the initial term window.",
  },
  {
    question: "How long does the battery last?",
    answer:
      "The battery is designed for long-term daily use and is covered by warranty as part of the system.",
  },
  {
    question: "Who handles maintenance?",
    answer:
      "zieon energies coordinates monitoring, service, and maintenance so homeowners are not left managing vendors.",
  },
  {
    question: "What if my roof needs replacing?",
    answer:
      "That is assessed during qualification so install timing and scope can be planned correctly upfront.",
  },
];

const activeFaq = ref(0);

const testimonials = [
  {
    quote: "zieon energies was the single-best thing we could have done for our home.",
    author: "Dan H., Norwood, MA",
    tone: "sunset",
  },
  {
    quote: "Our energy bill dropped by 30%. I wish we'd made this switch sooner.",
    author: "Sarah M., Chen L.",
    tone: "dusk",
  },
  {
    quote: "The whole process was painless. Now we barely think about our energy bill.",
    author: "Michael R., Torrance, NV",
    tone: "warm",
  },
];

onMounted(() => {
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
});
</script>

<template>
  <div class="site-page">
    <SiteHeader />

    <main class="product-page">
      <SiteHero
        eyebrow="YOUR HOME'S NEW SYSTEM"
        title="Your home's new energy system"
        summary="Make black panels turn sunlight into energy. A home battery protects against peak rates and power outages."
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

      <section class="product-how reveal">
        <div class="product-how__inner">
          <p class="eyebrow">ZIEON ENERGIES EXPLAINED</p>
          <h2 class="section-title product-how__title">How zieon energies works for you</h2>
          <div class="product-how__grid">
            <article v-for="card in howCards" :key="card.title" class="how-card reveal">
              <h3 class="how-card__title">{{ card.title }}</h3>
              <div :class="['how-card__media', `how-card__media--${card.tone}`]"></div>
              <p class="how-card__text">{{ card.text }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="hardware-section reveal">
        <div class="hardware-section__inner">
          <p class="eyebrow">YOUR ZIEON ENERGIES SYSTEM</p>
          <h2 class="section-title hardware-section__title">
            The hardware behind your lower electric bill
          </h2>
          <div class="hardware-section__grid">
            <article v-for="card in hardwareCards" :key="card.title" class="hardware-card reveal">
              <div :class="['hardware-card__media', `hardware-card__media--${card.tone}`]"></div>
              <p class="eyebrow hardware-card__eyebrow">{{ card.eyebrow }}</p>
              <h3 class="hardware-card__title">{{ card.title }}</h3>
              <p class="hardware-card__text">{{ card.text }}</p>
              <ul class="hardware-card__list">
                <li v-for="bullet in card.bullets" :key="bullet">{{ bullet }}</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section class="product-story reveal">
        <div class="product-story__inner">
          <p class="eyebrow eyebrow--light">HOW ZIEON ENERGIES WORKS</p>
          <h2 class="display-title">A new way to power your home</h2>
          <p class="product-story__copy">
            With zieon energies, your home generates and stores power with solar and battery backup.
            We cover installation and upfront costs. You get 24/7 outage protection and below-market
            energy rates.
          </p>
          <RouterLink class="button button--light" to="/get-started">
            See if your house qualifies
          </RouterLink>
        </div>
      </section>

      <section class="comparison-section reveal">
        <div class="comparison-section__inner">
          <p class="eyebrow">LET'S BREAK IT DOWN</p>
          <h2 class="section-title comparison-section__title">zieon energies or Cash Purchase</h2>
          <p class="comparison-section__subtitle">Which is right for you?</p>

          <div class="comparison-table reveal">
            <div class="comparison-table__head comparison-table__row">
              <span></span>
              <span>CASH</span>
              <span>ZIEON ENERGIES</span>
            </div>
            <div v-for="row in compareRows" :key="row[0]" class="comparison-table__row">
              <span>{{ row[0] }}</span>
              <span>{{ row[1] }}</span>
              <span>{{ row[2] }}</span>
            </div>
          </div>

          <div class="comparison-notes">
            <div class="comparison-note reveal">
              <p class="eyebrow">WITH CASH PURCHASE</p>
              <ul>
                <li>You want full ownership and control</li>
                <li>You're prepared to manage and maintain your system</li>
                <li>You prefer to pay for system, installation, and service upfront</li>
              </ul>
            </div>
            <div class="comparison-note comparison-note--warm reveal">
              <p class="eyebrow">WITH ZIEON ENERGIES</p>
              <ul>
                <li>Get started with no upfront costs for equipment or installation</li>
                <li>Professional installation, monitoring, and support included</li>
                <li>Battery backup included</li>
              </ul>
            </div>
          </div>

          <p class="comparison-section__closing reveal">Save money. Stay powered. Earn rewards.</p>
          <span class="comparison-section__mark reveal" aria-hidden="true">
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
        </div>
      </section>

      <section class="path-section reveal">
        <div class="path-section__inner">
          <p class="eyebrow eyebrow--light">GETTING STARTED</p>
          <h2 class="display-title display-title--dark path-section__title">A simple path to zieon energies</h2>
          <div class="path-section__cards">
            <article v-for="card in pathCards" :key="card.title" :class="['path-card', `path-card--${card.tone}`, 'reveal']">
              <p class="eyebrow path-card__eyebrow">{{ card.eyebrow }}</p>
              <h3 class="path-card__title">{{ card.title }}</h3>
              <ul class="path-card__list">
                <li v-for="bullet in card.bullets" :key="bullet">{{ bullet }}</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section class="faq-section reveal">
        <div class="faq-section__inner">
          <p class="eyebrow">FREQUENTLY ASKED QUESTIONS</p>
          <h2 class="faq-section__title">Questions? <span>We have answers.</span></h2>
          <div class="faq-list">
            <button
              v-for="(faq, index) in faqs"
              :key="faq.question"
              class="faq-item reveal"
              type="button"
              @click="activeFaq = activeFaq === index ? -1 : index"
            >
              <span class="faq-item__question">{{ faq.question }}</span>
              <span class="faq-item__icon">{{ activeFaq === index ? "×" : "+" }}</span>
              <span v-if="activeFaq === index" class="faq-item__answer">{{ faq.answer }}</span>
            </button>
          </div>
        </div>
      </section>

      <section class="testimonials-section reveal">
        <div class="testimonials-section__inner">
          <p class="eyebrow eyebrow--light">WHAT HOMEOWNERS SAY</p>
          <h2 class="section-title testimonials-section__title">Real homes. Real savings.</h2>
          <div class="testimonials-grid">
            <article
              v-for="item in testimonials"
              :key="item.quote"
              :class="['testimonial-card', `testimonial-card--${item.tone}`, 'reveal']"
            >
              <div class="testimonial-card__overlay"></div>
              <blockquote>{{ item.quote }}</blockquote>
              <p>{{ item.author }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="signup-section reveal">
        <div class="signup-section__inner">
          <div class="signup-section__copy reveal">
          <h2 class="display-title display-title--dark">Step into zieon energies</h2>
            <p>Join homeowners saving on energy and staying powered through outages.</p>
            <span class="signup-section__mark" aria-hidden="true">
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
          </div>

          <form class="signup-form reveal">
            <h3>See if you qualify for zieon energies</h3>
            <p>Let's check if zieon energies is available at your area.</p>
            <div class="signup-form__grid">
              <label>
                <span>FIRST NAME *</span>
                <input type="text" placeholder="Jane" />
              </label>
              <label>
                <span>LAST NAME *</span>
                <input type="text" placeholder="Smith" />
              </label>
              <label class="signup-form__full">
                <span>EMAIL *</span>
                <input type="email" placeholder="jane@email.com" />
              </label>
              <label class="signup-form__full">
                <span>PHONE *</span>
                <input type="tel" placeholder="(555) 000-0000" />
              </label>
              <label class="signup-form__full">
                <span>STREET ADDRESS *</span>
                <input type="text" placeholder="123 Main St" />
              </label>
              <label>
                <span>CITY *</span>
                <input type="text" placeholder="Los Angeles" />
              </label>
              <label>
                <span>STATE</span>
                <input type="text" placeholder="CA" />
              </label>
              <label>
                <span>ZIP *</span>
                <input type="text" placeholder="90210" />
              </label>
            </div>
            <div class="signup-form__progress">
              <span></span>
            </div>
            <button class="button button--dark signup-form__submit" type="submit">Next</button>
          </form>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>
