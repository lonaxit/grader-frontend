import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/bootstrap.min.css'
import './assets/lib/owlcarousel/assets/owl.carousel.min.css'
import './assets/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css'

createApp(App).use(store).use(router).mount('#app')
