<template>

  <div class="col-sm-12 col-xl-12">
    <div v-if="loading">
    
                        <div class="bg-light rounded h-100 p-4">
                            <h6 class="mb-4">All Students</h6>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Surname</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Othername</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">Action</th> 
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="student in students" :key="student.id">
                                        <td>{{student.sur_name}}</td>
                                        <td>{{student.first_name}}</td>
                                        <td>{{student.other_name}}</td>
                                        <td>{{student.username}}</td>
                                        <td>
                                            <router-link  :to="{name:'new-student-profile', params:{id:student.id}}">Add Profile</router-link>
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
name:'All New Students',
data(){
    return{
        loading:false
    }
},
computed:{
...mapGetters({students:"GET_NOPROFILE_STUDENTS"})
},
methods:{
...mapActions(['FETCH_USERS']),

},

mounted(){
    this.FETCH_USERS().then(()=>{
        this.loading=true
    })
    
}
}
</script>

<style>

</style>