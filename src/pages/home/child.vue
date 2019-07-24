<template>
    <div>
        123456{{msg}}
        <button @click="test">click</button>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ["msg"],
    methods:{
        test(){
            this.$emit("testmsg","zhaoyan")
        }
    }
};
</script>
