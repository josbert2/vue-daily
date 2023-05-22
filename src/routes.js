import {createRouter, createWebHistory}  from 'vue-router'
import Home from './pages/Home.vue'

const routes = [
    {
         path: '/',
         name: 'Home',
         component: Home
    },
    //Componentes
    {
        path: '/components/avatar',
        name: 'Avatar',
        component: () => import('@/components/Avatar.vue')
    },
    {
        path: '/components/buttons',
        name: 'Buttons',
        component: () => import('@/pages/Buttons.vue')
    }
]

const router = createRouter({
  history:createWebHistory('/'),
  routes
})
export default router;