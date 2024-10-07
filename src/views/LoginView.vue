<script setup lang="ts">
import router from '@/router'

import LargeLogo from '@/components/LargeLogo.vue'

function handleSubmit() {
    router.push({ name: 'home' })
}
</script>

<template>
    <LargeLogo />
    <div class="row">
        <div class="col intro">
            <h1>Welcome to Sweatscore!</h1>
            <p>The fitness rewards app.</p>
            <p>Not a member yet?</p>
            <button type="button" class="btn btn-primary" @click="router.push({ name: 'signup' })">
                Join Us
            </button>
        </div>
    </div>
    <div class="row">
        <div class="col login">
            <form @submit="handleSubmit">
                <div class="mb-2">
                    <label for="inputEmail" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail" />
                </div>
                <div class="mb-4">
                    <label for="inputPassword" class="form-label">Password</label>
                    <input type="password" class="form-control" id="inputPassword" />
                </div>
                <div class="text-center">
                    <button type="submit" class="btn btn-primary btn-lg">Login</button>
                </div>
            </form>
            <p class="mt-5 text-center">
                <router-link :to="{ name: 'forgot-password' }">Forgot password</router-link>
            </p>
        </div>
    </div>
</template>

<style>
.intro {
    text-align: center;
    margin-bottom: 20px;
}
</style>
