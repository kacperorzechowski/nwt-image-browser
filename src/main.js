import Vue from 'vue'
import App from '@/App'
import '@/assets/scss/styles.scss'
import { VLazyImagePlugin } from "v-lazy-image";

Vue.use(VLazyImagePlugin);

new Vue({
  render: h => h(App)
}).$mount('#app')
