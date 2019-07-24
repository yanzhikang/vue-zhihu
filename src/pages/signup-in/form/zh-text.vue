<template>
    <div class="zh-input zh-input-2">
        <div
            contenteditable
            class="zh-code-text"
            placeholder="手机号或邮箱"
            @blur="verCodeBlur"
            @focus="verCodeFocus"
        ></div>
    </div>
</template>
<script>
export default {
    methods: {
        verCodeBlur() {
            var text = document.getElementsByClassName("zh-code-text");
            if (text[0].innerHTML == "") {
                text[0].innerHTML = "请输入手机号或邮箱";
                text[0].className += " " + "red";
            }
        },
        verCodeFocus() {
            var text = document.getElementsByClassName("zh-code-text");
            if (text[0].innerHTML == "请输入手机号或邮箱") {
                text[0].innerHTML = "";
                text[0].classList.remove("red");
            }
        }
    }
};
</script>

<style lang="less" scoped>
.zh-code-text {
    outline: none;
}
.zh-code-text:empty::before {
    content: attr(placeholder);
}
</style>

