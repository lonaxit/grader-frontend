<template>
<div class="col-sm-12 col-xl-8">
  <h4>Upload CA Sheet</h4>
      <div class="bg-light rounded h-100 p-4">

                            <form enctype="multipart/form-data"  @submit.prevent="handleSubmit">

                                <input  class="selected-file" type="file" id="loan-upload" ref="file"  @change="selectFile">

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
            selectedSubject:'',
            file:'',
        }
    },

    computed:{
        ...mapGetters({classes:'GET_CLASSES',subjdetail:'GET_SUBJECT',allsubjs:'GET_SUBJECTS',classdetail:'GET_CLASS'})
    },
   
    methods:{
        ...mapActions(['UPLOAD_EXCEL_SCORES']),

        // form process
         selectFile(e){
                this.file = e.target.files[0]
            },

        handleSubmit(){
            this.submitting = true;
            const payload = new FormData();
            payload.append('file', this.file);

            this.UPLOAD_EXCEL_SCORES(payload).then(()=>{
                this.submitting = false
                    this.$notify({
                        title:'SUCCESS',
                        text:'Your scores uploaded successfully',
                        duration:5000,
                        type: 'success',
                        width:'100%',
                    })

            }).catch(err=>{
                  this.submitting = false
                    this.$notify({
                        title:'OOPS!',
                        text:err,
                        duration:5000,
                        type: 'error',
                        width:'100%',
                    })

            })
        }

    },


}
</script>

<style scoped>

.selected-file {
  margin-bottom: 10px;
}
</style>