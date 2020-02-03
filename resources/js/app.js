require('./bootstrap');

window.Vue = require('vue');

Vue.component('Example', require('./components/Example.vue'));

const app = new Vue({
    el: '#app'
});