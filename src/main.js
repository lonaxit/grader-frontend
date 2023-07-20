import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/bootstrap.min.css'
import './assets/lib/owlcarousel/assets/owl.carousel.min.css'
import './assets/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css'

import axios from 'axios'
import Notifications from '@kyvg/vue3-notification'


axios.defaults.baseURL = 'http://127.0.0.1:8000'

router.beforeEach((to, from, next) => {
    const isAuthenticated = false /* Add your authentication logic here */;
  
    if (to.meta.requiresAuth && !isAuthenticated) {
      next('/login'); // Redirect to login page
    } else {
      next(); // Proceed to the requested page
    }
  });

createApp(App).use(Notifications).use(store).use(router,axios).mount('#app')
