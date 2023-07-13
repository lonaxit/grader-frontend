<template>

  <div class="col-sm-12 col-xl-12">
    <div v-if="loading">
    
                        <div class="bg-light rounded h-100 p-4">
                            <h6 class="mb-4">All Subjects</h6>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Term</th>
                                        <th scope="col">Sess</th>
                                        <th scope="col">Class</th>
                                        <th scope="col">Number</th>
                                        <th scope="col">Action</th> 
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="subj in subjectsperclass" :key="subj.id">
                                        <td>{{subj.term_name}}</td>
                                        <td>{{subj.session_name}}</td>
                                        <td>{{subj.class_name}}</td>
                                        <td>{{subj.no_subject}}</td>
                                        <td>
                                            <router-link  :to="{name:'edit-subj-per-class', params:{id:subj.id}}">Edit</router-link>
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
name:'All Subjects Per Class',
data(){
    return{
        loading:false
    }
},
computed:{
...mapGetters({subjectsperclass:"GET_SUBJECTPERCLASS"},)
},
methods:{
...mapActions(['LIST_SUBJECTSPERCLASS']),

},

mounted(){
    this.LIST_SUBJECTSPERCLASS()
    this.loading=true
}
}
</script>

<style>

</style>