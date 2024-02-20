<template>

    <!-- <div v-if="isLoading">Loading...</div> -->
    <!-- <div v-else> -->
   
                <div class="score-card">
                        <div class="logo-container">
                        <img :src="badge" alt="logo"  class="logo"/>
                        </div>

                    <div class="heading">
                    <p>BENUE STATE GOVERNMENT</p>
                    <p>MINISTRY OF EDUCATION HEADQUARTERS, MAKURDI </p>
                    <p>TERMLY CONTINOUS ASSESSMENT DOSSIER</p>
                    </div>

                    <h3 class="sch-title">SKY GIFTED ACADEMY MKAR</h3>
                    <h6 class="sch-title">Terminal Result Sheet</h6>

                    <!-- <div class="profile-container">
                            <div class="summary">
                            <span class="name-plate">std anem</span>
                            <p>admno</p>
                        
                            </div>

                            <div class="profile-picture">
                                <img :src="profile_pix" alt="Profile Picture">
                            </div>
                    </div> -->
                    <!-- <div>
                        <table class='examtable-print'>
                            <tr>
                        <th>Class</th>
                        <th>Total In Class</th>
                        <th>Total Score</th>
                        <th>Term Average</th>
                        <th>Term Position</th>
                        <th>Term Attendance</th>
                        <th>Term Ends</th>
                        <th>Next Term Begins</th>
                        </tr>
                        <tr>
                            <td>classname</td>
                            <td>noof students</td>
                            <td>total</td>
                            <td>av</td>
                            
                            <td>pos</td>
                            <td>attendance</td>
                            <td>resm</td>
                            <td>begins</td>
                        </tr>
                        </table>
                    </div> -->

                    
                    <h5>TERMINAL RESULT SHEET</h5>
                    <table class='examtable-print'>
                    <tr>
                     
                        <th colspan="2"></th>
                        <th v-for="subject in subjects" :key="subject" :colspan="columnSpan">{{ subject.subject_code }}
                        </th>
                        <th colspan="4">SUMMARY</th>
                       
                    </tr>
                    <tr  >
                        <th colspan="2">Name</th>
                        <Heading v-for="subject in subjects" :key="subject"/>
                     
                        <th>TOTAL</th>
                        <th>AVG</th>
                        <th>POS</th>
                        <th>RMKS</th>
                    </tr>


                    <tr>
                        <!-- <td>{{score.subject_name}}</td>
                        <td>{{score.firstscore}}</td>
                        <td>{{score.secondscore}}</td>
                        <td>{{score.thirdscore}}</td> -->
                        <!-- <td>{{score.totalca}}</td>
                        <td>{{score.examscore}}</td>
                        <td>{{score.subjecttotal}}</td>
                        <td>{{score.subjaverage}}</td>
                        <td>{{score.highest_inclass}}</td>
                        <td>{{score.lowest_inclass}}</td>
                         <td>{{score.subjectposition}}</td>
                        <td>{{score.subjectgrade}}</td>
                        <td>{{score.subjectrating}}</td>
                         <td>{{score.subjectteacher}}</td> -->
                    </tr>
         
              
                    <!-- Add more subjects here -->
                    </table>

                   

                        <!-- <table class='examtable-print'>
                            <tr>
                        <th>Principal's Name</th>
                        <th>Comment</th>
                        <th>Teacher's' Name</th>
                        <th>Comment</th>
                        </tr>
                        <tr>
                            <td>AKPAH, Yimam Tyonor</td>
                            <td>{{result.headteachercomment}}</td>
                            <td>{{result.classteacher_name}}</td>
                            <td>{{result.classteachercomment}}</td>
                        
                        </tr>
                        </table>
                         -->

                    <!-- <div class="summary">
                    
                    <span class="name-plate">Summary of Result</span>
                    <p>Teacher's Name:</p>
                    <p>Teacher's Comment: "Great performance! Keep up the good work."</p>
                    <p>Principal's Name: AKPAH, Yimam Tyonor</p>
                    <p>Principal's Comment: "Great performance! Keep up the good work."</p>
                    </div> -->
                </div>

                <!-- </div> -->

                <div>{{result}}</div>
</template>

<script>
import Heading from '../../components/Heading.vue'
import { mapActions,mapGetters} from 'vuex'
export default {
    name:'terminalResultSummary',
    components:{
        Heading
    },
    data(){
        return{
            badge: require('@/assets/img/skybadge.jpg') ,
            profile_pix: require('@/assets/img/user_Icon.png'),
            isLoading: true,
            resume_date:'',
            columnSpan: 3
        }
    },
    
    computed:{
        ...mapGetters({subjects:'GET_UNIQUE_SUBJECTS',result:'GET_RESULTS',terminalscores:'GET_TERMINAL_SCORES'}),

        // resumption_date(){
        //     return this.resumedates = this.resumedates.filter(item=>item.current_term===this.result.term && item.session===this.result.session)
        // }
    },

    methods:{
        // ...mapActions(['DETAIL_RESULT','USER_SCORES_LIST','FETCH_TRAITS','FETCH_PSYCHOTRAITS','ALL_RESUMPTION','FETCH_ENROLLMENT']),
    //  printOnPageLoad() {
        //window.print(); // This will open the print dialog on page load
    // },

    },
    mounted(){
       
        // this.DETAIL_RESULT(this.$route.params.id)
        // .then(()=>{
        //     const payload ={
        //         userid: this.result.student,
        //         term:this.result.term,
        //         session:this.result.session,
        //         class:this.result.studentclass
        //     }
        //     this.USER_SCORES_LIST(payload).then(()=>{
        //         const affectivedata={
        //         userid: this.result.student,
        //         session:this.result.session,
        //         classroom:this.result.studentclass,
        //         term:this.result.term
            
        //         }
        //         this.FETCH_TRAITS(affectivedata).then(()=>{
        //         const psychodata={
        //         userid: this.result.student,
        //         session:this.result.session,
        //         classroom:this.result.studentclass,
        //         term:this.result.term
        //         }
        //             this.FETCH_PSYCHOTRAITS(psychodata).then(()=>{
                   
        //                 this.ALL_RESUMPTION().then(()=>{
        //                     const rollcallpayload={
        //                         classroom:this.result.studentclass,
        //                         term:this.result.term,
        //                         session:this.result.session
        //                     }
        //                     this.FETCH_ENROLLMENT(rollcallpayload).then(()=>{
        //                         this.isLoading=false
        //                     }).catch(err=>{
        //                         this.isLoading=false
        //                         this.$notify({
        //                              title:'ERROR',
        //                             text:'Unable to fetch enrollment',
        //                             duration:5000,
        //                             type: 'error',
        //                             width:'100%',
        //                         })
        //                     })
                              
        //                 })
                        
        //             })
        //         })
        //     })
          
        // })
     }

}
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;

}

.score-card {
  max-width: 1300px;
  margin: 2.5px auto;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.logo-container{
 text-align: center;
}
.logo{
    width: 100px;
    height: 100px;
}
.heading p{
    text-align: center;
    color:black;
    font-size:10px;
}
.sch-title{
    font-size:18px
}
.name-plate{
    font-size: 15px;
    color:black;
    font-weight: bolder;
}

h5 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}
h6 {
  text-align: center;
  margin-bottom: 10px;
  color: #333;
}
h3 {
  text-align: center;
  margin-bottom: 8px;
  color: #333;
}

.examtable-print {
    border: 0.7px solid #000;
    border-collapse: collapse;
    width: 100%;

}
    .examtable-print td {
      border: 1px solid #000;
      color: #000;
      font-size: .74em;
      white-space: nowrap;
    }
    .examtable-print th {
      border: 0.5px solid #000;
      color:#000;
      text-align: left;
      font-size: .74em;
    }

table {
  width: 100%;
  border-collapse: collapse;
border: 0.7px solid #000;
}
table, th, td {
  border: 1px solid black;
  padding-left:2px;
  
}

/* th, td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-size: 12px;
  color:black;
} */

th {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #f5f5f5;
}

.summary {
  margin-top: 10px;
  padding-top: 5px;
  color:black;
  flex: 1;
   padding-right: 20px;
}

h2 {
  color: #333;
  margin-bottom: 10px;
}

p {
  margin-bottom: 5px;
}

/* Customize grades colors */
/* td:nth-child(4) {
  color: #fff;
  font-weight: bold;
}

td:nth-child(4):before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 5px;
}

td:nth-child(4)[data-grade="A"] {
  background-color: #4caf50;
}

td:nth-child(4)[data-grade="B"] {
  background-color: #2196f3;
}

td:nth-child(4)[data-grade="C"] {
  background-color: #ff9800;
} */

/*  */



/* Apply a CSS reset to remove default padding and margin */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.traits-container{
    margin-top: 10px;
    display:flex;
    justify-content: space-between;
    padding:20px;
}
.pills{
    display:inline-block;
    margin: 10px 10px 0 0;
    padding:6px 12px;
    background: #eee;
    border-radius:20px;
    font-size:12px;
    letter-spacing:1px;
    font-weight:bold;
    color:black;
}
.underline{
    text-decoration: underline;
  padding: 10px;
}



.profile-container {
    border-top: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    padding: 20px;
}

.profile-info {
    flex: 1;
    padding-right: 20px; /* Add some spacing between the two columns */
}

.profile-picture {

    flex: 1;
    display: flex;
    justify-content: center; /* Center the image horizontally */
    align-items: center; /* Center the image vertically */
}

/* Optional: Add some styles to the student profile picture */
.profile-picture img {
    max-width: 100%;
    max-height: 100px;
    border-radius: 50%;
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); */
}

</style>

