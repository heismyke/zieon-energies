<script setup lang="ts">
defineProps<{
  eyebrow: string;
  title: string;
  summary?: string;
  statsLabel?: string;
  statsValue?: string;
  titleClass?: string;
}>();
</script>

<template>
  <section class="home-hero">
    <div class="home-hero__media">
      <div class="home-hero__grid"></div>
      <div class="home-hero__panel"></div>
      <div class="home-hero__content">
        <p class="eyebrow eyebrow--light">{{ eyebrow }}</p>
        <h1 :class="['display-title', 'display-title--hero', titleClass]">{{ title }}</h1>
        <p v-if="summary" class="home-hero__summary">{{ summary }}</p>
        <div v-if="$slots.actions" class="home-hero__actions">
          <slot name="actions"></slot>
        </div>
      </div>
      <div class="home-hero__stats">
        <span class="eyebrow eyebrow--light">{{ statsLabel ?? "KWH GENERATED" }}</span>
        <span>{{ statsValue ?? "8.2kWh – 9.5kWh" }}</span>
      </div>
    </div>
  </section>
</template>
