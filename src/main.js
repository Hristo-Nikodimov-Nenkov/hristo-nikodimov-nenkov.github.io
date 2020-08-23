import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
    created() {
        let redirect = sessionStorage.redirect;
        delete sessionStorage.redirect;

        const baseUrl = 'https://hristo-nikodimov-nenkov.github.io'
        if (redirect && redirect !== location.href) {
            redirect = redirect.split(baseUrl)[1];
            this.$router.push(redirect)
                .then(() => console.log('Redirecting to requested url'))
        }
    }
}).$mount('#app')
