<template>
<div class="col-sm-12 col-xl-8">
  <h4>Mass Enrollment</h4>
      <div class="bg-light rounded h-100 p-4">

                            <form @submit.prevent="handleSubmit">

                             <div class="form-floating mb-3">
                                <select v-model="f_Term" class="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                    
                                    <option v-for="term in terms" :key="term.id" :value="term.id">{{term.name}}</option>
                                </select>
                                <label for="floatingSelect"> From Term</label>
                            </div>

                                 <div class="form-floating mb-3">
                                <select v-model="f_Session" class="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                    
                                    <option v-for="session in sessions" :key="session.id" :value="session.id">{{session.name}}</option>
                                </select>
                                <label for="floatingSelect"> From Session</label>
                            </div>

                                 <div class="form-floating mb-3">
                                <select v-model="f_Class" class="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                    
                                    <option v-for="room in classes" :key="room.id" :value="room.id">{{room.class_name}}</option>
                                </select>
                                <label for="floatingSelect"> From Class</label>
                            </div>


                                <div class="form-floating mb-3">
                                <select v-model="t_Term" class="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                    
                                    <option v-for="myterm in toterms" :key="myterm.id" :value="myterm.id">{{myterm.name}}</option>
                                </select>
                                <label for="floatingSelect"> To Term</label>
                            </div>

                                 <div class="form-floating mb-3">
                                <select v-model="t_Session" class="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                    
                                    <option v-for="session in activesess" :key="session.id" :value="session.id">{{session.name}}</option>
                                </select>
                                <label for="floatingSelect"> To Session</label>
                            </div> 
                                 <div class="form-floating mb-3">
                                <select v-model="t_Class" class="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                    
                                    <option v-for="myclass in toclasses" :key="myclass.id" :value="myclass.id">{{myclass.class_name}}</option>
                                </select>
                                <label for="floatingSelect"> To Class</label>
                            </div>

                            

                                 <button type="submit"  :disabled="submitting" class="btn btn-primary py-3 w-100 mb-4">
                            {{ submitting ? 'Submitting...' : 'Submit' }}
                                </button>
                            </form>
                        </div>
                        <div>
                            <p> from class:{{f_Class}}</p>
                            <p> from sess:{{f_Session}}</p>
                            <p> from term:{{f_Term}}</p>
                            <p> to class:{{t_Class}}</p>
                            <p> to sess:{{t_Session}}</p>
                            <p> to term:{{t_Term}}</p>
                        </div>
  </div>
</template>

<script>

import {mapActions,mapMutations,mapGetters} from 'vuex'
export default {
      
    data(){
        return{
            submitting: false,
         
            f_Class:'',
            f_Session:'',
            f_Term:'',
            t_Class:'',
            t_Session:'',
            t_Term:''
        }
    },

    computed:{
        ...mapGetters({sessions:'GET_SESSIONS',classes:'GET_CLASSES',toclasses:'GET_CLASSES',terms:'GET_TERMS',toterms:'GET_TERMS',activesess:'GET_ACTIVE_SESSION'})
    },
   
    methods:{
        ...mapActions(['ALL_SESSIONS','ALL_CLASSES','ALL_TERMS','FETCH_ENROLLMENT','MASS_ENROLLMENT']),
        
        handleSubmit(){
            this.submitting = true;

            //     if(this.f_Class === ''){
            //    this.submitting = false;
            //      this.$notify({
            //             title:'Error',
            //             text:'Select a class',
            //             duration:5000,
            //             type: 'error',
            //             width:'100%',
            //         })
        
            // }
            //   if(this.f_Session === ''){
            //    this.submitting = false;
            //      this.$notify({
            //             title:'Error',
            //             text:'Select a session',
            //             duration:5000,
            //             type: 'error',
            //             width:'100%',
            //         })
        
            // }

            // if(this.f_Term === ''){
            //    this.submitting = false;
            //      this.$notify({
            //             title:'Error',
            //             text:'Select a term',
            //             duration:5000,
            //             type: 'error',
            //             width:'100%',
            //         })
        
            // }

            // if(this.t_Class === ''){
            //    this.submitting = false;
            //      this.$notify({
            //             title:'Error',
            //             text:'Select a class',
            //             duration:5000,
            //             type: 'error',
            //             width:'100%',
            //         })
        
            // }
            //   if(this.t_Session === ''){
            //    this.submitting = false;
            //      this.$notify({
            //             title:'Error',
            //             text:'Select a session',
            //             duration:5000,
            //             type: 'error',
            //             width:'100%',
            //         })
        
            // }

            // if(this.t_Term === ''){
            //    this.submitting = false;
            //      this.$notify({
            //             title:'Error',
            //             text:'Select a term',
            //             duration:5000,
            //             type: 'error',
            //             width:'100%',
            //         })
        
            // }

            const payload={
                fromclassroom:this.f_Class,
                fromterm:this.f_Term,
                fromsession:this.f_Session,
                toclassroom:this.t_Class,
                toterm:this.t_Term,
                tosession:this.t_Session
            }

            this.MASS_ENROLLMENT(payload).then((res)=>{
                     this.submitting = false;
                         this.$notify({
                        title:'SUCCESS',
                        text:'Enrollment',
                        duration:5000,
                        type: 'success',
                        width:'100%',
                    })
            }).catch(err=>{
                    
                   this.submitting = false;
                   console.log(err)
                   this.$notify({
                        title:'ERROR',
                        text:err,
                        duration:5000,
                        type: 'error',
                        width:'100%',
                    })
                })
           

            // this.$router.push({ name: 'roll-call', params: {term:this.selectedTerm,classroom: this.selectedClass, session:this.selectedSession } })  
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