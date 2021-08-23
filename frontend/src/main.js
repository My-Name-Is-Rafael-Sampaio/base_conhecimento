import Vue from 'vue';

import App from './App';

import store from './config/store'; /* responsavel por possibilitar o armazenamento temporario e efetuar funções, foi utilizado para o Menu */
import router from './config/router';

import 'font-awesome/css/font-awesome.css';
import './config/bootstrap';
import './config/msgs';
import './config/axios';
import './config/mq';

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')