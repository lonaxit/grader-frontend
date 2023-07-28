import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/bootstrap.min.css'
import './assets/lib/owlcarousel/assets/owl.carousel.min.css'
import './assets/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css'

import axios from 'axios'
import Notifications from '@kyvg/vue3-notification'

// local
axios.defaults.baseURL = 'http://127.0.0.1:8000'
// axios.defaults.baseURL = 'https://graderapi-production.up.railway.app/'

// router.beforeEach((to, from, next) => {
//     const isLoggedIn = localStorage.getItem('token')
//     if (to.matched.some(record => record.meta.requiresAuth)) { // check if the route requires authentication
//       if (isLoggedIn) { // check if the user is logged in
//         store.commit('initializeStore')
//         next() // allow access to the route
//       } else {
//         next('/') // redirect to the public page if the user is not logged in
//       }
//     } else {
//       next() // allow access to the route if authentication is not required
//     }
//   })

createApp(App).use(Notifications).use(store).use(router,axios).mount('#app')
