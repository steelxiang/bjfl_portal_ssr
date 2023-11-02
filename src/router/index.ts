import { Router, createRouter, createWebHistory, RouteRecordRaw, createMemoryHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: () => import(/* webpackChunkName: "Login" */ '@/views/login/index.vue'),
  //   meta: { title: '登录', hidden: true }
  // },
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [
      {
        name: 'homeEn',
        path: '/:lang?',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
        meta: { title: '首页', titleEn: 'Home',icon: 'el-icon-s-home'}
      },
      // {
      //   name: 'homeEn',
      //   path: '/home/:lang?',
      //   component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
      //   meta: { title: '首页', titleEn: 'Home',icon: 'el-icon-s-home'}
      // },
      {
        name: 'home',
        path: '/',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
        meta: { title: '首页', titleEn: 'Home',icon: 'el-icon-s-home',}
      },
      //{
      //   name: 'report',
      //   path: 'report',
      //   component: () => import(/* webpackChunkName: "home" */ '@/views/report/index.vue'),
      //   meta: { title: '研究报告', icon: 'el-icon-s-home' },
      // },
      // {
      //   path: 'market',
      //   name: 'market',
      //   component: () => import(/* webpackChunkName: "market" */ '@/views/market/index.vue'),
      //   meta: { title: '市场报告' }
      // },
    ]
  },
  {
    path: '/404',
    name: 'error-404',
    component: () => import(/* webpackChunkName: "error404" */ '@/views/error/404.vue'),
    meta: { title: '404 NOT FOUND', hidden: true }
  }
]

export const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/report',
    name: 'report',
    component: Layout,
    redirect: '/report-industries',
    meta: { title: '研究报告' },
    children: [
      {
        name: 'reports',
        path: '/:lang?/report-industries/:category?',
        component: () => import(/* webpackChunkName: "home" */ '@/views/report/index.vue'),
        meta: { title: '研究报告',titleEn: 'Research Reports', icon: 'el-icon-s-home' },
      }, 
      {
        name: 'reportDetail',
        path: '/:lang?/reports/:webTitle?',
        component: () => import(/* webpackChunkName: "about" */ '@/views/report/detail.vue'),
        meta: { title: '研究报告详情',titleEn: 'Research Report Detail',}
      },
    ]
  },
  {
    path: '/market',
    name: 'market',
    component: Layout,
    redirect:'/market',
    meta: { title: '市场报告' },
    children:[{
      name: 'marketIndex',
      path: '/:lang?/market',
      component: () => import(/* webpackChunkName: "market" */ '@/views/market/index.vue'),
      meta: { title: '市场报告' ,titleEn: 'Market Reports', icon: 'el-icon-s-home'},
    },
    // {
    //   path: 'detail',
    //   name: 'marketDetail',
    //   component: () => import(/* webpackChunkName: "about" */ '@/views/market/detail.vue'),
    //   meta: { title: '研究报告详情' }
    // }
    ],
  },
  {
    path: '/new',
    name: 'new',
    component: Layout,
    redirect:'/news',
    meta: { title: '行业资讯' },
    children:[{
      name: 'news',
      path:'/:lang?/news-categories/:marketType?/:marketCategory?',
      component: () => import('@/views/news/index.vue'),
      meta:{ title: '行业资讯',titleEn: 'Industry News'},
    },{
      name: 'newsDetail',
      path: '/:lang?/news/:webTitle?',
      component: () => import('@/views/news/detail.vue'),
      meta: { title: '行业资讯详情', titleEn: 'Industry News Detail'}
    }]
  },
  {
    path: '/aboutUs',
    name: 'aboutUs',
    component: Layout,
    redirect:'/about',
    meta: { title: '关于我们',titleEn: 'About Us' },
    children:[{
      name: 'about',
      path:'/:lang?/about',
      component: () => import('@/views/about/index.vue'),
      meta:{ title: '公司简介',titleEn: 'Company Profile'},
    },{
      name: 'link',
      path:'/:lang?/link',
      component: () => import('@/views/about/link.vue'),
      meta:{ title: '研究方法', titleEn: 'Research Method'},
    },{
      name: 'order',
      path:'/:lang?/order',
      component: () => import('@/views/about/order.vue'),
      meta:{ title: '关于订购',titleEn: 'Order Process'},
    },{
      name: 'term',
      path:'/:lang?/term',
      component: () => import('@/views/about/term.vue'),
      meta:{ title: '相关条款',titleEn: 'Terms and Conditions'},
    }]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
    meta: { hidden: true }
  }
]

routes.push(...asyncRoutes);
const router: Router = createRouter({
  history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
  routes
})

export default router

export const createRouterPro = (history : any) => createRouter({history, routes})