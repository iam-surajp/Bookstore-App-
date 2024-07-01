import { Post,Get } from './axiosServices'

const token = localStorage.getItem('access-token')

export const getBooksServices = () => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization:token
    }
    return Get('bookstore_user/get/book', {headers})
  }