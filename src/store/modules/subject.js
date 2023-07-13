import axios from 'axios'

export const subject = {
    state: {
        subject: '',
        allSubjects: [],
        subjectperclass: [],
        subjectperclass_detail:''
    },

    mutations: {

        SET_SUBJECT(state, payload) {
            state.subject = payload
        },

        SET_SUBJECTS(state, payload) {
            state.allSubjects = payload
        },
        SET_SUBJECTSPERCLASS(state, payload) {
            state.subjectperclass = payload
        },
        SET_DETAIL_SUBJECTSUBJECTPERCLASS(state, payload) {
            state.subjectperclass_detail = payload
        },
    },

    actions: {
        async ADD_SUBJECT({commit},payload) {
            const res = await axios.post('api/v1/subject/',payload)
            // commit('SET_TERMS', res.data)     
        },
        async ADD_SUBJECTPERCLASS({commit},payload) {
            const res = await axios.post('api/v1/subject-perclass/',payload)
            // commit('SET_TERMS', res.data)     
        },
        async ALL_SUBJECTS({commit}) {
            const res = await axios.get('api/v1/subject/')
            commit('SET_SUBJECTS', res.data)     
        },
        async LIST_SUBJECTSPERCLASS({commit}) {
            const res = await axios.get('api/v1/subject-perclass/')
            commit('SET_SUBJECTSPERCLASS', res.data)     
        },
        async SUBJECT_DETAIL({commit},id) {
            const res = await axios.get('api/v1/subject-detail/' + id +'/')
              commit('SET_SUBJECT', res.data) 
        },
        async SUBJECTPERCLASS_DETAIL({commit},id) {
            const res = await axios.get('api/v1/subjectperclass-detail/' + id +'/')
              commit('SET_DETAIL_SUBJECTSUBJECTPERCLASS', res.data) 
        },
        async UPDATE_SUBJECT({commit},payload) {
            const res = await axios.put('api/v1/subject-detail/' + payload.id +'/',payload)
            //   commit('SET_TERM', res.data) 
        },
        async UPDATE_SUBJECTPERCLASS({commit},payload) {
            const res = await axios.put('api/v1/subjectperclass-detail/' + payload.id +'/',payload)
            //   commit('SET_TERM', res.data) 
        }
       
        
    },
    getters: {
        GET_SUBJECTS(state) {
            return state.allSubjects
        },
        GET_SUBJECT(state) {
            return state.subject
        },
        GET_SUBJECTPERCLASS(state) {
            return state.subjectperclass
        },
        GET_DETAILSUBPERCLASS(state) {
            return state.subjectperclass_detail
        }
    }
}