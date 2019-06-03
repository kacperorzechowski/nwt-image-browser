import Vue from 'vue'
import App from '@/App'
import '@/assets/scss/styles.scss'
import { VLazyImagePlugin } from "v-lazy-image";
import store from './store'

Vue.use(VLazyImagePlugin);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
