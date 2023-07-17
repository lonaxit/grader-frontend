<template>
<div class="col-sm-12 col-xl-8">
  <h4>Filter Scores</h4>
      <div class="bg-light rounded h-100 p-4">

                            <form @submit.prevent="handleSubmit">

                             <div class="form-floating mb-3">
                                <select v-model="selectedTerm" class="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">        
                                    <option v-for="term in terms" :key="term.id" :value="term.id">{{term.name}}</option>
                                </select>
                                <label for="floatingSelect">Term</label>
                            </div>

                                 <div class="form-floating mb-3">
                                <select v-model="selectedSession" class="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                    
                                    <option v-for="session in sessions" :key="session.id" :value="session.id">{{session.name}}</option>
                                </select>
                                <label for="floatingSelect">Session</label>
                            </div>
                                 <div class="form-floating mb-3">
                                <select v-model="selectedClass" class="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                    
                                    <option v-for="room in classes" :key="room.id" :value="room.id">{{room.class_name}}</option>
                                </select>
                                <label for="floatingSelect">Class</label>
                            </div>

                              <div class="form-floating mb-3">
                                <select v-model="selectedSubject" class="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                    
                                    <option v-for="subject in subjects" :key="subject.id" :value="subject.id">{{subject.name}}</option>
                                </select>
                                <label for="floatingSelect">Subject</label>
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
         
            selectedClass:'',
            selectedSession:'',
            selectedTerm:'',
            selectedSubject:'',
         
        }
    },

    computed:{
        ...mapGetters({subjects:'GET_SUBJECTS',sessions:'GET_SESSIONS',classes:'GET_CLASSES',terms:'GET_TERMS'})
    },
   
    methods:{
        ...mapActions(['ALL_SUBJECTS','ALL_SESSIONS','ALL_CLASSES','ALL_TERMS','FILTER_SCORES']),
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
                        title:'Error',
                        text:'Select a session',
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

        
      
            // data
               const payload ={
                term:this.selectedTerm,
                session:this.selectedSession,
                studentclass:this.selectedClass,
                subject:this.selectedSubject,
                }

                this.FILTER_SCORES(payload).then((res)=>{
                 this.$router.push('/scores-list/')
                    this.submitting = false
                }).catch(err=>{
                   this.submitting = false;
                   this.$notify({
                        title:'ERROR',
                        text:err.response.data[0],
                        duration:5000,
                        type: 'error',
                        width:'100%',
                    })
                })
        }

    },
    mounted(){
        this.ALL_TERMS()
        this.ALL_CLASSES()
        this.ALL_SESSIONS()
        this.ALL_SUBJECTS()
    },

}
</script>

<style>

</style>