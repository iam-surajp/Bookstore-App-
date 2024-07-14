<script lang="ts" setup>
import Header from "../bookstore/header.vue";
import Footer from "../bookstore/footer.vue";
import { useHomeStore } from "@/stores/homeStore";
import { onMounted, ref, computed } from "vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="page-wrapper">
    <Header />
    <div class="main">
      <div class="all-content">
        <div class="order-img">
          <img src="/src/assets/bookstore_imgs/order_succ.png" alt="" />
        </div>
        <div class="cnf-msg">
          hurray!!! your order is confirmed <br />
          the order id is #123456 save the order id for <br />
          further communication..
        </div>
        <br />
        <div
          class="info-table">
          <table>
            <tr>
              <th>Email</th>
              <th>Contact us</th>
              <th>Address</th>
            </tr>
            <tr>
              <td>admin@bookstore.com</td>
              <td>+91 8958698569</td>
              <td>
                42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near
                Kumarakom restaurant, HSR Layout, Bangalore 560034
              </td>
            </tr>
          </table>
        </div>
        <br>
        <RouterLink to="/home" id="btn-shop">CONTINUE SHOPPING</RouterLink>
      </div>
    </div>
  </div><br><br>
  <div>  <Footer /></div>

</template>

<style scoped>
.main {
  width: 100%;
  height: 100vh;
  margin-top: 65px;
  padding: 10px;
}

.page-wrapper{
  border:1px  solid green;
  min-height: 100vh;
}

.cnf-msg {
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: large;
}

.all-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
}

.info-table{
       display: flex;
        justify-content: center;
        width: 60%
}

table {
  border: 1px solid #dcdcdc;
  border-collapse: collapse;
}

th,
td {
  padding: 15px;
  text-align: center;
  border-left: 1px solid #dcdcdc;
  border-right: 1px solid #dcdcdc;
  border-top: 1px solid #dcdcdc;
  width: 33%;
}

th {
  border-left: none;
  border-right: none;
  background-color: #fafafa;
}

#btn-shop{
  background-color: #3371B5;
  color: white;
  padding: 5px 10px 5px 10px;
  border-radius: 3px;

}
</style>
