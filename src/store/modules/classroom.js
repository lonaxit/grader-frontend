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

        DELETE_CLASS(state, id) {
            state.allClassroom = state.allClassroom.filter((record) => record.id !== id);
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
        },

        async DELETE_CLASS({commit},id) {
            const res = await axios.delete('api/v1/schoolclass-detail/' + id +'/')
            commit('DELETE_CLASS', id) 
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