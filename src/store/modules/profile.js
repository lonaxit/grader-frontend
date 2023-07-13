import axios from 'axios'

export const profile = {
    state: {
        studentprofile: '',
        studentprofiles: [],
        staffprofile:'',
        staffprofiles:[]
    },

    mutations: {

        SET_STUDENT_PROFILE(state, payload) {
            state.studentprofile = payload
        },
        SET_STUDENT_PROFILES(state, payload) {
            state.studentprofiles = payload
        },

    },

    actions: {
        async ADD_STUDENT_PROFILE({commit},payload) {
            const res = await axios.post('api/v1/student-profile/'+ payload.id + '/',payload)   
        },

        // async FETCH_USERS({commit}) {
        //     const res = await axios.get('auth/v1/all/users/')
        //     commit('SET_STUDENTUSERS',res.data.user)
        // },
       
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
       
        }
    }
}