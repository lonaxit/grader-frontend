<template>

  <div class="col-sm-12 col-xl-12">
    <div v-if="loading">
                            <div v-if="loading">
    
                                <div class="bg-light rounded h-100 p-4">
                                    <h6 class="mb-4">Assign Admission Number</h6>
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Surname</th>
                                                <th scope="col">Class</th>
                                                <th scope="col">Session</th>
                                                <th scope="col">Admission Number</th>
                                                <th scope="col">Action</th> 
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="student in students" :key="student.id">
                                                <td>{{student.student_name}}</td>
                                                <td>{{student.class_name}}</td>
                                                <td>{{student.session_name}}</td>
                                                <td>
                                                    {{ student.admission_number === null ? 'Unavailable' : student.admission_number }}
                                                </td>
                                                <td>
                                            <button @click="assignnumber(student.id)">
                                                Assign Number
                                            </button>
                                                    <!-- <router-link  :to="{name:'student-profile', params:{id:student.id}}">Assign Number</router-link> -->
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                    <div v-else>
                    <h4>No student without admission number available</h4>
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
...mapGetters({students:"GET_NO_ADMISSION_NUM"})
},
methods:{
...mapActions(['FETCH_NOADMISSION_NUMBER','ASSIGN_NUMBER']),

assignnumber(id){

this.ASSIGN_NUMBER(id).then(()=>{

    this.$router.push('/add-admission-number/')
        this.$notify({
                title:'SUCCESS',
                        text:'Admission number assigned successfully',
                        duration:5000,
                        type: 'success',
                        width:'100%',
            })

}).catch(err=>{
    console.log(err)
        this.$notify({
                title:'ERROR',
                        text:err.message,
                        duration:5000,
                        type: 'error',
                        width:'100%',
            })
})

}

},

mounted(){
    this.FETCH_NOADMISSION_NUMBER().then(()=>{
        this.loading=true
    }).catch(err=>{
        console.log(err)
            this.$notify({
                title:'ERROR',
                        text:err,
                        duration:5000,
                        type: 'error',
                        width:'100%',
            })
    })
    
}
}
</script>

<style>

</style>