import axios from 'axios'

export const traits = {
    state: {
        trait:'',
        traits: [],
        psycho:'',
        psychos: [],
    },

    mutations: {

        SET_TRAIT(state, payload) {
            state.trait = payload
        },
        SET_ALL_TRAITS(state, payload) {
            state.traits = payload
        },
        SET_PSYCHOTRAITS(state, payload) {
            state.psycho = payload
        },
        SET_ALL_PSYCHOTRAITS(state, payload) {
            state.psychos = payload
        },

    },

    actions: {
        async ADD_TRAITS({commit},payload) {
            const res = await axios.post('api/v1/createaffective-traits/' ,payload)   
        },

        async FETCH_TRAITS({commit},payload) {
            const res = await axios.get('api/v1/student/affectivetraits/' + payload.userid + '/'+payload.session+'/'+payload.classroom+'/'+payload.term+'/' )
            commit('SET_ALL_TRAITS', res.data)
            
        },


        // psycho traits
        async ADD_PSYCHOTRAITS({commit},payload) {
            const res = await axios.post('api/v1/createpsycho-traits/' ,payload)   
        },

        async FETCH_PSYCHOTRAITS({commit},payload) {
            const res = await axios.get('api/v1/student/affectivetraits/' + payload.userid + '/'+payload.session+'/'+payload.classroom+'/'+payload.term+'/' )
            commit('SET_ALL_PSYCHOTRAITS', res.data)
            
        },

        
    },
    getters: {
        GET_TRAITS(state) {
            return state.traits
        },
        GET_PSYCHOTRAITS(state) {
            return state.psychos
           },
    }
}