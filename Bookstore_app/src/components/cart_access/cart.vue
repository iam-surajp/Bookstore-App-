
<script lang="ts">
import Header from "../bookstore/header.vue";

export default {
  name: "Cart",

  components: {
    Header,
  },
};
</script>

<template>
  <Header />

  <div
    class="parent"
    style="width: 100%; height: 100vh; margin-top: 65px; padding: 10px"
  >
    <div
      class="container"
      style="width: 80%; height: 100%; margin: auto; border: 1px solid black"
    >
      <h4>Home / My cart</h4>
      <div
        class="cart-item"
        style="width: 80%; height: 50vh; border: 1px solid pink"
      >
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <div><h3>My cart (1)</h3></div>
          <div style="border: 1px solid gray">BridgeLabz Solutions LLP</div>
        </div>
          <div id="two-partitions">
            <div class="first-part">
              <div class="book-img">
                <img
                  src="/src/assets/bookstore_imgs/Image 11@2x.png"
                  width="60px"
                />
              </div>
            </div>
            <div class="second-part">
              <div class="title">
                <div>
                  <h6>{{ book?.bookName }}bookname</h6>
                </div>
                <div class="mb-2">
                  <label class="writer-name">by {{ book?.author }}authorname</label>
                </div>
                <div class="all-price">
                  <label class="disc-price"> Rs. {{ book?.discountPrice }}d-price </label>
                  <label class="total-price">
                    <s>Rs. {{ book?.price }} price</s>
                  </label>
                </div>
              </div>
            </div>
          </div>       
      </div>
    </div>
  </div>
</template>

<style scoped>

#two-partitions{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    width: 30%;
}
</style>