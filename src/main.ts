import { createApp } from 'vue'
import './stylesheets/main.css'
import './stylesheets/main.scss'
import App from './App.vue'
import {router} from './router'

createApp(App)
  .use(router)
  .mount('#app')
