import request from '@/config/request'

export function userInfo(data) {
    return request({
        url: 'users/info',
        method: 'post',
        data: data
    })
}
