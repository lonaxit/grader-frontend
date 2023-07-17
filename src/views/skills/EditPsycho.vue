<template>
<div class="col-sm-12 col-xl-8">
  <h4>Edit Psycho Skill</h4>
      <div class="bg-light rounded h-100 p-4">

                            <form @submit.prevent="handleSubmit">

                             <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingPassword"
                                    placeholder="Code" v-model="skill">
                                <label for="floatingPassword">Psycho Skill</label>
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
         
            skill:'',
           
       
        }
    },

    computed:{
        ...mapGetters({psycho:'GET_PYSCHO'})
    },
   
    methods:{
        ...mapActions(['PSYCHO_DETAIL','PSYCHO_UPDATE','DELETE_PSYCHO']),
        remove(id){
            this.DELETE_PSYCHO(id)
        },
        handleSubmit(){
            this.submitting = true;

                if(this.skill === ''){
               this.submitting = false;
                 this.$notify({
                        title:'Error',
                        text:'Enter value',
                        duration:5000,
                        type: 'error',
                        width:'100%',
                    })
        
            }
      
            // data
               const payload ={
                skill:this.skill,
                id:this.$route.params.id
                }

                this.PSYCHO_UPDATE(payload).then((res)=>{
                 this.$router.push('/all-psycho/')
                    this.submitting = false
                      this.$notify({
                        title:'SUCCESS',
                        text:'Item updated!',
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
        this.PSYCHO_DETAIL(this.$route.params.id).then(()=>{
            this.skill = this.psycho.skill
        }).catch(err=>{
             console.log(err)
            // this.$router.push('/all-attendance-setting/')
            this.$notify({
                title:'ERROR',
                        text:'Unable to fetch data',
                        duration:5000,
                        type: 'error',
                        width:'100%',
            })
        })
    
    },

}
</script>

<style>

</style>