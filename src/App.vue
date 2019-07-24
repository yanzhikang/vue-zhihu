<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
// const signupin = () => import('./pages/signup-in')
import signupin from '@/pages/signup-in'

export default {
    name: "app",
};
</script>

<style>
#app{
    height: 100%;
}
</style>
