<script setup lang="ts">
// Logic for form submission could be added here
</script>

<template>
  <div
    class="bg-white/5 border border-white/5 rounded-3xl p-10 flex flex-col relative overflow-hidden group backdrop-blur-sm"
  >
    <div class="relative z-10 flex flex-col h-full">
      <div class="flex flex-col gap-4 mb-10">
        <span class="text-[0.6rem] font-bold uppercase tracking-[0.4em] text-brand-500"
          >Early Access</span
        >
        <h3 class="text-3xl font-heading font-medium text-white tracking-tight">
          Join the zieon energies energy Ecosystem.
        </h3>
        <p class="text-sm text-neutral-400 font-light">
          Be the first to experience the seamless integration of energy and finance.
        </p>
      </div>

      <form class="flex flex-col gap-6">
        <div class="flex flex-col gap-4">
          <div class="relative">
            <input
              type="text"
              placeholder="Phone Number"
              class="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-brand-500/50 focus:bg-white/10 transition-all font-light"
            />
          </div>
          <div class="relative">
            <input
              type="email"
              placeholder="Email Address"
              class="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-brand-500/50 focus:bg-white/10 transition-all font-light"
            />
          </div>
        </div>

        <div class="space-y-4 mt-2">
          <label class="text-[0.65rem] uppercase tracking-[0.2em] text-neutral-500 font-bold"
            >Select your provider</label
          >
          <div class="flex flex-wrap gap-3">
            <label class="flex items-center gap-2 cursor-pointer group/check">
              <input type="checkbox" class="custom-checkbox hidden" />
              <div
                class="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[0.65rem] text-neutral-400 transition-all group-hover/check:border-brand-500/50 group-hover/check:text-white"
              >
                AEDC
              </div>
            </label>
            <label class="flex items-center gap-2 cursor-pointer group/check">
              <input type="checkbox" class="custom-checkbox hidden" />
              <div
                class="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[0.65rem] text-neutral-400 transition-all group-hover/check:border-brand-500/50 group-hover/check:text-white"
              >
                EKEDC / IKEDC
              </div>
            </label>
            <label class="flex items-center gap-2 cursor-pointer group/check">
              <input type="checkbox" class="custom-checkbox hidden" />
              <div
                class="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[0.65rem] text-neutral-400 transition-all group-hover/check:border-brand-500/50 group-hover/check:text-white"
              >
                Other DisCo
              </div>
            </label>
          </div>
        </div>

        <button
          type="button"
          class="mt-8 w-full bg-brand-500 text-black text-xs font-bold uppercase tracking-widest py-5 rounded-2xl hover:scale-[1.02] transition-all shadow-[0_20px_40px_rgba(200,130,58,0.15)] active:scale-95"
        >
          Request Invite
        </button>
      </form>
    </div>

    <!-- Subtle Glow -->
    <div
      class="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-500/5 rounded-full blur-[80px]"
    ></div>
  </div>
</template>

<style scoped>
.custom-checkbox:checked + div {
  background-color: #c8823a;
  border-color: #c8823a;
  color: black;
  font-weight: 700;
}
</style>
