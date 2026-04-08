<script setup lang="ts">
// No extra logic needed for now
</script>

<template>
  <div class="flex flex-col gap-12">
    <div class="flex flex-col gap-4">
      <span class="text-[0.6rem] font-bold uppercase tracking-[0.4em] text-brand-500"
        >Digital Layer</span
      >
      <h2 class="text-4xl md:text-5xl font-heading font-medium text-white tracking-tight">
        The Ecosystem of Control.
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Card 1: zievon energy Core -->
      <div
        class="group relative bg-white/5 border border-white/5 rounded-3xl p-8 overflow-hidden hover:bg-white/10 transition-all duration-700"
      >
        <div
          class="absolute -top-12 -right-12 w-48 h-48 bg-brand-500/10 rounded-full blur-[60px] group-hover:bg-brand-500/20 transition-all duration-700"
        ></div>
        <div class="relative z-10 flex flex-col h-full">
          <div
            class="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center mb-8 border border-brand-500/20"
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
              class="text-brand-500"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
          </div>
          <h3 class="text-2xl font-heading font-bold text-white mb-3 tracking-tight">
            zievon energy Core
          </h3>
          <p class="text-sm text-neutral-400 leading-relaxed font-light">
            Buy electricity from all 12 Nigerian DISCOs. Instant token delivery and direct
            transmission to your meter.
          </p>
        </div>
      </div>

      <!-- Card 2: zievon energy Share -->
      <div
        class="group relative bg-white/5 border border-white/5 rounded-3xl p-8 overflow-hidden hover:bg-white/10 transition-all duration-700"
      >
        <div
          class="absolute -top-12 -right-12 w-48 h-48 bg-neutral-500/10 rounded-full blur-[60px] group-hover:bg-neutral-500/20 transition-all duration-700"
        ></div>
        <div class="relative z-10 flex flex-col h-full">
          <div
            class="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10"
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
              class="text-white/60"
            >
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
              <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
            </svg>
          </div>
          <h3 class="text-2xl font-heading font-bold text-white mb-3 tracking-tight">
            zievon energy Share
          </h3>
          <p class="text-sm text-neutral-400 leading-relaxed font-light">
            Distribute units across multiple meters, set limits, and track usage from one elegant
            dashboard.
          </p>
        </div>
      </div>

      <!-- Card 3: zievon energy Pay (Large) -->
      <div
        class="group relative bg-white/5 border border-white/5 rounded-3xl p-8 overflow-hidden hover:bg-white/10 transition-all duration-700 md:col-span-2"
      >
        <div
          class="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-500/5 rounded-full blur-[100px] group-hover:bg-brand-500/10 transition-all duration-700"
        ></div>
        <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div
              class="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center mb-8 border border-brand-500/20"
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
                class="text-brand-500"
              >
                <path d="M12 2v20"></path>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-heading font-bold text-white mb-3 tracking-tight">
              zievon energy Pay
            </h3>
            <p class="text-sm text-neutral-400 leading-relaxed font-light">
              Send money, pay bills, and manage every transaction inside your energy app. A complete
              fintech ecosystem built for speed.
            </p>
          </div>
          <div
            class="h-48 bg-black/40 rounded-2xl border border-white/5 backdrop-blur-md flex items-center justify-center"
          >
            <!-- Abstract Data Visual Placeholder -->
            <div class="flex gap-2 items-end h-20">
              <div class="w-2 bg-brand-500/20 h-8 rounded-full"></div>
              <div class="w-2 bg-brand-500/40 h-16 rounded-full"></div>
              <div class="w-2 bg-brand-500/60 h-12 rounded-full"></div>
              <div class="w-2 bg-brand-500/80 h-20 rounded-full"></div>
              <div class="w-2 bg-brand-500 h-14 rounded-full shadow-[0_0_15px_#c8823a]"></div>
              <div class="w-2 bg-brand-500/40 h-10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
