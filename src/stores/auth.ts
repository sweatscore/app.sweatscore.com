import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

const useAuthStore = defineStore('auth', () => {
    const sessionToken = ref()
    const sessionExpiration: Ref<number | null> = ref(null)

    type Token = {
        token: string
        expiration: number
    }

    function setSession(newToken: Token) {
        sessionToken.value = newToken.token
        sessionExpiration.value = Date.now() + newToken.expiration
    }

    function isAuthorized() {
        const isAuthorized = (sessionExpiration.value ?? 0) > Date.now()

        if (!isAuthorized) {
            $reset()
        }

        return isAuthorized
    }

    function $reset() {
        sessionToken.value = null
        sessionExpiration.value = null
    }

    return {
        sessionToken,
        sessionExpiration,
        setSession,
        isAuthorized
    }
})

export default useAuthStore
