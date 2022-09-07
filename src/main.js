import { createApp } from 'vue'
import App from './App.vue'
// setup bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import pinia from './stores/piniaConfig'// Import
import router from './router/index'

const app = createApp(App)

app.use(pinia);
app.use(router)

app.mount('#app')