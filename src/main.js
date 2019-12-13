// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/base.css'
import ElementUI from 'element-ui';

import '@/assets/css/element-variables.scss'

// import 'element-ui/lib/theme-chalk/index.css';
// import { Carousel } from 'element-ui';

Vue.use(ElementUI);
// Vue.use(Carousel);

import VueX from 'vuex'
Vue.use(VueX)
var store = new VueX.Store({
  state: {
    user:null
  },
  mutations:{
    setUser(state,user){
      state.user = user;
      localStorage.setItem('user',JSON.stringify(user));
    }
  },
  getters:{
    getUser:function(state){
      if(!state.user){
        state.user = JSON.parse(localStorage.getItem('user'));
      }
      return state.user;
    }
  }

})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
