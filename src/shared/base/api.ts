export enum APIPathFlag {
    Account = 'account',
}
export class SessionInventory {
    uuid: string;
    accountUuid: string;
    userUuid: string;
    type: string;
}
export interface APIMessage {
    session: SessionInventory;
    flag: APIPathFlag;
    toApiMap(): any;
}
export class QueryCondition {
    name: string;
    op: string;
    value: string;
}
export class QueryObject {
    start: number;
    limit: number;
    sortBy: string;
    groupBy: string;
    sortDirection: string;
    count: boolean;
    fields: Array<string>;
    replySharedResource: boolean;
    onlySelf: boolean;
    noError: boolean;
    replyWidthCount = true;
    conditions: QueryCondition[];
    addCondition(cond: QueryCondition) {
        if (!this.conditions) {
            this.conditions = [];
        }
        this.conditions.push(cond);
    }
}
export class APIQueryMsg {
    conditions: Array<QueryCondition>;
    limit: number;
    start: number;
    count: boolean;
    sortBy: string;
    groupBy: string;
    sortDirection: string;
    fields: Array<string>;
    replyWithCount = true;
    noError: boolean;
    timeout: number;
}
export class APIReply {
    success: boolean;
    error: ErrorCode;
}
export class APIEvent {
    success: boolean;
    error: ErrorCode;
}
export class ErrorCode {
    code: string;
    description: string;
    details: string;
}
