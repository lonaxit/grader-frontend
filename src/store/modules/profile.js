import axios from 'axios'

export const profile = {
    state: {
        studentprofile: '',
        studentprofiles: [],
        staffprofile:'',
        staffprofiles:[],
        noAdmissionNumber:[]
    },

    mutations: {

        SET_STUDENT_PROFILE(state, payload) {
            state.studentprofile = payload
        },
        SET_STUDENT_PROFILES(state, payload) {
            state.studentprofiles = payload
        },

        SET_STUDENT_NOADMISSION_NUMBER(state, payload) {
            state.noAdmissionNumber = payload
        },

    },

    actions: {
        async ADD_STUDENT_PROFILE({commit},payload) {
            const res = await axios.post('api/v1/student-profile/'+ payload.id + '/',payload)   
        },

        async FETCH_NOADMISSION_NUMBER({commit}) {
            const res = await axios.get('api/v1/student-profile-nonumber/')
            commit('SET_STUDENT_NOADMISSION_NUMBER',res.data)
        },

         async ASSIGN_NUMBER({commit},id) {
            const res = await axios.put('api/v1/assign_number/' + id +'/') 
        },
       
        async STUDENT_PROFILE_DETAIL({commit},id) {
            const res = await axios.get('api/v1/studentprofile-detail/' + id +'/')
            commit('SET_STUDENT_PROFILE', res.data) 
        },
        async UPDATE_STUDENT_PROFILE({commit},payload) {
            const res = await axios.put('api/v1/studentprofile-detail/' + payload.id +'/',payload)
        }
       
    },
    getters: {
        GET_STUDENT_PROFILE(state) {
            return state.studentprofile
        },
        GET_STUDENT_PROFILES(state) {
         return state.studentprofiles
       
        },

        GET_NO_ADMISSION_NUM(state) {
            return state.noAdmissionNumber
          
           }
    }
}