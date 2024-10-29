import { ref } from 'vue'
import { defineStore } from 'pinia'

const useSettingsStore = defineStore('settings', () => {
    const sweatscoreApiUrl = ref(import.meta.env.VITE_SWEATSCORE_API_URL)

    return {
        sweatscoreApiUrl
    }
})

export default useSettingsStore
