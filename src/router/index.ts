import { createRouter, createWebHistory } from 'vue-router'

import PublicView from '@/views/PublicView.vue'
import PublicDefault from '@/components/public/TheDefault.vue'
import TheLogin from '@/components/public/TheLogin.vue'
import HomeView from '@/views/HomeView.vue'
import signupRoutes from '@/router/signup'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'public',
            component: PublicView,
            children: [
                {
                    path: '',
                    name: 'index',
                    component: PublicDefault
                },
                {
                    path: '/login',
                    name: 'login',
                    component: TheLogin
                }
            ]
        },
        {
            path: '/signup',
            name: 'signup',
            component: PublicView,
            children: signupRoutes
        },
        {
            path: '/forgot-password',
            name: 'forgot-password',
            component: () => import('@/components/public/TheForgot.vue')
        },
        {
            path: '/home',
            name: 'home',
            component: HomeView
        }
    ]
})

export default router
