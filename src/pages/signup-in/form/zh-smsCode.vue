<template>
    <div class="zh-input zh-input-2">
        <div
            contenteditable
            class="zh-code"
            placeholder="输入6位短信验证码"
            @blur="verCodeBlur"
            @focus="verCodeFocus"
        ></div>
        <a class="zh-getCode">获取短信验证码</a>
    </div>
</template>

<script>
export default {
    methods: {
        verCodeBlur() {
            var phone = document.getElementsByClassName("zh-code");
            if (phone[0].innerHTML == "") {
                phone[0].innerHTML = "请输入短信验证码";
                phone[0].className += " " + "red";
            }
        },
        verCodeFocus() {
            var phone = document.getElementsByClassName("zh-code");
            if (phone[0].innerHTML == "请输入短信验证码") {
                phone[0].innerHTML = "";
                phone[0].classList.remove("red");
            }
        }
    }
};
</script>

<style>
</style>
