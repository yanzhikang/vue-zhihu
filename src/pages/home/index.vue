<template>
    <div class="test">
        <childdd msg="ppp" @testmsg="test">kkk</childdd>
        <childdd2 items="fasdfas"></childdd2>
    </div>
</template>

<script>
const childdd = () => import("./child");
const childdd2 = () => import("./child2");
export default {
    components: {
        childdd,
        childdd2
    },
    methods:{
        test(s){
            alert(s);
        }
    }
};
</script>

<style lang="less" scoped>
.test {
    border: 1px solid black;
    height: 100px;
}
</style>
