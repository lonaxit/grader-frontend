import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthLayout from '../layouts/AuthLayout.vue'

const routes = [
  {
    path: '/Auth',
    name: 'Auth',
    component: () => import('../layouts/AuthLayout.vue'),
    

    children: [
      {
        path: '/Signin',
        name:'Signin',
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
