import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // If the route has a hash, scroll to the element with that ID
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth', // Optional: Use smooth scrolling
      }
    }
    if (savedPosition) {
      return savedPosition
    }

    // Default scroll to top on route change
    return { top: 0 }
  }
})

export default router
