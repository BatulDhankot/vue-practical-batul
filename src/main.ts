import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueAxios from 'vue-axios'
import axios from './plugins/axios'

const app = createApp(App).mount('#app')
app.use(axios, {
  baseUrl: process.env.VITE_API,
})