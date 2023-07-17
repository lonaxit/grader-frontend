<template>
<div class="col-sm-12 col-xl-8">
  <h4>Add Psycho Skill</h4>
      <div class="bg-light rounded h-100 p-4">

                            <form @submit.prevent="handleSubmit">

                             <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingPassword"
                                    placeholder="Code" v-model="domain">
                                <label for="floatingPassword">Affective Domain</label>
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
        ...mapGetters()
    },
   
    methods:{
        ...mapActions(['ADD_AFFECTIVE']),
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
                }

                this.ADD_AFFECTIVE(payload).then((res)=>{
                 this.domain=''
                    this.submitting = false
                      this.$notify({
                        title:'SUCCESS',
                        text:'Item Added!',
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
    
    },

}
</script>

<style>

</style>