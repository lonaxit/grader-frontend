<template>
<div class="col-sm-12 col-xl-8">
  <h4>New Mass Enrollment</h4>
      <div class="bg-light rounded h-100 p-4">

                            <form @submit.prevent="handleSubmit">

                             <div class="form-floating mb-3">
                                <select v-model="selectedTerm" class="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                    
                                    <option v-for="term in terms" :key="term.id" :value="term.id">{{term.name}}</option>
                                </select>
                                <label for="floatingSelect">Old Term</label>
                            </div>

                                 <div class="form-floating mb-3">
                                <select v-model="selectedSession" class="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                    
                                    <option v-for="session in sessions" :key="session.id" :value="session.id">{{session.name}}</option>
                                </select>
                                <label for="floatingSelect">Old Session</label>
                            </div>
                                 <div class="form-floating mb-3">
                                <select v-model="selectedClass" class="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                    
                                    <option v-for="room in classes" :key="room.id" :value="room.id">{{room.class_name}}</option>
                                </select>
                                <label for="floatingSelect">Old Class</label>
                            </div>


                            <div class="form-floating mb-3">
                                <select v-model="newTerm" class="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                    
                                    <option v-for="term in terms" :key="term.id" :value="term.id">{{term.name}}</option>
                                </select>
                                <label for="floatingSelect">New Term</label>
                            </div>

                                 <div class="form-floating mb-3">
                                <select v-model="newSession" class="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                    
                                    <option v-for="session in activesess" :key="session.id" :value="session.id">{{session.name}}</option>
                                </select>
                                <label for="floatingSelect">New Session</label>
                            </div>
                                 <div class="form-floating mb-3">
                                <select v-model="newClass" class="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                    
                                    <option v-for="room in classes" :key="room.id" :value="room.id">{{room.class_name}}</option>
                                </select>
                                <label for="floatingSelect">New Class</label>
                            </div>


                                 <button type="submit"  :disabled="submitting" class="btn btn-primary py-3 w-100 mb-4">
                            {{ submitting ? 'Submitting...' : 'Submit' }}
                                </button>
                            </form>
                        </div>
                        <div>
                            <p>oldclass:{{selectedClass}}</p>
                            <p>oldsess:{{selectedSession}}</p>
                            <p>oldterm:{{selectedTerm}}</p>
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
            newClass:'',
            newTerm:'',
            newSession:''
        }
    },

    computed:{
        ...mapGetters({sessions:'GET_SESSIONS',classes:'GET_CLASSES',terms:'GET_TERMS', toclasses:'GET_CLASSES',toterms:'GET_TERMS',activesess:'GET_ACTIVE_SESSION'})
    },
   
    methods:{
        ...mapActions(['ALL_SESSIONS','ALL_CLASSES','ALL_TERMS','MASS_ENROLLMENT']),
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
                oldterm:this.selectedTerm,
                oldsession:this.selectedSession,
                oldclass_room:this.selectedClass,
                nextterm:this.newTerm,
                nextsession:this.newSession,
                nextclassroom:this.newClass,
               
                }

                this.MASS_ENROLLMENT(payload).then((res)=>{
                
                    this.submitting = false
                      this.$notify({
                        title:'SUCCESS',
                        text:'Enrollment Added!',
                        duration:5000,
                        type: 'success',
                        width:'100%',
                    })

                }).catch(err=>{
                    
                   this.submitting = false;
                   console.log(err)
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
        this.ALL_TERMS()
        this.ALL_CLASSES()
        this.ALL_SESSIONS()
    },

}
</script>

<style>

</style>