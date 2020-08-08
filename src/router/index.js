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
// 修改地址
const AddressEdit = () => import('../views/Address/addressEdit.vue')
// 地址列表
const AddressList = () => import('../views/Address/addressList.vue')
// 发现
const Find = () => import('../views/Find/find.vue')
// 我的
const User = () => import('../views/User/user.vue')
// 订单
const Order = () => import('../views/Order/order.vue')
// 单个订单详情
const Logistics = () => import('../views/Order/base/Logistics.vue')
// 支付页面
const OrderPay = () => import('../views/Cart/base/OrderPay.vue')
// 支付成功
const PaySuccess = () => import('../views/Cart/base/PaySuccess.vue')
// 商品sku
const GoodSku = () => import('../views/Detail/base/goodSku.vue')

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
    component: Cart,
    meta: {
      requireAuth: true
    }
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
  },
  {
    path: '/addressEdit',
    component: AddressEdit,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/addressList',
    component: AddressList,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/find',
    component: Find,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/user',
    component: User,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/logistics',
    component: Logistics
  },
  {
    path: '/orderpay',
    component: OrderPay,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/paysuccess',
    component: PaySuccess,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/goodsku',
    component: GoodSku,
    meta: {
      requireAuth: true
    }
  }
]

const router = new VueRouter({
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('Authorization')
  // console.log("token is " + token)
  // console.log(to.meta.requireAuth)
  if (to.meta.requireAuth) {
      // console.log('bbb')
      if (token === null || token === 'null' || token === '') {
          // console.log('aaa')
          next('/login')
      } else {
        next()
      }
  } else {
      next()
  }
})

// 重复路由
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router
