<template>
    <div class="signup-form-contain">
        <form>
            <phone></phone>
            <smsCode></smsCode>
            <div class="zh-getVoiceCode">
                <a class="zh-getCode-right">接受语音验证码</a>
            </div>
            <div class="zh-signin-button">注册</div>
            <div class="zh-sign-rules">
                <p class="zh-rules-left">
                    注册即代表同意
                    <a>知乎协议</a>
                    <a>隐私保护指引</a>
                </p>
                <p class="zh-rules-right">
                    <a>注册机构号</a>
                </p>
                <div class="clear"></div>
            </div>
        </form>
    </div>
</template>

<script>
import phone from "./form/zh-phone";
import smsCode from "./form/zh-smsCode"
export default {
    components: {
        phone,
        smsCode, // 短信验证码
    },
    methods: {
    }
};
</script>


<style lang="less">
.signup-form-contain {
    margin-top: 20px;
    padding: 0 40px;
}
.zh-input {
    height: 48px;
    line-height: 48px;
    border-bottom: 1px solid #ebebeb;
    font-size: 14px;
    font-weight: 400;
    color: #8590a6;
}
.zh-input-button {
    float: left;
}
.zh-Separator {
    float: left;
    width: 1px;
    height: 22px;
    margin: 24px 12px 0;
    background: #ebebeb;
    transform: translateY(-11px);
}
.zh-phone-text {
    float: left;
    width: calc(100% - 25px - 56px);
    border: none;
    padding: 0;
}
.zh-phone-text:focus {
    outline: none;
}
.zh-phone-text:empty::before {
    content: attr(placeholder);
}
.zh-code {
    float: left;
    width: calc(100% - 100px);
}
.zh-code:focus {
    outline: none;
}
.zh-code:empty::before {
    content: attr(placeholder);
}
.zh-getCode {
    float: right;
    color: #175199;
    cursor: pointer;
}
.zh-getCode:hover {
    color: #8590a6;
}

.zh-getVoiceCode {
    margin-top: 15px;
    font-size: 14px;
    font-weight: 400;
    .zh-getCode-left{
        float: left;
        color: #175199;
        cursor: pointer;
    }
    .zh-getCode-right {
        float: right;
        color: #8590a6;
        cursor: pointer;
    }
}

.zh-signin-button {
    height: 36px;
    line-height: 36px;
    margin-top: 60px;
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
    background-color: #0084ff;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
}

.zh-sign-rules {
    margin-top: 15px;
    color: #8590a6;
    font-size: 13px;
    a {
        color: #8590a6;
        cursor: pointer;
    }
    a:hover {
        color: #859080;
    }
    .zh-rules-left {
        float: left;
    }
    .zh-rules-right {
        float: right;
        a {
            color: #175199;
        }
    }
}
.zh-rule {
    color: red;
}
</style>
