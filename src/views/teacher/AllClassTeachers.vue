<template>

  <div class="col-sm-12 col-xl-12">
    <div v-if="loading">
    
                        <div class="bg-light rounded h-100 p-4">
                            <h6 class="mb-4">All Class Teachers</h6>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Term</th>
                                        <th scope="col">Class</th>
                                        <th scope="col">Session</th>
                                        <th scope="col">Action</th>
                                 
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="teacher in classteachers" :key="teacher.id">
                                        <td>{{teacher.teacher_name}}</td>
                                        <td>{{teacher.term_name}}</td>
                                        <td>{{teacher.session_name}}</td>
                                        <td>{{teacher.class_name}}</td>
                                        <td>
                                            <router-link  :to="{name:'edit-class-teacher', params:{id:teacher.id}}">Edit</router-link>
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
name:'All Class Teachers',
data(){
    return{
        loading:false
    }
},
computed:{
...mapGetters({classteachers:"GET_CLASS_TEACHERS"})
},
methods:{
...mapActions(['FETCH_CLASS_TEACHERS']),

},

mounted(){
    this.FETCH_CLASS_TEACHERS().then(()=>{
        this.loading=true
    })
    
}
}
</script>

<style>

</style>