<template>
    <div class="login-modal">
        <div class="login-header">
            <a href="#"><img src="/cxpstatics/images/logo.png"></a>
            <!--<a href="#"><img src="~images/logo.png"></a>-->
        </div>
        <div class="login-content">
            <h2>犀思云后台管理系统</h2>
            <ul class="login-role-container">
                <li :class="{active: loginInfo.isAccount}" @click="checkAccount">账户登录</li>
                <li :class="{active: !loginInfo.isAccount}" @click="checkAccount">子用户登录</li>
            </ul>

            <form class="login-form" name="loginForm">
                <div class="login-form-group">
                    <label class="iconfont icon-user login-form-group-left" for="user"></label>
                    <div class="login-form-group-right">
                        <input class="form-control" v-model="loginInfo.name" type="text" id="user" name="user" :placeholder="loginInfo.placeholder" required min="5" max="128" @blur="blurValidate.name=true">
                    </div>
                    <div class="error" v-show="blurValidate.name">
                        <div v-if="loginInfo.name.length===0">{{loginInfo.placeholder}}不能为空</div>
                        <div v-else-if="loginInfo.name.length<5">{{loginInfo.placeholder}}不能小于5位</div>
                        <div v-else-if="loginInfo.name.length>128">{{loginInfo.placeholder}}不能大于128位</div>
                    </div>
                </div>

                <div class="login-form-group">
                    <label class="iconfont icon-password login-form-group-left" for="password"></label>
                    <div class="login-form-group-right">
                        <input class="form-control" v-model="loginInfo.password" id="password" name="password" type="password" placeholder="密码" required max="128" min="6" @blur="blurValidate.password=true">
                    </div>
                    <div class="error" v-show="blurValidate.password">
                        <div v-if="loginInfo.password.length===0">密码不能为空</div>
                        <div v-else-if="loginInfo.password.length<5">密码不能小于6位</div>
                        <div v-else-if="loginInfo.password.length>128">密码不能大于128位</div>
                    </div>
                </div>

                <div class="login-form-group">
                    <label class="iconfont icon-password login-form-group-left" for="imageCode"></label>
                    <div class="login-form-group-right">
                        <input class="form-control" v-model="loginInfo.imageCode" id="imageCode" name="imageCode" type="text" placeholder="验证码" required min="4" @blur="blurValidate.imageCode=true">
                        <img class="validate-code" :src="'data:image/png;base64,'+loginInfo.imageBase64" @click="getCode">
                    </div>
                    <div class="error" v-show="blurValidate.imageCode">
                        <div v-if="loginInfo.imageCode.length===0">验证码不能为空</div>
                        <div v-else-if="loginInfo.imageCode.length<4">验证码为4位</div>
                    </div>
                </div>

                <div class="login-form-group" style="border-bottom-width: 0;">
                    <button type="button" class="btn btn-info btn-block" @click="login">登录</button>
                </div>
                <div class="error" v-show="loginInfo.errorShow">{{loginInfo.error}}</div>
            </form>
        </div>
        <div class="login-footer">
            Copyright © 2013-2018 Syscloud, Syscxp 北京悦游信息技术有限公司 ｜ 京ICP备10009882号
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import {APIGetImageCodeMsg, APILogInByAccountMsg} from 'shared/account/api';
    import {LoginService} from 'shared/account/login.service';

    export default {
        name: 'login',
        data() {
            return {
                loginInfo: {
                    isAccount: false,
                    name: '',
                    placeholder: '用户名',
                    password: '',
                    imageCode: '',
                    imageUuid: '',
                    imageBase64: '',
                    error:''
                },
                blurValidate: {
                    name: false,
                    password: false,
                    imageCode: false,
                    errorShow: false,
                }
            }
        },
        methods: {
            checkAccount() {
                this.loginInfo.isAccount = !this.loginInfo.isAccount
                if (this.loginInfo.isAccount) {
                    this.loginInfo.placeholder = '管理员账户'
                } else {
                    this.loginInfo.placeholder = '用户名'
                }
            },
            getCode() {
                const params = new APIGetImageCodeMsg();
                LoginService.getCodes(params).then(data=>{
                    this.loginInfo.imageUuid = data.imageUuid;
                    this.loginInfo.imageBase64 = data.imageCode;
                })
            },
            login() {
                if(this.loginInfo.isAccount){
                    const params = new APILogInByAccountMsg();
                    params.accountName = this.loginInfo.name;
                    params.password = CryptoJS.SHA512(this.loginInfo.password).toString();
                    params.imageCode = this.loginInfo.imageCode;
                    params.imageUuid = this.loginInfo.imageUuid;
                    console.log(params);
                    LoginService.login(params).then(data=>{
                        const inventory = data.inventory;
                        this.$cookies.set('session', inventory.uuid);
                        this.$cookies.set('accountType', inventory.type);
                        this.$cookies.set('accountName', this.loginInfo.name);
                        this.$cookies.set('isAccount', true);
                        this.$cookies.set('sidebar', 'colse');
                        this.$router.push('/home'); // window.location.href = '/home';
                    })
                }else {

                }
            }
        },
        mounted() {
            this.getCode();
        }
    }


</script>

<style lang='stylus' scoped>
</style>