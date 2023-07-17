<template>

  <div class="col-sm-12 col-xl-12">
    <div v-if="loading">
    
                        <div class="bg-light rounded h-100 p-4">
                            <h6 class="mb-4">Assessment Sheet Preview</h6>
                             <button @click="exportToExcel">Export to Excel</button>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">StdID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Subj</th>
                                        <th scope="col">Class</th>
                                        <th scope="col">Term</th>
                                        <th scope="col">Sess</th>
                                        <th scope="col">CA1</th>
                                        <th scope="col">CA2</th>
                                        <th scope="col">CA3</th>
                                        <th scope="col">Exam</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in caroll" :key="item.id">
                                        <td>{{item.student}}</td>
                                        <td>{{item.student_name}}</td>
                                        <td>{{subject.subject_code}}</td>
                                        <td>{{item.class_room}}</td>
                                        <td>{{item.term}}</td>
                                        <td>{{item.session}}</td>
                                        <td>{{0}}</td>
                                        <td>{{0}}</td>
                                        <td>{{0}}</td>
                                        <td>{{0}}</td>
                                        
                                    </tr>
                                </tbody>
                            </table>
                        </div>
  </div>
  <div v-else>
    <p>Loading ...</p>
  </div>
  
</div>

</template>

<script>
import {XLSX} from 'xlsx'


import {mapActions,mapGetters,mapMutations} from 'vuex'
export default {
name:'All CA',
data(){
    return{
        loading:false,
         products: [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 },
      ],
    }
},
computed:{
...mapGetters({caroll:'GET_CA_ROLL',class_detail:'GET_CLASS',subject:'GET_SUBJECT'})
},
methods:{
...mapActions(['CA_ROLLCALL','CLASS_DETAIL','SUBJECT_DETAIL']),

 exportToExcel() {
      const worksheet = XLSX.utils.json_to_sheet(this.products);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Products');
      XLSX.writeFile(workbook, 'products.xlsx');
    },

},

mounted(){
    const payload={
        classroom:this.$route.params.classid
    }
    this.CA_ROLLCALL(payload).then(()=>{
        this.CLASS_DETAIL(this.$route.params.classid).then(()=>{
            this.SUBJECT_DETAIL(this.$route.params.subjectid).then(()=>{
                 this.loading=true
            })
        })
    })
}
}
</script>

<style>

</style>