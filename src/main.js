/**
 * Created by sailiting on 2018/5/2.
 */
import 'core-js/modules/es6.string.starts-with';
import 'core-js/modules/es6.string.includes';
import 'core-js/modules/es6.string.trim';
import 'core-js/modules/es6.object.assign';
import 'core-js/modules/es6.object.define-property';
import 'core-js/modules/es6.object.keys';
import 'core-js/modules/es7.object.values';
import 'core-js/modules/es6.array.filter';
import 'core-js/modules/es6.array.for-each';
import 'core-js/modules/es6.array.from';
import 'core-js/modules/es7.array.includes';
import 'core-js/modules/es6.array.index-of';
import 'core-js/modules/es6.array.join';
import 'core-js/modules/es6.array.map';
import 'core-js/modules/es6.array.sort';

import Vue from 'vue';
import router from './routes';
import axios from 'axios';
import FastClick from 'fastclick';
import 'element-ui/lib/theme-chalk/index.css';
import './util/interceptor';
import './components/rotate';
import {czyFooter} from './apps/commons/footer';
import {czyHeader} from './apps/commons/header'
import {session, toThousands, decimal, getPy} from './util/util';

FastClick.attach(document.body);
document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px';
window.axios = axios;
window.session = session;
window.getPy = getPy;
Vue.prototype.$axios = axios
Vue.$global = Vue.prototype.$global = {};
Vue.component('czy-footer', czyFooter);
Vue.component('czy-header', czyHeader);
Vue.filter('decimal', decimal);
Vue.filter('toThousands', toThousands);

window._bus = new Vue({
  el: '#app',
  router,
  template: '<div id="app" class="app"><router-view></router-view></div>'
});
