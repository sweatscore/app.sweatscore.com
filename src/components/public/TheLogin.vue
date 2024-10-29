<script setup lang="ts">
import { ref } from 'vue'

import router from '@/router'

import useAuthStore from '@/stores/auth'
import useSettingsStore from '@/stores/settings'

const authStore = useAuthStore()
const settingsStore = useSettingsStore()

const emailClass = ref()
const emailValue = ref()
const emailError = ref()
const generalError = ref()
const passwordClass = ref()
const passwordValue = ref()
const passwordError = ref()
const generalErrorText = ref()
const generalMessageText = ref()

function handleKeyup(e: KeyboardEvent) {
    if (e.key === 'Enter') {
        handleClick()
    }
}

function handleClick() {
    let isError = false
    generalMessageText.value = null

    // Validate email address
    const expr =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const regExp = new RegExp(expr)

    if (regExp.test(emailValue.value)) {
        emailClass.value = 'is-valid'
        emailError.value = false
    } else {
        emailClass.value = 'is-invalid'
        emailError.value = true
        isError = true
    }

    // Validate password
    if (passwordValue.value) {
        const regExp = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,50}$/)

        if (!regExp.test(passwordValue.value)) {
            passwordClass.value = 'is-invalid'
            passwordError.value = true
            isError = true
        } else {
            passwordClass.value = 'is-valid'
            passwordError.value = false
        }
    } else {
        passwordClass.value = 'is-invalid'
        passwordError.value = true
        isError = true
    }

    if (!isError) {
        generalError.value = false

        const data = {
            email: emailValue.value,
            password: passwordValue.value
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        fetch(`${settingsStore.sweatscoreApiUrl}/auth/login`, options)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error(`${response.status}: ${response.statusText}`)
                }
            })
            .then((data) => {
                // The chosen password does not meet requirements
                if (data.code === 'af7hj433') {
                    passwordClass.value = 'is-invalid'
                    passwordError.value = true
                    return
                }

                // The user does not exist
                if (data.code === 'i2ddb836') {
                    generalError.value = true
                    generalErrorText.value =
                        'The email address you entered does not belong to a registered user.\n' +
                        "Please re-check the email address or <a href='/'>sign-up</a> for a new Sweatscore account."
                }

                // The user needs to finish account creation
                if (data.code === 'i8jhe643') {
                    authStore.setSession(data.session_token)
                    router.push({ name: 'signup-finish' })
                    return
                }
            })
            .catch((error) => {
                console.log(error)
                generalError.value = true
                generalErrorText.value = error
            })
    }
}
</script>

<template>
    <div class="row afccb861">
        <div class="col eiigjhh1">
            <h2>Welcome back</h2>
            <div>
                <input
                    type="email"
                    class="form-control"
                    :class="emailClass"
                    id="inputEmail"
                    placeholder="Email address"
                    v-model="emailValue"
                />
            </div>
            <div class="mt-2">
                <input
                    type="password"
                    class="form-control"
                    :class="passwordClass"
                    id="inputPassword"
                    maxlength="50"
                    placeholder="Password"
                    v-model="passwordValue"
                    @keyup="handleKeyup"
                />
            </div>
            <p class="text-center mt-3">
                <router-link :to="{ name: 'forgot-password' }">Forgot password?</router-link>
            </p>
            <p v-if="generalError" v-html="generalErrorText" class="error-message"></p>
            <p v-if="emailError" class="error-message">Please enter a valid email address.</p>
            <p v-if="passwordError" class="error-message">
                Your password must be 8 to 50 characters in length, and consist of upper and lower
                case letters, special characters (optionally), and at least one number.
            </p>
            <div class="text-center mt-5">
                <button
                    type="button"
                    class="btn btn-primary btn-lg purple-button c1a1fbje"
                    @click="handleClick"
                >
                    LOG IN
                </button>
            </div>
            <p class="mt-5 text-center">
                Don&apos;t have an account?
                <router-link :to="{ name: 'index' }">Sign up</router-link>
            </p>
        </div>
    </div>
</template>
