import axios from 'axios'

export const profile = {
    state: {
        studentprofile: '',
        studentprofiles: [],
        staffprofile:'',
        staffprofiles:[],
        noAdmissionNumber: [],
        adm_no:''
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
        SET_ADMISSION_NUMBER(state, payload) {
            state.adm_no = payload
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

        async FETCH_ADMISSION_NUMBER({commit}) {
            const res = await axios.get('api/v1/get-adm-number/')
            commit('SET_ADMISSION_NUMBER',res.data)
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
          
        },
        GET_ADM_NO(state) {
            return state.adm_no
        }
    }
}