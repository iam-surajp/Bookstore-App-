<script lang="ts">
import { useHomeStore } from "@/stores/homeStore";
import { getCartItemsServices } from "@/services/bookstoreServices";
import { ref } from "vue";
export default {
  name: "Header",
  data: () => ({
    loaded: false,
    loading: false,
    allCartItems: [],
    items: [
      { title: "Profile", icon: "mdi-account-outline" },
      { title: "My Orders", icon: "mdi-shopping-outline" },
      { title: "My Wishlist", icon: "mdi-heart-outline" },
    ],
    location:'bottom',
    cartItemsCount:0
  }),

  methods: {
    onClick() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.loaded = true;
      }, 2000);
    },

    getCartItems() {
      getCartItemsServices()
        .then((response) => {
          console.log(response);
          this.allCartItems = response.data.result;
          this.cartItemsCount = this.allCartItems.length 
          // console.log('all cart items',this.allCartItems)
        })
        .catch((error) => {
          console.log(error);
        });
    },

    logout_user(){
      localStorage.removeItem('x-access-token')
      this.$router.push('signup')
    }
  },

  setup() {
    const homeStore = useHomeStore();
    const searchQuery = ref("");

    const onSearch = (event: KeyboardEvent) => {
      const target = event.target;
      console.log("Typed:", target.value);
      homeStore.setSearchQuery(searchQuery.value);
      console.log(homeStore.filteredBooks);
    };

    return {
      homeStore,
      onSearch,
      searchQuery,
    };
  },

  mounted() {
    this.getCartItems();
  },
};
</script>

<template>
  <v-layout>
    <v-app-bar color="#8b0000">
      <div class="header-div">
        <img class="title" src="/src/assets/bookstore_imgs/education.svg" />

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
          <v-menu transition="slide-x-transition" :location="this.location">
            <template v-slot:activator="{ props }">
              <v-btn icon class="header-items" v-bind="props">
                <div class="item">
                  <v-icon>mdi-account</v-icon>
                  <label>Profile</label>
                </div>
              </v-btn>
            </template>

            <div style="width: 200px;">
              <v-list>
                <div>
                  <h6 style="font-weight: 700; font-size: 15px;padding-left: 20px">
                    Hello Suraj,
                  </h6>
                </div>
                <v-list-item v-for="(item, i) in items" :key="i">
                  <div class="profile-items">
                    <v-icon>{{ item.icon }}</v-icon>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </div>
                </v-list-item>
                <v-btn class="logout-btn" @click="logout_user()">Logout</v-btn>
              </v-list>
            </div>
          </v-menu>
        </div>

        <div>
          <v-btn icon class="header-items">
            <div class="item">
              <v-badge color="white" :content="this.cartItemsCount">
                <v-icon>mdi-cart</v-icon>
              </v-badge>
              <label>Cart</label>
            </div>
          </v-btn>
        </div>
      </div>
    </v-app-bar>
  </v-layout>
</template>

<style scoped>
.header-div {
  display: flex;
  width: 80%;
  height: 100%;
  margin: auto;
  align-items: center;
}

.search-div {
  width: 50%;
  margin-left: 30px;
}

.title {
  margin: 5px;
  font-size: 25px;
}

.header-items {
  margin: 20px;
}

.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
}

label {
  font-size: 10px;
}

.v-list-item--density-default{
  min-height: 5px !important;
}

.profile-items{
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 10px;
  cursor: pointer;
}

.logout-btn{
  border: 1px solid red;
  padding: 10px;
  margin-left: 15px;
  font-size: 15px;
  width: 80%;
  text-transform: capitalize;
  color: red
}


@media only screen and (max-width: 600px) {
  .header-items {
    margin: 5px;
  }

  .search-div {
    width: 20%;
    margin-left: 10px;
    margin-right: 10px;
  }

  .spacer {
    display: none;
  }
}


</style>
