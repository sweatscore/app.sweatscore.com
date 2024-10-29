<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

import LargeLogo from '@/components/LargeLogo.vue'

onMounted(() => {
    document.body.classList.add('public')
})

onUnmounted(() => {
    document.body.classList.remove('public')
})
</script>

<template>
    <LargeLogo />
    <router-view />
</template>
