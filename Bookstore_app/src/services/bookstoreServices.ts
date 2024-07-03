import { Post,Get } from './axiosServices'

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
  const data={}
  const headers = {
    'Content-Type':'application/json',
    'x-access-token':token
  }
  return Post(`bookstore_user/remove_cart_item/${id}`,data,{headers})
}


export const getCartItemsServices = () =>{
  const headers = {
    'Content-Type':'application/json',
    'x-access-token':token
  }
  return Get(`bookstore_user/get_cart_items`,{headers})
}


export const getFeedbackServices = (id:string|string[]) =>{
  const headers = {
    'Content-Type':'application/json',
    'x-access-token':token
  }
  return Get(`bookstore_user/get/feedback/${id}`,{headers})
}