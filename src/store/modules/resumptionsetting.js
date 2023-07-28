import axios from 'axios'

export const resumptionsetting = {
    state: {
        resumption: '',
        allResumption: [],
        resumptiondate:''
    },

    mutations: {

        SET_RESUMPTION(state, payload) {
            state.resumption = payload
        },

        SET_ALL_RESUMPTION(state, payload) {
            state.allResumption = payload
        },
        // SET_RESUMPTION_DATE(state, payload) {
        //     state.resumptiondate = payload
        // },
    },

    actions: {
        async ADD_RESUMPTION({commit},payload) {
            const res = await axios.post('api/v1/resumption-setting/',payload)   
        },
        async ALL_RESUMPTION({commit}) {
            const res = await axios.get('api/v1/resumption-setting/')
            commit('SET_ALL_RESUMPTION', res.data)     
        },
        async RESUMPTION_DETAIL({commit},id) {
            const res = await axios.get('api/v1/resumptionsetting-detail/' + id +'/')
              commit('SET_RESUMPTION', res.data) 
        },
        async UPDATE_RESUMPTION({commit},payload) {
            const res = await axios.put('api/v1/resumptionsetting-detail/' + payload.id +'/',payload)
        },
        // not working refacotr use payload as a query params
        // async RESUMPTION_DATE({commit},payload) {
        //     const res = await axios.get('api/v1/get-resumption-date/' + payload.term +'/'+ payload.session +'/')
        //       commit('SET_RESUMPTION_DATE', res.data) 
        // },
       
    },
    getters: {
        GET_RESUMPTIONS(state) {
            return state.allResumption
        },
        GET_RESUMPTION(state) {
            return state.resumption
        },
        // GET_RESUMPTION_DATE(state) {
        //     return state.resumptiondate
        // }
    }
}