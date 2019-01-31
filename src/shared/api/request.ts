import axios from './axios'
import Qs from 'qs';
// var Qs = require('qs');
// import * as Qs from 'qs';

export default async(url:any, params:any = {}, method = 'POST', isUpload = false) =>{
    method = method.toUpperCase();
    params = params.toApiMap();
    if(method==='GET'){
        const res = await axios.get(url, {
            params
        });
        return res.data;
    }else if(method === 'POST'){
        /*
        * POST传参序列化
        * 允许在向服务器发送前，修改请求数据
        * 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
        * 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
        * */
        const normal = {
            transformRequest: [
                function (data: any) {
                    // 对 data 进行任意转换处理
                    return Qs.stringify(data);
                }
            ]
        };
        const upload = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        };
        // 因本项目后台不需要formdata格式，所以不需要序列化
        // const res = await axios.post(url, params, isUpload ? upload : normal);
        let res;
        if(isUpload){
            res = await axios.post(url, params, upload);
        }else {
            res = await axios.post(url, params);
        }

        return res;
    }
}
