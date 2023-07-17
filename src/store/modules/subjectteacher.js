import axios from 'axios'

export const subjectteacher = {
    state: {
        subjectteacher:'',
        allsubjectsteachers: []
    },

    mutations: {

        SET_SUBJECT_TEACHER(state, payload) {
            state.subjectteacher = payload
        },
        SET_SUBJECT_TEACHERS(state, payload) {
            state.allsubjectsteachers = payload
        },
      

    },

    actions: {
        async ADD_SUBJECT_TEACHER({commit},payload) {
            const res = await axios.post('api/v1/create-subject-teacher/' + payload.id +'/',payload)   
        },

        async FETCH_SUBJ_TEACHERS({commit}) {
            const res = await axios.get('api/v1/list-subjectteacher/')
            commit('SET_SUBJECT_TEACHERS',res.data)
        },
       
        async SUBJ_TEACHER_DETAIL({commit},id) {
            const res = await axios.get('api/v1/subjectteacher-detail/' + id +'/')
              commit('SET_SUBJECT_TEACHER', res.data) 
        },
    
        async UPDATE_SUBJECT_TEACHER({commit},payload) {
            const res = await axios.put('api/v1/subjectteacher-detail/'+ payload.id + '/', payload)
        }

       
    },
    getters: {
        GET_SUBJ_TEACHER(state) {
            return state.subjectteacher
          
           },
        GET_SUBJ_TEACHERS(state) {
         return state.allsubjectsteachers
       
        },
    
    }
}