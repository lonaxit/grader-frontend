import axios from 'axios'

export const enrollment = {
    state: {
        enrollment:'',
        allEnrollment: []
    },

    mutations: {

        SET_ENROLLMENT(state, payload) {
            state.enrollment = payload
        },
        SET_ENROLLMENTS(state, payload) {
            state.allEnrollment = payload
        },
    },

    actions: {
        async ADD_ENROLLMENT({commit},payload) {
            const res = await axios.post('api/v1/new-enrollment/',payload)   
        },

        async FETCH_ENROLLMENT({commit},payload) {
            const res = await axios.get('api/v1/roll-call/', {
                params: payload,  // Send payload as query parameters
              })
            commit('SET_ENROLLMENTS',res.data)
        },
       
        async ENROLLMENT_DETAIL({commit},id) {
            const res = await axios.get('api/v1/rollcall-detail/' + id +'/')
              commit('SET_ENROLLMENT', res.data) 
        },
        async DELETE_ENROLLMENT({commit},id) {
            const res = await axios.delete('api/v1/rollcall-detail/' + id +'/')
            //   commit('SET_ENROLLMENT', res.data) 
        },
    
        async UPDATE_CLASS_TEACHER({commit},payload) {
            const res = await axios.put('api/v1/classteacher-detail/'+ payload.id + '/', payload)
        } 
    },
    getters: {
        GET_ENROLLMENT(state) {
            return state.enrollment
           },
        GET_ENROLLMENTS(state) {
         return state.allEnrollment
       
        },
    
    }
}