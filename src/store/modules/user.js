import axios from "axios";

export const user = {
  state: {
    user: "",
    staff: "",
    studentusers: [],
    allStaff: [],
    me: "",
    userdata: "",
    searchedStudent: [],
    unlinkedstudents: [],
  },

  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
    },
    SET_STUDENT_USERS(state, payload) {
      state.studentusers = payload;
    },
    SET_STAFF(state, payload) {
      state.staff = payload;
    },
    SET_ALL_STAFF(state, payload) {
      state.allStaff = payload;
    },
    SET_ME(state, payload) {
      state.me = payload;
    },
    SET_SAERCHEDSTUDENT(state, payload) {
      state.searchedStudent = payload;
    },
    SET_UNLINKED_STUDENTS(state, payload) {
      state.unlinkedstudents = payload;
    },
  },

  actions: {
    async ADD_USER({ commit }, payload) {
      const res = await axios.post("auth/v1/register/", payload);
    },

    async FETCH_USERS({ commit }) {
      const res = await axios.get("auth/v1/all/users/");
      commit("SET_STUDENT_USERS", res.data.user);
    },

    async FETCH_ME({ commit }) {
      const res = await axios.get("auth/v1/me/");
      commit("SET_ME", res.data.user);
    },

    async USER_DETAIL({ commit }, id) {
      const res = await axios.get("auth/v1/user-detail/" + id + "/");
      commit("SET_USER", res.data);
    },

    async FETCH_ALL_STAFF({ commit }) {
      const res = await axios.get("auth/v1/all/staff/");
      commit("SET_ALL_STAFF", res.data.user);
    },

    async STAFF_DETAIL({ commit }, id) {
      const res = await axios.get("auth/v1/teacherprofile-detail/" + id + "/");
      commit("SET_STAFF", res.data);
    },
    async UPDATE_USER({ commit }, payload) {
      const res = await axios.put(
        "auth/v1/user-detail/" + payload.id + "/",
        payload
      );
    },
    async UPDATE_PASSWORD({ commit }, payload) {
      const res = await axios.put("auth/v1/username-update-password/", payload);
    },

    // search student
    async FIND_STUDENT({ commit }, payload) {
      const res = await axios.get("api/v1/search-enroll/", {
        params: payload,
      });
      commit("SET_SAERCHEDSTUDENT", res.data);
    },

    // new action: fetch unlinked students
    async FETCH_UNLINKED_STUDENTS({ commit }) {
      const res = await axios.get("auth/v1/unlinked-students/");
      // backend may return { user: [...] } or the array directly
      const payload = res.data.user ?? res.data;
      commit("SET_UNLINKED_STUDENTS", payload);
    },
  },
  getters: {
    GET_USER(state) {
      return state.user;
    },
    GET_ME(state) {
      return state.me;
    },

    GET_USERS(state) {
      return state.studentusers
        .filter((user) => user.is_student === true)
        .sort((a, b) => a.sur_name.localeCompare(b.sur_name));
    },

    GET_NOPROFILE_STUDENTS(state) {
      // return (state.studentusers?.filter(user => user.is_student === true && user.studentprofile === null)) || [];
      return state.studentusers.filter(
        (user) => user.is_student == true && user.studentprofile === null
      );
    },

    GET_STAFF_USERS(state) {
      return state.allStaff.filter((user) => user.is_staff == true);
    },
    GET_STAFF(state) {
      return state.staff;
    },
    GET_STUDENTS(state) {
      return state.searchedStudent;
    },

    // new getter: unlinked students
    GET_UNLINKED_STUDENTS(state) {
      return state.unlinkedstudents;
    },
  },
};
