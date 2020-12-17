import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/index.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Index',
        component: Home
    },
    {
        path: '/adminlist',
        name: 'Adminlist',
        component: () =>
            import ('../views/adminlist.vue')
    },
    {
        path: '/adminwrite',
        name: 'Adminwrite',
        component: () =>
            import ('../views/adminwrite.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router