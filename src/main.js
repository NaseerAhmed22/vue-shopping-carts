import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import store from './store'
import './assets/style.css'

Vue.use(VueRouter)

const router = new VueRouter({
routes : Routes,
mode: "history"
})

new Vue({
  router : router,
  store,
  render: (h) => h(App)
}).$mount('#app')
