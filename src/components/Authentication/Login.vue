<template>
     <!-- Sign In Start -->
        <div class="container-fluid">
            <div class="row h-100 align-items-center justify-content-center" style="min-height: 100vh;">
                <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <div class="bg-light rounded p-4 p-sm-5 my-4 mx-3">
                        <div class="mb-3">
                            <div>
                            <a href="index.html" class="">
                                <h3>SKY GIFTED ACADEMY</h3>
                            </a>
                            </div>
                            <h3>Sign In</h3>
                        </div>
                        <form @submit.prevent="handleLogin">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="Username" v-model="username">
                            <label for="floatingInput">Username</label>
                        </div>
                        <div class="form-floating mb-4">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="password">
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-4">
                            
                            <a href="">Forgot Password</a>
                        </div>
                        <button type="submit"  :disabled="submitting" class="btn btn-primary py-3 w-100 mb-4">
                            {{ submitting ? 'Submitting...' : 'Submit' }}
                        </button>

                        </form>
                      
                      
                    </div>
                </div>
            </div>
        </div>
        <!-- Sign In End -->
</template>
<script>
import axios from 'axios'
import { mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    name:'Login',
    data() {
        return {
            username: '',
            password: '',
            errors: [],
            submitting: false
        }
    },
    computed:{
        //  ...mapGetters(['user_Detail','getUsername'])
    },

    methods: {
        ...mapMutations(['SET_USERNAME','SET_TOKEN']),
        handleLogin(){
        this.submitting = true;
        //   reset token
            axios.defaults.headers.common['Authorization'] = ""

            // remove old token from localStorage
            localStorage.removeItem('token')

            // // reset the errors array to empty
            this.errors=[]
            
            if(this.username === ''){
               this.submitting = false;
                this.errors.push('The username field is empty')
        
            }
            if(this.password === ''){
                this.submitting = false;
                this.errors.push('The password field is empty')
      
            }
            

            // send data when no error exists
            if(!this.errors.length){

                const FormData ={
                    username: this.username,
                    password: this.password
                }

                // send data through using axios using promises
                axios
                .post('/api/v1/token/login/',FormData)
                .then(response => {
                    this.submitting = false;
                    const token = response.data.auth_token
                    // call setToken mutation
                    this.SET_TOKEN(token)
                    //call setUsername mutation
                    this.SET_USERNAME(this.username)
                    
                    axios.defaults.headers.common['Authorization'] = "Token " + token

                    // store in the local storage 
                    localStorage.setItem('token',token)
                    localStorage.setItem('username',this.username)
                
                    this.$router.push('/Dashboard')
                
                    
                })
                .catch(error =>{
                    this.submitting = false;
                     this.errors.push(error)
                    })

         } 
        }
    }
}
</script>