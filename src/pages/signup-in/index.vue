<template>
    <div class="signup-in">
        <div class="sign-contain">
            <div class="sign-body">
                <logo></logo>
                <router-view></router-view>
                <div v-if="signupOrin == 'in'" class="sign-exchange">
                    已有账号？<span @click="exSignupin">登录</span>
                </div>
                <div v-else class="sign-exchange">
                    没有账号？<span @click="exSignupin">注册</span>
                </div>
            </div>
            <div class="sign-button-download" @click="downApp">下载知乎 App</div>
        </div>
    </div>
</template>

<script>
import logo from './logo'

export default {
    data(){
        return{
            signupOrin: "in"
        }
    },
    components:{
        logo
    },
    mounted(){
    },
    methods:{
        downApp(){
            this.$router.push('/home')
        },
        exSignupin(){
            if(this.signupOrin === "in"){
                this.$router.push('/signup');
                this.signupOrin = "up";
                this.$store.dispatch("sign/invokeExInUp","up");
            }else{
                this.$router.push('/signin');
                this.signupOrin = "in";
                this.$store.dispatch("sign/invokeExInUp","in");
            }
        }
    }
}
</script>

<style lang="less" scoped>
.signup-in{
    height: 100%;
    background: url('/images/login_back.png') no-repeat;
    background-color: #b8e5f8;
    background-size: cover;
    .sign-contain{
        width: 100%;
        position: absolute;
        top: 176px;
        .sign-body{
            width: 432px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 2px;
            box-shadow: 0 1px 3px rgba(26,26,26,.1);
            position: relative;
            .sign-exchange{
                width: 432px;
                line-height: 59px;
                text-align: center;
                font-size: 14px;
                font-weight: 400;
                color: rgb(26, 26, 26);
                background-color: #f6f6f6;
                margin-top: 30px;
                // position: absolute;
                // bottom: 0;
                span{
                    color: #175199;
                    cursor:pointer;
                }
            }
        }
        .sign-button-download{
            width: 432px;
            height: 42px;
            line-height: 42PX;
            text-align: center;
            background-color: #8590a6;
            margin: 30px auto 0;
            color: #ffffff;
            font-size: 14px;
            font-weight: 400;
            border-radius: 3px;
            cursor: pointer;
        }
    }
}

</style>

