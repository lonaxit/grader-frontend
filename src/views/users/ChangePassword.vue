<template>
<div class="col-sm-12 col-xl-8">
  <h4>Change Password</h4>
      <div class="bg-light rounded h-100 p-4">

                            <form @submit.prevent="handleSubmit">

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingPassword"
                                    placeholder="Enter username" v-model="username">
                                <label for="floatingPassword">Username</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingPassword"
                                    placeholder="Enter Password" v-model="password">
                                <label for="floatingPassword">Password</label>
                            </div>
                             <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingPassword"
                                    placeholder="Enter Password" v-model="re_password">
                                <label for="floatingPassword">Confirm Password</label>
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
    
            username:'',
            password:'',
            re_password:''
         
        }
    },

    computed:{
        ...mapGetters()
    },
   
    methods:{
        ...mapActions(['UPDATE_PASSWORD']),
       handleSubmit(){

            this.submitting = true;

             if(this.username === ''){
               this.submitting = false;
                 this.$notify({
                        title:'Error',
                        text:'Enter a username',
                        duration:5000,
                        type: 'error',
                        width:'100%',
                    })
        
            }

              if(this.password === ''){
               this.submitting = false;
                 this.$notify({
                        title:'Error',
                        text:'Enter a password',
                        duration:5000,
                        type: 'error',
                        width:'100%',
                    })
        
            }
                 if(this.password == !this.re_password){
               this.submitting = false;
                 this.$notify({
                        title:'Error',
                        text:'Password mismatch',
                        duration:5000,
                        type: 'error',
                        width:'100%',
                    })
        
            }
      
            // data
               const payload ={
            username:this.username,
            password:this.password
                }

                this.UPDATE_PASSWORD(payload).then((res)=>{
                    this.username='',
                    this.password=''
                    this.submitting = false
                      this.$notify({
                        title:'SUCCESS',
                        text:'Item updated successfully!',
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


    },

}
</script>

<style>

</style>