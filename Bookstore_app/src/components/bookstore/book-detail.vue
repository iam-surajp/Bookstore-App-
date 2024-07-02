<script lang="ts">
import Header from "./header.vue";
import { defineComponent, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useHomeStore } from '@/stores/homeStore';

export default {
  name: "BookDetail",
  data: () => ({
    rating: 3.5,
    btnClicked:false,
  }),

  components: {
    Header,
  },

  methods: {
    runFunc(){
        this.btnClicked=true
    }
  },

  computed: {
    book() {
      const homeStore = useHomeStore();
      const route = useRoute();
      const bookId = route.params.id;
      return homeStore.books.find((book) => book._id === bookId);
    },
  },

  onMounted() {
    const homeStore = useHomeStore();
    if (!this.book) {
      homeStore.fetchBooks();
    }
  },
};
</script>

<template>
  <div>
    <Header />
  </div>
  <div class="container">
    <div class="main-content">
      <div>
        <label>Home / <b>Book(01)</b></label>
      </div>
      <div style="display: flex; margin-top: 30px">
        <div class="first-partition">
          <div class="book-img">
            <img
              style="width: 80%;height: 85%;"
              src="/src/assets/bookstore_imgs/Image 11@2x.png"
            />
          </div>
          <div class="fp-btns">
            <v-btn class="fp-vbtn" v-if="btnClicked===false" style="background-color: darkred" @click="runFunc()"
              >add to bag</v-btn>
            <div class="counts-div" v-if="btnClicked===true">
              <div class="change-count">-</div>
              <div class="count">1</div>
              <div class="change-count">+</div>
            </div>
            <v-btn class="fp-vbtn" style="background-color: black">
              <v-icon>mdi-heart</v-icon>
              <span>wishlist</span>
            </v-btn>
          </div>
        </div>
        <div class="second-partition">
          <div class="title-details">
            <h6>{{ book?.bookName }}</h6>
            <label>By {{ book?.author }}</label>
            <div class="rt-div">
              <div class="rating">
                <label>4.5</label>
                <v-icon style="font-size: 15px">mdi-star</v-icon>
              </div>
              <label>(20)</label>
            </div>
            <div class="bk-price">
              <label> <b>Rs. {{ book?.discountPrice }}</b> </label>
              <label class="total"> Rs. {{ book?.price }} </label>
            </div>
          </div>
          <br />
          <hr />
          <br />
          <div>
            <li style="font-size: 18px; color: gray">Book detail</li>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              quam enim minus cupiditate error aperiam velit consequatur
              provident est doloremque maxime porro dolor, nemo modi alias ex
              nisi! Consectetur debitis reprehenderit voluptas autem nemo,
              consequuntur, quam nulla minus repellat ut inventore soluta. Quam
              ex laudantium error praesentium. Hic, culpa qui.
            </p>
          </div>
          <br />
          <hr />
          <br />
          <div>
            <h5>Customer Feedback</h5>
          </div>
          <div class="feedback-div">
            <label>Overall rating</label>
            <div class="text-left">
              <v-rating
                v-model="rating"
                half-increments
                hover
                active-color="#FFCE00"
                style="margin: 0;padding: 0;"
              ></v-rating>
            </div>
            <v-textarea
              placeholder="Write your review"
              variant="solo"
              rows="2"
            ></v-textarea>
            <div class="submit-btn">
              <v-btn style="background-color: #3371b5; color: white"
                >Submit</v-btn
              >
            </div>
          </div>
          <div><br>
            <div class="comments">
              <div style="display: flex;gap: 10px; align-items: center;">
                <div style="display: flex;justify-content: center;width: 25px;height: 25px;border-radius: 50%;background-color: #F5F5F5;">AC</div>
                <div> <h5>Aniket Chile</h5></div>
              </div>
              <div class="text-left">
                <v-rating v-model="rating" readonly active-color="#FFCE00"></v-rating>
              </div>
              <p>
                Good product. Even though the translation could have been
                better. Chanakya's neeti are thought provoking. Chanakya has
                written on many different topics and his writings are succinct.
              </p>
            </div><br>
            <div class="comments">
              <div style="display: flex;gap: 10px; align-items: center;">
                <div style="display: flex;justify-content: center;width: 25px;height: 25px;border-radius: 50%;background-color: #F5F5F5;">SB</div>
                <div> <h5>Shweta Bodkar</h5></div>
              </div>
              
              <div class="text-left">
                <v-rating v-model="rating" readonly active-color="#FFCE00"></v-rating>
              </div>
              <p>
                Good product. Even though the translation could have been
                better. Chanakya's neeti are thought provoking. Chanakya has
                written on many different topics and his writings are succinct.
              </p>
            </div>
            <br><br>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.counts-div{
  display: flex;
  align-items: center;
  gap: 10px;
  width: 49%;
  justify-content: center;

}

.change-count{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  /* border: 1px solid gray; */
  background-color: rgb(208, 206, 206);
  display: flex;
  font-size: larger;
  justify-content: center;
  align-items: center
}

.count{
  width: 30px;
  height: 30px;
  /* border: 1px solid gray; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(208, 206, 206);

}

.container {
  margin-top: 80px;
  /* border: 1px solid green; */
  min-height: fit-content;
}

.main-content {
  /* border: 1px solid salmon; */
  width: 80%;
  height: fit-content;
  margin: auto;
}

.first-partition {
  width: 40%;
  height: 70vh;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.book-img {
  width: 80%;
  height: 90%;
  border: 1px solid rgb(167, 167, 167);
  display: flex;
  justify-content: center;
  align-items: center;
}

.fp-btns {
  display: flex;
  margin-top: 20px;
  gap: 20px;
  width: 80%;
  /* border: 1px solid pink; */
}

.fp-vbtn {
  color: white;
  text-transform: capitalize;
  width: 48%;
}

.second-partition {
  width: 60%;
  height: 100vh;
  /* border: 1px solid blue; */
}

.bk-price {
  margin-top: 10px;
}

.title-details h6 {
  font-size: 30px;
}

.total {
  font-size: 10px;
}

.title-details label {
  font-size: 20px;
}

.rt-div {
  display: flex;
  align-items: center;
  gap: 7px;
}

.rt-div label {
  font-size: 12px;
}

.rating {
  width: 48px;
  height: 23px;
  background-color: green;
  color: white;
  font-size: smaller;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
}

.rating label {
  font-size: 15px;
}

.bk-price {
  display: flex;
  gap: 10px;
}

hr {
  border-color: rgb(233, 233, 233);
}

div h5 {
  font-size: 25px;
}

.submit-btn {
  display: flex;
  width: 100%;
  justify-content: flex-end;
}

.feedback-div {
  background-color: #f5f5f5;
  padding: 20px;
}

.comments h5{
  font-size: 15px;
}
</style>
