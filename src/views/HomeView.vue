<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Component } from "vue";
import {
    BoltIcon,
    ArrowPathIcon,
    ChartBarIcon,
    HomeModernIcon,
    BellAlertIcon,
    GlobeAltIcon,
} from "@heroicons/vue/24/outline";

const showContent = ref(false);

onMounted(() => {
    setTimeout(() => {
        showContent.value = true;
    }, 100);
});

interface Feature {
    title: string;
    description: string;
    icon: Component;
}

const features: Feature[] = [
    {
        title: "Buy Tokens Instantly",
        description:
            "Purchase prepaid electricity tokens from AEDC, EKEDC, IKEDC, and other Nigerian DisCos directly from your phone.",
        icon: BoltIcon,
    },
    {
        title: "Share Units",
        description:
            "Send electricity units to family and friends anywhere in Nigeria. No need for physical tokens or scratch cards.",
        icon: ArrowPathIcon,
    },
    {
        title: "Monitor Your Usage",
        description:
            "Track how much power you're consuming daily, weekly, and monthly. See which appliances use the most electricity.",
        icon: ChartBarIcon,
    },
    {
        title: "Manage Appliances",
        description:
            "Control your home appliances remotely and set schedules to save electricity during high-cost periods.",
        icon: HomeModernIcon,
    },
    {
        title: "Power Outage Alerts",
        description:
            "Get instant notifications about planned maintenance, power outages, and when supply is restored in your area.",
        icon: BellAlertIcon,
    },
    {
        title: "All Nigerian DisCos",
        description:
            "Works with PHCN zones across Nigeria - AEDC, EKEDC, IKEDC, IBEDC, EEDC, and more. Switch providers seamlessly.",
        icon: GlobeAltIcon,
    },
];
</script>

<template>
    <div class="w-full bg-black text-white overflow-x-hidden">
        <!-- Hero Section -->
        <section
            class="min-h-screen flex items-center justify-center relative px-8 overflow-hidden"
        >
            <!-- Animated gradient background -->
            <div
                class="absolute inset-0 animate-gradient-shift"
                style="
                    background:
                        radial-gradient(
                            circle at 30% 50%,
                            rgba(255, 255, 255, 0.05) 0%,
                            transparent 50%
                        ),
                        radial-gradient(
                            circle at 70% 80%,
                            rgba(255, 255, 255, 0.03) 0%,
                            transparent 50%
                        );
                "
            ></div>

            <div
                class="relative z-10 text-center max-w-5xl transition-all duration-1000 ease-out"
                :class="
                    showContent
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                "
            >
                <h1
                    class="text-gradient text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
                >
                    Customer Interface Unit
                </h1>
                <p
                    class="text-xl sm:text-2xl md:text-3xl font-normal mb-4 text-white/90"
                >
                    Managing electricity made easy for every Nigerian home
                </p>
                <p
                    class="text-base sm:text-lg md:text-xl text-white/60 mb-12 leading-relaxed max-w-3xl mx-auto"
                >
                    Buy tokens, share units, and monitor your power consumption
                    from your phone. No more queues, no more scratched cards.
                </p>
                <div class="flex gap-4 justify-center flex-wrap">
                    <button class="btn-primary">Download App</button>
                    <button class="btn-secondary">See How It Works</button>
                </div>
            </div>
        </section>

        <!-- Features Grid -->
        <section class="py-32 px-8 max-w-7xl mx-auto">
            <div class="text-center mb-20">
                <h2
                    class="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight"
                >
                    Everything you need
                </h2>
                <p
                    class="text-lg sm:text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed"
                >
                    Say goodbye to CIU box wahala. Manage your prepaid meter
                    from anywhere in Nigeria.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div
                    v-for="(feature, index) in features"
                    :key="index"
                    class="glass-card-hover p-10 rounded-3xl animate-fade-in-up"
                    :style="{ animationDelay: `${index * 0.1}s`, opacity: 0 }"
                >
                    <div class="w-16 h-16 mb-6 text-white">
                        <component :is="feature.icon" class="w-full h-full" />
                    </div>
                    <h3 class="text-2xl font-semibold mb-4 tracking-tight">
                        {{ feature.title }}
                    </h3>
                    <p class="text-base text-white/70 leading-relaxed">
                        {{ feature.description }}
                    </p>
                </div>
            </div>
        </section>

        <!-- Product Showcase -->
        <section class="py-32 px-8 bg-gradient-to-b from-black to-zinc-950">
            <div
                class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
                <div>
                    <h2
                        class="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight"
                    >
                        Your CIU box, now on your phone.
                    </h2>
                    <p
                        class="text-lg sm:text-xl text-white/70 leading-relaxed mb-12"
                    >
                        No more struggling with that old CIU hardware. No more
                        trekking to buy tokens. Everything you need to manage
                        your NEPA bill is now in one app.
                    </p>
                    <div class="flex gap-12 flex-wrap">
                        <div>
                            <div class="text-gradient text-5xl font-bold mb-2">
                                ₦0
                            </div>
                            <div
                                class="text-sm text-white/50 uppercase tracking-widest"
                            >
                                Service Fee
                            </div>
                        </div>
                        <div>
                            <div class="text-gradient text-5xl font-bold mb-2">
                                24/7
                            </div>
                            <div
                                class="text-sm text-white/50 uppercase tracking-widest"
                            >
                                Available
                            </div>
                        </div>
                        <div>
                            <div class="text-gradient text-5xl font-bold mb-2">
                                Instant
                            </div>
                            <div
                                class="text-sm text-white/50 uppercase tracking-widest"
                            >
                                Token Delivery
                            </div>
                        </div>
                    </div>
                </div>

                <div class="relative">
                    <div
                        class="aspect-square glass-card rounded-3xl flex items-center justify-center relative overflow-hidden"
                    >
                        <!-- Rotating gradient border effect -->
                        <div
                            class="absolute inset-[-50%] animate-rotate"
                            style="
                                background: conic-gradient(
                                    from 0deg,
                                    transparent,
                                    rgba(255, 255, 255, 0.1),
                                    transparent
                                );
                            "
                        ></div>
                        <div class="relative z-10 text-xl text-white/30">
                            Coming Soon !!!!!
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-32 px-8">
            <div
                class="max-w-4xl mx-auto glass-card p-16 sm:p-20 rounded-[2rem] text-center"
            >
                <h2
                    class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight"
                >
                    Ready to stop wasting time buying tokens?
                </h2>
                <p
                    class="text-lg sm:text-xl text-white/70 mb-10 leading-relaxed"
                >
                    Join thousands of Nigerians managing their prepaid meters
                    the smart way
                </p>
                <button class="btn-primary text-lg px-12 py-5">
                    Download App
                </button>
            </div>
        </section>
    </div>
</template>
