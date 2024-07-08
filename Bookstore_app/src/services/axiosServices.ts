const BASE_URL = "https://bookstore.incubation.bridgelabz.com/"

import axios from 'axios'
 
export const Post = (url:string,data:Object,config={})=> 
    axios.post(BASE_URL+url,data,config)

export const Get = (url:string, config = {}) => 
    axios.get(BASE_URL + url, config)

export const Put = (url:string,data:object, config = {}) => 
    axios.put(BASE_URL + url,data, config)

export const Delete = (url:string,data:object, config = {}) => 
    axios.delete(BASE_URL + url,config)