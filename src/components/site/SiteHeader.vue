<script setup lang="ts">
import { computed, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
const isMenuOpen = ref(false);

const navLinks = [
  { label: "Product", to: "/product" },
  { label: "Partners", to: "/partners" },
  { label: "About", to: "/about" },
  { label: "Brand", to: "/brand" },
];

const isHome = computed(() => route.path === "/");

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <header class="site-header">
    <div :class="['nav-shell', { 'nav-shell--home': isHome }]">
      <RouterLink class="brand-mark" to="/" @click="closeMenu">
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
        <span class="brand-mark__text">zievon</span>
      </RouterLink>

      <nav class="nav-links" aria-label="Primary">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="nav-link"
          active-class="nav-link--active"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <RouterLink class="nav-cta" to="/get-started">Get started</RouterLink>

      <button
        class="nav-toggle"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span></span>
        <span></span>
      </button>
    </div>

    <div v-if="isMenuOpen" class="mobile-nav">
      <RouterLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        class="mobile-nav__link"
        @click="closeMenu"
      >
        {{ link.label }}
      </RouterLink>
      <RouterLink class="mobile-nav__cta" to="/get-started" @click="closeMenu">
        Get started
      </RouterLink>
    </div>
  </header>
</template>
