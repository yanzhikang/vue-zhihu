import Vue from 'vue';
import Vuex from 'vuex';
import sign from './modules/sign'
Vue.use(Vuex);
const store = new Vuex.Store({
    modules:{
        sign
    }
});
 
export default store;