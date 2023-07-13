<template>
<div class="col-sm-12 col-xl-8">
  <h4>Add Term</h4>
      <div class="bg-light rounded h-100 p-4">
                            <form @submit.prevent="handleSubmit">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput"
                                    placeholder="name" v-model="name">
                                <label for="floatingInput">Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingPassword"
                                    placeholder="Code" v-model="code">
                                <label for="floatingPassword">Code</label>
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
            name:'',
            code:''
        }
    },

    methods:{
        ...mapActions(['ADD_TERMS']),
        handleSubmit(){
            this.submitting = true;

             if(this.name === ''){
               this.submitting = false;
                 this.$notify({
                        title:'Error',
                        text:'Name is missing!',
                        duration:5000,
                        type: 'error',
                        width:'100%',
                    })
        
            }
            if(this.code === ''){
               this.submitting = false;
                  this.$notify({
                        title:'ERROR',
                        text:'Code is missing!',
                        duration:5000,
                        type: 'error',
                        width:'100%',
                    })
        
            }
            // data
               const payload ={
                name:this.name,
                code:this.code
                }

                this.ADD_TERMS(payload).then((res)=>{
                    this.name =''
                    this.code=''
                    this.submitting = false
                      this.$notify({
                        title:'SUCCESS',
                        text:'Item added!',
                        duration:5000,
                        type: 'success',
                        width:'100%',
                    })

                }).catch(err=>{
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

    }

}
</script>

<style>

</style>