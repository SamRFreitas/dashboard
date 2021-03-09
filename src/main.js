import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/css/tailwind.css'
import '@/assets/css/fonts.css'
import 'animate.css'
// Comentário
const app = createApp(App)
app.use(router).mount('#app')
