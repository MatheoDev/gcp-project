// nedding
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import axios from './conf/axios.js'
import './assets/main.css'
// create the app
const app = createApp(App)
// config axios
app.config.globalProperties.$http = axios
store.$axios = axios
// mount the app and using
app
  .use(router)
  .use(store)
  .mount('#app')
