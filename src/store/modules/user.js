import axios from 'axios'

export const user = {
    state: {
        user: '',
        staff:'',
        studentusers: [],
        allStaff:[]
    },

    mutations: {

        SET_USER(state, payload) {
            state.user = payload
        },
        SET_STUDENT_USERS(state, payload) {
            state.studentusers = payload
        },
        SET_STAFF(state, payload) {
            state.staff = payload
        },
        SET_ALL_STAFF(state, payload) {
            state.allStaff = payload
        },

    },

    actions: {
        async ADD_USER({commit},payload) {
            const res = await axios.post('auth/v1/register/',payload)   
        },

        async FETCH_USERS({commit}) {
            const res = await axios.get('auth/v1/all/users/')
            commit('SET_STUDENT_USERS',res.data.user)
        },
       
        async USER_DETAIL({commit},id) {
            const res = await axios.get('auth/v1/user-detail/' + id +'/')
              commit('SET_USER', res.data) 
        },

        async FETCH_ALL_STAFF({commit}) {
            const res = await axios.get('auth/v1/all/staff/')
            commit('SET_ALL_STAFF',res.data.user)
        },

        async STAFF_DETAIL({commit},id) {
            const res = await axios.get('auth/v1/teacherprofile-detail/' + id +'/')
              commit('SET_STAFF', res.data) 
        },
        async UPDATE_USER({commit},payload) {
            const res = await axios.put('auth/v1/user-detail/' + payload.id +'/',payload)
        },
        async UPDATE_PASSWORD({commit},payload) {
            const res = await axios.put('auth/v1/username-update-password/',payload)
        }

       
    },
    getters: {
        GET_USER(state) {
            return state.user
        },
        GET_USERS(state) {
         return state.studentusers.filter(user => user.is_student==true)
       
        },
        GET_STAFF_USERS(state) {
            return state.allStaff.filter(user => user.is_staff==true)
          
        },
        GET_STAFF(state) {
            return state.staff
          
           }
    }
}