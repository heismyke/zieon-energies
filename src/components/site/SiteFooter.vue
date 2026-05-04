<script setup lang="ts">
import { RouterLink } from "vue-router";

const links = [
  { label: "Home", to: "/" },
  { label: "Product", to: "/product" },
  { label: "Partners", to: "/partners" },
  { label: "About", to: "/about" },
  { label: "Brand", to: "/brand" },
  { label: "Get started", to: "/get-started" },
];
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer__panel">
      <div class="site-footer__brand">
        <RouterLink class="brand-mark brand-mark--footer" to="/">
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
        </RouterLink>
        <p class="site-footer__copy">More power</p>
      </div>

      <nav class="site-footer__nav" aria-label="Footer">
        <RouterLink v-for="link in links" :key="link.to" :to="link.to" class="site-footer__link">
          {{ link.label }}
        </RouterLink>
      </nav>

      <div class="site-footer__meta">
        <span>LinkedIn</span>
        <span>Instagram</span>
      </div>
    </div>
  </footer>
</template>
