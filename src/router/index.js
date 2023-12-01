import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthLayout from '../layouts/AuthLayout.vue'

const routes = [

  {
    path: '/Print',
    name: 'Print',
    component: () => import('../layouts/PrintLayout.vue'),
    

    children: [
      {
        path: '/print-result/:id',
        name:'print-result',
        component:() =>import('../views/Result/print.vue')
      },
      // {
      //   path: '/print-result',
      //   name:'print-result',
      //   component:() =>import('../components/Authentication/Login.vue')
      // }
    ]
  },
  {
    path: '/Auth',
    name: 'Auth',
    component: () => import('../layouts/AuthLayout.vue'),
    

    children: [
      {
        path: '/Signin',
        name:'Signin',
        component:() =>import('../components/Authentication/Login.vue')
      },
      {
        path: '/',
        name:'Home',
        component:() =>import('../components/Authentication/Login.vue')
      }

    ]
  },

  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: () => import('../layouts/DashboardLayout.vue'),
    redirect:'/Dashboard',

    children: [
      {
        path: '/Dashboard/',
        name:'Dashboard',
        component:() =>import('../views/Dashboard/Home/Home.vue')
      },
      {
        path: '/terms',
        name:'terms',
        component:() =>import('../views/settings/AllTerms.vue')
      },
      {
        path: '/addterm',
        name:'add-term',
        component:() =>import('../views/settings/AddTerm.vue')
      },
      {
        path: '/term/:id',
        name:'edit-term',
        component:() =>import('../views/settings/EditTerm.vue')
      },
      {
        path: '/add-session',
        name:'add-session',
        component:() =>import('../views/settings/AddSession.vue')
      },
      {
        path: '/all-session',
        name:'all-session',
        component:() =>import('../views/settings/AllSessions.vue')
      },
      {
        path: '/session/:id',
        name:'edit-session',
        component:() =>import('../views/settings/EditSession.vue')
      },
      {
        path: '/new-class',
        name:'new-class',
        component:() =>import('../views/settings/classroom/NewClass.vue')
      },
      {
        path: '/all-classes',
        name:'all-classes',
        component:() =>import('../views/settings/classroom/AllClassroom.vue')
      },
      {
        path: '/classroom/:id',
        name:'edit-classroom',
        component:() =>import('../views/settings/classroom/EditClass.vue')
      },
      {
        path: '/new-subject',
        name:'new-subject',
        component:() =>import('../views/settings/subject/NewSubject.vue')
      },
      {
        path: '/all-subjects',
        name:'all-subjects',
        component:() =>import('../views/settings/subject/AllSubjects.vue')
      },
      {
        path: '/subject/:id',
        name:'edit-subject',
        component:() =>import('../views/settings/subject/EditSubject.vue')
      },
      {
        path: '/subject/class',
        name:'subject-per-class',
        component:() =>import('../views/settings/subject/SubjectPerClass.vue')
      },
      {
        path: '/list-class-subjects/',
        name:'list-class-subjects',
        component:() =>import('../views/settings/subject/ListSubjPerClass.vue')
      },
      {
        path: '/subject-per-class/:id',
        name:'edit-subj-per-class',
        component:() =>import('../views/settings/subject/EditSubjectPerClass.vue')
      },
      {
        path: '/new-attendance-setting/',
        name:'new-attendance-setting',
        component:() =>import('../views/settings/attendance/NewAttendance.vue')
      },

      {
        path: '/all-attendance-setting/',
        name:'allattendance-setting',
        component:() =>import('../views/settings/attendance/AllAttendance.vue')
      },
      {
        path: '/edit-attendance-setting/:id',
        name:'editattendance-setting',
        component:() =>import('../views/settings/attendance/EditAttendance.vue')
      },
      {
        path: '/new-resumption-setting/',
        name:'new-resumption-setting',
        component:() =>import('../views/settings/resumption/AddResumption.vue')
      },
      {
        path: '/all-resumption-setting/',
        name:'all-resumption-setting',
        component:() =>import('../views/settings/resumption/AllResumption.vue')
      },
      {
        path: '/edit-resumption-setting/:id',
        name:'editresumption-setting',
        component:() =>import('../views/settings/resumption/EditResumption.vue')
      },
      {
        path: '/new-user/',
        name:'new-user',
        component:() =>import('../views/users/NewStudent.vue')
      },
      {
        path: '/change-password/',
        name:'change-password',
        component:() =>import('../views/users/ChangePassword.vue')
      },
      {
        path: '/edit-account/:id',
        name:'edit-account',
        component:() =>import('../views/users/EditAccount.vue')
      },
      {
        path: '/all-students/',
        name:'all-students',
        component:() =>import('../views/users/AllStudentUsers.vue')
      },
      {
        path: '/no-profile-students/',
        name:'no-profile-students',
        component:() =>import('../views/users/allNewStudents.vue')
      },
      {
        path: '/add-admission-number/',
        name:'add-admission-number',
        component:() =>import('../views/users/AddAdmissionNumber.vue')
      },
      {
        path: '/student-profile/:id',
        name:'student-profile',
        component:() =>import('../views/users/StudentProfile.vue')
      },
      {
        path: '/new/student-profile/:id',
        name:'new-student-profile',
        component:() =>import('../views/users/CreateStudentProfile.vue')
      },
      {
        path: '/edit/student-profile/:id',
        name:'edit-student-profile',
        component:() =>import('../views/users/EditStudentProfile.vue')
      },

      {
        path: '/new-staff/',
        name:'new-staff',
        component:() =>import('../views/users/NewStaff.vue')
      },
      {
        path: '/all-staff/',
        name:'all-staff',
        component:() =>import('../views/users/AllStaff.vue')
      },
      {
        path: '/staff-profile/:id',
        name:'staff-profile',
        component:() =>import('../views/users/StaffProfile.vue')
      },
      {
        path: '/add/subject-teacher/:id',
        name:'add-subject-teacher',
        component:() =>import('../views/teacher/AddSubjectTeacher.vue')
      },
      {
        path: '/all/subject-teacher/',
        name:'all-subject-teacher',
        component:() =>import('../views/teacher/AllSubjectTeachers.vue')
      },
      {
        path: '/subject-teacher/:id',
        name:'edit-subject-teacher',
        component:() =>import('../views/teacher/EditSubjTeacher.vue')
      },
      {
        path: '/add/class-teacher/:id',
        name:'add-class-teacher',
        component:() =>import('../views/teacher/AddClassTeacher.vue')
      },
      {
        path: '/all/class-teacher/',
        name:'all-class-teacher',
        component:() =>import('../views/teacher/AllClassTeachers.vue')
      },
      {
        path: '/class-teacher/:id',
        name:'edit-class-teacher',
        component:() =>import('../views/teacher/EditClassTeacher.vue')
      },
      {
        path: '/new-enrollment/',
        name:'new-enrollment',
        component:() =>import('../views/enrollment/AddEnrollment.vue')
      },
      {
        path: '/mass-enrollment/',
        name:'mass-enrollment',
        component:() =>import('../views/enrollment/MassEnrollment.vue')
      },
      {
        path: '/new-admission-enrollment/',
        name:'new-admission-enrollment',
        component:() =>import('../views/enrollment/NewAdmissionMassEnrollment.vue')
      },
   
      {
        path: '/find-enrollment/',
        name:'find-enrollment',
        component:() =>import('../views/enrollment/FindEnrollment.vue')
      },
      {
        path: '/roll-call/',
        name:'roll-call',
        component:() =>import('../views/enrollment/RollCall.vue')
      },
  
      {
        path: '/new-score/:id',
        name:'new-score',
        component:() =>import('../views/grading/AddScores.vue')
      },
      {
        path: '/filter-score/',
        name:'filter-score',
        component:() =>import('../views/grading/FilterScores.vue')
      },
      {
        path: '/scores-list/',
        name:'scores-list',
        component:() =>import('../views/grading/ScoresList.vue')
      },

      {
        path: '/create-result/',
        name:'create-result',
        component:() =>import('../views/grading/CreateResult.vue')
      },

      {
        path: '/filter-result/',
        name:'filter-result',
        component:() =>import('../views/grading/FilterResult.vue')
      },
      {
        path: '/result-list/',
        name:'result-list',
        component:() =>import('../views/grading/ResultList.vue')
      },

      {
        path: '/add-psycho/',
        name:'add-psycho',
        component:() =>import('../views/skills/AddPsycho.vue')
      },
      {
        path: '/all-psycho/',
        name:'all-psycho',
        component:() =>import('../views/skills/PsychoList.vue')
      },
      {
        path: '/edit-psycho/:id',
        name:'edit-psycho',
        component:() =>import('../views/skills/EditPsycho.vue')
      },
      
      {
        path: '/add-affective/',
        name:'add-affective',
        component:() =>import('../views/skills/AddAffective.vue')
      },
      {
        path: '/all-affective/',
        name:'all-affective',
        component:() =>import('../views/skills/ListAffective.vue')
      },
      {
        path: '/edit-affective/:id',
        name:'edit-affective',
        component:() =>import('../views/skills/EditAffective.vue')
      },

      {
        path: '/affective-traits/',
        name:'affective-traits',
        component:() =>import('../views/traiting/AddAffectivetraits.vue')
      },
      {
        path: '/psycho-traits/',
        name:'psycho-traits',
        component:() =>import('../views/traiting/AddPsychotraits.vue')
      },

      {
        path: '/add-comments/',
        name:'add-comments',
        component:() =>import('../views/comments/AddComments.vue')
      },
      {
        path: '/export-ca-sheet/',
        name:'export-ca-sheet',
        component:() =>import('../views/grading/FilterCaScores.vue')
      },

      {
        path: '/export-attendance-sheet/',
        name:'export-attendance-sheet',
        component:() =>import('../views/grading/MassAttendance.vue')
      },
      {
      path: '/import-attendance/',
      name:'import-attendance',
      component:() =>import('../views/grading/UploadAttendance.vue')
    },

      {
        path: '/import-ca-sheet/',
        name:'import-ca-sheet',
        component:() =>import('../views/grading/ImportAssSheet.vue')
      },

      // student pages
      {
        path: '/my-result/',
        name:'my-result',
        component:() =>import('../views/Student/MyResultList.vue')
      },

      {
        path: '/my-detail-result/:id',
        name:'my-detail-result',
        component:() =>import('../views/Student/DetailResult.vue')
      },

      // not in use for now check to refactor it
      // {
      //   path: '/ca-sheet/:classid/:subjectid/',
      //   name:'ca-sheet',
      //   component:() =>import('../views/grading/ExportSheet.vue')
      // },

    ]
  },


  // {
  //   path: '/',
  //   name: 'home',
  //   component: () => import('../views/HomeView.vue')
  // },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
