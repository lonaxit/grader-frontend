import axios from 'axios'

export const session = {
    state: {
        session: '',
        allSession: [],
    },

    mutations: {

        SET_SESSION(state, payload) {
            state.session = payload
        },

        SET_SESSIONS(state, payload) {
            state.allSession = payload
        },
    },

    actions: {
        async ADD_SESSION({commit},payload) {
            const res = await axios.post('api/v1/session/',payload)
            // commit('SET_TERMS', res.data)     
        },
        async ALL_SESSIONS({commit}) {
            const res = await axios.get('api/v1/session/')
            commit('SET_SESSIONS', res.data)     
        },
        async SESSION_DETAIL({commit},id) {
            const res = await axios.get('api/v1/session-detail/' + id +'/')
              commit('SET_SESSION', res.data) 
        },
        async UPDATE_SESSION({commit},payload) {
            const res = await axios.put('api/v1/session-detail/' + payload.id +'/',payload)
            //   commit('SET_TERM', res.data) 
        }
       
        
    },
    getters: {
        GET_SESSIONS(state) {
            return state.allSession
        },
        GET_SESSION(state) {
            return state.session
        }
    }
}