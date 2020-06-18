import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import SignPage from "@/views/SignPage.vue";
import Login from "@/views/Login.vue";


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/sign',
        name: 'Sign',
        component: SignPage
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
]

const router = new VueRouter({
    routes
})

export default router
