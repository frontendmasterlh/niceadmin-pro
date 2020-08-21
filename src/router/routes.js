/* Layout */
import Layout from '@/views/layout/Index'

/**
 * 404
 */
export const pageError = {
  path: '*',
  name: '404',
  meta: {
    title: '404-您访问的页面不存在'
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
      title: '控制台',
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
  }
]

export const routes = [pageError, ...loginRouter, ...appRouter]
