import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RankingView from '@/views/RankingView.vue'
import AvaliacaoView from '@/views/AvaliacaoView.vue'
import CafesView from '@/views/CafesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: RankingView,
    },
    {
      path: '/avaliacao',
      name: 'avaliacao',
      component: AvaliacaoView,
    },
    {
      path: '/cafes',
      name: 'cafes',
      component: CafesView
    }
  ],
})

export default router
