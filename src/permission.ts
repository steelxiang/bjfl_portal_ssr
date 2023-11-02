import router from '@/router/index'
//import store from '@/store/index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import defaultSettings from './settings'
import { useLocaleStoreWithOut } from '@/store';

// 移除nprogress右侧进度环
NProgress.configure({ showSpinner: false })

// 白名单
// const whiteList: Array<string> = ['/login', '/home', '/loan']

router.beforeEach((to, from, next) => {
  NProgress.start();
  document.documentElement.scrollTop = 0;

  //console.log(to);
  next();

  // const token = store.getters['user/token']
  // const roles = store.getters['user/roles']
  // if (token) {
  //   if (to.path === '/login') {
  //     next({ path: '/' })
  //   } else {
  //     if (roles && roles.length) {
  //       next()
  //     } else {
  //       try {
  //         store.dispatch('user/getUser').then(() => {
  //           asyncRoutes.map(route => {
  //             router.addRoute(route)
  //             return route
  //           })
  //           next({ ...to, replace: true })
  //         })
  //       } catch (error) {
  //         // console.log('【路由异常】', error)
  //       }
  //     }
  //   }
  // } else {
  //   // 没有token
  //   if (whiteList.indexOf(to.path) !== -1) {
  //     // 在免登录白名单，直接进入
  //     next()
  //   } else {
  //     next(`/login?redirect=${to.fullPath}`) // 否则全部重定向到登录页
  //   }
  // }
})

router.afterEach((to) => {
  // 根据浏览器设置多语言
  let lang: string;
  if(to.params.lang === 'en'){
    lang = 'en-US';
  }else{
    lang = 'zh-CN'
    // if(to.params.lang != ''){
    //   next({path: to.path, params: to.params});
    // }
  }
  useLocaleStoreWithOut().setLocaleInfo(lang);
  document.querySelector('html')?.setAttribute('lang',lang);
  // 设置页面title
  //const lang = useLocaleStoreWithOut().getLocale;
  let title = '';
  if(to.meta.title === '首页' || 'Home' === to.meta.title) {
    title = ''
  }else{
    title = lang =='zh-CN'? to.meta.title + '-': to.meta.titleEn+'-';
  }
  document.title = lang === 'zh-CN'?title +defaultSettings.title:title+ defaultSettings.titleEn;
  const keywords = lang === 'zh-CN'? defaultSettings.keyword: defaultSettings.keywordEn;
  const desc = lang == 'zh-CN'? defaultSettings.desc: defaultSettings.descEn;

  document.querySelector("meta[name='description")?.setAttribute('content',desc);
  document.querySelector("meta[name='keywords']")?.setAttribute('content', keywords);
  NProgress.done()
})
