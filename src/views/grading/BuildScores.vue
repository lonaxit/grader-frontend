<template>
    <div class="col-sm-12 col-xl-8">
      <h4>Build Scores</h4>
          <div class="bg-light rounded h-100 p-4">
    
                                <form @submit.prevent="handleSubmit">
    
                                 <!-- <div class="form-floating mb-3">
                                    <select v-model="selectedTerm" class="form-select" id="floatingSelect"
                                        aria-label="Floating label select example">        
                                        <option v-for="term in terms" :key="term.id" :value="term.id">{{term.name}}</option>
                                    </select>
                                    <label for="floatingSelect">Term</label>
                                </div> -->
    
                                     <div class="form-floating mb-3">
                                    <select v-model="selectedSubj" class="form-select" id="floatingSelect"
                                        aria-label="Floating label select example">
                                        
                                        <option v-for="subject in subjects" :key="subject.id" :value="subject.id">{{subject.name}}</option>
                                    </select>
                                    <label for="floatingSelect">Subject</label>
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
                selectedSubj:'',
                // selectedTerm:'',
                
             
            }
        },
    
        computed:{
            ...mapGetters({subjects:'GET_SUBJECTS',classes:'GET_CLASSES'})
        },
       
        methods:{
            ...mapActions(['ALL_SUBJECTS','ALL_CLASSES','CREATE_RESULT','BUILD_SCORES']),
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
    
                  if(this.selectedSubj === ''){
                   this.submitting = false;
                     this.$notify({
                            title:'Error',
                            text:'Select a subject',
                            duration:5000,
                            type: 'error',
                            width:'100%',
                        })
            
                }
    
                // if(this.selectedTerm === ''){
                //    this.submitting = false;
                //      this.$notify({
                //             title:'Error',
                //             text:'Select a term',
                //             duration:5000,
                //             type: 'error',
                //             width:'100%',
                //         })
            
                // }
    
            
          
                // data
                   const payload ={
                  
                    subj:this.selectedSubj,
                    studentclass:this.selectedClass,
                    }
    
                    this.BUILD_SCORES(payload).then((res)=>{
                     
                        this.submitting = false
                            this.$notify({
                            title:'Success',
                            text:'Scores build successfully',
                            duration:5000,
                            type: 'success',
                            width:'100%',
                        })
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
            this.ALL_CLASSES()
            this.ALL_SUBJECTS()
        },
    
    }
    </script>
    
    <style>
    
    </style>