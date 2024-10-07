<script setup lang="ts">
import router from '@/router'

import LargeLogo from '@/components/LargeLogo.vue'

function handleSubmit() {
    router.push('home')
}
</script>

<template>
    <LargeLogo />
    <div class="row">
        <div class="col">
            <h1>Join Sweatscore</h1>
            <p>Join Sweatscore and start getting rewarded for your fitness routine!</p>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <form @submit="handleSubmit">
                <div class="mb-2">
                    <label for="inputFirstName" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="inputFirstName" />
                </div>
                <div class="mb-2">
                    <label for="inputLastName" class="form-label">Last Name</label>
                    <input type="text" class="form-control" id="inputLastName" />
                </div>
                <div class="mb-2">
                    <label for="inputEmail" class="form-label">Email Address</label>
                    <input type="email" class="form-control" id="inputEmail" />
                </div>
                <div class="text-center">
                    <button type="submit" class="btn btn-primary btn-lg">Sign-up</button>
                </div>
            </form>
        </div>
    </div>
</template>
