// import SignupConfirm from '@/components/signup/TheConfirm.vue'
// import SignupResendCode from '@/components/signup/ResendCode.vue'
// import SignupDone from '@/components/signup/SignupDone.vue'
import SignupFinish from '@/components/signup/TheFinish.vue'
// import TheCode84 from '@/components/signup/TheCode84.vue'

const signupRoutes = [
    // {
    //     path: 'confirm',
    //     name: 'signup-confirm',
    //     component: SignupConfirm
    // },
    // {
    //     path: 'resend',
    //     name: 'signup-resend',
    //     component: SignupResendCode
    // },
    {
        path: 'finish',
        name: 'signup-finish',
        component: SignupFinish
    }
    // {
    //     path: 'done',
    //     name: 'signup-done',
    //     component: SignupDone
    // },
    // {
    //     path: '84ei1fdf',
    //     name: 'signup-84ei1fdf',
    //     component: TheCode84
    // }
]

export default signupRoutes
