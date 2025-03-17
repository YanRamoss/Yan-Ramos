import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

document.title = "Yan Ramos - Desenvolvimento e Manutenção"

createApp(App).use(router).mount('#app')
