import axios from 'axios'

export const result = {
    state: {
        result:'',
        results: []
    },

    mutations: {

        SET_RESULT(state, payload) {
            state.result = payload
        },
        SET_RESULTS(state, payload) {
            state.results = payload
        },
    },

    actions: {
        async CREATE_RESULT({commit},payload) {
            const res = await axios.post('api/v1/create-result/' ,payload)   
        },

        async FILTER_RESULT({commit},payload) {
            const res = await axios.get('api/v1/get-result/', {
                params: payload,  // Send payload as query parameters
              })
            commit('SET_RESULTS', res.data)
            
        },
        async DELETE_RESULT({commit},id) {
            const res = await axios.delete('api/v1/detail-result/' + id +'/')
            //   commit('SET_ENROLLMENT', res.data) 
        },
        async SCORE_DETAIL({commit},id) {
            const res = await axios.get('api/v1/scores-detail/' + id +'/')
              commit('SET_SCORE', res.data) 
        },
       
    },
    getters: {
        GET_RESULT(state) {
            return state.result
           },
        GET_RESULTS(state) {
         return state.results
        },
    
    }
}