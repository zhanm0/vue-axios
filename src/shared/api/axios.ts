import axios from 'axios';
import {APIMessage, APIPathFlag} from "@/shared/base/api";

/**
* axios 配置
* timeout：指定请求超时的毫秒数(0 表示无超时时间)，如果请求话费了超过 `timeout` 的时间，请求将被中断
* baseURL: 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL
*          它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
* */
axios.defaults.timeout = 5000; //
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.baseURL = 'http://localhost:8080';
/*
* POST传参序列化
* 允许在向服务器发送前，修改请求数据
* 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
* 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
*
* 因为需要判断是否是上传的文件，所以将该判断写到request.ts里
* */
/*axios.defaults.transformRequest = [function (data) {
    if(axios.defaults.method==='POST'){
        // 对 data 进行任意转换处理
        return qs.stringify(data);
    }
}]*/

/**
 *
 * 拦截器
 * axios.interceptors.request.use 发送请求前处理
 * axios.interceptors.response.use 接受返回后，回调之前处理
* */

//请求拦截
axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    console.log(2)
    console.log(config)
    // console.log(getResult(config));

    return config;
}, error => {
    // 对请求错误做些什么

    return Promise.reject(error);
});

//

/**
 * 响应拦截
 * 在请求或响应被 then 或 catch 处理前拦截它们。
* */
axios.interceptors.response.use(res => {
    let data = getResult(res);
    if(!data.success){
        return Promise.reject(res);
    }
    return data;
}, error => {
    return Promise.reject(error);
});

export default axios;

/**
 * 获取result
**/
export const getResult = (res:any) => {
    let result = JSON.parse(res.data.result);
    let key = Object.keys(result);
    return result[key[0]];
};

/**
 * 不同的api存放地址不同
 **/
const path = {
    accountPath: '/account/api',
};
export const getUrl = (msg: APIMessage, id?: string) => {
    const suffix = id ? '/result/' + id : '';
    if (msg.flag === APIPathFlag.Account) {
        return path.accountPath + suffix;
    }
};