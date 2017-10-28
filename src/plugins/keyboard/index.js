import keyboard from './keyboard.vue';

const vueNumberKeyboard = {
    install(Vue, options) {
        Vue.component(keyboard.name, keyboard)
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(vueNumberKeyboard);
}


export default vueNumberKeyboard