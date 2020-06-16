import Vue from 'vue'
import Router from 'vue-router'
import Editora from '@/components/editora.vue'
import App from '@/App.vue'

Vue.use(Router)

export default new Router({
    routes: [
  {
    path: '/',
    name: 'home',
    component: App
  },
  {
    path: '/editora',
    name: 'Editora',
    component: Editora,
    
  }
]
})
