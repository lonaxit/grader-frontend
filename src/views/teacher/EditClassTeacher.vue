<template>
<div class="col-sm-12 col-xl-8">
  <h4>Edit Class Teacher [{{classteach.teacher_name}}]</h4>
      <div class="bg-light rounded h-100 p-4">

                            <form @submit.prevent="handleSubmit">

                             <div class="form-floating mb-3">
                                <select v-model="selectedTerm" class="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                    
                                    <option v-for="term in terms" :key="term.id" :value="term.id">{{term.name}}</option>
                                </select>
                                <label for="floatingSelect">Term</label>
                            </div>
                            <span v-if="classteach">{{classteach.term_name}}</span>

                                 <div class="form-floating mb-3">
                                <select v-model="selectedSession" class="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                    
                                    <option v-for="session in sessions" :key="session.id" :value="session.id">{{session.name}}</option>
                                </select>
                                <label for="floatingSelect">Session</label>
                            </div>
                            <span v-if="classteach">{{classteach.session_name}}</span>


                                 <div class="form-floating mb-3">
                                <select v-model="selectedClass" class="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                    
                                    <option v-for="room in classes" :key="room.id" :value="room.id">{{room.class_name}}</option>
                                </select>
                                <label for="floatingSelect">Class</label>
                            </div>
                            <span v-if="classteach">{{classteach.class_name}}</span>

                          

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
            selectedTerm:''
            
       
        }
    },

    computed:{
        ...mapGetters({terms:'GET_TERMS',sessions:'GET_SESSIONS',classes:'GET_CLASSES',classteach:'GET_CLASS_TEACHER'})
    },
   
    methods:{
        ...mapActions(['CLASS_TEACHER_DETAIL','ALL_TERMS','ALL_SESSIONS','ALL_CLASSES','UPDATE_CLASS_TEACHER']),
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
                term:this.selectedTerm,
                session:this.selectedSession,
                classroom:this.selectedClass,
                id:this.$route.params.id
                }
                

                this.UPDATE_CLASS_TEACHER(payload).then((res)=>{
                    this.$router.push('/all/class-teacher/')
                    this.submitting = false
                      this.$notify({
                        title:'SUCCESS',
                        text:'Subject Edited Added!',
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
        
          this.CLASS_TEACHER_DETAIL(this.$route.params.id).then(()=>{
            
        }).catch(err=>{
            this.$router.push('/all/class-teacher/')
            this.$notify({
                title:'ERROR',
                        text:'Unable to fetch data',
                        duration:5000,
                        type: 'error',
                        width:'100%',
            })
        })

        this.ALL_TERMS()
        this.ALL_CLASSES()
        this.ALL_SESSIONS()
    },

}
</script>

<style>

</style>