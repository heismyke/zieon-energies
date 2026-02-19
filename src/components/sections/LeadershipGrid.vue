<script setup lang="ts"></script>

<template>
  <section class="w-full relative mt-8 pt-12 border-t border-white/5 z-20">
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
      <div>
        <h2 class="text-2xl font-heading font-medium text-white">Leadership Team</h2>
        <p class="text-xs text-neutral-500 mt-2 uppercase tracking-wider">
          Built for execution and growth
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <article
        class="group bg-[#161616] hover:bg-[#1A1A1A] border border-white/5 hover:border-brand-500/30 rounded-xl p-6 transition-all duration-500"
      >
        <div class="mb-4 overflow-hidden rounded-lg border border-white/10">
          <img
            src="/ceo.jpg"
            alt="CEO portrait"
            class="h-72 md:h-80 w-full object-contain bg-[#0E0E0E] transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
        <p class="text-[0.6rem] uppercase tracking-widest text-brand-500 mb-3">CEO / CTO</p>
        <h3 class="text-lg font-medium text-white tracking-tight font-heading mb-2">Michael Shekwolo</h3>
        <p class="text-xs text-neutral-400 leading-relaxed">
          Product vision, platform architecture, and technology strategy.
        </p>
      </article>

      <article
        class="group bg-[#161616] hover:bg-[#1A1A1A] border border-white/5 hover:border-brand-500/30 rounded-xl p-6 transition-all duration-500"
      >
        <div class="mb-4 overflow-hidden rounded-lg border border-white/10">
          <img
            src="/coo.jpg"
            alt="COO portrait"
            class="h-72 md:h-80 w-full object-contain bg-[#0E0E0E] transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
        <p class="text-[0.6rem] uppercase tracking-widest text-brand-500 mb-3">COO</p>
        <h3 class="text-lg font-medium text-white tracking-tight font-heading mb-2">Chidera Tanana</h3>
        <p class="text-xs text-neutral-400 leading-relaxed">
          Operational delivery, service reliability, and partner coordination.
        </p>
      </article>

      <article
        class="group bg-[#161616] hover:bg-[#1A1A1A] border border-white/5 hover:border-brand-500/30 rounded-xl p-6 transition-all duration-500"
      >
        <p class="text-[0.6rem] uppercase tracking-widest text-brand-500 mb-3">CRO</p>
        <h3 class="text-lg font-medium text-white tracking-tight font-heading mb-2">Sulieman Bukar</h3>
        <p class="text-xs text-neutral-400 leading-relaxed">
          Revenue strategy, partnerships, and sustainable market expansion.
        </p>
      </article>

      <article
        class="group bg-[#161616] hover:bg-[#1A1A1A] border border-white/5 hover:border-brand-500/30 rounded-xl p-6 transition-all duration-500 md:col-span-2 lg:col-span-3"
      >
        <p class="text-[0.6rem] uppercase tracking-widest text-brand-500 mb-3">Strategic Advisor</p>
        <h3 class="text-lg font-medium text-white tracking-tight font-heading mb-2">King and Hidra</h3>
        <p class="text-xs text-neutral-400 leading-relaxed">
          Provides market insight, governance guidance, and long-term strategic direction.
        </p>
      </article>
    </div>
  </section>
</template>
