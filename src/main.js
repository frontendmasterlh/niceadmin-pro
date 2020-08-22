import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import '@/common/element';

import '@/assets/styles/reset.styl';
import '@/assets/styles/iconfont.css';
import '@/assets/styles/common.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
