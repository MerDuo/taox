import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 路由懒加载

// 首页
const Home = () => import('../views/Home/Home.vue')
// 搜索
const Search = () => import('../views/Search/search.vue')
// 购物车
const Cart = () => import('../views/Cart/cart.vue')
// 商品详情
const Detail = () => import('../views/Detail/detail.vue')
// 登录注册
const Login = () => import('../views/Login/login.vue')
// 分类
const Category = () => import('../views/Category/category.vue')
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    name: 'detail',
    path: '/detail/:goodid',
    component: Detail
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/category',
    component: Category
  }
]

const router = new VueRouter({
  routes
})

export default router
