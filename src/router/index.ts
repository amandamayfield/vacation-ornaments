import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../views/AddView.vue'),
    },
    {
      path: '/ornament/:id',
      name: 'ornament',
      props: (route) => ({ id: Number(route.params.id) }),
      component: () => import('../views/OrnamentView.vue'),
    },
  ],
})

export default router
