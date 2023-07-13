<template>

  <div class="col-sm-12 col-xl-12">
    <div v-if="loading">
    
                        <div class="bg-light rounded h-100 p-4">
                            <h6 class="mb-4">All Subjects</h6>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Code</th>
                                        <th scope="col">Toggle</th> 
                                        <th scope="col">Action</th> 
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="subj in subjects" :key="subj.id">
                                        <td>{{subj.name}}</td>
                                        <td>{{subj.subject_code}}</td>
                                        <td><button @click="toggleUserStatus(user)">
                                    {{ subj.status === true ? 'Deactivate' : 'Activate' }}
                                        </button>
                                        </td>
                                        <td>
                                            <router-link  :to="{name:'edit-subject', params:{id:subj.id}}">Edit</router-link>
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
name:'All Subjects',
data(){
    return{
        loading:false
    }
},
computed:{
...mapGetters({subjects:"GET_SUBJECTS"},)
},
methods:{
...mapActions(['ALL_SUBJECTS']),

},

mounted(){
    this.ALL_SUBJECTS()
    this.loading=true
}
}
</script>

<style>

</style>