// ============================================
// MAIN.JS - Entry Point Aplikasi
// Dibuat oleh: Siti Nurlaela
// Universitas Dian Nusantara
// ============================================

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)
app.use(router)
app.mount('#app')