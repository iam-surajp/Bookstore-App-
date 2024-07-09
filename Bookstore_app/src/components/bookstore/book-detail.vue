<script lang="ts">
import Header from "./header.vue";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { useHomeStore } from "@/stores/homeStore";
import { useCounterStore } from "@/stores/counter";
import {
  addCartItemServices,
  removeCartItemServices,
  getFeedbackServices,
  addFeedbackServices,
} from "@/services/bookstoreServices";

interface Feedback {
  user_id: {
    fullName: string;
  };
  rating: number;
  comment: string;
}

interface Book {
  _id: string;
  bookName: string;
  author: string;
  discountPrice: number;
  price: number;
}

interface CartItem {
  _id: string;
  product_id: {
    _id: string;
  };
  quantityToBuy: number;
}


export default {
  name: "BookDetail",
  data() {
    return {
      rating: 0,
      btnClicked: false,
      feedbacks: [] as Feedback[],
      comment: "",
      bookId: "",
    };
  },

  components: {
    Header,
  },

  methods: {
    addItemFunc() {
      this.btnClicked = true;
      const id = this.$route.params.id as string;
      console.log("id is", id);
      addCartItemServices(id)
        .then((response) => {
          console.log(response);
          console.log("Item added");
          this.counterStore.getCartItems(this.bookId);
        })
        .catch((error) => {
          console.log("Some error");
          console.log(error);
        });
    },

    showFeedback() {
      const id = this.$route.params.id as string;
      console.log("this is feedback func");
      getFeedbackServices(id)
        .then((response) => {
          console.log(response);
          this.feedbacks = response.data.result;
          console.log("feedbacks", this.feedbacks);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    submitFeedback() {
      const id = this.$route.params.id as string;
      const reqData = {
        comment: this.comment,
        rating: this.rating,
      };
      addFeedbackServices(id, reqData)
        .then((response) => {
          console.log("add feedback", response);
          this.showFeedback();
          this.comment = "";
          this.rating = 0; 
        })
        .catch((error) => {
          console.log(error);
        });
    },

    incrementItem(cartItem_id: string, quantity: number) {
      this.counterStore.increment(cartItem_id, quantity);
    },

    decrementItem(cartItem_id: string, quantity: number) {
      this.counterStore.decrement(cartItem_id, quantity);
    },

    getCartItemId(bookId: string) {
      console.log("all cart items", this.counterStore.cartItems);
      const cartItem = this.counterStore.cartItems.find(
        (item: any) => item.product_id._id === bookId
      );
      console.log("bookid", bookId);
      console.log("this is cartitem", cartItem);
      return cartItem ? cartItem._id : null;
    },

    inCart(bookId: string) {
      return !!this.counterStore.cartItems.find(
        (item: any) => item.product_id._id === bookId
      );
    },
  },

  setup() {
    const counterStore = useCounterStore();
    const bookId = ref<string | null>(null);
    const book = ref<any>(null);
    const homeStore = useHomeStore();
    const route = useRoute();

    onMounted(() => {
      bookId.value = route.params.id as string;
      if (bookId.value) {
        book.value = homeStore.books.find((b: any) => b._id === bookId.value);
      }
      counterStore.getCartItems(bookId.value);
    });

    return {
      counterStore,
      book,
      bookId,
      route,
      homeStore,
    };
  },

  computed: {
    book(): Book | null {
      const homeStore = useHomeStore();
      const route = useRoute();
      return homeStore.books.find((book: any) => book._id === this.bookId) || null;
    },

    getQuantity() {
      const cartItem = this.counterStore.cartItems.find(
        (item: any) => item.product_id._id === this.bookId
      );
      return cartItem ? cartItem.quantityToBuy : 0;
    },
  },

  mounted() {
    const homeStore = useHomeStore();
    this.showFeedback();
    if (!this.book) {
      homeStore.fetchBooks();
    }
  },
  created() {
    const route = useRoute();
    this.bookId = route.params.id as string;
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
      <div id="fp-div1">
        <div class="first-partition">
          <div class="book-img">
            <img src="/src/assets/bookstore_imgs/Image 11@2x.png" />
          </div>
          <div class="fp-btns">
            <v-btn
              class="fp-vbtn"
              v-if="!inCart(book?._id)"
              style="background-color: darkred"
              @click="addItemFunc()"
              >add to bag</v-btn
            >
            <div class="counts-div" v-else>
              <div class="change-count" @click="decrementItem(getCartItemId(book?._id), counterStore.count)">
                -
              </div>
              <div class="count">{{ counterStore.count }}</div>
              <div
                class="change-count"
                @click="incrementItem(getCartItemId(book?._id), counterStore.count)"
              >
                +
              </div>
            </div>
            <v-btn class="fp-vbtn" style="background-color: black">
              <v-icon>mdi-heart</v-icon>
              <span>wishlist</span>
            </v-btn>
          </div>
        </div>
        <div class="second-partition">
          <div class="title-details">
            <div>
              <h6>{{ book?.bookName }}</h6>
            </div>
            <div class="mb-2">
              <label class="author-name">by {{ book?.author }}</label>
            </div>
            <div class="rt-div">
              <div class="rating">
                <label>4.5</label>
                <v-icon style="font-size: 15px">mdi-star</v-icon>
              </div>
              <label>(20)</label>
            </div>
            <div class="bk-price">
              <label class="d-price"> Rs. {{ book?.discountPrice }} </label>
              <label class="total">
                <s>Rs. {{ book?.price }}</s>
              </label>
            </div>
          </div>
          <br />
          <hr />
          <br />
          <div>
            <li id="bd-title">Book detail</li>
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
                hover
                active-color="#FFCE00"
              ></v-rating>
            </div>
            <v-textarea
              placeholder="Write your review"
              variant="solo"
              rows="2"
              v-model="comment"
            ></v-textarea>
            <div class="submit-btn">
              <v-btn id="sbm-bt" @click="submitFeedback()">Submit</v-btn>
            </div>
          </div>
          <div class="cmnt-parent">
            <br />
            <div
              class="comments"
              v-for="(feedback, index) in feedbacks"
              :key="index"
            >
              <br />
              <div class="n-l-div">
                <div class="name-logo">{{ feedback.user_id.fullName[0] }}</div>
                <div>
                  <h5>
                    <b>{{ feedback.user_id?.fullName }}</b>
                  </h5>
                </div>
              </div>
              <div class="text-left">
                <v-rating
                  v-model="feedback.rating"
                  readonly
                  active-color="#FFCE00"
                  class="comment-rating"
                  style="margin-left: 20px"
                ></v-rating>
              </div>
              <p class="comment-line" style="margin-left: 35px">
                {{ feedback.comment }}
              </p>
            </div>
            <br /><br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.counts-div {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 48%;
  justify-content: center;
}

.change-count {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: rgb(238, 238, 238);
  display: flex;
  font-size: 30px;
  justify-content: center;
  align-items: center;
}

.count {
  width: 66px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(238, 238, 238);
  font-size: 22px;
}

.container {
  margin-top: 80px;
  height: fit-content;
}

.main-content {
  width: 80%;
  height: fit-content;
  margin: auto;
}

.first-partition {
  width: 40%;
  height: 70vh;
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

.book-img img {
  width: 80%;
  height: 85%;
}

#fp-div1 {
  display: flex;
  margin-top: 30px;
}

.fp-btns {
  display: flex;
  margin-top: 20px;
  gap: 20px;
  width: 80%;
}

.fp-vbtn {
  color: white;
  text-transform: capitalize;
  width: 48%;
}

.second-partition {
  width: 60%;
  height: 100vh;
}

.bk-price {
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
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

hr {
  border-color: rgb(233, 233, 233);
}

div h5 {
  font-size: 20px;
}

#bd-title {
  font-size: 18px;
  color: gray;
}

label.d-price {
  font-size: 35px;
  font-weight: 600;
}

.author-name {
  font-size: 15px;
  color: gray;
  padding-bottom: 15px;
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

.n-l-div {
  display: flex;
  gap: 10px;
  align-items: center;
}

.cmnt-parent {
  height: 70vh;
  overflow-y: auto;
}

.comments h5 {
  font-size: 15px;
}

#sbm-bt {
  background-color: #3371b5;
  color: white;
  text-transform: capitalize;
}

.name-logo {
  display: flex;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #f5f5f5;
}

.text-left {
  height: 45px;
}
</style>
