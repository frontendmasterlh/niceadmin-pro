import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import VueBus from 'vue-bus';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import myCharts from './utils/charts.js';
import inputSelect from '@/components/common/inputSelect/Index.vue'
import '../theme/index.css';
import 'swiper/swiper-bundle.css'
import '@/assets/style/iconfont.css';
import '@/assets/style/reset.css';
import '@/assets/style/common.css';
import '@/common/element';


Vue.config.productionTip = false;
Vue.use(VueBus);
Vue.use(myCharts);
Vue.use(VueAwesomeSwiper);
Vue.component('inputSelect', inputSelect);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
