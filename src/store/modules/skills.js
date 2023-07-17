import axios from 'axios'

export const skills = {
    state: {
        psycho:'',
        allPyscho: [],
        affective:'',
        allAffective: []
    },

    mutations: {

        SET_PSYCHO(state, payload) {
            state.psycho = payload
        },
        SET_ALL_PSYCHOS(state, payload) {
            state.allPyscho = payload
        },
        SET_AFFECTIVE(state, payload) {
            state.affective = payload
        },
        SET_ALL_AFFECTIVE(state, payload) {
            state.allAffective = payload
        },
    },

    actions: {
        async ADD_PSYCHO({commit},payload) {
            const res = await axios.post('api/v1/create-pyschomotor/' ,payload)   
        },

        async FETCH_PSYCHO({commit},payload) {
            const res = await axios.get('api/v1/create-pyschomotor/' )
            commit('SET_ALL_PSYCHOS', res.data)
            
        },
        async PSYCHO_DETAIL({commit},id) {
            const res = await axios.get('api/v1/pyschomotor-detail/' + id +'/')
              commit('SET_PSYCHO', res.data) 
        },
        async PSYCHO_UPDATE({commit},payload) {
            const res = await axios.put('api/v1/pyschomotor-detail/' + payload.id +'/',payload)
            //   commit('SET_PSYCHO', res.data) 
        },
        async DELETE_PSYCHO({commit},id) {
            const res = await axios.delete('api/v1/pyschomotor-detail/' + id +'/')
            //   commit('SET_ENROLLMENT', res.data) 
        },

        // affective
        async ADD_AFFECTIVE({commit},payload) {
            const res = await axios.post('api/v1/create-affective/' ,payload)   
        },

        async FETCH_AFFECTIVE({commit},payload) {
            const res = await axios.get('api/v1/create-affective/')
            commit('SET_ALL_AFFECTIVE', res.data)
            
        },
        async AFFECTIVE_DETAIL({commit},id) {
            const res = await axios.get('api/v1/affective-detail/' + id +'/')
              commit('SET_AFFECTIVE', res.data) 
        },
        async AFFECTIVE_UPDATE({commit},payload) {
            const res = await axios.put('api/v1/affective-detail/' + payload.id +'/',payload)
            //   commit('SET_PSYCHO', res.data) 
        },
        async DELETE_AFFECTIVE({commit},id) {
            const res = await axios.delete('api/v1/affective-detail/' + id +'/')
            //   commit('SET_ENROLLMENT', res.data) 
        },
      
       
    },
    getters: {
        GET_PYSCHO(state) {
            return state.psycho
           },
        GET_PSYCHOS(state) {
         return state.allPyscho
        },
        GET_AFFECTIVE(state) {
            return state.affective
           },
        GET_ALL_AFFECTIVE(state) {
         return state.allAffective
        },
    
    }
}