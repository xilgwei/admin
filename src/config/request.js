import axios from 'axios'
import {BASE_URL} from './env'

const service = axios.create({
    baseURL: BASE_URL, // url = base url + request url
    withCredentials: false, // send cookies when cross-domain requests
    timeout: 500000 // request timeout
})
service.interceptors.request.use(
    config => {

        return config
    },
    error => {

        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    response => {
        const res = response.data;

        return res
    },
    error => {
        return Promise.reject(error)
    }
);

export default service
