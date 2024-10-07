<script setup lang="ts">
import { type Ref, ref } from 'vue'

import router from '@/router'
import LargeLogo from '@/components/LargeLogo.vue'

const resetSent: Ref<boolean> = ref(false)

function handleSubmit(e: Event) {
    e.preventDefault()

    resetSent.value = true

    return false
}
</script>

<template>
    <LargeLogo />
    <div class="row">
        <template v-if="resetSent">
            <div class="col">
                <h1 class="text-center">Temporary Password Sent</h1>
                <p class="text-center">
                    We&apos;ve sent you a link to reset your password. The temporary password
                    expires in one hour.
                </p>
                <div class="mt-5 text-center">
                    <button
                        type="button"
                        class="btn btn-primary btn-lg"
                        @click="router.push({ name: 'login' })"
                    >
                        Back to login
                    </button>
                </div>
                <p class="mt-5 text-center">
                    If you didn&apos;t receive the email, check your junk folder or request another
                    one.
                </p>
                <div class="mt-5 text-center">
                    <button type="button" class="btn btn-primary" @click="resetSent = false">
                        Request another
                    </button>
                </div>
            </div>
        </template>
        <template v-else>
            <div class="col">
                <h1 class="text-center">Reset Your Password</h1>
                <p>
                    If you&apos;ve forgotten your password, please enter your email address and we
                    will send you a temporary password.
                </p>
                <form @submit="handleSubmit">
                    <div class="mb-3">
                        <label for="inputEmail" class="form-label">Email</label>
                        <input
                            type="email"
                            class="form-control"
                            id="inputEmail"
                            placeholder="Email"
                        />
                    </div>
                    <div class="text-center">
                        <button type="button" class="btn btn-primary btn-lg" @click="handleSubmit">
                            Send
                        </button>
                    </div>
                </form>
                <p class="mt-5 text-center">
                    <router-link :to="{ name: 'login' }">Back to login</router-link>
                </p>
            </div>
        </template>
    </div>
</template>
