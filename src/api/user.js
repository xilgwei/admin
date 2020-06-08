import request from '@/config/request'

var user = {}
user.propotype.userInfo = function() {
    return request({
        url: 'users/info',
        method: 'post',
        data: {}
    })
}

export default user
