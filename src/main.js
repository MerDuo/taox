import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from "./api/index"
import axios from 'axios'

import {
  Toast,
  Icon,
  Search,
  Row,
  Col,
  PullRefresh,
  Cell,
  CellGroup,
  NavBar,
  Button,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Lazyload,
  Grid,
  GridItem,
  Image,
  CountDown,
  Divider,
  List,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Field,
  Sidebar,
  SidebarItem,
   SwipeCell,
   Card,
   Tag,
   SubmitBar,
   AddressEdit,
   AddressList,
   Sticky,
   Tab,
   Tabs,
   Image as VanImage,
   NoticeBar,
   ShareSheet
} from 'vant'

Vue.use(Toast)
  .use(Icon)
  .use(Search)
  .use(Row)
  .use(Col)
  .use(PullRefresh)
  .use(Cell)
  .use(CellGroup)
  .use(NavBar)
  .use(Button)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)
  .use(Grid)
  .use(GridItem)
  .use(Image)
  .use(CountDown)
  .use(Divider)
  .use(List)
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton)
  .use(Field)
  .use(Sidebar)
  .use(SidebarItem)
  .use(SwipeCell)
  .use(Card)
  .use(Tag)
  .use(SubmitBar)
  .use(AddressEdit)
  .use(AddressList)
  .use(Sticky)
  .use(VanImage)
  .use(Tab)
  .use(Tabs)
  .use(NoticeBar)
  .use(ShareSheet)
Vue.config.productionTip = false
Vue.prototype.$api = api
axios.defaults.baseURL = "http://119.3.208.63:8000"

// 路由跳转后页面定位到顶部
router.afterEach((to,from,next) => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
