//sign.js

const state = {
    signupOrin: "in" //sign组件中，当前为注册还是登录 in：注册，up：登录
};
const getters = {
    getSignupOrin(state) {
        if(state.signupOrin === "in"){
            return "注册";
        }else{
            return "登录"
        }
    }
};
const mutations = {
    exInUp(state, item) {
        state.signupOrin = item;
    }
};
const actions = {
    invokeExInUp(context, item) {
        context.commit("exInUp", item);
    }
};
export default {
    namespaced: true, //用于在全局引用此文件里的方法时标识这一个的文件名
    state,
    getters,
    mutations,
    actions
};
