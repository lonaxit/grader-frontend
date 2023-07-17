<template>
<div class="col-sm-12 col-xl-8">
  <h4>Edit Affective Skill</h4>
      <div class="bg-light rounded h-100 p-4">

                            <form @submit.prevent="handleSubmit">

                             <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingPassword"
                                    placeholder="Code" v-model="domain">
                                <label for="floatingPassword">Domain</label>
                            </div>
                                 <button type="submit"  :disabled="submitting" class="btn btn-primary py-3 w-100 mb-4">
                            {{ submitting ? 'Submitting...' : 'Submit' }}
                                </button>
                            </form>
                        </div>
                        
  </div>
</template>

<script>

import {mapActions,mapMutations,mapGetters} from 'vuex'
export default {
      
    data(){
        return{
            submitting: false,
         
            domain:'',
           
       
        }
    },

    computed:{
        ...mapGetters({domain_detail:'GET_AFFECTIVE'})
    },
   
    methods:{
        ...mapActions(['AFFECTIVE_DETAIL','AFFECTIVE_UPDATE']),
        
        handleSubmit(){
            this.submitting = true;

                if(this.domain === ''){
               this.submitting = false;
                 this.$notify({
                        title:'Error',
                        text:'Enter value',
                        duration:5000,
                        type: 'error',
                        width:'100%',
                    })
        
            }
      
            // data
               const payload ={
                domain:this.domain,
                id:this.$route.params.id
                }

                this.AFFECTIVE_UPDATE(payload).then((res)=>{
                 this.$router.push('/all-affective/')
                    this.submitting = false
                      this.$notify({
                        title:'SUCCESS',
                        text:'Item updated!',
                        duration:5000,
                        type: 'success',
                        width:'100%',
                    })

                }).catch(err=>{
                    console.log(err)
                   this.submitting = false;
                   this.$notify({
                        title:'ERROR',
                        text:'An error has occured!',
                        duration:5000,
                        type: 'error',
                        width:'100%',
                    })
                })
        }

    },
    mounted(){
        this.AFFECTIVE_DETAIL(this.$route.params.id).then(()=>{
            this.domain = this.domain_detail.domain
        }).catch(err=>{
             console.log(err)
            // this.$router.push('/all-attendance-setting/')
            this.$notify({
                title:'ERROR',
                        text:'Unable to fetch data',
                        duration:5000,
                        type: 'error',
                        width:'100%',
            })
        })
    
    },

}
</script>

<style>

</style>