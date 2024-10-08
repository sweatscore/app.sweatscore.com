<script setup lang="ts">
import router from '@/router'

import '@/assets/styles/public.css'
import LargeLogo from '@/components/LargeLogo.vue'

function handleClick() {
    router.push({ name: 'signup' })
}
</script>

<template>
    <LargeLogo />
    <div id="afccb861" class="row">
        <div class="col">
            <h2>Create an account</h2>
            <div>
                <input
                    type="email"
                    class="form-control"
                    id="inputEmail"
                    placeholder="Email address"
                />
            </div>
            <div class="mt-2">
                <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                    placeholder="Password"
                />
            </div>
            <div class="text-center mt-5">
                <button
                    id="c1a1fbje"
                    type="submit"
                    class="btn btn-primary btn-lg purple-button"
                    @click="handleClick"
                >
                    SIGN UP
                </button>
            </div>
            <p class="mt-5 text-center">
                Already have an account?
                <router-link :to="{ name: 'login' }">Log-in</router-link>
            </p>
        </div>
    </div>
</template>
