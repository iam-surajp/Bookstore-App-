import { defineStore } from 'pinia';
import { getFeedbackServices, getBooksServices } from '@/services/bookstoreServices';

export const useHomeStore = defineStore('homeStore', {
  state: () => ({
    books: [] as Array<{ [key: string]: any }>,
    searchQuery: '',
    selectedBook: null as { [key: string]: any } | null,
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
  },
  getters: {
    filteredBooks: (state) => {
      if (state.searchQuery.trim() === '') {
        return state.books;
      }

      const filterText = state.searchQuery.toLowerCase().trim();
      return state.books.filter((book) =>
        book.bookName.toLowerCase().includes(filterText) ||
        book.description.toLowerCase().includes(filterText)
      );
    },
  },
});
