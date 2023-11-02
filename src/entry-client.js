import { createApp } from './main-ssr'
import { createWebHistory } from 'vue-router'


async function boot() {
  const { app, router } = await createApp(createWebHistory)
  
  // wait until router is ready before mounting to ensure hydration match
  router.isReady().then(() => {
    app.mount('#app')
  
    console.log('hydrated')
  })
}

boot()