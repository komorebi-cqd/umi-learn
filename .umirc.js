export default {
    routes:[
        {
            page:'/',component: '../layouts/index',exact: false,
            routes:[
                {path: '/',component: './index',title: '首页'},
                {path: '/welcome',component: './welcome',title: '欢迎页'},
                {path: '/login',component: './login',title: '登录页'},
            ]
        },
    ]
}