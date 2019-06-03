import Vue from 'vue'
import Vuex from 'vuex'

/*
  modules
 */
import gallery from './modules/Gallery'

Vue.use(Vuex)

let store = new Vuex.Store({
  strict: true,
  modules: {
    gallery
  }
})

export default store
