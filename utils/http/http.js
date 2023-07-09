import Axios from "axios";

// Create Axios Instance
export const axios = Axios.create({
  // baseURL: "https://dummyjson.com",
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})