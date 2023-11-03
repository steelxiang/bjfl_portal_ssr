import { createApp } from './main-ssr'
import { createWebHistory } from 'vue-router'
import { setupI18n } from '@/locale';

async function boot() {
  const { app, router } = createApp(createWebHistory(""))
  await setupI18n(app)

  // wait until router is ready before mounting to ensure hydration match
  router.isReady().then(() => {
    app.mount('#app')
  
    console.log('hydrated')
  })
}

boot()