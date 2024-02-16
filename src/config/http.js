import axios from 'axios'

const http = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + (sessionStorage.getItem('token') || ''),
        'utm_source': import.meta.env.VITE_APP_NAME + '-web'
    }
})

http.setToken = function (token) {
    this.defaults.headers['Authorization'] = 'Bearer ' + token
}
export default http