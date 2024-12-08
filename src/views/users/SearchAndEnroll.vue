<template>

    <div class="col-sm-12 col-xl-12">
      <!-- <div v-if="loading"> -->
      
    
    
    
    <div class="bg-light rounded h-100 p-4">
    <h6 class="mb-4">Search And Enroll</h6>
    <!-- <form class="form-inline" @submit.prevent="handleSubmit"> -->
      <div>
        <label for="dropdown">Choose Class:</label>
        <select id="dropdown" v-model="selectedClass">
            <option selected> Select Class </option>
            <option v-for="item in classes" :value="item.id" :key="item.id">{{ item.class_name }}</option>
        </select>
      </div>

      <!-- <div>
        <label for="textInput">Input:</label>
        <input type="text" id="textInput" v-model="textInput" placeholder="Enter text" />
      </div> -->

      <!-- <div>
        <button type="submit">Submit</button>
      </div> -->
    <!-- </form> -->
    <!--  -->
                              
        <div class="search-container">
            <form @submit.prevent="fetchStudents">
            <input
                type="text"
                v-model="name"
                class="search-input"
                placeholder="Search..."
            />
            <button type="submit" class="search-button">Search</button>
            </form>
        </div>

                              
                              <table class="table">
                                  <thead>
                                      <tr>
                                          <th scope="col">Surname</th>
                                          <th scope="col">First</th>
                                          <th scope="col">Othername</th>
                                          <th scope="col">Username</th>
                                          <th scope="col">Action</th> 
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr v-for="student in students" :key="student.id">
                                          <td>{{student.sur_name}}</td>
                                          <td>{{student.first_name}}</td>
                                          <td>{{student.other_name}}</td>
                                          <td>{{student.username}}</td>
                                          <td>
                                            <button @click="enrollStudent(student.id)">Enroll</button>
                                        </td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                          <div><hr/></div>

    <div>
        <h4>Enrolled Students</h4>
        <table class="table">
                                  <thead>
                                      <tr>
                                          <th scope="col">Name</th>
                                          <th scope="col">Admn No</th>
                                          <th scope="col">Session</th>
                                          <th scope="col">Term</th>
                                          <th scope="col">Class</th> 
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr v-for="i in livesearchenroll" :key="i.id">
                                          <td>{{i.student_name}}</td>
                                          <td>{{i.student_adm_no}}</td>
                                          <td>{{i.session}}</td>
                                          <td>{{i.term}}</td>
                                          <td>{{i.class_room}}</td>
                                          <td>
                                            <!-- <button @click="enrollStudent(student.id)">Enroll</button> -->
                                        </td>
                                      </tr>
                                  </tbody>
                              </table>
    </div>
    <!-- </div> -->
    <!-- <div v-else>
      <p>Loading ...</p>
    </div> -->
    
  </div>
  
  </template>
  
  <script>
  import {mapActions,mapGetters,mapMutations} from 'vuex'
  export default {
  name:'Search And Enroll',
  data(){
      return{
        // loading:false,
        selectedClass:'',
        name:'',
      }
  },
  computed:{
  ...mapGetters({students:"GET_STUDENTS",classes:'GET_CLASSES',livesearchenroll:'GET_SEARCH_ENROLLMENT'})
  },
  methods:{
  ...mapActions(['FIND_STUDENT','ENROLLMENT_BYSEARCH','FETCH_NEWSEARCHENROLLMENT','ALL_CLASSES']),

  fetchStudents(){
    const payload ={
        name:this.name,
        }

        this.FIND_STUDENT(payload).then((res)=>{
                    //reset values
                    this.name='',
                    this.$notify({
                        title:'SUCCESSFULLY SUBMITTED',
                        text:'Search found',
                        duration:5000,
                        type: 'success',
                        width:'100%',
                    })

                }).catch(err=>{
                    console.log(err)
                   this.name = '';
                   this.$notify({
                        title:'ERROR',
                        text:'An error has occured!',
                        duration:5000,
                        type: 'error',
                        width:'100%',
                    })
                });
  },


  enrollStudent(id){
    const payload ={
        user_id:id,
        class_id:this.selectedClass
    }

    const fetchPayload ={
        class_id:this.selectedClass
    }


    this.ENROLLMENT_BYSEARCH(payload)
    .then(() => {
        return this.FETCH_NEWSEARCHENROLLMENT(fetchPayload);
    })
    .then(() => {
                    this.$notify({
                        title:'ENROLLMENT SUCCESSFULLY SUBMITTED',
                        text:'Whoalaa...GREAT JOB',
                        duration:5000,
                        type: 'success',
                        width:'100%',
                    })
        // Success logic for the second promise
        // console.log("Enrollment and fetch completed successfully.");
    })
    .catch((error) => {
                        console.log(error);
                        this.$notify({
                        title:'ERROR',
                        text:'An error has occured!',
                        duration:5000,
                        type: 'error',
                        width:'100%',
                    })
        // Handle any errors in the promise chain
        // console.error("An error occurred:", error);
    });

    // this.ENROLLMENT_BYSEARCH(payload).then(()=>{ 
            
    //     this.FETCH_NEWSEARCHENROLLMENT(fetchPayload).then(()=>{

    //             });
    //         });        
  }
  
  },
  
  mounted(){
    this.ALL_CLASSES()
    //   this.FETCH_USERS().then(()=>{
    //       this.loading=true
    //   })  
  }
  }
  </script>
  
  <style scoped>
  .search-container {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    margin-top: 20px;
  }
  
  /* form {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 25px;
    padding: 5px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  } */
  
  .search-input {
    border: none;
    outline: none;
    padding: 10px 15px;
    flex: 1;
    border-radius: 25px 0 0 25px;
    font-size: 16px;
  }
  
  .search-button {
    background-color: #007bff;
    border: none;
    outline: none;
    color: white;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 0 25px 25px 0;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }
  
  .search-button:hover {
    background-color: #0056b3;
  }
  
  .search-button:active {
    transform: scale(0.95);
  }

  /* new styles */
  .form-inline {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .form-inline label {
      margin-right: 5px;
      font-weight: bold;
    }

    .form-inline select, 
    .form-inline input[type="text"] {
      padding: 5px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    .form-inline button {
      padding: 5px 10px;
      background-color: #007BFF;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .form-inline button:hover {
      background-color: #0056b3;
    }
  </style>