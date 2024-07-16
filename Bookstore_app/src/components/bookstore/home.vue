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
    sortOption: 'relevance',
    currentPage: 1,
    perPage: 12
  }),

  components: {
    Header,
  },

  computed: {
    sortedBooks() {
      const homeStore = useHomeStore();
      const sortedBooks = [...homeStore.filteredBooks];
      if (this.sortOption === 'priceLowToHigh') {
        return sortedBooks.sort((a, b) => a.discountPrice - b.discountPrice);
      } else if (this.sortOption === 'priceHighToLow') {
        return sortedBooks.sort((a, b) => b.discountPrice - a.discountPrice);
      }
      return sortedBooks;
    },

    totalPages() {
      return Math.ceil(this.sortedBooks.length / this.perPage);
    },
    paginatedItems() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.sortedBooks.slice(start, end);
    }
  },

  methods: {
    getAllBooks() {
      getBooksServices().then((response) => {
        console.log(response);
        this.books = response.data.result;
        console.log("books are", this.books);
      });
    },
    sortBooks(event) {
      this.sortOption = event.target.value;
    },

    onPageChange(page) {
      this.currentPage = page;
    }
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
        <select name="sorting" @change="sortBooks">
          <option value="relevance">Sort by relevance  &#8595 </option>
          <option value="priceLowToHigh">Price low to high </option>
          <option value="priceHighToLow">Price high to low </option>
        </select>
      </div>
    </div>
    <div class="books-container" v-if="books.length!=0">
      <div
        class="book-card"
        v-for="(book, index) in paginatedItems"
        @click="runBookDetail(book)"
      >
        <div class="book-img">
          <img src="/src/assets/bookstore_imgs/Image 11.png" alt="" />
        </div>
        <div class="book-content">
          <h6>{{ book.bookName }}</h6>
          <label>by {{ book.author }}</label>
          <div class="rt-div">
            <div class="rating">
              <label>4.5</label>
              <v-icon style="font-size: 10px">mdi-star</v-icon>
            </div>
            <label>(20)</label>
          </div>
          <div class="bk-price">
            <label class="mr-2"
              ><b>Rs.{{ book.discountPrice }} </b></label
            >
            <label
              ><s>Rs.{{ book.price }}</s></label
            >
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="loader">
        <v-progress-circular
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
    Fetching books... 
  </div>
    </div>
    <div class="pagination">
      <v-pagination
        v-model="currentPage"
        :length="totalPages"
        :total-visible="3"
        @input="onPageChange"
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

.loader{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20%;
  padding-bottom: 10%;
  gap: 10px;
}


@media only screen and (max-width:440px){
  .books-container{
    width: 100%;
  }

  .book-card{
    width: 80%;
  }
}


@media screen and ( max-width:576px){
  .book-card{
    width:40%;
    min-width: 150px;
  }

  .books-container{
    justify-content: center;
    gap:15px
  }

  .book-content h6{
    text-overflow: ellipsis;
  }

  .title-sort{
    flex-direction: column
  }
  
  .pagination{
    width: 20%;
    margin:auto
  }
}

@media only screen and (max-width:768px) {
  .book-card{
    width: 35%;
  }

  .books-container{
    gap:20px
  }
}

@media only screen and (max-width:992px){

  .books-container{
    justify-content: center;
    width: 100%;
    gap: 20px;
    padding: 5px;
  }

  .main{
    width: 100%;
  }

  .title-sort{
    padding:0% 5% 0% 8% ;
  }
}


@media only screen and (min-width:993px){
  .book-card{
    width: 250px;
  }
  .books-container{
    justify-content: center;
  }
  .main{
    width: 85%;
  }

  .title-sort{
    padding:0% 5% 0% 8% ;
  }
}

</style>
