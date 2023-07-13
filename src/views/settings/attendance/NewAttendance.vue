<template>
<div class="col-sm-12 col-xl-8">
  <h4>Add Attendance Settings</h4>
      <div class="bg-light rounded h-100 p-4">
                            <form @submit.prevent="handleSubmit">
                                <div class="form-floating mb-3">
                                <select v-model="selectedSession" class="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                    <option disabled value="">Please select a session</option>
                                    <option v-for="session in sessions" :value="session.id" :key="session.id">{{ session.name }}</option>
                                </select>
                                <label for="floatingSelect">Choose Session</label>
                            </div>

                             <div class="form-floating mb-3">
                                <select v-model="selectedTerm" class="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                    <option disabled value="">Please select a term</option>
                                    <option v-for="term in terms" :value="term.id" :key="term.id">{{ term.name }}</option>
                                </select>
                                <label for="floatingSelect">Choose term</label>
                            </div>

                           <div class="form-floating mb-3">
                                <input type="number" class="form-control" id="floatingPassword"
                                    placeholder="Code" v-model="days_open">
                                <label for="floatingPassword">No of days open</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="number" class="form-control" id="floatingPassword"
                                    placeholder="Code" v-model="days_closed">
                                <label for="floatingPassword">No of days closed</label>
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
            days_closed:'',
            days_open:'',
            selectedSession:'',
            selectedTerm:''
            
        }
    },

    computed:{
        ...mapGetters({terms:'GET_TERMS',sessions:'GET_SESSIONS'})
    },
   
    methods:{
        ...mapActions(['ADD_ATT','ALL_SESSIONS','ALL_TERMS']),
        handleSubmit(){
            this.submitting = true;

                if(this.days_open === ''){
               this.submitting = false;
                 this.$notify({
                        title:'Error',
                        text:'Enter days school open',
                        duration:5000,
                        type: 'error',
                        width:'100%',
                    })
        
            }

              if(this.days_closed === ''){
               this.submitting = false;
                 this.$notify({
                        title:'Error',
                        text:'Enter days school closed',
                        duration:5000,
                        type: 'error',
                        width:'100%',
                    })
        
            }

             if(this.selectedTerm === ''){
               this.submitting = false;
                 this.$notify({
                        title:'Error',
                        text:'Select a term',
                        duration:5000,
                        type: 'error',
                        width:'100%',
                    })
        
            }
            if(this.selectedSession === ''){
               this.submitting = false;
                  this.$notify({
                        title:'ERROR',
                        text:'Select a session!',
                        duration:5000,
                        type: 'error',
                        width:'100%',
                    })
        
            }
            // data
               const payload ={
                term:this.selectedTerm,
                session:this.selectedSession,
                days_closed:this.days_closed,
                days_open:this.days_open
                }

                this.ADD_ATT(payload).then((res)=>{
                    this.days_open =''
                    this.days_closed=''
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

    },
    mounted(){
        this.ALL_SESSIONS()
        this.ALL_TERMS()
    },

}
</script>

<style>

</style>