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
// 修改地址
const AddressEdit = () => import('../views/Address/addressEdit.vue')
// 地址列表
const AddressList = () => import('../views/Address/addressList.vue')
// 发现
const Find = () => import('../views/Find/find.vue')

const routes = [{
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
    path: '/addressEdit',
    component: AddressEdit
  },
  {
    path: '/addressList',
    component: AddressList
  },
  {
    path: '/find',
    component: Find
  }

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
