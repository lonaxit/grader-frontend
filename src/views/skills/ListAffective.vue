<template>

  <div class="col-sm-12 col-xl-12">
    <div v-if="loading">
    
                        <div class="bg-light rounded h-100 p-4">
                            <h6 class="mb-4">AFFECTIVE LIST</h6>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Domain</th>
                                        <th scope="col">Edit</th>
                                        <th scope="col">Remove</th>
                                 
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in domains" :key="item.id">
                                        <td>
                                           {{item.domain}}
                                        </td>
                                        <td>
                                            <router-link  :to="{name:'edit-affective', params:{id:item.id}}">Edit</router-link>
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
name:'Affective List',
data(){
    return{
        loading:false
    }
},
computed:{
...mapGetters({domains:"GET_ALL_AFFECTIVE"})
},
methods:{
...mapActions(['FETCH_AFFECTIVE','DELETE_AFFECTIVE']),

remove(id){
    // confirm("Are you sure?")
this.DELETE_AFFECTIVE(id).then(()=>{
      this.$notify({
                        title:'SUCCESS',
                        text:'Item removed',
                        duration:5000,
                        type: 'success',
                        width:'100%',
                    })
this.$router.push('/all-affective/')
})

}
},

mounted(){ 
    this.FETCH_AFFECTIVE().then(()=>{
         this.loading=true
    })
   
}
}
</script>

<style>

</style>