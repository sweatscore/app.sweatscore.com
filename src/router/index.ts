import { createRouter, createWebHistory } from 'vue-router'

import PublicView from '@/views/PublicView.vue'
import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'public',
            component: PublicView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/forgot-password',
            name: 'forgot-password',
            component: () => import('@/views/ForgotView.vue')
        },
        {
            path: '/signup',
            name: 'signup',
            component: () => import('@/views/SignupView.vue')
        },
        {
            path: '/home',
            name: 'home',
            component: HomeView
        }
    ]
})

export default router
