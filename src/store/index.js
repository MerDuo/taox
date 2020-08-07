import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // MenuBar的active
    active2: 0
  },
  mutations: {
    // MenuBar的active变化时触发
    onChange(state, index){
      state.active2 = index
    }
  },
  actions: {
  },
  modules: {
  }
})
