import { Post,Get } from './axiosServices'

export const registerUserServices = (reqData:Object) => {
    const headers = {
      'Content-Type': 'application/json'
    }
    return Post('bookstore_user/registration', reqData, {headers})
  }



  export const loginUserServices = (reqData:Object) => {
    const headers = {
      'Content-Type': 'application/json'
    }
    return Post('bookstore_user/login', reqData, {headers})
  }
