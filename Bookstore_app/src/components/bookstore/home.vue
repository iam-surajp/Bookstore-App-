<script lang="ts">
import Header from "./header.vue";

export default {
  name: "Home",
  data: () => ({
    loaded: false,
    loading: false,
    page:1,
  }),

  components: {
    Header,
  },

  methods: {
  },
};
</script>

<template>
  <div>
    <Header />
  </div>

  <div class="main">
    <div>
      <h3>Books (123 items)</h3>
    </div>
    <div class="books-container">
      <div class="book-card">
        <div class="book-img">
          <img src="/src/assets/bookstore_imgs/Image 11.png" alt="" />
        </div>
        <div class="book-content">
          <h6>Don't make me think</h6>
          <label>By Steve Krug</label>
          <div class="rt-div">
            <div class="rating">
            <label >4.5</label>
            <v-icon style="font-size: 10px;">mdi-star</v-icon>  
            </div>
            <label>(20)</label>
          </div>
          <div class="bk-price">
            <label>Rs. 1500</label>
            <label>Rs. 2000</label>
          </div>
        </div>
      </div>
      <div class="book-card">
        <div class="book-img">
          <img src="/src/assets/bookstore_imgs/Image 11.png" alt="" />
        </div>
        <div class="book-content">
          <h6>Don't make me think</h6>
          <label>By Steve Krug</label>
          <div class="rt-div">
            <div class="rating">
            <label >4.5</label>
            <v-icon style="font-size: 10px;">mdi-star</v-icon>  
            </div>
            <label>(20)</label>
          </div>
          <div class="bk-price">
            <label>Rs. 1500</label>
            <label>Rs. 2000</label>
          </div>
        </div>
      </div>
      <div class="book-card">
        <div class="book-img">
          <img src="/src/assets/bookstore_imgs/Image 11.png" alt="" />
        </div>
        <div class="book-content">
          <h6>Don't make me think</h6>
          <label>By Steve Krug</label>
          <div class="rt-div">
            <div class="rating">
            <label >4.5</label>
            <v-icon style="font-size: 10px;">mdi-star</v-icon>  
            </div>
            <label>(20)</label>
          </div>
          <div class="bk-price">
            <label>Rs. 1500</label>
            <label>Rs. 2000</label>
          </div>
        </div>
      </div>
      <div class="book-card">
        <div class="book-img">
          <img src="/src/assets/bookstore_imgs/Image 11.png" alt="" />
        </div>
        <div class="book-content">
          <h6>Don't make me think</h6>
          <label>By Steve Krug</label>
          <div class="rt-div">
            <div class="rating">
            <label >4.5</label>
            <v-icon style="font-size: 10px;">mdi-star</v-icon>  
            </div>
            <label>(20)</label>
          </div>
          <div class="bk-price">
            <label>Rs. 1500</label>
            <label>Rs. 2000</label>
          </div>
        </div>
      </div>
      <div class="book-card">
        <div class="book-img">
          <img src="/src/assets/bookstore_imgs/Image 11.png" alt="" />
        </div>
        <div class="book-content">
          <h6>Don't make me think</h6>
          <label>By Steve Krug</label>
          <div class="rt-div">
            <div class="rating">
            <label >4.5</label>
            <v-icon style="font-size: 10px;">mdi-star</v-icon>  
            </div>
            <label>(20)</label>
          </div>
          <div class="bk-price">
            <label>Rs. 1500</label>
            <label>Rs. 2000</label>
          </div>
        </div>
      </div>
      <div class="book-card">
        <div class="book-img">
          <img src="/src/assets/bookstore_imgs/Image 11.png" alt="" />
        </div>
        <div class="book-content">
          <h6>Don't make me think</h6>
          <label>By Steve Krug</label>
          <div class="rt-div">
            <div class="rating">
            <label >4.5</label>
            <v-icon style="font-size: 10px;">mdi-star</v-icon>  
            </div>
            <label>(20)</label>
          </div>
          <div class="bk-price">
            <label>Rs. 1500</label>
            <label>Rs. 2000</label>
          </div>
        </div>
      </div>
      <div class="book-card">
        <div class="book-img">
          <img src="/src/assets/bookstore_imgs/Image 11.png" alt="" />
        </div>
        <div class="book-content">
          <h6>Don't make me think</h6>
          <label>By Steve Krug</label>
          <div class="rt-div">
            <div class="rating">
            <label >4.5</label>
            <v-icon style="font-size: 10px;">mdi-star</v-icon>  
            </div>
            <label>(20)</label>
          </div>
          <div class="bk-price">
            <label>Rs. 1500</label>
            <label>Rs. 2000</label>
          </div>
        </div>
      </div>
      <div class="book-card">
        <div class="book-img">
          <img src="/src/assets/bookstore_imgs/Image 11.png" alt="" />
        </div>
        <div class="book-content">
          <h6>Don't make me think</h6>
          <label>By Steve Krug</label>
          <div class="rt-div">
            <div class="rating">
            <label >4.5</label>
            <v-icon style="font-size: 10px;">mdi-star</v-icon>  
            </div>
            <label>(20)</label>
          </div>
          <div class="bk-price">
            <label>Rs. 1500</label>
            <label>Rs. 2000</label>
          </div>
        </div>
      </div>
      <div class="book-card">
        <div class="book-img">
          <img src="/src/assets/bookstore_imgs/Image 11.png" alt="" />
        </div>
        <div class="book-content">
          <h6>Don't make me think</h6>
          <label>By Steve Krug</label>
          <div class="rt-div">
            <div class="rating">
            <label >4.5</label>
            <v-icon style="font-size: 10px;">mdi-star</v-icon>  
            </div>
            <label>(20)</label>
          </div>
          <div class="bk-price">
            <label>Rs. 1500</label>
            <label>Rs. 2000</label>
          </div>
        </div>
      </div>
      <div class="book-card">
        <div class="book-img">
          <img src="/src/assets/bookstore_imgs/Image 11.png" alt="" />
        </div>
        <div class="book-content">
          <h6>Don't make me think</h6>
          <label>By Steve Krug</label>
          <div class="rt-div">
            <div class="rating">
            <label >4.5</label>
            <v-icon style="font-size: 10px;">mdi-star</v-icon>  
            </div>
            <label>(20)</label>
          </div>
          <div class="bk-price">
            <label>Rs. 1500</label>
            <label>Rs. 2000</label>
          </div>
        </div>
      </div>
      <div class="book-card">
        <div class="book-img">
          <img src="/src/assets/bookstore_imgs/Image 11.png" alt="" />
        </div>
        <div class="book-content">
          <h6>Don't make me think</h6>
          <label>By Steve Krug</label>
          <div class="rt-div">
            <div class="rating">
            <label >4.5</label>
            <v-icon style="font-size: 10px;">mdi-star</v-icon>  
            </div>
            <label>(20)</label>
          </div>
          <div class="bk-price">
            <label>Rs. 1500</label>
            <label>Rs. 2000</label>
          </div>
        </div>
      </div>
      <div class="book-card">
        <div class="book-img">
          <img src="/src/assets/bookstore_imgs/Image 11.png" alt="" />
        </div>
        <div class="book-content">
          <h6>Don't make me think</h6>
          <label>By Steve Krug</label>
          <div class="rt-div">
            <div class="rating">
            <label >4.5</label>
            <v-icon style="font-size: 10px;">mdi-star</v-icon>  
            </div>
            <label>(20)</label>
          </div>
          <div class="bk-price">
            <label> <b>Rs. 1500</b> </label>
            <label class="total"><del> Rs. 2000</del> </label>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">
    <v-pagination
      v-model="page"
      :length="15"
      :total-visible="7"
    ></v-pagination>
  </div>
  <br>
  </div>
  <div class="px-8 py-3 bg-black text-left w-100 h-9" id="footer">
    <div class="footer-text">
        <label>Copyright &copy 2020, Bookstore Private Limited. All Rights Reserved</label>
    </div>
    </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 75%;
  margin: auto;
  margin-top: 80px;
  gap: 20px;
}

.books-container {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin: auto;
  /* border: 1px solid salmon; */
}

.book-card {
  display: flex;
  flex-direction: column;
  border: 0.5px solid rgb(222, 222, 222);
  width: 250px;
  height: 290px;
  margin:0
}

.book-img {
  background-color: #F5F5F5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60%;
}

.book-content{
  padding-left: 20px;
}

.book-content h6 {
  font-size: 15px;
  font-weight: bold;
}

.book-content label {
  font-size: small;
}

.rt-div{
  display: flex;
  align-items:center;
  gap: 7px;
}

.rating {
  width: 33px;
  height: 16px;
  background-color: green;
  color: white;
  font-size: smaller;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
}

.rating label{
  font-size: 10px;
}

.bk-price{
  display: flex;
  gap: 10px;
}

#footer{
  height: 50px;
}

.footer-text{
  width: 80%;
  margin: auto;
  font-size: small;
}

</style>
