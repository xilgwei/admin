import axios from 'axios'
import {BASE_URL} from './env'
import router from '@/router'

const service = axios.create({
    baseURL: BASE_URL, // url = base url + request url
    withCredentials: false, // send cookies when cross-domain requests
    timeout: 500000 // request timeout
})
service.interceptors.request.use(
    config => {
        if (localStorage.getItem('token')) {
            config.headers.token = localStorage.getItem('token')
        }
        return config
    },
    error => {

        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    response => {
        if (response.status == 203) {
            router.replace({
                path: '/login',
                query: {redirect: router.currentRoute.fullPath}//当前页面
            })
        }
        return response
    },
    error => {
        return Promise.reject(error)
    }
);

export default service
