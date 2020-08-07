import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // MenuBar的active
    active2: 0,
    // token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
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
    }
  },
  actions: {
  },
  modules: {
  }
})
