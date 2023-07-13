<template>

  <div class="col-sm-12 col-xl-12">
    <div v-if="loading">
    
                        <div class="bg-light rounded h-100 p-4">
                            <h6 class="mb-4">List Attendance Settings</h6>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Term</th>
                                        <th scope="col">Sess</th>
                                        <th scope="col">Open Days</th>
                                        <th scope="col">Closed Days</th>
                                        <th scope="col">Action</th> 
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="att in atts" :key="att.id">
                                        <td>{{att.term_name}}</td>
                                        <td>{{att.session_name}}</td>
                                        <td>{{att.days_open}}</td>
                                        <td>{{att.days_closed}}</td>
                                        <td>
                                            <router-link  :to="{name:'editattendance-setting', params:{id:att.id}}">Edit</router-link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
  </div>
  <div v-else>
    <p>Loading ...</p>
  </div>
</div>
</template>

<script>
import {mapActions,mapGetters,mapMutations} from 'vuex'
export default {
name:'All Attendance Settings',
data(){
    return{
        loading:false
    }
},
computed:{
...mapGetters({atts:"GET_ATTS"},)
},
methods:{
...mapActions(['ALL_ATT']),

},

mounted(){
    this.ALL_ATT()
    this.loading=true
}
}
</script>

<style>

</style>