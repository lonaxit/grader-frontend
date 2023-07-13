import axios from 'axios'

export const user = {
    state: {
        user: '',
        studentUsers:[]
    },

    mutations: {

        SET_USER(state, payload) {
            state.user = payload
        },
        SET_STUDENTUSERS(state, payload) {
            state.studentUsers = payload
        },

    },

    actions: {
        async ADD_USER({commit},payload) {
            const res = await axios.post('auth/v1/register/',payload)   
        },

        async FETCH_USERS({commit}) {
            const res = await axios.get('auth/v1/all/users/')
            commit('SET_STUDENTUSERS',res.data.user)
        },
       
        async USER_DETAIL({commit},id) {
            const res = await axios.get('auth/v1/user-detail/' + id +'/')
              commit('SET_USER', res.data) 
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
         return state.studentUsers.filter(user => user.is_student==true)
       
        }
    }
}