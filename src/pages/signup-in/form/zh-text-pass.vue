<template>
    <div class="zh-input zh-input-2">
        <div
            contenteditable
            class="zh-code-pass"
            placeholder="密码"
            @blur="verCodeBlur"
            @focus="verCodeFocus"
        ></div>
    </div>
</template>
<script>
export default {
    methods: {
        verCodeBlur() {
            var pass = document.getElementsByClassName("zh-code-pass");
            if (pass[0].innerHTML == "") {
                pass[0].innerHTML = "请输入密码";
                pass[0].className += " " + "red";
            }
        },
        verCodeFocus() {
            var pass = document.getElementsByClassName("zh-code-pass");
            if (pass[0].innerHTML == "请输入密码") {
                pass[0].innerHTML = "";
                pass[0].classList.remove("red");
            }
        }
    }
};
</script>

<style lang="less" scoped>
.zh-code-pass {
    outline: none;
}
.zh-code-pass:empty::before {
    content: attr(placeholder);
}
</style>

