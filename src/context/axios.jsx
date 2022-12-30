import axios from "axios"

const baseURL = process.env.REACT_APP_BACKEND_URL
let headers = {}

if (localStorage.token) {
    headers.Authorization = `bearer ${localStorage.token}`
}

console.log('base url', baseURL)
console.log('headers', headers)

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: headers, 
})

export default axiosInstance
