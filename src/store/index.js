import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // MenuBar的active
    active2: 0,
    // token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
    // order_id
    orderId: 0,
    // total_price
    totalPrice: 0,
    // 详细的商品信息
    goodsInfo: {}
  },
  mutations: {
    // MenuBar的active变化时触发
    onChange(state, index){
      state.active2 = index
    },
    changeLogin (state, user) {
      // console.log(user.Authorization)
      state.Authorization = user.Authorization
      localStorage.setItem('Authorization', user.Authorization)
    },
    changeOrderId(state, param){
      state.orderId = param.id
      state.totalPrice = param.price
    },
    // 改变商品详情
    changeGoodsInfo(state, param) {
      state.goodsInfo = param
    }
  },
  actions: {
  },
  modules: {
  }
})
