import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { updateCartItemQuantityServices,getCartItemsServices,removeCartItemServices } from '@/services/bookstoreServices'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  const cartItems =ref([])
  
  function increment(cartItem_id: string,quantity:number) {
    count.value = quantity + 1
    const reqData = {
      "quantityToBuy": count.value
    }
    updateCartItemQuantityServices(cartItem_id,reqData)
    .then(response => {
      console.log('Quantity increased:', response);
    })
    .catch(error => {
      console.log('Error increasing quantity:', error);
    });
    
  }

  function decrement(cartItem_id: string, quantity: number){
    
    if (quantity > 0) {
      count.value = quantity - 1;

      if (count.value!==0){
        const reqData = {
          quantityToBuy: count.value,
        };
        updateCartItemQuantityServices(cartItem_id, reqData)
          .then(response => {
            console.log('Quantity decreased:', response);
          })
          .catch(error => {
            console.log('Error decreasing quantity:', error);
          });
      }else{
        removeCartItemServices(cartItem_id)
        .then(response => {
          console.log('Cart item removed:', response);
        })
        .catch(error => {
          console.log('Error removing item:', error);
        });
      }

    }
  }

  function getCartItems(bookId: string | null) {
    getCartItemsServices()
      .then((response) => {
        cartItems.value = response.data.result; 
        if (bookId) {
          const cartItem = cartItems.value.find(item => item.product_id._id === bookId);
          count.value = cartItem ? cartItem.quantityToBuy : 0; 
        }
      })
      .catch((error) => {
        console.log("Error fetching cart items:", error);
      });
  }

  return { count, doubleCount, increment,decrement,getCartItems, cartItems }
})
