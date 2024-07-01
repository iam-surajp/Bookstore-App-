<script lang="ts">
import Login from "./login.vue";
import { registerUserServices } from "@/services/userServices";

export default {
  name: "Signup",
  data() {
    return {
      tabs: null,
      show: false,
      valid: false,
      fullName: "",
      fullNameRules: [(v:string) => !!v || "* required",],
      email: "",
      emailRules: [
        (v:string) => !!v || "* required",
        (v:string) =>
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(v) ||
          "Must be a valid e-mail",
      ],
      password: "",
      passwordRules: [
        (v:string) => !!v || "* required",
        (v:string) =>
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
            v
          ) || "Use 8 or more characters, numbers & symbols",
      ],
      mobileNumber: "",
      mobileNumberRules: [
        (v:string) => !!v || "* required",
        (v:string) =>/^\d{10}$/.test(v) || "Must be 10 digits",
      ],
    };
  },
  components: {
    Login,
  },
  methods:{
    submitForm(){
      console.log('hii')
      const reqData={
          fullName:this.fullName,
          email:this.email,
          password:this.password,
          phone:this.mobileNumber
      }
      console.log(reqData)
      console.log(this.valid)

      if (this.valid){
        registerUserServices(reqData)
        .then(res =>{
          console.log(res)
        })
        .catch(error=>{
          console.log(error)
        })
      }else{

      }

    }
  }
};
</script>

<template>
  <div class="maindiv">
    <div class="img-div">
      <img src="/src/assets/bookstore.png" alt="" />
      <h2>ONLINE BOOK SHOPPING</h2>
    </div>
    <v-card>
      <v-tabs v-model="tabs" color="primary" grow>
        <v-tab :value="1"><label class="titles"> Login</label> </v-tab>

        <v-tab :value="2"> <label class="titles"> Signup</label> </v-tab>
      </v-tabs>

      <v-tabs-window v-model="tabs" style="width: 100%; height: 100%">
        <v-tabs-window-item v-for="i in 2" :key="i" :value="i">
          
          <div v-if="i === 2" class="all-fields">
            <v-form ref="form" v-model="valid">
            <div class="fields">
              <div class="labels">Full Name</div>
              <v-text-field
                density="compact"
                variant="outlined"
                :rules="fullNameRules"
                v-model="fullName"
              ></v-text-field>
            </div>
            <div class="fields">
              <div class="labels">Email Id</div>
              <v-text-field
                density="compact"
                variant="outlined"
                :rules="emailRules"
                v-model="email"
              ></v-text-field>
            </div>
            <div class="fields">
              <div class="labels">Password</div>
              <v-text-field
                v-model="password"
                density="compact"
                variant="outlined"
                :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show ? 'text' : 'password'"
                @click:append-inner="show = !show"
                :rules="passwordRules"
              ></v-text-field>
            </div>
            <div class="fields">
              <div class="labels">Mobile Number</div>
              <v-text-field
                density="compact"
                variant="outlined"
                :rules="mobileNumberRules"
                v-model="mobileNumber"
              ></v-text-field>
            </div>
            <div style="width: 100%; margin: auto">
              <v-btn class="btn" @click="submitForm()">Signup</v-btn>
            </div>
          </v-form>
          </div>
        
          <div v-else class="all-fields">
            <Login />
          </div>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card>
  </div>
</template>

<style scoped>
.maindiv {
  width: 100%;
  height: 100vh;
  justify-content: center;
  display: flex;
  align-items: center;
  background-color: gray;
}

.v-card{
  height: 80%;
}

.v-tab--selected .v-tab__slider {
  height: 6px !important;
  width: 33px !important;
}

.titles {
  font-size: 18px;
  font-weight: bolder;
  color: gray;
}

.img-div {
  background-color: white;
  border-radius: 20px 0px 0px 20px;
  opacity: 1;
  height: 60%;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.all-fields {
  width: 70%;
  margin: auto;
  margin-top: 20px;
}

h2 {
  font-size: large;
  font-weight: bold;
  margin-top: 20px;
}

img {
  width: 65%;
  border-radius: 50%;
}

.v-card {
  width: 30%;
  height: 70%;
  padding: 10px;
}

.labels {
  font-size: 13px;
  font-weight: 600;
}

.btn {
  width: 100%;
  background-color: darkred;
  color: white;
  text-transform: capitalize;
  margin: auto;
}


@media only screen and (max-width:600px){
   .img-div{
    display: none;
   }

   .v-card{
    width: 100%;
    height: 90%;
   }

   .other-btns{
    flex-direction: column;
   }

  .maindiv{
    background-color: white;
  }
}

@media only screen and (max-width:900px){
   .v-card{
    width: 90%;
   } 

   .img-div{
    display: none;

   }

   img{
    width:20%;
    border-radius: none;
   }

   .maindiv{
    flex-direction: column;
   }
  }
</style>
