import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Register = () => import('../views/register/Register')
const Account = () => import('../views/account/Account')
const Trade = () => import('../views/trade/Trade')
const Domain = () => import('../views/domain/Domain')
const Strouble = () => import('../views/strouble/Strouble')
const About = () => import('../views/about/About')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/account',
    component: Account
  },
  {
    path: '/trade',
    component: Trade
  },
  {
    path: '/domain',
    component: Domain
  },
  {
    path: '/strouble',
    component: Strouble
  },
  {
    path: '/about',
    component: About
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})


export default router
