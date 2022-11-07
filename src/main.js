import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
//import $ from 'jquery'

import "@/assets/css/reset.css";
import "@/assets/css/font-awesome.min.css";
import "@/assets/css/styles.css";
import "@/assets/css/jquery.fancybox.css";
import "@/assets/css/responsive.css";
import "@/assets/css/flexslider.css";


const Vue = createApp(App);

Vue.use(i18n).use(router).mount('#app');

//require("./assets/js/test.js");