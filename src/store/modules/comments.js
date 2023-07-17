import axios from 'axios'

export const comments = {
    state: {
    },

    mutations: {

    },

    actions: {
        async ADD_COMMENTS({commit},payload) {
            const res = await axios.post('api/v1/auto-comments/' ,payload)   
        },
        
    },
    getters: {
     
    }
}