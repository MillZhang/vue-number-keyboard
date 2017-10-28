import Vue from 'vue'
import App from './App.vue'

import vueNumberKeyboard from './plugins/keyboard/index.js'
Vue.use(vueNumberKeyboard);

new Vue({
    el: '#app',
    render: h => h(App)
})