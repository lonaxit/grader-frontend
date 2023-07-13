<template>
<div class="col-sm-12 col-xl-8">
  <h4>Add Resumption Settings</h4>
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
                                <label for="floatingSelect">Current term</label>
                            </div>

                           <div class="form-floating mb-3">
                                <input type="date" class="form-control" id="floatingPassword"
                                    placeholder="Current Term End Date" v-model="current_term_ends">
                                <label for="floatingPassword">Current term ends</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="date" class="form-control" id="floatingPassword"
                                    placeholder="Next Term Resume Date" v-model="next_term_begins">
                                <label for="floatingPassword">Next term begins</label>
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
            next_term_begins:'',
            current_term_ends:'',
            selectedSession:'',
            selectedTerm:''
        }
    },

    computed:{
        ...mapGetters({terms:'GET_TERMS',sessions:'GET_SESSIONS',resume_detail:'GET_RESUMPTION'})
    },
   
    methods:{
        ...mapActions(['ALL_SESSIONS','ALL_TERMS','UPDATE_RESUMPTION','RESUMPTION_DETAIL']),
        handleSubmit(){
            this.submitting = true;

             if(this.selectedClass === ''){
               this.submitting = false;
                 this.$notify({
                        title:'Error',
                        text:'Select a class',
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
                current_term:this.selectedTerm,
                session:this.selectedSession,
                current_term_ends:this.current_term_ends,
                next_term_begins:this.next_term_begins,
                id:this.$route.params.id
                }

                this.UPDATE_RESUMPTION(payload).then((res)=>{
                    this.current_term_ends =''
                    this.next_term_begins=''
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

           this.RESUMPTION_DETAIL(this.$route.params.id).then(()=>{
            this.current_term_ends =this.resume_detail.current_term_ends
            this.next_term_begins =this.resume_detail.next_term_begins
        }).catch(err=>{
            console.log(err)
            this.$router.push('/all-resumption-setting/')
            this.$notify({
                title:'ERROR',
                        text:'Unable to fetch data',
                        duration:5000,
                        type: 'error',
                        width:'100%',
            })
        })
        
        this.ALL_SESSIONS()
        this.ALL_TERMS()
    },

}
</script>

<style>

</style>