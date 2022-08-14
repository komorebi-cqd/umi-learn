export default {
    title: '我的网站',
    dva:{
        hmr: true,
    },
    // cssModulesTypescriptLoader:{},
    routes:[
        {
            page:'/',component: '../layouts/index',exact: false,
            routes:[
                {path: '/',component: './index',title: '首页'},
                {path: '/welcome',component: './welcome',title: '欢迎页'},
                {path: '/login',component: './login' },
            ]
        },
    ]
}