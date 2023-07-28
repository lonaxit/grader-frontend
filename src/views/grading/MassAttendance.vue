<template>
<div class="col-sm-12 col-xl-8">
  <h4>Download Attendance Sheet </h4>
      <div class="bg-light rounded h-100 p-4">

                            <form @submit.prevent="handleSubmit">

                             <div class="form-floating mb-3">
                                <select v-model="termSelected" class="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                    
                                    <option v-for="term in terms" :key="term.id" :value="term.id">{{term.name}}</option>
                                </select>
                                <label for="floatingSelect"> Term</label>
                            </div>

                        <div class="form-floating mb-3">
                                <select v-model="sessionSelected" class="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                    
                                    <option v-for="session in activesess" :key="session.id" :value="session.id">{{session.name}}</option>
                                </select>
                                <label for="floatingSelect">Session</label>
                        </div>

                                 <div class="form-floating mb-3">
                                <select v-model="classroom" class="form-select" id="floatingSelect"
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
         
            classroom:'',
            sessionSelected:'',
            termSelected:''
        }
    },

    computed:{
        ...mapGetters({classes:'GET_CLASSES',classdetail:'GET_CLASS',sessions:'GET_SESSIONS',classes:'GET_CLASSES',terms:'GET_TERMS',activesess:'GET_ACTIVE_SESSION',sessdetail:'GET_SESSION',termDetail:'GET_TERM'})
    },
   
    methods:{
        ...mapActions(['ALL_CLASSES','SESSION_DETAIL',,'CLASS_DETAIL','ALL_SESSIONS','ALL_CLASSES','ALL_TERMS','GET_GENERAL_ATTENDANCE_SHEET','TERM_DETAIL']),


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

            this.CLASS_DETAIL(this.classroom).then(()=>{
                this.SESSION_DETAIL(this.sessionSelected).then(()=>{
                    this.TERM_DETAIL(this.termSelected).then(()=>{

                         const payload = {
                classname:this.classdetail.code,
                termname:this.termDetail.code,
                sessname:this.sessdetail.code,
                
                classroom:this.classdetail.id,
                term:this.termDetail.id,
                session:this.sessdetail.id
                }

                
                this.GET_GENERAL_ATTENDANCE_SHEET(payload).then((res)=>{
                    this.submitting = false;
                     this.$notify({
                        title:'SUCCESS',
                        text:'Downloaded successfully',
                        duration:5000,
                        type: 'success',
                        width:'100%',
                    })
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