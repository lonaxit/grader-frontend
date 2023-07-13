<template>

  <div class="col-sm-12 col-xl-12">
    <div v-if="loading">
    
                        <div class="bg-light rounded h-100 p-4">
                            <h6 class="mb-4">All Classrooms</h6>
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
                                    <tr v-for="classroom in classes" :key="classroom.id">
                                        <td>{{classroom.class_name}}</td>
                                        <td>{{classroom.code}}</td>
                                        <td><button @click="toggleUserStatus(user)">
                                    {{ classroom.status === true ? 'Deactivate' : 'Activate' }}
                                        </button>
                                        </td>
                                        <td>
                                            <router-link  :to="{name:'edit-classroom', params:{id:classroom.id}}">Edit</router-link>
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
name:'All Terms',
data(){
    return{
        loading:false
    }
},
computed:{
...mapGetters({classes:"GET_CLASSES"},)
},
methods:{
...mapActions(['ALL_CLASSES']),

},

mounted(){
    this.ALL_CLASSES()
    this.loading=true
}
}
</script>

<style>

</style>