<template>
<div class="col-sm-12 col-xl-8">
  <h4>Edit Subject</h4>
      <div class="bg-light rounded h-100 p-4">
                            <form @submit.prevent="handleSubmit">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput"
                                    placeholder="name" v-model="name">
                                <label for="floatingInput">Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingPassword"
                                    placeholder="Code" v-model="subject_code">
                                <label for="floatingPassword">Code</label>
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
            name:'',
            subject_code:''
        }
    },
    computed:{
        ...mapGetters(
            {subject:"GET_SUBJECT"}
          )
    },

    methods:{
        ...mapActions(['UPDATE_SUBJECT','SUBJECT_DETAIL']),
        handleSubmit(){
            this.submitting = true;

             if(this.name === ''){
               this.submitting = false;
                 this.$notify({
                        title:'Error',
                        text:'Name is missing!',
                        duration:5000,
                        type: 'error',
                        width:'100%',
                    })
        
            }
            if(this.code === ''){
               this.submitting = false;
                  this.$notify({
                        title:'ERROR',
                        text:'Code is missing!',
                        duration:5000,
                        type: 'error',
                        width:'100%',
                    })
        
            }
            // data
               const payload = {
                name:this.name,
                subject_code:this.subject_code,
                id:this.$route.params.id
                }

                this.UPDATE_SUBJECT(payload).then((res)=>{
                    this.$router.push('/all-subjects')
                    this.submitting = false
                      this.$notify({
                        title:'SUCCESS',
                        text:'Item edited successfully!',
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
          this.SUBJECT_DETAIL(this.$route.params.id).then(()=>{
            this.name =this.subject.name
            this.subject_code = this.subject.subject_code
        }).catch(err=>{
            this.$router.push('/all-subjects')
            this.$notify({
                title:'ERROR',
                        text:'Unable to fetch data',
                        duration:5000,
                        type: 'error',
                        width:'100%',
            })
        })
    }

}
</script>

<style>

</style>