<template>

  <div class="col-sm-12 col-xl-12">
    <div v-if="loading">
    
                        <div class="bg-light rounded h-100 p-4">
                            <h6 class="mb-4">SCORES</h6>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Subj</th>
                                        <th scope="col">Term</th>
                                        <th scope="col">Class</th>
                                        <th scope="col">Session</th>
                                        <th scope="col">F/A</th>
                                        <th scope="col">S/A</th>
                                        <th scope="col">T/A</th>
                                        <th scope="col">EXAM</th>
                                        <th scope="col">TOTAL</th>
                                        
                                        <th scope="col">Remove</th>
                                 
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in scores" :key="item.id">
                                        <td>
                                           {{item.user}}
                                        </td>
                                        <td>{{item.subject_name}}</td>
                                        <td>{{item.term_name}}</td>
                                        <td>{{item.class_name}}</td>
                                        <td>{{item.session_name}}</td>
                                        <td>{{item.firstscore}}</td>
                                        <td>{{item.secondscore}}</td>
                                        <td>{{item.thirdscore}}</td>
                                        <td>{{item.examscore}}</td>
                                        <td>{{item.subjecttotal}}</td>

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
name:'All Class Teachers',
data(){
    return{
        loading:false
    }
},
computed:{
...mapGetters({scores:"GET_SCORES"})
},
methods:{
...mapActions(['DELETE_SCORES']),

async remove(id){
this.DELETE_SCORES(id)
// this.$router.push('/filter-score/')
}
},

mounted(){ 
    this.loading=true
}
}
</script>

<style>

</style>