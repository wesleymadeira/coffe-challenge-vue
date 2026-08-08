import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CafesView from '@/views/CafesView.vue'
import AvaliacaoView from '@/views/AvaliacaoView.vue'
import RankingView from '@/views/RankingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', //pagina principal
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cafes',
      name: 'cafes',
      component: CafesView
    },
    {
      path: '/avaliacao',
      name: 'avaliacao',
      component: AvaliacaoView,
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: RankingView,
    }
  ],
})

export default router
