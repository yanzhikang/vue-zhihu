import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
// import Vuex from "vuex"
import store from "./store"; //引入store
import "@/assets/css/reset.css";

Vue.config.productionTip = false;

// Vue.use(Vuex);
Vue.prototype.$store = store;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
