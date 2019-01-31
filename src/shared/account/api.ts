import {APIMessage, APIPathFlag, APIQueryMsg, SessionInventory} from "@/shared/base/api";


export class APIGetImageCodeMsg implements APIMessage{
    session: SessionInventory;
    flag = APIPathFlag.Account;
    toApiMap(): any{
        var msg={
            'com.syscxp.sms.header.APIGetImageCodeMsg':this
        };
        return msg;
    }
}

export class APILogInByAccountMsg implements APIMessage{
    accountName: string;
    password: string;
    imageUuid: string;
    imageCode: string;

    session: SessionInventory;
    flag = APIPathFlag.Account;
    toApiMap(): any{
        var msg={
            'com.syscxp.account.header.identity.APILogInByAccountMsg':this
        };
        return msg;
    }
}