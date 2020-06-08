<template>
    <div class="login">
        <div class="login-con">
            <el-card icon="log-in" title="欢迎登录" :bordered="false">
                <div slot="header" class="clearfix">欢迎登录</div>
                <el-form ref="form" :model="form" :rules="loginRules" class="prefix">
                    <el-form-item prop="username">
                        <el-input prefix-icon="el-icon-user" v-model="form.username"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input prefix-icon="el-icon-unlock" v-model="form.password" type="password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" size="medium" @click="submitForm('form')">登录</el-button>
                    </el-form-item>
                </el-form>
                <p class="login-tip">输入任意用户名和密码即可</p>
            </el-card>
        </div>
    </div>
</template>

<script>
    import {loginRules} from '../common/rules'
    import {login} from '../api/login'
    import {mapMutations} from 'vuex'

    export default {
        components: {},
        data() {
            return {
                form: {
                    username: '',
                    password: ''
                },
                loginRules
            }
        },
        methods: {
            ...mapMutations(['changeLogin']),
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.login()
                    } else {
                        console.log('error submit!!');
                        this.$message.error('错了哦，这是一条错误消息');
                        return false;
                    }
                });
            },
            async login() {
                const res = await login(this.form)
                if (res.status == 200) {
                    console.log(res)
                    this.changeLogin(res)
                    this.$router.push('/')
                }
            }

        }
    }
</script>

<style scoped lang="less">
    .login {
        width: 100%;
        height: 100%;
        background-image: url('../assets/images/login-bg.jpg');
        background-size: cover;
        background-position: center;
        position: relative;
        .prefix/deep/ .el-input__icon {
            font-size: 18px;
            color: #999;
        }
        .prefix/deep/ .el-input--prefix .el-input__inner {
            padding-left: 45px;
        }
        .prefix/deep/ .el-button--medium {
            width: 100%;
        }
        .prefix/deep/ .el-form-item {
            margin-bottom: 22px;
        }
        &-con {
            position: absolute;
            left: calc(50% - 200px);
            top: 50%;
            transform: translateY(-60%);
            width: 400px;

        &-header {
            font-size: 16px;
            font-weight: 300;
            text-align: center;
            padding: 30px 0;
        }
        .login-tip {
            font-size: 10px;
            text-align: center;
            color: #c3c3c3;
        }

    }
}

</style>
