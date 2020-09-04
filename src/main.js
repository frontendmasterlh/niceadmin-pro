import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import VueBus from 'vue-bus';
import echarts from 'echarts';
import '../theme/index.css';
import '@/assets/style/iconfont.css';
import '@/assets/style/reset.css';
import '@/assets/style/common.css';
import '@/common/element';


Vue.config.productionTip = false;
Vue.use(VueBus)
Vue.prototype.$echarts = echarts
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
