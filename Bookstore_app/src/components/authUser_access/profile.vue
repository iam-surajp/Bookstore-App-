<script lang="ts">
import Header from "../bookstore/header.vue";
import Footer from "../bookstore/footer.vue";

export default {
  name: "Profile",

  data() {
    return {};
  },

  components: {
    Header,
    Footer,
  },

  methods: {},
};
</script>

<template>
  <div class="page-wrapper">
    <Header />
    <div class="main">
      <div class="container">
        <h4>Home / My cart</h4>
        <div class="all-details">
          <div class="prs-det">
            <h5>Personal Details</h5>
            <label style="color: darkred">Edit</label>
          </div>
          <div class="name">
            <label>Full Name</label>
            <v-text-field variant="solo-filled"></v-text-field>
          </div>
          <div class="email">
            <label>Email Id</label>
            <v-text-field variant="solo-filled"></v-text-field>
          </div>
          <div class="password">
            <label>Password</label>
            <v-text-field variant="solo-filled"></v-text-field>
          </div>
          <div class="mobile">
            <label>Mobile Number</label>
            <v-text-field variant="solo-filled"></v-text-field>
          </div>
          <br />
          <div class="addr-det">
            <h5>Address Details</h5>
            <v-btn class="addr-btn">Add New Address</v-btn>
          </div>
          <div style="gap: 10px; display: flex">
            <label><b>1.WORK</b></label>
            <span style="color: darkred">Edit</span>
          </div>
          <label>Address</label>
          <v-textarea variant="solo-filled" rows="3" auto-grow></v-textarea>
          <div class="city-state">
            <div class="city" style="width: 50%">
              <label>City/town</label>
              <v-text-field variant="solo-filled"></v-text-field>
            </div>
            <div class="state" style="width: 50%">
              <label>State</label>
              <v-text-field variant="solo-filled"></v-text-field>
            </div>
          </div>
          <div>
            <label>Type</label>
            <div class="radio-btns">
              <div>
                <v-radio
                  color="red-darken-3"
                  label="Home"
                  value="home"
                ></v-radio>
              </div>
              <div>
                <v-radio
                  color="red-darken-3"
                  label="Work"
                  value="work"
                ></v-radio>
              </div>
              <div>
                <v-radio
                  color="red-darken-3"
                  label="Other"
                  value="other"
                ></v-radio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1;
  width: 100%;
  height: 100vh;
  margin-top: 65px;
  padding: 10px;
}

.container {
  width: 80%;
  height: fit-content;
  margin: auto;
}

.city-state {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  gap: 10px;
}

.all-details {
  width: 65%;
  padding: 20px;
  padding-left: 50px;
}

.prs-det {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 15px;
}

h5 {
  font-size: large;
  font-weight: bold;
}

.addr-det {
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.addr-btn {
  border: 1px solid darkred;
  color: darkred;
  text-transform: capitalize;
}

.radio-btns{
    display: flex;
    margin-bottom: 50px
}
</style>
