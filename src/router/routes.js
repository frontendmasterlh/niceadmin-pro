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
        path: 'grid',
        meta: {
          title: '栅格布局',
          requiresAuth: true,
          name: 'components_grid'
        },
        component: resolve => { require(['../views/components/grid/Index'], resolve) }
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
      },
      {
        path: '/components/form',
        meta: {
          title: '表单',
          requiresAuth: true
        },
        component: resolve => { require(['../views/components/form/Index'], resolve) },
        name: 'form',
        children: [
          {
            path: 'element',
            meta: {
              title: '基础表单',
              requiresAuth: true,
              name: 'components_form_element'
            },
            component: resolve => { require(['../views/components/form/element/Index'], resolve) }
          },
          {
            path: 'group',
            meta: {
              title: '组合表单',
              requiresAuth: true,
              name: 'components_form_group'
            },
            component: resolve => { require(['../views/components/form/group/Index'], resolve) }
          }
        ]
      }
    ]
  }
]

export const routes = [pageError, ...loginRouter, ...appRouter]
