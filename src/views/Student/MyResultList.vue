<template>

  <div class="col-sm-12 col-xl-12">
    <div v-if="loading">  Loading ... </div>

    <div v-else>
         <div class="bg-light rounded h-100 p-4">
                            <h6 class="mb-4">MY RESULT LIST</h6>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Term</th>
                                        <th scope="col">Class</th>
                                        <th scope="col">Session</th>
                                        <th scope="col">Tot</th>
                                        <th scope="col">Avg</th>
                                        <th scope="col">Pos</th>
                                        <th scope="col">Detail</th>
                                        <th scope="col">Print</th>
                                 
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in myresults" :key="item.id">
                                        <td>
                                           {{item.student_name}}
                                        </td>
                                        <td>{{item.term_name}}</td>
                                        <td>{{item.class_name}}</td>
                                        <td>{{item.session_name}}</td>
                                        <td>{{item.termtotal}}</td>
                                        <td>{{item.termaverage}}</td>
                                        <td>{{item.termposition}}</td>
                                     
                                 
                                        <td>
                                            <router-link  :to="{name:'my-detail-result', params:{id:item.id}}">Detail</router-link>
                                        </td>

                                         <td>
                                            <router-link target= "_blank"  :to="{name:'print-result', params:{id:item.id}}">Print</router-link>
                                        </td>
                                 
                                    </tr>
                                </tbody>
                            </table>
                        </div>

    </div>
    
                       


</div>

</template>

<script>
import {mapActions,mapGetters,mapMutations} from 'vuex'
export default {
name:'Result List',
data(){
    return{
        loading:true
    }
},
computed:{
...mapGetters({results:"GET_RESULTS",me:'GET_ME',myresults:'GET_MY_RESULT'})
},
methods:{
...mapActions(['DELETE_RESULT','FETCH_ME','FETCH_MY_RESULTS']),
},

mounted(){ 
    this.FETCH_ME()
    .then(()=>{
        this.FETCH_MY_RESULTS(this.me.id).then(()=>{
            this.loading=false
        })
    })
    
}
}
</script>

<style>

</style>