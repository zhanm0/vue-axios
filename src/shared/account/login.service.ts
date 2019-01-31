import fetch from "@/shared/api/request";

export const LoginService = {
    //登录获取验证码
    getCodes: (params: any) => fetch('/account/api', params, 'POST'),
    login: (params: any) => fetch('/account/api', params, 'POST'),

};