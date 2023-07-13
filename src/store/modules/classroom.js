import axios from 'axios'

export const classroom = {
    state: {
        classroom: '',
        allClassroom: [],
    },

    mutations: {

        SET_CLASS(state, payload) {
            state.classroom = payload
        },

        SET_CLASSES(state, payload) {
            state.allClassroom = payload
        },
    },

    actions: {
        async ADD_CLASS({commit},payload) {
            const res = await axios.post('api/v1/school_class/',payload)
            // commit('SET_TERMS', res.data)     
        },
        async ALL_CLASSES({commit}) {
            const res = await axios.get('api/v1/school_class/')
            commit('SET_CLASSES', res.data)     
        },
        async CLASS_DETAIL({commit},id) {
            const res = await axios.get('api/v1/schoolclass-detail/' + id +'/')
              commit('SET_CLASS', res.data) 
        },
        async UPDATE_CLASS({commit},payload) {
            const res = await axios.put('api/v1/schoolclass-detail/' + payload.id +'/',payload)
            //   commit('SET_TERM', res.data) 
        }
       
        
    },
    getters: {
        GET_CLASSES(state) {
            return state.allClassroom
        },
        GET_CLASS(state) {
            return state.classroom
        }
    }
}