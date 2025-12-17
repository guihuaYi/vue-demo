import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Wellness from '../pages/Wellness.vue'
import WatchTogether from '../pages/WatchTogether.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/wellness', component: Wellness },
  { path: '/watch', component: WatchTogether }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
