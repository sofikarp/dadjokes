import "./vue.js"
import Vue from 'vue';
import App from './App.vue';
import './index.html';
import './style.css';

new Vue({
  el: '.container',
  render: h => h(App)
})