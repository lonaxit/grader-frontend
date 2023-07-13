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
                                        <th scope="col">Current Term Ends</th>
                                        <th scope="col">Next Term Begins</th>
                                        <th scope="col">Action</th> 
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="resume in resume" :key="resume.id">
                                        <td>{{resume.term_current}}</td>
                                        <td>{{resume.session_name}}</td>
                                        <td>{{resume.current_term_ends}}</td>
                                        <td>{{resume.next_term_begins}}</td>
                                        <td>
                                            <router-link  :to="{name:'editresumption-setting', params:{id:resume.id}}">Edit</router-link>
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
name:'All Resumption Settings',
data(){
    return{
        loading:false
    }
},
computed:{
...mapGetters({resume:"GET_RESUMPTIONS"},)
},
methods:{
...mapActions(['ALL_RESUMPTION']),

},

mounted(){
    this.ALL_RESUMPTION()
    this.loading=true
}
}
</script>

<style>

</style>