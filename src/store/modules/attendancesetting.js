import axios from 'axios'

export const attendancesetting = {
    state: {
        attendance: '',
        allAttendance: [],
    },

    mutations: {

        SET_ATT(state, payload) {
            state.attendance = payload
        },

        SET_ALL_ATT(state, payload) {
            state.allAttendance = payload
        },
    },

    actions: {
        async ADD_ATT({commit},payload) {
            const res = await axios.post('api/v1/attendance-setting/',payload)   
        },
        async ALL_ATT({commit}) {
            const res = await axios.get('api/v1/attendance-setting/')
            commit('SET_ALL_ATT', res.data)     
        },
        async ATT_DETAIL({commit},id) {
            const res = await axios.get('api/v1/attendancesetting-detail/' + id +'/')
              commit('SET_ATT', res.data) 
        },
        async UPDATE_ATT({commit},payload) {
            const res = await axios.put('api/v1/attendancesetting-detail/' + payload.id +'/',payload)
        },

    //    download template for terminal attendance
    async GET_GENERAL_ATTENDANCE_SHEET({commit},payload) {
        const res = await axios.get('api/v1/export-attendance-sheet/',
            {
            params: payload,  
            responseType: 'blob', // Ensure response is treated as a binary blob
            }) 
         
            const blob = new Blob([res.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }); // Assuming it's an Excel file (xlsx)
            const url = URL.createObjectURL(blob);
        
        // Initiate file download
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${payload.classname}/${payload.termname}/${payload.sessname}.xlsx`);
            document.body.appendChild(link);
            link.click();
        },
    
    async UPLOAD_ATTENDANCE({commit},payload) {
        const res = await axios.post('api/v1/upload-attendance/',payload)   
    },

    },
    getters: {
        GET_ATTS(state) {
            return state.allAttendance
        },
        GET_ATT(state) {
            return state.attendance
        }
    }
}