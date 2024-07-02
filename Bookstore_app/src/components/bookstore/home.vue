<script lang="ts">
import Header from "./header.vue";
import { getBooksServices } from "@/services/bookstoreServices";
import { useHomeStore } from "@/stores/homeStore";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "Home",
  data: () => ({
    loaded: false,
    loading: false,
    page: 1,
    books: [],
  }),

  components: {
    Header,
  },

  computed: {
    books() {
      const homeStore = useHomeStore();
      return homeStore.filteredBooks;
    },
  },

  methods: {
    getAllBooks() {
      getBooksServices().then((response) => {
        console.log(response);
        this.books = response.data.result;
        console.log("books are", this.books);
      });
    },
  },

  setup() {
    const homeStore = useHomeStore();
    const router = useRouter();

    const runBookDetail = (book: { [key: string]: any }) => {
      homeStore.selectBook(book);
      router.push(`/book-detail/${book._id}`);
    };

    onMounted(() => {
      homeStore.fetchBooks();
    });

    return {
      homeStore,
      runBookDetail,
    };
  },

  created() {
    this.getAllBooks();
  },
};
</script>

<template>
  <div>
    <Header />
  </div>

  <div class="main">
    <div class="title-sort">
      <div>
      <h3>Books ({{ books.length }} items)</h3>
      </div>
      <div>
        <select name="sorting">
          <option value="volvo">Sort by relevance  &#8595 </option>
          <option value="saab">Low to high price</option>
          <option value="opel">High to low price</option>
        </select>
      </div>
    </div>
    <div class="books-container">
      <div
        class="book-card"
        v-for="(book, index) in homeStore.filteredBooks"
        @click="runBookDetail(book)"
      >
        <div class="book-img">
          <img src="/src/assets/bookstore_imgs/Image 11.png" alt="" />
        </div>
        <div class="book-content">
          <h6>{{ book.bookName }}</h6>
          <label>By {{ book.author }}</label>
          <div class="rt-div">
            <div class="rating">
              <label>4.5</label>
              <v-icon style="font-size: 10px">mdi-star</v-icon>
            </div>
            <label>(20)</label>
          </div>
          <div class="bk-price">
            <label
              ><b>Rs.{{ book.discountPrice }}</b></label
            >
            <label
              ><s>Rs.{{ book.price }}</s></label
            >
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
    <br />
  </div>
  <div class="px-8 py-3 bg-black text-left w-100" id="footer">
    <div class="footer-text">
      <label
        >Copyright &copy 2020, Bookstore Private Limited. All Rights
        Reserved</label
      >
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
}

.title-sort{
  display: flex;
  justify-content: space-between;
  width: 96%;
}

select{
  border: 1px solid rgb(222, 222, 222);
  font-size: small;
  padding-left: 5px;
  padding-right: 5px;
  
}

.book-card {
  display: flex;
  flex-direction: column;
  border: 0.5px solid rgb(222, 222, 222);
  width: 250px;
  height: 290px;
  margin: 0;
}

.book-img {
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60%;
}

.book-content {
  padding-left: 20px;
}

.book-content h6 {
  font-size: 15px;
  font-weight: bold;
}

.book-content label {
  font-size: small;
}

.rt-div {
  display: flex;
  align-items: center;
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

.rating label {
  font-size: 10px;
}

.bk-price {
  display: flex;
  gap: 10px;
}

#footer {
  height: 50px;
  display: flex;
  position: absolute;
  bottom: -100;
}

.footer-text {
  width: 80%;
  margin: auto;
  font-size: small;
}
</style>
