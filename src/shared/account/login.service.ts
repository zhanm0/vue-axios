import fetch from "@/shared/api/request";
import {APIGetImageCodeMsg, APILogInByAccountMsg, LoginByAccountInventory} from "@/shared/account/api";

export const LoginService = {
    //登录获取验证码
    getCodes: () => {
        const params = new APIGetImageCodeMsg();
        return fetch(params, 'POST');
    },
    login: (model: LoginByAccountInventory) => {
        const params = new APILogInByAccountMsg();
        params.accountName = model.accountName;
        params.password = model.password;
        params.imageCode = model.imageCode;
        params.imageUuid = model.imageUuid;
        return fetch(params, 'POST');
    },

};