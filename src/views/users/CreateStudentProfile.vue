<template>
<div class="col-sm-12 col-xl-8">
  <h4>Add Student Profile</h4>
      <div class="bg-light rounded h-100 p-4">

                            <form @submit.prevent="handleSubmit">

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingPassword"
                                    placeholder="full name" disabled :value="`${user.sur_name} ${user.first_name}`">
                                <label for="floatingPassword">Fullname</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingPassword"
                                    placeholder="password" v-model="guardian">
                                <label for="floatingPassword">Guardian Full Name</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingPassword"
                                    placeholder="Local Govt" v-model="local_govt">
                                <label for="floatingPassword">Local Govt</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingPassword"
                                    placeholder="Address" v-model="address">
                                <label for="floatingPassword">Address</label>
                            </div>

                             <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingPassword"
                                    placeholder="Addmission" v-model="admission_number">
                                <label for="floatingPassword">Admission Number</label>
                            </div>
                           
                             <div class="form-floating mb-3">
                                <select v-model="selectedClass" class="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                 <option v-for="item in classes" :value="item.id" :key="item.id">{{ item.class_name }}</option>
                                </select>
                                <label for="floatingSelect">Class Admitted</label>
                            </div>
                            <div class="form-floating mb-3">
                                <select v-model="selectedTerm" class="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                  <option v-for="term in terms" :value="term.id" :key="term.id">{{ term.name }}</option>
                                </select>
                                <label for="floatingSelect">Term Admitted</label>
                            </div>
                            <div class="form-floating mb-3">
                                <select v-model="selectedSession" class="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                    <option v-for="session in sessions" :value="session.id" :key="session.id">{{ session.name }}</option>
                                   
                                </select>
                                <label for="floatingSelect">Session Admitted</label>
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
            guardian:'',
            local_govt:'',
            admission_number:'',
            address:'',
            selectedClass:'',
            selectedSession:'',
            selectedTerm:''
        }
    },

    computed:{
        ...mapGetters({user:'GET_USER',terms:'GET_TERMS',sessions:'GET_SESSIONS',classes:'GET_CLASSES'})
    },
   
    methods:{
        ...mapActions(['ADD_STUDENT_PROFILE','USER_DETAIL','ALL_SESSIONS','ALL_TERMS','ALL_CLASSES']),
        handleSubmit(){
            this.submitting = true;

                if(this.guardian === ''){
               this.submitting = false;
                 this.$notify({
                        title:'Error',
                        text:'Enter guardian',
                        duration:5000,
                        type: 'error',
                        width:'100%',
                    })
            }

              if(this.address === ''){
               this.submitting = false;
                 this.$notify({
                        title:'Error',
                        text:'Enter adddress',
                        duration:5000,
                        type: 'error',
                        width:'100%',
                    })
        
            }

            if(this.local_govt === ''){
               this.submitting = false;
                 this.$notify({
                        title:'Error',
                        text:'Enter local govt',
                        duration:5000,
                        type: 'error',
                        width:'100%',
                    })
            }

            //  if(this.username === ''){
            //    this.submitting = false;
            //      this.$notify({
            //             title:'Error',
            //             text:'Enter a username',
            //             duration:5000,
            //             type: 'error',
            //             width:'100%',
            //         })
        
            // }
            // if(this.password === ''){
            //    this.submitting = false;
            //       this.$notify({
            //             title:'ERROR',
            //             text:'Enter a password',
            //             duration:5000,
            //             type: 'error',
            //             width:'100%',
            //         })
        
            // }
            // if(this.password == !this.re_password){
            //    this.submitting = false;
            //       this.$notify({
            //             title:'ERROR',
            //             text:'Password do not match',
            //             duration:5000,
            //             type: 'error',
            //             width:'100%',
            //         })
        
            // }
            // data
               const payload ={

            guardian:this.guardian,
            local_govt: this.local_govt,
            admission_number:this.admission_number,
            address:this.address,
            session_admitted:this.selectedSession,
            term_admitted:this.selectedTerm,
            class_admitted:this.selectedClass,
            id:this.$route.params.id

                }

                this.ADD_STUDENT_PROFILE(payload).then((res)=>{
                    this.guardian='',
                    this.local_govt='',
                    this.admission_number='',
                    this.address='',
                    this.submitting = false
                      this.$notify({
                        title:'SUCCESS',
                        text:'Item added!',
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
         this.USER_DETAIL(this.$route.params.id)
         this.ALL_SESSIONS()
        this.ALL_TERMS()
        this.ALL_CLASSES()
    },

}
</script>

<style>

</style>