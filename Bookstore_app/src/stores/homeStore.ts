import { defineStore } from "pinia";
import {
  getBooksServices,
  getWishlistItemsServices,
  removeWishlistItemServices,
} from "@/services/bookstoreServices";

interface Wishlistitem {
  _id: string;
  user_id: string;
  product_id: {
    _id: string;
    description: string;
    discountPrice: number;
    bookImage: string | null;
    bookName: string;
    author: string;
    quantity: number;
    price: number;
  } | null;
}

export const useHomeStore = defineStore("homeStore", {
  state: () => ({
    books: [] as Array<{ [key: string]: any }>,
    searchQuery: "",
    selectedBook: null as { [key: string]: any } | null,
    wishlist_items: [] as Wishlistitem[],
  }),
  actions: {
    async fetchBooks() {
      try {
        const response = await getBooksServices();
        this.books = response.data.result;
      } catch (error) {
        console.error(error);
      }
    },

    setSearchQuery(query: string) {
      this.searchQuery = query;
    },

    selectBook(book: { [key: string]: any }) {
      this.selectedBook = book;
    },

    getWishlistItems() {
      getWishlistItemsServices()
        .then((response) => {
          console.log(response);
          this.wishlist_items = response.data.result;
          this.wishlist_items = this.wishlist_items.filter(
            (item) => item.product_id !== null
          );
        })
        .catch((error) => {
          console.error("Error fetching wishlist items:", error);
        });
    },

    deleteWishlistItem(id) {
      removeWishlistItemServices(id)
        .then((response) => {
          console.log(response);
          this.getWishlistItems()
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {
    filteredBooks: (state) => {
      if (state.searchQuery.trim() === "") {
        return state.books;
      }

      const filterText = state.searchQuery.toLowerCase().trim();
      return state.books.filter(
        (book) =>
          book.bookName.toLowerCase().includes(filterText) ||
          book.description.toLowerCase().includes(filterText)
      );
    },
  },
});
