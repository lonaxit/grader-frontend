<template>

  <div class="col-sm-12 col-xl-12">
    <div v-if="loading">
    
                        <div class="bg-light rounded h-100 p-4">
                            <h6 class="mb-4">Assessment Sheet Preview</h6>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">StdID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Subj</th>
                                        <th scope="col">Class</th>
                                        <th scope="col">Term</th>
                                        <th scope="col">Sess</th>
                                        <th scope="col">CA1</th>
                                        <th scope="col">CA2</th>
                                        <th scope="col">CA3</th>
                                        <th scope="col">Exam</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in caroll" :key="item.id">
                                        <td>{{item.student}}</td>
                                        <td>{{item.student_name}}</td>
                                        <td>{{subject.subject_code}}</td>
                                        <td>{{item.class_room}}</td>
                                        <td>{{item.term}}</td>
                                        <td>{{item.session}}</td>
                                        <td>{{0}}</td>
                                        <td>{{0}}</td>
                                        <td>{{0}}</td>
                                        <td>{{0}}</td>
                                        
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
...mapGetters({caroll:'GET_CA_ROLL',class_detail:'GET_CLASS',subject:'GET_SUBJECT'})
},
methods:{
...mapActions(['CA_ROLLCALL','CLASS_DETAIL','SUBJECT_DETAIL']),

},

mounted(){
    const payload={
        classroom:this.$route.params.classid
    }
    this.CA_ROLLCALL(payload).then(()=>{
        this.CLASS_DETAIL(this.$route.params.classid).then(()=>{
            this.SUBJECT_DETAIL(this.$route.params.subjectid).then(()=>{
                 this.loading=true
            })
        })
    })
}
}
</script>

<style>

</style>