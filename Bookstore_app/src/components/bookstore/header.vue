<script lang="ts">
import { useHomeStore } from '@/stores/homeStore';
import { ref } from 'vue';
export default {
  name: "Header",
  data: () => ({
      loaded: false,
      loading: false,
    }),

    methods: {
      onClick () {
        this.loading = true

        setTimeout(() => {
          this.loading = false
          this.loaded = true
        }, 2000)
      },
    },

    setup() {
    const homeStore = useHomeStore();
    const searchQuery = ref('');

    const onSearch = (event:KeyboardEvent) => {
      const target = event.target;
      console.log('Typed:', target.value);
      homeStore.setSearchQuery(searchQuery.value);
      console.log(homeStore.filteredBooks)
    };

    return {
      homeStore,
      onSearch,
      searchQuery,
    };
  },
};
</script>

<template>
 
    <v-layout>     
      <v-app-bar color="#8b0000">
        <div class="header-div">
        <img class="title" src="/src/assets/bookstore_imgs/education.svg"/>
        
        <h1 class="title">Bookstore</h1>

        <div class="search-div" width="100%">
            <v-text-field
        v-model="searchQuery"
        :loading="loading"
        prepend-inner-icon="mdi-magnify"
        density="compact"
        placeholder="Search..."
        variant="solo-filled"
        hide-details
        single-line
        @click:append-inner="onClick"
        @keyup="onSearch"
      ></v-text-field>
        </div>
        <v-spacer class="spacer"></v-spacer>

        <div>
        <v-btn icon class="header-items">
            <div class="item">
          <v-icon>mdi-account</v-icon>
          <label>Profile</label>
             </div>
        </v-btn>
        </div>

        <div>
        <v-btn icon class="header-items">
            <div class="item">
          <v-icon>mdi-cart</v-icon>
          <label>Cart</label>
             </div>
        </v-btn>
        </div>
        </div>
      </v-app-bar>    
    </v-layout>
</template>

<style scoped>

.header-div{
    display: flex;
    width: 80%;
    height: 100%;
    margin: auto;
    align-items: center;
}

.search-div{
    width: 50%;
    margin-left: 30px;
}

.title{
    margin: 5px;
    font-size: 25px;
}

.header-items{
    margin: 20px;
    
}

.item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
}


label{
    font-size: 10px;
}


@media only screen and (max-width:600px) {
    .header-items{
    margin: 5px;
    
}

.search-div{
    width: 20%;
    margin-left: 10px;
    margin-right: 10px;
}

.spacer{
    display: none;
}

}

</style>