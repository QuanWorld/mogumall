import axios from 'axios'

export function request(config) {
    // 创建axios实例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout: '5000'
    })
    // 请求拦截
    instance.interceptors.request.use(config => {
        // 1.当发送网络请求时, 在页面中添加一个loading组件, 作为动画
        // 2.某些请求要求用户必须登录, 判断用户是否有token, 如果没有token跳转到login页面
        // 3.对请求的参数进行序列化(看服务器是否需要序列化)
        return config
    }, err => {
        // console.log('来到了request拦截failure中');
        return err
    })
    //响应拦截
    instance.interceptors.response.use(response => {
        return response.data
    }, err => {
        if (err && err.response) {
            switch (err.response.status) {
                case 400:
                    err.message = '请求错误'
                    break
                case 401:
                    err.message = '未授权的访问'
                    break
            }
        }
        return err
    })
    // 网络请求
    return instance(config)
}