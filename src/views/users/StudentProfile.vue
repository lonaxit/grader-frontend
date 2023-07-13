<template>
  <div class="user-profile">
    <!-- <img src="" class="avatar" alt="User Avatar" /> -->
    <h2>{{user.sur_name}} {{user.first_name}} {{user.other_name}}</h2>
    <p><span>Username: </span>{{user.username}}</p>
    <p><span>Password: </span> ***************</p>
    <p><span>Gender: </span>{{user.gender}}</p>
    <p><span>Dob: </span>{{user.dob}}</p>
    <p><span>Phone: </span>{{user.phone}}</p>

    <div v-if="user.studentprofile">
    <p><span>Class Admitted: </span>{{user.studentprofile.class_name}}</p>
    <p><span>Session Admitted: </span>{{user.studentprofile.session_name}}</p>
    <p><span>Term Admitted: </span>{{user.studentprofile.term_name}}</p>
    <p><span>Admission Number: </span>{{user.studentprofile.admission_number}}</p>
    <p><span><router-link :to="{name:'edit-account',params:{id:user.id}}">Edit User Account </router-link></span> | <span><router-link :to="{name:'edit-student-profile', params:{id:user.studentprofile.id}}">Edit User Profile </router-link></span></p>
    </div>
    <div v-else>
        <h1>loading</h1>
        <p><span><router-link :to="{name:'new-student-profile',params:{id:user.id}}">Add Profile</router-link></span></p>
    </div>
  </div>
</template>

<script>
import {mapActions,mapGetters,mapMutations} from 'vuex'

export default {
  name: 'UserProfile',
 data(){
    return{

    }
 },

 computed:{
...mapGetters({user:'GET_USER'})
 },
 methods:{
...mapActions(['USER_DETAIL'])
 },
 mounted(){
    this.USER_DETAIL(this.$route.params.id)
 }
};
</script>

<style scoped>
.user-profile {
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}

h2 {
  font-size: 24px;
  margin-bottom: 5px;
}

p {
  margin-bottom: 10px;
}
</style>
