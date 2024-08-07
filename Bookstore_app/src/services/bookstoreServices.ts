import { Post,Get,Put,Delete } from './axiosServices'

const token = localStorage.getItem('x-access-token')

export const getBooksServices = () => {
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token':token
    }
    return Get('bookstore_user/get/book', {headers})
  }


export const addCartItemServices = (id:string|string[]) =>{
  console.log(token)
  const data={}
  const headers = {
    'Content-Type':'application/json',
    'x-access-token':token
  }
  return Post(`bookstore_user/add_cart_item/${id}`,data,{headers})
}

export const removeCartItemServices = (id:string|string[]) =>{
const t = localStorage.getItem('x-access-token')

  const headers = {
    'Content-Type':'application/json',
    'x-access-token':t
  }
  return Delete(`bookstore_user/remove_cart_item/${id}`,{headers})
}


export const getCartItemsServices = () =>{
  const headers = {
    'Content-Type':'application/json',
    'x-access-token':token
  }
  return Get(`bookstore_user/get_cart_items`,{headers})
}

export const updateCartItemQuantityServices = (cartItem_id:string,reqdata:object) =>{
  console.log('reqdata is',reqdata)
  const headers = {
    'Content-Type':'application/json',
    'x-access-token':token
  }
  return Put(`bookstore_user/cart_item_quantity/${cartItem_id}`,reqdata,{headers})
}


export const getFeedbackServices = (id:string|string[]) =>{
  const headers = {
    'Content-Type':'application/json',
    'x-access-token':token
  }
  return Get(`bookstore_user/get/feedback/${id}`,{headers})
}

export const addFeedbackServices = (id:string|string[],data:Object) =>{
  const headers = {
    'Content-Type':'application/json',
    'x-access-token':token
  }
  return Post(`bookstore_user/add/feedback/${id}`,data,{headers})
}


// wishlist

export const getWishlistItemsServices = () =>{
  const headers = {
    'Content-Type':'application/json',
    'x-access-token':token
  }
  return Get(`bookstore_user/get_wishlist_items`,{headers})
}


export const addWishlistItemServices = (product_id:string|string[]) =>{
  const data = {}
  const headers = {
    'Content-Type':'application/json',
    'x-access-token':token
  }
  return Post(`bookstore_user/add_wish_list/${product_id}`,data,{headers})
}


export const removeWishlistItemServices = (product_id:string|string[]) =>{
  const headers = {
    'Content-Type':'application/json',
    'x-access-token':token
  }
  return Delete(`bookstore_user/remove_wishlist_item/${product_id}`,{headers})
}