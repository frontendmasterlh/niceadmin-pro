import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import VueBus from 'vue-bus';
import echarts from 'echarts';
import '@/common/element';

import '@/assets/styles/reset.styl';
import '@/assets/styles/iconfont.css';
import '@/assets/styles/common.css';

Vue.config.productionTip = false;
Vue.use(VueBus)
Vue.prototype.$echarts = echarts
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
