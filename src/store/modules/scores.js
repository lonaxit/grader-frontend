import axios from 'axios'

export const scores = {
    state: {
        score:'',
        scores: []
    },

    mutations: {

        SET_SCORE(state, payload) {
            state.score = payload
        },
        SET_SCORES(state, payload) {
            state.scores = payload
        },
    },

    actions: {

        async ADD_SCORES({commit},payload) {
            const res = await axios.post('api/v1/new-score/' + payload.id +'/',payload)   
        },


        async GET_CASHEET({commit},payload) {
            const res = await axios.get('api/v1/export-sheet/',
                {
                params: payload,  
                responseType: 'blob', // Ensure response is treated as a binary blob
                }) 
             
                const blob = new Blob([res.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }); // Assuming it's an Excel file (xlsx)
                const url = URL.createObjectURL(blob);
            
            // Initiate file download
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `${payload.classname}/${payload.subjname}.xlsx`);
                document.body.appendChild(link);
                link.click();
            
        },

        async UPLOAD_EXCEL_SCORES({commit},payload) {
            const res = await axios.post('api/v1/import-sheet/',payload)   
        },
        

        async FILTER_SCORES({commit},payload) {
            const res = await axios.get('api/v1/filter-scores/', {
                params: payload,  // Send payload as query parameters
              })
            commit('SET_SCORES',res.data)
        },
        async DELETE_SCORES({commit},id) {
            const res = await axios.delete('api/v1/scores-detail/' + id +'/')
            //   commit('SET_ENROLLMENT', res.data) 
        },
        async SCORE_DETAIL({commit},id) {
            const res = await axios.get('api/v1/scores-detail/' + id +'/')
              commit('SET_SCORE', res.data) 
        },
    
       

       
    },
    getters: {
        GET_SCORE(state) {
            return state.score
           },
        GET_SCORES(state) {
         return state.scores
       
        },
    
    }
}