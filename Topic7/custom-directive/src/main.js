import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// custom directive

const app = createApp({})

// make v-focus usable in all components
app.directive("size",{
    bind(el, binding, vnode)
    {
        el.style.fontSize = "100px"
    }
})

createApp(App).use(store).use(router).mount('#app')
