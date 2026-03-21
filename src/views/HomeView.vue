<script setup lang="ts">
import Background from '../components/layout/Background.vue'
import Navigation from '../components/layout/Navigation.vue'
import Footer from '../components/layout/Footer.vue'
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})

const reviews = [
  {
    name: 'Chidi Okechukwu',
    role: 'Home Owner',
    content:
      'The ability to share units with my parents in the village instantly is a game changer. No more scratching cards over the phone.',
    avatar: 'CO',
  },
  {
    name: 'Sarah Alabi',
    role: 'Business Owner',
    content:
      'Zelavra AI helped me identify that my industrial fridge was consuming 40% more power than it should. Saved me thousands in the first month.',
    avatar: 'SA',
  },
  {
    name: 'Ibrahim Musa',
    role: 'Tech Enthusiast',
    content:
      'Finally, a clean interface for energy. The calculator is incredibly accurate. I know exactly when my units will run out.',
    avatar: 'IM',
  },
  {
    name: 'Anita Ephraim',
    role: 'Rental Manager',
    content:
      "Managing 12 different meters across 3 properties used to be a nightmare. Now it's just one dashboard. Absolute efficiency.",
    avatar: 'AE',
  },
]

const faqs = [
  {
    q: 'Is the app free to use?',
    a: 'Yes, the Zelavra app is free to download and use for monitoring. Premium features like Zelavra AI analytics are included with our hardware bundles.',
  },
  {
    q: 'Can I use it with any meter?',
    a: 'Zelavra supports most modern prepaid meters. For full automation and remote control, we recommend the Zelavra Smart Meter hardware.',
  },
  {
    q: 'How secure are my payments?',
    a: 'We use bank-grade encryption for all transactions. Your payment data is never stored on our servers, ensuring maximum security.',
  },
]
</script>

<template>
  <div class="relative min-h-screen bg-[#050505] font-sans selection:bg-brand-500/30">
    <Background />
    <Navigation />

    <main class="relative z-10 w-full flex flex-col items-center pt-20 md:pt-32 px-4 md:px-6">
      <!-- Hero -->
      <section
        id="home"
        class="w-full max-w-[90rem] mb-16 md:mb-24 flex flex-col items-center md:items-start text-center"
      >
        <p
          class="text-base sm:text-lg md:text-xl text-neutral-400 max-w-xs sm:max-w-md md:max-w-xl font-light leading-relaxed mb-6 md:mb-10"
        >
          One unified interface for your entire energy ecosystem.
        </p>
        <button
          class="px-6 sm:px-8 md:px-10 py-3 md:py-4 bg-brand-500 text-black text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] hover:bg-brand-400 transition-all shadow-lg shadow-brand-500/20"
        >
          Download App
        </button>
      </section>

      <!-- Video Section -->
      <section id="interface" class="relative w-full mb-48 px-6">
        <!-- Dark Grey Canvas Background -->
        <div class="absolute inset-x-0 top-0 h-[120%] bg-[#0d0d0d] -z-10"></div>

        <!-- Video Container -->
        <div class="max-w-7xl mx-auto pt-16 md:pt-24">
          <div
            class="relative w-full aspect-video rounded-[2rem] md:rounded-[3rem] bg-[#0A0A0A] border border-white/5 overflow-hidden shadow-2xl group cursor-pointer flex items-center justify-center"
          >
            <!-- Placeholder Image with Half-crop and Shadow -->
            <div class="absolute inset-0 z-0">
              <img
                src="/home1.png"
                class="w-full h-[200%] object-cover object-top opacity-40 grayscale-[20%] group-hover:scale-105 transition-transform duration-[3s]"
                alt="App Preview Placeholder"
              />
              <!-- Dark Shadow Overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-100"
              ></div>
              <div class="absolute inset-0 bg-[#050505]/60"></div>
            </div>

            <div class="relative z-10 flex flex-col items-center gap-4">
              <!-- Placeholder Play Button -->
              <div
                class="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="ml-1"
                >
                  <path d="m7 3 14 9-14 9z" />
                </svg>
              </div>
              <span class="text-neutral-400 text-[0.65rem] uppercase tracking-[0.3em]"
                >App Preview Video coming soon</span
              >
            </div>
          </div>
        </div>
      </section>

      <!-- User Journey: Section 1 - Home/Overview -->
      <section
        id="features"
        class="w-full max-w-7xl px-6 mb-48 grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
      >
        <div class="flex flex-col gap-8 order-2 md:order-1">
          <span class="text-[0.6rem] font-bold uppercase tracking-[0.4em] text-brand-500"
            >Step 01</span
          >
          <h2 class="text-4xl md:text-6xl font-medium text-white tracking-tight leading-tight">
            Everything at a Glance.
          </h2>
          <p class="text-neutral-400 text-lg font-light leading-relaxed">
            The Zelavra Dashboard provides a unified view of your entire energy ecosystem. Monitor
            your kWh balance in real-time, track historical consumption patterns, and manage
            multiple meters from a single, intuitive interface.
          </p>
          <div class="grid grid-cols-1 gap-4 mt-4">
            <div class="p-6 rounded-2xl bg-white/5 border border-white/5">
              <h4 class="text-white font-bold mb-1 text-sm">Real-time Sync</h4>
              <p class="text-xs text-neutral-500">
                Updates instantly across all your connected devices.
              </p>
            </div>
          </div>
        </div>
        <div class="relative aspect-[1206/2622] max-h-[700px] mx-auto order-1 md:order-2">
          <div class="absolute inset-0 bg-brand-500/10 blur-[100px] -z-10 rounded-full"></div>
          <div
            class="w-full h-full rounded-[2.5rem] overflow-hidden bg-black border-[6px] border-white/5 shadow-2xl"
          >
            <img
              src="/home1.png"
              class="w-full h-full object-cover"
              alt="Zelavra Dashboard Overview"
            />
          </div>
        </div>
      </section>

      <!-- User Journey: Section 2 - Add Meter -->
      <section
        class="w-full max-w-7xl px-6 mb-48 grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
      >
        <div class="relative aspect-[1206/2622] max-h-[700px] mx-auto order-1">
          <div class="absolute inset-0 bg-accent-magenta/10 blur-[100px] -z-10 rounded-full"></div>
          <div
            class="w-full h-full rounded-[2.5rem] overflow-hidden bg-black border-[6px] border-white/5 shadow-2xl"
          >
            <img src="/add_meter.png" class="w-full h-full object-cover" alt="Adding a new meter" />
          </div>
        </div>
        <div class="flex flex-col gap-8 order-2">
          <span class="text-[0.6rem] font-bold uppercase tracking-[0.4em] text-brand-500"
            >Step 02</span
          >
          <h2 class="text-4xl md:text-6xl font-medium text-white tracking-tight leading-tight">
            Expanding your Grid.
          </h2>
          <p class="text-neutral-400 text-lg font-light leading-relaxed">
            Adding a new meter to your account is as simple as scanning a QR code or entering your
            meter number. Whether it's your main residence, office, or a rental property, Zelavra
            organizes them into a single manageable list.
          </p>
          <ul class="flex flex-col gap-4 mt-2">
            <li class="flex items-center gap-3 text-neutral-300 text-sm">
              <div class="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
              Quick Meter Linking
            </li>
            <li class="flex items-center gap-3 text-neutral-300 text-sm">
              <div class="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
              Custom Labels (Home, Office, etc.)
            </li>
          </ul>
        </div>
      </section>

      <!-- User Journey: Section 3 - Calculator -->
      <section
        class="w-full max-w-7xl px-6 mb-48 grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
      >
        <div class="flex flex-col gap-8 order-2 md:order-1">
          <span class="text-[0.6rem] font-bold uppercase tracking-[0.4em] text-brand-500"
            >Step 03</span
          >
          <h2 class="text-4xl md:text-6xl font-medium text-white tracking-tight leading-tight">
            No more Guesswork.
          </h2>
          <p class="text-neutral-400 text-lg font-light leading-relaxed">
            Our integrated precision calculator converts Naira directly to kWh in real-time. Know
            exactly what you are paying for and how long your units will last based on your current
            consumption rate.
          </p>
          <div class="p-8 rounded-[2rem] bg-brand-500/5 border border-brand-500/10">
            <p class="text-sm text-brand-300 italic">
              "The most transparent way to purchase energy units."
            </p>
          </div>
        </div>
        <div class="relative aspect-[1206/2622] max-h-[700px] mx-auto order-1 md:order-2">
          <div class="absolute inset-0 bg-brand-500/5 blur-[120px] -z-10 rounded-full"></div>
          <div
            class="w-full h-full rounded-[2.5rem] overflow-hidden bg-black border-[6px] border-white/5 shadow-2xl"
          >
            <img src="/calculator.png" class="w-full h-full object-cover" alt="Energy Calculator" />
          </div>
        </div>
      </section>

      <!-- User Journey: Section 4 - Share -->
      <section
        class="w-full max-w-7xl px-6 mb-48 grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
      >
        <div class="relative flex gap-4 order-1">
          <div
            class="relative aspect-[1206/2622] max-h-[600px] w-full transform -rotate-6 translate-x-4"
          >
            <div
              class="w-full h-full rounded-[2rem] overflow-hidden bg-black border-[4px] border-white/5 shadow-2xl"
            >
              <img src="/share.png" class="w-full h-full object-cover" alt="Sharing units" />
            </div>
          </div>
          <div
            class="relative aspect-[1206/2622] max-h-[600px] w-full transform rotate-6 -translate-x-4 z-10"
          >
            <div
              class="w-full h-full rounded-[2rem] overflow-hidden bg-black border-[4px] border-white/5 shadow-2xl"
            >
              <img
                src="/zelavra_share.png"
                class="w-full h-full object-cover"
                alt="Zelavra Share confirmation"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-8 order-2">
          <span class="text-[0.6rem] font-bold uppercase tracking-[0.4em] text-brand-500"
            >Step 04</span
          >
          <h2 class="text-4xl md:text-6xl font-medium text-white tracking-tight leading-tight">
            Energy for Everyone.
          </h2>
          <p class="text-neutral-400 text-lg font-light leading-relaxed">
            Zelavra Share allows you to distribute energy units across your family, business, or
            rental meters in seconds. Transferring units is as simple and secure as sending money.
          </p>
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-4 p-4 rounded-xl bg-white/5">
              <div
                class="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m3 21 1.9-1.9" />
                  <path d="m3 3 1.9 1.9" />
                  <path d="M5 16V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7" />
                  <path d="M9 18h6" />
                  <path d="m19 21-1.9-1.9" />
                  <path d="m19 3-1.9-1.9" />
                </svg>
              </div>
              <div>
                <h4 class="text-white text-sm font-bold">Instant Transfer</h4>
                <p class="text-xs text-neutral-500">Zero lag time between sender and receiver.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- User Journey: Section 5 - Profile -->
      <section
        id="account"
        class="w-full max-w-7xl px-6 mb-48 grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
      >
        <div class="flex flex-col gap-8 order-2 md:order-1">
          <span class="text-[0.6rem] font-bold uppercase tracking-[0.4em] text-brand-500"
            >Step 05</span
          >
          <h2 class="text-4xl md:text-6xl font-medium text-white tracking-tight leading-tight">
            Your Identity. Your Control.
          </h2>
          <p class="text-neutral-400 text-lg font-light leading-relaxed">
            The Profile Hub is where you manage your security, account preferences, and personal
            energy goals. Secure your account with biometric authentication and tailor the
            experience to your lifestyle.
          </p>
          <ul class="flex flex-col gap-4">
            <li class="flex items-center gap-3 text-neutral-300 text-sm">
              <div class="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
              Biometric Security
            </li>
            <li class="flex items-center gap-3 text-neutral-300 text-sm">
              <div class="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
              Custom Account Settings
            </li>
          </ul>
        </div>
        <div class="relative aspect-[1206/2622] max-h-[700px] mx-auto order-1 md:order-2">
          <div class="absolute inset-0 bg-brand-500/10 blur-[100px] -z-10 rounded-full"></div>
          <div
            class="w-full h-full rounded-[2.5rem] overflow-hidden bg-black border-[6px] border-white/5 shadow-2xl"
          >
            <img
              src="/profile_page.png"
              class="w-full h-full object-cover"
              alt="User Profile Page"
            />
          </div>
        </div>
      </section>

      <!-- User Journey: Section 6 - Consumption/AI -->
      <section
        id="zelavra-ai"
        class="w-full max-w-7xl px-6 mb-48 grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
      >
        <div class="relative aspect-[1206/2622] max-h-[700px] mx-auto order-1">
          <div class="absolute inset-0 bg-brand-500/10 blur-[100px] -z-10 rounded-full"></div>
          <div
            class="w-full h-full rounded-[2.5rem] overflow-hidden bg-black border-[6px] border-white/5 shadow-2xl"
          >
            <img
              src="/consumption.png"
              class="w-full h-full object-cover"
              alt="Zelavra AI Consumption Monitoring"
            />
          </div>
        </div>
        <div class="flex flex-col gap-8 order-2">
          <span class="text-[0.6rem] font-bold uppercase tracking-[0.4em] text-brand-500"
            >Step 06</span
          >
          <h2 class="text-4xl md:text-6xl font-medium text-white tracking-tight leading-tight">
            Intelligent Monitoring.
          </h2>
          <p class="text-neutral-400 text-lg font-light leading-relaxed">
            Introducing our first proprietary model: <strong>Zelavra AI</strong>. Specifically
            engineered to monitor your electricity consumption, it analyzes your usage patterns to
            help you optimize energy costs and detect anomalies before they become expensive
            problems.
          </p>
          <div class="bg-gradient-to-r from-brand-500/20 to-transparent p-px rounded-2xl">
            <div class="bg-[#0A0A0A] p-6 rounded-2xl">
              <h4 class="text-brand-500 font-bold mb-2">Predictive Analytics</h4>
              <p class="text-sm text-neutral-400">
                Receive accurate forecasts of your next bill and suggestions on how to reduce it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Reviews Grid -->
      <section id="reviews" class="w-full max-w-7xl px-6 mb-48">
        <div class="flex flex-col items-center text-center mb-16">
          <span class="text-[0.6rem] font-bold uppercase tracking-[0.4em] text-brand-500 mb-4"
            >User Stories</span
          >
          <h2 class="text-4xl md:text-5xl font-medium text-white tracking-tight">
            Voices of Zelavra.
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="review in reviews"
            :key="review.name"
            class="p-8 rounded-[2rem] bg-white/5 border border-white/5 flex flex-col gap-6 hover:bg-white/[0.07] transition-colors"
          >
            <div class="flex items-center gap-4">
              <div
                class="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-500 font-bold text-xs"
              >
                {{ review.avatar }}
              </div>
              <div>
                <h4 class="text-white text-sm font-bold">{{ review.name }}</h4>
                <p class="text-[0.65rem] text-neutral-500 uppercase tracking-wider">
                  {{ review.role }}
                </p>
              </div>
            </div>
            <p class="text-neutral-400 text-sm font-light leading-relaxed">
              "{{ review.content }}"
            </p>
          </div>
        </div>
      </section>

      <!-- Q&A Section -->
      <section id="faq" class="w-full max-w-4xl px-6 mb-48">
        <div class="flex flex-col items-center text-center mb-16">
          <span class="text-[0.6rem] font-bold uppercase tracking-[0.4em] text-neutral-500 mb-4"
            >Support</span
          >
          <h2 class="text-4xl md:text-5xl font-medium text-white tracking-tight">
            Common Questions.
          </h2>
        </div>
        <div class="flex flex-col gap-6">
          <div
            v-for="faq in faqs"
            :key="faq.q"
            class="p-8 rounded-[2rem] bg-white/5 border border-white/5"
          >
            <h3 class="text-xl font-medium text-white mb-4">{{ faq.q }}</h3>
            <p class="text-neutral-400 font-light leading-relaxed">{{ faq.a }}</p>
          </div>
        </div>
      </section>

      <!-- Support / Contact Section -->
      <section id="support" class="w-full max-w-7xl px-6 mb-48 border-t border-white/5 pt-32">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div class="flex flex-col gap-8">
            <span class="text-[0.6rem] font-bold uppercase tracking-[0.4em] text-brand-500"
              >Contact Us</span
            >
            <h2 class="text-5xl md:text-6xl font-medium text-white tracking-tighter leading-tight">
              We're here to help.
            </h2>
            <p class="text-neutral-400 text-lg font-light leading-relaxed max-w-md">
              Have questions about your meter, the app, or Zelavra AI? Our support team is available
              24/7 to ensure your power remains uninterrupted.
            </p>
            <div class="flex flex-col gap-6 mt-4">
              <div
                class="flex items-center gap-4 text-white hover:text-brand-500 transition-colors cursor-pointer group"
              >
                <div
                  class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-500/10 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <span class="text-sm font-medium tracking-wide">support@zelavra.com</span>
              </div>
              <div
                class="flex items-center gap-4 text-white hover:text-brand-500 transition-colors cursor-pointer group"
              >
                <div
                  class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-500/10 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.74 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    />
                  </svg>
                </div>
                <span class="text-sm font-medium tracking-wide">+234 (0) 800 ZELAVRA</span>
              </div>
            </div>
          </div>

          <div class="bg-white/5 rounded-[3rem] p-12 border border-white/5 flex flex-col gap-8">
            <h3 class="text-2xl font-medium text-white tracking-tight">Technical Support</h3>
            <p class="text-sm text-neutral-500 font-light leading-relaxed">
              For API documentation, developer resources, or partnership inquiries with DISCOs,
              please reach out to our technical engineering team directly.
            </p>
            <button
              class="w-full py-4 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-2xl hover:bg-neutral-200 transition-colors"
            >
              Submit a Ticket
            </button>
            <div class="flex gap-4 mt-auto">
              <div
                class="px-4 py-2 rounded-full border border-white/10 text-[0.6rem] text-neutral-400 uppercase tracking-widest"
              >
                Twitter / X
              </div>
              <div
                class="px-4 py-2 rounded-full border border-white/10 text-[0.6rem] text-neutral-400 uppercase tracking-widest"
              >
                LinkedIn
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="w-full max-w-[90rem] py-12">
        <Footer />
      </div>
    </main>
  </div>
</template>
