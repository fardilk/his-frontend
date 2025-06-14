import axios from 'axios'

const api = axios.create({
  baseURL: 'http://your-laravel-domain.test/api',
  withCredentials: true,
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    if (!config.headers) config.headers = {}
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api
