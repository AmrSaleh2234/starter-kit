import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import AuthLayout from '../layouts/AuthLayout.vue'
import AppLayout from '../layouts/AppLayout.vue'
import Page404Layout from '../layouts/Page404Layout.vue'

import RouteViewComponent from '../layouts/RouterBypass.vue'
import UIRoute from '../pages/admin/ui/route'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:catchAll(.*)',
    redirect: { name: 'project' },
  },
  
  {
    
    name: 'admin',
    path: '/admin',
    component: AppLayout,
    children: [
     {
        name: 'project',
        path: 'project',
        component: () => import('../pages/admin/project/index.vue'),
      },
      {
        name: 'COMPETITIVE PESEARCH',
        path: 'COMPETITIVE PESEARCH',
        component: () => import('../pages/admin/competitive/index.vue'),
      },
      {
        name: 'KEYWORD PESEARCH',
        path: 'KEYWORD PESEARCH',
        component: () => import('../pages/admin/keyword/index.vue'),
      },
      {
        name: 'BACKLINK PESEARCH',
        path: 'BACKLINK PESEARCH',
        component: () => import('../pages/admin/backlink/index.vue'),
      },
      {
        name: 'ON PAGE & TECH SEO',
        path: 'ON PAGE & TECH SEO',
        component: () => import('../pages/admin/onpage/index.vue'),
      },
      {
        name: 'ON PAGE & TECH SEO',
        path: 'ON PAGE & TECH SEO',
        component: () => import('../pages/admin/onpage/index.vue'),
      },
      {
        name: 'Account',
        path: 'Account',
        component: () => import('../pages/admin/account/index.vue'),
      },
      {
        name: 'statistics',
        path: 'statistics',
        // component: RouteViewComponent,
        children: [
          {
            name: 'users',
            path: 'users',
            component: () => import('../pages/admin/users.vue'),
            meta: {
              wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Charts',
            },
          },
          {
            name: 'progress-bars',
            path: 'progress-bars',
            component: () => import('../pages/admin/statistics/progress-bars/ProgressBars.vue'),
            meta: {
              wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Progress-Bars',
            },
          },
        ],
      },
      UIRoute,
    ],
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        name: 'login',
        path: 'login',
        component: () => import('../pages/auth/login/Login.vue'),
      },
      {
        name: 'signup',
        path: 'signup',
        component: () => import('../pages/auth/signup/Signup.vue'),
      },
      {
        name: 'recover-password',
        path: 'recover-password',
        component: () => import('../pages/auth/recover-password/RecoverPassword.vue'),
      },
      {
        path: '',
        redirect: { name: 'login' },
      },
    ],
  },
  {
    path: '/404',
    component: Page404Layout,
    children: [
      {
        name: 'not-found-advanced',
        path: 'not-found-advanced',
        component: () => import('../pages/404-pages/VaPageNotFoundSearch.vue'),
      },
      {
        name: 'not-found-simple',
        path: 'not-found-simple',
        component: () => import('../pages/404-pages/VaPageNotFoundSimple.vue'),
      },
      {
        name: 'not-found-custom',
        path: 'not-found-custom',
        component: () => import('../pages/404-pages/VaPageNotFoundCustom.vue'),
      },
      {
        name: 'not-found-large-text',
        path: '/pages/not-found-large-text',
        component: () => import('../pages/404-pages/VaPageNotFoundLargeText.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    // For some reason using documentation example doesn't scroll on page navigation.
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else {
      document.querySelector('.app-layout__page')?.scrollTo(0, 0)
    }
  },
  routes,
})

export default router
