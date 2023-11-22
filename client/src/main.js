import { createApp } from 'vue'
import router from "./router/index.js";
import '@/assets/css/main.scss'
import App from '@/App.vue'

createApp(App)
    .use(router)
    .mount('#app')
