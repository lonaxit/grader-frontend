<template>

  <div class="col-sm-12 col-xl-12">
    <div v-if="roll">
    
                        <div class="bg-light rounded h-100 p-4">
                            <h6 class="mb-4">Roll Call</h6>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Term</th>
                                        <th scope="col">Class</th>
                                        <th scope="col">Session</th>
                                        <th scope="col">Add Score</th> 
                                        <th scope="col">Remove</th>
                                 
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in roll" :key="item.id">
                                        <td>{{item.student_name}}</td>
                                        <td>{{item.term}}</td>
                                        <td>{{item.class_room}}</td>
                                        <td>{{item.session}}</td>
                                        
                                        <td>
                                            <router-link  :to="{name:'new-score', params:{id:item.student}}">Add Score</router-link>
                                        </td>

                                         <td>
                                            <button @click="remove(item.id)">
                                                Remove
                                            </button>
                                        
                                        </td>
                                 
                                 
                                    </tr>
                                </tbody>
                            </table>
                        </div>
  </div>
  <div v-else>
    <p>No data yet</p>
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
...mapGetters({roll:"GET_ENROLLMENTS"})
},
methods:{
...mapActions(['DELETE_ENROLLMENT']),


remove(id){
const confirmDelete = confirm("Are you sure you want to delete?")

if(confirmDelete){
    this.DELETE_ENROLLMENT(id).then(()=>{
    this.$notify({
           title:'SUCCESS',
             text:'Student removed successfully',
             duration:5000,
             type: 'success',
             width:'100%',
    })
}).then(err =>{
    this.$notify({
           title:'ERROR',
             text:err,
             duration:5000,
             type: 'error',
             width:'100%',
    })
})

} else {
        this.$notify({
           title:'OPERATION',
             text:'Operation cancelled',
             duration:5000,
             type: 'error',
             width:'100%',
    })

}


}
},

mounted(){
  
 
    this.loading=true
}
}
</script>

<style>

</style>