import Vue from 'vue'
import Router from 'vue-router'

const home = r => require.ensure([], () => r(require('@/views/container/index')), 'home');

Vue.use(Router);

export const routes = [
    {
        path: '/login',
        name: '登录',
        component: resolve => require(['@/views/login.vue'], resolve),
        isMenu: false,
    },
    {
        path: '/',
        name: '首页',
        component: home,
        redirect: '/',
        icon: 'el-icon-s-shop',
        isMenu: true,
        children: [
            {
                path: '/',
                name: '首页',
                component: resolve => require(['@/views/home/index.vue'], resolve),
                icon: 'el-icon-s-shop',
                isMenu: true,
            }
        ]
    },
    {
        path: '/list',
        name: '组件',
        component: home,
        icon: 'el-icon-s-goods',
        isMenu: true,
        children: [
            {
                path: '/list',
                name: '列表',
                component: resolve => require(['@/views/home/list.vue'], resolve),
                icon: 'el-icon-s-order',
                isMenu: true,
            },
            {
                path: '/editor',
                name: '富文本',
                component: resolve => require(['@/views/home/editor.vue'], resolve),
                icon: 'el-icon-s-data',
                isMenu: true,
            },
            {
                path: '/form',
                name: '表单',
                component: resolve => require(['@/views/home/form.vue'], resolve),
                icon: 'el-icon-s-grid',
                isMenu: true,
            },
            {
                path: '/detail',
                name: '详情',
                component: resolve => require(['@/views/home/detail.vue'], resolve),
                icon: 'el-icon-s-claim',
                isMenu: true,
            },
        ]
    }

];
const createRouter = () => new Router({
    mode: 'history',
    scrollBehavior: () => ({y: 0}),
    routes,
    strict: process.env.NODE_ENV !== 'production',
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}
router.beforeEach((to, from, next) => {
    document.title = to.name;
    // if (to.path === '/login') {
    //     next()
    // } else {
    //     let token = localStorage.getItem('token')
    //     if (token === null || token === '') {
    //         next('/login')
    //     } else {
            next()
    //     }
    // }
})
export default router;
