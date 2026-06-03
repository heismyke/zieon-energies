<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)

const navLinks = [
  { label: 'Product', to: '/product' },
  { label: 'Zenerlink', to: '/zenerlink' },
  { label: 'Partners', to: '/partners' },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' },
]

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="header-container">
    <div class="header-glass">
      <RouterLink class="brand-mark brand-mark--header" to="/" @click="closeMenu">
        <span class="brand-mark__text">zieon energies</span>
      </RouterLink>

      <nav class="hidden md:flex items-center gap-8" aria-label="Primary">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="nav-link-item"
          active-class="!text-black !opacity-100"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <div class="flex items-center gap-4">
        <RouterLink class="nav-cta-btn" to="/contact"> Get started </RouterLink>

        <button
          class="md:hidden flex flex-col gap-1.5 w-10 h-10 items-center justify-center bg-black/5 rounded-md transition-colors hover:bg-black/10"
          type="button"
          :aria-expanded="isMenuOpen"
          aria-label="Toggle navigation"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span class="w-5 h-0.5 bg-black rounded-full"></span>
          <span class="w-5 h-0.5 bg-black rounded-full"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Nav -->
    <div
      v-if="isMenuOpen"
      class="absolute top-full left-6 right-6 mt-3 bg-white border border-black/10 rounded-xl p-4 shadow-2xl flex flex-col gap-1 md:hidden overflow-hidden"
    >
      <RouterLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        class="p-4 rounded-lg font-sans font-medium text-black/70 hover:text-black hover:bg-black/5 transition-colors"
        @click="closeMenu"
      >
        {{ link.label }}
      </RouterLink>
      <RouterLink
        class="p-4 rounded-lg bg-brand-500 text-white text-center font-sans font-bold mt-2 shadow-lg active:scale-[0.98] transition-all"
        to="/contact"
        @click="closeMenu"
      >
        Get started
      </RouterLink>
    </div>
  </header>
</template>

<style scoped>
.brand-mark--header {
  @apply flex items-center gap-2 shrink-0;
  text-decoration: none;
}

.brand-mark--header .brand-mark__icon {
  width: 1.5rem;
  color: #f66f00; /* Zieon Orange */
}

.brand-mark--header .brand-mark__text {
  font-family: var(--font-body);
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: -0.06em;
  color: var(--color-black);
  text-transform: none; /* Replicate the lowercase style from Partners page */
}

@media (max-width: 720px) {
  .brand-mark--header .brand-mark__text {
    font-size: 1.3rem;
  }
  .brand-mark--header .brand-mark__icon {
    width: 1.25rem;
  }
}
</style>
