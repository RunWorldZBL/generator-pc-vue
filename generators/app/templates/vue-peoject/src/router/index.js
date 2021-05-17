import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import(/* webpackChunkName: 'login' */'../views/Login.vue')
const Reg = () => import(/* webpackChunkName: 'reg' */'../views/Reg.vue')
const Forget = () => import(/* webpackChunkName: 'forget' */'../views/Forget.vue')
const Demo = () => import(/* webpackChunkName: 'demo' */'../views/Demo.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/reg',
    name: 'reg',
    component: Reg
  },
  {
    path: '/forget',
    name: 'forget',
    component: Forget
  },
  {
    path: '/demo',
    name: 'demo',
    component: Demo
  }
  /* {
    path: '/login',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(webpackChunkName: "about" '../views/About.vue')
  } */
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
