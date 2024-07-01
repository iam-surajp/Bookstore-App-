const BASE_URL = "https://bookstore.incubation.bridgelabz.com/"

import axios from 'axios'
 
export const Post = (url:string,data:Object,config={})=> 
    axios.post(BASE_URL+url,data,config)

export const Get = (url:string, config = {}) => 
    axios.get(BASE_URL + url, config)