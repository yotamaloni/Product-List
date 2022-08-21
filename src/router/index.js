import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ProductApp from '@/views/ProductApp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/products',
      name: 'ProductApp',
      component: ProductApp
    },
  ],
  linkActiveClass: 'active-link',
})

export default router
