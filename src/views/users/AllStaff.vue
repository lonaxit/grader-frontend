<template>

  <div class="col-sm-12 col-xl-12">
    <div v-if="loading">
    
                        <div class="bg-light rounded h-100 p-4">
                            <h6 class="mb-4">All Staff</h6>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Surname</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Othername</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">Profile</th>
                                        <th scope="col">Subject</th> 
                                        <th scope="col">F/Master</th> 
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="teacher in staff" :key="teacher.id">
                                        <td>{{teacher.sur_name}}</td>
                                        <td>{{teacher.first_name}}</td>
                                        <td>{{teacher.other_name}}</td>
                                        <td>{{teacher.username}}</td>
                                        <td>
                                            <router-link  :to="{name:'staff-profile', params:{id:teacher.id}}">View Profile</router-link>
                                        </td>
                                        <td>
                                            <router-link  :to="{name:'add-subject-teacher', params:{id:teacher.id}}">Add Subject</router-link>
                                        </td>
                                        <td>
                                            <router-link  :to="{name:'add-class-teacher', params:{id:teacher.id}}">Add F/M</router-link>
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
name:'All Students',
data(){
    return{
        loading:false
    }
},
computed:{
...mapGetters({staff:"GET_STAFF_USERS"})
},
methods:{
...mapActions(['FETCH_ALL_STAFF']),

},

mounted(){
    this.FETCH_ALL_STAFF().then(()=>{
        this.loading=true
    })
    
}
}
</script>

<style>

</style>