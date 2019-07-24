<template>
    <div class="zh-input zh-input-1">
        <div class="zh-input-button">
            中国 +86
            <span></span>
        </div>
        <span class="zh-Separator">&nbsp;</span>
        <div
            contenteditable
            class="zh-phone-text"
            placeholder="手机号"
            @blur="phoneBlur"
            @focus="phoneFocus"
        ></div>
    </div>
</template>

<script>
export default {
    methods:{
        phoneBlur() {
            var phone = document.getElementsByClassName("zh-phone-text");
            if (phone[0].innerHTML == "") {
                phone[0].innerHTML = "请输入手机号";
                phone[0].className += " " + "red";
            }
        },
        phoneFocus() {
            var phone = document.getElementsByClassName("zh-phone-text");
            if (phone[0].innerHTML == "请输入手机号") {
                phone[0].innerHTML = "";
                phone[0].classList.remove("red");
            }
        },
    }
};
</script>


<style lang="less" scoped>
</style>
