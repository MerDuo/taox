import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from "./api/index"

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
  Lazyload
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
Vue.config.productionTip = false
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
