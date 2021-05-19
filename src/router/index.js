import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import EducationPage from "@/views/education/EducationPage";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/education',
        component: EducationPage,
        children: [
            {
                path: '',
                name: 'Education',
                component: () => import('../views/education/Education')
            },
            {
                path: ':module',
                name: 'Module',
                component: () => import('../views/education/Module')
            },
            {
                path: ':module/:course',
                name: 'Course',
                component: () => import('../views/education/Course')
            },
            {
                path: ':module/:course/certificate',
                name: 'Certificate',
                component: () => import('../views/education/Certificate')
            }
        ],
    },
    {
        path: '/projects',
        name: 'Projects',
        component: () => import('../views/Projects')
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: () => import('../views/Contacts')
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
