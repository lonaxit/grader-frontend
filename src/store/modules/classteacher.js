import axios from 'axios'

export const classteacher = {
    state: {
        classteacher:'',
        allclassteachers: []
    },

    mutations: {

        SET_CLASS_TEACHER(state, payload) {
            state.classteacher = payload
        },
        SET_CLASS_TEACHERS(state, payload) {
            state.allclassteachers = payload
        },
      

    },

    actions: {
        async ADD_CLASS_TEACHER({commit},payload) {
            const res = await axios.post('api/v1/new-class-teacher/' + payload.id +'/',payload)   
        },

        async FETCH_CLASS_TEACHERS({commit}) {
            const res = await axios.get('api/v1/list-classteacher/')
            commit('SET_CLASS_TEACHERS',res.data)
        },
       
        async CLASS_TEACHER_DETAIL({commit},id) {
            const res = await axios.get('api/v1/classteacher-detail/' + id +'/')
              commit('SET_CLASS_TEACHER', res.data) 
        },
    
        async UPDATE_CLASS_TEACHER({commit},payload) {
            const res = await axios.put('api/v1/classteacher-detail/'+ payload.id + '/', payload)
        }

       
    },
    getters: {
        GET_CLASS_TEACHER(state) {
            return state.classteacher
          
           },
        GET_CLASS_TEACHERS(state) {
         return state.allclassteachers
       
        },
    
    }
}