<script lang="ts">
import Header from "../bookstore/header.vue";
import { getCartItemsServices } from "@/services/bookstoreServices";
export default {
  name: "Cart",

  data() {
    return {
      cart_items: [],
      pl_ord_clkd: false,
      cntinue_btn_clkd:false
    };
  },

  components: {
    Header,
  },

  methods: {
    getCartItems() {
      getCartItemsServices()
        .then((response) => {
          console.log(response);
          this.cart_items = response.data.result;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  mounted() {
    this.getCartItems();
  },
};
</script>

<template>
  <Header />

  <div class="parent">
    <div class="container">
      <h4>Home / My cart</h4>
      <div class="cart-item">
        <div class="item-info">
          <div class="h3-div"><h3>My cart (1)</h3></div>
          <div class="loc-div">BridgeLabz Solutions LLP</div>
        </div>
        <div id="two-partitions" v-for="(item, index) in cart_items">
          <div class="first-part">
            <div class="book-img">
              <img
                src="/src/assets/bookstore_imgs/Image 11@2x.png"
                width="65px"
                height="85px"
              />
            </div>
          </div>
          <div class="second-part">
            <div class="title">
              <div>
                <h6>{{ item.product_id.bookName }}</h6>
              </div>
              <div class="mb-2">
                <label class="writer-name"
                  >by {{ item.product_id.author }}</label
                >
              </div>
              <div class="all-price">
                <label class="disc-price">
                  Rs. {{ item.product_id.discountPrice }}
                </label>
                <label class="total-price">
                  <s>Rs. {{ item.product_id.price }}</s>
                </label>
              </div>
            </div>
            <br />
            <div class="ct-parent">
              <div class="counts-div">
                <div class="change-count" @click="">-</div>
                <div class="count">1</div>
                <div class="change-count" @click="">+</div>
              </div>
              <div class="remove-item">Remove</div>
            </div>
            <br />
          </div>
        </div>
        <div class="btns-div">
          <v-btn class="cart-btn" @click="pl_ord_clkd = true"
            >Place Order</v-btn>
        </div>
      </div>
      <br />
      <div class="addr-info">
        <label v-if="!pl_ord_clkd">Address Details</label>
        <template v-else>
          <div style="width: 100%">
            <div
              style="display: flex; justify-content: space-between; width: 100%"
            >
              <label>Customer Details</label>
              <div class="newAddr-div">Add New Address</div>
            </div>
            <div class="person-info">
              <div class="name" style="width: 40%">
                <label>Full Name</label>
                <v-text-field variant="outlined"></v-text-field>
              </div>
              <div class="contact" style="width: 40%">
                <label>Mobile Number</label>
                <v-text-field variant="outlined"></v-text-field>
              </div>
            </div>
            <div>
              <div style="gap: 10px; display: flex">
                <label><b>1.WORK</b></label>
                <span style="color: darkred">Edit</span>
              </div>
              <label>Address</label>
              <v-textarea
                variant="solo-filled"
                rows="3"
                style="width: 81%"
                auto-grow
              ></v-textarea>
              <div class="city-state">
                <div class="city" style="width: 40%">
                  <label>City/town</label>
                  <v-text-field variant="solo-filled"></v-text-field>
                </div>
                <div class="state" style="width: 40%">
                  <label>State</label>
                  <v-text-field variant="solo-filled"></v-text-field>
                </div>
              </div>
              <div class="home-addr" style="width: 70%">
                <div class="mb-2">
                  <label><b>2.Home</b></label>
                </div>
                <div class="mb-2">
                  <label>Address</label>
                </div>
                <p>
                  BridgeLabz Solutions LLP, No. 42, 14th Main, 15th Cross,
                  Sector 4, Opp to BDA complex, near Kumarakom restaurant, HSR
                  Layout, Bangalore
                </p>
              </div>
            </div>
            <div class="btns-div">
              <v-btn class="cart-btn" @click="cntinue_btn_clkd = true"
                >Continue</v-btn
              >
            </div>
          </div>
        </template>
      </div>
      <br />
      <div class="other-info">
        <label v-if="!cntinue_btn_clkd">Order Summary</label>
        <template v-else>
          <label>Order Summary</label>
        <div id="two-partitions" v-for="(item, index) in cart_items">
          <div class="first-part">
            <div class="book-img">
              <img
                src="/src/assets/bookstore_imgs/Image 11@2x.png"
                width="65px"
                height="85px"/>
            </div>
          </div>
          <div class="second-part">
            <div class="title">
              <div>
                <h6>{{ item.product_id.bookName }}</h6>
              </div>
              <div class="mb-2">
                <label class="writer-name"
                  >by {{ item.product_id.author }}</label>
              </div>
              <div class="all-price">
                <label class="disc-price">
                  Rs. {{ item.product_id.discountPrice }}
                </label>
                <label class="total-price">
                  <s>Rs. {{ item.product_id.price }}</s>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="btns-div">
              <v-btn class="cart-btn" @click=""
                >Checkout</v-btn>
            </div>
        </template>
      </div>
      <br />
    </div>
  </div>
</template>

<style scoped>
.parent {
  width: 100%;
  height: 100vh;
  margin-top: 65px;
  padding: 10px;
}

.container {
  width: 80%;
  height: fit-content;
  margin: auto;
  /* border: 1px solid black; */
}

.cart-item {
  width: 80%;
  height: fit-content;
  border: 1px solid rgb(201, 201, 201);
  margin-top: 10px;
  padding: 20px;
}

.addr-info {
  display: flex;
  align-items: center;
  padding: 20px;
  border: 1px solid rgb(201, 201, 201);
  width: 80%;
  height: fit-content;
}

.other-info{
  padding: 20px;
  border: 1px solid rgb(201, 201, 201);
  width: 80%;
  height: fit-content;
}

#two-partitions {
  display: flex;
  gap: 40px;
  padding: 10px;
  width: 50%;
}

.item-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
}

.person-info{    
    display: flex;
    width: 100%;
    justify-content: flex-start;
    gap: 10px; 
}

.counts-div {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  justify-content: center;
}

.change-count {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid rgb(206, 206, 206);
  display: flex;
  font-size: 18px;
  justify-content: center;
  align-items: center;
}

.count {
  width: 41px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(206, 206, 206);
  font-size: 14px;
}

.h3-div {
  font-size: 18px;
  font-weight: 60;
}

.loc-div {
  border: 1px solid gray;
  padding: 3px 10px 3px 10px;
}

.city-state{ 
    display: flex;
    width: 100%;
    justify-content: flex-start;
    gap: 10px;                
}

label.total-price {
  font-size: 12px;
}

.title h6 {
  font-size: 14px;
  font-weight: bold;
}

div .writer-name {
  font-size: 13px;
  color: #9d9d9d;
}

div .disc-price {
  font-size: 15px;
  font-weight: bold;
  margin-right: 10px;
}

.ct-parent {
  display: flex;
  align-items: center;
}

.btns-div {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.cart-btn {
  background-color: #3371b5;
  color: white;
}

.remove-item {
  margin-left: 25px;
}

.newAddr-div {
  border: 1px solid darkred;
  color: darkred;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
}

.v-input--density-default {
  --v-input-control-height: 0px;
  --v-input-padding-top: 0px;
}
</style>
