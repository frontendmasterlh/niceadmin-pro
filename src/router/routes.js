/* Layout */
import Layout from '@/views/layout/Index'

/**
 * 404
 */
export const pageError = {
  path: '*',
  name: '404',
  meta: {
    title: '404'
  },
  component: resolve => {
    require(['@/views/error/404'], resolve)
  }
}

/**
 * 登录
 */
export const loginRouter = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
      isLogin: true
    },
    component: resolve => {
      require(['@/views/login/Index'], resolve)
    }
  }
]


/**
 * 主路由
 */
export const appRouter = [
  {
    path: '/',
    redirect: {
      name: 'dashboard'
    },
    meta: {
      title: '主页',
      keepAlive: true
    },
    component: Layout,
    children: [
      {
        path: 'dashboard',
        meta: {
          title: '控制台',
          keepAlive: true
        },
        name: 'dashboard',
        component: resolve => {
          require(['@/views/dashboard/Index'], resolve)
        }
      }
    ]
  },
  {
    path: '/components',
    meta: {
      title: '组件',
      requiresAuth: true
    },
    name: 'components',
    component: Layout,
    children: [
      {
        path: 'layout',
        meta: {
          title: 'Layout布局',
          requiresAuth: true,
          name: 'components_layout'
        },
        component: resolve => { require(['../views/components/layout/Index'], resolve) }
      },
      {
        path: 'button',
        meta: {
          title: '按钮',
          requiresAuth: true,
          name: 'components_button'
        },
        component: resolve => { require(['../views/components/button/Index'], resolve) }
      },
      {
        path: 'nav',
        meta: {
          title: '菜单导航',
          requiresAuth: true,
          name: 'components_nav'
        },
        component: resolve => { require(['../views/components/nav/Index'], resolve) }
      }
    ]
  },
]

export const routes = [pageError, ...loginRouter, ...appRouter]
