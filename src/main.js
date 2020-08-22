import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false
const baseUrl = "https://hristo.nikodimov.nenkov.github.io/";

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    if (sessionStorage.redirect) {
      const redirect = sessionStorage.redirect.split(baseUrl)[1];
      delete sessionStorage.redirect
      this.$router.push(redirect)
    }
  }
}).$mount('#app')
