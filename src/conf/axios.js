import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://13.74.82.56/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default instance