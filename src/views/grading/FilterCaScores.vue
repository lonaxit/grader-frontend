<template>
<div class="col-sm-12 col-xl-8">
  <h4>Select Assessment Sheet</h4>
      <div class="bg-light rounded h-100 p-4">

                            <form @submit.prevent="handleSubmit">

                             <div class="form-floating mb-3">
                                <select v-model="selectedSubject" class="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                    
                                    <option v-for="subj in allsubjs" :key="subj.id" :value="subj.id">{{subj.name}}</option>
                                </select>
                                <label for="floatingSelect">Subjects</label>
                            </div>

                                 <!-- <div class="form-floating mb-3">
                                <select v-model="selectedSession" class="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                    
                                    <option v-for="session in activesess" :key="session.id" :value="session.id">{{session.name}}</option>
                                </select>
                                <label for="floatingSelect">Session</label>
                            </div> -->
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
            // selectedSession:'',
            selectedSubject:''
        }
    },

    computed:{
        ...mapGetters({classes:'GET_CLASSES',subjdetail:'GET_SUBJECT',allsubjs:'GET_SUBJECTS',classdetail:'GET_CLASS'})
    },
   
    methods:{
        ...mapActions(['ALL_CLASSES','SUBJECT_DETAIL','ALL_SUBJECTS','CLASS_DETAIL','GET_CASHEET']),
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
              if(this.selectedSubject === ''){
               this.submitting = false;
                 this.$notify({
                        title:'Error',
                        text:'Select a session',
                        duration:5000,
                        type: 'error',
                        width:'100%',
                    })
        
            }

            this.CLASS_DETAIL(this.selectedClass).then(()=>{
                this.SUBJECT_DETAIL(this.selectedSubject).then(()=>{

                const payload={

                classname: this.classdetail.class_name,
                subjname: this.subjdetail.subject_code,
                subjectid:this.subjdetail.id,
                classid:this.classdetail.id
            }

            this.GET_CASHEET(payload).then((res)=>{
                    this.submitting = false;
            }).catch(err=>{
                    
                   this.submitting = false;
                   this.$notify({
                        title:'ERROR',
                        text:'An error has occured or no records',
                        duration:5000,
                        type: 'error',
                        width:'100%',
                    })
                })




                })
            })
           
          


            
           

            // this.$router.push({ name: 'roll-call', params: {term:this.selectedTerm,classroom: this.selectedClass, session:this.selectedSession } })  
        }

    },
    mounted(){
        // this.ALL_TERMS()
        this.ALL_CLASSES()
        // this.ALL_SESSIONS()
        this.ALL_SUBJECTS()
    },

}
</script>

<style>

</style>