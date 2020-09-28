import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from '../store/index.js'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'list',
      component:() => import('@/views/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/Profile.vue'),
      props: true,
      beforeEnter: (to, from, next) => {
        console.log("Enter")
        if (Store.state.user.auth) {
          console.log("Enter")
          next()
        } else {
          console.log("GoLogin")
          next({name:'login'})
        }
      }
    },
    {
    path: '/news',
    name: 'news',
    component: () => import('@/views/News.vue')
    }
  ]
})