import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/shina',
    name: 'shina',
    component: () => import('../views/Shina.vue')
  },
  {
    path: '/diska',
    name: 'diska',
    component: () => import('../views/Diska.vue')
  },
  {
    path: '/akkumlyator',
    name: 'akkumlyator',
    component: () => import('../views/Akkumlyator.vue')
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('../views/ProductPage.vue')
  },
  {
    path: '/company',
    name: 'company',
    component: () => import('../views/Company.vue')
  },
  {
    path: '/locationShops',
    name: 'locationShops',
    component: () => import('../views/LocationShops.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('../views/Chat.vue')
  },
  {
    path: '/searchResult',
    name: 'searchResult',
    component: () => import('../views/SearchResult.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/404.vue'),
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        top: 0
      }
    }
  },
})

export default router
