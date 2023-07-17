<template>

  <div class="col-sm-12 col-xl-12">
    <div v-if="loading">
    
                        <div class="bg-light rounded h-100 p-4">
                            <h6 class="mb-4">PSYCHO LIST</h6>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Skill</th>
                                        <th scope="col">Edit</th>
                                        <th scope="col">Remove</th>
                                 
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in psychos" :key="item.id">
                                        <td>
                                           {{item.skill}}
                                        </td>
                                        <td>
                                            <router-link  :to="{name:'edit-psycho', params:{id:item.id}}">Edit</router-link>
                                        </td>
                                         <td>
                                            <button @click="remove(item.id)">
                                                Remove
                                            </button>
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
name:'Result List',
data(){
    return{
        loading:false
    }
},
computed:{
...mapGetters({psychos:"GET_PSYCHOS"})
},
methods:{
...mapActions(['FETCH_PSYCHO','DELETE_PSYCHO']),

remove(id){
    // confirm("Are you sure?")
this.DELETE_PSYCHO(id)
this.$router.push('/all-psycho/')
}
},

mounted(){ 
    this.FETCH_PSYCHO()
    this.loading=true
}
}
</script>

<style>

</style>