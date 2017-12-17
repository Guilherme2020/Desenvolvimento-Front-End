// import Vue from 'vue'
// // import App from './App.vue'
// import Home from './paginas/Home.vue'
// import VueResource from 'vue-resource'
// import VueRouter from 'vue-router'

// Vue.use(VueResource);
// Vue.use(VueRouter)


// const Contato = {
//   template: '<p> pagina de contato </p>'
// }

// const SemPagina = {
//   template: '<p> Esta Pagina nao existe </p>'
// }

// const  routes = [
//   { path: '/', component : Home},
//   { path: '/contato',component: Contato}
// ]

// const router = new VueRouter({
//   routes
// })

// const app = new Vue({
//   router
// }).$mount('#app')

import Vue from 'vue'
//import App from './App.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './paginas/Home.vue'
const Contato = {template: '<p>Página de Contato</p>'}
const SemPagina = {template: '<p>Essa página não existe!</p>'}

const routes = [
  { path: '/', component: Home },
  { path: '/contato', component: Contato }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

const app = new Vue({
  router
}).$mount('#app')


