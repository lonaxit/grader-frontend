<template>

  <div class="col-sm-12 col-xl-12">
    <div v-if="allTerms">
    
                        <div class="bg-light rounded h-100 p-4">
                            <h6 class="mb-4">All Terms</h6>
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
                                    <tr v-for="term in allTerms" :key="term.id">
                                        <td>{{term.name}}</td>
                                        <td>{{term.code}}</td>
                                        <td><button @click="toggleUserStatus(user)">
                                    {{ term.status === true ? 'Deactivate' : 'Activate' }}
                                        </button>
                                        </td>
                                        <td>
                                            <router-link  :to="{name:'edit-term', params:{id:term.id}}">Edit</router-link>
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
    return{}
},
computed:{
...mapGetters({allTerms:"GET_TERMS"})
},
methods:{
...mapActions(['ALL_TERMS']),

},
mounted(){
    this.ALL_TERMS()
}
}
</script>

<style>

</style>