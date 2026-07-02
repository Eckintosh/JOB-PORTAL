import axios from "axios"
import { BASE_URL } from "./apiPath"

// Create Axios instance
const axiosInstance = axios.create({
    baseURL : BASE_URL,
    timeout : 80000,
    headers : {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
    }
})

//! Request interceptor to add token
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

//! Response interceptor
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle token expiration
        if (error.response && error.response.status === 401) {
            localStorage.removeItem("token")
            localStorage.removeItem("user")
            window.location.href = "/login"
        }
        return Promise.reject(error)
    }
)

export default axiosInstance