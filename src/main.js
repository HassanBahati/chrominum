import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from '../src/router/index'
import store from './store'

createApp(App).use(router).use(store).mount('#app')

