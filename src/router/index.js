import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/certificates',
        component: () => import('../views/Certificates.vue'),
        children:[
            {
                path:'',
                component: () => import('../components/certificates/CertificatesHome.vue')
            },
            {
                path: ':id',
                component: () => import('../components/certificates/CertificateDetails')
            }
        ]
    },
    {
        path: '/projects',
        name: 'Projects',
        component: () => import('../views/Projects.vue')
    },
    {
        path: '*',
        name: 'NotFound',
        component: () => import('../views/NotFound.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
