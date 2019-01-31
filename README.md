# vue-axios
基于axios封装了一下http请求

1. master-fix分支上写的是通用请求格式
    export default async(url:any, params:any = {}, method = 'POST', isUpload = false) =>{...}
2. dev分支上是定制版的请求格式
    export default async(params:any = {} , method = 'POST', isUpload = false) =>{...}
    因为该项目请求url是一样的，后台根据params里的key去判断该请求消息的作用
    ```
     {"com.syscxp.account.header.identity.APILogInByAccountMsg":{
          "flag":"account",
          "accountName":"admin",
          "password":"b109f3bbbc244eb8244191...2ea6d103fd07c95385ffab0cacbc86",
          "imageCode":"cw28",
          "imageUuid":"2eb6eeaccd374a509e40bfbd483a8402"
      }}
      ```
