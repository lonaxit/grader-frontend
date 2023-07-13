import axios from 'axios'

export const term = {
    state: {
        term: '',
        allTerms: [],
    },

    mutations: {

        SET_TERM(state, payload) {
            state.term = payload
        },

        SET_TERMS(state, payload) {
            state.allTerms = payload
        },
    },

    actions: {
        async ADD_TERMS({commit},payload) {
            const res = await axios.post('api/v1/term/',payload)
            // commit('SET_TERMS', res.data)     
        },
        async ALL_TERMS({commit}) {
            const res = await axios.get('api/v1/term/')
            commit('SET_TERMS', res.data)     
        },
        async TERM_DETAIL({commit},id) {
            const res = await axios.get('api/v1/term-detail/' + id +'/')
              commit('SET_TERM', res.data) 
        },
        async UPDATE_TERM({commit},payload) {
            const res = await axios.put('api/v1/term-detail/' + payload.id +'/',payload)
            //   commit('SET_TERM', res.data) 
        }
       
        
    },
    getters: {
        GET_TERMS(state) {
            return state.allTerms
        },
        GET_TERM(state) {
            return state.term
        }
    }
}