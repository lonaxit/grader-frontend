<template>
  <div class="container-xxl position-relative bg-white d-flex p-0">
        <Sidebar/>

       <div class="content">
        <Topbar/>
         <div class="container-fluid pt-4 px-4">
           <router-view/>
        </div>
        </div>
       
 
  </div>
  <!-- <router-view/> -->
</template>

<script>
import Sidebar from '../components/Nav/Sidebar.vue'
import Topbar from '../components/Nav/Topbar.vue'
export default {
name:'DashboardLayout',
components:{
    Sidebar,
    Topbar
}
}
</script>

<style>

</style>