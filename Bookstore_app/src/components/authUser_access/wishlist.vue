<script lang="ts" setup>
import Header from "../bookstore/header.vue";
import Footer from "../bookstore/footer.vue";
import { useHomeStore } from "@/stores/homeStore";
import { onMounted, ref,computed } from "vue";
import { useRouter } from "vue-router";

const homeStore = useHomeStore()
const router = useRouter();

onMounted(() => {
    homeStore.getWishlistItems(); 
});

const gotoHome = () =>{
      router.push("/home")
    }

const wishlist_Items = computed(() => homeStore.wishlist_items);
</script>

<template>
  <div class="page-wrapper">
    <Header />
    <div class="main">
      <div class="container">
        <h3 style="font-size: small;"><label @click="gotoHome">Home</label> / <b>My Wishlist</b></h3>
        <div class="wl-box">
          <div class="wl-sub-box">
            <div class="wl-heading">
              <h4>My Wishlist ({{ wishlist_Items.length }})</h4>
            </div>
            <div v-for="(item, index) in wishlist_Items" :key="item.product_id._id">
              <div class="one-book-row" >
                <div id="two-partitions">
                  <div class="first-part">
                    <div class="book-img">
                      <img
                        src="/src/assets/bookstore_imgs/Image 11@2x.png"
                        width="65px"
                        height="85px"
                        alt="Placeholder Image"
                      />
                    </div>
                  </div>
                  <div class="second-part">
                    <div class="title">
                      <div>
                        <h6>{{ item.product_id.bookName }}</h6>
                      </div>
                      <div class="mb-2">
                        <label class="writer-name">by {{ item.product_id.author }}</label>
                      </div>
                      <div class="all-price">
                        <label class="disc-price"> Rs. {{ item.product_id.discountPrice }} </label>
                        <label class="total-price">
                          <s>Rs. {{ item.product_id.price }}</s>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="delete-icon">
                  <v-icon @click="homeStore.deleteWishlistItem(item.product_id._id)">mdi-delete</v-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <Footer />
</template>


<style scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

}

.main {
  width: 100%;
  height: 100vh;
  margin-top: 65px;
  padding: 10px;
}

.container {
  width: 75%;
  height: fit-content;
  margin: auto;
}

#two-partitions {
  display: flex;
  gap: 40px;
  padding: 20px;
  width: 50%;
}

.wl-box{
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

@media screen and (max-width:600px) {

  .container{
    width: 100%;
  }

  .container h3{
    margin-left: 5%;
  }

  .title{
    width: 150px;
  }
}

@media screen and (max-width:992px) {
  .container{
    width: 100%;
  }

  .container h3{
    margin-left: 5%;
  }
}

@media screen and (max-width:376px) {
  .one-book-row{
    flex-direction: column;
    align-items: flex-start
  }

  .delete-icon{
    width: 100%;
    text-align: center;
  }
}
</style>
