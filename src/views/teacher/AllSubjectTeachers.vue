<template>

  <div class="col-sm-12 col-xl-12">
    <div v-if="loading">
    
                        <div class="bg-light rounded h-100 p-4">
                            <h6 class="mb-4">All Subject Teachers</h6>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Subject</th>
                                        <th scope="col">Class</th>
                                        <th scope="col">Session</th>
                                        <th scope="col">Action</th>
                                 
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="teacher in subteachers" :key="teacher.id">
                                        <td>{{teacher.teacher_name}}</td>
                                        <td>{{teacher.subject_name}}</td>
                                        <td>{{teacher.class_name}}</td>
                                        <td>{{teacher.session_name}}</td>
                                        
                                        <td>
                                            <router-link  :to="{name:'edit-subject-teacher', params:{id:teacher.id}}">Edit</router-link>
                                        </td>
                                        <td>
                                            <router-link  :to="{name:'ca-sheet', params:{classid:teacher.classroom,subjectid:teacher.subject}}">Download Sheet</router-link>
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
...mapGetters({subteachers:"GET_SUBJ_TEACHERS"})
},
methods:{
...mapActions(['FETCH_SUBJ_TEACHERS']),

},

mounted(){
    this.FETCH_SUBJ_TEACHERS().then(()=>{
        this.loading=true
    })
    
}
}
</script>

<style>

</style>