import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ProductApp from '@/views/ProductApp.vue'
import SignupPage from '@/views/SignupPage.vue'

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
    {
      path: '/signup',
      name: 'SignupPage',
      component: SignupPage
    }
  ]
})

export default router
