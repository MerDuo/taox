import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import api from "./api/index"
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
  List
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
Vue.config.productionTip = false
// Vue.prototype.$api = api
axios.defaults.baseURL = "http://119.3.208.63:8000"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
