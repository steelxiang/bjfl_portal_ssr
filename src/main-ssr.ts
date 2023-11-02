import { createPinia } from 'pinia'
import { createSSRApp } from 'vue'
import { createRouterPro } from './router'
import { setupI18n } from '@/locale';
import '@/assets/styles/index.scss'
import './permission'
import '@/assets/styles/animate.css';
import '@/assets/font/iconfont.css';
import '@/assets/styles/mobile.scss';
import App from './App.vue'

//createApp(App).use(router).use(createPinia()).use(i18n).mount('#app');


// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export async function createApp(history: any) {
  const app = createSSRApp(App)
  // const { collect } = setup(app)
  const pinia = createPinia()
  app.use(pinia)
  const router = createRouterPro(history)
  app.use(router)
  await setupI18n(app)
  return { app, router }
}