<template>
<!-- <div class="container-xxl position-relative bg-white d-flex p-0">
     <router-view/>
  </div> -->
<notifications />

   <router-view/>
</template>
<script>

import { mapMutations} from 'vuex'
import axios from 'axios'
// import Sidebar from './components/Nav/Sidebar.vue'
// import Topbar from './components/Nav/Topbar.vue'
// import Login from './components/Authentication/Login.vue'
export default {
  name:'App',
  data(){
    return {
    }
  },
  components:{
    // Sidebar,
    // Topbar,
    // Login
  },
  methods:{
    ...mapMutations(['INIT_USERNAME','INIT_STORE'])
  },
  
  created(){
    this.INIT_USERNAME()
  },
   beforeCreate(){

    this.$store.commit('INIT_STORE')
    const token = this.$store.state.auth.token

    if(token){
    axios.defaults.headers.common['Authorization'] = "Token " + token
    }else{
     axios.defaults.headers.common['Authorization'] = ""
    }
},
mounted(){

}
}

</script>

<style>

@import './assets/css/style.css'
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
