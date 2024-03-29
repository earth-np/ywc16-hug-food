import Vue from 'vue';
import Buefy from 'buefy';
import VueCarousel from 'vue-carousel';
import App from './App.vue';
import router from './router';
import store from './store';
import 'buefy/dist/buefy.css';

Vue.use(VueCarousel);

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
