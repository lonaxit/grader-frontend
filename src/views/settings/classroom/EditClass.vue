<template>
<div class="col-sm-12 col-xl-8">
  <h4>Edit Classroom</h4>
      <div class="bg-light rounded h-100 p-4">
                            <form @submit.prevent="handleSubmit">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput"
                                    placeholder="name" v-model="class_name">
                                <label for="floatingInput">Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingPassword"
                                    placeholder="Code" v-model="code">
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
            class_name:'',
            code:''
        }
    },
    computed:{
        ...mapGetters(
            {classroom:"GET_CLASS"}
          )
    },

    methods:{
        ...mapActions(['UPDATE_CLASS','CLASS_DETAIL']),
        handleSubmit(){
            this.submitting = true;

             if(this.clas_name === ''){
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
                class_name:this.class_name,
                code:this.code,
                id:this.$route.params.id
                }

                this.UPDATE_CLASS(payload).then((res)=>{
                    this.$router.push('/all-classes')
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
          this.CLASS_DETAIL(this.$route.params.id).then(()=>{
            this.class_name =this.classroom.clas_name
            this.code = this.classroom.code
        }).catch(err=>{
            this.$router.push('/all-classes')
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