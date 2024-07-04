import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Signup from '@/components/user/signup.vue'
import Home from '../components/bookstore/home.vue'
import BookDetail from '../components/bookstore/book-detail.vue'
import Cart from '../components/cart_access/cart.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[]
    },
    {
      path:'/book-detail/:id',
      name:'bookdetail',
      component:BookDetail
    },

    {
      path:'/signup',
      name:'signup',
      component:Signup
    },

    {
      path:'/home/cart',
      name:'cart',
      component:Cart
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach((to, from) => {
  const tk = localStorage.getItem('x-access-token')
  let isAuthenticated = false
  if (tk) {
    isAuthenticated = true
  }
  if (!isAuthenticated && to.name !== 'signup') {
    return { name: 'signup' }
  }
})

export default router
