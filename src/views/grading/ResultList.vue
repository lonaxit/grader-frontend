<template>

  <div class="col-sm-12 col-xl-12">
    <div v-if="loading">
    
                        <div class="bg-light rounded h-100 p-4">
                            <h6 class="mb-4">RESULT LIST</h6>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Term</th>
                                        <th scope="col">Class</th>
                                        <th scope="col">Session</th>
                                        <th scope="col">Tot</th>
                                        <th scope="col">Avg</th>
                                        <th scope="col">Pos</th>
                                        <th scope="col">Remove</th>
                                 
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in results" :key="item.id">
                                        <td>
                                           {{item.student_name}}
                                        </td>
                                        <td>{{item.term_name}}</td>
                                        <td>{{item.class_name}}</td>
                                        <td>{{item.session_name}}</td>
                                        <td>{{item.termtotal}}</td>
                                        <td>{{item.termaverage}}</td>
                                        <td>{{item.termposition}}</td>
                                     
                                         <td>
                                            <button @click="remove(item.id)">
                                                Remove
                                            </button>
                                        </td>
                                  <!-- <td>
                                            <router-link  :to="{name:'new-score', params:{id:item.student}}">Add Score</router-link>
                                        </td> -->
                                 
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
name:'Result List',
data(){
    return{
        loading:false
    }
},
computed:{
...mapGetters({results:"GET_RESULTS"})
},
methods:{
...mapActions(['DELETE_RESULT']),

remove(id){
    // confirm("Are you sure?")
this.DELETE_RESULT(id)
this.$router.push('/filter-result/')
}
},

mounted(){ 
    this.loading=true
}
}
</script>

<style>

</style>