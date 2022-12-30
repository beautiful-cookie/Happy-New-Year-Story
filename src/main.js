import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'animate.css' 
import AOS from 'aos' 
import 'aos/dist/aos.css' 

Vue.config.productionTip = false

new Vue({
  router, 
  mounted() {
    AOS.init()
  }, 
  render: h => h(App)
}).$mount('#app')
