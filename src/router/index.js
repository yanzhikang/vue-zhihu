import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

import sign from "@/pages/signup-in/index.vue";
import signin from "@/pages/signup-in/signin.vue"
import signup from "@/pages/signup-in/signup.vue"
import home from "@/pages/home/index.vue"
export default new Router({
    routes: [
        {
            path:"/",
            redirect:"/signin"
        },
        {
            path:"/",
            component:sign,
            children:[
                {
                    path:'/signin',
                    component:signin
                },
                {
                    path:'/signup',
                    component:signup
                }
            ]
        },
        {
            path: "/home",
            name: "home",
            component: home
        }
    ]
});
