<template>
<div class="col-sm-12 col-xl-8">
  <h4>Add Subject Teacher</h4>
      <div class="bg-light rounded h-100 p-4">

                            <form @submit.prevent="handleSubmit">

                             <div class="form-floating mb-3">
                                <select v-model="selectedSubject" class="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                    
                                    <option v-for="subject in subjects" :key="subject.id" :value="subject.id">{{subject.name}}</option>
                                </select>
                                <label for="floatingSelect">Subject</label>
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
            selectedSubject:''
       
        }
    },

    computed:{
        ...mapGetters({subjects:'GET_SUBJECTS',sessions:'GET_SESSIONS',classes:'GET_CLASSES'})
    },
   
    methods:{
        ...mapActions(['ADD_SUBJECT_TEACHER','ALL_SUBJECTS','ALL_SESSIONS','ALL_CLASSES']),
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

            if(this.selectedSubject === ''){
               this.submitting = false;
                 this.$notify({
                        title:'Error',
                        text:'Select a subject',
                        duration:5000,
                        type: 'error',
                        width:'100%',
                    })
        
            }

        
      
            // data
               const payload ={
                subject:this.selectedSubject,
                session:this.selectedSession,
                classroom:this.selectedClass,
                id:this.$route.params.id
                }

                this.ADD_SUBJECT_TEACHER(payload).then((res)=>{
                 
                    this.submitting = false
                      this.$notify({
                        title:'SUCCESS',
                        text:'Subject Teacher Added!',
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
        this.ALL_SUBJECTS()
        this.ALL_CLASSES()
        this.ALL_SESSIONS()
    },

}
</script>

<style>

</style>