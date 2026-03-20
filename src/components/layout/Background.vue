<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
    // Initialize Icons
    if (typeof window !== 'undefined' && (window as any).lucide) {
        (window as any).lucide.createIcons();
    }
    
    // Background Column Animation Generation
    const bgContainer = document.getElementById('bg-curtain');
    if (bgContainer) {
        const cols = 12;
        for(let i=0; i<cols; i++){
            const col = document.createElement('div');
            col.className = 'bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5';
            // Staggered clip reveal
            col.style.animation = `clipColReveal 1.2s cubic-bezier(0.8, 0, 0.2, 1) forwards`;
            col.style.animationDelay = `${i * 0.05}s`;
            bgContainer.appendChild(col);
        }
    }
});
</script>

<template>
    <!-- Background (component) -->
    <div class="fixed w-full h-screen top-0 -z-10 pointer-events-none">
        <div class="absolute inset-0 bg-gradient-to-b from-brand-900/10 via-[#050505] to-[#050505] opacity-40"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,130,58,0.09),rgba(5,5,5,0)_55%),radial-gradient(circle_at_bottom_right,rgba(213,29,127,0.08),rgba(5,5,5,0)_60%)] opacity-20"></div>
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 blur-[120px] rounded-full mix-blend-screen"></div>
        <div class="absolute bottom-0 left-0 w-[480px] h-[480px] bg-accent-magenta/5 blur-[140px] rounded-full mix-blend-screen"></div>
    </div>
    
    <!-- Background Column Reveal Animation Container --> 
    <div class="fixed z-0 grid grid-cols-12 pointer-events-none w-full h-full top-0 right-0 bottom-0 left-0" id="bg-curtain"> 
        <!-- JS Generated Columns will go here -->
    </div>
</template>
