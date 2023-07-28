import axios from 'axios'

export const auth = {
    state: {
        token: '',
        is_Authenticated: false,
        is_Staff: false,
        username:''
    },

    mutations: {

        SET_TOKEN(state, token) {
            state.token = token
            state.is_Authenticated = true
        },
        REMOVE_TOKEN(state) {
            state.token = ''
            state.is_Authenticated = false
        },
        REMOVE_STATUS(state) {
            state.is_Staff = false
        },
      
        SET_STAFF(state, payload) {
                state.is_Staff = payload
        },
        
        SET_USERNAME(state, payload) {
            state.username = payload
          },

          INIT_STATUS(state) {

            if (localStorage.getItem('status')) {
              state.is_Staff = localStorage.getItem('status')
              }
        },
        
        INIT_STORE(state) {

            if (localStorage.getItem('token')) {
              state.token = localStorage.getItem('token')
              state.is_Authenticated = true 
            }else {
              state.token = ''
              state.is_Authenticated = false
            }
        },
        
        INIT_USERNAME(state) {
            if (localStorage.getItem('username'))
            {
            state.username = localStorage.getItem('username')
            }
        },
            REMOVE_USERNAME(state) {
            state.username = ''
        }, 
        
        REMOVE_USERNAME(state) {
            state.username = ''
            }, 
    },

    actions: {
        LOGOUT({commit}) {
            axios.defaults.headers.common['Authorization'] = ""
			localStorage.removeItem('token')
            localStorage.removeItem('username')
            localStorage.removeItem('status')
			commit('REMOVE_TOKEN')
            commit('REMOVE_USERNAME')
            commit('REMOVE_STATUS')
        },

        async FETCH_USERSTATUS({commit}) {
            const res = await axios.get('auth/v1/me/')
            localStorage.setItem('status',res.data.user.is_staff)
            commit('SET_STAFF', res.data.user.is_staff)
        },
     
       
        
    },
    getters: {
        GET_USERNAME(state) {
            return state.username
        },
        GET_TOKEN(state) {
            return state.token
        },
        GET_STAFF_STATUS(state) {
            return state.is_Staff
        }
    }
}