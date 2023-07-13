<template>
<div class="col-sm-12 col-xl-8">
  <h4>Edit User Account</h4>
      <div class="bg-light rounded h-100 p-4">

                            <form @submit.prevent="handleSubmit">

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingPassword"
                                    placeholder="username" v-model="username">
                                <label for="floatingPassword">Username</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingPassword"
                                    placeholder="surname" v-model="sur_name">
                                <label for="floatingPassword">Surname</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingPassword"
                                    placeholder="firstname" v-model="first_name">
                                <label for="floatingPassword">First name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingPassword"
                                    placeholder="optional othername" v-model="other_name">
                                <label for="floatingPassword">Other name</label>
                            </div>

                              <div class="form-floating mb-3">
                                <input type="date" class="form-control" id="floatingPassword"
                                    placeholder="DOB" v-model="dob">
                                <label for="floatingPassword">Date of Birth</label>
                            </div>

                             <div class="form-floating mb-3">
                                <select v-model="selectedGender" class="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                    <option  value="M">Male</option>
                                    <option  value="F">Female</option>
                                </select>
                                <label for="floatingSelect">Gender</label>
                            </div>

                           <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingPassword"
                                    placeholder="Phone" v-model="phone">
                                <label for="floatingPassword">Phone Number</label>
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
        
            phone:'',
          selectedGender:'',
            username:'',
            first_name:'',
            other_name:'',
            sur_name:'',
            dob:''
        }
    },

    computed:{
        ...mapGetters({user:'GET_USER'})
    },
   
    methods:{
        ...mapActions(['USER_DETAIL','UPDATE_USER']),
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
            if(this.dob === ''){
               this.submitting = false;
                  this.$notify({
                        title:'ERROR',
                        text:'Select dob',
                        duration:5000,
                        type: 'error',
                        width:'100%',
                    })
        
            }
            // data
               const payload ={
          
            id:this.$route.params.id,
            phone:this.phone,
            gender:this.selectedGender,
            username:this.username,
            first_name:this.first_name,
            other_name:this.other_name,
            sur_name:this.sur_name,
            dob:this.dob
                }

                this.UPDATE_USER(payload).then((res)=>{
                    this.phone =''
                    this.username=''
                    this.first_name=''
                    this.sur_name=''
                    this.other_name=''
                    this.dob=''
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
    mounted(){

         this.USER_DETAIL(this.$route.params.id).then(()=>{
            this.username = this.user.username,
            this.sur_name = this.user.sur_name,
            this.first_name= this.user.first_name,
            this.other_name = this.user.other_name,
            this.phone = this.user.phone,
            this.dob = this.user.dob
        }).catch(err=>{
            console.log(err)
            this.$router.push('/all-students/')
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