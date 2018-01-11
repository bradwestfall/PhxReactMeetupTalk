import axios from 'axios'

const xhr = axios.create({
  baseURL: 'https://reqres.in/api'
})

xhr.interceptors.response.use(response => {
  return response.data
}, error => {
  return Promise.reject(error);
})

export default xhr