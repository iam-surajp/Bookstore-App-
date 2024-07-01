<script lang="ts">
import { loginUserServices } from '@/services/userServices';

export default {
  name: "Login",

  data() {
    return {
      show: false,
      password: '',
      email:''
    };
  },
  methods:{
    submitLogin(){
      if (this.email!='' && this.password!=''){
         const reqData = {
          email:this.email,
          password:this.password
         }
          
         console.log(reqData)
         loginUserServices(reqData)
         .then(res=>{
          console.log(res)
          const accessToken = res.data.result.accessToken
          localStorage.setItem('access-token',accessToken)
          console.log("Login successfull")
         })
         .catch(error=>{
          console.log(error)
          console.log("Login failed")
         })
      }else{
        alert("Invalid credentials")
      }
    }
  }
};
</script>

<template>
  <div class="fields">
    <div class="labels">Email Id</div>
    <v-text-field v-model="email" density="compact" variant="outlined"></v-text-field>
  </div>
  <div class="fields">
    <div class="labels">Password</div>
    <v-text-field
      density="compact"
      variant="outlined"
      :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show ? 'text' : 'password'"
      v-model="password"
      @click:append-inner="show = !show"
    ></v-text-field>
    <div class="forgot-pass">Forgot password?</div>
  </div>
  <br />
  <div style="width: 100%; margin: auto">
    <v-btn class="login-btn" @click="submitLogin()">Login</v-btn>
  </div>
  <br />
  <div style="text-align: center; font-size: larger; font-weight: bold">OR</div>
  <br />
  <div class="o-btns-div">
    <v-btn id="fb-btn" class="other-btns">Facebook</v-btn>
    <v-btn class="other-btns">Google</v-btn>
  </div>
</template>

<style scoped>
.login-btn {
  width: 100%;
  background-color: darkred;
  color: white;
  text-transform: capitalize;
  margin: auto;
}

.o-btns-div {
  display: flex;
  justify-content: space-between;
}

.other-btns {
  width: 48%;
}

#fb-btn {
  background-color: rgb(50, 50, 222);
  color: white;
}

.forgot-pass {
  text-align: end;
  margin-top: -20px;
}

.labels {
  font-size: 13px;
  font-weight: 600;
}

@media only screen and (max-width: 600px) {
  .o-btns-div {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .other-btns {
    margin: 10px;
  }
}
</style>
