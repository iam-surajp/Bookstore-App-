<script lang="ts">
import Header from "../bookstore/header.vue";
import Footer from "../bookstore/footer.vue";

export default {
  name: "Wishlist",

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
        <h3 style="font-size: small;">Home / <b>My Wishlist</b></h3>
        <div class="wl-box">
          <div class="wl-sub-box">
            <div class="wl-heading">
              <h4>My Wishlist (02)</h4>
            </div>
            <div class="one-book-row">
              <div id="two-partitions">
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
                      <h6>bookname</h6>
                    </div>
                    <div class="mb-2">
                      <label class="writer-name">by author</label>
                    </div>
                    <div class="all-price">
                      <label class="disc-price"> Rs. 234 </label>
                      <label class="total-price">
                        <s>Rs. 231</s>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <v-icon>mdi-delete</v-icon>
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
  /* flex: 1; */
  width: 100%;
  height: 100vh;
  margin-top: 65px;
  padding: 10px;
}

.container {
  width: 75%;
  height: fit-content;
  margin: auto;
  /* border: 1px solid green; */
}

#two-partitions {
  display: flex;
  gap: 40px;
  padding: 20px;
  width: 50%;
}

.wl-box{
     /* border: 1px solid #E4E4E4;  */
     padding: 20px
}

.wl-sub-box{
     border: 1px solid #E4E4E4
}

.one-book-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 97%;
}

.wl-heading {
  border: 1px solid #e4e4e4;
  width: 100%;
  padding: 10px;
  padding-left: 20px;
  background-color: #f5f5f5;
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

h4 {
  font-size: 18px;
  font-weight: bold;
}
</style>
