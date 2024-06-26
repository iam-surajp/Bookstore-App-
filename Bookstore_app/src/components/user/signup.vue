<script lang="ts">
import Login from "./login.vue";

export default {
  name: "Signup",
  data() {
    return {
      tabs: null,
    };
  },
  components: {
    Login,
  },
};
</script>

<template>
  <v-card class="mx-auto" width="400px">
    <v-tabs v-model="tabs" color="primary" grow>
      <v-tab :value="1"> Login </v-tab>

      <v-tab :value="2"> Signup </v-tab>
    </v-tabs>

    <v-tabs-window v-model="tabs" style="width: 100%; height: 100%">
      <v-tabs-window-item v-for="i in 2" :key="i" :value="i">
        <div v-if="i === 2" style="width: 75%; margin: auto">
          <div class="fields">
            <div class="labels">Full Name</div>
            <v-text-field density="compact" variant="outlined"></v-text-field>
          </div>
          <div class="fields">
            <div class="labels">Email id</div>
            <v-text-field density="compact" variant="outlined"></v-text-field>
          </div>
          <div class="fields">
            <div class="labels">Password</div>
            <v-text-field density="compact" variant="outlined"></v-text-field>
          </div>
          <div class="fields">
            <div class="labels">Mobile Number</div>
            <v-text-field density="compact" variant="outlined"></v-text-field>
          </div>
          <div style="width: 100%; margin: auto">
            <v-btn class="btn">Signup</v-btn>
          </div>
        </div>
        <div v-else style="width: 75%; margin: auto">
          <Login />
        </div>
      </v-tabs-window-item>
    </v-tabs-window>
  </v-card>
</template>

<style scoped>
.v-card {
  height: 500px;
}

.fields {
  width: 100%;
  height: 70px;
  margin: 10px;
}

.labels {
  font-size: 13px;
}

.btn {
  width: 100%;
  background-color: darkred;
  color: white;
  text-transform: capitalize;
  margin: auto;
}
</style>
