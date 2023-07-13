<template>

  <div class="col-sm-12 col-xl-12">
    <div v-if="loading">
    
                        <div class="bg-light rounded h-100 p-4">
                            <h6 class="mb-4">All Sessions</h6>
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
                                    <tr v-for="session in sessions" :key="session.id">
                                        <td>{{session.name}}</td>
                                        <td>{{session.code}}</td>
                                        <td><button @click="toggleUserStatus(user)">
                                    {{ session.status === true ? 'Deactivate' : 'Activate' }}
                                        </button>
                                        </td>
                                        <td>
                                            <router-link  :to="{name:'edit-session', params:{id:session.id}}">Edit</router-link>
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
...mapGetters({sessions:"GET_SESSIONS"},)
},
methods:{
...mapActions(['ALL_SESSIONS']),

},

mounted(){
    this.ALL_SESSIONS()
    this.loading=true
}
}
</script>

<style>

</style>