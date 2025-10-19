<script setup lang="ts">
import { ref, onMounted } from "vue";

const showContent = ref(false);

onMounted(() => {
    setTimeout(() => {
        showContent.value = true;
    }, 100);
});

const features = [
    {
        title: "Digital Tokens",
        description:
            "Seamlessly purchase and manage electricity tokens through an intuitive digital interface.",
        icon: "⚡",
    },
    {
        title: "Unit Sharing",
        description:
            "Share electricity units with family and friends across Nigeria instantly.",
        icon: "🔄",
    },
    {
        title: "Smart Analytics",
        description:
            "Track your consumption with real-time analytics and intelligent insights.",
        icon: "📊",
    },
    {
        title: "Appliance Management",
        description:
            "Monitor and control your appliances with precision and ease.",
        icon: "🏠",
    },
    {
        title: "Live Updates",
        description:
            "Stay informed about maintenance schedules and service updates from your provider.",
        icon: "🔔",
    },
    {
        title: "Multi-Provider",
        description:
            "Access multiple electricity providers across different subdivisions.",
        icon: "🌐",
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
                    Redefining electricity management through software
                    innovation
                </p>
                <p
                    class="text-base sm:text-lg md:text-xl text-white/60 mb-12 leading-relaxed max-w-3xl mx-auto"
                >
                    Experience the future of power distribution with a fully
                    digital, intelligent interface
                </p>
                <div class="flex gap-4 justify-center flex-wrap">
                    <button class="btn-primary">Get Started</button>
                    <button class="btn-secondary">Learn More</button>
                </div>
            </div>
        </section>

        <!-- Features Grid -->
        <section class="py-32 px-8 max-w-7xl mx-auto">
            <div class="text-center mb-20">
                <h2
                    class="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight"
                >
                    Built for the future
                </h2>
                <p
                    class="text-lg sm:text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed"
                >
                    From hardware to software. A seamless transition to modern
                    electricity management.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div
                    v-for="(feature, index) in features"
                    :key="index"
                    class="glass-card-hover p-10 rounded-3xl animate-fade-in-up"
                    :style="{ animationDelay: `${index * 0.1}s`, opacity: 0 }"
                >
                    <div class="text-5xl mb-6 inline-block">
                        {{ feature.icon }}
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
                        Hardware. Reimagined as software.
                    </h2>
                    <p
                        class="text-lg sm:text-xl text-white/70 leading-relaxed mb-12"
                    >
                        The traditional Customer Interface Unit has evolved. No
                        more physical limitations. No more manual interventions.
                        Just pure, seamless digital experience.
                    </p>
                    <div class="flex gap-12 flex-wrap">
                        <div>
                            <div class="text-gradient text-5xl font-bold mb-2">
                                100%
                            </div>
                            <div
                                class="text-sm text-white/50 uppercase tracking-widest"
                            >
                                Digital
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
                                Real-time
                            </div>
                            <div
                                class="text-sm text-white/50 uppercase tracking-widest"
                            >
                                Updates
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
                            Your 3D Design Here
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
                    Ready to transform your electricity experience?
                </h2>
                <p
                    class="text-lg sm:text-xl text-white/70 mb-10 leading-relaxed"
                >
                    Join thousands of users who have already made the switch to
                    smart power management
                </p>
                <button class="btn-primary text-lg px-12 py-5">
                    Download Now
                </button>
            </div>
        </section>
    </div>
</template>
