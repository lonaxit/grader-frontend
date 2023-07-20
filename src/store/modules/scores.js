import axios from 'axios'

export const scores = {
    state: {
        score:'',
        scores: []
    },

    mutations: {

        SET_SCORE(state, payload) {
            state.score = payload
        },
        SET_SCORES(state, payload) {
            state.scores = payload
        },
    },

    actions: {
        async ADD_SCORES({commit},payload) {
            const res = await axios.post('api/v1/new-score/' + payload.id +'/',payload)   
        },
        async GET_CASHEET({commit},payload) {
            const res = await axios.get('api/v1/export-sheet/', {
                params: payload,
            },{resonseType:'blob'})   
        },

        async FILTER_SCORES({commit},payload) {
            const res = await axios.get('api/v1/filter-scores/', {
                params: payload,  // Send payload as query parameters
              })
            commit('SET_SCORES',res.data)
        },
        async DELETE_SCORES({commit},id) {
            const res = await axios.delete('api/v1/scores-detail/' + id +'/')
            //   commit('SET_ENROLLMENT', res.data) 
        },
        async SCORE_DETAIL({commit},id) {
            const res = await axios.get('api/v1/scores-detail/' + id +'/')
              commit('SET_SCORE', res.data) 
        },
    
       

       
    },
    getters: {
        GET_SCORE(state) {
            return state.score
           },
        GET_SCORES(state) {
         return state.scores
       
        },
    
    }
}