import axios from 'axios'

const axiosInstance=axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {'X-Custom-Header': 'foobar'}
})

export default axiosInstance;