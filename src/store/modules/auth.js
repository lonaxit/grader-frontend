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
      
        SET_STAFF(state, payload) {
                state.is_Staff = payload
        },
        
        SET_USERNAME(state, payload) {
            state.username = payload
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
            console.log('lu')
            if (localStorage.getItem('username'))
            {
            state.username = localStorage.getItem('username')
            }
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
			commit('REMOVE_TOKEN')
			commit('REMOVE_USERNAME')
        },
        // async userLoans(context,userid) {
        //     const res = await axios.get('api/v1/' + userid + '/loans/')
        //     context.commit('USER_LOANS', res.data)     
        // },
       
        
    },
    getters: {
        GET_USERNAME(state) {
            return state.username
        },
        GET_AUTHENTICATED(state) {
            return state.is_Authenticated
        }
    }
}