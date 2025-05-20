import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import MovieDetailPage from '../pages/MovieDetailPage.vue'

const routes = [
  { path: '/:page?', component: HomePage },
  { path: '/movie/:id', component: MovieDetailPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
